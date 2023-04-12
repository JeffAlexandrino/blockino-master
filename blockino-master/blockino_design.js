/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview JavaScript to configure front end design for Blockino app.
 */
'use strict';

/** Create a namespace for the application. */
var Blockino = Blockino || {};


/** Initialises all the design related JavaScript. */
Blockino.designJsInit = function () {
    Blockino.materializeJsInit();
    Blockino.resizeToggleToolboxBotton();
    Blockino.sketchNameSizeEffect();
    Blockino.DiagramMagnify();
};

/**
 * Setup the diagram to magnify on an event 
 * The be executed on document ready.
 */
Blockino.DiagramMagnify = function(){
    $('#img-zoomed').zoom({on: 'mouseover'});
    
};
/**
 * Initialises all required components from materialize framework.
 * The be executed on document ready.
 */
Blockino.materializeJsInit = function () {
    // Navigation bar
    $('.button-collapse').sideNav({
        menuWidth: 260,
        activationWidth: 70,
        edge: 'left',
        closeOnClick: true});
    // Drop down menus
    $('.dropdown-button').dropdown({hover: false});
    // Overlay content panels using modals (android dialogs)
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .5,
        in_duration: 200,
        out_duration: 250
    });
    // Pop-up tool tips
    $('.tooltipped').tooltip({'delay': 50});
    // Select menus
    $('select').material_select();

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
    );
};

/** Binds the event listeners relevant to the page design. */
Blockino.bindDesignEventListeners = function () {
    // Resize blockly workspace on window resize
    window.addEventListener(
            'resize', Blockino.resizeBlocklyWorkspace, false);
    window.addEventListener(
            'orientationchange', Blockino.resizeBlocklyWorkspace, false);
    // Display/hide the XML load button when the XML collapsible header is clicked
    document.getElementById('xml_collapsible_header').addEventListener(
            'click', Blockino.buttonLoadXmlCodeDisplay);
    // Toggle the content height on click to the IDE output collapsible header
    document.getElementById('ide_output_collapsible_header').addEventListener(
            'click', function () {
                Blockino.contentHeightToggle();
            });
    // Display/hide the additional IDE buttons when mouse over/out of play button
    $('#button_ide_large').mouseenter(function () {
        Blockino.showExtraIdeButtons(true);
    });

    $('#ide_buttons_wrapper').mouseleave(function () {
        Blockino.showExtraIdeButtons(false);
    });


        
    var el = document.getElementById('button_ide_large');
    var propagateOnce = function (e) {
        e.stopPropagation();
        e.preventDefault();
        if(Blockino.ExtraIdeButtonsopened)
            Blockino.ideButtonLargeAction();
    };
    el.addEventListener('click', propagateOnce);
};

/**
 * Displays or hides the 'load textarea xml' button based on the state of the
 * collapsible 'xml_collapsible_body'.
 */
Blockino.buttonLoadXmlCodeDisplay = function () {
    var xmlCollapsibleBody = document.getElementById('xml_collapsible_body');
    // Waiting 400 ms to check status due to the animation delay (300 ms)
    setTimeout(function () {
        if (xmlCollapsibleBody.style.display == 'none') {
            $('#button_load_xml').hide();
        } else {
            $('#button_load_xml').fadeIn('slow');
        }
    }, 400);
};

/**
 * Changes the IDE launch buttons based on the option indicated in the argument.
 * @param {!string} value One of the 3 possible values from the drop down select
 *                        in the settings modal: 'upload', 'verify', or 'open'.
 */
