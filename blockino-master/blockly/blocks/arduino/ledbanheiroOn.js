'use strict';

goog.provide('Blockly.Blocks.Arduino.ledbanheiroOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['led_banheiro_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar luz do banheiro");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };