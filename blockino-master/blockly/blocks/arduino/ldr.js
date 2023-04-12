'use strict';

goog.provide('Blockly.Blocks.Arduino.lm35');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');



Blockly.Blocks['dia_noite'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Verificar luminosidade");
          this.appendDummyInput()
          .appendField("")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
}