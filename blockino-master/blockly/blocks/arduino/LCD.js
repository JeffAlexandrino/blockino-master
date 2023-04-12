'use strict';

goog.provide('Blockly.Blocks.Arduino.LCD');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

Blockly.Blocks.Arduino.LCD.HUE = 100;
Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.clear_display);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "function");
    this.setColour(Blockly.Blocks.Arduino.LCD.HUE);
    this.setTooltip(Blockly.Msg.tooltip_lcd_clear);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lcd_posicao'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.set_cursor_display);
    this.appendValueInput("coluna" ,Blockly.StaticTyping.BlocklyType.NUMBER)
        .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER);
    this.appendDummyInput().appendField(Blockly.Msg.and_row);
    this.appendValueInput("linha",Blockly.StaticTyping.BlocklyType.NUMBER)
        .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Arduino.LCD.HUE);
    this.setTooltip(Blockly.Msg.tooltip_lcd_posicao);
    this.setHelpUrl('https://www.arduino.cc/en/Tutorial/LiquidCrystalSetCursor');
  }
};

Blockly.Blocks['lcd_escreve'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Arduino.LCD.HUE); 
    this.appendDummyInput()
        .appendField(Blockly.Msg.print_display);
    this.appendValueInput("lcd_string",Blockly.StaticTyping.BlocklyType.TEXT)
        .setCheck(null);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.tooltip_lcd_escreve);
    this.setHelpUrl('https://www.arduino.cc/en/Tutorial/HelloWorld');    
  }
};


