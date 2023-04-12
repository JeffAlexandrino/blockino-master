'use strict';

goog.provide('Blockly.Blocks.Arduino.abajurquartoOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['abajur_quarto_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar abajur do quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };