'use strict';

goog.provide('Blockly.Arduino.ventiladorOn');

goog.require('Blockly.Arduino');


Blockly.Arduino['ventilador_on'] = function(block) {
    Blockly.Arduino.addInclude('vent','#define ventilador 6');
    Blockly.Arduino.addSetup('vent', 'pinMode(ventilador, OUTPUT);');
    var code = 'digitalWrite(ventilador, HIGH);';
    return code + '\n';
};