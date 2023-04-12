'use strict';

goog.provide('Blockly.Arduino.abajurquartoOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['abajur_quarto_off'] = function(block) {
    Blockly.Arduino.addInclude('ledoff5','#define abajurquarto 1');
    Blockly.Arduino.addSetup('ledoff5','pinMode(abajurquarto, OUTPUT);');
    var code = 'digitalWrite(abajurquarto, LOW);';
    return code + '\n';
};