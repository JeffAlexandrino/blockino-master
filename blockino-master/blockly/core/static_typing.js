/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview Object that defines static objects and methods to assign
 *               Blockly types to Blockly blocks. These can then be converted to
 *               language specific types in each language generator.
 */
'use strict';

goog.provide('Blockly.StaticTyping');

goog.require('Blockly.Block');
goog.require('Blockly.Workspace');
goog.require('Blockly.Msg');


/**
 * Class for StaticTyping.
 * @constructor
 */
Blockly.StaticTyping = function () {};

/**
 * "Enum-like" object to create blockly variable types.
 * The number type is used to set a general number from the number block, the
 * block itself then analyses the contents and defines if it is an integer or
 * decimal number.
 * Compatible types have the same value.
 */

Blockly.StaticTyping.getType = function (Type) {
    var obj = Object.keys(Blockly.StaticTyping.BlocklyType);
    //console.log(obj);
    //console.log(Type);
    //console.log(Blockly.StaticTyping.BlocklyType);
    if (Type == Blockly.StaticTyping.BlocklyType.TEXT)
        return obj[0];
    else if (Type == Blockly.StaticTyping.BlocklyType.CHARACTER)
        return obj[1];
    else if (Type == Blockly.StaticTyping.BlocklyType.BOOLEAN)
        return obj[2];
    else if (Type == Blockly.StaticTyping.BlocklyType.NUMBER)
        return obj[3];
    else if (Type == Blockly.StaticTyping.BlocklyType.INTEGER)
        return obj[4];
    else if (Type == Blockly.StaticTyping.BlocklyType.DECIMAL)
        return obj[5];
    else if (Type == Blockly.StaticTyping.BlocklyType.NULL)
        return obj[6];
    else if (Type == Blockly.StaticTyping.BlocklyType.UNDEF)
        return obj[7];
    else if (Type == Blockly.StaticTyping.BlocklyType.UNSPECIFIED)
        return obj[8];
    else if (Type == Blockly.StaticTyping.BlocklyType.ERROR)
        return obj[9];
    else if (Type == Blockly.StaticTyping.BlocklyType.CHILD_BLOCK_MISSING)
        return obj[10];
    };

Blockly.StaticTyping.BlocklyType = {
    TEXT: 'Text', // General String type
    CHARACTER: 'Text', // Type that defines a single character
    BOOLEAN: 'Boolean', // Boolean type
    NUMBER: 'Number', // A general number type
    INTEGER: 'Number', // Number type for integer numbers
    DECIMAL: 'Number', // Number type for numbers with a fractional part
    NULL: 'void', // Used as a "no type"
    UNDEF: 'Undefined', // Used to delegate type set to other blocks
    UNSPECIFIED: 'Unspecified', // Error, when block has not defined its var type
    ERROR: 'Error', // General error, not currently used
    // Set when no child block (supposed to define the variable type) is connected
    CHILD_BLOCK_MISSING: 'ChildBlockMissing'
};


/**
 * Navigates through all the blocks, collecting all variables and getting
 * their type into an associative array with the variable names as the keys and
 * the type as the values.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect variables.
 * @return {Array<string>} Associative array with the variable names as the keys
 *     and the type as the values.
 */
Blockly.StaticTyping.getAllVarsWithTypes = function (workspace) {
    var blocks = Blockly.StaticTyping.getAllStatementsOrdered(workspace);
    var varsWithTypes = Object.create(null);
    var varUndefBlockList = Object.create(null);
    for (var x = 0, xlength_ = blocks.length; x < xlength_; x++) {
        blocks[x].select();  // for step debugging, highlights block in workspace
        // Each statement block iterates through its input children collecting vars
        var blockVarsWithTypes = Blockly.StaticTyping.getBlockVars(blocks[x]);
        for (var z = 0; z < blockVarsWithTypes.length; z++) {
            var varName = blockVarsWithTypes[z][0];
            var varType = blockVarsWithTypes[z][1];
            Blockly.StaticTyping.manageVarsWithTypes(
                    blocks[x], varName, varType, varsWithTypes, varUndefBlockList);
        }
    }
    return varsWithTypes;
};

/**
 * Navigates through each top level block in the workspace to collect all
 * statement blocks, in order from top left.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect blocks.
 * @return {Array<Blockly.Block>} Array containing all workspace statement
 *     blocks.
 */
