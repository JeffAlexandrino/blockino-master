'use strict';

goog.provide('Blockly.Arduino.bonecosala');

goog.require('Blockly.Arduino');


Blockly.Arduino['boneco_sala'] = function(block) {
    Blockly.Arduino.addInclude('boneco3','#define Entrarbanheiro 5');
    Blockly.Arduino.addSetup('boneco3','pinMode(Entrarbanheiro, OUTPUT);');
    var code = 'digitalWrite(Entrarbanheiro, HIGH);';
    return code + '\n';
};