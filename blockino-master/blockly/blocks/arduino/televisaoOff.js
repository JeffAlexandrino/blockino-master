'use strict';

goog.provide('Blockly.Blocks.Arduino.televisaoOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['televisao_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar a televisao");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };