'use strict';

goog.provide('Blockly.Blocks.Arduino.ventiladorOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ventilador_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar ventilador");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };