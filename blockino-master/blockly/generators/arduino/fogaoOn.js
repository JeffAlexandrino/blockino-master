'use strict';

goog.provide('Blockly.Arduino.fogaoOn');

goog.require('Blockly.Arduino');

Blockly.Arduino['fogao_on'] = function(block) {
    Blockly.Arduino.addInclude('fogao','#define fogao 7');
    Blockly.Arduino.addSetup('fogao','pinMode(fogao, OUTPUT);');
    var code = 'digitalWrite(fogao, HIGH);';
    return code + '\n';
};