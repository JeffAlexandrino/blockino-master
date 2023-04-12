'use strict';

goog.provide('Blockly.Arduino.aquecedorOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['aquecedor_off'] = function(block) {
    Blockly.Arduino.addInclude('rele11','#define Aquecedor 5');
    Blockly.Arduino.addSetup('rele11','pinMode(Aquecedor, OUTPUT);');
    var code = 'digitalWrite(Aquecedor, LOW);';
    return code + '\n';
};