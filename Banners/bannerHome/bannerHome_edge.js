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
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0px', '0px', '1200px', '100px', 'auto', 'auto'],
                            fill: ["rgba(225,163,163,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['561px', '47px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Travel!</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(13,13,13,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'sun_30',
                            type: 'image',
                            rect: ['973px', '0px', '58px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun%2030.png",'0px','0px']
                        },
                        {
                            id: 'moon3',
                            type: 'image',
                            rect: ['1055px', '208px', '58px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"moon3.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '100px', '1200px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['42px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['222px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['402px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['582px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy7',
                            type: 'rect',
                            rect: ['768px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            type: 'rect',
                            rect: ['948px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy5',
                            type: 'rect',
                            rect: ['1128px', '152px', '107px', '8px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'car2',
                            symbolName: 'car',
                            type: 'rect',
                            rect: ['1218px', '35px', '324', '164', 'auto', 'auto']
                        },
                        {
                            id: 'baloon',
                            symbolName: 'baloon',
                            type: 'rect',
                            rect: ['1107px', '-138px', '88', '101', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '200px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(133,164,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${moon3}",
                            '208px',
                            '16px'
                        ],
                        [
                            "eid71",
                            "top",
                            2830,
                            250,
                            "linear",
                            "${moon3}",
                            '16px',
                            '208px'
                        ],
                        [
                            "eid160",
                            "top",
                            2000,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid164",
                            "top",
                            5977,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${car2}",
                            '1218px',
                            '-355px'
                        ],
                        [
                            "eid86",
                            "left",
                            4000,
                            4000,
                            "linear",
                            "${car2}",
                            '1218px',
                            '-355px'
                        ],
                        [
                            "eid159",
                            "left",
                            2000,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '561px',
                            '561px'
                        ],
                        [
                            "eid168",
                            "left",
                            5977,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '561px',
                            '561px'
                        ],
                        [
                            "eid85",
                            "top",
                            4460,
                            345,
                            "easeOutQuad",
                            "${sun_30}",
                            '219px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "top",
                            7095,
                            345,
                            "easeOutQuad",
                            "${sun_30}",
                            '0px',
                            '219px'
                        ],
                        [
                            "eid100",
                            "background-color",
                            0,
                            1000,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(225,163,163,1)',
                            'rgba(108,127,192,1.00)'
                        ],
                        [
                            "eid102",
                            "background-color",
                            1000,
                            1120,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(108,127,192,1)',
                            'rgba(59,79,151,1.00)'
                        ],
                        [
                            "eid104",
                            "background-color",
                            2120,
                            710,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(59,79,151,1)',
                            'rgba(103,123,195,1.00)'
                        ],
                        [
                            "eid106",
                            "background-color",
                            2830,
                            1630,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(103,123,195,1)',
                            'rgba(227,216,160,1.00)'
                        ],
                        [
                            "eid108",
                            "background-color",
                            4460,
                            1421,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(227,216,160,1)',
                            'rgba(255,204,154,1.00)'
                        ],
                        [
                            "eid110",
                            "background-color",
                            5881,
                            1214,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(255,204,154,1)',
                            'rgba(201,138,138,1.00)'
                        ],
                        [
                            "eid112",
                            "background-color",
                            7095,
                            905,
                            "easeInOutCirc",
                            "${Rectangle3}",
                            'rgba(201,138,138,1)',
                            'rgba(225,163,163,1.00)'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            1750,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            2000,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            5977,
                            0,
                            "easeInCirc",
                            "${Text}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "weelback": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '133px', '123px', 'auto', 'auto'],
                            id: 'weelBack',
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weelBack.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '133px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${weelBack}",
                            '360deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "weelfront": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '125px', '124px', 'auto', 'auto'],
                            id: 'weelFront',
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weelFront.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '124px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${weelFront}",
                            '360deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "car": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'carsimb',
                            symbolName: 'carsimb',
                            rect: ['0', '0', '325', '147', 'auto', 'auto']
                        },
                        {
                            rect: ['171px', '74px', '133', '123', 'auto', 'auto'],
                            id: 'weelback',
                            symbolName: 'weelback',
                            type: 'rect',
                            transform: [[], [], [], ['0.36906', '0.36906']]
                        },
                        {
                            rect: ['9px', '79px', '125', '124', 'auto', 'auto'],
                            id: 'weelfront',
                            symbolName: 'weelfront',
                            type: 'rect',
                            transform: [[], [], [], ['0.36906', '0.36906']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '324px', '164px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "top",
                            0,
                            0,
                            "linear",
                            "${weelfront}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "linear",
                            "${weelback}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${weelfront}",
                            '0.36906',
                            '0.36906'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${weelback}",
                            '0.36906',
                            '0.36906'
                        ],
                        [
                            "eid15",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${weelfront}",
                            '0.36906',
                            '0.36906'
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            0,
                            "linear",
                            "${weelfront}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${weelback}",
                            '0.36906',
                            '0.36906'
                        ]
                    ]
                }
            },
            "carsimb": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-3px', '325px', '147px', 'auto', 'auto'],
                            id: 'car',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/car.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '325px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid64",
                            "top",
                            0,
                            160,
                            "easeInQuad",
                            "${car}",
                            '-3px',
                            '-7px'
                        ],
                        [
                            "eid65",
                            "top",
                            160,
                            175,
                            "easeOutQuad",
                            "${car}",
                            '-7px',
                            '-3px'
                        ],
                        [
                            "eid66",
                            "top",
                            335,
                            165,
                            "easeInQuad",
                            "${car}",
                            '-3px',
                            '2px'
                        ]
                    ]
                }
            },
            "baloon": {
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
                            id: 'baloon_small',
                            rect: ['0px', '0px', '88px', '101px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/baloon%20small.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '88px', '101px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("bannerHome_edgeActions.js");
})("EDGE-174030768");
