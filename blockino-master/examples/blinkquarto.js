'use strict';

var Blockino = Blockino || {};

 Blockino.examples['examples/blinkquarto.js'] =
 ' <xml xmlns="http://www.w3.org/1999/xhtml">' + 
 '  <block type="ligar_quarto" id="423" x="70" y="75">' + 
 '  <next>'+
 '<block type="time_delay" id="425">' + 
 '        <value name="DELAY_TIME_MILI">' + 
 '          <block type="math_number" id="426">' + 
 '            <field name="NUM">1000</field>' + 
 '          </block>' + 
 '        </value>' + 
 '        <next>' + 
 '      <block type="desligar_quarto" id="427" >' + 
'        <next>'+
'       <block type="time_delay" id="428">' + 
'        <value name="DELAY_TIME_MILI">' + 
'          <block type="math_number" id="429">' + 
'            <field name="NUM">1000</field>' + 
'          </block>' + 
'        </value>' + 
'        <next>' + 
'       </block>'+
  '  </block>'+
 '<xml>';
