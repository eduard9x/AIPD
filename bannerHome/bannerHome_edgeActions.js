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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'weelback'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("weelback");
   //Edge symbol end:'weelback'

   //=========================================================
   
   //Edge symbol: 'weelfront'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("weelfront");
   //Edge symbol end:'weelfront'

   //=========================================================
   
   //Edge symbol: 'car'
   (function(symbolName) {   
   
   })("car");
   //Edge symbol end:'car'

   //=========================================================
   
   //Edge symbol: 'carsimb'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("carsimb");
   //Edge symbol end:'carsimb'

   //=========================================================
   
   //Edge symbol: 'baloon'
   (function(symbolName) {   
   
   })("baloon");
   //Edge symbol end:'baloon'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-174030768");