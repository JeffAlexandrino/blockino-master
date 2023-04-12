'use strict';

goog.provide('Blockly.Arduino.ldr');

goog.require('Blockly.Arduino');

Blockly.Arduino['dia_noite'] = function(block) {
    Blockly.Arduino.addInclude('ldr','#define dia_noite A1');
    Blockly.Arduino.addInclude('variavel1','int valor =  0;');

    Blockly.Arduino.addSetup('x', 'Serial.begin(9600);');

    var code = (' valor = analogRead(dia_noite); \n if(valor < 400){ \n   Serial.println("Esta de dia"); \n  Serial.println(valor);\n } \n else{ \n   Serial.println("Esta de noite");\n  Serial.println(valor);\n }')
    
    return  code + '\n';
}