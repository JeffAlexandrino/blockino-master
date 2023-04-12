'use strict';

goog.provide('Blockly.Blocks.Arduino.bonecocozinha');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['boneco_cozinha'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Entrar na cozinha");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };