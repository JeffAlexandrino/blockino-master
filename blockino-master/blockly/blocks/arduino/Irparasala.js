'use strict';

goog.provide('Blockly.Blocks.Arduino.Irparasala');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['irsala'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir para a sala");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };