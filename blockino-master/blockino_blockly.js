/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Blockino JavaScript for the Blockly resources and bindings.
 */
'use strict';

/** Create a namespace for the application. */
var Blockino = Blockino || {};

Blockino.examples = {};

/**
 * Blockly main workspace.
 * @type Blockly.WorkspaceSvg
 */
Blockino.workspace = null;

/**
 * Public variable that indicates if Blockly has been injected.
 * @type {!boolean}
 * @private
 */
Blockino.BLOCKLY_INJECTED_ = false;

/**
 * getScript loads javascript file and callbacks another function when it is loaded.
 * @param {!source} source Path for a javascrip code.
 * @param {!callback} callback Function that will be called after script is loaded .
 */

Blockino.getScript= function(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;
    prior.parentNode.insertBefore(script, prior);

    script.onload = script.onreadystatechange = function (_, isAbort) {
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if (!isAbort) {
                if (callback)
                    callback();
            } 
        }
    };

    script.src = source;
};


/**
 * Injects Blockly into a given HTML element. Reads the toolbox from an XMl
 * file.
 * @param {!Element} blocklyEl Element to inject Blockly into.
 * @param {!string} toolboxPath String containing the toolbox XML file path.
 */

Blockino.injectBlockly = function (blocklyEl, toolboxPath) {

    Blockino.workspace = Blockly.inject(blocklyEl, {
        collapse: true,
        comments: true,
        disable: true,
        media: 'blockly/media/',
        rtl: false,
        scrollbars: true,
        toolbox: Blockino.toolbox_string,
        trashcan: true});
    Blockino.BLOCKLY_INJECTED_ = true;

}

/** @return {!boolean} Returns the state of Blockly injection. */
Blockino.isBlocklyInjected = function() {
  return Blockino.BLOCKLY_INJECTED_;
};

/** Binds the event listeners relevant to Blockly. */
Blockino.bindBlocklyEventListeners = function() {
  // As the toolbox inject is asynchronous we need to wait until done
  if (Blockino.BLOCKLY_INJECTED_ == false) {
    setTimeout(Blockino.bindBlocklyEventListeners, 50);
  } else {
    // All event listener should be bind in this else statement
    // Renders the code and XML for every Blockly workspace event
    Blockino.workspace.addChangeListener(Blockino.renderContent);
  }
};

/**
 * Loads an XML file from the server and adds the blocks into the Blockly
 * workspace.
 * @param {!string} xmlFile XML file path in a reachable server (no local path).
 * @param {!function} callbackFileLoaded Function to be called once the file is
 *                                       loaded.
 * @param {!function} callbackConectonError Function to be called if there is a
 *                                          connection error to the XML server.
 */

Blockino.loadXmlBlockFile = function (xmlFile, callbackFileLoaded, callbackConectonError) {
    
    if (typeof(Blockino.examples[xmlFile]) == 'undefined') {
        Blockino.getScript(xmlFile, function () {
            var success = Blockino.replaceBlocksfromXml(Blockino.examples[xmlFile]);
            callbackFileLoaded(success);
        }, callbackConectonError);
    }else{
        var success = Blockino.replaceBlocksfromXml(Blockino.examples[xmlFile]);
            callbackFileLoaded(success);
    }

};

/**
 * Generates the Arduino code from the Blockly workspace.
 * @return {!string} Arduino code string.
 */
Blockino.generateArduino = function() {
  return Blockly.Arduino.workspaceToCode(Blockino.workspace);
};

/**
 * Generates the XML DOM and returns it as a string.
 * @return {!string} XML code string.
 */
Blockino.generateXml = function() {
  var xmlDom = Blockly.Xml.workspaceToDom(Blockino.workspace);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  return xmlText;
};

/**
 * Parses the XML from its argument input to generate and replace the blocks
 * in the Blockly workspace.
 * @param {!string} blocksXml String of XML code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Blockino.replaceBlocksfromXml = function(blocksXml) {
  var xmlDom = null;
  try {
    xmlDom = Blockly.Xml.textToDom(blocksXml);
  } catch (e) {
    return false;
  }
  Blockino.workspace.clear();
  var sucess = false;
  if (xmlDom) {
    sucess = Blockino.loadBlocksfromXmlDom(xmlDom);
  }
  return sucess;
};

/**
 * Parses the XML from its argument input to generate and add blocks to the
 * Blockly workspace.
 * @param {!string} blocksXmlDom String of XML DOM code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */

Blockino.loadBlocksfromXmlDom = function(blocksXmlDom) {
  try {
    Blockly.Xml.domToWorkspace(Blockino.workspace, blocksXmlDom);
  } catch (e) {
    return false;
  }
  return true;
};

/** Discard all blocks from the workspace. */
Blockino.discardAllBlocks = function() {
  var blockCount = Blockino.workspace.getAllBlocks().length;
  if (blockCount == 1) {
    Blockino.workspace.clear();
    Blockino.renderContent();
  } else if (blockCount > 1) {
    var re = new RegExp("%blocks", "g");
    var msg = Blockly.Msg.deleteblocks_confirm.replace(re,blockCount);
    Blockino.materialAlert(
        Blockly.Msg.deleteall,
        msg,
        true,
        function() {
          Blockino.workspace.clear();
          Blockino.renderContent();
        });
  }
};

/** 
 * Changes the Arduino board profile if different from the currently set one.
 * @param {string} newBoard Name of the new profile to set.
 */
Blockino.changeBlocklyArduinoBoard = function(newBoard) {
  if (Blockly.Arduino.Boards.selected !== Blockly.Arduino.Boards[newBoard]) {
    Blockly.Arduino.Boards.changeBoard(Blockino.workspace, newBoard);
  }
};

/** Closes the toolbox block container sub-menu. */
Blockino.blocklyCloseToolbox = function() {
  Blockino.workspace.toolbox_.flyout_.hide();
};

/** @return {!integer} The width of the blockly workspace toolbox. */
Blockino.blocklyToolboxWidth = function() {
  return Blockino.workspace.toolbox_.width;
};

/** @return {!boolean} Indicates if a block is currently being dragged. */
Blockino.blocklyIsDragging = function() {
  if (Blockly.dragMode_ != 0) {
    return true;
  }
  return false;
};

/** Wraps the blockly 'cut' functionality. */
Blockino.blocklyCut = function() {
  Blockly.copy_(Blockly.selected);
  Blockly.selected.dispose(true, true);
};

/** Wraps the blockly 'copy' functionality. */
Blockino.blocklyCopy = function() {
  Blockly.hideChaff();
  Blockly.copy_(Blockly.selected);
};

/** Wraps the blockly 'paste' functionality. */
Blockino.blocklyPaste = function() {
  if (Blockly.clipboardXml_) {
    Blockly.hideChaff();
    Blockly.clipboardSource_.paste(Blockly.clipboardXml_);
  }
};

/**  Wraps the blockly 'paste' functionality. */
Blockino.blocklyDelete = function() {
  if (Blockly.selected && Blockly.selected.isDeletable()) {
    Blockly.hideChaff();
    Blockly.selected.dispose(true, true);
  }
};

/** @return {XMLHttpRequest} An XML HTTP Request multi-browser compatible. */
Blockino.ajaxRequest = function() {
  var request;
  try {
    // Firefox, Chrome, IE7+, Opera, Safari
    request = new XMLHttpRequest();
  } catch (e) {
    try {
      // IE6 and earlier
      request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        request = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {
        throw 'Your browser does not support AJAX. Cannot load toolbox';
        request = null;
      }
    }
  }
  return request;
};
