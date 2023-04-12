/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Arduino code generator for the text blocks.
 *               Partially implements the Serial interface in Arduino:
 *               http://arduino.cc/en/Reference/Serial
 *
 * TODO: Too many calls to String constructor, which consumes a lot of
 *       resources. Once type identification is implemented this will need an
 *       update.
 *
 * TODO: Trim generator is not correct.
 */
'use strict';

goog.provide('Blockly.Arduino.text');

goog.require('Blockly.Arduino');


/**
 * Code generator for a literal String (X).
 * Arduino code: loop { "X" }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text'] = function(block) {
  var code = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for a String concatenation (X...Y). This string can be made
 * up of any number of elements of any type.
 * This block uses a mutator.
 * String construction info: http://arduino.cc/en/Reference/StringConstructor
 * Arduino code: loop { "String(X)" + ... + "String(Y)" }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text_join'] = function(block) {
  var code;
  if (block.itemCount_ == 0) {
    return ['""', Blockly.Arduino.ORDER_ATOMIC];
  } else if (block.itemCount_ == 1) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'ADD0',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
    code = 'String(' + argument0 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  } else {
    var argument;
    code = [];
    for (var n = 0; n < block.itemCount_; n++) {
      argument = Blockly.Arduino.valueToCode(
          block, 'ADD' + n, Blockly.Arduino.ORDER_NONE);
      if (argument == '') {
        code[n] = '""';
      } else {
        code[n] = 'String(' + argument + ')';
      }
    }
    code = code.join(' + ');
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
};

/**
 * Code generator for appending text (Y) to a variable in place (X).
 * String constructor info: http://arduino.cc/en/Reference/StringConstructor
 * Arduino code: loop { X += String(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['text_append'] = function(block) {
  // Append to a variable in place.
  var varName = Blockly.Arduino.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return varName + ' += ' + argument0 + ';\n';
};

/**
 * Code generator to get the length of a string (X).
 * String length info: http://arduino.cc/en/Reference/StringLength
 * Arduino code: loop { String(X).length() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text_length'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var code = 'String(' + argument0 + ').length()';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to test if a string (X) is null/empty.
 * String length info: http://arduino.cc/en/Reference/StringLength
 * Arduino code: boolean isStringEmpty(...) { ... }
 *               loop { isStringEmpty(X) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text_isEmpty'] = function(block) {
  var func = [];
  func.push('boolean ' + Blockly.Arduino.DEF_FUNC_NAME + '(String msg) {');
  func.push('  if (msg.length() == 0) {');
  func.push('    return true;');
  func.push('  } else {');
  func.push('    return false;');
  func.push('  }');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction('isStringEmpty', func.join('\n'));
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  var code = funcName + '(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to trim spaces from a string (X).
 * String trim info: http://arduino.cc/en/Tutorial/StringLengthTrim
 * Arduino code: loop { String(X).trim() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text_trim'] = function(block) {
  // Trim spaces.
  Blockly.Arduino.text_trim.OPERATORS = {
    LEFT: '.trim()',
    RIGHT: '.trim()',
    BOTH: '.trim()'
  };
  var mode = block.getFieldValue('MODE');
  var operator = Blockly.Arduino.text_trim.OPERATORS[mode];
  var argument0 = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return [argument0 + operator, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

/**
 * Code generator to print to the serial comm.
 * Serial info: http://arduino.cc/en/Reference/Serial
 * Arduino code: setup { Serial.begin(9600);     }
 *               loop  { Serial.print(String(X)) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['text_print'] = function(block) {
  var serialId = Blockly.Arduino.Boards.selected.serial[0][1];
  var setupCode = serialId + '.begin(9600);';
  Blockly.Arduino.addSetup('serial_' + serialId, setupCode, false);
  var argument0 = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_NONE);
  if (argument0 == '') {
    argument0 = '""';
  } else {
    argument0 = 'String(' + argument0 + ')';
  }
  return serialId + '.print(' + argument0 + ');\n';
};

/**
 * Code generator to prompt the user with a string (X) and request input.
 * Serial info: http://arduino.cc/en/Reference/Serial
 * Arduino code: getUserInputPrompt(...) { ... }
 *               loop { getUserInputPrompt("X")) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['text_prompt_ext'] = function(block) {
  // Get the first Serial peripheral of arduino board
  var serialId = Blockly.Arduino.Boards.selected.serial[0][1];
  var returnType = block.getFieldValue('TYPE');

  // The function code changes based on reading a number or string
  var func = [];
  var toNumber = returnType.toUpperCase() == Blockly.StaticTyping.getType(Blockly.StaticTyping.BlocklyType.NUMBER) ||
          returnType == Blockly.StaticTyping.BlocklyType.NUMBER;
  
  console.log(toNumber+"  returnType: "+returnType + " tipo: "+Blockly.StaticTyping.getType(Blockly.StaticTyping.BlocklyType.NUMBER));
  if (toNumber) {
    func.push('int ' + Blockly.Arduino.DEF_FUNC_NAME + '(String msg) {');
  } else {
    func.push('String ' + Blockly.Arduino.DEF_FUNC_NAME + '(String msg) {');
  }
  func.push('  ' + serialId + '.println(msg);');
  func.push('  boolean stringComplete = false;');
  if (toNumber) {
    func.push('  int content = 0;');// + serialId + '.parseInt();');
  } else {
    func.push('  String content = "";');
  }
  func.push('  while (stringComplete == false) {');
  func.push('    if (' + serialId + '.available()) {');
  if (toNumber) {
    func.push('      content = ' + serialId + '.parseInt();');
    func.push('      stringComplete = true;');
  } else {
    func.push('      char readChar = (char)' + serialId + '.read();');
    func.push('      if (readChar == \'\\n\' || readChar == \'\\r\') {');
    func.push('        stringComplete = true;');
    func.push('      } else {');
    func.push('        content += readChar;');
    func.push('      }');
  }
  func.push('    }');
  func.push('  }');
  func.push('  // Empty incoming serial buffer');
  func.push('  while(Serial.available()) { Serial.read(); };');
  func.push('  return content;');
  func.push('}');
  var funcName = Blockly.Arduino.addFunction(
      'getUserInputPrompt' + returnType, func.join('\n'));

  // Only overwrite the serial set up if not present already
  var setupCode = serialId + '.begin(9600);';
  Blockly.Arduino.addSetup('serial_' + serialId, setupCode, false);

  var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
      Blockly.Arduino.ORDER_NONE) || '""';
  var code = funcName + '(' + msg + ')';

  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};


/* ***************************************************************** *
 * The rest of the blocks have been left as it is, as they have been *
 * block from the toolbox and not used for Arduino code.             *
 * ***************************************************************** */

