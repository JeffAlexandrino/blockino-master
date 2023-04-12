'use strict';

goog.provide('Blockly.Blocks.Arduino.quartoON');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');
goog.require('Blockly.BlockSvg');


Blockly.Blocks['ligar_quarto'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Ligar")
          .appendField(new Blockly.FieldDropdown([["Luz do quarto",Blockly.Msg.luzquarto], ["Ventilador do quarto",Blockly.Msg.ventiladorquarto], ["Aquecedor do quarto", Blockly.Msg.aquecedorquarto], ["Abajur do quarto", Blockly.Msg.abajurquarto]]), "ligar");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
