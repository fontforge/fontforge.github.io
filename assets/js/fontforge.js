
// Table of contents accordion
$(".table-of-contents").collapse();

$(".table-of-contents").on('shown', function () {
  	$(this).find(".toc-toggle span").fadeOut(function() {
  		$(this).text("Hide all guides").fadeIn('fast');
	});
})

$(".table-of-contents").on('hidden', function () {
  $(this).find(".toc-toggle span").fadeOut(function() {
  		$(this).text("Show all guides").fadeIn('fast');
	});
})

$(".video-container").fitVids();