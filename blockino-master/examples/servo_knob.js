'use strict';

var Blockino = Blockino || {};

Blockino.examples['examples/servo_knob.js'] =  '<xml xmlns="http://www.w3.org/1999/xhtml">' +
  '<block type="arduino_functions" id="162" x="43" y="93">' +
    '<statement name="LOOP_FUNC">' +
      '<block type="controls_for" id="168">' +
        '<field name="VAR">i</field>' +
        '<value name="FROM">' +
          '<block type="math_number" id="169">' +
            '<field name="NUM">0</field>' +
          '</block>' +
        '</value>' +
        '<value name="TO">' +
          '<block type="math_number" id="170">' +
            '<field name="NUM">180</field>' +
          '</block>' +
        '</value>' +
       ' <value name="BY">' +
          '<block type="math_number" id="171">' +
           ' <field name="NUM">1</field>' +
          '</block>' +
        '</value>' +
       ' <statement name="DO">' +
          '<block type="servo_write" id="172">' +
            '<field name="SERVO_PIN">6</field>' +
            '<value name="SERVO_ANGLE">' +
              '<block type="variables_get" id="173">' +
                '<field name="VAR">i</field>' +
              '</block>' +
            '</value>' +
            '<next>' +
              '<block type="time_delay" id="174">' +
                '<value name="DELAY_TIME_MILI">' +
                    '<block type="math_number" id="175">' +
                    '<field name="NUM">15</field>' +
                  '</block>' +
                '</value>' +
              '</block>' +
            '</next>' +
          '</block>' +
        '</statement>' +
        '<next>' +
          '<block type="controls_for" id="184">' +
            '<field name="VAR">i</field>' +
            '<value name="FROM">' +
              '<block type="math_number" id="185">' +
                '<field name="NUM">180</field>' +
             ' </block>' +
            '</value>' +
            '<value name="TO">' +
              '<block type="math_number" id="186">' +
                '<field name="NUM">0</field>' +
              '</block>' +
            '</value>' +
            '<value name="BY">' +
              '<block type="math_number" id="187">' +
                '<field name="NUM">-1</field>' +
              '</block>' +
           ' </value>' +
            '<statement name="DO">' +
              '<block type="servo_write" id="188">' +
                '<field name="SERVO_PIN">6</field>' +
                '<value name="SERVO_ANGLE">' +
                  '<block type="variables_get" id="189">' +
                    '<field name="VAR">i</field>' +
                  '</block>' +
               ' </value>' +
                '<next>' +
                  '<block type="time_delay" id="190">' +
                   ' <value name="DELAY_TIME_MILI">' +
                     ' <block type="math_number" id="191">' +
                       ' <field name="NUM">15</field>' +
                     ' </block>' +
                    '</value>' +
                  '</block>' +
                '</next>' +
              '</block>' +
            '</statement>' +
          '</block>' +
        '</next>' +
      '</block>' +
    '</statement>' +
  '</block>' +
'</xml>' ;
