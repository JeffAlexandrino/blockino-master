'use strict';

goog.provide('Blockly.Arduino.ledcozinhaOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_cozinha_off'] = function(block) {
    Blockly.Arduino.addInclude('ledoff2','#define ledcozinha 11');
    Blockly.Arduino.addSetup('ledoff2', 'pinMode(ledcozinha, OUTPUT);');
    var code = 'digitalWrite(ledcozinha, LOW);';
    return code + '\n';
}