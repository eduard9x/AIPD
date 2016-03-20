/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${link}", "click", function(sym, e) {
         window.open("https://www.airbnb.com","_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'first'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("first");
   //Edge symbol end:'first'

   //=========================================================
   
   //Edge symbol: 'second'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("second");
   //Edge symbol end:'second'

   //=========================================================
   
   //Edge symbol: 'third'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("third");
   //Edge symbol end:'third'

   //=========================================================
   
   //Edge symbol: 'fourth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("fourth");
   //Edge symbol end:'fourth'

   //=========================================================
   
   //Edge symbol: 'fifth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("fifth");
   //Edge symbol end:'fifth'

   //=========================================================
   
   //Edge symbol: 'sixth'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

   })("sixth");
   //Edge symbol end:'sixth'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'link'
   (function(symbolName) {   
   
   })("link");
   //Edge symbol end:'link'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5170057");