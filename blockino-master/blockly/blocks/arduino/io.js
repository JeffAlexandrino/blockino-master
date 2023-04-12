/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *               functions. The Arduino function syntax can be found at
 *               http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Blocks.Arduino.io');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.Arduino.io.HUE = 250;

Blockly.Blocks['io_digitalwrite'] = {
  /**
   * Block for creating a 'set pin' to a state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.set_digital_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.appendValueInput('STATE', Blockly.StaticTyping.BlocklyType.BOOLEAN)
        .appendField(Blockly.Msg.to_word)
        .setCheck(Blockly.StaticTyping.BlocklyType.BOOLEAN);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.tooltip_digital_write);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_digitalread'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.read_digital_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setOutput(true, Blockly.StaticTyping.BlocklyType.BOOLEAN);
    this.setTooltip(Blockly.Msg.tooltip_digital_read);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_builtin_led'] = {
  /**
   * Block for setting built-in LED to a state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.set_led)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.builtinLed), 'BUILT_IN_LED');
    this.appendValueInput('STATE', Blockly.StaticTyping.BlocklyType.BOOLEAN)
        .appendField(Blockly.Msg.to_word)
        .setCheck(Blockly.StaticTyping.BlocklyType.BOOLEAN);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.tooltip_led);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'BUILT_IN_LED', 'builtinLed');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  },
};

Blockly.Blocks['io_analogwrite'] = {
  /**
   * Block for creating a 'set pin' to an analogue value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.set_analog_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.appendValueInput('NUM', Blockly.StaticTyping.BlocklyType.NUMBER)
        .appendField(Blockly.Msg.to_word)
        .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.tooltip_analog_write);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  },
};

Blockly.Blocks['io_analogread'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.read_analog_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setTooltip(Blockly.Msg.tooltip_analog_read);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['io_highlow'] = {
  /**
   * Block for creating a pin state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
    this.setColour(Blockly.Blocks.Arduino.io.HUE);
    this.appendDummyInput('')
        .appendField(
            new Blockly.FieldDropdown([['HIGH', 'HIGH'], ['LOW', 'LOW']]),
           'STATE');
    this.setOutput(true, Blockly.StaticTyping.BlocklyType.BOOLEAN);
    this.setTooltip(Blockly.Msg.tooltip_high_low);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.StaticTyping.BlocklyType.INTEGER;
  }
};
