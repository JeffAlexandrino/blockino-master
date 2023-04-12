'use strict';

goog.provide('Blockly.Blocks.Arduino.ventiladorOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ventilador_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar ventilador");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };