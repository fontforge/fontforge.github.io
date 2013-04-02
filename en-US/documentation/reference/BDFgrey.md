---
published: true
layout: default
title: Extensions to Adobe's Bitmap Distribution Format for greymap (anti-aliased)
---


Adobe has defined a file format for distributing bitmap fonts called
BDF. MicroSoft extended this format to support greymap (anti-aliased,
each pixel representing various levels of grey rather than just
black/white) fonts. Recently others have started using this same format
([xmbdfed](http://crl.nmsu.edu/~mleisher/xmbdfed.html),
[freetype](http://freetype.sf.net/) and [fontforge](/)).

In Section 3.1 of the format description Adobe defines a "SIZE" keyword.
MicroSoft has added an optional fourth parameter to this keyword
 `         SIZE PointSize XRes YRes [Bits_Per_Pixel]`
 This fourth parameter may take the values 1, 2, 4 and 8. If omitted it
is assumed to be 1. (FontForge will also read in fonts with values of 16
and 32, but it will simply ignore any low order data and only retain the
high order byte).

FontForge will also include a font property
 `         BITS_PER_PIXEL Value`
 in all greymap fonts it generates.

FontForge will also mark all such fonts as version 2.3 of the bdf
standard 
 `         STARTFONT 2.3`

The bitmap data are stored with 8, 4, 2 or 1 pixels packed into a byte
depending on whether BITS\_PER\_PIXEL is 1, 2, 4 or 8. As in Adobe's
spec all data are presented in hex and an even number of nibbles must be
present.

**Example:**
 `  BITMAP   C8   ENDCHAR`
 Would represent the pixel sequences

Bits/Pixel

Pixels

1

1,1,0,0,1,0,0,0

2

3,0,2,0

4

C,8

8

C8


