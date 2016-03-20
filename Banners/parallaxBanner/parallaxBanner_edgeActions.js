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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getComposition().getStage().getSymbol("rainCloud1").play("rain");
         sym.getComposition().getStage().getSymbol("rainCloud2").play("rain");
         sym.getComposition().getStage().getSymbol("rainCloud3").play("rain");
         
         this.onMove = function( posX, posY ){
         var stageWidth = sym.$("Stage").parent().width();
         timelineControl = Number(posX)/stageWidth*10000;
         sym.stop(timelineControl);
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         var x = e.pageX;
         
         this.onMove( e.pageX, e.pageY );
         sym.getComposition().getStage().getSymbol("rainCloud1").play("stopRain");
         sym.getComposition().getStage().getSymbol("rainCloud2").play("stopRain");
         sym.getComposition().getStage().getSymbol("rainCloud3").play("stopRain");
         
         $(this.lookupSelector("Text")).html("You are a weather GOD.");
         
         sym.$( "Stage" ).css({ 
         "background-color": "#c7e0ee",
         "overflow": "hidden"
         });
         
         
         sym.$( "sun" ).css({ 
         "opacity": "100"
         });
         
         sym.$( "rainCloud3" ).css({ 
         "opacity": "0"
         });
         
         sym.$( "rainCloud1" ).css({ 
         "opacity": "0"
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         sym.play();
         sym.getComposition().getStage().getSymbol("rainCloud1").play("rain");
         sym.getComposition().getStage().getSymbol("rainCloud2").play("rain");
         sym.getComposition().getStage().getSymbol("rainCloud3").play("rain");
         
         $(this.lookupSelector("Text")).html("Take control of your holiday weather cast.");
         
         sym.$( "Stage" ).css({ 
         "background-color": "#387294",
         "overflow": "hidden"
         });
         
         sym.$( "rainCloud3" ).css({ 
         "opacity": "100"
         });
         
         sym.$( "rainCloud1" ).css({ 
         "opacity": "100"
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("http://www.google.co.uk","_self");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'drop1'
   (function(symbolName) {   
   
   })("drop1");
   //Edge symbol end:'drop1'

   //=========================================================
   
   //Edge symbol: 'drop2'
   (function(symbolName) {   
   
   })("drop2");
   //Edge symbol end:'drop2'

   //=========================================================
   
   //Edge symbol: 'drop3'
   (function(symbolName) {   
   
   })("drop3");
   //Edge symbol end:'drop3'

   //=========================================================
   
   //Edge symbol: 'cloud1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play("rain");

      });
      //Edge binding end

   })("cloud1");
   //Edge symbol end:'cloud1'

   //=========================================================
   
   //Edge symbol: 'cloudSym3'
   (function(symbolName) {   
   
   })("cloudSym3");
   //Edge symbol end:'cloudSym3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-215168469");