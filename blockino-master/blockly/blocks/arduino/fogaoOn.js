'use strict';

goog.provide('Blockly.Blocks.Arduino.fogaoOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['fogao_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar fogão");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };