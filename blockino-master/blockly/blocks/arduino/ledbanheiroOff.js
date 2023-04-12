'use strict';

goog.provide('Blockly.Blocks.Arduino.ledbanheiroOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['led_banheiro_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar luz do banheiro");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };