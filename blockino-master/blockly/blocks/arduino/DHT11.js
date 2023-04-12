'use strict';

goog.provide('Blockly.Blocks.Arduino.DHT11');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks.Arduino.DHT11.HUE = 290;

Blockly.Blocks['dht11_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensor DHT11 - valor da")
        .appendField(new Blockly.FieldDropdown([["Temperatura", Blockly.Msg.temperature], ["Umidade", Blockly.Msg.humidity]]), "option");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Arduino.DHT11.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dht11_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ler sensor DHT11 no pino")
        .appendField(new Blockly.FieldDropdown([["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]]), "pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Arduino.DHT11.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};