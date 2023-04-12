'use strict';

goog.provide('Blockly.Blocks.Arduino.bonecosala');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['boneco_sala'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Entrar na sala");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };