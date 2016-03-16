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
                            id: 'cloud4',
                            type: 'image',
                            rect: ['141px', '0px', '257px', '158px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud4.png",'0px','0px']
                        },
                        {
                            id: 'cloud3',
                            type: 'image',
                            rect: ['-91px', '12px', '252px', '196px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud3.png",'0px','0px']
                        },
                        {
                            id: 'cloud2',
                            type: 'image',
                            rect: ['35px', '12px', '276px', '165px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud2.png",'0px','0px']
                        },
                        {
                            id: 'cloud',
                            type: 'image',
                            rect: ['302px', '110px', '315px', '243px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '520px', '450px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cloud4}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${cloud}",
                            '302px',
                            '-50px'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            4000,
                            "linear",
                            "${cloud}",
                            '110px',
                            '149px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("parallaxBanner_edgeActions.js");
})("EDGE-215168469");