Blockly.Arduino['text_endString'] = function(block) {
  // Return a leading or trailing substring.
  var first = block.getFieldValue('END') == 'FIRST';
  var code;
  if (first) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '1';
    var argument1 = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
    code = argument1 + '.substring(0, ' + argument0 + ')';
  } else {
    if (!Blockly.Arduino.definitions_['text_tailString']) {
      var functionName = Blockly.Arduino.variableDB_.getDistinctName(
          'text_tailString', Blockly.Generator.NAME_TYPE);
      Blockly.Arduino.text_endString.text_tailString = functionName;
      var func = [];
      func.push('String ' + functionName + '(n, myString) {');
      func.push('  // Return a trailing substring of n characters.');
      func.push('  return myString.substring(myString.length - n);');
      func.push('}');
      Blockly.Arduino.definitions_['text_tailString'] = func.join('\n');
    }
    var argument0 = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '1';
    var argument1 = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    code = Blockly.Arduino.text_endString.text_tailString +
        '(' + argument0 + ', ' + argument1 + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_indexOf'] = function(block) {
  // Search the text for a substring.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.Arduino.valueToCode(block, 'FIND',
      Blockly.Arduino.ORDER_NONE) || '""';
  var argument1 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_charAt'] = function(block) {
  // Get letter at index.
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Arduino.valueToCode(block, 'AT',
      Blockly.Arduino.ORDER_NONE) || '1';
  var text = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
  switch (where) {
    case 'FIRST':
      var code = text + '.charAt(0)';
      return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    case 'LAST':
      var code = text + '.slice(-1)';
      return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    case 'FROM_START':
      // Blockly uses one-based indicies.
      if (at.match(/^-?\d+$/)) {
        // If the index is a naked number, decrement it right now.
        at = parseInt(at, 10) - 1;
      } else {
        // If the index is dynamic, decrement it in code.
        at += ' - 1';
      }
      var code = text + '[' + at + ']';
      return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    case 'FROM_END':
      var code = text + '.slice(-' + at + ').charAt(0)';
      return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
    case 'RANDOM':
      var functionName = Blockly.Arduino.provideFunction_(
          'text_random_letter',
          ['function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
               '(text) {',
           '  var x = Math.floor(Math.random() * text.length);',
           '  return text[x];',
           '}']);
      code = functionName + '(' + text + ')';
      return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
  throw 'Unhandled option (text_charAt).';
};

