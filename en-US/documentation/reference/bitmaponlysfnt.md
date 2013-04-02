---
published: true
layout: default
title: Several formats for bitmap only sfnts (truetype files)
---


Unfortunately every system has its own way of storing bitmap only fonts
into an sfnt wrapper (or the system just doesn't support it)

-   [Apple](#Apple)
-   [X11 (Unix/Linux)](#X11)
-   [MS](#MS)

Apple
-----

Apple documents the existence of a bitmap only format, and gives some
hints about the requirements of it. Their documentation is far from
complete and the following is determined in part by that documentation,
in part by examining the (few) bitmap only fonts of theirs I have found,
and in part by error messages given by some of their tools.

-   As is expected on Apple, the bitmap data reside in '`bloc`' and
    '`bdat`' tables.
     (These are identical in format to the '`EBLC`' and '`EBDT`' tables
    used in OpenType)
-   The '`head`' table is replaced by a '`bhed`' table which is byte for
    byte identical
-   There are no '`glyf`', '`loca`' nor '`CFF` ' tables.
-   There are no '`hhea`' nor '`hmtx`' tables (metrics data are provided
    in the bitmap strikes themselves)
-   (Presumably there are no '`vhea`' nor '`vmtx`' tables either)
-   '`maxp`'.`numGlyphs` is set to the number of bitmap glyphs

X11 (Unix/Linux)
----------------

The X consortium have devised their own format which they call "OpenType
Bitmap" with extension .otb.

-   The bitmap data reside in '`EBLC`' and '`EBDT`' tables.
-   There is a zero length '`glyf`' table
-   There is a '`loca`' table with one entry in it
-   There is a '`head`' table (not a '`bhed`')
-   '`maxp`'.`numGlyphs` is set to the number of bitmap glyphs, not to
    the size of the '`loca`' table

    * * * * *

-   The fonts I generate also contain the metrics tables as appropriate

MS
--

MicroSoft Windows provides no support for a bitmap only sfnt. So I have
created a faked up format which should work in most cases

-   The bitmap data reside in '`EBLC`' and '`EBDT`' tables.
-   There are '`glyf`' / '`loca`' tables with entries for every glyph.
    If used the entries will produce blank glyphs (spaces).
-   There is an '`EBSC`' table which maps common pixel sizes to the
    supplied pixel sizes. (so if a user asked for a 20 pixel strike s/he
    might get an 18 pixel strike -- as opposed to getting a set of
    blanks.
-   There is a '`head`' table (not a '`bhed`')
-   Since these fonts try to look like scalable fonts (to MS anyway)
    they contain metrics tables.

