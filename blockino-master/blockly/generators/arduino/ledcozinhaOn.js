'use strict';

goog.provide('Blockly.Arduino.ledcozinhaOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_cozinha_on'] = function(block) {
    Blockly.Arduino.addInclude('ledon2','#define ledcozinha 11');
    Blockly.Arduino.addSetup('ledon2', 'pinMode(ledcozinha, OUTPUT);');
    var code = 'digitalWrite(ledcozinha, HIGH);';
    return code + '\n';
}