Blockino.changeIdeButtonsDesign = function (value) {
    var buttonLeft = document.getElementById('button_ide_left');
    var iconLeft = document.getElementById('button_ide_left_icon');
    var buttonMiddle = document.getElementById('button_ide_middle');
    var iconMiddle = document.getElementById('button_ide_middle_icon');
    var buttonLarge = document.getElementById('button_ide_large');
    var iconLarge = document.getElementById('button_ide_large_icon');

    if (value === 'upload') {
        buttonLeft.className =
                buttonLeft.className.replace(/arduino_\S+/, 'arduino_green');
        iconLeft.className = 'mdi-action-open-in-browser';
        buttonMiddle.className =
                buttonMiddle.className.replace(/arduino_\S+/, 'arduino_red');
        iconMiddle.className = 'mdi-navigation-check';
        buttonLarge.className =
                buttonLarge.className.replace(/arduino_\S+/, 'arduino_blue');
        iconLarge.className = 'mdi-av-play-arrow';
    } else if (value === 'verify') {
        buttonLeft.className =
                buttonLeft.className.replace(/arduino_\S+/, 'arduino_green');
        iconLeft.className = 'mdi-action-open-in-browser';
        buttonMiddle.className =
                buttonMiddle.className.replace(/arduino_\S+/, 'arduino_blue');
        iconMiddle.className = 'mdi-av-play-arrow';
        buttonLarge.className =
                buttonLarge.className.replace(/arduino_\S+/, 'arduino_red');
        iconLarge.className = 'mdi-navigation-check';
    } else if (value === 'open') {
        buttonLeft.className =
                buttonLeft.className.replace(/arduino_\S+/, 'arduino_red');
        iconLeft.className = 'mdi-navigation-check';
        buttonMiddle.className =
                buttonMiddle.className.replace(/arduino_\S+/, 'arduino_blue');
        iconMiddle.className = 'mdi-av-play-arrow';
        buttonLarge.className =
                buttonLarge.className.replace(/arduino_\S+/, 'arduino_green');
        iconLarge.className = 'mdi-action-open-in-browser';
    }
};

Blockino.ExtraIdeButtonsopened = false;

/**
 * Displays or hides the additional Arduino IDE action buttons.
 * Hide/display effects done with CCS3 transitions on visibility and opacity.
 * @param {!boolean} show Indicates if the extra buttons are to be shown.
 */
Blockino.showExtraIdeButtons = function (show) {
    var IdeButtonLeft = document.getElementById('button_ide_left');
    var IdeButtonMiddle = document.getElementById('button_ide_middle');
    
    if (show) {
        // prevent previously set time-out to hide buttons while trying to show them
        clearTimeout(Blockino.outHoldtimeoutHandle);
        clearTimeout(Blockino.hidetimeoutHandle);
        IdeButtonMiddle.style.visibility = 'visible';
        IdeButtonMiddle.style.opacity = '1';
        Blockino.showtimeoutHandle = setTimeout(function () {
            IdeButtonLeft.style.visibility = 'visible';
            IdeButtonLeft.style.opacity = '1';
            Blockino.ExtraIdeButtonsopened = show;
        }, 50);
    } else {
        // As the mouse out can be accidental, only hide them after a delay
        Blockino.outHoldtimeoutHandle = setTimeout(function () {
            // Prevent show time-out to affect the hiding of the buttons
            clearTimeout(Blockino.showtimeoutHandle);
            IdeButtonLeft.style.visibility = 'hidden';
            IdeButtonLeft.style.opacity = '0';
            Blockino.hidetimeoutHandle = setTimeout(function () {
                IdeButtonMiddle.style.visibility = 'hidden';
                IdeButtonMiddle.style.opacity = '0';
            }, 50);
            Blockino.ExtraIdeButtonsopened = show;
        }, 200);
    }
};

/**
 * Shows or hides the spinner around the large IDE button.
 * @param {!boolean} active True turns ON the spinner, false OFF.
 */
Blockino.largeIdeButtonSpinner = function (active) {
    var spinner = document.getElementById('button_ide_large_spinner');
    var buttonIdeLarge = document.getElementById('button_ide_large');
    var buttonClass = buttonIdeLarge.className;
    if (active) {
        spinner.style.display = 'block';
        buttonIdeLarge.className = buttonIdeLarge.className + ' grey';
    } else {
        spinner.style.display = 'none';
        buttonIdeLarge.className = buttonClass.replace(' grey', '');
    }
};

