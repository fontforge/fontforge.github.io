---
published: true
layout: default
title: Random utilities for examining fonts
---


[ShowTTF](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)
----------------------------------------------------------------------------------------------

showttf is a program which will decompose a truetype (or opentype) font
file into its various tables and display the contents of those tables as
best it can. It will also point out the errors it finds in the file.
This is similar to MicroSoft's
[ttfdump](http://www.microsoft.com/typography/tools/tools.htm) (except
mine shows some of Apple's tables which ttfdump does not), and to
Apple's [ftxdumperfuser](http://developer.apple.com/fonts/OSXTools.html)
(except mine shows some OpenType tables which Apple's ignores). And, of
course, mine is open source and runs on most any system.

>     showttf fontfile

[The source code is in the git repository under
fonttools/showttf.c](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary).

[Ttf2Eps](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)
----------------------------------------------------------------------------------------------

ttf2eps will allow you to extract one (or all) glyphs from a font and
convert them into eps files.

[PfaDecrypt](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)
-------------------------------------------------------------------------------------------------

pfadecrypt will undo Adobe's encryption on pfa/pfb files and converts
the byte codes into readable postscript like instructions.

[Pcl2Ttf](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)
----------------------------------------------------------------------------------------------

Will extract ttf or bitmap fonts embedded in an hp pcl file. Bitmap
fonts become bdf fonts (I don't have any examples of run length encoded
bitmap fonts, and do not currently support them. If you have an rle
bitmap pcl font please send it to me). I have neither documentation on
nor examples of the "Intellifont" format, so these fonts are not
supported.
