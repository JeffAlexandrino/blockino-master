'use strict';

goog.provide('Blockly.Arduino.lm35On');

goog.require('Blockly.Arduino');

Blockly.Arduino['lm35_quarto'] = function (block) {
    
    Blockly.Arduino.addInclude('lm35','#define tempQuarto A2');
    Blockly.Arduino.addInclude('lm353','float tempC = 0;\n');

    Blockly.Arduino.addSetup('lm35', 'pinMode(tempQuarto, INPUT);');
    Blockly.Arduino.addSetup('s', 'Serial.begin(9600);');

    var code = ('tempC = int((float(analogRead(tempQuarto))*5/(1024.0))/0.01);\n Serial.print("Temperatura = "); \n Serial.println(tempC);');
    
    return code + '\n';
    
}