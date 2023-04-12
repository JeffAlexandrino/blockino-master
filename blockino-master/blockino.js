/* global BlockinoServer */

/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview General javaScript for Arduino app with material design.
 */
'use strict';

/** Create a namespace for the application. */
var Blockino = Blockino || {};

Blockino.toolbox_names = [];

Blockino.shepherd = null;

/** Initialize function for Blockino on page load. */
window.addEventListener('load', function load(event) {
    window.removeEventListener('load', load, false);
    Blockino.setHtmlLang();
    Blockino.injectBlockly(document.getElementById('content_blocks'), 'blockino_toolbox.xml');
    Blockino.designJsInit();
    Blockino.bindDesignEventListeners();
    Blockino.bindActionFunctions();
    Blockino.bindBlocklyEventListeners();
    Blockino.largeIdeButtonSpinner(true);
    BlockinoServer.initServerComm();
    BlockinoServer.browserDetection();
    
});

Blockino.errorHandler = function (response) {
    console.log(response);
};

/** Binds functions to each of the buttons, nav links, and related. */
Blockino.bindActionFunctions = function () {
    // Navigation buttons
    ;
    Blockino.bindClick_('button_save_sketch', Blockino.saveSketchFileAs);

    // Side menu buttons, they also close the side menu
    Blockino.bindClick_('menu_load', function () {
        Blockino.loadUserXmlFile();
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('menu_save', function () {
        Blockino.saveXmlFileAs();
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('menu_delete', function () {
        Blockino.discardAllBlocks();
        $('.button-collapse').sideNav('hide');
    });

  //  Blockino.bindClick_('menu_example_1', function () {
       // Blockino.loadServerXmlFile('examples/blink.js');
       // $('.button-collapse').sideNav('hide');
  //  });
  //  Blockino.bindClick_('menu_example_2', function () {
   //     Blockino.loadServerXmlFile('examples/serial_print_ascii_.js');
   //     $('.button-collapse').sideNav('hide');
   // });
   // Blockino.bindClick_('menu_example_3', function () {
  //      Blockino.loadServerXmlFile('examples/serial_repeat_game.js');
   //     $('.button-collapse').sideNav('hide');
    //});
   // Blockino.bindClick_('menu_example_4', function () {
   //     Blockino.loadServerXmlFile('examples/servo_knob.js');
    //    $('.button-collapse').sideNav('hide');
   // });
    //Blockino.bindClick_('menu_example_5', function () {
    //    Blockino.loadServerXmlFile('examples/hall.js');
    //    $('.button-collapse').sideNav('hide');
   // });
    Blockino.bindClick_('menu_example_6', function () {
        Blockino.loadServerXmlFile('examples/blinkquarto.js');
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('menu_example_7', function () {
        Blockino.loadServerXmlFile('examples/temperaturaeUmi.js');
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('button_ide_middle', function () {
        Blockino.ideButtonMiddleAction();
    });
    Blockino.bindClick_('button_ide_left', function () {
        Blockino.ideButtonLeftAction();
    });

    Blockino.bindClick_('button_toggle_toolbox', Blockino.toogleToolbox);

    Blockino.bindClick_('button_pt', function () {
        Blockino.changeLanguage('pt-br');
        $('.button-collapse').sideNav('hide');

    });
    Blockino.bindClick_('button_en', function () {
        Blockino.changeLanguage('en');
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('button_fr', function () {
        Blockino.changeLanguage('fr');
        $('.button-collapse').sideNav('hide');
    });
    Blockino.bindClick_('button_es', function () {
        Blockino.changeLanguage('es');
        $('.button-collapse').sideNav('hide');
    });

    Blockino.bindClick_('button_tutorial', function () {
        $('.button-collapse').sideNav('hide');
        Blockino.startTour();
    });
    Blockino.bindClick_('button_tour', function () {
        $('.button-collapse').sideNav('hide');
        Blockino.startTour();
    });
    

};

Blockino.startTour = function () {
   if(Blockino.shepherd != null){
       Blockino.shepherd.start();
   }

};

Blockino.changeLanguage = function (lang) {
    Blockly.Msg = [];
    $.getScript('blockly/msg/js/' + lang + '.js', function () {
        console.log(lang + ' loaded');
        Blockino.setHtmlLang();
        Blockino.sketchNameSizeEffect();
        Blockino.loadToolboxNames();
    });
};

Blockino.loadToolboxNames = function () {
    for (var i = 0; i < Blockino.toolbox_names.length; i++) {
        $('span.blocklyTreeLabel')[i + 1].innerHTML = Blockly.Msg[Blockino.toolbox_names[i]];
    }

};

/** Sets the Blockino server IDE setting to upload and sends the code. */
Blockino.ideSendUpload = function () {
    // Check if this is the currently selected option before edit sever setting
    if (Blockino.ideButtonLargeAction !== Blockino.ideSendUpload) {
        Blockino.showExtraIdeButtons(false);
        Blockino.setIdeSettings(null, 'upload');
    }
    console.log("uploading");
    Materialize.toast(Blockly.Msg.requesting, 10000);
    Blockino.resetIdeOutputContent();
    Blockino.uploadCode();
};

/** Sets the Blockino server IDE setting to verify and sends the code. */
Blockino.ideSendVerify = function () {
    // Check if this is the currently selected option before edit sever setting
    if (Blockino.ideButtonLargeAction !== Blockino.ideSendVerify) {
        Blockino.showExtraIdeButtons(false);
        Blockino.setIdeSettings(null, 'verify');
    }
    console.log("verifying");
    Materialize.toast(Blockly.Msg.verifying, 5000);
    Blockino.resetIdeOutputContent();
    Blockino.sendCode();
};




/** Sets the Blockino server IDE setting to open and sends the code. */
Blockino.ideSendOpen = function () {
    // Check if this is the currently selected option before edit sever setting
    if (Blockino.ideButtonLargeAction !== Blockino.ideSendOpen) {
        Blockino.showExtraIdeButtons(false);
        Blockino.setIdeSettings(null, 'open');
    }

    if ($("#painelblockly").hasClass('l12')) {

        $("#painelblockly").removeClass('l12');
        $("#painelblockly").addClass('l8');
        $("#codeDiv").show();
        if (BlockinoServer.myturn)
            $("#debugDiv").show();

    } else {
        $("#painelblockly").removeClass('l8');
        $("#painelblockly").addClass('l12');
        $("#codeDiv").hide();
        $("#debugDiv").hide();

    }
    Blockino.displayToolbox(true);
};

/** Function bound to the left IDE button, to be changed based on settings. */
Blockino.ideButtonLargeAction = Blockino.ideSendVerify;

/** Function bound to the middle IDE button, to be changed based on settings. */
Blockino.ideButtonMiddleAction = Blockino.ideSendUpload;

/** Function bound to the large IDE button, to be changed based on settings. */
Blockino.ideButtonLeftAction = Blockino.ideSendOpen;

/** Initialises the IDE buttons with the default option from the server. */


/**
 * Changes the IDE launch buttons based on the option indicated in the argument.
 * @param {!string} value One of the 3 possible values from the drop down select
 *                        in the settings modal: 'upload', 'verify', or 'open'.
 */
Blockino.changeIdeButtons = function (value) {
    if (value === 'upload') {
        Blockino.changeIdeButtonsDesign(value);
        Blockino.ideButtonLeftAction = Blockino.ideSendOpen;
        Blockino.ideButtonMiddleAction = Blockino.ideSendVerify;
        Blockino.ideButtonLargeAction = Blockino.ideSendUpload;

    } else if (value === 'verify') {
        Blockino.changeIdeButtonsDesign(value);
        Blockino.ideButtonLeftAction = Blockino.ideSendOpen;
        Blockino.ideButtonMiddleAction = Blockino.ideSendUpload;
        Blockino.ideButtonLargeAction = Blockino.ideSendVerify;
    } else if (value === 'open') {
        Blockino.changeIdeButtonsDesign(value);
        Blockino.ideButtonLeftAction = Blockino.ideSendVerify;
        Blockino.ideButtonMiddleAction = Blockino.ideSendUpload;
        Blockino.ideButtonLargeAction = Blockino.ideSendOpen;
    }
};

/**
 * Loads an XML file from the server and adds the blocks into the Blockly
 * workspace.
 * @param {!string} xmlFile Server location of the XML file to load.
 */
Blockino.loadServerXmlFile = function (xmlFile) {
    // The loadXmlBlockFile loads the file asynchronously and needs a callback
    var loadXmlCallback = function (sucess) {
        if (sucess) {
            Blockino.renderContent();
        } else {
            Blockino.materialAlert(
                    'XML inválido',
                    'O arquivo XML não foi convertido em blocos com sucesso. ' +
                    'Por favor, rever o código XML e tentar novamente.',
                    false);
        }
    };
    var callbackConnectionError = function () {
        Blockino.openNotConnectedModal();
    };
    Blockino.loadXmlBlockFile(
            xmlFile, loadXmlCallback, callbackConnectionError);
};

/**
 * Loads an XML file from the users file system and adds the blocks into the
 * Blockly workspace.
 */
Blockino.loadUserXmlFile = function () {
    // Create event listener function
    var parseInputXMLfile = function (e) {
        var files = e.target.files;
        var reader = new FileReader();
        reader.onload = function () {
            var success = Blockino.replaceBlocksfromXml(reader.result);
            if (success) {
                Blockino.renderContent();
            } else {
                Blockino.materialAlert(
                        'XML inválido',
                        'O arquivo XML não foi convertido em blocos com sucesso. ' +
                        'Por favor, rever o código XML e tentar novamente.',
                        false);
            }
        };
        reader.readAsText(files[0]);
    };
    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile == null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';

        var selectFileWrapperDom = document.createElement('DIV');
        selectFileWrapperDom.id = 'select_file_wrapper';
        selectFileWrapperDom.style.display = 'none';
        selectFileWrapperDom.appendChild(selectFileDom);

        document.body.appendChild(selectFileWrapperDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLfile, false);
    }
    selectFile.click();
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Blockino.saveXmlFileAs = function () {
    var xmlName = document.getElementById('sketch_name').value;
    var blob = new Blob(
            [Blockino.generateXml()],
            {type: 'text/plain;charset=utf-8'});
    saveAs(blob, xmlName + '.xml');
};

/**
 * Creates an Arduino Sketch file containing the Arduino code generated from
 * the Blockly workspace and prompts the users to save it into their local file
 * system.
 */
Blockino.saveSketchFileAs = function () {
    var sketchName = document.getElementById('sketch_name').value;
    var blob = new Blob(
            [Blockino.generateArduino()],
            {type: 'text/plain;charset=utf-8'});
    saveAs(blob, sketchName + '.ino');
};

/** Prepares and opens the settings modal. */
Blockino.openSettings = function () {
    Blockino.populateSettings();
    Blockino.openSettingsModal();
};

/**
 * Retrieves the Settings from BlockinoServer and populates the form data
 * for the Settings modal dialog.
 */
Blockino.populateSettings = function () {
    BlockinoServer.requestCompilerLocation(
            Blockino.setCompilerLocationHtml);
    BlockinoServer.requestSketchLocation(Blockino.setSketchLocationHtml);
    BlockinoServer.requestArduinoBoards(Blockino.setArduinoBoardsHtml);
    BlockinoServer.requestSerialPorts(Blockino.setSerialPortsHtml);
    BlockinoServer.requestIdeOptions(Blockino.setIdeHtml);
};

/**
 * Sets the compiler location form data retrieve from an updated element.
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.setCompilerLocationHtml = function (jsonResponse) {
    if (jsonResponse != null) {
        var newEl = BlockinoServer.createElementFromJson(jsonResponse);
        var compLocIp = document.getElementById('settings_compiler_location');
        if (compLocIp != null) {
            compLocIp.value = newEl.value;
        }
    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

/**
 * Sets the sketch location form data retrieve from an updated element.
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.setSketchLocationHtml = function (jsonResponse) {
    if (jsonResponse != null) {
        var newEl = BlockinoServer.createElementFromJson(jsonResponse);
        var sketchLocIp = document.getElementById('settings_sketch_location');
        if (sketchLocIp != null) {
            sketchLocIp.value = newEl.value;
        }
    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

/**
 * Replaces the Arduino Boards form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.setArduinoBoardsHtml = function (jsonResponse) {
    if (jsonResponse != null) {
        var newEl = BlockinoServer.createElementFromJson(jsonResponse);
        var boardDropdown = document.getElementById('board');
        if (boardDropdown != null) {
            // Restarting the select elements built by materialize
            $('select').material_select('destroy');
            newEl.name = 'settings_board';
            newEl.id = 'board';
            newEl.onchange = Blockino.setBoard;
            boardDropdown.parentNode.replaceChild(newEl, boardDropdown);
            // Refresh the materialize select menus
            $('select').material_select();
        }
    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

/**
 * Sets the Arduino Board type with the selected user input from the drop down.
 */
Blockino.setBoard = function () {
    var el = document.getElementById('board');
    var boardValue = el.options[el.selectedIndex].value;
    //TODO: check how BlockinoServer deals with invalid data and sanitise
    BlockinoServer.setArduinoBoard(
            boardValue, Blockino.setArduinoBoardsHtml);
    Blockino.changeBlocklyArduinoBoard(boardValue.toLowerCase());
};

/**
 * Replaces the Serial Port form data with a new HTMl element.
 * Ensures there is a change listener to call 'setSerialPort' function
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.setSerialPortsHtml = function (jsonResponse) {
    if (jsonResponse !== null) {
        var newEl = BlockinoServer.createElementFromJson(jsonResponse);
        var serialDropdown = document.getElementById('serial_port');
        if (serialDropdown !== null) {
            // Restarting the select elements built by materialize
            $('select').material_select('destroy');
            newEl.name = 'settings_serial';
            newEl.id = 'serial_port';
            newEl.onchange = Blockino.setSerial;
            serialDropdown.parentNode.replaceChild(newEl, serialDropdown);
            // Refresh the materialize select menus
            $('select').material_select();
        }
    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

/**
 * Sets the Serial Port with the selected user input from the drop down.
 */
Blockino.setSerial = function () {
    var el = document.getElementById('serial_port');
    var serialValue = el.options[el.selectedIndex].value;
    //TODO: check how BlockinoServer deals with invalid data and sanitise
    BlockinoServer.setSerialPort(
            serialValue, Blockino.setSerialPortsHtml);
};




Blockino.Collapsable = function (id, open) {

    if (open == true) {
        $("#" + id + " li").first().addClass('active');
        $("#" + id + " div.collapsible-header").first().addClass('active');
        $("#" + id + " div.collapsible-body").first().addClass('active');
        $("#" + id + " div.collapsible-body").first().show();

    } else {
        $("#" + id + " li").first().removeClass('active');
        $("#" + id + " div.collapsible-header").first().removeClass('active');
        $("#" + id + " div.collapsible-body").first().removeClass('active');
        $("#" + id + " div.collapsible-body").first().hide();
    }

}


Blockino.setupDebugPanel = function (jsonParsed) {
    BlockinoServer.myturn = jsonParsed.myturn;
    if (jsonParsed.myturn == true) {
        $("#debugDiv img").attr('src', jsonParsed.video);
        Blockino.Collapsable('codeDiv', false);
        $("#debugDiv").show();
        Materialize.toast(Blockly.Msg[jsonParsed.output], jsonParsed.timeslice);
        $("#command_serial").val("");
        $("#codeDiv .active").removeClass('active');

    } else {
        $("#debugDiv").hide();
        $("#debugDiv img").attr('src', '');
        Blockino.Collapsable('codeDiv', true);
        Materialize.toast(Blockly.Msg[jsonParsed.output], 15000);

    }

    Blockino.openDebugReturn();
}

/**
 * Replaces IDE options form data with a new HTMl element.
 * Ensures there is a change listener to call 'setIdeSettings' function
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.setIdeHtml = function (jsonResponse) {
    if (jsonResponse != null) {
        var newEl = BlockinoServer.createElementFromJson(jsonResponse);
        var ideDropdown = document.getElementById('ide_settings');
        if (ideDropdown != null) {
            // Restarting the select elements built by materialize
            $('select').material_select('destroy');
            newEl.name = 'settings_ide';
            newEl.id = 'ide_settings';
            newEl.onchange = Blockino.setIdeSettings;
            ideDropdown.parentNode.replaceChild(newEl, ideDropdown);
            // Refresh the materialize select menus
            $('select').material_select();
        }
    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

/**
 * Sets the IDE settings data with the selected user input from the drop down.
 * @param {Event} e Event that triggered this function call. Required for link
 *                  it to the listeners, but not used.
 * @param {string} preset A value to set the IDE settings bypassing the drop
 *                        down selected value. Valid data: 'upload', 'verify',
 *                        or 'open'.
 */
Blockino.setIdeSettings = function (e, preset) {
    if (preset !== undefined) {
        var ideValue = preset;
    } else {
        var el = document.getElementById('ide_settings');
        var ideValue = el.options[el.selectedIndex].value;
    }
    Blockino.changeIdeButtons(ideValue);
    //TODO: check how BlockinoServer deals with invalid data and sanitise here
};

/**
 * Send the Arduino Code to the BlockinoServer to process.
 * Shows a loader around the button, blocking it (unblocked upon received
 * message from server).
 */
Blockino.sendCode = function () {
    Blockino.largeIdeButtonSpinner(true);
    BlockinoServer.sendSketchToServer(
            Blockino.generateArduino(), Blockino.sendCodeReturn);
};

Blockino.uploadCode = function () {
    Blockino.largeIdeButtonSpinner(true);
    BlockinoServer.uploadSketchToServer(Blockino.generateArduino());
};


Blockino.openDebug = function () {
    Blockino.largeIdeButtonSpinner(true);
    BlockinoServer.openDebugServer(Blockino.setupDebugPanel);
};

/**
 * Receives the IDE data back to be displayed and stops spinner.
 * @param {element} jsonResponse JSON data coming back from the server.
 */
Blockino.sendCodeReturn = function (jsonResponse) {
    Blockino.largeIdeButtonSpinner(false);
    if (jsonResponse != null) {
        var dataBack = BlockinoServer.createElementFromJson(jsonResponse);
        Blockino.arduinoIdeOutput(dataBack);
        Blockino.changeIdeButtons('upload');

    } else {
        Blockino.openNotConnectedModal();
    }
};

Blockino.uploadCodeReturn = function (jsonResponse) {
    Blockino.largeIdeButtonSpinner(false);
    if (jsonResponse != null) {
        var dataBack = BlockinoServer.createElementFromJson(jsonResponse);
        Blockino.arduinoIdeOutput(dataBack);
        Blockino.changeIdeButtons('verify');

    } else {
        // If the element is Null, then Blockino server is not running
        Blockino.openNotConnectedModal();
    }
};

Blockino.openDebugReturn = function () {
    Blockino.largeIdeButtonSpinner(false);
    Blockino.changeIdeButtons('verify');

};

/** Populate the workspace blocks with the XML written in the XML text area. */
Blockino.XmlTextareaToBlocks = function () {
    var success = Blockino.replaceBlocksfromXml(
            document.getElementById('content_xml').value);
    if (success) {
        Blockino.renderContent();
    } else {
        Blockino.materialAlert(
                'XML inválido',
                'O arquivo XML não foi convertido em blocos com sucesso. ' +
                'Por favor, rever o código XML e tentar novamente.',
                false);
    }
};

/**
 * Private variable to save the previous version of the Arduino Code.
 * @type {!String}
 * @private
 */
Blockino.PREVIOUS_ARDUINO_CODE_ =
        'void setup() {\n\n}\n\n\nvoid loop() {\n\n}';

/**
 * Populate the Arduino Code and Blocks XML panels with content generated from
 * the blocks.
 */
Blockino.renderContent = function () {
    // Only regenerate the code if a block is not being dragged
    if (Blockino.blocklyIsDragging()) {
        return;
    }

    // Render Arduino Code with latest change highlight and syntax highlighting
    var arduinoCode = Blockino.generateArduino();
    if (arduinoCode !== Blockino.PREVIOUS_ARDUINO_CODE_) {
        var arduinoContent = document.getElementById('content_arduino');
        // Sets content in case of no pretify and serves as a fast way to scape html
        arduinoContent.textContent = arduinoCode;
        arduinoCode = arduinoContent.innerHTML;
        if (typeof prettyPrintOne == 'function') {
            var diff = JsDiff.diffWords(Blockino.PREVIOUS_ARDUINO_CODE_,
                    arduinoCode);
            var resultStringArray = [];
            for (var i = 0; i < diff.length; i++) {
                if (diff[i].added) {
                    resultStringArray.push(
                            '<span class="code_highlight_new">' + diff[i].value + '</span>');
                } else if (!diff[i].removed) {
                    resultStringArray.push(diff[i].value);
                }
            }
            var codeHtml = prettyPrintOne(resultStringArray.join(''), 'cpp', false);
            arduinoContent.innerHTML = codeHtml;
        }
        Blockino.PREVIOUS_ARDUINO_CODE_ = arduinoCode;
    }

    // Generate plain XML into element
    var xmlContent = document.getElementById('content_xml');
    xmlContent.value = Blockino.generateXml();
};

/**
 * Private variable to indicate if the toolbox is meant to be shown.
 * @type {!boolean}
 * @private
 */
Blockino.TOOLBAR_SHOWING_ = true;

/**
 * Toggles the blockly toolbox and the Blockino toolbox button On and Off.
 * Uses namespace member variable TOOLBAR_SHOWING_ to toggle state.
 */
Blockino.toogleToolbox = function () {
    if (Blockino.TOOLBAR_SHOWING_) {
        Blockino.blocklyCloseToolbox();
        Blockino.displayToolbox(false);
    } else {
        Blockino.displayToolbox(true);
    }
    Blockino.TOOLBAR_SHOWING_ = !Blockino.TOOLBAR_SHOWING_;
};

/**
 * Returns a boolean indicating if the toolbox is currently visible.
 * @return {boolean} Indicates if the toolbox is currently visible.
 */
Blockino.isToolboxVisible = function () {
    return Blockino.TOOLBAR_SHOWING_;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!function} func Event handler to bind.
 * @private
 */
Blockino.bindClick_ = function (el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    // Need to ensure both, touch and click, events don't fire for the same thing
    var propagateOnce = function (e) {
        e.stopPropagation();
        e.preventDefault();
        func();
    };
    el.addEventListener('ontouchend', propagateOnce);
    el.addEventListener('click', propagateOnce);
};

/**
 * Populate the currently selected panel with content generated from the blocks.
 */
Blockino.functionNotImplemented = function () {
    Materialize.toast('Função não implementada ainda', 4000);
};
