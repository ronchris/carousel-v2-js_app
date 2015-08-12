// $(document).ready(function() {

// 	// Set interval to 2 seconds
// 	var t = setInterval(function(){
// 		$("#carousel ul").animate({marginLeft:-60},"slow",function(){
// 			$('#carousel ul').css({marginLeft:0});
// 			setInterval();
// 		})
// 	},2000);
// });

$(document).ready(function() {
  function loop() {
    $('#carousel ul').css({marginLeft:100});
      $('#carousel ul').animate ({
        marginLeft: '+=-200',
      }, 10000, 'linear', function() {
        loop();
    });
  }
  loop();
});

