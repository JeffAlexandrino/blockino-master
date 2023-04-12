'use strict';

goog.provide('Blockly.Arduino.aquecedorOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['aquecedor_on'] = function(block) {
    Blockly.Arduino.addInclude('rele11','#define Aquecedor 5');
    Blockly.Arduino.addSetup('rele11','pinMode(Aquecedor, OUTPUT);');
    var code = 'digitalWrite(Aquecedor, HIGH);';
    return code + '\n';
};