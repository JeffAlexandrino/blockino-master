'use strict';

goog.provide('Blockly.Arduino.DHT11');

goog.require('Blockly.Arduino');


Blockly.Arduino['dht11_value'] = function (block) {
    Blockly.Arduino.addInclude('dht11', '#include <dht.h>');
    Blockly.Arduino.addDeclaration('dht11', 'dht DHT;');
    
    var dropdown_option = block.getFieldValue('option');
    // TODO: Assemble JavaScript into code variable.
    console.log(Blockly.Msg.humidity == dropdown_option);
    
    console.log(dropdown_option);
    var code = ''; 
    if(Blockly.Msg.humidity == dropdown_option){ 
        code = 'DHT.humidity';
    }else{
        code = 'DHT.temperature';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dht11_read'] = function (block) {
    Blockly.Arduino.addInclude('dht11', '#include <dht.h>');
    Blockly.Arduino.addDeclaration('dht11', 'dht DHT;');
    var dropdown_pin = block.getFieldValue('pin');
    return 'DHT.read11(' + dropdown_pin + ');\n';
};