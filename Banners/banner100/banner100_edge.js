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
                            id: 'first',
                            symbolName: 'first',
                            type: 'rect',
                            rect: ['0px', '-50px', '300', '166', 'auto', 'auto']
                        },
                        {
                            id: 'second',
                            symbolName: 'second',
                            type: 'rect',
                            rect: ['300px', '-30px', '300', '161', 'auto', 'auto']
                        },
                        {
                            id: 'third',
                            symbolName: 'third',
                            type: 'rect',
                            rect: ['600px', '-50px', '300', '161', 'auto', 'auto']
                        },
                        {
                            id: 'fourth',
                            symbolName: 'fourth',
                            type: 'rect',
                            rect: ['900px', '-40px', '300', '161', 'auto', 'auto']
                        },
                        {
                            id: 'fifth',
                            symbolName: 'fifth',
                            type: 'rect',
                            rect: ['1200px', '-201', '300', '483', 'auto', 'auto']
                        },
                        {
                            id: 'sixth',
                            symbolName: 'sixth',
                            type: 'rect',
                            rect: ['-300px', '-45', '300', '161', 'auto', 'auto']
                        },
                        {
                            id: 'link',
                            symbolName: 'link',
                            type: 'rect',
                            rect: ['466px', '23px', '268', '54', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '100px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 23500,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid207",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${fourth}",
                            '900px',
                            '600px'
                        ],
                        [
                            "eid225",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${fourth}",
                            '600px',
                            '900px'
                        ],
                        [
                            "eid279",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${fourth}",
                            '900px',
                            '1200px'
                        ],
                        [
                            "eid297",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${fourth}",
                            '1200px',
                            '900px'
                        ],
                        [
                            "eid5",
                            "top",
                            0,
                            0,
                            "linear",
                            "${second}",
                            '-30px',
                            '-30px'
                        ],
                        [
                            "eid277",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${sixth}",
                            '-300px',
                            '0px'
                        ],
                        [
                            "eid295",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${sixth}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid206",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${third}",
                            '600px',
                            '300px'
                        ],
                        [
                            "eid221",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${third}",
                            '300px',
                            '600px'
                        ],
                        [
                            "eid282",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${third}",
                            '600px',
                            '900px'
                        ],
                        [
                            "eid300",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${third}",
                            '900px',
                            '600px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            0,
                            "linear",
                            "${third}",
                            '-50px',
                            '-50px'
                        ],
                        [
                            "eid208",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${fifth}",
                            '1200px',
                            '900px'
                        ],
                        [
                            "eid223",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${fifth}",
                            '900px',
                            '1200px'
                        ],
                        [
                            "eid280",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${fifth}",
                            '1200px',
                            '1500px'
                        ],
                        [
                            "eid298",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${fifth}",
                            '1500px',
                            '1200px'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            0,
                            "linear",
                            "${fourth}",
                            '-40px',
                            '-40px'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            0,
                            "linear",
                            "${first}",
                            '-50px',
                            '-50px'
                        ],
                        [
                            "eid210",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${first}",
                            '0px',
                            '-300px'
                        ],
                        [
                            "eid222",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${first}",
                            '-300px',
                            '0px'
                        ],
                        [
                            "eid278",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${first}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid296",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${first}",
                            '300px',
                            '0px'
                        ],
                        [
                            "eid315",
                            "left",
                            0,
                            0,
                            "linear",
                            "${link}",
                            '466px',
                            '466px'
                        ],
                        [
                            "eid314",
                            "top",
                            0,
                            0,
                            "linear",
                            "${link}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid209",
                            "left",
                            7000,
                            250,
                            "linear",
                            "${second}",
                            '300px',
                            '0px'
                        ],
                        [
                            "eid224",
                            "left",
                            12000,
                            250,
                            "linear",
                            "${second}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid281",
                            "left",
                            16000,
                            250,
                            "linear",
                            "${second}",
                            '300px',
                            '600px'
                        ],
                        [
                            "eid299",
                            "left",
                            20000,
                            250,
                            "linear",
                            "${second}",
                            '600px',
                            '300px'
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
                            type: 'image',
                            id: 'photo-1414438992182-69e404046f80',
                            rect: ['0px', '0px', '300px', '166px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1414438992182-69e404046f80.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1415889678233-eb900aeee9e12',
                            rect: ['0px', '-319px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1415889678233-eb900aeee9e1.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1453404823743-4164aa416b25',
                            rect: ['0px', '-158px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1453404823743-4164aa416b25.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 14000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid15",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${photo-1415889678233-eb900aeee9e12}",
                            '-161px',
                            '11px'
                        ],
                        [
                            "eid56",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${photo-1415889678233-eb900aeee9e12}",
                            '11px',
                            '-159px'
                        ],
                        [
                            "eid105",
                            "top",
                            11000,
                            250,
                            "linear",
                            "${photo-1415889678233-eb900aeee9e12}",
                            '-159px',
                            '-319px'
                        ],
                        [
                            "eid55",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${photo-1453404823743-4164aa416b25}",
                            '166px',
                            '-4px'
                        ],
                        [
                            "eid103",
                            "top",
                            11000,
                            250,
                            "linear",
                            "${photo-1453404823743-4164aa416b25}",
                            '-4px',
                            '-158px'
                        ],
                        [
                            "eid13",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${photo-1414438992182-69e404046f80}",
                            '0px',
                            '172px'
                        ],
                        [
                            "eid59",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${photo-1414438992182-69e404046f80}",
                            '172px',
                            '157px'
                        ],
                        [
                            "eid104",
                            "top",
                            11000,
                            250,
                            "linear",
                            "${photo-1414438992182-69e404046f80}",
                            '157px',
                            '0px'
                        ]
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
                            type: 'image',
                            id: 'photo-1415356838286-df6fd593e8b3',
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1415356838286-df6fd593e8b3.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1422565167033-dec8fad92aba',
                            rect: ['0px', '322px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1422565167033-dec8fad92aba.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1453873670826-0e61192d57e1',
                            rect: ['0px', '161px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1453873670826-0e61192d57e1.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 16000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid31",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${photo-1415356838286-df6fd593e8b3}",
                            '0px',
                            '-137px'
                        ],
                        [
                            "eid74",
                            "top",
                            10000,
                            250,
                            "linear",
                            "${photo-1415356838286-df6fd593e8b3}",
                            '-137px',
                            '-176px'
                        ],
                        [
                            "eid112",
                            "top",
                            13750,
                            250,
                            "linear",
                            "${photo-1415356838286-df6fd593e8b3}",
                            '-176px',
                            '0px'
                        ],
                        [
                            "eid30",
                            "top",
                            7000,
                            250,
                            "linear",
                            "${photo-1422565167033-dec8fad92aba}",
                            '161px',
                            '24px'
                        ],
                        [
                            "eid73",
                            "top",
                            10000,
                            250,
                            "linear",
                            "${photo-1422565167033-dec8fad92aba}",
                            '24px',
                            '146px'
                        ],
                        [
                            "eid114",
                            "top",
                            13750,
                            250,
                            "linear",
                            "${photo-1422565167033-dec8fad92aba}",
                            '146px',
                            '322px'
                        ],
                        [
                            "eid75",
                            "top",
                            10000,
                            250,
                            "linear",
                            "${photo-1453873670826-0e61192d57e1}",
                            '-137px',
                            '-15px'
                        ],
                        [
                            "eid113",
                            "top",
                            13750,
                            250,
                            "linear",
                            "${photo-1453873670826-0e61192d57e1}",
                            '-15px',
                            '161px'
                        ]
                    ]
                }
            },
            "third": {
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
                            id: 'photo-1445346366695-5bf62de05412',
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1445346366695-5bf62de05412.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1441960114565-066d7a7b544b',
                            rect: ['0px', '322px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1441960114565-066d7a7b544b.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1454430690613-c5fbdb397f65',
                            rect: ['0px', '161px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1454430690613-c5fbdb397f65.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 16000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid84",
                            "top",
                            8000,
                            250,
                            "linear",
                            "${photo-1454430690613-c5fbdb397f65}",
                            '-130px',
                            '-11px'
                        ],
                        [
                            "eid121",
                            "top",
                            12750,
                            250,
                            "linear",
                            "${photo-1454430690613-c5fbdb397f65}",
                            '-11px',
                            '161px'
                        ],
                        [
                            "eid37",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${photo-1445346366695-5bf62de05412}",
                            '0px',
                            '-130px'
                        ],
                        [
                            "eid82",
                            "top",
                            8000,
                            250,
                            "linear",
                            "${photo-1445346366695-5bf62de05412}",
                            '-130px',
                            '-172px'
                        ],
                        [
                            "eid123",
                            "top",
                            12750,
                            250,
                            "linear",
                            "${photo-1445346366695-5bf62de05412}",
                            '-172px',
                            '0px'
                        ],
                        [
                            "eid36",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${photo-1441960114565-066d7a7b544b}",
                            '161px',
                            '31px'
                        ],
                        [
                            "eid83",
                            "top",
                            8000,
                            250,
                            "linear",
                            "${photo-1441960114565-066d7a7b544b}",
                            '31px',
                            '150px'
                        ],
                        [
                            "eid122",
                            "top",
                            12750,
                            250,
                            "linear",
                            "${photo-1441960114565-066d7a7b544b}",
                            '150px',
                            '322px'
                        ]
                    ]
                }
            },
            "fourth": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            id: 'photo-1422504090664-c57eba84293f',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/photo-1422504090664-c57eba84293f.jpeg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-322px', '300px', '161px', 'auto', 'auto'],
                            id: 'photo-1451849832267-fe29dcdc785b',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/photo-1451849832267-fe29dcdc785b.jpeg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-161px', '300px', '161px', 'auto', 'auto'],
                            id: 'photo-1454537468202-b7ff71d51c2e',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/photo-1454537468202-b7ff71d51c2e.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 14000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid47",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${photo-1451849832267-fe29dcdc785b}",
                            '-161px',
                            '37px'
                        ],
                        [
                            "eid91",
                            "top",
                            6750,
                            250,
                            "linear",
                            "${photo-1451849832267-fe29dcdc785b}",
                            '37px',
                            '-133px'
                        ],
                        [
                            "eid130",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1451849832267-fe29dcdc785b}",
                            '-133px',
                            '-322px'
                        ],
                        [
                            "eid44",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${photo-1422504090664-c57eba84293f}",
                            '0px',
                            '198px'
                        ],
                        [
                            "eid93",
                            "top",
                            6750,
                            250,
                            "linear",
                            "${photo-1422504090664-c57eba84293f}",
                            '198px',
                            '152px'
                        ],
                        [
                            "eid131",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1422504090664-c57eba84293f}",
                            '152px',
                            '0px'
                        ],
                        [
                            "eid92",
                            "top",
                            6750,
                            250,
                            "linear",
                            "${photo-1454537468202-b7ff71d51c2e}",
                            '161px',
                            '-9px'
                        ],
                        [
                            "eid132",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1454537468202-b7ff71d51c2e}",
                            '-9px',
                            '-161px'
                        ]
                    ]
                }
            },
            "fifth": {
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
                            id: 'photo-1454579943364-13b2d508c27a',
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1454579943364-13b2d508c27a.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1454923634634-bd1614719a7b',
                            rect: ['0px', '-161px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1454923634634-bd1614719a7b.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1454944917748-97e19cf16847',
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1454944917748-97e19cf16847.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '483px']
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid147",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${photo-1454579943364-13b2d508c27a}",
                            '161px',
                            '0px'
                        ],
                        [
                            "eid165",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${photo-1454579943364-13b2d508c27a}",
                            '0px',
                            '322px'
                        ],
                        [
                            "eid184",
                            "top",
                            7500,
                            0,
                            "linear",
                            "${photo-1454579943364-13b2d508c27a}",
                            '322px',
                            '482px'
                        ],
                        [
                            "eid193",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1454579943364-13b2d508c27a}",
                            '321px',
                            '161px'
                        ],
                        [
                            "eid146",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${photo-1454944917748-97e19cf16847}",
                            '322px',
                            '161px'
                        ],
                        [
                            "eid187",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${photo-1454944917748-97e19cf16847}",
                            '161px',
                            '321px'
                        ],
                        [
                            "eid192",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1454944917748-97e19cf16847}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid145",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${photo-1454923634634-bd1614719a7b}",
                            '0px',
                            '-161px'
                        ],
                        [
                            "eid163",
                            "top",
                            7250,
                            250,
                            "linear",
                            "${photo-1454923634634-bd1614719a7b}",
                            '0px',
                            '160px'
                        ],
                        [
                            "eid191",
                            "top",
                            10750,
                            250,
                            "linear",
                            "${photo-1454923634634-bd1614719a7b}",
                            '160px',
                            '0px'
                        ]
                    ]
                }
            },
            "sixth": {
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
                            id: 'photo-1455035104105-24a7614a7ea4',
                            rect: ['0px', '0px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1455035104105-24a7614a7ea4.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1456366387456-50950562b65e',
                            rect: ['0px', '-323px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1456366387456-50950562b65e.jpeg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'photo-1456693906521-44e96e49e85f',
                            rect: ['0px', '-162px', '300px', '161px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/photo-1456693906521-44e96e49e85f.jpeg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 10750,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid233",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${photo-1456693906521-44e96e49e85f}",
                            '-161px',
                            '-321px'
                        ],
                        [
                            "eid249",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${photo-1456693906521-44e96e49e85f}",
                            '-161px',
                            '-1px'
                        ],
                        [
                            "eid263",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${photo-1456693906521-44e96e49e85f}",
                            '-1px',
                            '-162px'
                        ],
                        [
                            "eid232",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${photo-1456366387456-50950562b65e}",
                            '161px',
                            '1px'
                        ],
                        [
                            "eid248",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${photo-1456366387456-50950562b65e}",
                            '1px',
                            '161px'
                        ],
                        [
                            "eid262",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${photo-1456366387456-50950562b65e}",
                            '-162px',
                            '-323px'
                        ],
                        [
                            "eid234",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${photo-1455035104105-24a7614a7ea4}",
                            '0px',
                            '-160px'
                        ],
                        [
                            "eid250",
                            "top",
                            7500,
                            250,
                            "linear",
                            "${photo-1455035104105-24a7614a7ea4}",
                            '161px',
                            '321px'
                        ],
                        [
                            "eid264",
                            "top",
                            10500,
                            250,
                            "linear",
                            "${photo-1455035104105-24a7614a7ea4}",
                            '161px',
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

                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '268px', '54px']
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
                            rect: ['0px', '0px', '258px', '44px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [5, 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['0px', '6px', '268px', '42px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 35px;\">Visit the world</span></p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '268px', '54px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("banner100_edgeActions.js");
})("EDGE-5170057");
