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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${buttonOver}", "click", function(sym, e) {
         window.open("http://www.google.co.uk", "_self");
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'buttonOver'
   (function(symbolName) {   
   
   })("buttonOver");
   //Edge symbol end:'buttonOver'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-5149343");