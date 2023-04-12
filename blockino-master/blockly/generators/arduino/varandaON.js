'use strict';

goog.provide('Blockly.Arduino.varandaON');

goog.require('Blockly.Arduino');


Blockly.Arduino['ligar_varanda'] = function (block) {
    var dropdown_option = block.getFieldValue('ligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzvaranda == dropdown_option) // LUZ VARANDA
    {
        Blockly.Arduino.addInclude('led9','#define ledvaranda 9');
        Blockly.Arduino.addSetup('led9', 'pinMode(ledvaranda, OUTPUT);');
        var code = 'digitalWrite(ledvaranda, HIGH);';
    }
     return code + '\n';
}