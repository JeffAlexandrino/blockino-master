'use strict';

goog.provide('Blockly.Arduino.ledbanheiroOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['led_banheiro_on'] = function(block) {
    Blockly.Arduino.addInclude('ledon1','#define ledbanheiro 12');
    Blockly.Arduino.addSetup('ledon1','pinMode(ledbanheiro, OUTPUT);');
    var code = 'digitalWrite(ledbanheiro, HIGH);';
    return code + '\n';
};