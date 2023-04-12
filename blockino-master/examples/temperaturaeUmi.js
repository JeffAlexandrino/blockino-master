'use strict';

var Blockino = Blockino || {};

Blockino.examples['examples/temperaturaeUmi.js'] =
    ' <xml xmlns="http://www.w3.org/1999/xhtml">' +
    ' <block type="temphumi_cozinha" id="450" x="70" y="75">' +
    '  <next>' +
    '<block type="time_delay" id="451">' +
    '        <value name="DELAY_TIME_MILI">' +
    '          <block type="math_number" id="452">' +
    '            <field name="NUM">1000</field>' +
    '          </block>' +
    '        </value>' +
    '        <next>' +
    '      <block type="temphumi_cozinha" id="453" >' +
    '       <field name="Verificar">Umidade</field>'+
    '        <next>' +
    '       <block type="time_delay" id="454">' +
    '        <value name="DELAY_TIME_MILI">' +
    '          <block type="math_number" id="455">' +
    '            <field name="NUM">1000</field>' +
    '          </block>' +
    '       </field>'
    '        </value>' +
    '        <next>' +
    '       </block>' +
    '  </block>' +
    '<xml>';