Blockly.Arduino['text_getSubstring'] = function(block) {
  // Get substring.
  var text = Blockly.Arduino.valueToCode(block, 'STRING',
      Blockly.Arduino.ORDER_MEMBER) || '""';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.Arduino.valueToCode(block, 'AT1',
      Blockly.Arduino.ORDER_NONE) || '1';
  var at2 = Blockly.Arduino.valueToCode(block, 'AT2',
      Blockly.Arduino.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = text;
  } else {
    var functionName = Blockly.Arduino.provideFunction_(
        'text_get_substring',
        ['function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
             '(text, where1, at1, where2, at2) {',
         '  function getAt(where, at) {',
         '    if (where == \'FROM_START\') {',
         '      at--;',
         '    } else if (where == \'FROM_END\') {',
         '      at = text.length - at;',
         '    } else if (where == \'FIRST\') {',
         '      at = 0;',
         '    } else if (where == \'LAST\') {',
         '      at = text.length - 1;',
         '    } else {',
         '      throw \'Unhandled option (text_getSubstring).\';',
         '    }',
         '    return at;',
         '  }',
         '  at1 = getAt(where1, at1);',
         '  at2 = getAt(where2, at2) + 1;',
         '  return text.slice(at1, at2);',
         '}']);
    var code = functionName + '(' + text + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['text_changeCase'] = function(block) {
  // Change capitalization.
  var mode = block.getFieldValue('CASE');
  Blockly.Arduino.text_changeCase.OPERATORS = {
    UPPERCASE: '.toUpperCase()',
    LOWERCASE: '.toLowerCase()',
    TITLECASE: null
  };
  var operator = Blockly.Arduino.text_changeCase.OPERATORS[mode];
  var code;
  if (operator) {
    // Upper and lower case are functions built into Arduino.
    var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT',
        Blockly.Arduino.ORDER_UNARY_POSTFIX) || '""';
    code = argument0 + operator;
  } else {
    if (!Blockly.Arduino.definitions_['toTitleCase']) {
      // Title case is not a native Dart function.  Define one.
      var functionName = Blockly.Arduino.variableDB_.getDistinctName(
          'text_toTitleCase', Blockly.Generator.NAME_TYPE);
      Blockly.Arduino.text_changeCase.toTitleCase = functionName;
      var func = [];
      func.push('String ' + functionName + '(str) {');
      func.push('  RegExp exp = const RegExp(r\'\\b\');');
      func.push('  List<String> list = str.split(exp);');
      func.push('  String title = \'\';');
      func.push('  for (String part in list) {');
      func.push('    if (part.length > 0) {');
      func.push('      title.add(part[0].toUpperCase());');
      func.push('      if (part.length > 0) {');
      func.push('        title.add(part.substring(1).toLowerCase());');
      func.push('      }');
      func.push('    }');
      func.push('  }');
      func.push('  return title.toString();');
      func.push('}');
      Blockly.Arduino.definitions_['toTitleCase'] = func.join('\n');
    }
    var argument0 = Blockly.Arduino.valueToCode(block, 'TEXT',
        Blockly.Arduino.ORDER_NONE) || '""';
    code = Blockly.Arduino.text_changeCase.toTitleCase + '(' + argument0 + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_prompt'] = function(block) {
  // Prompt function.
  var serialId = Blockly.Arduino.Boards.selected.serial[0][1];
  var setupCode = serialId + '.begin(9600);';
  Blockly.Arduino.addSetup('serial_' + serialId, setupCode, false);
  var msg = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
  var code = 'Serial.print(' + msg + ');\n';
  var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
  if (toNumber) {
    code = 'parseFloat(' + code + ')';
  }
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};
