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
            js+"jquery-2.0.3.min.js"
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
                            id: 'owl2',
                            type: 'image',
                            rect: ['116', '246', '61', '97', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"owl2.png"]
                        },
                        {
                            id: 'rooster2',
                            type: 'image',
                            rect: ['525', '183', '129', '142', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rooster2.png"]
                        },
                        {
                            id: 'fence2',
                            type: 'image',
                            rect: ['6', '310', '686', '81', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"fence2.png"]
                        },
                        {
                            id: 'sun3',
                            type: 'image',
                            rect: ['369', '12', '160', '161', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sun3.png"],
                            transform: [[],['221']]
                        },
                        {
                            id: 'moon',
                            type: 'image',
                            rect: ['358', '25', '145', '144', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"moon.png"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'mcloud13',
                            type: 'image',
                            rect: ['162', '127', '218', '49', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mcloud13.png"]
                        },
                        {
                            id: 'mcloud23',
                            type: 'image',
                            rect: ['257', '159', '246', '48', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mcloud23.png"]
                        },
                        {
                            id: 'scloud13',
                            type: 'image',
                            rect: ['192', '157', '185', '38', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"scloud13.png"]
                        },
                        {
                            id: 'scloud23',
                            type: 'image',
                            rect: ['315', '133', '246', '50', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"scloud23.png"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['284', '295', 'auto', 'auto', 'auto', 'auto'],
                            text: "Press The 's' key: ",
                            font: ['\'Comic Sans MS\', cursive', [16, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['247', '240', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​NO</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(137,101,211,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['303', '232', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​hello</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(222,34,34,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${stage}': {
                            isStage: true,
                            rect: ['null', 'null', '716', '392', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3702,
                    autoPlay: true,
                    labels: {
                        "sun": 335,
                        "moon": 1695,
                        "hello": 3250,
                        "no": 3660
                    },
                    data: [
                        [
                            "eid345",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid346",
                            "opacity",
                            3660,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid335",
                            "opacity",
                            0,
                            335,
                            "linear",
                            "${owl2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid342",
                            "opacity",
                            1800,
                            1090,
                            "linear",
                            "${owl2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid292",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${moon}",
                            '45deg',
                            '45deg'
                        ],
                        [
                            "eid301",
                            "rotateZ",
                            335,
                            245,
                            "linear",
                            "${moon}",
                            '45deg',
                            '112deg'
                        ],
                        [
                            "eid302",
                            "rotateZ",
                            580,
                            212,
                            "linear",
                            "${moon}",
                            '112deg',
                            '223deg'
                        ],
                        [
                            "eid308",
                            "rotateZ",
                            2362,
                            238,
                            "linear",
                            "${moon}",
                            '223deg',
                            '342deg'
                        ],
                        [
                            "eid309",
                            "rotateZ",
                            2600,
                            290,
                            "linear",
                            "${moon}",
                            '342deg',
                            '406deg'
                        ],
                        [
                            "eid28",
                            "rotateZ",
                            792,
                            410,
                            "linear",
                            "${sun3}",
                            '221deg',
                            '367deg'
                        ],
                        [
                            "eid29",
                            "rotateZ",
                            1202,
                            410,
                            "linear",
                            "${sun3}",
                            '367deg',
                            '406deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            1612,
                            500,
                            "linear",
                            "${sun3}",
                            '406deg',
                            '466deg'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            2112,
                            250,
                            "linear",
                            "${sun3}",
                            '466deg',
                            '576deg'
                        ],
                        [
                            "eid349",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${Text3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid350",
                            "opacity",
                            3660,
                            0,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid338",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${rooster2}",
                            '0',
                            '0.47701149425287'
                        ],
                        [
                            "eid339",
                            "opacity",
                            1000,
                            612,
                            "linear",
                            "${rooster2}",
                            '0.47701149425287',
                            '1'
                        ],
                        [
                            "eid340",
                            "opacity",
                            1612,
                            188,
                            "linear",
                            "${rooster2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            792,
                            820,
                            "linear",
                            "${sun3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            1612,
                            500,
                            "linear",
                            "${sun3}",
                            '1',
                            '0.50446428571429'
                        ],
                        [
                            "eid59",
                            "opacity",
                            2112,
                            250,
                            "linear",
                            "${sun3}",
                            '0.5044642686843872',
                            '0'
                        ],
                        [
                            "eid25",
                            "originX",
                            792,
                            0,
                            "linear",
                            "${sun3}",
                            '1.3031160189044%',
                            '1.3031160189044%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("keydownBanner_edgeActions.js");
})("EDGE-18952100");
