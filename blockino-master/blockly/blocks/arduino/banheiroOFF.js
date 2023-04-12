'use strict';

goog.provide('Blockly.Blocks.Arduino.banheiroOFF');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['desligar_banheiro'] = {
    init: function() {
        this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Desligar")
          .appendField(new Blockly.FieldDropdown([["Luz ",Blockly.Msg.luzbanheiro ]]), "Desligar")
          .appendField("do banheiro");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  
