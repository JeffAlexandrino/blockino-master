'use strict';

goog.provide('Blockly.Arduino.ledbanheiroOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_banheiro_off'] = function(block) {
    Blockly.Arduino.addInclude('ledoff1','#define ledbanheiro 12');
    Blockly.Arduino.addSetup('ledoff1','pinMode(ledbanheiro, OUTPUT);');
    var code = 'digitalWrite(ledbanheiro, LOW);';
    return code + '\n';
};