'use strict';

goog.provide('Blockly.Arduino.ledquartoOff');

goog.require('Blockly.Arduino');

Blockly.Arduino['led_quarto_off'] = function (block) {
    Blockly.Arduino.addInclude('ledoff3','#define ledquarto 13');
    Blockly.Arduino.addSetup('ledoff3', 'pinMode(ledquarto, OUTPUT);');
    var code = 'digitalWrite(ledquarto, LOW);';
    return code + '\n';
    
}