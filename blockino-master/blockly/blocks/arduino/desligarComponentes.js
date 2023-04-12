'use strict';

goog.provide('Blockly.Blocks.Arduino.desligarComponentes');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


Blockly.Blocks['desligar_componentes'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desligar")
          .appendField(new Blockly.FieldDropdown([["Luz do quarto",Blockly.Msg.luzquarto], ["Ventilador do quarto",Blockly.Msg.ventiladorquarto], ["Aquecedor do quarto", Blockly.Msg.aquecedorquarto], ["Luz do banheiro",Blockly.Msg.luzbanheiro ], ["Luz da sala",Blockly.Msg.luzsala], ["Luz da varanda", Blockly.Msg.luzvaranda],["Luz da cozinha",Blockly.Msg.luzcozinha],["Televisão da sala", Blockly.Msg.televisaosala], ["Fogão",Blockly.Msg.fogaocozinha ]]), "Desligar");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
        this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };