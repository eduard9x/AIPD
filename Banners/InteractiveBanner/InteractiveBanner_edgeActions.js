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
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("08");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         var myText;
         
         if (e.which == 48) {  //0
         this.play("label 0");
         sym.getComposition().getStage().getSymbol("planeRight").play("start");
         }
         
         if (e.which == 56) {  //08
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0")
         this.play("label 08");
         }
         
         if (e.which == 55) {  //087
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="08")
         this.play("label 087");
         }
         
         if (e.which == 53) {  //0875
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="087")
         this.play("label 0875");
         }
         
         if (e.which == 72) {  //0875 H
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875")
         this.play("label 0875 H");
         }
         
         if (e.which == 79) {  //0875 HO
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 H")
         this.play("label 0875 HO");
         }
         
         if (e.which == 76) {  //0875 HOL
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 HO")
         this.play("label 0875 HOL");
         }
         
         if (e.which == 73) {  //0875 HOLI
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 HOL")
         this.play("label 0875 HOLI");
         }
         
         if (e.which == 68) {  //0875 HOLID
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 HOLI")
         this.play("label 0875 HOLID");
         }
         
         if (e.which == 65) {  //0875 HOLIDA
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 HOLID")
         this.play("label 0875 HOLIDA");
         }
         
         if (e.which == 89) {  //0875 HOLIDAY
         myText = sym.$("Text2").html(); // You get text.
         if(myText=="0875 HOLIDA"){
         this.play("label 0875 HOLIDAY");
         sym.getComposition().getStage().getSymbol("planeLeft").play("start");
         }
         }

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
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("087");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1424, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1865, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 H");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2365, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HO");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2918, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HOL");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3543, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HOLI");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4158, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HOLID");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4543, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HOLIDA");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4900, function(sym, e) {
         // stop the timeline at the current position
         this.stop();
         $(this.lookupSelector("Text2")).html("0875 HOLIDAY");

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

   //=========================================================
   
   //Edge symbol: 'beforeKeydown'
   (function(symbolName) {   
   
   })("beforeKeydown");
   //Edge symbol end:'beforeKeydown'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3049482");