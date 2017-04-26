$(document).ready(function() {

	 $('#left').click(function() {
    	var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	console.log(x);
    	if (x % 300 != 0) {
    		return false;
    	}
    	if (x == 0) {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', (x + 300) + "px");
   		};
  	});

	 $('#right').click(function() {
    	var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    	console.log(x);
    	if (x % 300 != 0) {
    		return false;
    	}
    	if ($('#carousel').css('margin-left')  == "-600px") {
      		return false;
    	} else {
      		$('#carousel').css('margin-left', (x - 300) + "px");
   	 	};
  	});
});