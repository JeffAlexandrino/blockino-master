'use strict';

goog.provide('Blockly.Arduino.LCD');

goog.require('Blockly.Arduino');


Blockly.Arduino['lcd_clear'] = function (block) {
    var code = 'lcd.clear();\n';
    
    Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal.h>');    
    Blockly.Arduino.addDeclaration('lcd','LiquidCrystal lcd(8, 9, 10, 11, 12, 13);\n');
    Blockly.Arduino.addSetup('lcd', 'lcd.begin(16, 2);\n');
    
    return code;
};

Blockly.Arduino['lcd_escreve'] = function (block) {
    var value_name = Blockly.Arduino.valueToCode(block, 'lcd_string', Blockly.Arduino.ORDER_ATOMIC);
    
    Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal.h>');    
    Blockly.Arduino.addDeclaration('lcd','LiquidCrystal lcd(8, 9, 10, 11, 12, 13);\n');
    Blockly.Arduino.addSetup('lcd', 'lcd.begin(16, 2);\n');
    var code = 'lcd.print(' + value_name + '); \n';
    return code;
};


Blockly.Arduino['lcd_posicao'] = function (block) {
    var value_linha = Blockly.Arduino.valueToCode(block, 'linha', Blockly.Arduino.ORDER_ATOMIC);
    var value_coluna = Blockly.Arduino.valueToCode(block, 'coluna', Blockly.Arduino.ORDER_ATOMIC);
    
    Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal.h>');    
    Blockly.Arduino.addDeclaration('lcd','LiquidCrystal lcd(8, 9, 10, 11, 12, 13);\n');
    Blockly.Arduino.addSetup('lcd', 'lcd.begin(16, 2);\n');
    
    var code = 'lcd.setCursor(' + value_coluna + ',' +  value_linha + '); \n';
    return code;
};

