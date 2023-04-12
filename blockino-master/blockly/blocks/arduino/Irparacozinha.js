'use strict';

goog.provide('Blockly.Blocks.Arduino.Irparacozinha');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ircozinha1'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir para a cozinha");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };