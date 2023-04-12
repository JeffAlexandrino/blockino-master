'use strict';

goog.provide('Blockly.Arduino.banheiroON');

goog.require('Blockly.Arduino');


Blockly.Arduino['ligar_banheiro'] = function (block) {
    var dropdown_option = block.getFieldValue('ligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzbanheiro == dropdown_option) // LUZ PRINCIPAL DO BANHEIRO
    {
        Blockly.Arduino.addInclude('ledon1','#define ledbanheiro 10');
        Blockly.Arduino.addSetup('ledon1','pinMode(ledbanheiro, OUTPUT);');
        var code = 'digitalWrite(ledbanheiro, HIGH);';
    }
     return code + '\n';
}