---
published: true
layout: default
title: High level description of what each source file contains...
---


-   [Header files](#Header)
-   [Source files](#Source)
-   [unicode library
    docs](http://bibliofile.duhs.duke.edu/gww/FreeWare/LibGUnicode/index.html)
-   [unicode widget
    docs](http://bibliofile.duhs.duke.edu/gww/FreeWare/LibGDraw/index.html)

Header Files
------------

edgelist.h

This contains the data structures used by the rasterizer routines
(splinefill.c), but it turns out that the same basic mechanism is used
for a number of other things, autohint.c, splineoverlap.c, perhaps
others.

fontforge.h

This is a general header which just includes other headers. Every source
file in this directory should include it.

fontforgeui.h

Another general header file which includes others and defines a few
global variables. All UI source files should include this.

psfont.h

These data structures are used by parsepfa.c as a temporary resting
place for a postscript font before it gets converted into a SplineFont
(splinefont.h) by calling SplineFontFromPSFont in splineutil.c

splinefont.h

[This one contains all the basic data structures of the
program.](../splinefont/)

views.h

[This contains the basic UI data structures.](../../interface/views/)

Source Files
------------

autohint.c

Contains the routines which guess at postscript hints.

autosave.c

Contains a few basic routines that handle autosaving, but most of the
real work is done in sfd.c

autowidth.c

Guesses at good widths for characters and good kerning for them. Creates
a dialog to get guidance from the user and the goes off and tries to
guess reasonable values.

bitmapdlg.c

Handles the two dialogs for creating and recreating bitmaps. (The
creating one creates an entire new bitmap font, the recreating one
modifies an already existing font by regenerating the selected
characters).

bitmapview.c

Does much of the basic work of the bitmap editor. Handles menus, events,
etc.

bvedit.c

Some extra routines for editing bitmaps (bv =\> bitmapview). Handles
floating selections, paste, translations, etc.

charview.c

Does the basic work for the spline glyph editor. Handles menus, events,
dispatches mouse events to the appropriate tools, etc.

charviewicons.c

These are the icon resources for the images that appear in the info area
of the spline editor above.

cursors.c

Defines the various cursors used.

cvaddpoints.c

Handles mouse events when the current tool is a point generator.
charview.c will dispatch events to us. (cv =\> charview)

cvexport.c

The dialog to export data into a different format. Also (some of) the
conversion routines for that format. (Also used to export xbm files from
the bitmapview)

cvgetinfo.c

Contains the Get Info dispatcher and dialogs for the charview. There are
several different types of info depending on the current selection and
there's a dialog for each

-   A point is selected
-   A reference to another character is selected (in the foreground)
-   An image is selected (in the background)
-   Or if more than one thing is (or no things are) selected, then
    general information on the character itself
     This last is also used by the fontview.

cvhints.c

A series of trivial little dialogs and commands that allow the user to
set postscript hints manually.

cvimages.c

Contains code to import stuff into a CharView, BitmapView or FontView.
Initially it was only images into the CharView, but it has grown beyond
its name. CharViews can import Images (gif, png, tiff, jpeg, xbm, xpm,
sun raster, windows bmp, ...) into the background of a CharView. I'd
like to be able to do this from the clipboard, but I don't know whether
there's a standard way of moving images around there. Also can import
eps files (very restricted) and xfig (not too well). BitmapViews can
only import images into their foreground. I think only bitmaps but I
forget. FontViews can import bdf fonts into their list of bitmaps.

cvknife.c

The dispatch file for mouse events when the knife tool is selected.

cvpalettes.c

Handles the two palettes associated with a CharvView, and the two
palettes for a BitmapView, and the Char and BitmapView popup menus.

cvpointer.c

The dispatch file for mouse events when the pointer tool is selected.

cvruler.c

The dispatch file for mouse events when the ruler tool is selected.

cvshapes.c

The dispatch file for mouse events when one of the shape tools
(rectangle, ellipse, polygon, star) is selected.

cvstroke.c

The dialog for the expand stroke command. Also some of the routines
which do the work. See also splinestroke.c

cvtranstools.c

The dispatch file for mouse events when one of the transform tools
(scale, rotate, flip, skew) is selected.

cvundoes.c

Contains the routines that handle Undoes, Redoes and Copy/Paste for
CharViews, BitmapViews and FontViews.

dumpbdf.c

Writes a bdf file.

dumppfa.c

Writes a postscript file. pfa, pfb, type3, type0. See also splinesave.c.

fontinfo.c

Contains the fontinfo dialog and the routines to reencode a font.

fontview.c

The main file for the fontview. Menu dispatcher, event handler. Basic
Font level routines.

fvcomposit.c

The file that figures out how to build a composite character for you
(ie. for Agrave will put a reference to A in your character, and a
reference to grave and then will position the accent on top of A
nicely). Operates on both the splines and the bitmaps.

fvfonts.c

Contains the dialogs and the functions for the Merge Fonts and
Interpolate Fonts commands

fvimportbdf.c

The routine which reads in a bdf font. (note the font selection dialog
is in cvimages.c)

fvmetrics.c

The dialog and routines for autowidth and autokern.

images.c

icon resources for the images used in the palettes. There's no good
reason why this isn't merged in with charviewicons.c

metricsview.c

The main file for the metricsview. Menu dispatcher, event hander. Most
of the functionality.

print.c

Handles the print and pagesetup dialogs.

parsepfa.c

Parses a postscript font. Doesn't get the encoding of a type0 font.
Type3s are too free form for me to be able to interpret all (or even
most?) of them. But we can at least read in the type3s we write out
(unless they contain images). Some of the work also done in psread.c and
splineutil.c

parsettf.c

Parses a TTF (or OTF) font file, and converts from quadratic Bézier to
cubic Bézier (easy).

prefs.c

Preference dialog.

psread.c

This is our postscript interpreter for various flavors of postscript--
eps files, type3s, type1s, type2s, etc. It can't handle much.

psunicodenames.c

A list of all the adobe standard names for unicode characters in
postscript. Any NULL entry in this array gets an algorithmically
generated name uni%04X

scripting.c

All the routines to handle scripts

savefontdlg.c

Dialog and dispatcher for the Generate Fonts command.

sfd.c

Routines to write and read our spline font database format
([sfd](../sfdformat/)). Also routines to handle autosave files which
are basically just the bits of the font which have changed written out
in sfd format with a few extra headers to say what these changes should
be applied to.

splashimage.c

The resource containing the splash image.

splinefill.c

The routines that do rasterizing (and anti-aliasing). Also provides
skeleton routines for autohinting, remove overlap, etc. which use a
similar structure.

splineoverlap.c

The routines which implement the remove overlap command.

splinesave.c

Various helper routines when saving a postscript (and to a lesser extent
TTF) font. Converts to type1 or type2 commands. Figures out optimal
referencing.

splinesaveafm.c

Generates an afm file.

splinestroke.c

More routines to handle expand stroke.

splineutil.c

A bunch of utility routines. Converts postscript type1 strings into
SplineChars. Figures bounding boxes. Handles updating references and
dependencies. Figures linear approximations to splines for drawing.
Figures clockwise, counter-clockwise. Guesses at good pointtypes when
loading in postscript/ttf fonts. Copies SplinePointLists. Transforms
SplinePointLists. Solves (approximates a solution) cubic equations.
Finds points of inflection. Figures out if a point is "near" a spline.

splineutil2.c

More utility functions. Determines if a spline is linear (even if its
control points aren't degenerate, we can still get spines which trace
out a line, for instance if both control points are on the line between
the to base points). Finds (approximates) the intersection of two
splines. Aproximate a spline from a set of points (used by MergePoint,
inserting a point onto a spline, and many other things). The Merge
command itself. The Simplify command. Commands to remove tiny spline
segments (these can confuse the Overlap routine, so we take them out
before it does anything). Routine to create a new SplineFont. Routines
to make sure the control points of tangent points continue to point in
the right direction even when the point is moved. Routines to figure
good default values for control points on new points (and on points
where the user has not set the control points him/herself when that
point is moved). Determines if any point on a path is selected. Reverses
the direction of a closed path.

stamp.c

Time stamp of when I last built.

stamper.c

Program which generates time stamp. (stamp.c)

start.c

main routine. Initializes things and reads comand line arguments.
Handles the splash screen. Top dispatcher for autosave.

threaddummy.c

contains a dummy pthread\_create so I don't need to drag in pthreads
when I'm not interested in that section of gio.

tottf.c

Saves a true type or open type font. see also splinesave.c for reference
character optimization and for OpenType Type2 conversion routines.

transform.c

Transform dialog and dispatch routines.

uiutil.c

Utilities for the user interface.

utils.c

Hmm. this is blank.

windowmenu.c

Builds and dispatches the window menu.

-- [Prev](files.html) -- [TOC](/en-US/tutorials/overview/) -- [Next](sfdformat.html)
--
