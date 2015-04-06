$(document).ready(function(){
	
	var jsTimer = function () {
		var t = new Date();
		var sliceMe = t.toTimeString().slice(0, 8);
		var hours = sliceMe.slice(0, 2);
		var minutes = sliceMe.slice(3, 5);
		var seconds = sliceMe.slice(6, 8);
		var color = '#'+hours+minutes+seconds;
		var bodyBgColor = $('body').css('background-color', color);
		$('#theTime').html(hours + ':' + minutes + ':' + seconds);
	};
	var sliceMe = setInterval(function(){jsTimer();}, 1000);



});
