'use strict';

goog.provide('Blockly.Arduino.Irparabanheiro');

goog.require('Blockly.Arduino');

Blockly.Arduino['irbanheiro'] = function(block) {
    Blockly.Arduino.addInclude('Bsala1','#define Bsala 6');
    Blockly.Arduino.addInclude('Bcozinha1','#define Bcozinha A5');
    Blockly.Arduino.addInclude('Bquarto1','#define Bquarto A3');
    Blockly.Arduino.addInclude('Bvaranda1','#define Bvarada 5');
    Blockly.Arduino.addInclude('Bbanheiro1','#define Bbanheiro A4');


    Blockly.Arduino.addSetup('Bsala2','pinMode(Bsala, OUTPUT);');
    Blockly.Arduino.addSetup('Bcozinha2','pinMode(Bcozinha, OUTPUT);');
    Blockly.Arduino.addSetup('Bquarto2','pinMode(Bquarto, OUTPUT);');
    Blockly.Arduino.addSetup('Bvaranda2','pinMode(Bvarada, OUTPUT);');
    Blockly.Arduino.addSetup('Bbanheiro2','pinMode(Bbanheiro, OUTPUT);');

    var code = 'digitalWrite(Bsala, LOW); \n digitalWrite(Bcozinha, LOW); \n digitalWrite(Bquarto, LOW); \n digitalWrite(Bvarada, LOW); \n digitalWrite(Bbanheiro, HIGH);';

    return code + '\n';
};