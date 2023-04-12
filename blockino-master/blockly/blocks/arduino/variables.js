/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Block for the Arduino map functionality.
 *               The Arduino built in functions syntax can be found at:
 *               http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.provide('Blockly.Blocks.Arduino.variables');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.Arduino.variables.HUE = 330;

Blockly.Blocks['variables_set_type'] = {
  /**
   * Block for variable casting.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
    this.setColour(Blockly.Blocks.Arduino.variables.HUE);
    this.appendValueInput('VARIABLE_SETTYPE_INPUT', '');
    this.appendDummyInput('')
        .appendField(Blockly.Msg.as_word)
        .appendField(new Blockly.FieldDropdown(
                         Blockly.StaticTyping.blocklyValidTypeArray()),
                     'VARIABLE_SETTYPE_TYPE');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.tooltip_set_type);
  },
  /**
   * Assigns a type to the block based on the selected type to cast.
   * @return {!string} Blockly type for this block configuration.
   * @this Blockly.Block
   */
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
    return Blockly.StaticTyping.BlocklyType[blocklyTypeKey];
  }
};
