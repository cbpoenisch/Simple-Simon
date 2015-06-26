we put angular modules inside of self-invoking functions 

(function () {
	"use strict"

	var app = angular.module("apolloModule", []);
}) ();

good practice for the module name to match the file name
define module in its own file
put it in its own self invoking function
calling the module variable app is convention
module name must be in a string with an array after
bootstrap module in your html 
you can bootstrap angular modules to different elements of your page 
angular allows us to inject code at any part of our page


MODELS

add novalidate to form tag 