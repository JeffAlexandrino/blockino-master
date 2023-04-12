'use strict';

goog.provide('Blockly.Arduino.tempHumi');

goog.require('Blockly.Arduino');

Blockly.Arduino['temphumi_cozinha'] = function (block) {
    var dropdown_option = block.getFieldValue('Verificar');
    
    Blockly.Arduino.addInclude('dht11', '#include <dht.h>');
    Blockly.Arduino.addDeclaration('dht11', 'dht DHT;');
    console.log(dropdown_option);
    
    Blockly.Arduino.addSetup('set', 'Serial.begin(9600);')

    var code = ' '; 
    if (Blockly.Msg.temperature == dropdown_option)
    {
        var code = ('DHT.read11(A0); \n Serial.print("Temperatura = "); \n Serial.print(DHT.temperature); \n Serial.println("C");');
    }
    else
    {
        var code = ('DHT.read11(A0); \n  Serial.print("Umidade = "); \n Serial.print(DHT.humidity); \n Serial.println("%");');
    }
    return code + '\n';
}
