'use strict';
        /** Create a namespace for the application. */
var Blockino = Blockino || {};
Blockino.toolbox_string = '<xml>' + 
 '  <sep></sep>' + 
 '             '+
 '    <category name="time">' + 
 ' <block type="time_delay">' + 
 '            <value name="DELAY_TIME_MILI">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1000</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    '+
 '    <category name="quarto">' +  // Categoria criado por Guilherme Volpato
 '        ' + 
 ' <block type="ligar_quarto"></block>' +
 ' <block type="desligar_quarto"></block>' +
 ' <block type="lm35_quarto"></block>' +
 ' <block type="irquarto"></block>' +
 //' <block type="mdmax"></block>' +
 //' <block type="aquecedor_on"></block>' +     
 //' <block type="aquecedor_off"></block>' +     
 '               ' + 
 '    </category>' + 
 '  <sep></sep>' +
 '   '+
 '      <category name="varanda">' +  // Categoria criado por Guilherme Volpato
 '        ' + 
 ' <block type="ligar_varanda"></block>' + 
 ' <block type="desligar_varanda"></block>' + 
 ' <block type="dia_noite"></block>' + 
 ' <block type="irvaranda"></block>' + 
 '               ' + 
 '    </category>' + 
 '  <sep></sep>' +
 '   '+
'      <category name="banheiro">'+ // Categoria criado por Guilherme Volpato
'       '+
' <block type="ligar_banheiro"></block>' +
' <block type="desligar_banheiro"></block>' +
' <block type="irbanheiro"></block>' +
'               ' +     
'    </category>' +
'  <sep></sep>' +
'   '+
'      <category name="sala">'+// Categoria criado por Guilherme Volpato
'       '+
' <block type="ligar_sala"></block>' +
' <block type="desligar_sala"></block>' +
' <block type="ligar_tv"></block>' +
' <block type="irsala"></block>' +
'               ' +     
'    </category>' +
'  <sep></sep>' +
'   '+
'      <category name="cozinha">'+// Categoria criado por Guilherme Volpato
'       '+
' <block type="ligar_cozinha"></block>' +
' <block type="desligar_cozinha"></block>' +
' <block type="temphumi_cozinha"></block>' +
' <block type="ircozinha1"></block>' +
'               ' +     
'    </category>' +
'  <sep></sep>' +
'   '+
 '</xml>' ;
        
        
 