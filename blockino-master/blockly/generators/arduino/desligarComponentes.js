'use strict';

goog.provide('Blockly.Arduino.desligarComponentes');

goog.require('Blockly.Arduino');


Blockly.Arduino['desligar_componentes'] = function (block) {
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
    else if (Blockly.Msg.abajurquarto == dropdown_option ) // ABAJUR DO QUARTO
    {
        Blockly.Arduino.addInclude('ledon251','#define abajurquarto 0');
        Blockly.Arduino.addSetup('ledon251','pinMode(abajurquarto, OUTPUT);');
        var code = 'digitalWrite(abajurquarto, LOW);';
    }
    else if (Blockly.Msg.luzbanheiro == dropdown_option) // LUZ PRINCIPAL DO BANHEIRO
    {
        Blockly.Arduino.addInclude('ledon1','#define ledbanheiro 10');
        Blockly.Arduino.addSetup('ledon1','pinMode(ledbanheiro, OUTPUT);');
        var code = 'digitalWrite(ledbanheiro, LOW);';
    }
    else if (Blockly.Msg.luzsala == dropdown_option) // LUZ PRINCIPAL DA SALA
    {
        Blockly.Arduino.addInclude('led4','#define ledsala 13');
        Blockly.Arduino.addSetup('led4', 'pinMode(ledsala, OUTPUT);');
        var code = 'digitalWrite(ledsala, LOW);';
    }
    else if (Blockly.Msg.luzvaranda == dropdown_option) // LUZ VARANDA
    {
        Blockly.Arduino.addInclude('led9','#define ledvaranda 9');
        Blockly.Arduino.addSetup('led9', 'pinMode(ledvaranda, OUTPUT);');
        var code = 'digitalWrite(ledvaranda, LOW);';
    }
    else if (Blockly.Msg.luzcozinha == dropdown_option) // LUZ PRINCIPAL DA COZINHA
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
    else if (Blockly.Msg.televisaosala == dropdown_option) // LIGAR TV
    {
        Blockly.Arduino.addInclude('tv11', '#include <Adafruit_NeoPixel.h>\n');
        Blockly.Arduino.addDeclaration('tv111', '#define PIN 11\n');
        Blockly.Arduino.addDeclaration('tv12', '#define NUMPIXELS 10\n');
        Blockly.Arduino.addDeclaration('TV',' Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n ');
        Blockly.Arduino.addSetup('tv1123', 'pixels.begin();\n');
        Blockly.Arduino.addSetup('tv1123', 'pixels.setBrightness(255);\n');
        var code = 'for (int ' + 'i' + ' = 0; ' +
        'i' + ' < ' + 'NUMPIXELS' + '; ' +
        'i' + '++) {\n' +
        ' pixels.setPixelColor(i, pixels.Color(0,0,0));\n' + 
        ' pixels.show();\n' +
        ' delay(100);}';
    }
    else if (Blockly.Msg.aquecedorquarto == dropdown_option)
    {
          Blockly.Arduino.addInclude('rele11','#define Aquecedor 8');
          Blockly.Arduino.addSetup('rele11','pinMode(Aquecedor, OUTPUT);');
          var code = 'digitalWrite(Aquecedor, HIGH);';
    }
   return code + '\n';
}