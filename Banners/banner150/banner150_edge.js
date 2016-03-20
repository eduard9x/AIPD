/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['0px', '750px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1.jpeg",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '600px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2.jpeg",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '450px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"3.jpeg",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '300px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4.jpeg",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '150px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"5.jpeg",'0px','0px']
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '0px', '1200px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"6.jpeg",'0px','0px']
                        },
                        {
                            id: 'button',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['449px', '52px', '190', '46', 'auto', 'auto']
                        },
                        {
                            id: 'buttonOver',
                            symbolName: 'buttonOver',
                            type: 'rect',
                            rect: ['427', '36', '345', '79', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '150px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "end": 20000
                    },
                    data: [
                        [
                            "eid41",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_4}",
                            '-450px',
                            '300px'
                        ],
                        [
                            "eid57",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_4}",
                            '300px',
                            '-450px'
                        ],
                        [
                            "eid39",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_5}",
                            '-600px',
                            '150px'
                        ],
                        [
                            "eid59",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_5}",
                            '150px',
                            '-600px'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            0,
                            "linear",
                            "${button}",
                            '449px',
                            '449px'
                        ],
                        [
                            "eid36",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_3}",
                            '-300px',
                            '450px'
                        ],
                        [
                            "eid54",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_3}",
                            '450px',
                            '-300px'
                        ],
                        [
                            "eid74",
                            "top",
                            0,
                            0,
                            "linear",
                            "${button}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid40",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_6}",
                            '-750px',
                            '0px'
                        ],
                        [
                            "eid58",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_6}",
                            '0px',
                            '-750px'
                        ],
                        [
                            "eid37",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_2}",
                            '-150px',
                            '600px'
                        ],
                        [
                            "eid55",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_2}",
                            '600px',
                            '-150px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            10000,
                            "linear",
                            "${_1}",
                            '0px',
                            '750px'
                        ],
                        [
                            "eid56",
                            "top",
                            10000,
                            10000,
                            "linear",
                            "${_1}",
                            '750px',
                            '0px'
                        ]
                    ]
                }
            },
            "button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '298px', '46px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 36px; text-decoration: underline;\">Explore the world</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '190px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "over": 2000,
                        "Label 2": 4000
                    },
                    data: [

                    ]
                }
            },
            "buttonOver": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '335px', '69px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [5, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '345px', '79px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner150_edgeActions.js");
})("EDGE-5149343");
