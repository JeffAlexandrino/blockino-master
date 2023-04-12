'use strict';

goog.provide('Blockly.Blocks.Arduino.varandaOFF');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['desligar_varanda'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Desligar")
          .appendField(new Blockly.FieldDropdown([["Luz ", Blockly.Msg.luzvaranda]]), "Desligar")
          .appendField("da varanda");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