/**
 * Sets the toolbox HTML element to be display or not and change the visibility
 * button to reflect the new state.
 * When the toolbox is visible it should display the "visibility-off" icon with
 * no background, and the opposite when toolbox is hidden.
 * @param {!boolean} show Indicates if the toolbox should be set visible.
 */
Blockino.displayToolbox = function (show) {
    var toolbox = $('.blocklyToolboxDiv');
    var toolboxTree = $('.blocklyTreeRoot');
    var button = document.getElementById('button_toggle_toolbox');
    var buttonIcon = document.getElementById('button_toggle_toolbox_icon');

    // Because firing multiple clicks can confuse the animation, create an overlay
    // element to stop clicks (due to the materialize framework controlling the
    // event listeners is better to do it this way for easy framework update).
    var elLocation = $('#button_toggle_toolbox').offset();
    jQuery('<div/>', {
        id: 'toolboxButtonScreen',
        css: {
            position: 'fixed',
            top: elLocation.top,
            left: elLocation.left,
            height: $('#button_toggle_toolbox').height(),
            width: $('#button_toggle_toolbox').width(),
            cursor: 'pointer',
            zIndex: 12
        },
    }).appendTo('body');

    var classOn = 'button_toggle_toolbox_on';
    var classOff = 'button_toggle_toolbox_off';
    var visOn = 'mdi-action-visibility';
    var visOff = 'mdi-action-visibility-off';
    if (show === true) {
        toolbox.show();
        button.className = button.className.replace(classOn, classOff);
        buttonIcon.className = visOff;
        toolbox.animate(
                {height: document.getElementById('content_blocks').style.height}, 300,
                function () {
                    toolboxTree.css("overflow-y", "auto");
                    Blockly.fireUiEvent(window, 'resize');
                    $('#toolboxButtonScreen').remove();
                });
    } else {
        toolboxTree.css("overflow-y", "hidden");
        buttonIcon.className = buttonIcon.className.replace(visOff, visOn);
        toolbox.animate({height: 38}, 300, function () {
            button.className = button.className.replace(classOff, classOn);
            toolbox.fadeOut(350, 'linear', function () {
                Blockly.fireUiEvent(window, 'resize');
                setTimeout(function () {
                    toolbox.height(38);
                }, 100);
                $('#toolboxButtonScreen').remove();
            });
        });
    }
};

/**
 * Resizes the button to toggle the toolbox visibility to the width of the
 * toolbox.
 * The toolbox width does not change with workspace width, so safe to do once,
 * but it needs to be done after blockly has been injected.
 */
Blockino.resizeToggleToolboxBotton = function () {
    // As the toolbox inject is asynchronous we need to wait
    if (Blockino.isBlocklyInjected() === false) {
        setTimeout(Blockino.resizeToggleToolboxBotton, 50);
    } else {
        Blockly.fireUiEvent(window, 'resize');
        var button = $('#button_toggle_toolbox');
        // Sets the toolbox toggle button width to that of the toolbox
        if (Blockino.isToolboxVisible() && Blockino.blocklyToolboxWidth()) {
            // For some reason normal set style and getElementById didn't work
            button.width(Blockino.blocklyToolboxWidth());
            button[0].style.display = '';
        }
    }
};

