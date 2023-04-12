'use strict';

goog.provide('Blockly.Arduino.salaON');

goog.require('Blockly.Arduino');


Blockly.Arduino['ligar_sala'] = function (block) {
    var dropdown_option = block.getFieldValue('ligar');
    
    console.log(dropdown_option);
    var code = '';
    if (Blockly.Msg.luzsala == dropdown_option) // LUZ PRINCIPAL DA SALA
    {
        Blockly.Arduino.addInclude('led4','#define ledsala 13');
        Blockly.Arduino.addSetup('led4', 'pinMode(ledsala, OUTPUT);');
        var code = 'digitalWrite(ledsala, HIGH);';
    }
    //else if (Blockly.Msg.televisaosala == dropdown_option) // LIGAR TV
    //{
    //    Blockly.Arduino.addInclude('tv11', '#include <Adafruit_NeoPixel.h>\n');
    //    Blockly.Arduino.addDeclaration('tv111', '#define PIN 11\n');
    //    Blockly.Arduino.addDeclaration('tv12', '#define NUMPIXELS 10\n');
    //    Blockly.Arduino.addDeclaration('TV',' Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n ');
    //    Blockly.Arduino.addSetup('tv1123', 'pixels.begin();\n');
    //    Blockly.Arduino.addSetup('tv1123', 'pixels.setBrightness(255);\n');
    //    var code = 'for (int ' + 'i' + ' = 0; ' +
     //   'i' + ' < ' + 'NUMPIXELS' + '; ' +
     //   'i' + '++) {\n' +
     //   ' pixels.setPixelColor(i, pixels.Color(255,0,0));\n' + 
     //   ' pixels.show();\n' +
     //   ' delay(100);}';
   // }
     return code + '\n';
}