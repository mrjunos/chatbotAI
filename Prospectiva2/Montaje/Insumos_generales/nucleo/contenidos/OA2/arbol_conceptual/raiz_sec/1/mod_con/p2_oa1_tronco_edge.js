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
            'gAudioPreloadPreference': 'metadata',
            'gVideoPreloadPreference': 'metadata'
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
                scaleToFit: "width",
                centerStage: "vertical",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'shutterstock_133532750-min',
                            type: 'image',
                            rect: ['-15px', '0px', '2315px', '1544px', 'auto', 'auto'],
                            opacity: '0.30215826394747',
                            fill: ["rgba(0,0,0,0)",im+"shutterstock_133532750-min.jpg",'0px','0px']
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['189', '369', '1741px', '744px', 'auto', 'auto'],
                            overflow: 'auto',
                            c: [
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['0px', '0px', '1685px', '394px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Para poder diseñar y estructurar cualquier modelo, es necesario comprender la estructura de un modelo teórico conceptual, el cual establece los pasos desde la información natural (determinado por los registros reales), hasta la puesta en práctica y cálculo de los aspectos determinados por el modelo estadísticamente resultante&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['0px', '858px', '1685px', '147px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​También recordemos que toda función siempre será representada como una “máquina” que al introducir una variable independiente [x], da como resultado un estimado de variable dependiente [y = f(x)]</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['542px', '151px', '590px', '590px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(97,193,162,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'img5-min',
                                type: 'image',
                                rect: ['546px', '154px', '580px', '580px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"img5-min.png",'0px','0px']
                            },
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['566px', '717px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy9',
                                type: 'text',
                                rect: ['697px', '735px', '290px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Modelo conceptual&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['542px', '979px', '590px', '590px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(97,193,162,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'img6-min',
                                type: 'image',
                                rect: ['546px', '982px', '580px', '580px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"img6-min.png",'0px','0px']
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['566px', '1545px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['667px', '1563px', '351px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Funciones matemáticas&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['0px', '1716px', '1685px', '147px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Técnicas de modelación</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'EllipseCopy2',
                                type: 'ellipse',
                                rect: ['542px', '1837px', '590px', '590px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(97,193,162,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'img7-min',
                                type: 'image',
                                rect: ['546px', '1840px', '580px', '580px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"img7-min.png",'0px','0px']
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['566px', '2403px', '552px', '96px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['652px', '2421px', '381px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Modelos matemáticos y técnicas de modelación&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cursorhandCopy',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['531px', '581px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'cursorhand',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['531px', '1405px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'cursorhandCopy2',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['542px', '2266px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'logo_prospectiva1_interna2',
                            type: 'image',
                            rect: ['1815px', '166px', '500px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_prospectiva1_interna.svg",'0px','0px']
                        },
                        {
                            id: 'T12',
                            type: 'image',
                            rect: ['184px', '143px', '1606px', '84px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"T12.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '2300px', '1325px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6200,
                    autoPlay: true,
                    labels: {
                        "1": 250,
                        "2": 1500,
                        "3": 2750,
                        "4": 4200
                    },
                    data: [

                    ]
                }
            },
            "img1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '2429', '1325', 'auto', 'auto'],
                            id: 'Img1',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '424px', '618px', '353px', 'auto', 'auto'],
                                align: 'justify',
                                id: 'Text',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​Las decisiones que se toman al interior de la empresa responden, entre otras, a los retos y oportunidades que se derivan de las dinámicas del entorno en general y de los mercados en particular. Sin embargo, dichos entornos tienden a hacerse cada vez más abiertos (globalizados), complejos (con multiplicidad de variables en juego) e inciertos (cambiantes).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(91,91,91,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                rect: ['8px', '0px', '2421px', '1325px', 'auto', 'auto'],
                                id: 'shutterstock_471082040-min',
                                type: 'image',
                                clip: 'rect(0px 1961px 1325px 825px)',
                                fill: ['rgba(0,0,0,0)', 'images/shutterstock_471082040-min.jpg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2429px', '1325px']
                        }
                    }
                },
                timeline: {
                    duration: 1375,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "easeInOutExpo",
                            "${Img1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "easeInOutExpo",
                            "${Img1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "img2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '2px', '1970px', '1325', 'auto', 'auto'],
                            id: 'img2',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                type: 'text',
                                rect: ['5px', '380px', '638px', '417px', 'auto', 'auto'],
                                align: 'justify',
                                id: 'TextCopy',
                                opacity: '1',
                                text: '<p style=\"margin: 0px;\">​Todo lo anterior coloca a los equipos de trabajo de las organizaciones ante la necesidad de leer las dinámicas del entorno, a pesar de que estas son dinámicas y, en gran medida impredecibles. En consecuencia, la capacidad de las organizaciones de formular y materializar propósitos estratégicos coherentes se relaciona con la capacidad de sus equipos de trabajo de interpretar las complejas y cambiantes, dinámicas del entorno en general y de los mercados en particular.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(91,91,91,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                            },
                            {
                                rect: ['578px', '-2px', '1831px', '1325px', 'auto', 'auto'],
                                id: 'shutterstock_1314266954-min',
                                type: 'image',
                                clip: 'rect(0px 1392px 1325px 259px)',
                                fill: ['rgba(0,0,0,0)', 'images/shutterstock_1314266954-min.jpg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2410px', '1327px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            250,
                            500,
                            "easeInOutExpo",
                            "${img2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "cursorhand": {
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
                            id: 'cursorhand',
                            rect: ['0px', '0px', '70px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cursorhand.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid61",
                            "top",
                            0,
                            500,
                            "linear",
                            "${cursorhand}",
                            '0px',
                            '-10px'
                        ],
                        [
                            "eid63",
                            "top",
                            500,
                            500,
                            "linear",
                            "${cursorhand}",
                            '-10px',
                            '0px'
                        ]
                    ]
                }
            },
            "flecha_derecha1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-10px', '0px', '90px', '152px', 'auto', 'auto'],
                            id: 'flecha_derecha',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_derecha.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '152px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            625,
                            "easeInOutSine",
                            "${flecha_derecha}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "left",
                            625,
                            625,
                            "easeInOutSine",
                            "${flecha_derecha}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "flecha_izquierda1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-10px', '0px', '90px', '152px', 'auto', 'auto'],
                            id: 'flecha_derecha',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_derecha.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '152px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    data: [
                        [
                            "eid66",
                            "left",
                            0,
                            625,
                            "easeInOutSine",
                            "${flecha_derecha}",
                            '-10px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "left",
                            625,
                            625,
                            "easeInOutSine",
                            "${flecha_derecha}",
                            '0px',
                            '-10px'
                        ]
                    ]
                }
            },
            "scroll": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'scroll',
                            type: 'image',
                            rect: ['0px', '0px', '103px', '147px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/scroll.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '147px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "top",
                            0,
                            500,
                            "easeInOutSine",
                            "${scroll}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid75",
                            "top",
                            500,
                            500,
                            "easeInOutSine",
                            "${scroll}",
                            '10px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("p2_oa1_tronco_edgeActions.js");
})("EDGE-2508105735");
