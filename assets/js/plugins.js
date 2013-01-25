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
/*!
  * jquery.toc.js - A jQuery plugin that will automatically generate a table of contents. 
  * v0.1.1
  * https://github.com/jgallen23/toc
  * copyright JGA 2012
  * MIT License
  */
!function(e){e.fn.toc=function(t){var n=this,r=e.extend({},jQuery.fn.toc.defaults,t),i=e(r.container),s=e(r.selectors,i),o=[],u=r.prefix+"-active",a=function(t){for(var n=0,r=arguments.length;n<r;n++){var i=arguments[n],s=e(i);if(s.scrollTop()>0)return s;s.scrollTop(1);var o=s.scrollTop()>0;s.scrollTop(0);if(o)return s}return[]},f=a(r.container,"body","html"),l=function(t){if(r.smoothScrolling){t.preventDefault();var i=e(t.target).attr("href"),s=e(i);f.animate({scrollTop:s.offset().top},400,"swing",function(){location.hash=i})}e("li",n).removeClass(u),e(t.target).parent().addClass(u)},c,h=function(t){c&&clearTimeout(c),c=setTimeout(function(){var t=e(window).scrollTop(),i;for(var s=0,a=o.length;s<a;s++)if(o[s]>=t){e("li",n).removeClass(u),i=e("li:eq("+(s-1)+")",n).addClass(u),r.onHighlight(i);break}},50)};return r.highlightOnScroll&&(e(window).bind("scroll",h),h()),this.each(function(){var t=e(this),n=e("<ul/>");s.each(function(i,s){var u=e(s);o.push(u.offset().top-r.highlightOffset);var a=e("<span/>").attr("id",r.anchorName(i,s,r.prefix)).insertBefore(u),f=e("<a/>").text(r.headerText(i,s,u)).attr("href","#"+r.anchorName(i,s,r.prefix)).bind("click",function(n){l(n),t.trigger("selected",e(this).attr("href"))}),c=e("<li/>").addClass(r.itemClass(i,s,u,r.prefix)).append(f);n.append(c)}),t.html(n)})},jQuery.fn.toc.defaults={container:"body",selectors:"h1,h2,h3",smoothScrolling:!0,prefix:"toc",onHighlight:function(){},highlightOnScroll:!0,highlightOffset:100,anchorName:function(e,t,n){return n+e},headerText:function(e,t,n){return n.text()},itemClass:function(e,t,n,r){return r+"-"+n[0].tagName.toLowerCase()}}}(jQuery)