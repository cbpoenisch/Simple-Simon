"use strict";

$(document).ready(function() {
	var colors = ['0', '1', '2', '3'];
	var colorSeq = [];
	var userInput = [];



	if (true) {

		function randomColor() {
		return colors[Math.floor((Math.random()*3))];
		
		var random    = randomColor();
		var boxes     = $('.pads').children();
		var randomBox = $(boxes [random]);

		var lightBox = function (){
			$(randomBox).fadeTo(fadeDelay, 0.5, function() {
				index++;
				if (index <colorSeq.length){
					setTimeout(displaySequence, 1000);
				}
			});
	}



		
	
});

