'use strict';

goog.provide('Blockly.Blocks.Arduino.cozinhaON');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ligar_cozinha'] = {
  init: function() {
    this.appendDummyInput()
          .appendField("")
    this.appendDummyInput()
      .appendField("Ligar ")
      .appendField(new Blockly.FieldDropdown([["Luz ",Blockly.Msg.luzcozinha],["Fogão",Blockly.Msg.fogaocozinha ]]), "ligar")
      .appendField("da cozinha");
      this.appendDummyInput()
          .appendField("")
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
this.setTooltip("");
this.setHelpUrl("");
}
};
  
