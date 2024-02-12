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
                            id: 'Group5',
                            display: 'none',
                            type: 'group',
                            rect: ['336px', '1px', '2421', '1324', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'shutterstock_471082040-min2',
                                type: 'image',
                                rect: ['0px', '0px', '2422px', '1325px', 'auto', 'auto'],
                                clip: 'rect(0px 1971px 1324.5860595703px 829px)',
                                fill: ["rgba(0,0,0,0)",im+"shutterstock_471082040-min.jpg",'0px','0px']
                            },
                            {
                                id: 'cursorhandCopy',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['99px', '771px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['-145px', '282px', '841px', '394px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​A veces queremos crear rápidamente modelos para estimar y proyectar, sin embargo, antes de lograr esto, es necesario comprender ciertos tópicos en referencia a los datos que tendremos que analizar.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">1.</span>- Primero, debemos comprender que los elementos de la naturaleza, lo podremos siempre agrupar en propiedades y operaciones, que luego derivarán en números, por lo que es importante agrupar las características según conjuntos, operaciones y aplicaciones:</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Rectangle2Copy3',
                                type: 'rect',
                                rect: ['-11px', '894px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy9',
                                type: 'text',
                                rect: ['15px', '909px', '607px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Conjuntos, operaciones y aplicaciones&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'world2',
                                type: 'image',
                                rect: ['160px', '696px', '174px', '184px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"world2.svg",'0px','0px']
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['822px', '-4px', '9px', '1332px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'Group5Copy',
                            display: 'none',
                            type: 'group',
                            rect: ['336px', '0', '1964px', '1324', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'shutterstock_1314266954-min2',
                                type: 'image',
                                rect: ['557px', '-3px', '1840px', '1331px', 'auto', 'auto'],
                                clip: 'rect(0px 1411px 1331.1999511719px 274px)',
                                fill: ["rgba(0,0,0,0)",im+"shutterstock_1314266954-min.jpg",'0px','0px']
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['822px', '-4px', '9px', '1332px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['-13px', '762px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy8',
                                type: 'text',
                                rect: ['114px', '777px', '349px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Conjuntos numéricos&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['-141px', '399px', '834px', '78px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">2.</span>- Por otro lado, recordar los tipos de conjuntos numéricos</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'world2Copy',
                                type: 'image',
                                rect: ['160px', '536px', '174px', '184px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"world2.svg",'0px','0px']
                            },
                            {
                                id: 'cursorhandCopy2',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['90px', '615px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'Group5Copy2',
                            display: 'none',
                            type: 'group',
                            rect: ['336px', '0', '1964px', '1324', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'shutterstock_267802619-min',
                                type: 'image',
                                rect: ['428px', '-3px', '1785px', '1339px', 'auto', 'auto'],
                                clip: 'rect(0px 1540px 1338.7893066406px 403px)',
                                fill: ["rgba(0,0,0,0)",im+"shutterstock_267802619-min.jpg",'0px','0px']
                            },
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['822px', '-4px', '9px', '1332px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['-144px', '404px', '840px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​y determinar el concepto de magnitud, es muy importante para el diseño de dicha actividad&nbsp;</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['-13px', '787px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['114px', '802px', '349px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Conjuntos numéricos&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'world2Copy2',
                                type: 'image',
                                rect: ['160px', '562px', '174px', '184px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"world2.svg",'0px','0px']
                            },
                            {
                                id: 'cursorhandCopy3',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['84px', '637px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'Group5Copy3',
                            display: 'none',
                            type: 'group',
                            rect: ['336px', '0px', '1964px', '1324', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'shutterstock_725506924-min2',
                                type: 'image',
                                rect: ['264px', '-1px', '1700px', '1322px', 'auto', 'auto'],
                                clip: 'rect(0px 1700px 1322px 563px)',
                                fill: ["rgba(0,0,0,0)",im+"shutterstock_725506924-min.jpg",'0px','0px']
                            },
                            {
                                id: 'RectangleCopy3',
                                type: 'rect',
                                rect: ['822px', '-4px', '9px', '1332px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['-13px', '778px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy5',
                                type: 'text',
                                rect: ['36px', '793px', '486px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Regla de tres simple y compuesta&nbsp;</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy6',
                                type: 'text',
                                rect: ['-147px', '399px', '844px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">3.</span>- También es importante recordar el uso de la regla de tres, en sus versiones simple y compuesta:&nbsp;</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cursorhandCopy4',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['109px', '645px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'world',
                                type: 'image',
                                rect: ['174px', '556px', '169px', '179px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"world.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'Group5Copy4',
                            display: 'none',
                            type: 'group',
                            rect: ['336px', '0px', '1964px', '1324', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: '_725506924-min',
                                type: 'image',
                                rect: ['272px', '1px', '1700px', '1322px', 'auto', 'auto'],
                                clip: 'rect(0px 1700px 1322px 558px)',
                                fill: ["rgba(0,0,0,0)",im+"725506924-min.jpg",'0px','0px']
                            },
                            {
                                id: 'RectangleCopy4',
                                type: 'rect',
                                rect: ['822px', '-4px', '9px', '1332px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy4',
                                type: 'rect',
                                rect: ['-13px', '600px', '552px', '72px', 'auto', 'auto'],
                                fill: ["rgba(97,193,162,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3Copy11',
                                type: 'text',
                                rect: ['168px', '613px', '197px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Porcentajes</p><p style=\"margin:0px\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy10',
                                type: 'text',
                                rect: ['-147px', '304px', '844px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">4.</span>- Así mismo, el uso de porcentajes será tradicional en este núcleo&nbsp;</p><p style=\"margin: 0px;\">​</p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy12',
                                type: 'text',
                                rect: ['-147px', '790px', '844px', '95px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\"></span>Siempre tengamos en consideración que la creación de modelos, ofrece al ámbito gerencial una opción muy válida para estimar y proyectar escenarios futuros, sin embargo, no siempre la creación de los mismos es suficiente:&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p>",
                                align: "justify",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(91,91,91,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cursorhandCopy5',
                                symbolName: 'cursorhand',
                                type: 'rect',
                                rect: ['103px', '483px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'worldCopy',
                                type: 'image',
                                rect: ['173px', '399px', '169px', '179px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ["rgba(0,0,0,0)",im+"world.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'flecha_derecha1',
                            symbolName: 'flecha_derecha1',
                            display: 'block',
                            type: 'rect',
                            rect: ['612px', '988px', '90', '152', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'flecha_izquierda1',
                            symbolName: 'flecha_izquierda1',
                            display: 'none',
                            type: 'rect',
                            rect: ['504px', '988px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['-1.00479']]
                        },
                        {
                            id: 'logo_prospectiva1_interna2',
                            type: 'image',
                            rect: ['1815px', '166px', '500px', '233px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_prospectiva1_interna.svg",'0px','0px']
                        },
                        {
                            id: 'cursorhand',
                            symbolName: 'cursorhand',
                            display: 'block',
                            type: 'rect',
                            rect: ['635px', '1111px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'T12',
                            type: 'image',
                            rect: ['175px', '151px', '1029px', '78px', 'auto', 'auto'],
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
                        [
                            "eid90",
                            "opacity",
                            5200,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            5700,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "display",
                            250,
                            0,
                            "easeInOutExpo",
                            "${Group5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            1250,
                            0,
                            "easeInOutExpo",
                            "${Group5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            1500,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            2500,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            5625,
                            0,
                            "linear",
                            "${cursorhand}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            1000,
                            0,
                            "easeInOutExpo",
                            "${flecha_izquierda1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "opacity",
                            4200,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            4700,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            2750,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            3250,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid88",
                            "display",
                            5200,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            6200,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            5625,
                            0,
                            "easeInOutExpo",
                            "${flecha_derecha1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            4200,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            5200,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            2750,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            3750,
                            0,
                            "easeInOutExpo",
                            "${Group5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            250,
                            500,
                            "easeInOutExpo",
                            "${Group5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            750,
                            500,
                            "easeInOutExpo",
                            "${Group5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1500,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            2000,
                            500,
                            "easeInOutExpo",
                            "${Group5Copy}",
                            '1',
                            '0'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("p2_oa1_raiz_ppal_edgeActions.js");
})("EDGE-2508105735");
