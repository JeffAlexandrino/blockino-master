'use strict';

goog.provide('Blockly.Arduino.quartoOFF');

goog.require('Blockly.Arduino');


Blockly.Arduino['desligar_quarto'] = function (block) {
    var dropdown_option = block.getFieldValue('Desligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzquarto == dropdown_option)  // LUZ PRINCIPAL QUARTO
    {  
        Blockly.Arduino.addInclude('ll1','#define luzquarto 12');
        Blockly.Arduino.addSetup('ll1','pinMode(luzquarto, OUTPUT);');
        var code = 'digitalWrite(luzquarto, LOW);';
    }
    else if(Blockly.Msg.ventiladorquarto == dropdown_option ) // VENTILADOR DO QUARTO
    {
        Blockly.Arduino.addInclude('vent31','#define ventilador 2');
        Blockly.Arduino.addSetup('vent1', 'pinMode(ventilador, OUTPUT);');
        var code = 'digitalWrite(ventilador, LOW);';
    }
    else if (Blockly.Msg.aquecedorquarto == dropdown_option)
    {
          Blockly.Arduino.addInclude('rele11','#define Aquecedor 8');
          Blockly.Arduino.addSetup('rele11','pinMode(Aquecedor, OUTPUT);');
          var code = 'digitalWrite(Aquecedor, HIGH);';
    }
    else if (Blockly.Msg.abajurquarto == dropdown_option)
    {
        Blockly.Arduino.addInclude('abaj1','#define Abajur 4');
        Blockly.Arduino.addSetup('abaj1','pinMode(Abajur, OUTPUT);');
        var code = 'digitalWrite(Abajur, LOW);';
    }
     return code + '\n';
}