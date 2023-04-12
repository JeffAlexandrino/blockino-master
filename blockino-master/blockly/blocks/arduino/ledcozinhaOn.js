'use strict';

goog.provide('Blockly.Blocks.Arduino.ledcozinhaOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['led_cozinha_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar luz da cozinha");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  