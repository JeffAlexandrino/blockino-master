'use strict';

goog.provide('Blockly.Blocks.Arduino.ledDHT');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks['led_dht'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Verificar ")
        .appendField(new Blockly.FieldDropdown([["Temperatura",Blockly.Msg.temperature], ["Umidade",Blockly.Msg.humidity]]), "Verificar")
        .appendField("da cozinha");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};