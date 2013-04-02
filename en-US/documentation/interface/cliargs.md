---
published: true
layout: default
title: Command Line Arguments
---

>     $ fontforge [-options] [filenames]
>     $ fontforge [-script] scriptfile [arguments]
>     $ fontforge -c script-string [arguments]

The filenames may specify any number of files in one of the font formats
that FontForge recognizes (various postscript formats, truetype,
opentype, mac resource, bitmap, svg, etc.).

Some files (.ttc or mac resource) may contain more than one outline
font. You may pick which font you want by following the filename with
the fontname in parentheses, thus:

>     $ fontforge "gulim.ttc(GulimChe)"

will select the font GulimChe out of the font file gulim.ttc.

FontForge recognizes the following options:

-allglyphs

Load all glyphs from the 'glyf' table of a ttc file, rather than the
subset used in the selected font. (Note that if a ttc file contains
multiple 'glyf' tables, only one will be loaded, but that one will be
completely loaded).

-c script-string

If FontForge's first (or second, if the first is -lang) argument is "-c"
then the argument that follows will be treated as a string containing
scripting commands, and those commands will be executed. All remaining
arguments will be passed to the script.

>     $ fontforge -c 'Open($1); Generate($2)' foo.sfd foo.ttf

Will read a font from "foo.sfd" and then generate a truetype font from
it called "foo.ttf"

-cmap type

Where type may be
     Current | Copy | Private
 Gives the user some control over [colormap
handling](../xres/#Colormap)on 8bit screens.

-depth val

Specifies that FontForge should search for a visual with the given depth

-display name

Specifies the name of the display on which FontForge will open its
windows

-dontopenxdevices

Various people have complained that when FontForge attempts to open the
devices of the wacom graphics tablet, the X server gives a BadDevice
error. I can't duplicate this, the open works fine on my system, but
this argument allows them to tell fontforge not to try to use the
tablet.

-help

Bring up a [browser](../helpmenu/) looking at this documentation.

-lang={py|ff}
 -lang {py|ff}

Specifies whether the script should be interpretted as a python script
or a fontforge script.

-version

Prints out the source version and exits.

-keyboard type

Where type may be
     ibm | mac | sun | ppc | 0 | 1 | 2 | 3
 Allows you to specify the type of keyboard. Currently this is only
relevent when generating menus. The modifier keys are in different
locations on different keyboards (under different operating systems) and
if FontForge knows what keyboard you are using it can make the hot-keys
have better labels.

-   ibm | 0
     Uses the Control and Alt keys
-   mac | 1
     Uses the Control and Option keys (Mac OS/X, Mac keyboard)
-   ppc | 3
     Uses the Control and Command keys (Suse ppc linux, Mac keyboard)
-   sun | 2
     Uses the Control and Meta keys

-last

Opens the last sfd file closed. If used more than once will open the
last several sfd files.

-library-status

Writes info about the status of optional libraries to stderr. Including:
Whether the library exists on this system, whether ff can use it, and an
URL from which the library can be found.

-new

Creates a new font.

-nosplash

FontForge will not display its splash screen on startup (for slow
connections)

-open

Bring up an open font dialog

-quit

Exit fontforge (only useful if -unique is passed as well, in which case
the master fontforge will be asked to exit)

-recover type

Where type may be:

none

Do not attempt any automatic file recovery

clean

Clean out the directory containing files to be recovered

auto

recover any files which have been changed but which fontforge crashed on
before saving.

-script script-file

If FontForge's first argument is "-script" then the argument that
follows will be treated as a [script file](../../scripting/native/scripting/) and all the
remaining arguments will be passed as arguments to that file. (The
"-script" argument may be omitted, and if the first argument is an
executable file which whose first line starts with "\#!" and contains
"fontforge". This means that fontforge may be used as an interpreter.
Ie. you can create a fontforge script file and type its name to your
shell and fontforge will be invoked to process that file as a script
file (passing any arguments to it)).

-sync

Do synchronous screen drawing. Slows things down, makes some things
easier to debug.

-unique

If there is already a fontforge running on this screen, then the current
version will pass its arguments to the already existing one for it to
open, and then the current version will exit. So it looks more like a
Mac/Windows app.

-usage

Display a brief description of the options

-vc type

Where type may be:
 StaticGray GrayScale StaticColor PsuedoColor TrueColor DirectColor
 (See the X manuals for a description of what these mean). FontForge
will search through the visuals in an attempt to find one with the
desired VisualClass (given here) and depth (given with the -depth
option).

Environment Variables
---------------------

FontForge examines the following environment variables:

`BROWSER`

Specifies the name of a browser program for examining documentation
(must be able to read a local or remote html file and display it
reasonably). On CygWin systems browsers that work in the windows world
(as opposed to the cygwin sub-system) must be specified by a full path
spec.

`AUTOTRACE`

Specifies the name and location of the autotrace program. (if not
specified FontForge will try to find it in the user's path)

`POTRACE`

Specifies the name and location of the potrace program.

`MF`

Specifies the name and location of the metafont program. (if not
specified FontForge will try to find it in the user's path)

`FONTFORGE_VERBOSE`

Turns on verbose mode in script execution (the script will be printed to
stdout as it is executed).

`FONTFORGE_LOADPREFS`

Controls loading of preference items. If set to "Always" then
preferences will be loaded even for scripts. If set to "Never" then
preferences will not be loaded unless explicitly requested. If unset (or
if set to any other value) then preferences will be loaded when ff
starts up with a user interface, and will not be loaded if ff starts up
executing a script.

`FONTFORGE_LANGUAGE`

Provides a default interpreter to use when executing a script. Must be
either "py" or "ff"/"pe".

* * * * *

`LANG, LC_ALL, `etc.

To determine the current locale, etc.

`PATH`

Used when looking for Autotrace or mf programs

`TMPDIR`

Temporary directory. Used for temporary files for which I need a
filename (ie. to pass to autotrace, etc.)

`HOME`

Used to figure out where to put the .FontForge directory which includes
user preferences and the recovery files.

`USER`

Used to create comments in new fonts about who created the font, or who
saved it.

-- [Prev](../xres/) -- [TOC](overview.html) -- [Next](../files/) --
