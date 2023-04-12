'use strict';

goog.provide('Blockly.Blocks.Arduino.aquecedorOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['aquecedor_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar aquecedor do quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };