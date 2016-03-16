/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1612, function(e) {
// stop the timeline at the current position
this.stop();
$(this.lookupSelector("Text")).html("Now Press the 'm' key");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
// e.which tells you which key. e.g. 32 = space
if (e.which == 83) {  //s
	this.play("sun");
	//sym.$("Stage").css("background-color","#34437b");
	//$("body").css("background-color", "#34437b");
}

if (e.which == 77) {  //m
	this.play("moon");
	//sym.$("Stage").css("background-color","#000000");
	//$("body").css("background-color","#000000");
}

if (e.which == 49) {  //0

	this.play("hello");

}else{
	this.play("no");
}


});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
//var title=$("title").text();
//$("body").prepend("<div class='future'><h1>" + title + "</h1></div>");

//Center the Stage
//sym.$("Stage").css({"margin-left":"auto","margin-right":"auto"});

//$("body").css("background-color","#000000");



});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2890, function(e) {
$(this.lookupSelector("Text")).html("Press The 's' key: ");
});
//Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3291, function(sym, e) {
         this.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3702, function(sym, e) {
         this.stop();

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-18952100");