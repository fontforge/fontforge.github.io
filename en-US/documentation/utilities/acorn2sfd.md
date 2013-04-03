---
published: true
layout: default
title: acorn2sfd -- A program for comparing fonts
---


`acorn2sfd [-version] [-help] {acorndir ...}`

*acorn2sfd* will take several Acorn RISC/OS font directories and convert
them into [FontForge](/en-US/tutorials/overview/)'s sfd files.

An Acorn RISC/OS font directory should contain two or three files, one
named `Outlines*` and one named `Intmetric?` (the `Intmetrics` file may
be omitted, in which case the advance widths will not be known).
*acorn2sfd* will read both files and generate an sfd file from them
(which [FontForge](/en-US/tutorials/overview/) can turn into TrueType or PostScript).

If the `Outlines` file ends in a digit (`Outlines0`) then a third file
named `Base<digit>*` will be searched for in the directory (if not found
there then in `<acorndir>/../Encodings`), and if found encoding
information will be read from it. If not found then the font will be
assumed to be an initial subset of Unicode.

`-includestrokes` *acorn2sfd* normally throws out the secondary stroked
version of the character, specifying this option will include it in the
sfd file (you may then want to invoke FontForge's Expand Stroke command
on it).

`-help` will provide a mini description and will list the available
options.

`-usage` will list the available options.

`-version` will display the current version of *acorn2sfd* (a six digit
string containing the date stamp of the source files).

### Bugs

-   Acorn fonts use a different fill rule than either PostScript or
    TrueType. You should run Element-\>Correct Direction on the sfd file
    after converting it.
-   Most Acorn fonts I've seen on the web are zipped up with a
    non-standard zip. Don't expect *acorn2sfd* to be able to unzip them.
-   Acorn hinting data are lost.

### See Also

[FontForge](/en-US/tutorials/overview/)

[Acorn Font
Documentation](http://www.pinknoise.demon.co.uk/Docs/Arc/Fonts/Formats.html)
