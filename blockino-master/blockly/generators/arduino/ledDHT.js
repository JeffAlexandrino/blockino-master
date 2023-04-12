'use strict';

goog.provide('Blockly.Arduino.ledDHT');

goog.require('Blockly.Arduino');

Blockly.Arduino['led_dht'] = function (block) {
    Blockly.Arduino.addInclude('dht11', '#include <dht.h>');
    Blockly.Arduino.addDeclaration('dht11', 'dht DHT;');
    Blockly.Arduino.addInclude('tv1231', '#include <MD_MAX72xx.h>');
    Blockly.Arduino.addInclude('tv11', '#include <MD_Parola.h>');
    
    Blockly.Arduino.addInclude('tv123', '#include <SPI.h>\n');
    Blockly.Arduino.addDeclaration('tv111', '#define HARDWARE_TYPE MD_MAX72XX::FC16_HW \n');
    Blockly.Arduino.addDeclaration('tv12', '#define MAX_DEVICES 4\n');
    Blockly.Arduino.addDeclaration('tv13', '#define CLK_PIN   2');
    Blockly.Arduino.addDeclaration('tv14', '#define DATA_PIN  3');
    Blockly.Arduino.addDeclaration('tv15', '#define CS_PIN    4\n');
    Blockly.Arduino.addDeclaration('TV','MD_Parola P = MD_Parola(HARDWARE_TYPE, CS_PIN, MAX_DEVICES);\n ');

    Blockly.Arduino.addSetup('s', 'Serial.begin(9600);');
    Blockly.Arduino.addSetup('p', 'P.begin();');
    var code = ('DHT.read11(A0); \n int t = DHT.temperature; \n String temperatura = "T: "; \n String celcius = "C"; \n temperatura = temperatura + t + celcius; \n P.print(temperatura);');
    return code
}