---
published: true
layout: default
title: The Edit Menu
---

In the Metrics View this menu is greyed out. The commands are only
available in text fields.

-   [Undo](#Undo)
-   [Redo](#Redo)
-   [Cut](#Cut)
-   [Copy](#Copy)
-   [Copy Reference](#Reference)
-   [Copy Lookup Data](#CopyLookup)
-   [Copy Width](#Width)
-   [Copy VWidth](#VWidth)
-   [Copy LBearing](#LBearing)
-   [Copy RBearing](#RBearing)
-   [Copy Grid Fit](#CopyGridFit)
-   [Paste](#Paste)
-   [Paste Into](#PasteInto)
-   [Paste After](#PasteAfter)
-   [Same Glyph As](#SameGlyphAs)
-   [Clear](#Clear)
-   [Clear Background](#Background)
-   [Merge](#Merge)
-   [Join](#Join)
-   [Copy Fg To Bg](#CopyFg)
-   [Copy Layer To Layer](#CopyL2L)
-   [Select](#Select)
    -   [Select All](#All)
    -   [Invert Selection](#Invert)
    -   [Deselect All](#Deselect)
    -   [First Point](#FirstPt)
    -   [First Point, Next Contour](#NextContour)
    -   [Next Point](#NextP)
    -   [Prev Point](#PrevP)
    -   [Next Control Point](#NextCP)
    -   [Prev Control Point](#PrevCP)
    -   [Point At](#PointAt)
    -   [Contours](#Contours)
    -   [Select All Points & Refs](#SelectPoints)
    -   [Select Anchors](#SelectAnchors)
    -   [(De)Select Width](#SelWidth)
    -   [(De)Select VWidth](#SelVWidth)
    -   [Select Points Affected by Current HintMask](#SelHM)
    -   [Select by Color](#Color)
    -   [Select by Wildcard](#SelectName)...
    -   [Select by Script...](#SelectScript)
    -   [Glyphs worth outputting](#SelWorth)
    -   [Glyphs with only references](#SelRefs)
    -   [Glyphs with only Splines](#SelSplines)
    -   [Glyphs with both](#SelBoth)
    -   [Whitespace Glyphs](#SelWhite)
    -   [Changed Glyphs](#SelChanged)
    -   [Hinting Needed](#SelHinting)
    -   [Autohintable](#SelAutohintable)
    -   [Select By Lookup Subtable](#SelectByATT)...

-   [Find / Replace](#Find)
-   [Replace With Reference](#ReplaceRef)
-   [Unlink Reference](#Unlink)
-   [Copy From](#From)
    -   [All Fonts](#Fonts)
    -   [Displayed Font](#Displayed)
    -   [Char Metadata](#CharName)
    -   [TrueType Instructions](#TTInstr)

-   [Remove Undoes](#Remove-Undoes)

**NOTE**: In the metrics view this menu will be disabled when one of the
text fields has the focus.

Undo

In the outline view and the bitmap view this will undo the last command.
The number of commands that may be undone for any glyph is controlled by
the [UndoDepth](../prefs/#UndoDepth) preference item.
 In the font and metrics views, this does NOT undo the last command. It
undoes the last operation on all selected glyphs.

Redo

In the outline view and the bitmap view this will redo the last command
undone. Up to twelve commands may be redone (after that they get thrown
away)
 In the font and metrics views, this does NOT undo the last command. It
undoes the last operation on all selected glyphs.

Cut

In the font view this command puts the foreground of all selected glyphs
into the clipboard and then deletes them. Depending on the setting of
[Copy From](#From) it will either refer all glyphs (bitmap and outline)
corresponding to this entry, or just the glyph being displayed.

In the Outline View this will copy any selected points, References, or
Images into the clipboard and then delete them. If a point is removed
from a path then the path will be broken at there, see the
[Merge](#Merge) command for information on how to leave the path whole
but without the point. (if there is no selection nothing happens)

In the Bitmap View this will copy the selection into the clipboard and
then delete it. If there is no selection nothing happens.

Copy

In the font view this command puts the foreground and hints of all
selected glyphs into the clipboard. Depending on the setting of [Copy
From](#From) it will either copy all glyphs (bitmap and outline)
corresponding to this entry, or just the glyph being displayed. Normally
it will not copy a glyph's name, but if [Copy From-\>Char
Name](#CharName) is set then it will copy the name as well.

In the Outline View this will copy any selected points, References, or
Images into the clipboard. If there is no selection everything in the
current layer will go into the clipboard.

In the Bitmap View this will copy the selection into the clipboard, if
there is no selection everything is copied.

To external applications selected points (and associated contours) will
be exported to the clipboard with format "image/eps", while a selected
image will be exported with formats "image/png" and "image/bmp". If you
Copy a series of glyphs into the clipboard, the only the first one will
be exported to external applications. If the clipboard contains a single
point, then this will also be exported in STRING format (giving the
coordinates of the point); the intent is to make it easier to people to
identify the point. See the section on [selections](../../reference/selections/)

Copy Reference

In the font view this command puts a reference to all selected glyphs
into the clipboard.

In the Outline and Bitmap Views this will copy a reference to the
current glyph into the clipboard (only available in foreground mode).

Copy Lookup Data

Copies lookup data (substitutions, ligatures, kerning, anchor points,
etc) from the selected glyphs. This command does not work quite as
expected:

-   The data are not actually copied. Instead fontforge makes a note of
    which glyphs it copied the data from. FontForge actually copies the
    data when the user does a Paste (so any changes in the lookup data
    will be pasted).
-   When the user does a Paste s/he will be prompted with a dialog
    asking what lookups should be copied.

Copy Width

In the Font View this command copies the widths of all selected glyphs
and stores them in the clipboard.

In the Outline View this command copies the width of the current glyph
and stores it in the clipboard.

This command is not available in the Bitmap View.

Copy VWidth

In the Font View this command copies the vertical widths of all selected
glyphs and stores them in the clipboard.

In the Outline View this command copies the vertical width of the
current glyph and stores it in the clipboard.

This command is not available in the Bitmap View.

Copy LBearing

In the Font View this command copies the left side bearings of all
selected glyphs and stores them in the clipboard.

In the Outline View this command copies the left side bearing of the
current glyph and stores it in the clipboard.

This command is not available in the Bitmap View.

Copy RBearing

In the Font View this command copies the right side bearings of all
selected glyphs and stores them in the clipboard.

In the Outline View this command copies the right side bearing of the
current glyph and stores it in the clipboard.

This command is not available in the Bitmap View.

Copy Grid Fit

Only available in the outline glyph view and only if [View-\>Show Grid
Fit](../viewmenu/#ShowGridFit)is selected. This will place a copy of
the grid fit version of the glyph into the clipboard.

Paste

In the Font View this command will paste whatever is in the clipboard
into the foregrounds of all selected glyphs (exception: if the clipboard
contains an image it will usually not go into the foreground), clearing
out whatever was there. If there are more selected glyphs than there is
information in the clipboard then the clipboard will be repeated until
all selected glyphs have had something pasted in them (that is if glyphs
A and B were selected when the copy happened and now glyphs C, D and E
are selected, the C will get A, D will get B and E will also get A). If
exactly one glyph is selected but the clipboard contains more that one
glyph, the selection will be extended so that enough glyphs are selected
that something may be pasted in each. 
 If the clipboard contains outline information then that information
will go into the glyph outline regardless of the setting of Copy From.
If the clipboard contains a bitmap and the display is set to outline
then the bitmap is pasted into the bitmap font it was copied from (ie.
the one with the same pixel size), if the clipboard contains a bitmap
and the display is set to a bitmap then the bitmap will be pasted into
the currently displayed font. If the clipboard contains a bitmap of a
size which does not exist in our database, then you will be asked if you
want to create a bitmap font to put the bitmap into.

In the Outline View this command will paste whatever is in the clipboard
to the current editing layer.

In the Bitmap View this command will flatten any floating selection and
paste the contents of the clipboard into a new floating selection.

If the clipboard is owned by an external application FontForge will
attempt to Paste the following selection types (the bitmap view does not
currently respond to external clipboards):

  -------------------------------------- -------------------
  "image/png", "image/bmp"               background images
  "image/eps", "image/ps", "image/svg"   as spline data
  -------------------------------------- -------------------

See the section on [selections](../../reference/selections/)

Paste Into

Only available in the fontview. Just like Paste, except it does not
clear the contents of the glyph before adding to it.

Paste After

Only available in the fontview. Pastes the contents of the clipboard
into the selected glyph, shifts it over by the advance width, and then
adds the advance width of the glyph in the clip to this glyph.
Essentially this makes it easy to build up words. (If the font has
vertical metrics, then glyphs will be stacked vertically. If the glyph
is right to left then the clipboard will be added on the left).

This command is not present unless you modify configure-pfaedit.h

Same Glyph As

Only available in the fontview. If the clipboard contains a single
reference to a glyph then applying this command makes all selected
encoding points refer to that same glyph. (For example the
non-breaking-space glyph (U+00A0) frequently uses the same glyph as the
space glyph. To accomplish this, select the space glyph, Copy Ref,
select the non-breaking-space glyph and Same Glyph As).

Adobe suggests that you avoid this. Use a reference instead. In some
situations (I think pdf files is one) having one glyph with several
encodings causes problems (Acrobat uses the glyph to back-map through
the encoding to work out the unicode code point. But that will fail if a
glyph has two unicode code points associated with it).

Clear

Similar to [Cut](#Cut) except it does not copy anything to the
clipboard.

Clear Background

Only in the font view. This command clears the backgrounds of all
selected glyphs.

Merge

This command is only available in the Outline View. If a point on a path
is selected, the merge command will remove that point from the path and
join the two points around the removed one with a new spline which
approximates the curve between the two before. The two surrounding
points will retain their slopes (unless both are corner points).

[How is this done?](pfaeditmath.html#Approximating)

Join

This command is not available in the bitmap view. It looks for any paths
with endpoints as the endpoints of other paths and then join those two
paths. Also if the endpoint of a path is the same as the start point it
will make that path into a loop. (The commands that move points around
will normally do this automatically, but Paste will not).
 In the Outline view things are slightly more complicated: If any paths
have selected points on them it will only attempt to join those paths.

Copy Fg To Bg

This command is only available in the Outline and Font Views. It cleans
out all the splines in the background layer and replaces them with a
copy of all the splines in the foreground layer. Note: Any background
images remain.

Copy Layer To Layer

This command is only available in the Outline and Font Views. It brings
up a dialog which lets you select a base layer to copy from and another
layer to copy to. You may also choose to clear the destination layer, or
to append to it. Then it copies the contents of the source layer
(contours and references, but not images) to the destination layer.

Select

In the outline view there is a select menu, other views just have Select
All.

Select All

In the outline view it selects all points, all references (all images if
the background is active) and the width line (and the vertical width
line if that is enabled). In the fontview it selects all glyphs. In the
bitmap view it selects the current bitmap region.

Invert Selection

Selects anything not selected, and deselects everything selected.

Deselect All

Deselects anything selected

First Point

Deselects everything and then selects the first point on the first path
of the glyph.

First Point, Next Contour

Deselects everything and then selects the first point on the next
contour. (If the last contour is selected then deselects everything).

Next Point

Deselects the current point and selects the next point.

Prev Point

Deselects the current point and selects the previous point

Next Control Point

Selects the "Next Control Point" of the current point.

Prev Control Point

Selects the "Prev Control Point" of the current point.

Point At

Allows the user to enter an X,Y coordinate and selects the point at that
location.

Points on Selected Contours

If a contour contains any selected points, then select all points on the
contour.

Select All Points & Refs

Just like select all, but it doesn't select anchor points or the width
lines.

Select Anchors

Select all the Anchor points in the glyph.

(De)Select Width

Toggles whether the width line is selected.

(De)Select VWidth

(if vertical metrics are enabled) Toggles whether the vertical width
line is selected.

Select Points Affected by Current HintMask

if a single point with a hintmask is selected, then this command selects
all points affected by that hintmask.

Select by Color\>

Only in the font view. Displays a submenu containing a list of colors
and allows you to select all glyphs which you have set to that color
with the Char Info dlg. Normally the selection is cleared before setting
the colored glyphs, but if you hold down the shift key the selection
will be extended to the colored glyphs.

Select by Wildcard...

Select all glyphs that match the wildcard pattern specified. A glyph may
also be mapped to more than one encoding slot. Select all encoding slots
that refer to the named glyph. I think this is primarily useful for
detaching .notdef.

Select by Script...

Allows you to specify an OpenType script tag and then ff will select all
glyphs which have that script.

In the fontview, the following menu items will have slightly different
meanings depending on whether you are holding down the Shift of Control
keys.

If you hold down neither, then the current selection is cleared, and the
selection is set to whatever the command specifies.

If you hold down just the Shift key, then the current selection is
retained and any glyphs specified by the command will be merged into
that selection. (a logical or operation)

If you hold down just the Control key, then any glyphs specified by the
command will be removed from the selection.

If you hold down both keys, then only glyphs specified in both the
command and the old selection will be selected. (a logical and
operation)

Glyphs worth outputting

Generally this means that either the glyph's width has been set, or that
in one of its foreground layers there is some data -- a contour or a
reference.

with only references

Select all glyphs which contain at least one reference (in the active
layer) and no contours.

Glyphs with only Splines

Select all glyphs which contain at least one contour (in the active
layer) and no references.

Glyphs with both

Select all glyphs in the active layer with both contours and references.
This is something which cannot be expressed in a TrueType font, and
fontforge has various tricks for dealing with it, but it might be
something you'd like to fix up.

Whitespace Glyphs

Select all glyphs which contain neither references nor contours (but
which have had their widths set).

Changed

Selects all changed glyphs

Hinting Needed

Selects all glyphs which FontForge thinks need to be hinted.

Autohintable

Selects all glyphs which FontForge thinks can be autohinted -- ie. all
glyphs not marked [Hints-\>Don't Autohint](../hintsmenu/#DontAutoHint)
(this does not check whether ff thinks the glyphs in question NEED to be
autohinted)

Select By Lookup Subtable...

Only in the font view. Brings up a [dlg](../selectbyatt/) which allows
you to select various glyphs depending on various advanced typographic
features.

Find / Replace

Only in the font view, this brings up a [dialog](../search/) that
allows you to find patterns within glyphs and replace them with other
patterns.

Replace With Reference

Only in the font view, this command will search the font finding any
glyph which contains an inline copy of one of the selected glyphs, and
converts that copy into a reference to the appropriate glyph. In other
words it finds things which should be references and makes them be.

This is primarily for use after reading a postscript (type1, otf or cff)
font. The reference information will usually be lost in these formats,
and this command can find it again.

Suppose the font contains a glyph "Acircumflex" which contains an
embedded copy of "A" (a copy of the contours, not a references), then if
you select "A" and apply this command it will search all glyphs in the
font for something that looks like "A", remove it from any glyphs in
which it is found and replace it with a reference. It applies this same
algorithm for all selected glyphs. If you want to check for every
possibility, just select all glyphs first.

After completion, the selection will be set to those glyphs which have
been changed by the command.

Unlink Reference

This will remove a referenced glyph and replace it with the splines and
points (or bitmap raster) that make it up.

Copy From

Only available in the Font View.

All Fonts

If this is set then Copy (and Cut and Clear) will copy from the outline
font and from all the bitmap fonts

Displayed Font

If this is set then Copy will only copy from the font currently being
displayed.

Char Metadata

Normally Copy does not copy the metadata (name, unicode encoding,
comment, ligature info) associated with a glyph, but if this is checked
then it will.

TrueType Instructions

Controls whether truetype instructions should be copied with a glyph. If
copying glyphs from one font to another it may not be appropriate to
copy the truetype instructions (which may depend on subroutines or
values in the 'fpgm', 'prep' and 'cvt ' tables).

This also controls the behavior of the
[Transform](../elementmenu/#Transform) and [Build
Accented](../elementmenu/#Accented) glyph commands.

Remove Undoes

Not available in the Metrics View. This allows you to free up some of
the memory FontForge is currently squandering on keeping track of Undoes
(and Redoes). Obviously this command cannot be undone.

-   In the Outline Glyph view this will free up all undoes/redoes in the
    current edit mode
-   In the Bitmap Glyph view this will free up all bitmap undoes/redoes
-   In the Font View this will free up all undoes/redoes in all selected
    glyphs, outline and bitmap, background and foreground.

Other menus
-----------

-   [File](../filemenu/)
-   [Edit](../editmenu/)
-   [Point](../pointmenu/)
-   [Element](../elementmenu/)
-   [Tools](../toolsmenu/)
-   [Hints](../hintsmenu/)
-   [Encoding](../encodingmenu/)
-   [View](../viewmenu/)
-   [Metrics](../metricsmenu/)
-   [CID](../cidmenu/)
-   [MM](../mmmenu/)
-   [Window](../windowmenu/)
-   [Help](../helpmenu/)
-   [Hot Keys](../HotKeys/)

-- [Prev](../filemenu/) -- [TOC](overview.html) --
[Next](../pointmenu/) --


