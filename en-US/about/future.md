---
published: true
layout: default
title: Possible future improvements to FontForge
---


Currently under development
---------------------------

-   Moving to the gtk-2 widget set.
    -   Don't expect anything soon. I don't find this an interesting
        task. One widget set is much like another, such a conversion is
        a lot of work and doesn't involve any functional improvement.
        (Indeed I am currently ignoring this because gdk is *less*
        capable of dealing with images than my own drawing system -- at
        least in the ways that matter to me, and I don't want to rewrite
        all my image code)

-   A command that will allow you to (but this has been listed here for
    a couple of years so don't expect anything much)
    -   Make a character/font bolder
    -   Extend or Condense a character/font
    -   Change the X-Height of a font
    -   Regularize stem widths

Musings
-------

-   multiple baseline support
-   Vertical metrics in embedded ttf bitmaps
-   Better import of xfig files (a real X-Spline -\> Bézier spline
    converter)
-   Mechanism for creating fonts with multiple instances of the same
    character, each slightly different, coupled with a postscript
    routine which will for each character in a string, pick a random
    version of that character to display. An attempt to yield a slight
    non-uniformity to the font which may make its output look more
    interesting.
-   A better way of aligning things. (need some form of grouping that is
    actually useful)

Last updated: 12-Feb-2004


