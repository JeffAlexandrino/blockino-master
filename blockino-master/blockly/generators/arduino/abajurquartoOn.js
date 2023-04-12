'use strict';

goog.provide('Blockly.Arduino.abajurquartoOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['abajur_quarto_on'] = function(block) {
    Blockly.Arduino.addInclude('ledon5','#define abajurquarto 1');
    Blockly.Arduino.addSetup('ledon5','pinMode(abajurquarto, OUTPUT);');
    var code = 'digitalWrite(abajurquarto, HIGH);';
    return code + '\n';
};