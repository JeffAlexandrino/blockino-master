'use strict';

goog.provide('Blockly.Blocks.Arduino.bonecobanheiro');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['boneco_banheiro'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Entrar no banheiro");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };