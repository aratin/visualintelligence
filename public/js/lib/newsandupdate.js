$(document).ready(function() {
	var $contents = $(".content").hide();	
	jQuery(".content").hide();
	//toggle the componenet with class msg_body
	jQuery(".heading").click(function()	{
		var $next = $(this).next(".content").stop(true, true).slideToggle(500);
		$contents.not($next).hide();
		$contents.stop(true, true).slideDown();
	});
	jQuery(".heading1").click(function () {
		$contents.stop(true, true).slideUp();
	});
    $(".expand").show(function () {
        $contents.stop(true, true).slideDown();
    });

});
