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
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'background',
                            type: 'rect',
                            rect: ['0px', '0px', '1200px', '100px', 'auto', 'auto'],
                            fill: ["rgba(225,163,163,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'photo-1452800185063-6db5e12b8e2e',
                            type: 'image',
                            rect: ['0px', '-210px', '1200px', '675px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"photo-1452800185063-6db5e12b8e2e.jpeg",'0px','0px']
                        },
                        {
                            id: 'road',
                            type: 'rect',
                            rect: ['0px', '100px', '1200px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'lanes',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['42', '152', '1193', '8', 'auto', 'auto']
                        },
                        {
                            id: 'link',
                            symbolName: 'link',
                            type: 'rect',
                            rect: ['466px', '23px', '268', '54', 'auto', 'auto'],
                            cursor: 'pointer'
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
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "background-color",
                            0,
                            1000,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(225,163,163,1)',
                            'rgba(108,127,192,1.00)'
                        ],
                        [
                            "eid102",
                            "background-color",
                            1000,
                            1120,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(108,127,192,1)',
                            'rgba(59,79,151,1.00)'
                        ],
                        [
                            "eid104",
                            "background-color",
                            2120,
                            710,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(59,79,151,1)',
                            'rgba(103,123,195,1.00)'
                        ],
                        [
                            "eid106",
                            "background-color",
                            2830,
                            1630,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(103,123,195,1)',
                            'rgba(227,216,160,1.00)'
                        ],
                        [
                            "eid108",
                            "background-color",
                            4460,
                            1421,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(227,216,160,1)',
                            'rgba(255,204,154,1.00)'
                        ],
                        [
                            "eid110",
                            "background-color",
                            5881,
                            1214,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(255,204,154,1)',
                            'rgba(201,138,138,1.00)'
                        ],
                        [
                            "eid112",
                            "background-color",
                            7095,
                            905,
                            "easeInOutCirc",
                            "${background}",
                            'rgba(201,138,138,1)',
                            'rgba(225,163,163,1.00)'
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
                            "eid230",
                            "top",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${baloon}",
                            '-138px',
                            '-8px'
                        ],
                        [
                            "eid232",
                            "top",
                            4000,
                            2500,
                            "easeInOutQuad",
                            "${baloon}",
                            '-8px',
                            '-121px'
                        ],
                        [
                            "eid231",
                            "left",
                            2000,
                            2000,
                            "easeInOutQuad",
                            "${baloon}",
                            '1107px',
                            '613px'
                        ],
                        [
                            "eid233",
                            "left",
                            4000,
                            2500,
                            "easeInOutQuad",
                            "${baloon}",
                            '613px',
                            '264px'
                        ],
                        [
                            "eid212",
                            "top",
                            0,
                            5500,
                            "linear",
                            "${photo-1452800185063-6db5e12b8e2e}",
                            '-210px',
                            '-77px'
                        ],
                        [
                            "eid214",
                            "top",
                            5500,
                            2500,
                            "linear",
                            "${photo-1452800185063-6db5e12b8e2e}",
                            '-77px',
                            '-210px'
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
                            type: 'image',
                            id: 'weelBack',
                            rect: ['0px', '0px', '133px', '123px', 'auto', 'auto'],
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
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
                            type: 'image',
                            id: 'weelFront',
                            rect: ['0px', '0px', '125px', '124px', 'auto', 'auto'],
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
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
                            transform: [[], [], [], ['0.36906', '0.36906']],
                            id: 'weelback',
                            symbolName: 'weelback',
                            rect: ['171px', '74px', '133', '123', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.36906', '0.36906']],
                            id: 'weelfront',
                            symbolName: 'weelfront',
                            rect: ['9px', '79px', '125', '124', 'auto', 'auto'],
                            type: 'rect'
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
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1224px', '0', '1193', '8', 'auto', 'auto'],
                            id: 'second',
                            symbolName: 'second',
                            type: 'rect'
                        },
                        {
                            rect: ['-1253px', '0', '1193', '8', 'auto', 'auto'],
                            id: 'first',
                            symbolName: 'first',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1193px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid202",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${first}",
                            '-40px',
                            '1260px'
                        ],
                        [
                            "eid227",
                            "left",
                            2005,
                            1995,
                            "linear",
                            "${first}",
                            '-1253px',
                            '-40px'
                        ],
                        [
                            "eid203",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${second}",
                            '-1289px',
                            '0px'
                        ],
                        [
                            "eid220",
                            "left",
                            2005,
                            1995,
                            "linear",
                            "${second}",
                            '0px',
                            '1224px'
                        ]
                    ]
                }
            },
            "first": {
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
                            id: 'white_lineCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['180px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['540px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['726px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['906px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1086px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1193px', '8px']
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
            "second": {
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
                            id: 'white_line',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['180px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['360px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['540px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['726px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['906px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1086px', '0px', '107px', '8px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1193px', '8px']
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
            "link": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '354px', '44px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [5, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 35px;\">Promotions on car hire</span></p>',
                            align: 'center',
                            rect: ['0px', '6px', '364px', '42px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '364px', '42px']
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
