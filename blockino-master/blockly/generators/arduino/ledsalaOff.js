'use strict';

goog.provide('Blockly.Arduino.ledsalaOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_sala_off'] = function(block) {
    Blockly.Arduino.addInclude('led4','#define ledsala 10');
    Blockly.Arduino.addSetup('led4', 'pinMode(ledsala, OUTPUT);');
    var code = 'digitalWrite(ledsala, LOW);';
    return code + '\n';
};