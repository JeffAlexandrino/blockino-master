'use strict';

goog.provide('Blockly.Blocks.Arduino.cozinhaOFF');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['desligar_cozinha'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Desligar")
          .appendField(new Blockly.FieldDropdown([["Luz ",Blockly.Msg.luzcozinha],["Fogão",Blockly.Msg.fogaocozinha ]]), "Desligar")
          .appendField("da cozinha");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
