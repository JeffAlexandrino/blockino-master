'use strict';

goog.provide('Blockly.Arduino.fogaoOff');

goog.require('Blockly.Arduino');

Blockly.Arduino['fogao_off'] = function(block) {
    Blockly.Arduino.addInclude('fogaoOff','#define fogao 7');
    Blockly.Arduino.addSetup('fogaoOff','pinMode(fogao, OUTPUT);');
    var code = 'digitalWrite(fogao, LOW);';
    return code + '\n';
};