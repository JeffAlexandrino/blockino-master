'use strict';

goog.provide('Blockly.Blocks.Arduino.lm35On');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['lm35_quarto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("");
      this.appendDummyInput()
          .appendField("Temperatura do quarto");
          this.appendDummyInput()
          .appendField("");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };