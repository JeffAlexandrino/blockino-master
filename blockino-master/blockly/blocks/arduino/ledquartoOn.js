'use strict';

goog.provide('Blockly.Blocks.Arduino.ledquartoOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['led_quarto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar luz do quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };