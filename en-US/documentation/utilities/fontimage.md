---
published: true
layout: default
title: fontimage -- generate a font thumbnail image
---


`fontimage [--o outfile] [--width num] [--height num] [--pixelsize num]   [--fontname] [--text string] [--version] [--help] fontfile`

*Fontimage* produces a thumbnail image of a font (which may be in any
format [fontforge](/en-US/tutorials/overview/) can read).

You may either explicitly specify text to be displayed in the font, or
rely on fontimage's default behavior, which is to check for various
scripts it knows about and display something appropriate for each one
present.

`--help`

Displays a list of arguments and descriptions of each.

`--width num`

Specifies the width (in pixels) of the output image. If omitted the
image will be as wide as it needs to be to display the text.

`--height num`

Specifies the height (in pixels) of the output image. If omitted the
image will be as high as it needs to be to display the text.

`--o outputfile`

Specifies the name of the output image file. The format is determined by
the extension. Currently only ".bmp" and ".png" are supported. If
omitted, fontimage will choose a filename based on the fontname of the
font.

`--pixelsize num`

Specifies the pixelsize at which to display text. This may be specified
multiple times. Each specification applies to any --text arguments which
occur after it.

`--fontname`

Include the fontname as a line of text.

`--text string`

Specifies a string to be displayed. The string *must* be in UTF-8. This
option may be provided multiple times to supply more than one line of
text. If omitted entirely, fontimage will examine the scripts it knows
about in the font and will display text appropriate to each one present.

`--version`

Displays the fontimage version.

### See Also

[FontForge](/en-US/tutorials/overview/)

* * * * *

### Example

Font: Ambrosia Bold Ambrosia Italic Ambrosia Outline Ambrosia Andrade
Swash Baldur Bastarda Bocklin Caliban Caprice Carmen Caslon Black Caslon
Italic Caslon Roman Caslon Bold Crystal Cupola BoldItalic Cupola Bold
Cupola Italic Cupola Cupola SmallCaps Decorative Dufrene Type3 Edda
Filled Edda Narrow Edda Outline Extravagant Capitals Fantasie Artistique
Flash Floral Caps Formal Script Bold Formal Script Fractur Gothic Bamboo
Hohenzollern Initials Humanistic Cursive Humanistic Italic Hand
Lombardic Mix Lombardic Mirage Monopol Monospace Bold Monospace Oblique
Monospace Regular Morris Initials Parisian Peignot Picadilly Bizarre
Picadilly Ringlet Black Ringlet Roman Uncial Modern Rotunda Square Caps
Textura Modern Uncial Animals Versal Point size: DPI: 
 Text: (If you leave this blank, fontimage will generate some default
text showing all scripts in the font)
 

IFrame doesn't work in your browser. Try pressing the [Display] button
