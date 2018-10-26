$(document).ready(function() {

	 $('#left').click(function() {
    	var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	
    	if (x % 300 != 0) {
    		return false;
    	}

      if (x  == -300|| x == 0) {
        $('#left').css('opacity', '0.2');
      } else {
        $('#left').css('opacity', '1');
      } 
      $('#right').css('opacity', '1');

    	if (x == 0) {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', (x + 300) + "px");
          var newX = parseInt($('#carousel').css('margin-left').replace("px", ""));
          console.log(x);
          if (newX == -300) {
            $(".adelie").fadeIn();
            $(".emperor, .african").fadeOut();
          } else if (newX == -600) {
            $(".african").fadeIn();
            $(".emperor, .adelie").fadeOut();
          } 
   		};
  	});

	 $('#right').click(function() {
    	var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	// console.log(x);
    	if (x % 300 != 0) {
    		return false;
    	}

      if (x  == -300 || x == -600) {
        $('#right').css('opacity', '0.2');
      } else {
        $('#right').css('opacity', '1');
      }
      $('#left').css('opacity', '1');

    	if ($('#carousel').css('margin-left')  == "-600px") {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', (x - 300) + "px");
          var newX = parseInt($('#carousel').css('margin-left').replace("px", ""));
          console.log(x);
          if (newX == -600) {
            $(".adelie").fadeIn();
            $(".emperor, .african").fadeOut();
          } else if (newX == 0) {
            $(".african").fadeIn();
            $(".emperor, .adelie").fadeOut();
          } else if (newX == -300) {
            $(".emperor").fadeIn();
            $(".african, .adelie").fadeOut();
          }
      };
  	});
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