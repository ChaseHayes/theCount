$(document).ready(function(){

	//hide elements so they can fade in
	$("h1").hide();
	$("h2").hide();
	$("#clockdiv").hide();

	//fade in elements here
	$("h1").fadeIn(1000);
	$("h2").delay(1000).fadeIn(1000);
	$("#clockdiv").delay(2000).fadeIn(1000);
	
});