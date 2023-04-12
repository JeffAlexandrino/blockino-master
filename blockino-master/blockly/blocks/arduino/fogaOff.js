'use strict';

goog.provide('Blockly.Blocks.Arduino.fogaoOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['fogao_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar fogão");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };