/*global jQuery */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() == 'object' || $this.attr('height') ) ? $this.attr('height') : $this.height(),
            width = $this.attr('width') ? $this.attr('width') : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  }
})( jQuery );


// TODO explore gregfranko.com/jquery.tocify.js/
// TODO explore http://www.jankoatwarpspeed.com/wp-content/uploads/examples/table-of-contents/

/*
 * jQuery autoTOC plugin
 *
 * http://sites.google.com/site/solidthingssite
 * Copyright (c) 2009-2010 Peter Binney
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */

// This nearly fits with the table-of-contents CSS that was designed for the site

(function($) {
	$.fn.autoTOC = function(options)
	{
		var version = '1.3 (24-Mar-2011)'
		var options = jQuery.extend({
			selector: "h1,h2,h3,h4,h5,h6",	// jQuery selector string to identify TOC items

			autoIndent: true,				// Whether to indent TOC items for elements that are (appear to be)
											// further down the "selector" list.
											// Assumes "selector" is ordered comma-separated list of tag names.
											// eg: with default ("h1,h2,h3,h4,h5,h6"), indents everything after H1
											// But, indent only happens if higher level selectors exist on the page.
											// ie: if doc only contains H6's, there's no indenting
			indentLevels: null,				// TBD

			cols: 4,						// Preferred number of columns in TOC (assuming enough items). Could be
											// more than this if too many orphans.

			colSuffixSections: null,		// Allows for adding arbitrary HTML to each column in the ToC.
											// If non-null, is an array of HTML to add to column(s) in the ToC.
											// The array is reverse-indexed from the last column.
											// ie: item[0] is appended to the last columen,
											//     item[1] to the penultimate one, etc.

			avoidOrphans: true,				// TRUE if selector is a precedence-ordered, comma-separated, list of tagnames
											// and child elements are not to be orphaned by a column break in the TOC.
											// Thus, with the default selector, an h2-generated item that is due to
											// fall at the end of a column will be pushed to the top of the next column if
											// it precedes an h3-generated one (that would otherwise be top of the next column).

			LIclassPrefix: null,			// If non-null, each LI in the TOC is given a CSS class of this name plus the
											// tagName of the element it was generated from as: prefix-tagName
											// eg: if prefix set to "TOC", an entry from an H2 would have class="TOC-H2"

			addInfo: false,
			debug: false
		}, options);

		if (options.debug)
			window.status = ""
		var items = $(options.selector)
		var rowsPerCol = parseInt((items.length + options.cols - 1) / options.cols)
		var cols = 0 	// Set in main function
		if (false)
			alert ("items=" + items.length + " cols=" + cols + " rowsPerCol=" + rowsPerCol)
		var tagName	// Set/updated by isColBreak()
		var indentSelectors = new Array()	// Non-empty if autoIndent-ing
		if (options.autoIndent)
		{
			options.indentLevels = new Array()	// Index: tagName (UPPER case)  Value: Indent level (0 is none)
			indentSelectors = options.selector.replace(/ /g, "").toUpperCase().split(",")
			for (var i=0; i < indentSelectors.length; i++)
				options.indentLevels[indentSelectors[i]] = i
		}

		return this.each(function()
		{
			var autoAnchorsAdded = 0
			var autoAnchorBase = ""
			var autoAnchorBaseSearches = 0
			var autoAnchorFailures = 0
			var TOChtml = ""
			var colEnd = ""
			var col = 0
			var rowsThisCol = 0
			var indentLevel = 0
			var minIndentLevel = -1	// 0+ value used
			var indentLevels = new Array()	// Working copy of options.indentLevels, with tags restricted to those
											// found in the document and levels normalised to 0, 1, ... etc
			// Run through items to count columns and work out what selectors we have
			for (var i=0; i < items.length; i++)
			{
				if (isColBreak(i, rowsThisCol))
				{
					cols++
					rowsThisCol = 0
				}
				rowsThisCol++	// Needed for addToLastCol processing
				if (indentSelectors.length > 0 && options.indentLevels[tagName])
					indentLevels[tagName] = -1	// Note all tagNames with -1 indent value for now
			}
			for (var i=0, j=0; i < indentSelectors.length; i++)
			{	// Allocate indent levels to selectors in this document
				var selector = indentSelectors[i]
				if (indentLevels[selector] == -1)
					indentLevels[selector] = j++
			}
			if (options.debug)
			{
				var s = ""
				for (var i in indentLevels)
					s += "\n" + i + " : " + indentLevels[i]
				alert (indentSelectors.length + "-Selectors: " + indentSelectors
					+ " " + indentLevels.length + " indentLevels:" + s)
			}

			rowsThisCol = 0
			var indentLevel = 0		// Current (if any) indent level.
			for (var i=0; i < items.length; i++)
			{
				if (isColBreak(i, rowsThisCol))
				{	// Start first/new column
					if (i > 0)
					{	// New column
						for (var j=0; j < indentLevel; j++)
							TOChtml += colEnd	// End any indenting
						TOChtml += colEnd + colSuffix(col) + "</td>"
					}
					col++
					rowsThisCol = 0
					TOChtml += "<td><ul>\n"
					colEnd = "</ul>"
					indentLevel = indentLevels[tagName]
					for (var j=0; j < indentLevel; j++)
						TOChtml += "<ul>"	// If column starts with non-0 indent tag, push in UL's to match its level
				}
				var item = $(items.get(i))
				var A = $(item).find("a[name]")
				var anchor = "notKnown!"
				var itemIndent = indentLevels[tagName]
				var	tooltip = " indentLevel=" + indentLevel + " itemIndent=" + itemIndent 
				if (indentLevel > itemIndent)
				{	// Need to reduce indent
					for (; indentLevel > itemIndent; indentLevel--)
						TOChtml += colEnd
				}
				else if (indentLevel < itemIndent)
				{	// Need to increase indent
					for (; indentLevel < itemIndent; indentLevel++)
						TOChtml += "<ul>"
				}
				tooltip = " title='From " + tagName + " indent=" + itemIndent + tooltip + "'"
				if (!options.debug)
					tooltip = ""
				if (A.length > 0)
					anchor = $(A[0]).attr("name")
				else
				{
					if (autoAnchorBase == "")
					{
						autoAnchorBaseSearches++
						autoAnchorBase = getAutoAnchorBase()
						if (autoAnchorBase == "")
							autoAnchorFailures++
					}
					if (autoAnchorBase != "")
					{
						anchor = autoAnchorBase + "-" + (++autoAnchorsAdded)
						$(item).wrapInner("<a name='" + anchor + "'></a>")
					}
				}
				var CSSclass = ""
				if (options.LIclassPrefix &&
				    $.trim(options.LIclassPrefix) != "" &&
				    tagName != "" )
					CSSclass = " class='" + options.LIclassPrefix + "-" + tagName + "'"

				// if this tag indent level higher than current
				//     slip in UL and note
				// elseif indenting and this tag lower than current
				//     remove indent

				TOChtml += "<li" + CSSclass + tooltip + "><a href='#" + anchor + "'>"
				         + item.text()
				         + "</a></li>\n"
				rowsThisCol++
			}
			if (colEnd != "")
				TOChtml += colEnd + colSuffix(col) + "</td>\n"
			var info = ""
			if (options.addInfo || autoAnchorFailures > 0)
				info = " title='Generated by autoTOC version " + version
				     + "\n items=" + items.length
				     + "\n autoAnchorsAdded=" + autoAnchorsAdded 
				     + (autoAnchorFailures > 0 ? "\n autoAnchorFailures=" + autoAnchorFailures : "")
				     + "'"
			$(this).append("<table width='100%'" + info + "><tr>\n" + TOChtml + "</tr></table>\n")
		});

		function isColBreak(i, rowsThisCol)
		{
			tagName = items[i].tagName ? $.trim(items[i].tagName).toUpperCase() : ""
			var colBreak = rowsThisCol % rowsPerCol == 0
			if (!colBreak && ((i+1) < items.length) && options.avoidOrphans)
			{	// On last row of column. Check if we need to push this item to top of next one to prevent orphaning child.
				var nextTagName = items[i+1].tagName ? $.trim(items[i+1].tagName).toUpperCase() : ""
				var tags = options.selector.toUpperCase().split(',')
				for (var j=0; !colBreak && j < tags.length-1; j++)
				{
					var tag = $.trim(tags[j])
					var nextTag = $.trim(tags[j+1])
					if (tag == tagName && nextTag == nextTagName)
						colBreak = true
				}
			}
			return colBreak
		};

		function getAutoAnchorBase()
		{
			var bases = ["autoTOC", "AutoTOC", "_autoTOC"]
			for (var i in bases)
			{
				for (var n=0; n < 1000; n *= 10)
				{
					var N = "" + n
					if (n == 0)
					{
						n = 1
						N = ""
					}
					if ($("a[name^=" + bases[i] + N + "]").length < 1)
						return bases[i] + N
				}
			}
			return ""
		};

		function colSuffix(col)
		{
			if (col > 0 &&
			    options.colSuffixSections &&
			    options.colSuffixSections.length > 0)
			{
				var suffixIndex = cols - col
				if (suffixIndex >= 0 &&
					suffixIndex < options.colSuffixSections.length &&
			        options.colSuffixSections[suffixIndex])
				{
					return "\n" + options.colSuffixSections[suffixIndex] + "\n"
				}
			}
			return ""
		};
	};
})(jQuery);

/*!
  * jquery.toc.js - A jQuery plugin that will automatically generate a table of contents. 
  * v0.1.1
  * https://github.com/jgallen23/toc
  * copyright JGA 2012
  * MIT License
  */
!function(e){e.fn.toc=function(t){var n=this,r=e.extend({},jQuery.fn.toc.defaults,t),i=e(r.container),s=e(r.selectors,i),o=[],u=r.prefix+"-active",a=function(t){for(var n=0,r=arguments.length;n<r;n++){var i=arguments[n],s=e(i);if(s.scrollTop()>0)return s;s.scrollTop(1);var o=s.scrollTop()>0;s.scrollTop(0);if(o)return s}return[]},f=a(r.container,"body","html"),l=function(t){if(r.smoothScrolling){t.preventDefault();var i=e(t.target).attr("href"),s=e(i);f.animate({scrollTop:s.offset().top},400,"swing",function(){location.hash=i})}e("li",n).removeClass(u),e(t.target).parent().addClass(u)},c,h=function(t){c&&clearTimeout(c),c=setTimeout(function(){var t=e(window).scrollTop(),i;for(var s=0,a=o.length;s<a;s++)if(o[s]>=t){e("li",n).removeClass(u),i=e("li:eq("+(s-1)+")",n).addClass(u),r.onHighlight(i);break}},50)};return r.highlightOnScroll&&(e(window).bind("scroll",h),h()),this.each(function(){var t=e(this),n=e("<ul/>");s.each(function(i,s){var u=e(s);o.push(u.offset().top-r.highlightOffset);var a=e("<span/>").attr("id",r.anchorName(i,s,r.prefix)).insertBefore(u),f=e("<a/>").text(r.headerText(i,s,u)).attr("href","#"+r.anchorName(i,s,r.prefix)).bind("click",function(n){l(n),t.trigger("selected",e(this).attr("href"))}),c=e("<li/>").addClass(r.itemClass(i,s,u,r.prefix)).append(f);n.append(c)}),t.html(n)})},jQuery.fn.toc.defaults={container:"body",selectors:"h1,h2,h3",smoothScrolling:!0,prefix:"toc",onHighlight:function(){},highlightOnScroll:!0,highlightOffset:100,anchorName:function(e,t,n){return n+e},headerText:function(e,t,n){return n.text()},itemClass:function(e,t,n,r){return r+"-"+n[0].tagName.toLowerCase()}}}(jQuery)

/*
 * jQuery Dynamic Breadcrumbs v1.0
 * http://code.google.com/p/jquery-dynamic-breadcrumbs/
 * http://twitter.com/blackdynamo
 * http://developingwithstyle.blogspot.com/
 *
 * Copyright 2010, Donnovan Lewis
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */

// TODO remove the first item of the crumb that is dropped as its the language
// TODO add a > like the liquid breadcrumbs have
// TODO add a home icon 

!(function($) {
    $.fn.dynamicBreadcrumbs = function(options)
    {
        //Capitalize extension for String
        String.prototype.capitalize = String.prototype.capitalize || function(){
            return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
        }; 
    
        //Defaults are below
        var settings = $.extend({}, $.fn.dynamicBreadcrumbs.defaults, options);
    
        return this.each(function(){
            setUpTrail($(this));
        });
        
        function setUpTrail(container){
			var path = settings.firstCrumbLabel + $(location).attr("pathname");
			console.log(path)
			var paths = path.split("/");
			console.log(paths)
            var labels = cleanse(paths.slice(0));
			console.log(labels)
            
            //Don't build any crumbs if the page is at the root
            if(labels.length <= 2) return;
            
            var crumbs = new Array();
            crumbs.push({name: labels[0], value: "/"}); //Initialize first crumb
            
            var list = $("<ul>");
            list.append(buildCrumb(crumbs[0]).addClass(settings.firstCrumbClass)); //Add first crumb
            
            //Build remaining crumbs
            for(var i = 1; i < labels.length-1; i++){
                crumbs.push({name: labels[i], value: crumbs[i-1].value + paths[i] + "/"});
                if(i == labels.length-1)
                    list.append(buildLastCrumb(crumbs[i]));
                else
                    list.append(buildCrumb(crumbs[i]));
            }
            
            container.append(list);
        }
        
		function cleanse(labels){
			for(var i = 0; i < labels.length; i++){
				//Remove all dashes
				labels[i] = labels[i].replace(/-/gi, " ");
				
				//Remove all .html
				labels[i] = labels[i].replace(/.html/gi, "");
				
				//Handle crumb case
				if(settings.crumbCase == "uppercase")
				    labels[i] = labels[i].toUpperCase();
				else if(settings.crumbCase == "lowercase")
				    labels[i] = labels[i].toLowerCase();
				else
				    labels[i] = labels[i].toLowerCase().capitalize();
				    
				//Replace keywords
				for(var w = 0; w < settings.keywords.length; w++){
				    labels[i] = labels[i].replace(eval("/"+settings.keywords[w]+"/gi"), settings.keywords[w])
			    }
			}
			
			return labels;
		}
		
        function buildCrumb(crumb){
            return $("<li>").append($("<a>").attr("href", crumb.value).append(crumb.name));
        }
        
        function buildLastCrumb(crumb){
            return $("<li>").append(crumb.name);
        }
    }
    
    jQuery.fn.dynamicBreadcrumbs.defaults = {
        firstCrumbLabel: "Home",
        firstCrumbClass: "first",
        crumbCase: "capitalize", //lowercase,uppercase,capitalize
        keywords: ['en US']
    }
})(jQuery);



// PREVIOUSLY IN FONTFORGE.JS //


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