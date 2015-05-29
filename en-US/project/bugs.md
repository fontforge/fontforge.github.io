---
published: true
layout: default
title: Known Bugs
---

Known Bugs
----------

> O, don't the days seem lank and long  
> When all goes right and nothing goes wrong,  
> And isn't your life extremely flat  
> With nothing whatever to grumble at!
> 
> *Princess Ida, Act III*, W.S. Gilbert (& Sullivan)

This list includes the gross bugs that I'm aware of but don't know how
to fix. Minor bugs get reported to me and are generally fixed within a
week and rarely appear on this list.

-   Some truetype fonts (kaiu and mingliu) do not store the correct
    outline. Instead they rely on using the instructions to move points
    around to generate the outline. The outline does not appear to be
    grid-fit at all, just positioned. FontForge does not apply the
    instructions when loading. In most fonts this would be the wrong
    thing to do, and I don't know how I could tell when it needs to be
    done...
-   After adding the Johab encoding 23/Nov/01, any old fonts (in sfd
    files) which had a unicode encoding will suddenly claim to have a
    Johab encoding. I don't see a way around this at the moment. Just
    reencode them as unicode and all should be well.
-   I'm told AutoKern doesn't work too well. (I may have fixed this, but
    I'm not sure)
-   FontForge is confused by small splines, on the order of one em unit.
    If you need something that small, scale the font up by a factor of 2
    or more (including the ascent and descent).
-   There is a fundamental problem when importing a type3 font (or an
    eps file). In an most postscript programs each contour is stroked or
    filled individually, but in a type1 character, all contours are
    filled together. This can lead to unexpected side-effects if
    contours overlap. (configuring fontforge for
    [mutlilayered](multilayer.html) editing can help with this)
-   On linux boxes the dashed lines representing hints or the outlines
    of references get screwed up. I think this is a bug in the XServer
    on linux (it doesn't happen on other systems) but I have not
    examined it closely.
-   FontForge will not copy and paste large (\>XServer transfer (4Meg on
    my machine)) clipboards of text.
-   Under gnome mnemonics in menus don't work. Personally I consider
    this a bug in gnome.
-   Under gnome, docked palettes don't work the first time. Personally I
    consider this a bug in gnome.
-   FontForge only produces an approximation to the OS/2 Codepages
    fields.
-   Some [commands](index.html#badcommands) don't work well in extreme
    conditions.

Reporting bugs...
-----------------

I'm sure you'll find some. If you can isolate it and come up with a
reproducible minimal case, that would be great. If your executable has
symbols in it, you could run it in gdb and get a stack trace... Give me
a test case if possible. Do what you can.

Please post bugs to:

[fontforge-devel@lists.sourceforge.net](mailto:fontforge-devel@lists.sourceforge.net)
(this is a public mailing list)

Post large testcases to:

[fontforge-testcases@lists.sourceforge.net](mailto:fontforge-testcases@lists.sourceforge.net)
(this is a public mailing list)
