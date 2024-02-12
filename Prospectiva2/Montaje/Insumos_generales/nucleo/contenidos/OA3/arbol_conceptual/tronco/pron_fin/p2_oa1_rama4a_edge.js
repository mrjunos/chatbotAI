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
                            rect: ['0px', '-65px', '2300px', '1533px', 'auto', 'auto'],
                            opacity: '0.3021582733813',
                            fill: ["rgba(0,0,0,0)",im+"shutterstock_133532750-min.jpg",'0px','0px']
                        },
                        {
                            id: 'scroll',
                            symbolName: 'scroll',
                            display: 'none',
                            type: 'rect',
                            rect: ['2090px', '399px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'logo_prospectiva1_interna2',
                            type: 'image',
                            rect: ['1840px', '166px', '500px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_prospectiva1_interna.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['142px', '300px', '1644px', '84px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: justify;\">​<span style=\"font-size: 30px; color: rgb(91, 91, 91);\">Cualquier profesional puede realizar pronósticos financieros, bajo una serie de supuestos que garanticen una valoración de un escenario futuro, para ello te invitamos a leer la siguiente sección:&nbsp;</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['142px', '725px', '1690px', '84px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; color: rgb(91, 91, 91);\">Esta valoración financiera siempre estará supeditada a una serie de supuestos y riesgos, que amerita valorar detalladamente&nbsp;</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'imagen',
                            type: 'image',
                            rect: ['911px', '394px', '252px', '262px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagen.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['872px', '629px', '342px', '84px', 'auto', 'auto'],
                            fill: ["rgba(97,193,162,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'T26Copy',
                            type: 'image',
                            rect: ['-515px', '208px', '2243px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"T26.svg",'0px','0px']
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['889px', '635px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Pronósticos financieros </p><p style=\"margin: 0px;\">y sus supuestos&nbsp;</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['872px', '391px', '338px', '242px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [2,"rgba(97,193,162,1.00)","solid"]
                        },
                        {
                            id: 'cursorhand',
                            symbolName: 'cursorhand',
                            type: 'rect',
                            rect: ['883px', '520px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'imagenCopy',
                            type: 'image',
                            rect: ['911px', '782px', '252px', '262px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagen.svg",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['872px', '1017px', '342px', '84px', 'auto', 'auto'],
                            fill: ["rgba(97,193,162,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9Copy',
                            type: 'text',
                            rect: ['889px', '1023px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Pronósticos financieros </p><p style=\"margin: 0px;\">y sus supuestos&nbsp;</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['872px', '779px', '338px', '242px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [2,"rgba(97,193,162,1.00)","solid"]
                        },
                        {
                            id: 'cursorhandCopy4',
                            symbolName: 'cursorhand',
                            type: 'rect',
                            rect: ['883px', '908px', 'undefined', 'undefined', 'auto', 'auto']
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
                    duration: 4700,
                    autoPlay: true,
                    labels: {
                        "1": 250,
                        "2": 1500,
                        "3": 2750,
                        "4": 4200
                    },
                    data: [
                        [
                            "eid76",
                            "display",
                            0,
                            0,
                            "linear",
                            "${scroll}",
                            'none',
                            'none'
                        ]
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
                            id: 'flecha_derecha',
                            type: 'image',
                            rect: ['-10px', '0px', '90px', '152px', 'auto', 'auto'],
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
                            id: 'flecha_derecha',
                            type: 'image',
                            rect: ['-10px', '0px', '90px', '152px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '103px', '147px', 'auto', 'auto'],
                            id: 'scroll',
                            type: 'image',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("p2_oa1_rama4a_edgeActions.js");
})("EDGE-2508105735");
