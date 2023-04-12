'use strict';

goog.provide('Blockly.Blocks.Arduino.salaON');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ligar_sala'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Ligar")
          .appendField(new Blockly.FieldDropdown([["Luz ",Blockly.Msg.luzsala]]), "ligar")
          .appendField("da sala");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  //.appendField(new Blockly.FieldDropdown([["Luz da sala",Blockly.Msg.luzsala], ["Televisão da sala", Blockly.Msg.televisaosala]]), "ligar");
