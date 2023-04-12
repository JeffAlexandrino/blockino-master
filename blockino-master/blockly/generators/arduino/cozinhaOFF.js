'use strict';

goog.provide('Blockly.Arduino.cozinhaOFF');

goog.require('Blockly.Arduino');


Blockly.Arduino['desligar_cozinha'] = function (block) {
    var dropdown_option = block.getFieldValue('Desligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzcozinha == dropdown_option) // LUZ PRINCIPAL DA COZINHA
    {
        Blockly.Arduino.addInclude('ledon2','#define ledcozinha 7');
        Blockly.Arduino.addSetup('ledon2', 'pinMode(ledcozinha, OUTPUT);');
        var code = 'digitalWrite(ledcozinha, LOW);';
    }
    else if (Blockly.Msg.fogaocozinha == dropdown_option) // LIGAR FOGÃO
    {
        Blockly.Arduino.addInclude('fogao','#define fogao 3');
        Blockly.Arduino.addSetup('fogao','pinMode(fogao, OUTPUT);');
        var code = 'digitalWrite(fogao, LOW);';
    }
     return code + '\n';
}