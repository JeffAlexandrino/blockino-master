'use strict';

goog.provide('Blockly.Blocks.Arduino.Irparaquarto');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['irquarto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir para o quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };