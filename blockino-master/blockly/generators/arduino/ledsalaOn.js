'use strict';

goog.provide('Blockly.Arduino.ledsalaOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_sala_on'] = function(block) {
    Blockly.Arduino.addInclude('led4','#define ledsala 10');
    Blockly.Arduino.addSetup('led4', 'pinMode(ledsala, OUTPUT);');
    var code = 'digitalWrite(ledsala, HIGH);';
    return code + '\n';
};