'use strict';

goog.provide('Blockly.Arduino.ventiladorOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['ventilador_off'] = function(block) {
    Blockly.Arduino.addInclude('vent','#define ventilador 6');
    Blockly.Arduino.addSetup('vent', 'pinMode(ventilador, OUTPUT);');
    var code = 'digitalWrite(ventilador, LOW);';
    return code + '\n';
};