Blockly.StaticTyping.getAllStatementsOrdered = function (workspace) {
    if (!workspace.getTopBlocks) {
        throw 'Not a valid workspace: ' + workspace;
    }

    /**
     * Navigates through each continous block to collect all  statement blocks.
     * Function required to use recursion for block input statements.
     * @param {Blockly.Block} startBlock Block to start iterating from..
     * @return {Array<Blockly.Block>} Array containing all continuous statement
     *     blocks.
     */
    var getAllContinuousStatements = function (startBlock) {
        var block = startBlock;
        var nextBlock = null;
        var connections = null;
        var blockNextConnection = null;
        var blocks = [];
        do {
            block.select();  // for step debugging, highlights block in workspace
            blocks.push(block);
            blockNextConnection = block.nextConnection;
            connections = block.getConnections_();
            block = null;
            for (var j = 0; j < connections.length; j++) {
                if (connections[j].type == Blockly.NEXT_STATEMENT) {
                    nextBlock = connections[j].targetBlock();
                    if (nextBlock) {
                        // If it is the next connection select it and move to the next block
                        if (connections[j] === blockNextConnection) {
                            block = nextBlock;
                        } else {
                            // Recursion as block children can have their own input statements
                            blocks = blocks.concat(getAllContinuousStatements(nextBlock));
                        }
                    }
                }
            }
        } while (block);

        return blocks;
    };

    var allStatementBlocks = [];
    var topBlocks = workspace.getTopBlocks(true);
    for (var i = 0; i < topBlocks.length; i++) {
        allStatementBlocks = allStatementBlocks.concat(
                getAllContinuousStatements(topBlocks[i]));
    }

    return allStatementBlocks;
};

/**
 * Retrieves the input argument block variables with their set type.
 * @param {Blockly.Block} block Block to retrieve variables from.
 * @return {Array<string>} Associative array with the block variable names as
 *     the keys and the type as the values.
 */
Blockly.StaticTyping.getBlockVars = function (block) {
    var blockVarsWithTypes = [];
    var getVars = block.getVars;
    if (getVars) {
        var blockVariables = getVars.call(block);
        // Iterate through the variables used in this block
        for (var i = 0; i < blockVariables.length; i++) {
            var varName = blockVariables[i];
            var getVarType = block.getVarType;
            if (getVarType) {
                var varType = getVarType.call(block, varName);
                blockVarsWithTypes.push([varName, varType]);
            } else {
                blockVarsWithTypes.push(
                        [varName, Blockly.StaticTyping.BlocklyType.UNSPECIFIED]);
            }
        }
    } // else: !(block.getVars), block does not define vars, so do nothing
    return blockVarsWithTypes;
};

/**
 * Manages the associative array of variables with their type.
 * @param {Blockly.Block} block Blockly providing the variable to manage.
 * @param {string} varName Name of the variable to manage.
 * @param {string} varType Type assigned by the current block.
 * @param {Array<string>} varsWithTypes Associative array containing the
 *     currently processed variables, with the variable names as the keys and
 *     the type as the values.
 * @param {Array<Blockly.Block>} varUndefBlockList Associative array of blocks
 *     to call back with a type for the variables (used as the key) that they
 *      contain currently undefined.
 */
Blockly.StaticTyping.manageVarsWithTypes = function (
        block, varName, varType, varsWithTypes, varUndefBlockList) {
    if (varsWithTypes[varName] === undefined) {
        // First time variable is encountered, so set type and callback list
        varsWithTypes[varName] = varType;
        varUndefBlockList[varName] = [];

        // If this block type is UNDEF it will need to know its type
        if ((varType === Blockly.StaticTyping.BlocklyType.UNDEF) &&
                (block.setBlockType)) {
            varUndefBlockList[varName].push(block);
        }
    } else if (varsWithTypes[varName] ===
            Blockly.StaticTyping.BlocklyType.UNDEF) {
        // Variable encountered before with undefined type, set it now
        varsWithTypes[varName] = varType;

        // If this block type is UNDEF it will need to know its type
        if (varType === Blockly.StaticTyping.BlocklyType.UNDEF) {
            if (block.setBlockType) {
                varUndefBlockList[varName].push(block);
            }
        } else {
            // Valid type added, so update all waiting blocks
            for (var i = 0; i < varUndefBlockList[varName].length; i++) {
                varUndefBlockList[varName][i].setBlockType(varType);
            }
        }
    } else {
        // Variable with valid type already registered
        Blockly.StaticTyping.manageTypeWarning(
                block, varType, varName, varsWithTypes[varName]);

        // If this block type is undefined it might need to get its type
        if ((varType === Blockly.StaticTyping.BlocklyType.UNDEF) &&
                (block.setBlockType)) {
            block.setBlockType(varsWithTypes[varName]);
        }
    }
};

