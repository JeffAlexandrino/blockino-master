'use strict';

var Blockino = Blockino || {};


Blockino.examples['examples/serial_repeat_game.js'] = '<xml xmlns="http://www.w3.org/1999/xhtml">' + 
 '  <block type="procedures_callnoreturn" id="1" x="36" y="90">' + 
 '    <mutation name="play game"></mutation>' + 
 '    <next>' + 
 '      <block type="procedures_callnoreturn" id="2">' + 
 '        <mutation name="game lost"></mutation>' + 
 '      </block>' + 
 '    </next>' + 
 '  </block>' + 
 '  <block type="serial_setup" id="3" x="484" y="79">' + 
 '    <field name="SERIAL_ID">Serial</field>' + 
 '    <field name="SPEED">9600</field>' + 
 '  </block>' + 
 '  <block type="procedures_defnoreturn" id="4" x="26" y="171">' + 
 '    <mutation></mutation>' + 
 '    <field name="NAME">play game</field>' + 
 '    <statement name="STACK">' + 
 '      <block type="serial_print" id="5">' + 
 '        <field name="SERIAL_ID">Serial</field>' + 
 '        <field name="NEW_LINE">TRUE</field>' + 
 '        <value name="CONTENT">' + 
 '          <block type="text" id="6">' + 
 '            <field name="TEXT">Welcome to Repeat after me!</field>' + 
 '          </block>' + 
 '        </value>' + 
 '        <next>' + 
 '          <block type="variables_set" id="7">' + 
 '            <field name="VAR">lives</field>' + 
 '            <value name="VALUE">' + 
 '              <block type="math_number" id="8">' + 
 '                <field name="NUM">3</field>' + 
 '              </block>' + 
 '            </value>' + 
 '            <next>' + 
 '              <block type="controls_whileUntil" id="9">' + 
 '                <field name="MODE">WHILE</field>' + 
 '                <value name="BOOL">' + 
 '                  <block type="logic_compare" id="10">' + 
 '                    <field name="OP">GT</field>' + 
 '                    <value name="A">' + 
 '                      <block type="variables_get" id="11">' + 
 '                        <field name="VAR">lives</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <value name="B">' + 
 '                      <block type="math_number" id="12">' + 
 '                        <field name="NUM">0</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <statement name="DO">' + 
 '                  <block type="variables_set" id="13">' + 
 '                    <field name="VAR">random_number</field>' + 
 '                    <value name="VALUE">' + 
 '                      <block type="math_random_int" id="14">' + 
 '                        <value name="FROM">' + 
 '                          <block type="math_number" id="15">' + 
 '                            <field name="NUM">1</field>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                        <value name="TO">' + 
 '                          <block type="math_number" id="16">' + 
 '                            <field name="NUM">100</field>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <next>' + 
 '                      <block type="variables_set" id="17">' + 
 '                        <field name="VAR">response</field>' + 
 '                        <value name="VALUE">' + 
 '                          <block type="text_prompt_ext" id="18">' + 
 '                            <field name="TYPE">Number</field>' +  
 '                            <value name="TEXT">' + 
 '                              <block type="text_join" id="19">' + 
 '                                <mutation items="2"></mutation>' + 
 '                                <value name="ADD0">' + 
 '                                  <block type="text" id="20">' + 
 '                                    <field name="TEXT">Please repeat: </field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                                <value name="ADD1">' + 
 '                                  <block type="variables_get" id="21">' + 
 '                                    <field name="VAR">random_number</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                        <next>' + 
 '                          <block type="controls_if" id="22">' + 
 '                            <mutation else="1"></mutation>' + 
 '                            <value name="IF0">' + 
 '                              <block type="logic_compare" id="23">' + 
 '                                <field name="OP">EQ</field>' + 
 '                                <value name="A">' + 
 '                                  <block type="variables_get" id="24">' + 
 '                                    <field name="VAR">response</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                                <value name="B">' + 
 '                                  <block type="variables_get" id="25">' + 
 '                                    <field name="VAR">random_number</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                            <statement name="DO0">' + 
 '                              <block type="serial_print" id="26">' + 
 '                                <field name="SERIAL_ID">Serial</field>' + 
 '                                <field name="NEW_LINE">TRUE</field>' + 
 '                                <value name="CONTENT">' + 
 '                                  <block type="text" id="27">' + 
 '                                    <field name="TEXT">Very good!</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                              </block>' + 
 '                            </statement>' + 
 '                            <statement name="ELSE">' + 
 '                              <block type="math_change" id="28">' + 
 '                                <field name="VAR">lives</field>' + 
 '                                <value name="DELTA">' + 
 '                                  <block type="math_number" id="29">' + 
 '                                    <field name="NUM">-1</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                                <next>' + 
 '                                  <block type="serial_print" id="30">' + 
 '                                    <field name="SERIAL_ID">Serial</field>' + 
 '                                    <field name="NEW_LINE">TRUE</field>' + 
 '                                    <value name="CONTENT">' + 
 '                                      <block type="text_join" id="31">' + 
 '                                        <mutation items="4"></mutation>' + 
 '                                        <value name="ADD0">' + 
 '                                          <block type="variables_get" id="33">' + 
 '                                            <field name="VAR">response</field>' + 
 '                                          </block>' + 
 '                                        </value>' + 
 '                                        <value name="ADD1">' + 
 '                                          <block type="text" id="34">' + 
 '                                            <field name="TEXT"> is incorrect. You\'ve got </field>' + 
 '                                          </block>' + 
 '                                        </value>' + 
 '                                        <value name="ADD2">' + 
 '                                          <block type="variables_get" id="35">' + 
 '                                            <field name="VAR">lives</field>' + 
 '                                          </block>' + 
 '                                        </value>' + 
 '                                        <value name="ADD3">' + 
 '                                          <block type="text" id="36">' + 
 '                                            <field name="TEXT"> lives left.</field>' + 
 '                                          </block>' + 
 '                                        </value>' + 
 '                                      </block>' + 
 '                                    </value>' + 
 '                                  </block>' + 
 '                                </next>' + 
 '                              </block>' + 
 '                            </statement>' + 
 '                          </block>' + 
 '                        </next>' + 
 '                      </block>' + 
 '                    </next>' + 
 '                  </block>' + 
 '                </statement>' + 
 '              </block>' + 
 '            </next>' + 
 '          </block>' + 
 '        </next>' + 
 '      </block>' + 
 '    </statement>' + 
 '  </block>' + 
 '  <block type="procedures_defnoreturn" id="37" x="28" y="712">' + 
 '    <mutation></mutation>' + 
 '    <field name="NAME">game lost</field>' + 
 '    <statement name="STACK">' + 
 '      <block type="serial_print" id="38">' + 
 '        <field name="SERIAL_ID">Serial</field>' + 
 '        <field name="NEW_LINE">TRUE</field>' + 
 '        <value name="CONTENT">' + 
 '          <block type="text" id="39">' + 
 '            <field name="TEXT">Oh no! You lost :(</field>' + 
 '          </block>' + 
 '        </value>' + 
 '        <next>' + 
 '          <block type="variables_set" id="56">' + 
 '            <field name="VAR">replay</field>' + 
 '            <value name="VALUE">' + 
 '              <block type="text" id="58">' + 
 '                <field name="TEXT">unknown</field>' + 
 '              </block>' + 
 '            </value>' + 
 '            <next>' + 
 '              <block type="controls_whileUntil" id="42">' + 
 '                <field name="MODE">WHILE</field>' + 
 '                <value name="BOOL">' + 
 '                  <block type="logic_compare" id="43">' + 
 '                    <field name="OP">NEQ</field>' + 
 '                    <value name="A">' + 
 '                      <block type="variables_get" id="44">' + 
 '                        <field name="VAR">replay</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <value name="B">' + 
 '                      <block type="text" id="45">' + 
 '                        <field name="TEXT">no</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <statement name="DO">' + 
 '                  <block type="variables_set" id="46">' + 
 '                    <field name="VAR">replay</field>' + 
 '                    <value name="VALUE">' + 
 '                      <block type="text_prompt_ext" id="47">' + 
 '                        <field name="TYPE">Text</field>' + 
 '                        <value name="TEXT">' + 
 '                          <block type="text" id="48">' + 
 '                            <field name="TEXT">Would you like to play again? (yes/no)</field>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <next>' + 
 '                      <block type="procedures_ifreturn" id="49">' + 
 '                        <mutation value="0"></mutation>' + 
 '                        <value name="CONDITION">' + 
 '                          <block type="logic_compare" id="50">' + 
 '                            <field name="OP">EQ</field>' + 
 '                            <value name="A">' + 
 '                              <block type="variables_get" id="51">' + 
 '                                <field name="VAR">replay</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                            <value name="B">' + 
 '                              <block type="text" id="52">' + 
 '                                <field name="TEXT">yes</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                      </block>' + 
 '                    </next>' + 
 '                  </block>' + 
 '                </statement>' + 
 '                <next>' + 
 '                  <block type="serial_print" id="53">' + 
 '                    <field name="SERIAL_ID">Serial</field>' + 
 '                    <field name="NEW_LINE">TRUE</field>' + 
 '                    <value name="CONTENT">' + 
 '                      <block type="text" id="54">' + 
 '                        <field name="TEXT">No? Okay then, goodbye!</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <next>' + 
 '                      <block type="infinite_loop" id="55"></block>' + 
 '                    </next>' + 
 '                  </block>' + 
 '                </next>' + 
 '              </block>' + 
 '            </next>' + 
 '          </block>' + 
 '        </next>' + 
 '      </block>' + 
 '    </statement>' + 
 '  </block>' + 
 '</xml>';
