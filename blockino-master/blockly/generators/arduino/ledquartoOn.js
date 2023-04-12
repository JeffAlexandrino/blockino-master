'use strict';

goog.provide('Blockly.Arduino.ledquartoOn');

goog.require('Blockly.Arduino');

Blockly.Arduino['led_quarto'] = function (block) {
    Blockly.Arduino.addInclude('ledon3','#define ledquarto 13');
    Blockly.Arduino.addSetup('ledon3', 'pinMode(ledquarto, OUTPUT);');
    var code = 'digitalWrite(ledquarto, HIGH);';
    return code + '\n';
    
}