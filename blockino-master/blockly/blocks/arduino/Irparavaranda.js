'use strict';

goog.provide('Blockly.Blocks.Arduino.Irparavaranda');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['irvaranda'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir para a varanda");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };