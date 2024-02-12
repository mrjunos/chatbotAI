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
                            id: 'T12',
                            type: 'image',
                            rect: ['178px', '146px', '1614px', '84px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"T12.svg",'0px','0px']
                        },
                        {
                            id: 'logo_prospectiva1_interna2',
                            type: 'image',
                            rect: ['1815px', '166px', '500px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_prospectiva1_interna.svg",'0px','0px']
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['189', '283', '1679px', '869px', 'auto', 'auto'],
                            overflow: 'auto',
                            c: [
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['2px', '0px', '1588px', '138px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Una de las principales técnicas estadísticas utilizadas para modelar corresponde al análisis de regresión y correlación&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['0px', '909px', '1588px', '138px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Para ello, es muy importante conoce la representación gráfica de los datos, tanto a nivel de dispersión como de líneas.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['0px', '1739px', '1588px', '69px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Con el uso de modelos de regresión podremos realizar estimaciones y predicciones sobre ventas, presupuestos, e inclusive cualquier variable que impacte las organizaciones y nos lleve a tomar decisiones&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['551px', '138px', '600', '600', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'Ellipse',
                                    type: 'ellipse',
                                    rect: ['10px', '10px', '580px', '580px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(97,193,162,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'img1',
                                    type: 'image',
                                    rect: ['0px', '0px', '600px', '600px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"img1.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['655px', '692px', '392px', '95px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy9',
                                type: 'text',
                                rect: ['655px', '707px', '392px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​Origen del análisis de regresión y correlación</p><p style=\"margin: 0px;\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'GroupCopy2',
                                type: 'group',
                                rect: ['551px', '1027px', '600', '600', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'EllipseCopy2',
                                    type: 'ellipse',
                                    rect: ['10px', '10px', '580px', '580px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(97,193,162,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'img2',
                                    type: 'image',
                                    rect: ['2px', '1px', '600px', '600px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"img2.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['648px', '1581px', '410px', '95px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['648px', '1596px', '392px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​Diagrama de dispersión y diagrama de líneas&nbsp;</p><p style=\"margin: 0px; text-align: center;\">​</p><p style=\"margin: 0px;\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'GroupCopy4',
                                type: 'group',
                                rect: ['551px', '1843px', '600', '600', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'EllipseCopy4',
                                    type: 'ellipse',
                                    rect: ['10px', '10px', '580px', '580px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(97,193,162,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'img3',
                                    type: 'image',
                                    rect: ['-1px', '2px', '600px', '600px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"img3.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'Rectangle2Copy4',
                                type: 'rect',
                                rect: ['655px', '2397px', '392px', '95px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy5',
                                type: 'text',
                                rect: ['655px', '2412px', '392px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​Modelamiento por </p><p style=\"margin: 0px; text-align: center;\">regresión</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; text-align: center;\"></p><p style=\"margin: 0px; text-align: center;\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cursorhandCopy',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['526px', '483px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'cursorhand',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['541px', '1425px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'cursorhandCopy3',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['541px', '2230px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'Text3Copy6',
                                type: 'text',
                                rect: ['0px', '2564px', '1588px', '69px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Finalmente, es importante tomar en consideración que toda ecuación de regresión generará un modelo de tipo algebraico, que podremos utilizar para realizar estimaciones y predicciones&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'GroupCopy',
                                type: 'group',
                                rect: ['551px', '2668px', '600', '600', 'auto', 'auto'],
                                cursor: 'pointer',
                                c: [
                                {
                                    id: 'EllipseCopy',
                                    type: 'ellipse',
                                    rect: ['10px', '10px', '580px', '580px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(97,193,162,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'img42',
                                    type: 'image',
                                    rect: ['-1px', '0px', '600px', '600px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"img4.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['655px', '3222px', '392px', '70px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['655px', '3240px', '392px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-align: center;\">​Modelamiento algebraico</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; text-align: center;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cursorhandCopy2',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['541px', '3055px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'scroll',
                            symbolName: 'scroll',
                            type: 'rect',
                            rect: ['1887px', '375px', 'undefined', 'undefined', 'auto', 'auto']
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
                    duration: 5700,
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
                            type: 'group',
                            id: 'Img1',
                            opacity: '0',
                            rect: ['0px', '0px', '2429', '1325', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '424px', '618px', '353px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(91,91,91,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                opacity: '1',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Las decisiones que se toman al interior de la empresa responden, entre otras, a los retos y oportunidades que se derivan de las dinámicas del entorno en general y de los mercados en particular. Sin embargo, dichos entornos tienden a hacerse cada vez más abiertos (globalizados), complejos (con multiplicidad de variables en juego) e inciertos (cambiantes).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                id: 'shutterstock_471082040-min',
                                rect: ['8px', '0px', '2421px', '1325px', 'auto', 'auto'],
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
                            type: 'group',
                            id: 'img2',
                            opacity: '0',
                            rect: ['0px', '2px', '1970px', '1325', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['5px', '380px', '638px', '417px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(91,91,91,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                opacity: '1',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Todo lo anterior coloca a los equipos de trabajo de las organizaciones ante la necesidad de leer las dinámicas del entorno, a pesar de que estas son dinámicas y, en gran medida impredecibles. En consecuencia, la capacidad de las organizaciones de formular y materializar propósitos estratégicos coherentes se relaciona con la capacidad de sus equipos de trabajo de interpretar las complejas y cambiantes, dinámicas del entorno en general y de los mercados en particular.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>',
                                align: 'justify',
                                type: 'text'
                            },
                            {
                                type: 'image',
                                id: 'shutterstock_1314266954-min',
                                rect: ['578px', '-2px', '1831px', '1325px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '70px', '95px', 'auto', 'auto'],
                            id: 'cursorhand',
                            type: 'image',
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
                            type: 'image',
                            id: 'scroll',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("p2_oa1_rama1a_edgeActions.js");
})("EDGE-2508105735");