/**
 * When a block uses a variable this function can compare its type with the
 * variable type and set a warning if they are not the same or compatible.
 * @param {!Blockly.Block} block The block to manage its warning.
 * @param {!string} bType The type of this block.
 * @param {!string} vName The variable name.
 * @param {!string} vType The type of the variable.
 */
Blockly.StaticTyping.manageTypeWarning = function (block, bType, vName, vType) {
    if ((bType === Blockly.StaticTyping.BlocklyType.CHILD_BLOCK_MISSING) ||
            (vType === Blockly.StaticTyping.BlocklyType.CHILD_BLOCK_MISSING)) {
        // User still has to attach a block to this variable or its first
        // declaration, so for now do not display any warning
        block.setWarningText(null, 'varType');
    } else if ((vType !== bType) &&
            (bType !== Blockly.StaticTyping.BlocklyType.UNDEF)) {
        var re1 = new RegExp('%vName', "g")
        var re2 = new RegExp('%vType', "g");
        var re3 = new RegExp('%bType', "g");
        var warning = Blockly.Msg.warningWrongType.replace(re1, vName);
        warning = warning.replace(re2, vName);
        warning = warning.replace(re3, bType);

        block.setWarningText(warning, 'varType');
    } else {
        block.setWarningText(null, 'varType');
    }
};

/**
 * Iterates through the list of top level blocks and sets the function arguments
 * types.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect variables.
 * @param {Array<string>} Associative array with the variable names as the keys
 *     and the type as the values.
 */
Blockly.StaticTyping.setProcedureArgs = function (workspace, varsWithTypes) {
    var blocks = workspace.getTopBlocks();
    for (var i = 0, length_ = blocks.length; i < length_; i++) {
        var setArgsType = blocks[i].setArgsType;
        if (setArgsType) {
            setArgsType.call(blocks[i], varsWithTypes);
        }
    }
};

/**
 * Navigates through the child blocks of the input block to get the block type.
 * @param {!Blockly.Block} block Block to navigate through children.
 * @return {string} Type of the input block.
 */
Blockly.StaticTyping.getChildBlockType = function (block) {
    var blockType = null;
    var nextBlock = [block];
    // TODO: Currently only checking the first of any block children
    while ((nextBlock[0].getBlockType === undefined) &&
            (nextBlock[0].getChildren().length > 0)) {
        nextBlock = nextBlock[0].getChildren();
    }
    if (nextBlock[0] === block) {
        // Set variable block is empty, so no type yet
        blockType = Blockly.StaticTyping.BlocklyType.CHILD_BLOCK_MISSING;
    } else {
        var func = nextBlock[0].getBlockType;
        if (func) {
            blockType = nextBlock[0].getBlockType();
        } else {
            // Most inner block, supposed to define a type, is missing getBlockType()
            blockType = Blockly.StaticTyping.BlocklyType.UNSPECIFIED;
        }
    }
    return blockType;
};

/**
 * Regular expression objects to do Number type recognition between an integer
 * and decimal.
 * @private
 */
Blockly.StaticTyping.regExpInt_ = new RegExp(/^\d+$/);
Blockly.StaticTyping.regExpFloat_ = new RegExp(/^[0-9]*[.][0-9]+$/);

/**
 * Uses regular expressions to identify if the input number is an integer or a
 * floating point.
 * @param {string} numberString String of the number to identify.
 * @return {!Blockly.StaticTyping.BlocklyType} Blockly type.
 */
Blockly.StaticTyping.identifyNumber = function (numberString) {
    if (Blockly.StaticTyping.regExpInt_.test(numberString)) {
        return Blockly.StaticTyping.BlocklyType.INTEGER;
    } else if (Blockly.StaticTyping.regExpFloat_.test(numberString)) {
        return Blockly.StaticTyping.BlocklyType.DECIMAL;
    }
    //TODO: This is just a temporary value for easy bug catching.
    return Blockly.StaticTyping.BlocklyType.ERROR;
};

/**
 * Converts the static types dictionary in to a an array with 2-item arrays.
 * This array only contains the valid types, excluding any error or temp types.
 * @return {!array<array<string>>} Blockly types in the format described above.
 */
Blockly.StaticTyping.blocklyValidTypeArray = function () {
    var typesArray = [];
    for (var key in Blockly.StaticTyping.BlocklyType) {
        if ((key !== 'UNDEF') && (key !== 'UNSPECIFIED') && (key !== 'ERROR') &&
                (key !== 'NULL') && (key !== 'CHILD_BLOCK_MISSING')) {
            typesArray.push([Blockly.StaticTyping.BlocklyType[key], key]);
        }
    }
    return typesArray;
};
