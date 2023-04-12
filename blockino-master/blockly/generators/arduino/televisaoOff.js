'use strict';

goog.provide('Blockly.Arduino.televisaoOff');

goog.require('Blockly.Arduino');


Blockly.Arduino['televisao_off'] = function (block) {
    Blockly.Arduino.addInclude('tv11', '#include <Adafruit_NeoPixel.h>\n');
    Blockly.Arduino.addDeclaration('tv111', '#define PIN 7\n');
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
    
    return code + '\n';

};