Blockino.setHtmlLang = function () {
    $("#button_save_sketch a").html(Blockly.Msg.saveino + ' <i class="mdi-file-file-download left">');
    $("#menu_load a").html(Blockly.Msg.open + '<i class="mdi-file-file-upload left"></i>');
    $("#menu_save a").html(Blockly.Msg.savexml + '<i class="mdi-file-file-download left"></i>');
    $("#menu_delete a").html(Blockly.Msg.deleteall + '<i class="mdi-action-delete left"></i>');
    $("#menu_language").html(Blockly.Msg.language + '<i class="mdi-action-language left"></i><i class="mdi-navigation-arrow-drop-down right"></i>');
    $("#example").html(Blockly.Msg.examples + '<i class="material-icons left">code</i> <i class="mdi-navigation-arrow-drop-down right">');
   // $("#menu_example_1 a").html(Blockly.Msg.example_1);
   // $("#menu_example_2 a").html(Blockly.Msg.example_2);
   // $("#menu_example_3 a").html(Blockly.Msg.example_3);
   // $("#menu_example_4 a").html(Blockly.Msg.example_4);
   // $("#menu_example_5 a").html(Blockly.Msg.example_5);
    $("#menu_example_6 a").html(Blockly.Msg.example_6); // Guilherme Volpato
    $("#menu_example_7 a").html(Blockly.Msg.example_7); // Guilherme Volpato
    $("#sourcecode").html(Blockly.Msg.sourcecode);
    $("#protoboarddiagram").html(Blockly.Msg.protoboarddiagram);
    $("label[for='command_serial']").html(Blockly.Msg.commands);
    $("input#command_serial").attr("placeholder", Blockly.Msg.entertosend);
    $("#serialmonitor").html(Blockly.Msg.serialmonitor);
    $("#livestreaming").html(Blockly.Msg.livestreaming);
    $("#ideoutput").html(Blockly.Msg.outputIDEArduino);
    $("#button_tour").html(Blockly.Msg.tour + '<i class="mdi-action-help left"></i>');
    $("#button_tutorial a").html(Blockly.Msg.tour + '<i class="mdi-action-help left"></i>');
    $("#button_docs").html(Blockly.Msg.docs + '<i class="material-icons left">description</i>'); 
    Blockino.setupShepherd();

}

/** Resizes the container for the Blockly workspace. */
Blockino.resizeBlocklyWorkspace = function () {
    var contentBlocks = document.getElementById('content_blocks');
    var wrapperPanelSize =
            Blockino.getBBox_(document.getElementById('blocks_panel'));

    contentBlocks.style.top = wrapperPanelSize.y + 'px';
    contentBlocks.style.left = wrapperPanelSize.x + 'px';
    // Height and width need to be set, read back, then set again to
    // compensate for scrollbars.
    contentBlocks.style.height = wrapperPanelSize.height + 'px';
    contentBlocks.style.height =
            (2 * wrapperPanelSize.height - contentBlocks.offsetHeight) + 'px';
    contentBlocks.style.width = wrapperPanelSize.width + 'px';
    contentBlocks.style.width =
            (2 * wrapperPanelSize.width - contentBlocks.offsetWidth) + 'px';
};

/**
 * Sets the text for a "Materialize Modal" (like an android Dialog) to have
 * alert-like HTML messages.
 * @param {!string} title HTML to include in title.
 * @param {!element} body HTML to include in body.
 * @param {boolean=} confirm Indicates if the user is shown and option to just
 *                            'Ok' or 'Ok and cancel'.
 * @param {string=|function=} callback If confirm option is selected this would
 *                                     be the function called when clicked 'OK'.
 */
Blockino.materialAlert = function (title, body, confirm, callback) {
    $('#gen_alert_title').text(title);
    $('#gen_alert_body').text('');
    $('#gen_alert_body').append(body);
    if (confirm == true) {
        $('#gen_alert_cancel_link').css({'display': 'block'});
        if (callback) {
            $('#gen_alert_ok_link').bind('click', callback);
        }
    } else {
        $('#gen_alert_cancel_link').css({'display': 'none'});
        $('#gen_alert_ok_link').unbind('click');
    }
    $('#gen_alert').openModal();
    window.location.hash = '';
};

/** Opens the modal that displays the "not connected to server" message. */
Blockino.openNotConnectedModal = function () {
    $('#not_running_dialog').openModal({
        dismissible: true,
        opacity: .5,
        in_duration: 200,
        out_duration: 250
    });
};

/** Opens the modal that displays the Settings. */
Blockino.openSettingsModal = function () {
    $('#settings_dialog').openModal({
        dismissible: true,
        opacity: .5,
        in_duration: 200,
        out_duration: 250
    });
};

