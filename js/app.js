$(document).ready(function(){
	// Set the interval to be 2 seconds
	var t = setInterval (function(){
		$("#carousel ul").animate({marginLeft:-60},1000)
	},2000);
});