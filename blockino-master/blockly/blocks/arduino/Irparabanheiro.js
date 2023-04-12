'use strict';

goog.provide('Blockly.Blocks.Arduino.Irparabanheiro');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['irbanheiro'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir para o banheiro");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };