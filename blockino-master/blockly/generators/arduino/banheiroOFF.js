'use strict';

goog.provide('Blockly.Arduino.banheiroOFF');

goog.require('Blockly.Arduino');


Blockly.Arduino['desligar_banheiro'] = function (block) {
    var dropdown_option = block.getFieldValue('Desligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzbanheiro == dropdown_option) // LUZ PRINCIPAL DO BANHEIRO
    {
        Blockly.Arduino.addInclude('ledon1','#define ledbanheiro 10');
        Blockly.Arduino.addSetup('ledon1','pinMode(ledbanheiro, OUTPUT);');
        var code = 'digitalWrite(ledbanheiro, LOW);';
    }
     return code + '\n';
}