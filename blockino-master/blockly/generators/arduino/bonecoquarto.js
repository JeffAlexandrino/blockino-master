'use strict';

goog.provide('Blockly.Arduino.bonecoquarto');

goog.require('Blockly.Arduino');


Blockly.Arduino['boneco_quarto'] = function(block) {
    Blockly.Arduino.addInclude('boneco1','#define Entrarquarto 7');
    Blockly.Arduino.addSetup('boneco1','pinMode(Entrarquarto, OUTPUT);');
    var code = 'digitalWrite(Entrarquarto, HIGH);';
    return code + '\n';
};