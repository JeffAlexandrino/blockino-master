/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Ajax calls to the Blockino Server python program.
 */
'use strict';

/** Create a name space for the application. */
var BlockinoServer = {};
var addr = 'http://lupa.satc.edu.br';
 
BlockinoServer.myturn = false;

BlockinoServer.initServerComm = function () {
    $.getScript(addr + '/socket.io/socket.io.js', function () {

        console.log("Connected to the lab server");

        BlockinoServer.socket = io.connect(addr);
        BlockinoServer.socket.on("connection established", function (data) {
            BlockinoServer.token = data.token;
            console.log(data);

        });


        BlockinoServer.socket.on('queue status', function (response) {
            Blockino.setupDebugPanel(response);
        });
        BlockinoServer.socket.on('erro', function (response) {
            Blockino.errorHandler(response);
            Blockino.largeIdeButtonSpinner(false);
        });

        BlockinoServer.socket.on('done upload', function (response) {
            Blockino.uploadCodeReturn(response);
        });

        $("#command_serial").on('keyup', function (e) {
            if (e.keyCode === 13) {
                var value = $('#command_serial').val();
                if($('#newline').is(':checked')){
                    value += '\n';
                }
                BlockinoServer.socket.emit('serial monitor', {write: value});
                $("#command_serial").val("");
            }
        });

        $('#baudrate').on('change', function () {
            var value = $('#baudrate').val();
            BlockinoServer.socket.emit('serial setup', {baudrate: value});
        });

        $('#clear_serial_return').click(function () {
            $("#return_serial pre").html("");

        });

        $('#restart_arduino').click(function () {
            BlockinoServer.socket.emit('reset');
        });

        BlockinoServer.socket.on('serial monitor', function (data) {
            if (typeof data.stderr === 'undefined') {
                var parsed = String.fromCharCode.apply(null, new Uint8Array(data.stream))
                parsed = parsed.replace(/\n/g, '<br>');
                $("#return_serial pre").append(parsed);
            } else {
                var dataBack = BlockinoServer.createElementFromJson(data);
                //Blockino.arduinoIdeOutput(dataBack);
                console.log(data.stderr);
            }
        });



        Blockino.largeIdeButtonSpinner(false);


    });
};

BlockinoServer.browserDetection = function () {

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') <= -1) {
            Blockino.materialAlert(
                    'Importante!',
                    'Você está usando o navegador Safari. ' +
                    'Para desfrutar de toda experiência recomendamos que use Firefox, Chrome ou Opera.',
                    false);
        }
    }
};

/**
 * Sends plain data to the ArduBlocklyServer using Ajax.
 * @param {!string} url Requester URL.
 * @param {!string} data Plain text currently used to send Arduino code only.
 * @param {!function} callback Request callback function.
 */
BlockinoServer.ajaxPostPlain = function (url, code, callback) {
    console.log("sending");
    if (BlockinoServer.socket !== "undefined") {
        var data = {
            file: code,
            filename: document.getElementById('sketch_name').value
        };
        console.log(data);
        BlockinoServer.socket.emit('compile', data);
        BlockinoServer.socket.on('done compiling', function (response) {
            callback(response);
        });
    }
};

/** @return {XMLHttpRequest} An XML HTTP Request multi-browser compatible. */
BlockinoServer.createAjaxRequest = function () {
    var request = false;
    try {
        // Firefox, Chrome, IE7+, Opera, Safari
        request = new XMLHttpRequest();
    } catch (e) {
        // IE6 and earlier
        try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                throw 'Your browser does not support AJAX. You will not be able to' +
                        'Upload a sketch';
                request = null;
            }
        }
    }
    return request;
};

/**
 * Creates an HTML element based on the JSON data received from the server.
 * @param {!string} json_data A string containing the JSON data to be parsed.
 * @return {!element} An HTML element, which type depends on the JSON 'element'
 *                    key (currently only text input or drop down).
 */
BlockinoServer.createElementFromJson = function (parsed_json) {
    var element = null;

    if (parsed_json.element == 'text_input') {
        // Simple text input
        element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.setAttribute('value', parsed_json.display_text);
    } else if (parsed_json.element == 'dropdown') {
        // Drop down list of unknown length with a selected item
        element = document.createElement('select');
        element.name = parsed_json.response_type;
        for (var i = 0; i < parsed_json.options.length; i++) {
            var option = document.createElement('option');
            option.value = parsed_json.options[i].value;
            option.text = parsed_json.options[i].display_text;
            // Check selected option and mark it
            if (parsed_json.options[i].value == parsed_json.selected) {
                option.selected = true;
            }
            element.appendChild(option);
        }
    } else if (parsed_json.element == 'div_ide_output') {
        // Formatted text for the Arduino IDE CLI output
        var el_title = document.createElement('h4');
        el_title.innerHTML = Blockly.Msg[parsed_json.conclusion];
        if (parsed_json.success == true) {
            el_title.className = 'arduino_dialog_success';
        } else {
            el_title.className = 'arduino_dialog_failure';
        }

        var el_out = document.createElement('span');
        el_out.className = 'arduino_dialog_out';
        var re = new RegExp("\n", "g");
        el_out.innerHTML = parsed_json.output.replace(re, "<br>");
        element = document.createElement('div');
        element.appendChild(el_title);


        // Only ouput error message if it was not successful
        if (parsed_json.success == false) {
            var el_err = document.createElement('span');
            el_err.className = 'arduino_dialog_out_error';
            el_err.innerHTML = parsed_json.error_output.replace(re, "<br>");
            element.appendChild(el_err);
            console.log(element);
        } else {
            element.appendChild(el_out);
        }
    } else {
        //TODO: Not recognised alert the user/developer somehow
    }
    console.log(element);
    return element;
};




/**
 * Sends the Arduino code to the BlockinoServer to be processed as defined
 * by the settings.
 * @param {!string} code Arduino code in a single string format.
 * @param {!function} callback Callback function for the server request, must
 *                             have one argument to receive the new setting as
 *                             an HTML select element.
 */


BlockinoServer.sendSketchToServer = function (code, callback) {
    if (BlockinoServer.socket !== "undefined") {
        var data = {
            file: code,
            filename: document.getElementById('sketch_name').value
        };
        console.log(data);
        BlockinoServer.socket.emit('compile', data);
        BlockinoServer.socket.on('done compiling', function (response) {
            callback(response);
        });
    }
};

BlockinoServer.uploadSketchToServer = function (code) {
    if (BlockinoServer.socket !== "undefined") {
        var data = {
            file: code,
            filename: document.getElementById('sketch_name').value
        };
        console.log(data);
        BlockinoServer.socket.emit('upload', data);
    }
};

BlockinoServer.openDebugServer = function (callback) {
    if (BlockinoServer.socket !== "undefined") {
        console.log(data);
        BlockinoServer.socket.emit('open debug');
        BlockinoServer.socket.on('queue status', function (response) {
            callback(response);
        });
    }
};


