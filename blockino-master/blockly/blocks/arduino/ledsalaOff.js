'use strict';

goog.provide('Blockly.Blocks.Arduino.ledsalaOff');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['led_sala_off'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar luz da sala");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };