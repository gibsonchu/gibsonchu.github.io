$(document).ready(function() {
	setTimeout(function() {$('#about-box').fadeIn('slow')} , 500);

	$("#sidebar-button").click(function() {
	    if ($(".nav").hasClass('sidebar-active')) {
	      $('body').removeClass('no-scroll');
	      $('#sidebar-button').removeClass('button-active');
	      $('.nav').removeClass('sidebar-active');
	    } else {
	      $('#sidebar-button').addClass('button-active');
	      $('.nav').addClass('sidebar-active');
	      setTimeout(function() 
	        {$('body').addClass('no-scroll');
	      }, 300);
	    };
	});
});