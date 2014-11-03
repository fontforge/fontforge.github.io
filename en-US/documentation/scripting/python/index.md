---
published: true
layout: default
title: Writing python scripts to change fonts in FontForge
---

A better version of this page is [here](http://dmtr.org/ff.php) which should be taken into account when redesigning the site


I assume you have a working knowledge of python (because I do not).
[Python documentation may be found on the
web.](http://www.python.org/doc/) FontForge implements two python
modules -- one great huge one called `fontforge` which provides access
to as much of FontForge's functionality as I've had time to write, and
one tiny one called `psMat` which provides quick access to some useful
transformations expressed as PostScript matrices.

In python terms fontforge *embeds* python. It is possible to build
fontforge so that it is also a [python
*extension*](#Extension)(`configure --enable-pyextension`)

The fontforge module also defines several types

-   [point](#Point)
-   [contour](#Contour)
-   [layer](#Layer)
-   [glyphPen](#GlyphPen)
-   [glyph](#Glyph)
-   [selection](#selection)
-   [private](#private)
-   [math](#math)
-   [font](#Font)

psMat

Methods

method

args

comments

`identity`

`()`

returns an identity matrix as a 6 element tuple

`compose`

`(mat1,mat2)`

returns a matrix which is the composition of the two input
transformations

`inverse`

`(mat)`

returns a matrix which is the inverse of the input transformation.
(Note: There will not always be an inverse)

`rotate`

`(theta)`

returns a matrix which will rotate by `theta`. `Theta` is expressed in
radians

`scale`

`(x[,y])`

returns a matrix which will scale by `x` in the horizontal direction and
`y` in the vertical. If `y` is omitted, it will scale by the same amount
(`x`) in both directions

`skew`

`(theta)`

returns a matrix which will skew by `theta` (to produce a oblique font).
`Theta` is expressed in radians

`translate`

`(x,y)`

returns a matrix which will translate by `x` in the horizontal direction
and `y` in the vertical

Types

None

fontforge

Global Variables

variable

comments

`hooks`

A dictionary which the user may fill to associate certain fontforge
events with a python function to be run when those events happen. The
function will be passed the font (or possibly glyph) for which the
relevant event occurred.

  -------------- ------------------------------------------------------------------------------------------------------------------------------
  newFontHook    This function will be called when a new font has been created.

  loadFontHook   This function will be called when a font is loaded from disk.
                  (if a font has an "initScriptString" entry in its persistent dictionary, that script will be invoked before this function).
  -------------- ------------------------------------------------------------------------------------------------------------------------------

  :  Hook names

Other hooks are defined in a font's own [temporary](#font-temporary) and
[persistent](#font-persistent) dictionaries.

Methods

method

args

comments

`getPrefs`

`(pref-name)`

returns the value of the named preference item

`setPrefs`

`(pref-name,value)`

sets the value of the named preference item

`hasSpiro`

`()`

Returns a boolean, `True` if Raph Levien's spiro package is available
for use in FontForge.

`savePrefs`

`()`

Saves the current preference settings

`loadPrefs`

`()`

Loads the user's default preference settings. Not done automatically in
a script.

`defaultOtherSubrs`

`()`

Sets the type1 PostScript OtherSubrs to the default value

`readOtherSubrsFile`

`(filename)`

Sets the type1 PostScript OtherSubrs to the stuff found in the file.

`loadEncodingFile`

`(filename)`

Loads an encoding file, returns the name of the encoding or None.

`loadNamelist`

`(filename)`

Loads a namelist

`loadNamelistDir`

`(dirname)`

Loads all namelist files in the directory

`loadPlugin`

`(filename)`

Loads a fontforge plugin

`loadPluginDir`

`(dirname)`

Loads all fontforge plugins in the directory

`preloadCidmap`

`(filename,registry,order,supplement)`

Loads a fontforge cidmap file (first three args are strings, last is an
integer)

`printSetup`

`(type[,printer|cmd|file,     width,height])`

Prepare to [print a font sample](#f-print). The first argument may be
one of:

lp

Queues postscript output to the printer using `lp`. You may use the
optional second argument to specify the printer name.

lpr

Queues postscript output to the printer using `lpr`. You may use the
optional second argument to specify the printer name.

ghostview

Displays the output using ghostview (or gv). The second argument is
ignored.

command

Use a custom shell command to print the output. The second argument
should contain the command and its arguments.

ps-file

Dump the postscript output to a file. The second argument specifies the
filename.

pdf-file

Dump the output as pdf to a file. The second argument specifies the
filename.

The third and fourth arguments are optional and specify the page size
(in points) for the output. The third argument is the page width and the
fourth is the height.

These setting remain until changed

`nameFromUnicode`

`(uni[,namelist])`

Finds the glyph name associated with a given unicode codepoint. If a
namelist is specified the name will be taken from that.

`unicodeFromName`

`(glyphname)`

Looks up glyph name in its dictionary and if it is associated with a
unicode code point returns that number. Otherwise it returns -1

`version`

`()`

Returns fontforge's version number. This will be a large number like
20070406.

`fonts`

`()`

Returns a tuple of all fonts currently loaded into fontforge for editing

`activeFont`

`()`

If the script were invoked from the File-\>Execute Script... dialog, or
invoked by a menu item in the font view, this returns the font that was
active at the time. Otherwise it returns None.

`activeGlyph`

`()`

If the script were invoked from the File-\>Execute Script... dialog or a
menu item from an outline glyph window or a glyph import/export command
this returns the glyph that was active at the time. Otherwise it returns
None.

`activeLayer`

`()`

This returns the currently active layer as an integer between 0
(inclusive) and the font/glyph's layer count (exclusive). It may also be
set to -1 if the current glyph window is displaying the font's guidline
layer.

`fontsInFile`

`(filename)`

Returns a tuple of all fontnames found in the specified file. The tuple
may be empty if fontforge couldn't find any.

`open`

`(filename[,flags])`

Opens a filename and returns the font it contains. If it does.

If the flags argument is 4, then ff will load all glyphs in the 'glyf'
table of a ttc file (rather than just the glyphs used in the font
picked). This will not load all 'glyf' tables though.

`parseTTInstrs`

`(string)`

Returns a binary string each byte of which corresponds to a truetype
instruction. The input string should contain a set of instruction names
as "SRP0\\nMIRP[min,rnd,black]"

`unParseTTInstrs`

`(sequence)`

Reverse of the above. Converts a binary string into a human (sort of)
readable string

`unitShape`

`(n)`

Returns a closed contour which is a regular n-gon. The contour will be
inscribed in the unit circle. If n is negative, then the contour will be
circumscribed around the unit circle. A value of 0 will produce a unit
circle. If n==1 it is treated as if n were -4 -- a circumscribed square
where each side is 2 units long (this is for historical reasons).
Behavior is undefined for n=2,-1,-2.

`registerGlyphSeparationHook`

`(hook)`

The GlpyphSeparationHook is a python routine which FontForge will call
when it wants to figure out the optical separation between two glyphs.
If you neve call this, or if you call it with a value of `None`
FontForge will use a built-in default. This routine gets called during
AutoWidth, AutoKern, and computing the optical left and right side
bearings (for 'lfbd' and 'rtbd' features). For more infomation see [its
own section](../../reference/autowidth/#GlyphSeparationHook).

User Interface Methods

Users may define scripts to be run when menu items are invoked. Some of
these scripts will want to ask users questions, so this section provides
routines to determine if fontforge has a user interface, a command to
add menu items, and various small standard dialogs to interact with the
user. I do not currently provide a mechanism for allowing people to
define special purpose dialogs (for example they might want to ask more
than one question in a dialog, and I don't support that).

When FontForge starts (if it's a fontforge with python) it will look at
the directories `$(PREFIX)/share/fontforge/python` and
`~/.FontForge/python` and attempt to run all files in those directories
which end in ".py". Presumably these files will allow people to
customize the user interface to suit their needs.

Currently it reads the files in directory order (which is generally
somewhere between creation order and totally random). It will read the
system directory before the user directory.

### Example

>     import fontforge;
>
>     def nameGlyph(junk,glyph):
>       print glyph.glyphname;
>
>     fontforge.registerMenuItem(nameGlyph,None,None,"Glyph",None,"Print Glyph Name");
>
>     def neverEnableMe(junk,glyph):
>       return False;
>
>     fontforge.registerMenuItem(nameGlyph,neverEnableMe,None,"Glyph",None,"SubMenu","Print Glyph Name");
>
>     def importGlyph(junk,glyph,filename,toback):
>       print "Import";
>       print glyph.glyphname;
>       print filename;
>     def exportGlyph(junk,glyph,filename):
>       print "Import";
>       print glyph.glyphname;
>       print filename;
>
>     fontforge.registerImportExport(importGlyph,exportGlyph,None,"foosball","foo","foo,foobar")

The first call will define a menu item in the Tools menu of the Glyph
window. The menu will be called "Print Glyph Name". It has no shortcut
to invoke it. It needs no external data. It is always enabled. And when
activated it will invoke the function "nameGlyph" whch prints the name
of the glyph in the window from which the command is invoked.

The second call defines a menu item in a submenu of the Tools menu. This
submenu is called "SubMenu". This item will never be enabled -- but if
it were enabled it would again call "nameGlyph" to print the name of the
current glyph.

The last provides a way to import and export files of type "foosball"
(or it would if the routines did anything).

Not a very useful example

`hasUserInterface`

`()`

Returns True if this session of FontForge has a user interface

`registerMenuItem`

`(menu-function,     enable_function,     data,     which_window,     shortcut_string,     {submenu-names,}     menu-name-string)`

If fontforge has a user interface this will add this menu item to
FontForge's [Tool](../../interface/toolsmenu/#Tools) menu, either in the font or the
outline glyph view (or both).

menu-function

This is the function that will be called when the menu item is
activated. It will be passed two arguments, the first is the data value
specified here (which may be None, indeed will probably usually be
None), and the second is the glyph or font (depending on the window
type) from which the menu item was activated. Its return value is
ignored.

enable\_function

This may be None -- in which case the menu item will always be enabled.
Otherwise it will be called before the menu pops up on the screen to
determine whether this item should be enabled. It will be passed the
same arguments as above. It should return True if the item should be
enabled and False otherwise.

data

This can be whatever you want (including None). FontForge keeps track of
it and passes it to both of the above functions. Use it if you need to
provide some context for the menu item.

which\_window

May be either of the strings "Font" or "Glyph (or the tuple
`("Font","Glyph")`) and it determines which type of window will have
this menu item in its "Tools" menu.

shortcut-string

May be None if you do not wish to supply a shortcut. Otherwise should be
a string like "Menu Name|Cntl-H" (the syntax is defined in the
[translation section](../../customizing/uitranslationnotes/#HotKeys)).

submenu-names

You may specify as many of these as you wish (including leaving them out
altogether), this allows you to organize the Tools menu into submenus.
(If a submenu of this name does not currently exist, fontforge will
create it).

menu-name

The name that will appear in the menu for this item.

This will only affect windows created after this command is executed.
Normally the command will be executed at startup and so it will affect
all windows.

`registerImportExport`

`(import-function,     export_function,     data,     name,     extension,     [extension-list])`

This will add the capability to import or export files of a given type,
presumably a way of specifying the splines in a given glyph.

import-function

The function to call to import a file into a glyph. It will be called
with: The data argument (specified below), A pointer to the glyph into
which the import is to happen, A filename, A flag indicating whether the
import should go to the background layer or foreground.

This function may be None. In which case there is no import method for
this file type.

export-function

The function to call to export a glyph into a file. It will be called
with: The data argument (see below), a pointer to the glyph, and a
filename.

This function may be None, in which case there is no export method for
this file type.

data

Anything you like (including None). It will be passed to the
import/export routines and can provide them with context if they need
that.

name

The name to be displayed in the user interface for this file type. This
may just be the extension, or it might be something more informative.

extension

This is the default extension for this file type. It is used by the
export dialog to pick an extension for the generated filename.

extension-list

Some file types have more than one common extension (eps files are
usually named "eps", but I have also seen "ps" and "art" used). The
import dialog needs to filter all possible filenames of this file type.
This argument should be a comma separated list of extensions. It may be
omitted, in which case it defaults to being the same as the "extension"
argument above.

`logWarning`

`(msg)`

Adds the message (a string) to FontForge's Warnings window. (if you wish
to display a % character you must represent it as two percents). If
there is no user interface the output will go to stderr.

`postError`

`(win-title,msg)`

Creates a popup dialog to display the message (a string) in that dlg.
(if you wish to display a % character you must represent it as two
percents). If there is no user interface the output will go to stderr.

`postNotice`

`(win-title,msg)`

Creates a little window which will silently vanish after a minute or two
and displays the message (a string) in that window. (if you wish to
display a % character you must represent it as two percents). If there
is no user interface the output will go to stderr.

`openFilename`

`(question,[def-name,[filter]])`

All arguments are strings. The first is a question asked to the user
(for which a filename to open is presumed to be the answer). The second
is optional and provides a default filename. The third is optional and
provides a filter (like "\*.sfd")

The result is either a filename or None if the user canceled the dialog.

Throws an exception if there is no user interface.

`saveFilename`

`(question,[def-name,[filter]])`

All arguments are strings. The first is a question asked to the user
(for which a filename to save something to is presumed to be the
answer). The second is optional and provides a default filename. The
third is optional and provides a filter (like "\*.sfd")

The result is either a filename or None if the user canceled the dialog.

Throws an exception if there is no user interface.

`ask`

`(title,question,answers,     [def,cancel])`

Allows you to ask the user a multiple choice question. It popups up a
dialog posing the question with a list of buttons ranged underneath it
-- one for each answer.

The first argument is the dialog's title, the second is the question to
be asked, the third is a tuple of strings -- each string will become a
button, the fourth and fifth arguments are option, the fourth is the
index in the answer array that will be the default answer (the one
invoked if the user presses the [Return] key), and the fifth is the
answer invoked if the user presses the [Escape] key. If omitted the
default answer will be the first, and the cancel answer will be the
last.

The function returns the index in the answer array of the answer choosen
by the user.

Throws an exception if there is no user interface.

`askChoice`s

`(title,question,answers,     [def])`

Similar to the above allows you to ask the user a multiple choice
question. It popups up a dialog posing the question with a scrollable
list of choices -- one for each answer.

The first argument is the dialog's title, the second is the question to
be asked, the third is a tuple of strings -- each string will become a
button, the fourth and fifth arguments are option, the fourth is the
index in the answer array that will be the default answer (the one
invoked if the user presses the [Return] key). If omitted the default
answer will be the first.

The function returns the index in the answer array of the answer choosen
by the user. If the user cancels the dialog, a -1 is returned.

Throws an exception if there is no user interface.

`askString`

`(title,question,[def-string])`

Allows you to as the user a question for which a string is the answer.

The first argument is the dialog's title, the second is the question to
be asked, the third is optional and specified a default answer.

The function returns the string the user typed or None if they cancelled
the dialog.

Throws an exception if there is no user interface.

Types

[point](#Point)

[contour](#Contour)

[layer](#Layer)

[glyphPen](#GlyphPen)

[glyph](#Glyph)

[selection](#selection)

[font](#Font)

point

Creation

`fontforge.point`

`([x,y,on-curve])`

Creates a new point. Optionally specifying its location

Members

member

comments

`x`

The x location of the point

`y`

The y location of the point

`on_curve`

Whether this is an on curve point or an off curve point (a control
point)

`selected`

Whether this point is selected in the UI. If an off-curve point is
selected in means the preceding (interpolated) on-curve point is
selected.

Methods

method

args

comments

`dup`

`()`

Returns a copy of the current point.

`transform`

`(tuple)`

Transforms the point by the transformation matrix

Pickling Methods

`__reduce__`

`()`

This function allows the pickler to work on this type. I don't think it
is useful for anything else.

contour

Description

A contour is a collection of points. A contour may be either based on
cubic or quadratic splines.

If based on cubic splines there should be either 0 or 2 off-curve points
between every two on-curve points. If there are no off-curve points then
we have a line between those two points. If there are 2 off-curve points
we have a cubic bezier curve between the two end points.

If based on quadratic splines things are more complex. Again, two
adjacent on-curve points yield a line between those points. Two on-curve
points with an off-curve point between them yields a quadratic bezier
curve. However if there are two adjacent off-curve points then an
on-curve point will be interpolated between them. (This should be
familiar to anyone who has read the truetype 'glyf' table docs).

For examples of what these splines can look like see the [section on
bezier curves](../../reference/bezier/).

A contour may be open in which case it is just a long wiggly line, or
closed when it is more like a circle with an inside and an outside.
Unless you are making stroked fonts all your contours should eventually
be closed.

Contours may also be expressed in terms of Raph Levien's spiro points.
This is an alternate representation for the contour, and is not always
available (Only if `fontforge.hasSpiro()     `is` True`. If available
the spiro member will return a tuple of spiro control points, while
assigning to this member will change the shape of the contour to match
the new spiros.

Two contours may be compared to see if they describe similar paths.

Creation

`fontforge.contour`

`()`

Creates a new contour

Members

member

comments

`is_quadratic`

Whether the contour should be interpretted as a set of quadratic or
cubic splines. Setting this value has the side effect of converting the
point list to the appropriate format

`closed`

Whether the contour is open or closed

`name`

The contour name (generally there is no name)

`spiros`

This is an alternate representation of a curve. This member is only
available if [fontforge.hasSpiro()](#ff-hasSpiro) is True. Returns a
tuple of spiro control points. Each of these is itself a tuple of four
elements, an x,y location, a type field, and a set of flags. The type
field takes on values (which are predefined constants in the fontforge
module):

  ----------------------- --- -------------------------------------------------------------------------------------------------------------------
  fontforge.spiroG4       1   A Spiro G4 curve point
  fontforge.spiroG2       2   A Spiro G2 curve point
  fontforge.spiroCorner   3   A Spiro corner point
  fontforge.spiroLeft     4   A Spiro left "tangent" point
  fontforge.spiroRight    5   A Spiro right "tangent" point
  fontforge.spiroOpen     6   This may only be used on the first point in a spiro tuple. It indicates that the tuple describes an open contour.
  ----------------------- --- -------------------------------------------------------------------------------------------------------------------

For more information on what these point types mean see [Raph Levien's
work](http://www.levien.com/spiro/).

The flags argument is treated as a bitmap of which currently on one bit
(0x1) is defined. This indicates that this point is selected in the UI.

When you assign a tuple of spiro control points to this member, the
point list for the Bezier interpretation of the contour will change. And
when you change the Bezier interpretation the set of spiro points will
change.

Sequence Protocol

`len(c)`

The number of points in the contour

`c[i]`

The *i*th point on the contour. You may assign to this

`c[i:j]`

The contour containing points between i and j. You may assign to this

`c + d`

A contour concatenating c and d. D may be either another contour or a
point.

`c += d`

Appends d to c. D may be either another contour or a point.

`p in c`

Returns whether the point p is in the contour c. p may be either a point
or a tuple of two numbers

Does not support the repeat concept

Iterator Protocol

`__iter__`

`()`

Returns an iterator for the contour which will return the points in
order.

Methods

method

args

comments

`dup`

`()`

Returns a deep copy of the contour. That is, it copies the points that
make up the contour.

`isEmpty`

`()`

Returns whether the contour is empty (contains no points)

 

Contour construction

`moveTo`

`(x,y)`

Adds an initial, on-curve point at (x,y) to the contour

`lineTo`

`(x,y[,pos])`

Adds an line to the contour. If the optional third argument is give, the
line will be added after the pos'th point, otherwise it will be at the
end of the contour.

`cubicTo`

`((cp1x,cp1y)(cp2x,cp2y)(x,y)[,pos])`

Adds a cubic curve to the contour. If the optional third argument is
give, the line will be added after the pos'th point, otherwise it will
be at the end of the contour.

`quadraticTo`

`((cpx,cpy)(x,y)[,pos])`

Adds a quadratic curve to the contour. If the optional third argument is
give, the line will be added after the pos'th point, otherwise it will
be at the end of the contour.

`insertPoint`

`(point[,pos])`

Adds point to the contour. If the optional third argument is give, the
line will be added after the pos'th point, otherwise it will be at the
end of the contour. The point may be either a point or a tuple with
three members (x,y,on\_curve)

`makeFirst`

`(pos)`

Rotate the point list so that the pos'th point becomes the first point

`isClockwise`

`()`

Returns whether the contour is drawn in a clockwise direction. A return
value of -1 indicates that no consistant direction could be found (the
contour self-intersects).

`reverseDirection`

`()`

Reverse the order in which the contour is drawn (turns a clockwise
contour into a counter-clockwise one). See also
[layer.correctDirection](#l-correctDirection).

`similar`

`(other-contour[,error])`

Checks whether this contour is similar to the other one where error is
the maximum distance (in em-units) allowed for the two contours to
diverge.

This is like the comparison operator, but that doesn't allow you to
specify an error bound.

`xBoundsAtY`

`(ybottom[,ytop])`

Finds the minimum and maximum x positions attained by the contour when y
is between ybottom and ytop (if ytop is not specified it is assumed the
same as ybottom). If the contour does not have any y values in the
specified range then ff will return None.

`yBoundsAtX`

`(xleft[,xright])`

Finds the minimum and maximum y positions attained by the contour when x
is between xleft and xright (if xright is not specified it is assumed
the same as xleft). If the contour does not have any x values in the
specified range then ff will return None.

 

Contour manipulation

`addExtrema`

`([flags,emsize])`

Extrema should be marked by on-curve points. If a curve lacks a point at
an extrema this command will add one. Flags may be one of the following
strings

all

Add all missing extrema

only\_good

Only add extrema on longer splines (with respect to the em-size)

only\_good\_rm

As above but also merge away on-curve points which are very close to,
but not on, an added extremum

`cluster`

`([within,max])`

Moves clustered coordinates to a standard central value. See Also
[round](#cnt-round)

`merge`

`(pos)`

Removes the on-curve point a the given position and rearranges the other
points to make the curve as similar to the original as possible. (pos
may also be a tuple of positions, all of which will be removed) See Also
[simplify](#cnt-simplify)

`round`

`([factor])`

Rounds the x and y coordinates. If factor is specified then new-coord =
round(factor\*old-coord)/factor. See Also [cluster](#cnt-cluster)

`selfIntersects`

`()`

Returns whether this contour intersects itself.

`simplify`

`([error-bound,flags,tan_bounds,     linefixup,linelenmax])`

Tries to remove excess points on the contour if doing so will not
perturb the curve by more than `error-bound`. Flags is a tuple of the
following strings

ignoreslopes

Allow slopes to change

ignoreextrema

Allow removal of extrema

smoothcurves

Allow curve smoothing

choosehv

Snap to horizontal or vertical

forcelines

flatten bumps on lines

nearlyhvlines

Make nearly horizontal/vertical lines be so

mergelines

Merge adjacent lines into one

setstarttoextremum

Rotate the point list so that the start point is on an extremum

removesingletonpoints

If the contour contains just one point then remove it

See Also [merge](#cnt-merge)

`transform`

`(matrix)`

Transforms the contour by the matrix

random stuff about contours

`boundingBox`

`()`

Returns a tuple representing a rectangle (xmin,ymin, xmax,ymax) into
which the contour fits. It is not guaranteed to be the smallest such
rectangle, but it will often be.

`getSplineAfterPoint`

`(pos)`

Returns a tuple of two four-element tuples. These tuples are x and y
splines for the curve after the specified point.

`draw`

`(pen)`

Draw the contour to the [pen
argument.](http://www.robofab.org/objects/pen.html)

Pickling Methods

`__reduce__`

`()`

This function allows the pickler to work on this type. I don't think it
is useful for anything else.

layer

Description

A layer is a collection of contours. All the contours must be the same
order (all quadratic or all cubic). Currently layers do not contain
references.

Layers may be compared to see if their contours are similar.

Creation

`fontforge.layer`

`()`

Creates a new layer

Members

member

comments

`is_quadratic`

Whether the contours should be interpretted as a set of quadratic or
cubic splines. Setting this value has the side effect of converting the
contour list to the appropriate format

Sequence Protocol

`len(c)`

The number of contours in the layer

`c[i]`

The *i*th contour on the layer. You may assign to this

`c + d`

A layer concatenating c and d. D may be either another layer or a
contour.

`c += d`

Appends d to c. D may be either another layer or a contour.

Does not support the repeat, slice and contains concepts

Iterator Protocol

`__iter__`

`()`

Returns an iterator for the layer which will return the contours in
order.

Methods

method

args

comments

`dup`

`()`

Returns a deep copy of the layer. That is, it will copy all the contours
and all the points as well as copying the layer object itself.

`isEmpty`

`()`

Returns whether the layer is empty (contains no contour)

`addExtrema`

`([flags,emsize])`

Extrema should be marked by on-curve points. If a curve lacks a point at
an extrema this command will add one. Flags may be one of the following
strings

all

Add all missing extrema

only\_good

Only add extrema on longer splines (with respect to the em-size)

only\_good\_rm

As above but also merge away on-curve points which are very close to,
but not on, an added extremum

`cluster`

`([within,max])`

Moves clustered coordinates to a standard central value. See also
[round](#l-round).

`correctDirection`

`()`

Orients all contours so that external ones are clockwise and internal
counter-clockwise. See also [contour.isClockwise](#cnt-isClockwise).

`export`

`(filename)`

Exports the current layer (in outline format) to a file. The type of
file is determined by the extension.

`exclude`

`(excluded-layer)`

Removes the excluded area from the current contours. See also
[removeOverlap](#l-removeOverlap) and [intersect](#l-intersect).

`intersect`

`()`

Leaves only areas in the intersection of contours. See also
[removeOverlap](#l-removeOverlap) and [exclude](#l-exclude).

`removeOverlap`

`()`

Removes overlapping areas. See also [intersect](#l-intersect) and
[exclude](#l-exclude).

`interpolateNewLayer`

`(other-layer,amount)`

Creates (and returns) a new layer which contains splines interpolated
from the current layer and the first argument. If amount is 0 the result
will look like the current layer, if 1 then like the first argument.

`round`

`([factor])`

Rounds the x and y coordinates. If factor is specified then new-coord =
round(factor\*old-coord)/factor. See also [cluster](#l-cluster).

`selfIntersects`

`()`

Returns whether any of the contours on this layer intersects any other
contour (including itself).

`similar`

`(other-layer[,error])`

Checks whether this layer is similar to the other one where error is the
maximum distance (in em-units) allowed for any two corresponding
contours in the layers to diverge.

This is like the comparison operator, but that doesn't allow you to
specify an error bound.

`simplify`

`([error-bound,flags,tan_bounds,     linefixup,linelenmax])`

Tries to remove excess points on the layer if doing so will not perturb
the curve by more than `error-bound`. Flags is a tuple of the following
strings

ignoreslopes

Allow slopes to change

ignoreextrema

Allow removal of extrema

smoothcurves

Allow curve smoothing

choosehv

Snap to horizontal or vertical

forcelines

flatten bumps on lines

nearlyhvlines

Make nearly horizontal/vertical lines be so

mergelines

Merge adjacent lines into one

setstarttoextremum

Rotate the point list so that the start point is on an extremum

removesingletonpoints

If the contour contains just one point then remove it

`stemControl`

`(stem_width_scale, [hscale, stem_height_scale, vscale,     xheight])`

Allows you to scale counters and stems independently of each other.
`Stem_width_scale` specifies by how much the widths of stems should be
scaled (this should be a number around 1). If omitted `hscale` defaults
to 1, otherwise it will indicate the horizontal scaling factor for the
glyph as a whole. If omitted `stem_height_scale` defaults to
`stem_width_scale`, otherwise it specifies the scaling for stem heights.
If omitted `vscale` defaults to `hscale`, otherwise it specifies the
vertical scale factor for the glyph as a whole.

`Xheight` is optional, if specified it will fix the points at that
height so that they will be at the same level across glyphs.

`stroke`

`("circular",width[,linecap,linejoin,flags])     ("eliptical",width,minor-width,angle      [,linecap,linejoin,flags])     ("caligraphic",width,height,angle[,flags])     ("polygon",contour[,flags])`

Strokes the current line using one of the indicated pens. Line cap may
be one of

-   butt
-   round
-   square

line join may be

-   miter
-   round
-   bevel

flags is a tuple containing some of the following strings

-   removeinternal
-   removeexternal
-   cleanup

If a polygonal pen is specified the contour must be a closed, convex
polygon (no curved edges) with fewer than 100 vertices.

`transform`

`(matrix)`

Transforms the layer by the matrix

`nltransform`

`(xexpr,yexpr)`

xexpr and yexpr are strings specifying non-linear transformations that
will be applied to all points in the layer (with xexpr being applied to
x values, and yexpr to y values, of course). The syntax for the
expressions is explained in the [non-linear transform
dialog](../../interface/transform/#Non-Linear).

`boundingBox`

`()`

Returns a tuple representing a rectangle (xmin,ymin, xmax,ymax) into
which the layer fits. It is not guaranteed to be the smallest such
rectangle, but it will often be.

`xBoundsAtY`

`(ybottom[,ytop])`

Finds the minimum and maximum x positions attained by the contour when y
is between ybottom and ytop (if ytop is not specified it is assumed the
same as ybottom). If the layer does not have any y values in the
specified range then ff will return None.

`yBoundsAtX`

`(xleft[,xright])`

Finds the minimum and maximum y positions attained by the contour when x
is between xleft and xright (if xright is not specified it is assumed
the same as xleft). If the layer does not have any x values in the
specified range then ff will return None.

`draw`

`(pen)`

Draw the layer to the [pen
argument.](http://www.robofab.org/objects/pen.html)

Pickling Methods

`__reduce__`

`()`

This function allows the pickler to work on this type. I don't think it
is useful for anything else.

glyphPen

This implements the [Pen
Protocol](http://www.robofab.org/objects/pen.html) to draw into a
FontForge glyph. You create a glyphPen with the
[glyphPen](#glyph-glyphPen) attribute of a glyph. You then draw into it
with the operators below.

>     import fontforge;
>     font = fontforge.open("Ambrosia.sfd");  #Open a font
>     pen = font["B"].glyphPen();     # Create a pen to draw into glyph "B"
>     pen.moveTo((100,100));          # draw a square
>     pen.lineTo((100,200));
>     pen.lineTo((200,200));
>     pen.lineTo((200,100));
>     pen.closePath();            # end the contour
>
>     font["A"].draw(pen);            # or you can copy from one glyph to another
>                         # by having a glyph draw itself into the pen
>     pen = None;             # Finalize the pen. This tells FontForge
>                         # that the drawing is done and causes
>                                 # it to refresh the display (if a UI is active).

This type may not be pickled.

Members

None

Methods

method

args

comments

`moveTo`

`((x,y))`

With one exception this call begins every contor and creates an on curve
point at (x,y) as the start point of that contour. This should be the
first call after a pen has been created and the call that follows a
closePath, endPath.

`lineTo`

`((x,y))`

Draws a line from the last point to (x,y) and adds that to the contour.

`curveTo`

`((cp1.x,cp1.y),(cp2.x,cp2.y),(x,y))     ((cp.x,cp.y),(x,y))`

This routine has slightly different arguments depending on the type of
the font. When drawing into a cubic font (PostScript) use the first set
of arguments (with two control points -- off curve points -- between
each on curve point). When drawing into a quadratic font (TrueType) use
the second format with one control point between adjacent on-curve
points.

The standard appears to support super-bezier curves with more than two
control points between on-curve points. FontForge does not. Nor does
FontForge allow you to draw a quadratic spline into a cubic font, nor
vice versa.

`qCurveTo`

`([(cp.x,cp.y)]*,(x,y))     ([(cp.x,cp.y)]*,None))`

This routine may only be used in quadratic (TrueType) fonts and has two
different formats. It is used to express the TrueType idiom where an
on-curve point mid-way between its control points may be omitted,
leading to a run of off-curve points (with implied but unspecified
on-curve points between them).

The first format allows an arbetary number of off-curve points followed
by one on-curve point.

It is possible to have a contour which consists solely of off-curve
points. When this happens the contour is NOT started with a moveTo,
instead the entire contour, all the off curve points, are listed in one
call, and the argument list is terminated by a `None` to indicate there
are no on-curve points.

`closePath`

`()`

Closes the contour (connects the last point to the first point to make a
loop) and ends it.

`endPath`

`()`

Ends the contour without closing it. This is only relevant if you are
stroking contours.

`addComponent`

`(glypn-name,transform)`

Adds a reference (a component) to the glyph. The PostScript
transformation matrix is a 6 element tuple.

glyph

Description

The glyph type refers to a fontforge Glyph object. It has no independent
life of its own, it always lives within a font. It has all the things
you expect to be associated with a glyph: a glyph name, a unicode
encoding, a drawing layer, GPOS/GSUB features...

This type may not be pickled.

This type may not be created directly -- all glyphs are bound to a font
and must be created through the font.

Members

member

comments

`activeLayer`

Returns currently active layer in the glyph (as an integer). May be set
to an integer or a layer name to change the active layer.

`altuni`

Returns additional unicode code points for this glyph. For a primary
code point, see [unicode](#g-unicode).

Returns either None or a tuple of alternate encodings. Each alternate
encoding is a tuple of
 `(unicode-value, variation-selector, reserved-field)`
 The first is an unicode value of this alternate code point. The second
is an integer for variation selector and can be set to -1 if not used.
The third is an empty field reserved for future use and currently must
be set to zero.

`glyph.altuni can be set to None to clear all alternates,         or to a tuple. The elements of the tuple may be either integers         (an alternate unicode value with no variation selector)     or a tuple with up to 3 values in it as explained above.          `

`anchorPoints`

Returns the list of anchor points in the glyph. Each anchor point is a
tuple of
 `(anchor-class-name, type, x,y [,ligature-index])`
 The first two are strings, the next two doubles, and the last (which is
only present if type=="ligature") is an integer. Type may be

-   mark
-   base
-   ligature
-   basemark
-   entry
-   exit

`anchorPointsWithSel`

Same as the above, except also includes whether the anchor point is
selected in the UI. Returns a tuple of all anchor points in the glyph.
Each anchor point is a tuple of
 `(anchor-class-name, type, x,y, selected [,ligature-index])`
 The first two are strings, the next two doubles, then a boolean, and
the last (which is only present if type=="ligature") is an integer. Type
may be

-   mark
-   base
-   ligature
-   basemark
-   entry
-   exit

`background`

The glyph's background layer. This is a *copy* of the glyph's data. See
also [foreground](#g-foreground), and
[layers](#glyph-layers).

`changed`

Whether this glyph has been modified. This is (should be) maintained
automatically, but you may set it if you wish.

`color`

The color of the glyph in the fontview. A 6 hex-digit RGB number or -1
for default. 0xffffff is white, 0x0000ff is blue, etc.

`comment`

Any comment you wish to associate with the glyph. UTF-8

`dhints`

A tuple with one entry for each diagonal stem hint. Each stem hint is
itself represented by a tuple of three coordinate pairs (themselves
tuples of two numbers), these three are: a point on one side of the
stem, a point on the other side, and a unit vector pointing in the
stem's direction.

`encoding`

Returns the glyph's encoding in the font's encoding. (readonly)

If the glyph has multiple encodings, one will be picked at random.
 If the glyph is not in the font's encoding then a number will be
returned beyond the encoding size (or in some cases -1 will be
returned).

`font`

The font containing this glyph. (readonly)

`foreground`

The glyph's foreground layer. This is a *copy* of the glyph's data. See
also [background](#g-background), [layers](#glyph-layers) and
[references](#g-references).

`glyphclass`

An opentype glyphclass, one of automatic, noclass, baseglyph,
baseligature, mark, component

`glyphname`

The name of the glyph

`hhints`

A tuple of all horizontal postscript hints. Each hint is itself a tuple
of starting locations and widths.

`horizontalComponents`

A tuple of tuples.

This allows [constructing](../../reference/math/#GlyphConstruction) very large
versions of the glyph by stacking the componants together. Some
components may be repeated so there is no bound on the size.

This is different from horizontalVariants which expects prebuilt glyphs
of various fixed sizes.

The components are stacked in the order they appear in the (top-level)
tuple. Each sub-tuple represents information on one component. The
subtuple should contain: (String glyph-name, Boolean is-extender, Int
startConnectorLength, Int endConnectorLength, Int fullAdvance). Any of
these may be omitted (except the glyph name) and will be assumed to be 0
if so.

`horizontalComponentItalicCorrection`

The italic correction for any composite glyph made with the
horizontalComponents.

`horizontalVariants`

A string containing a list of glyph names. These are [alternate
forms](../../reference/math/#Variants</a) of the current glyph for use in
typesetting math. Presumably the variants are of different sizes.

Although ff will always return a string of glyph names, you may assign
to it with a tuple of glyphs and ff will convert that to corresponding
names.

`isExtendedShape`

A boolean containing the MATH "is extended shape" field.

`italicCorrection`

The glyph's italic correction field. Used by both TeX and MATH. The
special value of -32768 (0x8000) means the value is unspecified (An
unspecified value will not go into the output tables, a value of 0 will)

`layer_cnt`

The number of layers in this glyph. (Cannot be set)

`layers`

A dictionary like object containing the layers of the glyph. It may be
indexed by either a layer name, or an integer between 0 and
`glyph.layer_cnt-1` to produce a [Layer](#Layer) object. Layer 0 is the
background layer. Layer 1 is the foreground layer.

`layerrefs`

A dictionary like object containing the references in the layers of the
glyph. It may be indexed by either a layer name, or an integer between 0
and `glyph.layer_cnt-1` to produce a [reference tuple](#g-references)
object. Layer 0 is the background layer. Layer 1 is the foreground
layer.

`lcarets`

A tuple containing the glyph's ligature caret locations. Setting this
will also either enable or disable the "Default Ligature Caret Count"
flag depending from the number of elements in the tuple.

`left_side_bearing`

The left side bearing of the glyph

`manualHints`

The glyph's hints have been set by hand, and the glyph should not be
autohinted without a specific request from the user. The "Don't
AutoHint" flag.

`mathKern.bottomLeft`

The glyph's math kerning data associated with the bottom left vertex.
This returns a tuple of two element tuples, each of which contains a
kerning offset and an associated height (in the last entry the height
term is meaningless, but present).

`mathKern.bottomRight`

The glyph's math kerning data associated with the bottom right vertex.
This returns a tuple of two element tuples, each of which contains a
kerning offset and an associated height (in the last entry the height
term is meaningless, but present).

`mathKern.topLeft`

The glyph's math kerning data associated with the top left vertex. This
returns a tuple of two element tuples, each of which contains a kerning
offset and an associated height (in the last entry the height term is
meaningless, but present).

`mathKern.topRight`

The glyph's math kerning data associated with the top right vertex. This
returns a tuple of two element tuples, each of which contains a kerning
offset and an associated height (in the last entry the height term is
meaningless, but present).

`originalgid`

The GID of this glyph in the font it was read from. (readonly)

`persistent`

Whatever you want (these data will be saved as a pickled object in the
sfd file. It is your job to insure that whatever you put here can be
pickled). See also [the temporary](#glyph-temporary) field.

`references`

A tuple of tuples containing glyph-name and a transformation matrix for
each reference in the foreground. See also [foreground](#g-foreground)
and [layerrefs](#layerrefs).

`right_side_bearing`

The right side bearing of the glyph

`script`

A string containing the OpenType 4 letter tag for the script associated
with this glyph (readonly)

`temporary`

Whatever you want (these data will be lost once the font is closed) See
also [the persistent](#glyph-persistent) field.

`texheight`

The Tex height. The special value of -32768 (0x8000) means the field is
unspecified (An unspecified value will not go into the output tables, a
value of 0 will)

`texdepth`

The Tex depth. The special value of -32768 (0x8000) means the field is
unspecified (An unspecified value will not go into the output tables, a
value of 0 will)

`topaccent`

The glyph's top accent position field. Used by MATH. The special value
of -32768 (0x8000) means the field is unspecified (An unspecified value
will not go into the output tables, a value of 0 will)

`ttinstrs`

Any truetype instructions, returned as a binary string

`unicode`

The glyph's unicode code point, or -1. In addition to this primary
mapping, a glyph can have multiple secondary mappings - see
[altuni](#g-altuni).

`unlinkRmOvrlpSave`

A flag that indicates the glyph's references should be unlinked and
remove overlap run on it before the font is saved (and then the original
references replaced after the save finishes)

`userdata`

Deprecated name for [temporary field above](#glyph-temporary)

`vhints`

A tuple of all vertical postscript hints. Each hint is itself a tuple of
starting locations and widths.

`validation_state`

A bit mask indicating some problems this glyph might have. (readonly)

0x1

If set then this glyph has been validated.
 If unset then other bits are meaningless.

0x2

Glyph has an open contour.

0x4

Glyph intersects itself somewhere.

0x8

At least one contour is drawn in the wrong direction

0x10

At least one reference in the glyph has been flipped
 (and so is drawn in the wrong direction)

0x20

Missing extrema

0x40

A glyph name referred to from this glyph, in an opentype table, is not
present in the font.

0x40000

Points (or control points) are too far apart. (Coordinates must be
within 32767)

PostScript only

0x80

PostScript has a limit of 1500 points in a glyph.

0x100

PostScript has a limit of 96 hints in a glyph.

0x200

Invalid glyph name.

TrueType only, errors in original file

0x400

More points in a glyph than allowed in 'maxp'

0x800

More paths in a glyph than allowed in 'maxp'

0x1000

More points in a composite glyph than allowed in 'maxp'

0x2000

More paths in a composite glyph than allowed in 'maxp'

0x4000

Instructions longer than allowed in 'maxp'

0x8000

More references in a glyph than allowed in 'maxp'

0x10000

References nested more deeply than allowed in 'maxp'

0x40000

Points too far apart. TrueType and Type2 fonts are limited to 16 bit
numbers, and so adjacent points must be within 32767 em-units of each
other.

0x80000

Points non-integral. TrueType points and control points must be integer
aligned. (FontForge will round them if they aren't)

0x100000

Missing anchor. According to the opentype spec, if a glyph contains an
anchor point for one anchor class in a subtable, it must contain anchor
points for all anchor classes in the subtable. Even it, logically, they
do not apply and are unnecessary.

0x200000

Duplicate glyph name. Two (or more) glyphs in this font have the same
name. When outputting a PostScript font only one of them will ever be
seen.

It's a little hard to detect this in normal use, but if you change the
encoding to "Glyph Order", and then use Edit-\>Select-\>Wildcard and
enter the glyph name, both of them should be selected.

0x400000

Duplicate unicode code point. Two (or more) glyphs in this font have the
code point. When outputting an sfnt (TrueType/OpenType) font only one of
them will ever be seen.

It's a little hard to detect this in normal use, but if you change the
encoding to "Glyph Order", and then use Edit-\>Select-\>Wildcard and
enter the code point, both of them should be selected.

0x800000

Overlapped hints. Either the glyph has no hint masks and there are
overlapped hints, or a hint mask specifies two overlapping hints.

`verticalComponents`

A tuple of tuples.

This allows [constructing](../../reference/math/#GlyphConstruction) very large
versions of the glyph by stacking the componants together. Some
components may be repeated so there is no bound on the size.

This is different from verticalVariants which expects prebuilt glyphs of
various fixed sizes.

The components are stacked in the order they appear in the (top-level)
tuple. Each sub-tuple represents information on one component. The
subtuple should contain: (String glyph-name, Boolean is-extender, Int
startConnectorLength, Int endConnectorLength, Int fullAdvance). Any of
these may be omitted (except the glyph name) and will be assumed to be 0
if so.

`verticalComponentItalicCorrection`

The italic correction for any composite glyph made with the
verticalComponents.

`verticalVariants`

A string containing a list of glyph names. These are [alternate
forms](../../reference/math/#Variants</a) of the current glyph for use in
typesetting math. Presumably the variants are of different sizes.

`width`

The advance width of the glyph. See also [vwidth](#g-vwidth).

`vwidth`

The vertical advance width of the glyph. See also [width](#g-width).

Methods

method

args

comments

`addAnchorPoint`

`(anchor-class-name,     anchor-type,     x,y     [,ligature-index])`

Adds an anchor point. anchor-type may be one of the strings

-   "mark"
-   "base"
-   "ligature"
-   "basemark"
-   "entry"
-   "exit"

If there is an anchor point with the same anchor-class-name and:

-   lookup type is "gpos\_mark2base" or
-   lookup type is "gpos\_mark2ligature" and ligature-index is the same
    or
-   anchor-type is the same

then the existing anchor will be overwritten.

`addExtrema`

`([flags,emsize])`

Extrema should be marked by on-curve points. If a curve lacks a point at
an extrema this command will add one. Flags may be one of the following
strings

all

Add all missing extrema

only\_good

Only add extrema on longer splines (with respect to the em-size)

only\_good\_rm

As above but also merge away on-curve points which are very close to,
but not on, an added extremum

`addReference`

`(glyph-name[,transform])`

Adds a reference to the specified glyph into the current glyph.
Optionally specifying a transformation matrix

`addHint`

`(is-vertical,start,width)`

Adds a postscript hint. Takes a boolean flag indicating whether the hint
is horizontal or vertical, a start location and the hint's width.

`addPosSub`

`(subtable-name,variant)     (subtable-name,variants)     (subtable-name,ligature-components)     (subtable-name,xoff,yoff,xadv,yadv)     (subtable-name,other-glyph-name,kerning)     (subtable-name,other-glyph-name,  xoff1,yoff1,xadv1,yadv1,      xoff2,yoff2,xadv2,yadv2)`

Adds position/substitution data to the glyph. The number and type of the
arguments vary acording to the type of the lookup containing the
subtable. The first argument should always be a lookup subtable name. If
the lookup is for single substitutions then the second argument should
be a string containing a single glyph name. For multiple and alternated
substitutions a tuple of glyph names. For ligatures, a tuple of the
ligature components (glyph names). For single positionings the second
through fifth arguments should be small integers representing the
adjustment along the appropriate axis. For pairwise positionings
(kerning) the second argument should be the name of the other glyph
being kerned with, and the third through tenth should be small integers
-- or, if there are exactly three arguments then the third specifies
traditional, one-axis, kerning

If there is a previously existing entry, this will replace it (except
for ligatures).

`appendAccent`

`(name="glyph-name")     (unicode=<codepoint>)`

Makes a reference to the specified glyph, adds that reference to the
current layer of this glyph, and positions it to make a reasonable
accent.

`autoHint`

`()`

Generates PostScript hints for this glyph.

`autoInstr`

`()`

Generates TrueType instructions for this glyph.

`autoTrace`

`()`

Auto traces any background images

`boundingBox`

`()`

Returns a tuple representing a rectangle (xmin,ymin, xmax,ymax) which is
the minimum bounding box of the glyph.

`build`

`()`

If the character is a composite character, then clears it and inserts
references to its components

`canonicalContours`

`()`

Orders the contours in the current glyph by the x coordinate of their
leftmost point. (This can reduce the size of the charstring needed to
describe the glyph(s).

`canonicalStart`

`()`

Sets the start point of all the contours of the current glyph to be the
leftmost point on the contour. (If there are several points with that
value then use the one which is closest to the baseline). This can
reduce the size of the charstring needed to describe the glyph(s). By
regularizing things it can also make more things available to be put in
subroutines.

`changeWeight`

`(stroke_width[,type,     serif_height,serif_fuzz,     counter_type,custom_zones])`

See the [Element-\>Style-\>Change Width](../../interface/Styles/#Embolden) command
for a more complete description of these arguments.

Stroke\_width is the amount by which all stems are expanded.

Type is one of "LCG", "CJK", "auto", "custom".

Serif\_height tells ff not to expand serifs which are that much off the
baseline, while serif\_fuzz specifies the amount of fuzziness allowed in
the match. If you don't want special serif behavior set this to 0.

Counter\_type is one of "squish", "retain", "auto".

Custom\_zones is only meaningful if the type argument were "custom". It
may be either a number, which specifies the "top hint" value (bottom
hint is assumed to be 0, others are between), or a tuple of 4 numbers
(top hint, top zone, bottom zone, bottom hint).

`condenseExtend`

`(c_factor,c_add[,sb_factor,sb_add,correct])`

Condenses or extends the size of the counters and side-bearings of the
glyph. The first two arguments provide information on shrinking/growing
the counters, the second two the sidebearings. If the last two are
omitted they default to the same values as the first two.

A counter's width will become:
 `   new_width = c_factor * old_width + c_add`

If present the `correct` argument allows you to specify whether you want
to correct for the italic angle before condensing the glyph. (it
defaults to True)

`clear`

`()`

Clears the contents of the glyph (and marks it as not [worth
outputting](#g-isWorthOutputting)).

`cluster`

`([within,max])`

Moves clustered coordinates to a standard central value. See also
[round](#g-round).

`correctDirection`

`()`

Orients all contours so that external ones are clockwise and internal
counter-clockwise.

`exclude`

`(excluded-layer)`

Removes the excluded area from the current glyph. Takes an argument
which is a layer. See also [removeOverlap](#g-removeOverlap) and
[intersect](#g-intersect).

`export`

  ----------------------------------- -----------------
  `(filename[,pixelsize,bitdepth])`   bitmap images
  ` (filename[,layer])`               vector outlines
  ----------------------------------- -----------------

Uses the file's extension to determine output file type. Exports outline
formats to the file. For bitmap formats it will rasterize the glyph and
output that. There are different optional arguments for rasterizing
images and for direct outline output. bitdepth must be 1 or 8.

`getPosSub`

`(lookup-subtable-name)`

Returns any positioning/substitution data attached to the glyph
controlled by the lookup-subtable. If the name is "\*" then returns data
from all subtables.

The data are returned as a tuple of tuples. The first element of the
subtuples is the name of the lookup-subtable. The second element will be
one of the strings: "Position", "Pair", "Substitution", "AltSubs",
"MultSubs","Ligature".

Positioning data will be followed by four small integers representing
adjustments to the: x position of the glyph, the y position, the
horizontal advance, and the vertical advance.

Pair data will be followed by the name of the other glyph in the pair
and then eight small integers representing adjustments to the: x
position of the first glyph, the y position, the horizontal advance, and
the vertical advance, and then a similar foursome for the second glyph.

Substitution data will be followed by a string containing the name of
the glyph to replace the current one.

Multiple and Alternate data will be followed by several strings each
containing the name of a replacement glyph.

Ligature data will be followed by several strings each containing the
name of a ligature component glyph.

`importOutlines`

`(filename,[flags])`

Uses the file's extension to determine behavior. Imports outline
descriptions (eps, svg, glif files) into the forground layer. Imports
image descriptions (bmp, png, xbm, etc.) into the background layer.
Optionally, flags can be used to control PostScript import, it'll be
ignored for other file types. Flags is a tuple of the following strings

toobigwarn

Supress warning window about too big stroke width

removeoverlap

When FontForge detects that an expanded stroke will self-intersect, then
setting this flag will cause it to try to make things nice by removing
the intersections

handle\_eraser

Certain programs use pens with white ink as erasers. When this flag is
set, FontForge will attempt to simulate that.

correctdir

`intersect`

`()`

Leaves only areas in the intersection of contours. See also
[removeOverlap](#g-removeOverlap) and [exclude](#g-exclude).

`isWorthOutputting`

`()`

Returns whether the glyph is worth outputting into a font file.
Basically a glyph is worth outputting if it contains any contours, or
references or has had its width set.

`preserveLayerAsUndo`

`([layer,dohints])`

Normally undo handling is turned off during python scripting. If you
wish you may tell fontforge to preserve the current state of a layer so
that whatever you do later can be undone by the user. You may omit the
layer parameter (in which case the currently active layer will be used).
You may also request that hints be preserved (they are not, by default).

`removeOverlap`

`()`

Removes overlapping areas. See also [intersect](#g-intersect) and
[exclude](#g-exclude).

`removePosSub`

`(lookup-subtable-name)`

Removes all data from the glyph corresponding to the given
lookup-subtable. If the name is "\*" then all data will be removed.

`round`

`([factor])`

Rounds the x and y coordinates of each point in the glyph. If factor is
specified then new-coord = round(factor\*old-coord)/factor. See also
[cluster](#g-cluster).

`selfIntersects`

`()`

Returns whether any of the contours in this glyph intersects any other
contour in the glyph (including itself).

`simplify`

`([error-bound,flags,tan_bounds,     linefixup,linelenmax])`

Tries to remove excess points in the glyph if doing so will not perturb
the curve by more than `error-bound`. Flags is a tuple of the following
strings

ignoreslopes

Allow slopes to change

ignoreextrema

Allow removal of extrema

smoothcurves

Allow curve smoothing

choosehv

Snap to horizontal or vertical

forcelines

flatten bumps on lines

nearlyhvlines

Make nearly horizontal/vertical lines be so

mergelines

Merge adjacent lines into one

setstarttoextremum

Rotate the point list so that the start point is on an extremum

removesingletonpoints

If the contour contains just one point then remove it

`stroke`

`("circular",width[,linecap,linejoin,flags])     ("eliptical",width,minor-width,angle      [,linecap,linejoin,flags])     ("caligraphic",width,height,angle[,flags])     ("polygonal",contour[,flags])`

Strokes the contours of the glyph using one of the indicated pens. Line
cap may be one of

-   butt
-   round
-   square

line join may be

-   miter
-   round
-   bevel

flags is a tuple containing some of the following strings

-   removeinternal
-   removeexternal
-   cleanup

If a polygonal pen is specified, the contour must be a closed convex
polygon (no curved edges) with fewer than 100 vertices.

`transform`

`(matrix[,flags])`

Transforms the glyph by the matrix. The optional flags argument should
be a tuple containing any of the following strings:

-   partialRefs -- Don't transform any references in the glyph, but do
    transform their offsets. This is useful if the refered glyph will be
    (or has been) transformed.
-   round -- Round to int after the transformation is done.

`nltransform`

`(xexpr,yexpr)`

xexpr and yexpr are strings specifying non-linear transformations that
will be applied to all points in the current layer (with xexpr being
applied to x values, and yexpr to y values, of course). The syntax for
the expressions is explained in the [non-linear transform
dialog](../../interface/transform/#Non-Linear).

`unlinkRef`

`([ref-name])`

Unlinks the reference to the glyph named `ref-name`. If `ref-name` is
omitted, unlinks all references.

`unlinkThisGlyph`

`()`

Unlinks all the references to the current glyph within any other glyph
in the font.

`useRefsMetrics`

`(ref-name[,flag])`

Finds a reference with the given name and sets the "use\_my\_metrics"
flag on it (so this glyph will have the same advance width as the glyph
the reference points to).

If the optional flag argument is False, then the glyph will no longer
have its metrics bound to the reference.

`validate`

`([force])`

Validates the glyph and returns the `validation_state` of the glyph
(except bit 0x1 will always be clear). If the glyph passed the
validation then the return value will be 0 (not 0x1). Otherwise the
return value will be the set of errors found. If force is specified true
this will always be validated, if force is unspecified (or specified as
false) then it will return the cached value if it is known, otherwise
will validate it.

`draw`

`(pen)`

Draw the glyph's outline to the [pen
argument.](http://www.robofab.org/objects/pen.html)

`glyphPen`

`([replace=False])`

Creates a new glyphPen which will draw into the current glyph. By
default the pen will replace any existing contours and references, but
setting the optional keyword argument, `replace` to false will retain
the old contents.

**Note:** Glyphs do not have an independent existence. They live in
fonts. You may not create them with stand-alone, only in the context of
a font. See [font.createChar](#f-createChar)

selection

This represents a font's selection. You may index it with an encoding
value (in the encoding ISO-646-US (ASCII) the character "A" has encoding
index 65), or with a glyph's name, or with a string like "uXXXXX" where
XXXXX represent the glyph's unicode codepoint in hex, or with a
fontforge glyph object. The value of indexing into a selection will be
either True or False.

>     >>> print fontforge.activeFont().selection[65]
>     True

This type may not be pickled.

Members

member

comments

`byGlyphs`

Returns another selection, just the same as this one except that its
iterator function will return glyphs (rather than encoding slots) and
will only return those entries for which glyphs exist. (This is read
only)

Iterator Protocol

`__iter__`

`()`

Returns an iterator for the selection which will return all selected
encoding slots in encoding order.

Methods

method

args

comments

`all`

`()`

Select everything.

`none`

`()`

Deselect everything.

`changed`

`()`

Select all glyphs which have changed.

`invert`

`()`

Invert the selection.

`select`

`(args)`

There may be an arbetrary number of arguments. Each argument may be
either:

-   A glyph name
     Note: There need not be a glyph with this name in the font yet, but
    if you use a standard name (like "A") fontforge will still know
    where that glyph should be.
-   An integer (this will be interpreted as either an encoding index or
    (default) a unicode code point depending on the flags).
-   A fontforge glyph.
-   A tuple of flags.
     (If you wish to specify a single flag it must still be in a tuple,
    and you must append a trailing comma to the flag (so
    `("more",) `rather than just `("more")`). FF needs the flags to be
    in a tuple otherwise it can't distinguish them from glyph names)
    unicode
    Interpret integer arguments as unicode code points
    encoding
    Interpret integer arguments as encoding indeces.
    more
    Specified items should be selected
    less
    Specified items should be deselected.
    singletons
    Specified items should be interpreted individually and mean the
    obvious.
    ranges
    Specified items should be interpreted in pairs and represent all
    encoding slots between the start and end points specified by the
    pair. So `.select(("ranges",None),"A","Z")` would select all the
    upper case (latin) letters.

If the first argument is not a flag argument (or if it doesn't specify
either "more" or "less") then the selection will be cleared. So
`.select("A")` would produce a selection with only "A" selected,
`.select(("more",None),"A")` would add "A" to the current selection,
while `.select(("less",None),"A")` would remove "A" from the current
selection.

private

This represents a font's postscript private dictionary. You may index it
with one of the standard names of things that live in the private
dictionary.

This type may not be pickled.

Iterator Protocol

`__iter__`

`()`

Returns an iterator for the dictionary which will return all entres.

Methods

method

args

comments

`guess`

`(name)`

Guess a value for this this entry in the private dictionary. If
fontforge can't make a guess it will simply ignore the request.

math

This represents a font's math constant table. Not all fonts have math
tables, and checking this field will not create the underlying object,
but examining or assigning to its members will create it..

This type may not be pickled.

Members

Any of the math constant names may be used as member names.
 The list is long, and I shall not copy them all. Here is a subset

`ScriptPercentScaleDown     ScriptScriptPercentScaleDown     DelimitedSubFormulaMinHeight     ...`
 (These names begin with capital letters, not python's conventions but
MicroSoft's)
 These all take (16 bit) integer values.
 I do not currently provide python access to any associated device
tables.

Methods

method

args

comments

`exists`

`()`

Returns whether the font currently has an underlying math table
associated with it. Note that examining or assigning to one of the
members will create such a table.

`clear`

`()`

Removes any underlying math table from the font.

font

Description

The font type refers to a fontforge Font object. It generally contains a
list of glyphs, an encoding to order those glyphs, a fontname, a list of
GPOS/GSUB lookups and many other things.

This type may not be pickled.

Creation

`fontforge.font`

`()`

Creates a new font

Members

member

comments

`activeLayer`

Returns currently active layer in the font (as an integer). May be set
to an integer or a layer name to change the active layer.

`ascent`

The font's ascent

`bitmapSizes`

A tuple with an entry for each bitmap strike attached to the font. Each
strike is identified by pixelsize (if the strike is a grey scale font it
will be indicated by `(bitmap-depth<<16)|pixelsize`.

When setting this value pass in a tuple of the same format. Any existing
strike not specified in the tuple will be removed. Any new sizes will be
created (but not rasterized -- use [regenBitmaps](#f-regenBitmaps) for
that).

`capHeight`

(readonly) Computes the Cap Height (the height of capital letters such
as "E"). A negative number indicates the value could not be computed
(the font might have no capital letters because it was lower case only,
or didn't include glyphs for a script with capital letters).

`changed`

Bit indicating whether the font has been modified. This is (should be)
maintained automatically, but you may set it if you wish.

`cidcopyright`

Copyright message of the cid-keyed font as a whole (ie. not the current
subfont).

`cidfamilyname`

Family name of the cid-keyed font as a whole (ie. not the current
subfont).

`cidfontname`

Font name of the cid-keyed font as a whole (ie. not the current
subfont).

`cidfullname`

Full name of the cid-keyed font as a whole (ie. not the current
subfont).

`cidordering`

 

`cidregistry`

 

`cidsubfont`

Returns the number index of the current subfont in the cid-keyed font
(or -1 if this is not a cid-keyed font).

May be set to an index (an integer) or a subfont fontname (a string) to
change the current subfont. (To find the name of the current subfont,
simply use .fontname).

`cidsubfontcnt`

Returns the number of subfonts in this cid-keyed font (or 0 if it is not
a cid-keyed font)

`cidsubfontnames`

Returns a tuple of the subfont names in this cid-keyed font (or None if
it is not a cid-keyed font)

`cidsupplement`

 

`cidversion`

 

`cidweight`

Weight of the cid-keyed font as a whole

`comment`

A comment associated with the font. Can be anything.

`copyright`

PostScript copyright notice

`cvt`

Returns a sequence object containing the font's cvt table. Changes made
to this object will be made to the font (this is a reference not a
copy).
 The object has one additional method cvt.find(value[,low,high]) which
finds the index of value in the cvt table (or -1 if not found). If low
and high are specified then the index will be between [low,high).

`default_base_filename`

The default base for the filename when generating a font

`descent`

The font's descent

`design_size`

Size (in pica points) for which this font was designed.

`em`

The em size of the font. Setting this will scale the entire font to the
new size.

`encoding`

The name of the current encoding. Setting it will change the encoding
used for indexing

`familyname`

PostScript font family name

`fondname`

Mac fond name

`fontlog`

A comment associated with the font. Can be anything.

`fontname`

PostScript font name
 Note that in a CID keyed font this will be the name of the current
subfont. Use cidfontname for the name of the font as a whole.

`fullname`

PostScript font name

`gasp`

Returns a tuple of all gasp table entries. Each item in the tuple is
itself a tuple composed of a ppem (an integer) and a tuple of flags. The
flags are a chosen from:

-   gridfit
-   antialias
-   symmetric-smoothing
-   gridfit+smoothing

`gasp_version`

The version of the 'gasp' table. Currently this may be 0 or 1.

`gpos_lookups`

Returns a tuple of all positioning lookup names in the font. This member
cannot be set.

`gsub_lookups`

Returns a tuple of all substitution lookup names in the font. This
member cannot be set.

`guide`

A copy of the font's guide layer

`hasvmetrics`

`head_optimized_for_cleartype`

`hhea_ascent`

`hhea_ascent_add`

`hhea_descent`

`hhea_descent_add`

`hhea_linegap`

`horizontalBaseline`

Returns a tuple of tuples containing the horizontal baseline information
in the font (the 'BASE' table). If there is no information NONE will be
returned, otherwise the format of the tuple is:
 `((tuple of baseline tags used), (tuple of script information))` 
 The `(tuple of baseline tags used)` is simply a tuple of 4 letter
strings as `("hang", "ideo", "romn")` these are standard baseline tag
names as defined in the opentype spec. The number of entries here, and
their order is important as there will be subsequent tuples (in the
script tuple) which use the same ordering.

The `(tuple of script information)` is again a tuple of
`script     information` tuples.

A `script information` tuple looks like

`(script-tag,default-baseline-tag, (tuple of baseline positions), (tuple     of language extents))`
 If there are no baseline tags defined (an empty tuple), then the
`default-baseline-tag` and the `(tuple of baseline     positions)` will
be NONE. Otherwise both tags will be 4 character strings, and the
`(tuple of baseline positions)` will be a tuple of numbers (in the same
order as the `(tuple of baseline tags used)` above) specifying the
relative positions of each baseline for this script.

A `(tuple of language extents)` is a tuple of `language     extent`
tuples.

A `language extent` tuple is
 `(language-tag,min-extent,max-extent, (tuple of feature     extents))`
 `language-tag` is a 4 letter string specifying an opentype
language,`min`/`max-extent` are numbers specifying how far above and
below the baseline characters go in this script/language.

A `(tuple of feature extents>` is a tuple of `feature     extent`
tuples.

A `feature extent` tuple is
 `(feature-tag,min-extent,max-extent, (tuple of feature     extents))`
 `feature-tag` is a 4 letter string specifying an opentype (GPOS or
GSUB) feature tag,`min`/`max-extent` are numbers specifying how far
above and below the baseline characters go in this script/language with
the feature applied.

**Example:**

>     (("hang","ideo","romn"),
>       (("cyrl","romn",(1405,-288,0),()),
>        ("grek","romn",(1405,-288,0),()),
>        ("latn","romn",(1405,-288,0),
>         ("dflt",-576,1913,
>          ("NoAc",-576,1482))
>         ("ENG ",-576,1482,())
>        )
>       )
>     )

`is_cid`

Indicates whether the font is a cid-keyed font or not. (Read-only)

`is_quadratic`

Deprecated. Whether the contours should be interpretted as a set of
quadratic or cubic splines. Setting this value has the side effect of
converting the entire font into the other format

Now each layer may have its own setting for this value, which should be
set on the font's [layers](#f-layers) object.

`isnew`

A flag indicating that this is a new font

`italicangle`

`macstyle`

`layer_cnt`

The number of layers in the font. (Read only. Can change using `add` and
`del` operations on the [layers](#f-layers) array)

`layers`

Returns a dictionary like object with information on the layers of the
font -- a name and a boolean indicating whether the layer is quadratic
or not.

You may remove a layer with `del font.layers["unneeded     layer"]`;
 You may add a new layer with
`font.layers.add("layer-name",is_quadratic[,     is_background])`;
 You may change a layer's name with
`font.layers["layer"].name =     "new-name"`;
 You may change the type of splines in a layer with
`font.layers["layer"].is_quadratic = True`;
 You may change whether it is a background layer by
`font.layers["layer"].is_background = True`;

Note: The layers that live in the font are different from layers that
live in a glyph. These objects do not have the Layer type documented
earlier.

`loadState`

A bitmask indicating non-fatal errors found when loading the font.
(readonly)

  ------- ------------------------------------------------------------------------------------------------------------------------
  0x01    Bad PostScript entry in 'name' table

  0x02    Bad 'glyf' or 'loca' table

  0x04    Bad 'CFF ' table

  0x08    Bad 'hhea', 'hmtx', 'vhea' or 'vmtx' table

  0x10    Bad 'cmap' table

  0x20    Bad 'EBLC', 'bloc', 'EBDT' or 'bdat' (embedded bitmap) table

  0x40    Bad Apple GX advanced typography table

  0x80    Bad OpenType advanced typography table (GPOS, GSUB, GDEF, BASE)

  0x100   Bad OS/2 version number
           Windows will reject all fonts with a OS/2 version number of 0 and will reject OT-CFF fonts with a version number of 1
  ------- ------------------------------------------------------------------------------------------------------------------------

`maxp_FDEFs`

The number of function definitions used by the tt program

`maxp_IDEFs`

The number of instruction definitions used by the tt program

`maxp_maxStackDepth`

The maximum stack depth used by the tt program

`maxp_storageCnt`

The number of storage locations used by the tt program

`maxp_twilightPtCnt`

The number of points in the twilight zone of the tt program

`maxp_zones`

The number of zones used in the tt program

`multilayer`

`onlybitmaps`

A flag indicating that this font only contains bitmaps. No outlines.

`os2_codepages`

A 2 element tuple containing the OS/2 Codepages field

`os2_family_class`

`os2_fstype`

`os2_panose`

`os2_strikeypos`

`os2_strikeysize`

`os2_subxoff`

`os2_subxsize`

`os2_subyoff`

`os2_subysize`

`os2_supxoff`

`os2_supxsize`

`os2_supyoff`

`os2_supysize`

`os2_typoascent`

`os2_typoascent_add`

`os2_typodescent`

`os2_typodescent_add`

`os2_typolinegap`

`os2_use_typo_metrics`

`os2_unicoderanges`

A 4 element tuple containing the OS/2 Unicode Ranges field

`os2_vendor`

`os2_version`

`os2_weight`

`os2_weight_width_slope_only`

`os2_width`

`os2_capheight`

`os2_xheight`

`os2_winascent`

`os2_winascent_add`

`os2_windescent`

`os2_windescent_add`

`path`

(readonly) Returns a string containing the name of the file from which
the font was originally read (in this session), or if this is a new
font, returns a made up filename in the current directory named
something like "Untitled1.sfd". See also [sfd\_path](#sfd-path).

`persistent`

Whatever you want -- though I recommend you store a dict here (these
data will be saved as a pickled object in the sfd file. It is your job
to insure that whatever you put here can be pickled)

If you do store a dict then the following entries will be treated
specially:

initScriptString

If present, and if this is a string, then each time the font is loaded
from an sfd file, this string will be passed to the python interpretter.
Note: This is a string, not a function. Function code cannot be pickled.
Since it is a string it will receive no arguments, but the current font
will be available in the activeFont method of the fontforge module.

This string will be interpretted before the loadFontHook of the [module
hooks](#module-hooks) dictionary.

One possible behavior for this string is to define function hooks to be
stored in the temporary dict described below.

`math`

Returns an [object which provides information on the font's underlying
math constant table. There is only one of these per font.](#math)

`private`

Returns a [dictionary like object representing the PostScript private
dictionary](#private) for the font. Changing entries in this object will
change them in the font. (It's a reference, not a copy).

There is an iterator associated with this entry.

`privateState`

Checks the (PostScript) Private dictionary and returns a bitmask of some
common errors.

  ----------- ---------------------------------------------------------------------------------------------------------------------
  0x000001    Odd number of elements in either the BlueValues or OtherBlues array.
  0x000002    Elements in either the BlueValues or OtherBlues are disordered.
  0x000004    Too many elements in either the BlueValues or OtherBlues array.
  0x000008    Elements in either the BlueValues or OtherBlues array are too close (must be at least 2\*BlueFuzz +1 appart.
  0x000010    Elements in either the BlueValues or OtherBlues array are not integers.
  0x000020    Alignment zone height in either the BlueValues or OtherBlues array is too big for the value of BlueScale.
  0x000100    Odd number of elements in either the FamilyBlues or FamilyOtherBlues array.
  0x000200    Elements in either the FamilyBlues or FamilyOtherBlues are disordered.
  0x000400    Too many elements in either the FamilyBlues or FamilyOtherBlues array.
  0x000800    Elements in either the FamilyBlues or FamilyOtherBlues array are too close (must be at least 2\*BlueFuzz +1 appart.
  0x001000    Elements in either the FamilyBlues or FamilyOtherBlues array are not integers.
  0x002000    Alignment zone height in either the FamilyBlues or FamilyOtherBlues array is too big for the value of BlueScale.
  0x010000    Missing BlueValues entry.
  0x020000    Bad BlueFuzz entry.
  0x040000    Bad BlueScale entry.
  0x080000    Bad StdHW entry.
  0x100000    Bad StdVW entry.
  0x200000    Bad StemSnapH entry.
  0x400000    Bad StemSnapV entry.
  0x800000    StemSnapH does not include StdHW.
  0x1000000   StemSnapV does not include StdVW.
  0x2000000   Bad BlueShift entry.
  ----------- ---------------------------------------------------------------------------------------------------------------------

`selection`

Returns a reference to an [array-like object representing the font's
selection](#selection). There is one entry for each encoding slot (there
may not be a glyph attached to every encoding slot). You may set this
with a tuple of integers (or boolean values). There should not be more
entries in the tuple than there are encoding slots in the current
encoding. A `True` or non-0 value means the slot is selected.

`sfd_path`

(readonly) Returns a string (or None) containing the name of the sfd
file associated with this font. Sometimes this will be the same as
[path](#path) (above).

`sfnt_names`

The strings in the sfnt 'name' table. A tuple of all ms names. Each name
is itself a tuple of strings (language,strid,string). Language may be
either the (english) name of the language/locale, or the number
representing that language in MicroSoft's specification. Strid may be
one of the (english) string names (Copyright, Family, SubFamily, etc.)
or the numeric value of that item. The string itself is in UTF-8.

Mac names will be automagically created from ms names

`sfntRevision`

The font revision field stored in the 'head' table of an sfnt. This is
documented to be a fixed 16.16 number (that is a 32 bit number with the
binary point between bits 15 and 16).

The field may be unset (in which case when the font is generated,
FontForge will guess a default value from one of the version strings).

The value returned with be `None` if the field is unset or a double.

You may set it to `None` which "unsets" it, or to a double value, or to
an integer. The integer will be treated as a 32 bit integer and right
shifted by 16 to get a 16.16 value).

`size_feature`

The OpenType 'size' feature has two formats. It may either represent the
design size of the font (and nothing else) or the design size, and range
(top and bottom point sizes for which this design works), a style id
(used to represent this design size throughout the font family) and a
set of language/string pairs used to represent this design size in the
menu.

If no size information is specified in the font FontForge will return
None.

If only the design size is specified, FontForge will return a tuple
containing a single element: the point size for which the font was
designed. (This is returned as a real number -- the field can represent
tenths of a point).

Otherwise FontForge returns a tuple containing five elements, the design
size, the bottom of the design range, the top, the style id and a tuple
of tuples. Each sub-tuple is a language/string pair. Language may be
either the (english) name of the language/locale, or The string itself
is in UTF-8.

`strokedfont`

is this a stroked font?

`strokewidth`

the stroke width of a stroked font

`temporary`

Whatever you want -- though I recommend you store a dict here (these
data will be lost once the font is closed)

If you do store a dict then the following entries will be treated
specially:

  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  generateFontPreHook    If present, and if this is a function it will be called just before a font is generated. It will be called with the font and the filename to which the font will be written.
  generateFontPostHook   If present, and if this is a function it will be called just after a font is generated. It will be called with the font and the filename to which the font will be written.
  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

`texparameters`

Returns a tuple of [TeX font parameters](../../interface/fontinfo/#TeX). TeX font
type followed by 22 parameters. Font type is one of:

-   text
-   mathsym
-   mathext
-   unset

In case of "unset" default values for font parameters will be returned.

`uniqueid`

`upos`

underline position

`userdata`

Deprecated name for [temporary](#font-temporary) above

`uwidth`

underline width

`version`

PostScript font version string

`verticalBaseline`

Same format as [horizontal\_baseline](#horizontal-baseline), which see.

`vertical_origin`

deprecated

`vhea_linegap`

`weight`

PostScript font weight string

`woffMajor`

The major version number of a woff file, an integer.

The field may be unset (in which case when the font is generated,
FontForge will guess a default value from one of the version strings).

The value returned with be `None` if the field is unset or an integer.

You may set it to `None` which "unsets" it, or to an integer.

`woffMinor`

The minor version number of a woff file, an integer.

The field may be unset (in which case when the font is generated,
FontForge will guess a default value from one of the version strings).

The value returned with be `None` if the field is unset or an integer.

You may set it to `None` which "unsets" it, or to an integer.

`woffMetadata`

Any metadata associated with a woff file. This is a utf8 string
containing unparsed xml.

`xHeight`

(readonly) Computes the X Height (the height of lower case letters such
as "x"). A negative number indicates the value could not be computed
(the font might have no lower case letters because it was upper case
only, or didn't include glyphs for a script with lower case letters).

Iterator Protocol

`__iter__`

`()`

Returns an iterator for the font which will run through the font, in gid
order, returning glyph names

`<name> in f`

Returns whether the font contains a glyph with the given name.

Other iterators over the font:

[selection](#selection),
font.[find](#font-find)(),
font.[glyphs](#font-glyphs)()

Mapping Protocol

`len(f)`

The number of glyph slots in the current encoding

`f[i]`

If *i* is an integer, then returns the glyph at that encoding. If a
string then returns the glyph with that name. May not be assigned to.

Methods

method

args

comments

`addAnchorClass`

`(lookup-subtable-name,      new-anchor-class-name)`

Adds an anchor class to the specified (anchor) subtable.

`addKerningClass`

`(lookup-name,new-subtable-name,      first-classes,      second-classes,      offsets      [,after])`

**or**

`(lookup-name,new-subtable-name,      separation,      first-classes,      second-classes      [,onlyCloser,autokern,after])`

**or**

`(lookup-name,new-subtable-name,      separation,class-distance,      ,first-glyph-list,      second-glyph-list,      [,onlyCloser,autokern,after])`

**or**

`(lookup-name,new-subtable-name,      separation,class-distance,      [,onlyCloser,autokern,after])`

Creates a new subtable and a new kerning class in the named lookup. The
classes arguments are tuples of tuples of glyph names (each sub-tuble of
glyph names is a kerning class). The offsets argument is a tuple of
kerning offsets. There must be as many entries as
`len(first-class)*len(second-class)`. The optional after argument is
used to specify the order of the subtable within the lookup.

The second format will cause FontForge to auto kern the subtable. The
separation argument specifies the desired optical distance between any
two glyphs (if this is specified as 0 then the kerning class will be
designed so glyphs just touch each other). Again the user specifies two
sets of predefined classes. If the (optional) `onlyCloser` flag is set
true then only negative kerning values will be inserted into the table.

In the third format the user merely specifies two lists of glyphs to be
used, fontforge will look for similarities among among the glyphs and
guess at classes. The class-distance argument to determine how precise
the classes should match (1 is very tight matching, 20 is rather loose).

In the last format the font's selection will be used to specify the list
of glyphs to be examined (and the same list will be used for both the
left and right glyphs -- but fontforge will probably find different
classes).

`addLookup`

`(new-lookup-name,type,flags,      feature-script-lang-tuple      [,after-lookup-name)`

Creates a new lookup with the given name, type and flags. It will tag it
with any indicated features. The type of one of

-   gsub\_single
-   gsub\_multiple
-   gsub\_alternate
-   gsub\_ligature
-   gsub\_context
-   gsub\_contextchain
-   gsub\_revesechain
-   morx\_indic
-   morx\_context
-   morx\_insert
-   gpos\_single
-   gpos\_pair
-   gpos\_cursive
-   gpos\_mark2base
-   gpos\_mark2ligature
-   gpos\_mark2mark
-   gpos\_context
-   gpos\_contextchain
-   kern\_statemachine

The flags argument is a tuple of strings. At most one of these strings
may be the name of a mark class. The others are:

-   right\_to\_left
-   ignore\_bases
-   ignore\_ligatures
-   ignore\_marks

A feature-script-lang tuple is a tuple with one entry for each feature
(there may be no entries if there are no features). Each entry is itself
a two element tuple, the first entry is a string containing a 4 letter
feature tag, and the second entry is another tuple (potentially empty)
with an entry for each script for which the feature is active. Each
entry here is itself a two element tuple. The first element is a 4
letter script tag and the second is a tuple of languages. Each entry in
the language tuple is a four letter language. Example:
(("liga",(("latn",("dflt")),)),)
 The optional final argument allows you to specify the ordering of the
lookup. If not specified the lookup will be come the first lookup in its
table.

`addLookupSubtable`

`(lookup-name,      new-subtable-name      [,after-subtable-name])`

Creates a new subtable within the specified lookup. The lookup name
should be a string specifying an existing lookup. The subtable name
should also be a string and should not match any currently existing
subtable in the lookup. The optional final argument allows you to
specify the ordering within the lookup. If not specified this subtable
will be first in the lookup.

If you want to create a subtable in a contextual lookup, then use
[`addContextualSubtable`](#addContextualSubtable) below. If you want to
create a kerning class subtable, then use
[`addKerningClass`](#addKerningClass) above.

`addContextualSubtable`

`(lookup-name,      new-subtable-name      type      rule      [,afterSubtable=]      [,bclasses=]      [,mclasses=]      [,fclasses=]      [,bclassnames=]      [,mclassnames=]      [,fclassnames=] )`

Creates a new subtable within the specified contextual lookup
(contextual, contextual chaining, or reverse contextual chaining). The
lookup name should be a string specifying an existing lookup. The
subtable name should also be a string and should not match any currently
existing subtable in the lookup.

The `type` should be one of the strings "glyph", "class", "coverage" or
"reversecoverage". The `rule` should be a string specifying a string to
match and a set of lookups to apply once the match has been made. (See
below for more details).

The remaining arguments are optional, keyword arguments.

-   `afterSubtable=`, if present this should be followed by a string,
    the name of a subtable after which this one is to be placed in the
    lookup. If not specified this subtable will be first in the lookup.
-   `bclasses=, fclasses=, mclasses=` these three arguments specify sets
    of glyph classes for when `type="class"`. They should be a tuple of
    thingies where each thingy is either a string containing a list of
    space separated glyph names, or another tuple containing a set of
    strings, each a glyph name. Note that the first class is magic and
    should usually be left as a null string.
-   `bclassnames=, fclassnames=, mclassnames=` These provide names for
    the glyph classes described above. These names are optional, but can
    be convenient. These are tuples of strings. There should be the same
    number of entries in `bclassnames` as there are in `bclasses`.

When `type="glyph"`

The rule should look something like:
 `  glyph-name1 glyph-name2 | glyph-name3 @<lookup-name> | glyph-name4`
 The "|"s divide between backtrack, match and lookahead sections. So
this example would match it the current glyph were named `glyph-name3`
and it were preceded by `glyph-name2` and that by `glyph-name1` and
followed by `glyph-name4`. If the match were successful then the lookup
named `lookup-name` would be applied. The @\<\> are litteral characters
and should be present in the rule.

If the invoked lookup is a ligature lookup then it should be invoked
after the first glyph that forms the lookup (rather than the last) and
all glyphs that might make up the lookup should be in the match section.
So...
 `  e | f @ f l | o`
 would only apply the `ff-lig` lookup if the `ffl` were preceeded by `e`
and followed by `o`.

When `type="class"`

The rule should look something like:
 `  class-name1 class-name2 | class-name3 @<lookup-name> | class-name4`
 Very similar to the case of glyphs, except that instead of glyph names
we have class names here. It is possible to have different sets of class
names in the three different sections (backtrack, match and lookahead).
If you don't specify any class names then you must use numbers instead,
each number refering to the class at that position in the tuple (the
first class will be class 0, the second class 1, and so on).

When `type="coverage"`

The rule should look something like:
 `  [g1 g2] [g3 g4] | [g5 g6 g7] @<lookup-name> | [g8 g9]`
 Each entry within brackets, `[]`, represents a coverage table and
should be a list of glyph names. The brackets are specified literally.

When `type="reversecoverage"`

The rule should look something like:
 `  [g1 g2] [g3 g4] | [g5 g6 g7] => [rg1 rg2 rg3] | [g8 g9]`
 Very similar to normal coverage tables except that instead of
specifying a lookup there are replacement glyphs inline. There must be
the same number of replacement glyphs (`rg1, rg2, rg3`) as match glyphs
(`g5, g6, g7`) and there may be only one coverage table in the match
section.

**WARNING** This format has some limitations, if there are multiple
lookups they will be applied in textual order (First lookup in the
string is the first one applied). This limitation is also present in
Adobe's feature files so I hope it shan't be a severe limitation.

`addSmallCaps`

`(scheight=,      capheight=,      lcstem=,      ucstem=,      symbols=,      letter_extension=,      symbol_extension=,      stem_height_factor=)`

This function uses keyword parameters. None is required, if omitted a
default value will be used (generally found by analyzing the font).

For each selected letter, this function will create a corresponding
small caps glyph. If you set the `symbol` keyword to `true` it will also
create small caps variants of digits and symbols.

The outlines of the new glyph will be based on the outlines of the
upper-case variant of the letter. These will then ****be scaled so that
a glyph which was `capheight` high will now be `scheight` high, and so
that stems which were `ucstem` wide will be `lcstem` wide. Normally the
ratio of stem heights is the same as the ratio of stem widths, but you
may change that with `stem_height_factor`.

When it creates a new glyph it will name that glyph by appending ".sc"
to the original lower case letter name (so "a" would become "a.sc") you
may change the extension used with `letter_extension`. Similary symbols
and digits will use the extension "taboldstyle", but you may change that
with `symbol_extension`.

When it creates a glyph it also creates two lookups one bound to the
feature "c2sc" and the other to "smcp". A mapping from the lower case
letter to the small caps letter will be provided under "smcp", while a
mapping from the upper case to the small caps under "c2sc". Symbols will
have both lookup maps attached to the original glyph.

`alterKerningClass`

`(subtable-name,      first-classes,      second-classes,      offsets)`

Changes the kerning class in the named subtable. The classes arguments
are tuples of tuples of glyph names (each sub-tuble of glyph names is a
kerning class). The offsets argument is a tuple of kerning offsets.
There must be as many entries as `len(first-class)*len(second-class)`.
The optional after argument is used to specify the order of the subtable
within the lookup.

`autoKern`

`(subtable-name,      separation      [,minKern=,      onlyCloser=,      touch=])`

**or**

`(subtable-name,      separation,      glyph-list1,      glyph-list2      [,minKern=,      onlyCloser=,      touch=])`

The named subtable must be a kerning pair subtable that already exists.

This command will automatically generate kerning pairs for the named
subtable. If no glyph lists are specified it will look at all pairs of
the glyphs in the selection; if glyph lists are specified then it will
look at all pairs that can be made with one glyph from the first list
and the second from the second list.

It will attempt to guess a good kerning value between the two glyphs --
a value which will make the optical separation between the two appear to
be `separation` em-units. If `minkern` is specified then and the
(absolute value of the) kerning correction is less than this number then
no kerning pair will be generated. If `onlyCloser` is set true then only
negative kerning offsets will be generated (only thing which move two
glyphs closer together). If touch is set to 1 then the kerning offset
will not be based on optical distance but on the closest approach
between two the two glyphs.

`appendSFNTName`

`(language,strid,string)`

Adds a new (or replaces an old) string in the sfnt 'name' table.
Language may be either the english name of the language/locale as a
string, or the number representing that language in MicroSoft's
specification. Strid may be one of the (english) string names
(Copyright, Family, SubFamily, etc.) or the numeric value of that item.
The string itself is in UTF-8.

`buildOrReplaceAALTFeatures`

`()`

Removes any existing AALT features (and any lookups solely controled by
such features) and creates new ones containing all possible single and
alternate substutions available for each glyph.

`cidConvertByCMap`

`(cmap-filename)`

Converts a normal font into a CID-keyed font with one subfont using

the CMAP to determine the mapping.

`cidConvertTo`

`(registry,ordering,supplement)`

Converts a normal font into a CID-keyed font with one subfont.

`cidFlatten`

`()`

Converts a CID font into a normal font (glyphs will be in CID order).

`cidFlattenByCMap`

`(cmap-filename)`

Converts a CID font into a normal font using the encoding specified in
the CMAP file.

`cidInsertBlankSubFont`

`()`

Adds a new (blank) sub-font into a cid-keyed font and changes the
current sub-font to be it.

`cidRemoveSubFont`

`()`

Removes the current subfont from a cid-keyed font.

`close`

`()`

Frees memory for the current font.

**Warning:** Any python pointers to it will become invalid.

`compareFonts`

`(other-font,filename,      flags-tuple)`

This will compare the current font with the font in `other-font` (which
must already have been opened). It will write the results to the
`filename`, you may use "-" to send the output to stdout. The `flags`
argument is a tuple of strings and controls what will be compared.

  ------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------
  outlines                 compare outlines
  outlines-exactly         compare outlines exactly (otherwise allow slight errors and the unlinking of references)
  warn-outlines-mismatch   warn if the outlines don't exactly match (but are pretty close)
  hints                    compare hints
  warn-refs-unlink         warn if references need to be unlinked before a match is found
  strikes                  compare bitmap strikes
  fontnames                compare font names
  gpos                     compare glyph positioning
  gsub                     compare glyph substitutions
  add-outlines             for any glyphs whose outlines differ, add the outlines of the glyph in the second font to the background of the glyph in the first
  create-glyphs            if a glyph exists in the second font but not the first, create that glyph in the first and add the outlines from the second into the backgroun layer
  ------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------

  :  flags

`createChar`

`(uni[,name])`

Create (and return) a character at the specified unicode codepoint in
this font and optionally name it. If you wish to create an glyph with no
unicode codepoint set the first argument to -1 and specify a name. If
there is already a character there, return it (it will not be renamed).

`createInterpolatedGlyph`

`(glyph1,glyph2,amount)`

Create (and return) a glyph with the same unicode code point as glyph1.
The glyph may not already exist. The contents of the glyph will be
formed by interpolating between glyph1 and glyph2. If amount==0 the
result will look like glyph1, or 1 then like glyph2.

`createMappedChar`

`(enc)     (name)`

Create (and return) a character at the specified encoding in this font.
If there is already a character there, return it

`find`

`(contour[,error-bound,search_flags])`

Searches the font for all glyphs containing the contour (or layer) and
returns an iterator which returns those glyphs.

error-bound: defaults to 0.01.
 search\_flags: tuple of the strings: reverse, flips, rotate, scale.

When found, the glyph.temporary is set to a dict of:

          {
           "findMatchedRefs": matched_refs_bit_map,
           "findMatchedContours": matched_contours_bit_map,
           "findMatchedContoursStart": matched_contours_start_bit_map,
          }

`findEncodingSlot`

`(uni)     (name)`

Tests whether a glyph with this codepoint or name is in the font's
encoding and returns the encoding slot. If the glyph is not present it
returns -1.

(If a glyph with that name/unicode is in the font, but is not in the
encoding, then an value beyond the end of the encoding will be
returned).

`glyphs`

`([type])`

Returns an iterator which will return the glyphs in the font. By default
they will be returned in "GID" order, but if type is specified as
"encoding" they will be returned in encoding order. If returned in
encoding order it is possible that a glyph will be returned more than
once if there are multiple encoding slots which reference it.

`generate`

`(filename      [,bitmap_type=,      flags=,      bitmap_resolution=,      subfont_directory=,      namelist=,      layer=])`

Generates a font. The type is determined by the font's extension. The
bitmap type (if specified) is also an extension. If layer is specified,
then the splines and references in that layer will be used instead of
the foreground layer.

Flags is a tuple containing some of

afm

output an afm file

pfm

output a pfm file

tfm

output a tfm file

ofm

output a ofm file

composites-in-afm

Store composite info in the afm file

glyph-map-file

Output a glyph map file giving the mapping between output gid and
glyphnames

short-post

Do not include glyphnames in a ttf/otf file

apple

output apple advanced typography tables

opentype

output opentype tables

old-kern

output an old style 'kern' with opentype tables

dummy-dsig

output an empty DSIG table so MS will mark a font with .ttf extension as
an OpenType font.

TeX-table

Include a 'TeX ' table in an ttf/otf file

round

Round PS coordinates to integers

no-hints

Do not include PS hints

no-flex

Do not include PS flex hints

omit-instructions

Do not include TrueType instructions

PfEd-comments

Include font and glyph comments in the 'PfEd' table

PfEd-colors

Include glyph colors in the 'PfEd' table

PfEd-lookups

Include lookup names in the 'PfEd' table

PfEd-guidelines

Include guideline locations in the 'PfEd' table

PfEd-background

Include background (and spiro) layers in the 'PfEd' table

symbol

Generate an sfnt with a Symbol cmap entry rather than a Unicode entry.

See also [save()](#font-save).

`generateTtc`

`(filename,others,      [flags=,      ttcflags=,  namelist=,      layer=])`

Generates a truetype collection file containing the current font and all
others listed -- the `others` argument may be `None`, a font, or a tuple
(or list) of fonts.

Flags are as above,

Ttcflags is a tuple consisting of the following

merge

Try and share tables and glyphs among the various fonts.

cff

Use the CFF glyph format rather than the TrueType format (the OpenType
documentation says that this does not work, but both the Mac and
unix/linux accept it).

`generateFeatureFile`

`(filename[,lookup-name])`

Generates an adobe feature file for the current font. If a lookup-name
is specified then only data for that lookup will be generated.

`genericGlyphChange`

`(stemType=<str>,      thickThreshold=<double>,      stemScale=<double>,      stemAdd=<double>,      stemHeightScale=<double>,      stemHeightAdd=<double>,      stemWidthScale=<double>,      stemWidthAdd=<double>,      thinStemScale=<double>,      thinStemAdd=<double>,      thickStemScale=<double>,      thickStemAdd=<double>,      processDiagonalStems=<boolean>,            hCounterType=<str>,      hCounterScale=<double>,      hCounterAdd=<double>,      lsbScale=<double>,      lsbAdd=<double>,      rsbScale=<double>,      rsbAdd=<double>,            vCounterType=<str>,      vCounterScale=<double>,      vCounterAdd=<double>,      vScale=<double>,      vMap=<tuple of tuples>)`

This function uses keyword parameters. Which ones are required depends
on the three type arguments
(`stemType, hCounterType,     vCounterType`).

If `stemType` is omitted, or is the string "uniform", then the
`stemScale` parameter must be specified (and `stemAdd` may be).
`stemScale` specifies a scaling factor by which all stems (horizontal
and vertical, thick and thin) will be scaled. A value of 1.0 means no
change. While `stemAdd` specifies the number of em-units to add to the
width of each stem.

If `stemType` is the string "horizontalVertical", then values must be
specified for `stemHeightScale` and `stemWidthScale` (and may be for
`stemHeightAdd,     stemWidthAdd`). The first of these specifies scaling
for the height of horizontal stems, and the second scaling for the width
of vertical stems.

If `stemType` is the string "thickThin", then values must be specified
for `thinStemScale`, `thickStemScale` and `thickThreshold` (and may be
for `thinStemAdd, thickStemAdd`). The first of these specifies scaling
for the width/height of thin stems, and the second scaling for the
width/height of thick stems. While the `thickThreshold` argument
specifies the size (in em-units) at which a stem is classified as
"thick".

If `hCounterType` is omitted, or is the string "uniform", then
horizontal counters, and the left and right side bearings will all be
scaled using the same rules, and `hCounterScale` must be specified to
provide the scaling factor (while `hCounterAdd` may be specified).

If `hCounterType` is the string "nonUniform", then horizontal counters,
and the left and right side bearings may all be scaled using different
rules, and `hCounterScale,     lsbScale` and `rsbScale` must be
specified to provide the scaling factors (while `hCounterAdd, lsbAdd,`
and `rsbAdd` may be specified).

If `hCounterType` is the string "center", then the left and right
side-bearings will be set so the new glyph is centered within the
original glyph's width. (Probably more useful for CJK fonts than LGC
fonts).

If `hCounterType` is the string "retainScale", then the left and right
side-bearings will be set so the new glyph is within within the original
glyph's width, and the side-bearings remain in the same proportion to
each other as before.

If `vCounterType` is omitted, or is the string "mapped", then certain
zones on the glyph may be placed at new (or the same) locations --
similar to BlueValues. So you can specify a zone for the baseline, one
for the x-height and another for the top of capitals and ascenders (and
perhaps a fourth for descenders). Each such zone is specified by the
`vMap` argument which is a tuple of 3-tuples, each 3-tuple specifying a
zone with: Original location, original width, and final location. **No
default value is provided for this argument you must figure out all the
values yourself**.

If `vCounterType` is the string "scaled", then vertical counters, and
the top and bottom side bearings will all be scaled using the same
rules, and `vCounterScale` must be specified to provide the scaling
factor (while `vCounterAdd` may be specified). This is probably most
useful for CJK fonts.

`getKerningClass`

`(subtable-name)`

Returns a tuple whose entries are: (first-classes, second-classes,
offsets). The classes are themselves tuples of tuples of glyph names.
The offsets will be a tuple of numeric kerning offsets.

`getLookupInfo`

`(lookup-name)`

Returns a tuple whose entries are: (lookup-type, lookup-flags,
feature-script-lang-tuple) The lookup type is a string as described in
[addLookup](#font-addLookup), and the feature-script-lang tuple is also
described [there](#font-addLookup).

`getLookupSubtables`

`(lookup-name)`

Returns a tuple of all subtable names in that lookup.

`getLookupSubtableAnchorClasses`

`(subtable-name)`

Returns a tuple of all anchor class names in that subtable.

`getLookupOfSubtable`

`(subtable-name)`

Returns the name of the lookup containing this subtable.

`getSubtableOfAnchor`

`(anchor-class-name)`

Returns the name of the subtable containing this anchor class.

`importBitmaps`

`(bitmap-font-file     [,to-background])`

Load any bitmap strikes out of the bitmap-font-file into the current
font

`importLookups`

`(another-font,lookup-names     [,before-name])`

The first argument must be a FontForge Font object, the second a string
or a tuple of strings, and the third, another string. It will search the
other font for the named lookup(s) and import it into the current font.
(Contextual lookups which invoke other lookups will have any nested
lookups imported as well). Lookups will be imported in the order listed.
If a before-name is specified, then it is looked up in the current font
and all lookups will be added before it, if not specified lookups will
appear at the end of the list.

`interpolateFonts`

`(fraction,filename)`

Interpolates a font between the current font and the font contained in
filename.

`isKerningClass`

`(subtable-name)`

Returns whether the named subtable contains a kerning class.

`isVerticalKerning`

`(subtable-name)`

Returns whether the named subtable contains a vertical kerning data

`italicize`

`(italic_angle=, ia=      lc_condense=, lc=      uc_condense=, uc=      symbol_condense=, symbol=      deserif_flat=,      deserif_slant=,      deserif_pen=,      baseline_serifs=,      xheight_serifs=,      ascent_serifs=,      descent_serifs=,      diagonal_serifs=,      a=,      f=,      u0438=,      u043f=,      u0442=,      u0444=,      u0448=,      u0452=,      u045f=)`

This function uses keyword parameters. None is required, if omitted a
default value will be used. Some keywords have abbreviations ("ia" for
"italic\_angle") you may use either.

This function will attempt to italicize each selected glyph. For a
detailed explanation of what this entails please see the information on
the [Italic dialog](../../interface/Styles/#Italic).

The `*_condense` keywords should be 4 element tuples of floating point
numbers; these numbers correspond to: Left side bearing condensation,
stem condensation, counter condensation and right side bearing
condensation. These numbers should be small numbers around 1 (scale
factors, not percentages).

Set at most one of the `deserif_*` keywords.

Setting `a` to `true` will turn on the transformation that applies to
the "a" glyph. Setting `u0438` will control the transformation that
applies to the glyph at unicode codepoint U+0438.

The `f` keyword is slightly more complex. Setting it to 0 turns off all
transformations of glyphs like "f", setting it to 1 will give "f" a tail
which looks like a rotated version of its head, and setting it to 2 will
simply extend the main stem of "f" below the baseline.

`lookupSetFeatureList`

`(lookup-name,     feature-script-lang-tuple)`

Sets the feature list of indicated lookup. The feature-script-lang tuple
is described at [addLookup](#font-addLookup).

`lookupSetFlags`

`(lookup-name,flags)`

Sets the lookup flags for the named lookup.

`lookupSetStoreLigatureInAfm`

`(lookup-name,boolean)`

Sets whether this ligature lookup contains data to store in the afm.

`mergeFonts`

`(filename[,     preserveCrossFontKerning])`

Merges the font in the file into the current font.

`mergeFeature`

`(filename)`

Merge feature and lookup information from an adobe feature file, or
metrics information from the (afm,tfm,etc) file into the current font.

`mergeKern`

`(filename)`

Deprecated name for mergeFeature above

`mergeLookups`

`(lookup-name1,lookup-name2)`

The lookups must be of the same type. All subtables from lookup-name2
will be moved to lookup-name1, the features list of lookup-name2 will be
merged with that of lookup-name1, and lookup-name2 will be removed.

`mergeLookupSubtables`

`(subtable-name1,     subtable-name2)`

The subtables must be in the same lookup. Not all lookup types allow
their subtables to be merged (contextual subtables may not be merged,
kerning classes may not be (kerning pairs may be)). Any information
bound to subtable2 will be bound to subtable1 and subtable2 will be
removed.

`printSample`

`(type,pointsize,      sample,output-file)`

Type is a string which must be one of

fontdisplay

Display all glyphs in the font in encoding order

chars

Display the selected glyphs scaled to fill a page
 Ignores the pointsize argument.

waterfall

Displays the selected glyphs at many pointsizes.
 The pointsize argument should be a tuple of pointsizes here.

fontsample

The third argument should contain a string which will be layed out and
displayed as well as FontForge can.

fontsampleinfile

The third argument should contain the name of a file which contains text
to be layed out and displayed.

If output is to a file (see [printSetup](#printSetup)) then the last
argument specifies a file name in which to store output.

`randomText`

`(script[,lang])`

Returns a random text sample using the letter frequencies of the
specified script (and optionally language). Both script and language
should be expressed as strings containing OpenType Script and Language
tags. "dflt" is a reasonable language tag. If the language is not
specified, one will be chosen at random. If ff has no frequency
information for the script/language specified it will use the letters in
the script with equal frequencies.

`regenBitmaps`

`(tuple-of-sizes)`

A tuple with an entry for each bitmap strike to be regenerated
(rerasterized). Each strike is identified by pixelsize (if the strike is
a grey scale font it will be indicated by
`(bitmap-depth<<16)|pixelsize`.

`removeAnchorClass`

`(anchor-class-name)`

Removes the named AnchorClass (and all associated points) from the font.

`removeLookup`

`(lookup-name)`

Remove the lookup (and any subtables within it).

`removeLookupSubtable`

`(subtable-name)`

Remove the subtable (and all data associated with it).

`removeGlyph`

`(uni[,name])     (name)     (glyph)`

You may either pass in a FontForge glyph object (from this font) or
identify a glyph in the font by unicode code point or name. In any case
the glyph will be removed from the font.

If you use (uni,name) to specify a name, set uni to -1.

**WARNING:** This frees fontforge's storage to this glyph. If you have
any python pointers to that storage they will be looking at garbage.
This does not go through the usual python reference mechanism.

`replaceAll`

`(srch,rpl[,error-bound])`

Searches the font for all occurences of the srch contour (or layer) and
replaces them with the replace contour (or layer).

`revert`

`()`

Reloads the font from the disk.

**Caveat:** if you have any pointers to glyphs which live in the font
those pointers will no longer be valid, and using them will cause
crashes. This is very un-python-like.

`revertFromBackup`

`()`

Reloads the font from the backup file on the disk.

**Caveat:** if you have any pointers to glyphs which live in the font
those pointers will no longer be valid, and using them will cause
crashes. This is very un-python-like.

`save`

`([filename])`

Saves the font to an sfd file. See also [generate()](#f-generate)

`saveNamelist`

`(filename)`

Saves the font's namelist to a file.

`getTableData`

`(table-name)`

Gets binary data from any saved table. FF will save 'fpgm', 'prep', 'cvt
' and 'maxp'. FF may also save tables which you explicitly request. Do
not expect to get binary data for tables like 'GPOS' or 'glyf' which FF
will generate when it creates a font... that information is not
currently available.

Returns a binary string.

`setTableData`

`(table-name,sequence)`

Sets binary data of any saved table. FF will save 'fpgm', 'prep', 'cvt '
and 'maxp'. FF may also save tables which you explicitly request. Do not
expect to set binary data for tables like 'GPOS' or 'glyf' which FF will
generate when it creates a font... that information is not currently
available.

If sequence is None, then the named table will be removed from the font.

`validate`

`([force])`

Validates the font and returns a bit mask of all errors from all glyphs
(as defined in the `validation_state` of a glyph -- except bit 0x1 is
clear). If the font passed the validation then the return value will be
0 (not 0x1). Otherwise the return value will be the set of errors found.

Note: The set of errors is slightly different for TrueType and
PostScript output. The returned mask contains the list of potential
errors. You must figure out which apply to you.

Normally each glyph will cache its validation\_state and it will not be
recalculated. If you pass a non-zero argument to the routine then it
will force recalculation of each glyph -- this can be slow.s

Selection based interface
 See the [selection type](#selection) for how to alter the selection

`addExtrema`

`()`

Extrema should be marked by on-curve points. If a curve in any selected
glyph lacks a point at a significant extremum this command will add one.

`addSmallCaps`

`()`

For all selected upper or lower case letters in the latin, greek and
cyrillic scripts this will try to create a small caps version of that
glyph in a new glyph slot. So if you select "A" (or "a") then a glyph
"a.sc" will be created (if "a.sc" already exists, it will be reused, and
its current contents cleared). The contents of "a.sc" will be based on
the upper case variant of this glyph (and that variant must be present
for the command to work). FontForge will also create two lookups (unless
appropriate ones already exist) one, bound to the feature 'c2sc' will
map upper case letters to small caps, the other, bound to feature 'smcp'
will map lower case letters to small caps.

`autoHint`

`()`

Generates PostScript hints for all selected glyphs.

`autoInstr`

`()`

Generates TrueType instructions for all selected glyphs.

`autoWidth`

`(separation [,minBearing=,maxBearing=])`

Guesses at reasonable horizontal advance widths for the selected glyphs

`autoTrace`

`()`

Auto traces any background images in all selected glyphs

`build`

`()`

If any of the selected characters is a composite character, then this
command will clear it and insert references to its components (this
command can create new glyphs).

`canonicalContours`

`()`

Orders the contours in the selected glyphs by the x coordinate of their
leftmost point. (This can reduce the size of the charstring needed to
describe the glyph(s).

`canonicalStart`

`()`

Sets the start point of all the contours of the selected glyphs to be
the leftmost point on the contour. (If there are several points with
that value then use the one which is closest to the baseline). This can
reduce the size of the charstring needed to describe the glyph(s). By
regularizing things it can also make more things available to be put in
subroutines.

`changeWeight`

`(stroke_width[,type,     serif_height,serif_fuzz,     counter_type,custom_zones])`

See the [Element-\>Style-\>Change Width](../../interface/Styles/#Embolden) command
for a more complete description of these arguments.

Stroke\_width is the amount by which all stems are expanded.

Type is one of "LCG", "CJK", "auto", "custom".

Serif\_height tells ff not to expand serifs which are that much off the
baseline, while serif\_fuzz specifies the amount of fuzziness allowed in
the match. If you don't want special serif behavior set this to 0.

Counter\_type is one of "squish", "retain", "auto".

Custom\_zones is only meaningful if the type argument were "custom". It
may be either a number, which specifies the "top hint" value (bottom
hint is assumed to be 0, others are between), or a tuple of 4 numbers
(top hint, top zone, bottom zone, bottom hint).

`condenseExtend`

`(c_factor,c_add     [,sb_factor,sb_add,     correct])`

Condenses or extends the size of the counters and side-bearings of the
selected glyphs. The first two arguments provide information on
shrinking/growing the counters, the second two the sidebearings. If the
last two are omitted they default to the same values as the first two.

A counter's width will become:
 `   new_width = c_factor * old_width + c_add`

If present the `correct` argument allows you to specify whether you want
to correct for the italic angle before condensing the glyph. (it
defaults to True)

`clear`

`()`

Clears the contents of all selected glyphs

`cluster`

`([within,max])`

Moves clustered coordinates to a standard central value in all selected
glyphs. See also [round](#f-round).

`copy`

`()`

Copies all selected glyphs into (fontforge's internal) clipboard.

`copyReference`

`()`

Copies all selected glyphs (as references) into (fontforge's internal)
clipboard.

`correctDirection`

`()`

Orients all contours so that external ones are clockwise and internal
counter-clockwise in all selected glyphs.

`correctReferences`

`()`

Checks a font for glyphs with mixed contours and references (or
references with transformation matrices which cannot be represented
truetype (ie. scaling by 2 or more)). If a mixed case is discovered
fontforge will take the contours out of the glyph, put them in a new
glyph, and make a reference to the new glyph.

`cut`

`()`

Copies all selected glyphs into (fontforge's internal) clipboard. And
then clears them.

`paste`

`()`

Pastes the contents of (fontforge's internal) clipboard into the
selected glyphs -- and removes what was there before.

`intersect`

`()`

Leaves only areas in the intersection of contours in all selected
glyphs. See also [removeOverlap](#f-removeOverlap).

`pasteInto`

`()`

Pastes the contents of (fontforge's internal) clipboard into the
selected glyphs -- and retains what was there before.

`removeOverlap`

`()`

Removes overlapping areas in all selected glyphs. See also
[intersect](#f-intersect).

`replaceWithReference`

`([fudge])`

Finds any glyph which contains an inline copy of one of the selected
glyphs, and converts that copy into a reference to the appropriate
glyph. Selection is changed to the set of glyphs which the command
alters.

If specified the fudge argument specifies the error allowed for
coordinate differences.

`round`

`([factor])`

Rounds the x and y coordinates of each point in all selected glyphs. If
factor is specified then new-coord = round(factor\*old-coord)/factor.
See also [cluster](#f-cluster).

`simplify`

`([error-bound,flags,tan_bounds,     linefixup,linelenmax])`

Tries to remove excess points in all selected glyphs if doing so will
not perturb the curve by more than `error-bound`. Flags is a tuple of
the following strings

ignoreslopes

Allow slopes to change

ignoreextrema

Allow removal of extrema

smoothcurves

Allow curve smoothing

choosehv

Snap to horizontal or vertical

forcelines

flatten bumps on lines

nearlyhvlines

Make nearly horizontal/vertical lines be so

mergelines

Merge adjacent lines into one

setstarttoextremum

Rotate the point list so that the start point is on an extremum

removesingletonpoints

If the contour contains just one point then remove it

`stroke`

`("circular",width[,      linecap,linejoin,flags])     ("eliptical",width,      minor-width,angle      [,linecap,linejoin,flags])     ("caligraphic",width,      height,angle[,flags])     ("polygonal",contour[,flags])`

Strokes the contours of all selected glyphs using one of the indicated
pens. Line cap may be one of

-   butt
-   round
-   square

line join may be

-   miter
-   round
-   bevel

flags is a tuple containing some of the following strings

-   removeinternal
-   removeexternal
-   cleanup

If a polygonal pen is specified the contour must be a closed convex
polygon (no curved edges) with fewer than 100 vertices.

`transform`

`(matrix)`

Transforms all selected glyphs by the matrix.

`nltransform`

`(xexpr,yexpr)`

xexpr and yexpr are strings specifying non-linear transformations that
will be applied to all points in the selected glyphs of the font (with
xexpr being applied to x values, and yexpr to y values, of course). The
syntax for the expressions is explained in the [non-linear transform
dialog](../../interface/transform/#Non-Linear).

`unlinkReferences`

`()`

Unlinks all references in all selected glyphs and replaces them with
splines.

### Stupid example

    import fontforge                                 #Load the module
    amb=fontforge.open("Ambrosia.sfd")               #Open a font
    amb.selection.select(("ranges",None),"A","Z")    #select A-Z
    amb.copy()                                       #Copy those glyphs into the clipboard

    n=fontforge.font()                               #Create a new font
    n.selection.select(("ranges",None),"A","Z")      #select A-Z of it
    n.paste()                                        #paste the glyphs above in
    print n["A"].foreground                          #test to see that something
                                                     #  actually got pasted
    n.fontname="NewFont"                             #Give the new font a name
    n.save("NewFont.sfd")                            #and save it.

FontForge as a python extension
-------------------------------

If you have configured fontforge with the `--enable-pyextension`
argument, then when fontforge installs itself it will also set itself up
as something that can be used inside of python (up until now we have
been talking about using python inside of fontforge).

>     $ ./configure --enable-pyextension
>     $ make
>     $ sudo make install

once you do that you can invoke all of the above fontforge commands from
inside of python by saying:

>     >>> import fontforge
