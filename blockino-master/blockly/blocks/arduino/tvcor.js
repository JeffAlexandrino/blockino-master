'use strict';

goog.provide('Blockly.Blocks.Arduino.tvcot');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['ligar_tv'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Ligar a televisão na cor ")
          .appendField(new Blockly.FieldDropdown([["Vermelha ", Blockly.Msg.Vermelho], ["Verde ", Blockly.Msg.Verde], ["Azul", Blockly.Msg.Azul]]), "Lig");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
