---
published: true
layout: default
title: The CID Menu and CID keyed fonts
---


The CID Menu provides a few commands for manipulating CID keyed fonts.
If the current font is a CID keyed font the menu also includes a list of
all subfonts that make up this one. This menu is only available in the
font view.

[table_of_contents]


### Er... What is a CID keyed Font?

A CID keyed font is a postscript (or opentype) font designed to hold
Chinese, Japanese and Korean characters efficiently. More accurately a
CID font is a collection of several sub-fonts each with certain common
features (one might hold all the latin letters, another all the kana, a
third all the kanji). This allows font-wide hinting to be crafted for
subsets of glyphs to which have something in common.

CID keyed fonts do not have an encoding built into the font, and the
glyphs do not have names. Instead the font is associated with a glyph
set and on each glyph set there are several character mappings defined.
These mappings are similar to encodings but allow for a wider range of
behaviors.

A CID is a glyph index and is used to look up glyph descriptions instead
of glyph names in other types of fonts. Using a glyph set FontForge will
often be able to map a CID to a unicode character name (but not always),
so FontForge will give glyphs names when it can.

For more information see the [section on CID keyed fonts on the font
view page](../fontview/#CID).


#### Convert to CID

If the current font is not a CID font then this command will convert it
into one containing one subfont (with the glyphs in this font). You will
be prompted for a glyph set.


#### Convert By CMap

If the current font is not a CID font then this command will convert it
into one containing a single subfont. You will be prompted for an Adobe
CMap file.


#### Flatten

If the current font is a CID font then this command will convert it into
a normal (flat) font by taking all the glyphs from all the sub-fonts and
merging them into one normal font. The new font should be in the same
order as the CID font (ie. ordered by CID). After this operation you may
re-encode it into whatever encoding is appropriate.


#### Flatten By CMap

If the current font is a CID font then this command will convert it into
a normal font. It prompts you for an Adobe CMap file and uses that to
define an encoding for the resultant font.


#### Insert Font

Will allow you to browse for a normal font which will be added as
another sub font to the current CID font.


#### Insert Blank

Inserts a blank sub-font into the current CID font.


#### Remove Font

Removes the current font from the CID font. Anything in it will be lost.
(If you want to save it first then use Generate Font and save it as a
pfb file (or any other simple format).


#### Change Supplement...

Displays the Registry/Ordering information of the font and allows you to
change the Supplement level.


#### CID Font Info

This allows you to provide information on the entire collection of
subfonts rather than just the current subfont. It provides access to the
standard [font info dialog](../fontinfo/).


#### (sub font name)

Clicking on a different sub font name in the menu will cause that
sub-font to be displayed instead of the current one.
