'use strict';

goog.provide('Blockly.Blocks.Arduino.ledsalaOn');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['led_sala_on'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ligar luz da sala");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };