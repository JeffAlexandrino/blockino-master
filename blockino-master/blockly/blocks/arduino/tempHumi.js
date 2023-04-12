'use strict';

goog.provide('Blockly.Blocks.Arduino.tempHumi');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');



Blockly.Blocks['temphumi_cozinha'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
        .appendField("Verificar ")
        .appendField(new Blockly.FieldDropdown([["Temperatura",Blockly.Msg.temperature], ["Umidade",Blockly.Msg.humidity]]), "Verificar")
        .appendField("da cozinha");
        this.appendDummyInput()
          .appendField("")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};