'use strict';

goog.provide('Blockly.Blocks.Arduino.bonecoquarto');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['boneco_quarto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Entrar no quarto");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };