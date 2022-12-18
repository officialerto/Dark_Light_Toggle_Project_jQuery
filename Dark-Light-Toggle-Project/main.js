$(document).ready(function() {
	
	$(".switch").click(function() {
		//Change background color
		$("body").toggleClass("inversed");
		$(this).find("i").toggleClass("fa-moon fa-sun");

	});

});

