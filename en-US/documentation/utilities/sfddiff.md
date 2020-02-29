---
published: true
layout: default
title: sfddiff -- A program for comparing fonts
---


`sfddiff [-merge outfile] [-ignorehints] [-ignorenames] [-ignoregpos]   [-ignoregsub] [-ignorebitmaps] [-exact] [-warn] [-version] [-help] fontfile1   fontfile2`

*Sfddiff* compares (or merges) two font files (in any format
[fontforge](/en-US/tutorials/overview/) can read) and checks for differences.

It will notice:

1.  any characters present in one font but not in the other
2.  any characters present in both fonts but which have different sets
    of outlines or references. The outlines may be compared so that only
    exact matches are accepted, or so that a fuzzier match is used
    (useful in compare that a truetype and postscript font are the
    same). Similarly references may be matched exactly or may match
    after an unlink.
3.  optionally will check if the postscript hints or truetype
    instructions are different.
4.  if the truetype 'name' tables match
5.  if kerning (and other 'GPOS' data) match
6.  if ligatures (and other 'GSUB' data) match
7.  Any bitmap strikes present in one font but not the other
8.  Any bitmap characters present in one font but not the other
9.  Any bitmap characters which differ

If the `-merge` flag is specified the following argument should be the
name of an output file into which sfddiff will store a merged version of
the two fonts. This will contain everything from fontfile1 as well as
any characters present in fontfile2 but not in fontfile1. For any
characters with different outlines or references, the background of the
character will contain the splines from fontfile2 (sadly references can
not be placed in the background).

If the `-ignorehints` flag is specified, then no hint differences will
be reported.

`-help` will provide a mini description and will list the available
options.

`-usage` will list the available options.

`-version` will display the current version of *sfddiff*.

### See Also

[FontForge](/en-US/tutorials/overview/)
