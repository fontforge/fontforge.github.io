---
layout: default
title: Macintosh font formats
---


The mac stores fonts in resources. It use to store resources in resource
forks (which have no representation on unix) but now (Mac OS/X) it also
stores them in data forks.

Apple (and Adobe) provide some documentation on the mac's formats:

-   [Mac Resource
    Fork](http://developer.apple.com/documentation/mac/MoreToolbox/MoreToolbox-9.html)
-   Mac
    [NFNT/FONT](http://developer.apple.com/documentation/mac/Text/Text-250.html)
    resource
-   Mac
    [FOND](http://developer.apple.com/documentation/mac/Text/Text-269.html)
    resource
-   Mac
    [sfnt](http://developer.apple.com/documentation/mac/Text/Text-253.html)
    resource
    -   This is basically a [truetype](http://fonts.apple.com/TTRefMan/)
        font file stuffed into a resource

-   The POST resource
    -   The connection between postscript file and FOND is described in
        the [Style Mapping
        Table](http://developer.apple.com/documentation/mac/Text/Text-275.html)
        of the FOND
    -   [Type1 postscript
        fonts](http://partners.adobe.com/asn/developer/PDFS/TN/T1_SPEC.PDF)are
        described by Adobe
    -   Adobe also describes how they are [wrapped up on the
        mac.](http://partners.adobe.com/asn/developer/PDFS/TN/0091.Mac_Fond.pdf)

-   [Macintosh
    scripts](http://developer.apple.com/documentation/mac/Text/Text-354.html)
    -   [Script
        codes](http://developer.apple.com/documentation/mac/Text/Text-367.html#HEADING367-0)

-   [Carbon (Mac OS/X)
    docs](http://developer.apple.com/documentation/macosx/Carbon/carbon.html)

I have not yet found a description of a data fork resource file. I have
determined empirically that they look almost the same as [resource fork
resource
files](http://developer.apple.com/documentation/mac/MoreToolbox/MoreToolbox-9.html)
except that the map table begins with 16 bytes of zeros rather than a
copy of the first 16 bytes of the file. To date I have only seen sfnt
(and FOND) resources in a data fork resource file (often called a .dfont
file).

FontForge does not support the old 'fbit' font format for CJK encodings
(but then neither does the Mac any more so that's probably not an
issue).

When an 'sfnt' resource contains a font with a multibyte encoding (CJK
or unicode) then the 'FOND' does not have entries for all the
characters. The 'sfnt' will (always?) have a MacRoman encoding as well
as the multibyte encoding and the 'FOND' will contain information on
just that subset of the font. (I have determined this empirically, I
have seen no documentation on the subject)

Currently bitmap fonts for multibyte encodings are stored inside an sfnt
(truetype) resource in the 'bloc' and 'bdat' tables. When this happens
there are a series of dummy 'NFNT' resources in the resource file, one
for each strike. Each resource is 26 bytes long (which means they
contain the FontRec structure but no data tables) and are flagged by
having rowWords set to 0. (I have determined this empirically, I have
seen no documentation on the subject)

When a 'sfnt' resource contains only bitmaps (and no glyph outlines) it
is sometimes called an 'sbit'.

Resource forks on Mac OS/X
--------------------------

The unix filename for the resource fork of the file "foo" is "foo/rsrc".
(I was told this and it appears to be correct, I have seen no
documentation on the subject)
