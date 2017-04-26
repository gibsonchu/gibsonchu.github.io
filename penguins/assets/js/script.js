$(document).ready(function() {
	setTimeout(function() {$('#nav, #title, #italic').fadeIn('slow')} , 7000);
	
	$(function(){
		$("#norm").typed({
			strings: ["a large flightless seabird of the southern hemisphere, with black upper parts and white underparts and wings developed into flippers for swimming under water."],
			typeSpeed: 0
		});
	});

});