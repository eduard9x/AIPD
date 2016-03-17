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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 298, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         
         $(this.lookupSelector("Text2")).html("0");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 619, function(sym, e) {
         $(this.lookupSelector("Text2")).html("08");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // e.which tells you which key. e.g. 32 = space
         if (e.which == 83) {  //s
         
         	this.play("sun");
         	sym.getComposition().getStage().getSymbol("planeRight").play("start");
         
         	//sym.$("Stage").css("background-color","#34437b");
         	//$("body").css("background-color", "#34437b");
         }
         
         
         if (e.which == 77) {  //m
         
         	this.play("label 0800 HOLIDAY");
         	sym.getComposition().getStage().getSymbol("planeLeft").play("start");
         
         	//sym.$("Stage").css("background-color","#000000");
         	//$("body").css("background-color","#000000");
         }
         
         
         if (e.which == 48) {  //0
         this.play("label 0");
         sym.getComposition().getStage().getSymbol("planeRight").play("start");
         }
         
         
         /*
         0
         
         48
         
         1
         
         49
         
         2
         
         50
         
         3
         
         51
         
         4
         
         52
         
         5
         
         53
         
         6
         
         54
         
         7
         
         55
         
         8
         
         56
         
         9
         
         57
         */
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var title=$("title").text();
         $("body").prepend("<div class='future'><h1>" + title + "</h1></div>");
         
         //Center the Stage
         
         //sym.$("Stage").css({"margin-left":"auto","margin-right":"auto"});
         
         
         //$("body").css("background-color","#000000");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         $(this.lookupSelector("Text2")).html("080");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1424, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1865, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 H");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2365, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HO");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2918, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HOL");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3543, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HOLI");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4158, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HOLID");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4543, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HOLIDA");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         $(this.lookupSelector("Text2")).html("0800 HOLIDAY");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'plane1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("plane1");
   //Edge symbol end:'plane1'

   //=========================================================
   
   //Edge symbol: 'planeLeft'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("planeLeft");
   //Edge symbol end:'planeLeft'

   //=========================================================
   
   //Edge symbol: 'Guy'
   (function(symbolName) {   
   
   })("Guy");
   //Edge symbol end:'Guy'

   //=========================================================
   
   //Edge symbol: 'bag'
   (function(symbolName) {   
   
   })("bag");
   //Edge symbol end:'bag'

   //=========================================================
   
   //Edge symbol: 'purse'
   (function(symbolName) {   
   
   })("purse");
   //Edge symbol end:'purse'

   //=========================================================
   
   //Edge symbol: 'girl'
   (function(symbolName) {   
   
   })("girl");
   //Edge symbol end:'girl'

   //=========================================================
   
   //Edge symbol: 'dog'
   (function(symbolName) {   
   
   })("dog");
   //Edge symbol end:'dog'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'bone'
   (function(symbolName) {   
   
   })("bone");
   //Edge symbol end:'bone'

   //=========================================================
   
   //Edge symbol: 'tent'
   (function(symbolName) {   
   
   })("tent");
   //Edge symbol end:'tent'

   //=========================================================
   
   //Edge symbol: 'money'
   (function(symbolName) {   
   
   })("money");
   //Edge symbol end:'money'

   //=========================================================
   
   //Edge symbol: 'treasure'
   (function(symbolName) {   
   
   })("treasure");
   //Edge symbol end:'treasure'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3049482");