'use strict';

var Blockino = Blockino || {};

Blockino.examples['../examples/hall.js'] =  '<xml xmlns="http://www.w3.org/1999/xhtml">' + 
 '  <block type="arduino_functions" id="509" x="43" y="93">' + 
 '    <statement name="SETUP_FUNC">' + 
 '      <block type="variables_set" id="234">' + 
 '        <field name="VAR">estadoHall</field>' + 
 '        <value name="VALUE">' + 
 '          <block type="variables_set_type" id="235">' + 
 '            <field name="VARIABLE_SETTYPE_TYPE">NUMBER</field>' + 
 '            <value name="VARIABLE_SETTYPE_INPUT">' + 
 '              <block type="math_number" id="254">' + 
 '                <field name="NUM">0</field>' + 
 '              </block>' + 
 '            </value>' + 
 '          </block>' + 
 '        </value>' + 
 '      </block>' + 
 '    </statement>' + 
 '    <statement name="LOOP_FUNC">' + 
 '      <block type="variables_set" id="204">' + 
 '        <field name="VAR">hall</field>' + 
 '        <value name="VALUE">' + 
 '          <block type="io_digitalread" id="213">' + 
 '            <field name="PIN">5</field>' + 
 '          </block>' + 
 '        </value>' + 
 '        <next>' + 
 '          <block type="controls_for" id="449">' + 
 '            <field name="VAR">i</field>' + 
 '            <value name="FROM">' + 
 '              <block type="math_number" id="453">' + 
 '                <field name="NUM">0</field>' + 
 '              </block>' + 
 '            </value>' + 
 '            <value name="TO">' + 
 '              <block type="math_number" id="451">' + 
 '                <field name="NUM">180</field>' + 
 '              </block>' + 
 '            </value>' + 
 '            <value name="BY">' + 
 '              <block type="math_number" id="452">' + 
 '                <field name="NUM">1</field>' + 
 '              </block>' + 
 '            </value>' + 
 '            <statement name="DO">' + 
 '              <block type="servo_write" id="439">' + 
 '                <field name="SERVO_PIN">3</field>' + 
 '                <value name="SERVO_ANGLE">' + 
 '                  <block type="variables_get" id="496">' + 
 '                    <field name="VAR">i</field>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <next>' + 
 '                  <block type="time_delay" id="461">' + 
 '                    <value name="DELAY_TIME_MILI">' + 
 '                      <block type="math_number" id="462">' + 
 '                        <field name="NUM">15</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <next>' + 
 '                      <block type="controls_if" id="325">' + 
 '                        <mutation else="1"></mutation>' + 
 '                        <value name="IF0">' + 
 '                          <block type="logic_compare" id="288">' + 
 '                            <field name="OP">EQ</field>' + 
 '                            <value name="A">' + 
 '                              <block type="variables_get" id="294">' + 
 '                                <field name="VAR">estadoHall</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                            <value name="B">' + 
 '                              <block type="io_highlow" id="317">' + 
 '                                <field name="STATE">LOW</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                        <statement name="DO0">' + 
 '                          <block type="io_digitalwrite" id="339">' + 
 '                            <field name="PIN">6</field>' + 
 '                            <value name="STATE">' + 
 '                              <block type="io_highlow" id="340">' + 
 '                                <field name="STATE">HIGH</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                          </block>' + 
 '                        </statement>' + 
 '                        <statement name="ELSE">' + 
 '                          <block type="io_digitalwrite" id="434">' + 
 '                            <field name="PIN">6</field>' + 
 '                            <value name="STATE">' + 
 '                              <block type="io_highlow" id="435">' + 
 '                                <field name="STATE">LOW</field>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                          </block>' + 
 '                        </statement>' + 
 '                      </block>' + 
 '                    </next>' + 
 '                  </block>' + 
 '                </next>' + 
 '              </block>' + 
 '            </statement>' + 
 '            <next>' + 
 '              <block type="controls_for" id="463">' + 
 '                <field name="VAR">i</field>' + 
 '                <value name="FROM">' + 
 '                  <block type="math_number" id="464">' + 
 '                    <field name="NUM">180</field>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <value name="TO">' + 
 '                  <block type="math_number" id="465">' + 
 '                    <field name="NUM">0</field>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <value name="BY">' + 
 '                  <block type="math_number" id="466">' + 
 '                    <field name="NUM">-1</field>' + 
 '                  </block>' + 
 '                </value>' + 
 '                <statement name="DO">' + 
 '                  <block type="servo_write" id="467">' + 
 '                    <field name="SERVO_PIN">3</field>' + 
 '                    <value name="SERVO_ANGLE">' + 
 '                      <block type="variables_get" id="490">' + 
 '                        <field name="VAR">i</field>' + 
 '                      </block>' + 
 '                    </value>' + 
 '                    <next>' + 
 '                      <block type="time_delay" id="477">' + 
 '                        <value name="DELAY_TIME_MILI">' + 
 '                          <block type="math_number" id="478">' + 
 '                            <field name="NUM">15</field>' + 
 '                          </block>' + 
 '                        </value>' + 
 '                        <next>' + 
 '                          <block type="controls_if" id="469">' + 
 '                            <mutation else="1"></mutation>' + 
 '                            <value name="IF0">' + 
 '                              <block type="logic_compare" id="470">' + 
 '                                <field name="OP">EQ</field>' + 
 '                                <value name="A">' + 
 '                                  <block type="variables_get" id="471">' + 
 '                                    <field name="VAR">estadoHall</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                                <value name="B">' + 
 '                                  <block type="io_highlow" id="472">' + 
 '                                    <field name="STATE">LOW</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                              </block>' + 
 '                            </value>' + 
 '                            <statement name="DO0">' + 
 '                              <block type="io_digitalwrite" id="473">' + 
 '                                <field name="PIN">6</field>' + 
 '                                <value name="STATE">' + 
 '                                  <block type="io_highlow" id="474">' + 
 '                                    <field name="STATE">HIGH</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
 '                              </block>' + 
 '                            </statement>' + 
 '                            <statement name="ELSE">' + 
 '                              <block type="io_digitalwrite" id="475">' + 
 '                                <field name="PIN">6</field>' + 
 '                                <value name="STATE">' + 
 '                                  <block type="io_highlow" id="476">' + 
 '                                    <field name="STATE">LOW</field>' + 
 '                                  </block>' + 
 '                                </value>' + 
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
 '</xml>';