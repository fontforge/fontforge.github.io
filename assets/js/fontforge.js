// set the area as a class of <body> which has appropriate CSS to 
// color the subnav.
//   jurlp array magic is like this
//   http://fontforge.github.io/en-US/about/site/translations.html
//                                     ^^^^^
var siteArea = $(document).jurlp("path")[0][1];
$('body').addClass(siteArea);

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

// Breadcrumbs active highlight

$(".breadcrumb li").last().addClass('active');

// dynamicBreadcrumbs(), turned off until it works
// $("#breadcrumbs").dynamicBreadcrumbs(); 

// Table of Contents generator

$(document).ready(function() { 
// autoTOC
//	$("#toc").autoTOC({cols: 2, selector: "content h2,h3,h4,h5,h6"})

/* self contained TOC maker
    $("h2,h3").each(function(i) {
        var current = $(this);
        current.attr("id", "title" + i);
        
        var pos = current.position().top / $("#content").height() * $(window).height();

        $("#toc").append("<a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a>");
        $("#link" + i).css("top", pos);
    });
*/

// jquery.toc.js
	$('#toc').toc({
	    'selectors': 'h2,h3', //elements to use as headings
	    'container': '#content', //element to find all selectors in
	    'smoothScrolling': true, //enable or disable smooth scrolling on click
	    'prefix': 'toc', //prefix for anchor tags and class names
	    'onHighlight': function(el) {}, //called when a new section is highlighted 
	    'highlightOnScroll': true, //add class to heading that is currently in focus
	    'highlightOffset': 100, //offset to trigger the next headline
	    'anchorName': function(i, heading, prefix) { //custom function for anchor name
	        return prefix+i;
	    },
	    'headerText': function(i, heading, $heading) { //custom function building the header-item text
	        return $heading.text();
	    },
	'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
	  return $heading[0].tagName.toLowerCase();
	}
	});
});