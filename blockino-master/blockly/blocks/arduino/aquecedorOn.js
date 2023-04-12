'use strict';

goog.provide('Blockly.Blocks.Arduino.aquecedorOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['aquecedor_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Ligar aquecedor do quarto");
          this.appendDummyInput()
          .appendField("")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  