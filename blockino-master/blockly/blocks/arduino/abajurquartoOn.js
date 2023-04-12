'use strict';

goog.provide('Blockly.Blocks.Arduino.abajurquartoOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['abajur_quarto_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar abajur do quarto");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  