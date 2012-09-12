
// Table of contents accordion
$(".table-of-contents").collapse();

$(".table-of-contents").on('shown', function () {
  	$('.toc-toggle span').fadeOut(function() {
  		$('.toc-toggle span').text("Hide all guides").fadeIn('fast');
	});
})

$(".table-of-contents").on('hidden', function () {
  $('.toc-toggle span').fadeOut(function() {
  		$('.toc-toggle span').text("Show all guides").fadeIn('fast');
	});
})

$(".video-container").fitVids();