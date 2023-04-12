'use strict';

goog.provide('Blockly.Blocks.Arduino.ledquartoOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['led_quarto_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar luz do quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };