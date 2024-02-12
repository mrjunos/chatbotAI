/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("head").append('<link rel="stylesheet" type="text/css" href="css/estilos.css" />');
         
         
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         var youtube = $("<iframe/>");
         sym.$("video_1").append(youtube);
         youtube.attr('type','text/html');
         youtube.attr('width','1541');
         youtube.attr('height','511');
         youtube.attr('src',"https://www.youtube.com/embed/nQxo9fx44Co");
         youtube.attr('frameborder','0');
         youtube.attr('allowfullscreen','yes');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();
         
         // Ocultar un elemento 
         sym.$("Ellipse2_2").hide();
         
         // Ocultar un elemento 
         sym.$("Ellipse3_3").hide();
         // Ocultar un elemento 
         sym.$("Ellipse4_4").hide();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1385, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2630, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4700, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         window.open("./1/p2_oa1_rama4a.html", "_blank", "no,  width=1024, height=592");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle2Copy}", "click", function(sym, e) {
         window.open("./2/p2_oa1_rama4a_2.html", "_blank", "no,  width=1024, height=592");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'img1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1375, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("img1");
   //Edge symbol end:'img1'

   //=========================================================
   
   //Edge symbol: 'img2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("img2");
   //Edge symbol end:'img2'

   //=========================================================
   
   //Edge symbol: 'cursorhand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("cursorhand");
   //Edge symbol end:'cursorhand'

   //=========================================================
   
   //Edge symbol: 'flecha_derecha1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("flecha_derecha1");
   //Edge symbol end:'flecha_derecha1'

   //=========================================================
   
   //Edge symbol: 'flecha_derecha1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("flecha_izquierda1");
   //Edge symbol end:'flecha_izquierda1'

   //=========================================================
   
   //Edge symbol: 'scroll'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("scroll");
   //Edge symbol end:'scroll'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2508105735");