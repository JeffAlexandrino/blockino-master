'use strict';

/** Create a namespace for the application. */
var Blockino = Blockino || {};

var Blockino = Blockino || {};

Blockino.setupShepherd = function () {
    var shepherd;
    shepherd = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            showCancelLink: true,
            scrollTo: true
        }
    });
    shepherd.addStep('shep_editor', {
        text: [Blockly.Msg.shep_editor],
        attachTo: '.codeeditor center',
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        buttons: [
            {
                text: Blockly.Msg.exit,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.cancel();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    shepherd.next();
                },
                classes: 'shepherd-button-example-primary'
            }
        ]
    });

    shepherd.addStep('shep_categories', {
        text: [Blockly.Msg.shep_categories],
        attachTo: '.blocklyToolboxDiv right',
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    shepherd.next();
                },
                classes: 'shepherd-button-example-primary'
            }
        ]
    });

    shepherd.addStep('shep_thrash', {
        text: [Blockly.Msg.shep_thrash],
        attachTo: '.blocklyTrash top',
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    shepherd.next();
                },
                classes: 'shepherd-button-example-primary'
            }
        ]
    });

    shepherd.addStep('shep_navbar', {
        text: [Blockly.Msg.shep_navbar],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '.nav-wrapper bottom',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    $('#button-collapse').click()
                    shepherd.next();
                }
            }
        ]
    });

    shepherd.addStep('shep_menu', {
        text: [Blockly.Msg.shep_menu],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '.side-nav right',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    $('#button-collapse').click();
                    shepherd.back();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    $('#button-collapse').click();
                    shepherd.next();
                }
            }
        ]
    });

    shepherd.addStep('shep_code', {
        text: [Blockly.Msg.shep_code],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '#source_code_collapsible_header bottom',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                    $('#button-collapse').click();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    shepherd.next();
                    $('#diagram_collapsible_header').click();

                }
            }
        ]
    });

    shepherd.addStep('shep_diagram', {
        text: [Blockly.Msg.shep_diagram],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '#diagram_collapsible_header top',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                    $('#source_code_collapsible_header').click();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    $('#diagram_collapsible_header').click();
                    Blockino.showExtraIdeButtons(true);
                    shepherd.next();
                }
            }
        ]
    });

    shepherd.addStep('shep_buttons', {
        text: [Blockly.Msg.shep_buttons],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '#ide_buttons_wrapper bottom',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                    Blockino.showExtraIdeButtons(false);
                    $('#diagram_collapsible_header').click();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    Blockino.showExtraIdeButtons(false);
                    $('#debugDiv').show();
                    shepherd.next();
                }
            }
        ]
    });


    shepherd.addStep('shep_debug_video', {
        text: [Blockly.Msg.shep_debug_video],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '#streaming_collapsible_header top',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                    if (!BlockinoServer.myturn)
                        $('#debugDiv').hide();
                    Blockino.showExtraIdeButtons(true);
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    $('#terminal_collapsible_header').click();
                    $('#streaming_collapsible_header').click();
                    shepherd.next();
                }
            }
        ]
    });

    shepherd.addStep('shep_debug_serial', {
        text: [Blockly.Msg.shep_debug_serial],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '#terminal_collapsible_header top',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    shepherd.back();
                    $('#streaming_collapsible_header').click();
                    $('#terminal_collapsible_header').click();
                }
            }, {
                text: Blockly.Msg.next,
                action: function () {
                    $('#ide_output_collapsible_header').click();
                    $('#terminal_collapsible_header').click();
                    shepherd.next();
                    if (!BlockinoServer.myturn)
                        $('#debugDiv').hide();

                }
            }
        ]
    });

    shepherd.addStep('shep_output', {
        text: [Blockly.Msg.shep_output],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        attachTo: '.ide_output_wrapper top',
        buttons: [
            {
                text: Blockly.Msg.back,
                classes: 'shepherd-button-secondary',
                action: function () {
                    $('#debugDiv').show();
                    shepherd.back();
                    $('#ide_output_collapsible_header').click();
                    $('#terminal_collapsible_header').click();
                }
            }, {
                text: Blockly.Msg.done,
                action: function () {
                    $('#ide_output_collapsible_header').click();
                    $('#source_code_collapsible_header').click();
                    shepherd.next();
                }
            }
        ]
    });
    
    shepherd.on('cancel', function () {
        if (!BlockinoServer.myturn)
            $('#debugDiv').hide();
    });
    
    shepherd.on('start', function () {
        if (!BlockinoServer.myturn)
            $('#debugDiv img').attr('src','img/streaming.png');
    });

    Blockino.shepherd = shepherd;
};

