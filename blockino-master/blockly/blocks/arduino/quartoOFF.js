'use strict';

goog.provide('Blockly.Blocks.Arduino.quartoOFF');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['desligar_quarto'] = {
  /**
   * Block for colour picker.
   * @this Blockly.Block
   */
  
    init: function() {
      this.appendDummyInput()
          .appendField("")
      this.appendDummyInput()
          .appendField("Desligar")
          .appendField(new Blockly.FieldDropdown([["Luz do quarto",Blockly.Msg.luzquarto], ["Ventilador do quarto",Blockly.Msg.ventiladorquarto], ["Aquecedor do quarto", Blockly.Msg.aquecedorquarto], ["Abajur do quarto", Blockly.Msg.abajurquarto]]), "Desligar");
          this.appendDummyInput()
          .appendField("")
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
