/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Arduino blocks for the Servo library.
 *               The Arduino Servo functions can be found in
 *               http://arduino.cc/en/reference/servo
 *
 * TODO: Add angle selector instead of block input.
 */
'use strict';

goog.provide('Blockly.Blocks.Arduino.servo');

goog.require('Blockly.Arduino');
goog.require('Blockly.StaticTyping');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.Arduino.servo.HUE = 60;

Blockly.Blocks['servo_write'] = {
  /**
   * Block for writing an angle value into a servo PWM pin.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/ServoWrite');
    this.setColour(Blockly.Blocks.Arduino.servo.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.set_servo_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'SERVO_PIN');
    this.setInputsInline(false);
    this.appendValueInput(
        'SERVO_ANGLE', Blockly.StaticTyping.BlocklyType.NUMBER)
        .setCheck(Blockly.StaticTyping.BlocklyType.NUMBER)
        .appendField();
    this.appendDummyInput(Blockly.Msg.to_word)
        .appendField(Blockly.Msg.degrees);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.tooltip_set_servo_pin);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SERVO_PIN', 'pwmPins');
  }
};

Blockly.Blocks['servo_read'] = {
  /**
   * Block for reading an angle value of a servo PWM pin.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/ServoRead');
    this.setColour(Blockly.Blocks.Arduino.servo.HUE);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.read_servo_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'SERVO_PIN');
    this.setOutput(true, Blockly.StaticTyping.BlocklyType.NUMBER);
    this.setTooltip(Blockly.Msg.tooltip_read_servo_pin);
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
        this, 'SERVO_PIN', 'pwmPins');
  }
};
