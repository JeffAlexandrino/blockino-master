'use strict';

goog.provide('Blockly.Blocks.Arduino.televisaoOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['televisao_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar a televisao");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };