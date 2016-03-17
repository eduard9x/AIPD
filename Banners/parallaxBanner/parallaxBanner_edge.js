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
                            id: 'island',
                            type: 'image',
                            rect: ['1px', '177px', '521px', '264px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"island.png",'0px','0px']
                        },
                        {
                            id: 'drop1',
                            symbolName: 'drop1',
                            type: 'rect',
                            rect: ['495px', '458px', '8', '12', 'auto', 'auto']
                        },
                        {
                            id: 'drop2',
                            symbolName: 'drop2',
                            type: 'rect',
                            rect: ['280', '483px', '9', '12', 'auto', 'auto']
                        },
                        {
                            id: 'drop3',
                            symbolName: 'drop3',
                            type: 'rect',
                            rect: ['390', '492px', '4', '5', 'auto', 'auto']
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            rect: ['227px', '63px', '69px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sun.png",'0px','0px']
                        },
                        {
                            id: 'rainCloud1',
                            symbolName: 'cloud1',
                            type: 'rect',
                            rect: ['228px', '-156px', '315', '243', 'auto', 'auto']
                        },
                        {
                            id: 'rainCloud2',
                            symbolName: 'cloud1',
                            type: 'rect',
                            rect: ['94px', '-142px', '315', '243', 'auto', 'auto']
                        },
                        {
                            id: 'rainCloud3',
                            symbolName: 'cloud1',
                            type: 'rect',
                            rect: ['-17px', '-133px', '315', '243', 'auto', 'auto']
                        },
                        {
                            id: 'cloudSym3',
                            symbolName: 'cloudSym3',
                            type: 'rect',
                            rect: ['0px', '24px', '252', '196', 'auto', 'auto']
                        },
                        {
                            id: 'cloud2',
                            type: 'image',
                            rect: ['273px', '67px', '276px', '165px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud2.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['215px', '376px', '295px', '64px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Take control of your holiday weather cast.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "underline", "", "break-word", "normal"]
                        },
                        {
                            id: 'SkyColour',
                            type: 'text',
                            rect: ['31px', '22px', '99px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">0​</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "underline", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '520px', '440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(56,114,148,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "top",
                            586,
                            0,
                            "linear",
                            "${drop3}",
                            '492px',
                            '492px'
                        ],
                        [
                            "eid159",
                            "opacity",
                            6250,
                            0,
                            "linear",
                            "${SkyColour}",
                            '0',
                            '0'
                        ],
                        [
                            "eid65",
                            "top",
                            586,
                            0,
                            "linear",
                            "${drop2}",
                            '483px',
                            '483px'
                        ],
                        [
                            "eid137",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${rainCloud3}",
                            '-133px',
                            '-131px'
                        ],
                        [
                            "eid138",
                            "top",
                            4000,
                            6000,
                            "linear",
                            "${rainCloud3}",
                            '-131px',
                            '-133px'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            6250,
                            "linear",
                            "${rainCloud1}",
                            '-156px',
                            '-131px'
                        ],
                        [
                            "eid130",
                            "top",
                            6250,
                            3750,
                            "linear",
                            "${rainCloud1}",
                            '-131px',
                            '-156px'
                        ],
                        [
                            "eid168",
                            "top",
                            0,
                            4500,
                            "linear",
                            "${sun}",
                            '63px',
                            '48px'
                        ],
                        [
                            "eid169",
                            "top",
                            4500,
                            5500,
                            "linear",
                            "${sun}",
                            '48px',
                            '63px'
                        ],
                        [
                            "eid135",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${rainCloud3}",
                            '-17px',
                            '-5px'
                        ],
                        [
                            "eid136",
                            "left",
                            4000,
                            6000,
                            "linear",
                            "${rainCloud3}",
                            '-5px',
                            '-17px'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            6250,
                            "linear",
                            "${rainCloud1}",
                            '228px',
                            '188px'
                        ],
                        [
                            "eid129",
                            "left",
                            6250,
                            3750,
                            "linear",
                            "${rainCloud1}",
                            '188px',
                            '228px'
                        ],
                        [
                            "eid156",
                            "left",
                            0,
                            6250,
                            "linear",
                            "${cloud2}",
                            '273px',
                            '262px'
                        ],
                        [
                            "eid157",
                            "left",
                            6250,
                            3750,
                            "linear",
                            "${cloud2}",
                            '262px',
                            '273px'
                        ],
                        [
                            "eid133",
                            "top",
                            0,
                            5000,
                            "linear",
                            "${rainCloud2}",
                            '-142px',
                            '-131px'
                        ],
                        [
                            "eid134",
                            "top",
                            5000,
                            5000,
                            "linear",
                            "${rainCloud2}",
                            '-131px',
                            '-142px'
                        ],
                        [
                            "eid78",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cloudSym3}",
                            '0px',
                            '60px'
                        ],
                        [
                            "eid79",
                            "left",
                            4000,
                            6000,
                            "linear",
                            "${cloudSym3}",
                            '60px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "left",
                            0,
                            5000,
                            "linear",
                            "${rainCloud2}",
                            '94px',
                            '105px'
                        ],
                        [
                            "eid132",
                            "left",
                            5000,
                            5000,
                            "linear",
                            "${rainCloud2}",
                            '105px',
                            '94px'
                        ],
                        [
                            "eid166",
                            "left",
                            0,
                            4500,
                            "linear",
                            "${sun}",
                            '227px',
                            '236px'
                        ],
                        [
                            "eid167",
                            "left",
                            4500,
                            5500,
                            "linear",
                            "${sun}",
                            '236px',
                            '227px'
                        ],
                        [
                            "eid64",
                            "top",
                            586,
                            0,
                            "linear",
                            "${drop1}",
                            '458px',
                            '458px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sun}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "left",
                            586,
                            0,
                            "linear",
                            "${drop1}",
                            '495px',
                            '495px'
                        ],
                        [
                            "eid80",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${cloudSym3}",
                            '24px',
                            '34px'
                        ],
                        [
                            "eid81",
                            "top",
                            4000,
                            6000,
                            "linear",
                            "${cloudSym3}",
                            '34px',
                            '24px'
                        ]
                    ]
                }
            },
            "drop1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'drop2-02',
                            rect: ['0px', '0px', '8px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drop2-02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '8px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "drop2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'drop2-03',
                            rect: ['0px', '0px', '9px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drop2-03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "drop3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'drop3-01',
                            rect: ['0px', '0px', '4px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/drop3-01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4px', '5px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cloud1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['5.125', '5.125']],
                            rect: ['196px', '291px', null, null, 'auto', 'auto'],
                            id: 'drop12',
                            symbolName: 'drop1',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['3.88889', '3.88889']],
                            rect: ['159px', '290px', null, null, 'auto', 'auto'],
                            id: 'drop22',
                            symbolName: 'drop2',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['4.11111', '4.11111']],
                            rect: ['177px', '291px', null, null, 'auto', 'auto'],
                            id: 'drop22Copy',
                            symbolName: 'drop2',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['4.5', '4.5']],
                            rect: ['117px', '332px', null, null, 'auto', 'auto'],
                            id: 'drop32',
                            symbolName: 'drop3',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['4.25', '4.25']],
                            rect: ['137px', '263px', null, null, 'auto', 'auto'],
                            id: 'drop32Copy2',
                            symbolName: 'drop3',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'cloud42',
                            rect: ['42px', '179px', '257px', '158px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '315px', '243px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "stopRain": 0,
                        "rain": 3000
                    },
                    data: [
                        [
                            "eid102",
                            "left",
                            3045,
                            0,
                            "linear",
                            "${drop32Copy2}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid95",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${drop32}",
                            '332px',
                            '512px'
                        ],
                        [
                            "eid127",
                            "top",
                            3250,
                            146,
                            "linear",
                            "${drop32}",
                            '512px',
                            '633px'
                        ],
                        [
                            "eid86",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${drop12}",
                            '291px',
                            '291px'
                        ],
                        [
                            "eid99",
                            "top",
                            3045,
                            250,
                            "linear",
                            "${drop32Copy2}",
                            '263px',
                            '426px'
                        ],
                        [
                            "eid128",
                            "top",
                            3295,
                            347,
                            "linear",
                            "${drop32Copy2}",
                            '426px',
                            '633px'
                        ],
                        [
                            "eid96",
                            "opacity",
                            3000,
                            45,
                            "linear",
                            "${drop32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "top",
                            3250,
                            500,
                            "linear",
                            "${drop22}",
                            '290px',
                            '623px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${drop12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid109",
                            "top",
                            3045,
                            396,
                            "linear",
                            "${drop22Copy}",
                            '291px',
                            '623px'
                        ],
                        [
                            "eid108",
                            "opacity",
                            3250,
                            17,
                            "linear",
                            "${drop22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${drop22}",
                            '159px',
                            '159px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            3045,
                            45,
                            "linear",
                            "${drop22Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            3045,
                            45,
                            "linear",
                            "${drop32Copy2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cloudSym3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud3',
                            rect: ['0px', '0px', '252px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '252px', '196px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parallaxBanner_edgeActions.js");
})("EDGE-215168469");
