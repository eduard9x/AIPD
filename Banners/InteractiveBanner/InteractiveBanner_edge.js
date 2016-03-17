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
                            id: 'background',
                            symbolName: 'background',
                            type: 'rect',
                            rect: ['0', '-96px', '520', '520', 'auto', 'auto'],
                            transform: [[],[],[],['1','1.06339']]
                        },
                        {
                            id: 'planeRight',
                            symbolName: 'plane1',
                            type: 'rect',
                            rect: ['-108px', '56', '75', '52', 'auto', 'auto']
                        },
                        {
                            id: 'tent',
                            symbolName: 'tent',
                            type: 'rect',
                            rect: ['180', '194', '322', '153', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'treasure',
                            symbolName: 'treasure',
                            type: 'rect',
                            rect: ['335px', '317px', '92', '79', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Guy',
                            symbolName: 'Guy',
                            type: 'rect',
                            rect: ['0px', '103px', '336', '336', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'bag',
                            symbolName: 'bag',
                            type: 'rect',
                            rect: ['167', '346', '73', '62', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'dog',
                            symbolName: 'dog',
                            type: 'rect',
                            rect: ['423', '337', '69', '79', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'girl',
                            symbolName: 'girl',
                            type: 'rect',
                            rect: ['290', '108', '91', '295', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'purse',
                            symbolName: 'purse',
                            type: 'rect',
                            rect: ['293', '245', '48', '51', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'bone',
                            symbolName: 'bone',
                            type: 'rect',
                            rect: ['403', '396', '40', '20', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'money',
                            symbolName: 'money',
                            type: 'rect',
                            rect: ['227px', '370px', '114', '79', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'clouds',
                            symbolName: 'clouds',
                            type: 'rect',
                            rect: ['25', '31', '505', '82', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['17px', '15px', '441px', '41px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Call 0875 HOLIDAY using the keyboard.</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['17px', '56', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [38, "px"], "rgba(233,64,64,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'planeLeft',
                            symbolName: 'planeLeft',
                            type: 'rect',
                            rect: ['559px', '56', '69', '52', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '520px', '440px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "label 0": 250,
                        "label 08": 576,
                        "label 087": 957,
                        "label 0875": 1381,
                        "label 0875 H": 1822,
                        "label 0875 HO": 2322,
                        "label 0875 HOL": 2875,
                        "label 0875 HOLI": 3500,
                        "label 0875 HOLID": 4115,
                        "label 0875 HOLIDA": 4500,
                        "label 0875 HOLIDAY": 4857
                    },
                    data: [
                        [
                            "eid251",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${girl}",
                            '0',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${girl}",
                            '0',
                            '0'
                        ],
                        [
                            "eid124",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${girl}",
                            '0',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${girl}",
                            '1',
                            '0'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${money}",
                            '0',
                            '0'
                        ],
                        [
                            "eid179",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${money}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${money}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dog}",
                            '0',
                            '0'
                        ],
                        [
                            "eid104",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${dog}",
                            '0',
                            '0'
                        ],
                        [
                            "eid123",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${dog}",
                            '0',
                            '0'
                        ],
                        [
                            "eid130",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${dog}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${dog}",
                            '1',
                            '0'
                        ],
                        [
                            "eid116",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${purse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid102",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${purse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid125",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${purse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${purse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid144",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid150",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${purse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid162",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${purse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bone}",
                            '0',
                            '0'
                        ],
                        [
                            "eid176",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${bone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${bone}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tent}",
                            '0',
                            '0'
                        ],
                        [
                            "eid195",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${tent}",
                            '0',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${tent}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${tent}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bag}",
                            '0',
                            '0'
                        ],
                        [
                            "eid108",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${bag}",
                            '0',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${bag}",
                            '0',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${bag}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${bag}",
                            '1',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${treasure}",
                            '0',
                            '0'
                        ],
                        [
                            "eid181",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${treasure}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${treasure}",
                            '1',
                            '0'
                        ],
                        [
                            "eid63",
                            "left",
                            0,
                            0,
                            "linear",
                            "${planeLeft}",
                            '559px',
                            '559px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Guy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid107",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${Guy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${Guy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid157",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid174",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${Guy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            576,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            957,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            1381,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            1822,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            2322,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            2875,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            4115,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            4857,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "plane1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['-1.2032']],
                            id: 'AcbjRexdiCopy',
                            type: 'image',
                            rect: ['674px', '-52px', '62px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/AcbjRexdi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "start": 250
                    },
                    data: [
                        [
                            "eid25",
                            "left",
                            250,
                            4750,
                            "linear",
                            "${AcbjRexdiCopy}",
                            '6px',
                            '674px'
                        ],
                        [
                            "eid26",
                            "top",
                            250,
                            4750,
                            "linear",
                            "${AcbjRexdiCopy}",
                            '57px',
                            '-52px'
                        ]
                    ]
                }
            },
            "planeLeft": {
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
                            id: 'tent2',
                            symbolName: 'tent',
                            opacity: '0',
                            rect: ['-379px', '138px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Guy2',
                            symbolName: 'Guy',
                            opacity: '0',
                            rect: ['-559px', '47px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'bag2',
                            symbolName: 'bag',
                            opacity: '0',
                            rect: ['-392px', '290px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'purse2',
                            symbolName: 'purse',
                            opacity: '0',
                            rect: ['-266px', '189px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'dog2',
                            symbolName: 'dog',
                            opacity: '0',
                            rect: ['-136px', '281px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'bone2',
                            symbolName: 'bone',
                            opacity: '0',
                            rect: ['-156px', '340px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'treasure2',
                            symbolName: 'treasure',
                            opacity: '0',
                            rect: ['-224px', '261px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'girl2',
                            symbolName: 'girl',
                            opacity: '0',
                            rect: ['-269px', '52px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'money2',
                            symbolName: 'money',
                            opacity: '0',
                            rect: ['-332px', '314px', null, null, 'auto', 'auto']
                        },
                        {
                            id: 'AcbjRexdi',
                            type: 'image',
                            rect: ['0px', '-12px', '387px', '291px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/AcbjRexdi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '69px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: true,
                    labels: {
                        "start": 500
                    },
                    data: [
                        [
                            "eid78",
                            "top",
                            500,
                            0,
                            "linear",
                            "${purse2}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid75",
                            "left",
                            500,
                            0,
                            "linear",
                            "${purse2}",
                            '-266px',
                            '-266px'
                        ],
                        [
                            "eid47",
                            "height",
                            500,
                            1500,
                            "linear",
                            "${AcbjRexdi}",
                            '52px',
                            '442px'
                        ],
                        [
                            "eid49",
                            "height",
                            2000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '442px',
                            '626px'
                        ],
                        [
                            "eid57",
                            "height",
                            2750,
                            2000,
                            "linear",
                            "${AcbjRexdi}",
                            '626px',
                            '232px'
                        ],
                        [
                            "eid203",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Guy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid89",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Guy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2750,
                            0,
                            "linear",
                            "${Guy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid201",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${purse2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid86",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${purse2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${purse2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid70",
                            "left",
                            500,
                            0,
                            "linear",
                            "${girl2}",
                            '-269px',
                            '-269px'
                        ],
                        [
                            "eid71",
                            "top",
                            500,
                            0,
                            "linear",
                            "${girl2}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid202",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bag2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid88",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${bag2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            2750,
                            0,
                            "linear",
                            "${bag2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid204",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tent2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${tent2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            2412,
                            0,
                            "linear",
                            "${tent2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Guy2}",
                            '-559px',
                            '-559px'
                        ],
                        [
                            "eid48",
                            "width",
                            500,
                            1500,
                            "linear",
                            "${AcbjRexdi}",
                            '69px',
                            '589px'
                        ],
                        [
                            "eid52",
                            "width",
                            2000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '589px',
                            '833px'
                        ],
                        [
                            "eid58",
                            "width",
                            2750,
                            2000,
                            "linear",
                            "${AcbjRexdi}",
                            '833px',
                            '308px'
                        ],
                        [
                            "eid200",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dog2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${dog2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${dog2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid198",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${treasure2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid187",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${treasure2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "opacity",
                            2750,
                            0,
                            "linear",
                            "${treasure2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${money2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${money2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            2476,
                            0,
                            "linear",
                            "${money2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "top",
                            500,
                            0,
                            "linear",
                            "${dog2}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid197",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${girl2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid87",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${girl2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            2250,
                            0,
                            "linear",
                            "${girl2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid46",
                            "left",
                            500,
                            1500,
                            "linear",
                            "${AcbjRexdi}",
                            '0px',
                            '-307px'
                        ],
                        [
                            "eid51",
                            "left",
                            2000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '-307px',
                            '-591px'
                        ],
                        [
                            "eid53",
                            "left",
                            2750,
                            1250,
                            "linear",
                            "${AcbjRexdi}",
                            '-591px',
                            '-681px'
                        ],
                        [
                            "eid55",
                            "left",
                            4000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '-681px',
                            '-1020px'
                        ],
                        [
                            "eid199",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bone2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid190",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${bone2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            2022,
                            0,
                            "linear",
                            "${bone2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "left",
                            500,
                            0,
                            "linear",
                            "${bag2}",
                            '-392px',
                            '-392px'
                        ],
                        [
                            "eid84",
                            "left",
                            500,
                            0,
                            "linear",
                            "${dog2}",
                            '-136px',
                            '-136px'
                        ],
                        [
                            "eid45",
                            "top",
                            500,
                            1500,
                            "linear",
                            "${AcbjRexdi}",
                            '0px',
                            '26px'
                        ],
                        [
                            "eid50",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '26px',
                            '-80px'
                        ],
                        [
                            "eid54",
                            "top",
                            2750,
                            1250,
                            "linear",
                            "${AcbjRexdi}",
                            '-80px',
                            '-81px'
                        ],
                        [
                            "eid56",
                            "top",
                            4000,
                            750,
                            "linear",
                            "${AcbjRexdi}",
                            '-81px',
                            '-222px'
                        ],
                        [
                            "eid69",
                            "top",
                            500,
                            0,
                            "linear",
                            "${bag2}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid253",
                            "top",
                            500,
                            0,
                            "linear",
                            "${tent2}",
                            '138px',
                            '138px'
                        ],
                        [
                            "eid67",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Guy2}",
                            '47px',
                            '47px'
                        ]
                    ]
                }
            },
            "Guy": {
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
                            id: 'cartoon-business-man-free1',
                            rect: ['0px', '0px', '336px', '336px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cartoon-business-man-free1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '336px', '336px']
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
            "bag": {
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
                            id: 'ncXxAyrri',
                            rect: ['0px', '0px', '73px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ncXxAyrri.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '62px']
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
            "purse": {
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
                            id: 'bag2',
                            rect: ['0px', '0px', '48px', '51px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bag.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '51px']
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
            "girl": {
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
                            id: 'woman2',
                            rect: ['0px', '0px', '91px', '295px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/woman2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '295px']
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
            "dog": {
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
                            id: 'dog-1',
                            rect: ['0px', '0px', '69px', '79px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/dog-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '69px', '79px']
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
            "background": {
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
                            id: '_2117',
                            rect: ['0px', '0px', '520px', '520px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2117.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '520px', '520px']
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
            "bone": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '39px', '20px', 'auto', 'auto'],
                            id: 'pc78oagLi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pc78oagLi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '20px']
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
            "tent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '322px', '153px', 'auto', 'auto'],
                            id: 'cartoon-tent-clipart-1jpg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cartoon-tent-clipart-1.jpg.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '322px', '153px']
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
            "money": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '114px', '79px', 'auto', 'auto'],
                            id: '_8cEjrenRi',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/8cEjrenRi.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '79px']
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
            "treasure": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '92px', '79px', 'auto', 'auto'],
                            id: 'scroll-simple-map-cartoon-template-compass-road',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/scroll-simple-map-cartoon-template-compass-road.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '92px', '79px']
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
            "beforeKeydown": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '391px', '79px']
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
            "clouds": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['140px', '6px', '101px', '62px', 'auto', 'auto'],
                            id: 'cloud4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud4.png', '0px', '0px']
                        },
                        {
                            rect: ['400px', '-44px', '101px', '62px', 'auto', 'auto'],
                            id: 'cloud4Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud4.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '-14px', '114px', '68px', 'auto', 'auto'],
                            id: 'cloud2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '-41px', '114px', '68px', 'auto', 'auto'],
                            id: 'cloud2Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        },
                        {
                            rect: ['331px', '-16px', '114px', '68px', 'auto', 'auto'],
                            id: 'cloud2Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        },
                        {
                            rect: ['315px', '0px', '114px', '68px', 'auto', 'auto'],
                            id: 'cloud2Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        },
                        {
                            rect: ['291px', '-14px', '114px', '68px', 'auto', 'auto'],
                            id: 'cloud2Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '505px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid239",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy4}",
                            '285px',
                            '315px'
                        ],
                        [
                            "eid240",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy4}",
                            '315px',
                            '285px'
                        ],
                        [
                            "eid216",
                            "top",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid222",
                            "top",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2}",
                            '0px',
                            '-14px'
                        ],
                        [
                            "eid210",
                            "top",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud4}",
                            '20px',
                            '3px'
                        ],
                        [
                            "eid223",
                            "top",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud4}",
                            '3px',
                            '20px'
                        ],
                        [
                            "eid215",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2}",
                            '128px',
                            '180px'
                        ],
                        [
                            "eid221",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2}",
                            '180px',
                            '128px'
                        ],
                        [
                            "eid246",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy5}",
                            '331px',
                            '291px'
                        ],
                        [
                            "eid247",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy5}",
                            '291px',
                            '331px'
                        ],
                        [
                            "eid230",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud4Copy}",
                            '490px',
                            '400px'
                        ],
                        [
                            "eid231",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud4Copy}",
                            '400px',
                            '490px'
                        ],
                        [
                            "eid209",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud4}",
                            '0px',
                            '158px'
                        ],
                        [
                            "eid224",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud4}",
                            '158px',
                            '0px'
                        ],
                        [
                            "eid225",
                            "top",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy}",
                            '-41px',
                            '19px'
                        ],
                        [
                            "eid226",
                            "top",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy}",
                            '19px',
                            '-41px'
                        ],
                        [
                            "eid227",
                            "left",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy}",
                            '44px',
                            '24px'
                        ],
                        [
                            "eid228",
                            "left",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy}",
                            '24px',
                            '44px'
                        ],
                        [
                            "eid243",
                            "top",
                            0,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy3}",
                            '14px',
                            '-16px'
                        ],
                        [
                            "eid244",
                            "top",
                            10000,
                            10000,
                            "easeInOutSine",
                            "${cloud2Copy3}",
                            '-16px',
                            '14px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("InteractiveBanner_edgeActions.js");
})("EDGE-3049482");
