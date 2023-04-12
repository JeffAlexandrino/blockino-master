'use strict';

goog.provide('Blockly.Arduino.tvcor');

goog.require('Blockly.Arduino');


Blockly.Arduino['ligar_tv'] = function(block) {
    var dropdown_option = block.getFieldValue('Lig');
    
    console.log(dropdown_option);
    var code = ''; 
    if (Blockly.Msg.Vermelho == dropdown_option)
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
        ' pixels.setPixelColor(i, pixels.Color(255,0,0));\n' + 
        ' pixels.show();\n' +
        ' delay(100);}';
    }
    else if (Blockly.Msg.Verde == dropdown_option)
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
        ' pixels.setPixelColor(i, pixels.Color(0,255,0));\n' + 
        ' pixels.show();\n' +
        ' delay(100);}';
    }
    else if (Blockly.Msg.Azul == dropdown_option)
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
        ' pixels.setPixelColor(i, pixels.Color(0,0,255));\n' + 
        ' pixels.show();\n' +
        ' delay(100);}';
    }
    return code + '\n';
}