/**
 * Populates the Arduino IDE output content area and triggers the visual
 * highlight to call for the user attention.
 * @param {!element} bodyEl HTML to include into IDE output content area.
 */
Blockino.arduinoIdeOutput = function (bodyEl) {
    var ideOuputContent = document.getElementById('content_ide_output');
    ideOuputContent.innerHTML = '';
    ideOuputContent.appendChild(bodyEl);
    Blockino.highlightIdeOutputHeader();
};

/** Clears the content of the Arduino IDE output element to a default text. */
Blockino.resetIdeOutputContent = function (bodyEl) {
    var ideOuputContent = document.getElementById('content_ide_output');
    ideOuputContent.innerHTML = '<span class="arduino_dialog_out">Esperando pela ' +
            'saída da IDE...</span>';
};

/**
 * Initialises the sketch name input text JavaScript to dynamically adjust its
 * width to the width of its contents.
 */
Blockino.sketchNameSizeEffect = function () {
    var resizeInput = function () {
        $(this).attr('size', $(this).val().length);
    };

    var correctInput = function () {
        // If nothing in the input, add default name
        if ($(this).val() == '') {
            $(this).val(Blockly.Msg.filename);
            $(this).attr('size', 10);
        }
        // Replace all spaces with underscores
        $(this).val($(this).val().replace(/ /g, '_'));
    };

    var sketchNameInput = $('#sketch_name');
    sketchNameInput.val(Blockly.Msg.filename);
    sketchNameInput.attr('size', 10);
    sketchNameInput.keyup(resizeInput).each(resizeInput);
    sketchNameInput.blur(correctInput);
};

/**
 * Creates a highlight animation to the Arduino IDE output header.
 */
Blockino.highlightIdeOutputHeader = function () {
    var header = document.getElementById('ide_output_collapsible_header');
    var h = 'ide_output_header_highlight';
    var n = 'ide_output_header_normal';
    header.className = header.className.replace(/ide_output_header_\S+/, h);
    setTimeout(function () {
        header.className = header.className.replace(/ide_output_header_\S+/, n);
        setTimeout(function () {
            header.className = header.className.replace(/ide_output_header_\S+/, h);
            setTimeout(function () {
                header.className = header.className.replace(/ide_output_header_\S+/, n);
            }, 500);
        }, 500);
    }, 500);
};

/**
 * Controls the height of the block and collapsible content between 2 states
 * using CSS classes.
 * It's state is dependent on the state of the IDE output collapsible. The
 * collapsible functionality from Materialize framework adds the active class,
 * so this class is consulted to shrink or expand the content height.
 */
Blockino.contentHeightToggle = function () {
    var outputHeader = document.getElementById('ide_output_collapsible_header');
    var blocks = document.getElementById('blocks_panel');
    var arduino = document.getElementById('content_arduino');
    var xml = document.getElementById('content_xml');

    // Blockly doesn't resize with CSS3 transitions enabled, so do it manually
    var timerId = setInterval(function () {
        Blockly.fireUiEvent(window, 'resize');
    }, 15);
    setTimeout(function () {
        clearInterval(timerId);
    }, 400);

    // Apart from checking if the output is visible, do not bother to shrink in
    // small screens as the minimum height of the content will kick in and cause
    // the content to be behind the IDE output data anyway.
    if (outputHeader.className.match('active') && $(window).height() > 800) {
        blocks.className = 'content height_transition blocks_panel_small';
        arduino.className = 'content height_transition content_arduino_small';
        xml.className = 'content height_transition content_xml_small';
    } else {
        blocks.className = 'content height_transition blocks_panel_large';
        arduino.className = 'content height_transition content_arduino_large';
        xml.className = 'content height_transition content_xml_large';
    }

    // If the height transition CSS is left then blockly does not resize
    setTimeout(function () {
        blocks.className = blocks.className.replace('height_transition', '');
        arduino.className = arduino.className.replace('height_transition', '');
        xml.className = xml.className.replace('height_transition', '');
    }, 400);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Blockino.getBBox_ = function (element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};
