'use strict';

goog.provide('Blockly.Blocks.Arduino.varandaON');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ligar_varanda'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Ligar")
          .appendField(new Blockly.FieldDropdown([["Luz ", Blockly.Msg.luzvaranda]]), "ligar")
          .appendField("da varanda");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
