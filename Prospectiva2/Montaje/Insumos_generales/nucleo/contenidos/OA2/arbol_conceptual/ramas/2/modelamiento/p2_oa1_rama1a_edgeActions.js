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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
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

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5700, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         window.open("./1/p2_oa1_rama1a.html", "_blank", "no,  width=1024, height=592");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GroupCopy2}", "click", function(sym, e) {
         window.open("./2/p2_oa1_rama1b_2.html", "_blank", "no,  width=1024, height=592");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GroupCopy4}", "click", function(sym, e) {
         window.open("./3/p2_oa1_rama1_3.html", "_blank", "no,  width=1024, height=592");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GroupCopy}", "click", function(sym, e) {
         window.open("./4/p2_oa1_rama1_4.html", "_blank", "no,  width=1024, height=592");

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