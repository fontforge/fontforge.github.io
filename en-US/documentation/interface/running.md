---
published: true
layout: default
title: Starting fontforge
---

-   [Installing from a pre-built unix
    package](nix-install.html#Installing)
-   [Installing on a Mac](mac-install.html#Installing)
-   [Installing on MS/Windows](ms-install.html#Installing)
-   [Before you build (on a mac)](source-build.html#mac)
-   [Before you build (on MS/Windows)](source-build.html#MS)
-   [Building and installing from source](source-build.html#source)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Starting FontForge](#FontForge)
    -   [Before starting fontforge on cygwin](#cygwin)
    -   [Notes on the PATH variable](#PATH)
    -   [Starting fontforge from the command
        line](#Starting)
    -   [On the mac](#mac)

Starting FontForge
------------------

<div class="helper closed">
<h3 class="header">Before starting fontforge on cygwin</h3>
<div class="content">

Before you can start fontforge on cygwin you must start the X11 server.

On recent versions of cygwin this may be done by invoking

     C:\\cygwin\\usr\\X11R6\\bin\\startxwin.bat

#### For older systems

Open a cygwin window and type

     $ xinit

This should create a task window that covers your entire screen,
inside of which there should be an xterm (sort of like the cygwin
window earlier). Be prepared to type commands in this window.

You should then type

     $ twm &
</div>
</div>

### Starting fontforge from the command line

     $ fontforge

Will open up FontForge with a file picker where you can browse and open a font
or create a new one.

<div class="helper closed">
<h3 class="header">If you get a message from your computer saying: "fontforge: Command not found"</h3>
<div class="content">

On most systems fontforge will install itself into /usr/local/bin
(that's the standard place for optional software), and this is not
always in the default search path for commands (grrrr). Which means you
might have everything properly installed, but nothing actually works. If
you see messages like "fontforge: command not found." this has
(probably) happened to you.

So what do you do?

You need to set the PATH environment variable so that it includes
/usr/local/bin. The value of the PATH variable is a set of directories
separated by colons.

     $ echo $PATH
     /home/gww/bin:/usr/bin:/bin:/usr/X11R6/bin:/sbin

Unfortunately there are four ways of doing this because there are two
different conventions used by unix shells and then the mac doesn't
behave normally requiring another two conventions. Type:

     $ echo $SHELL
     /bin/bash

If the name of your shell is bash (as above), ksh or sh then you want to
type

     $ PATH=/usr/local/bin:$PATH ; export PATH

If the name of your shell is tcsh or csh then you say

     $ setenv PATH /usr/local/bin:$PATH

But you'd have to do that every time you logged in. Instead you want
this included in the shell's initialization. Again there are two cases,
for the bash family of shells you want to edit the file \~/.bashrc (or
\~/.profile) while for the csh family you want to edit the file
\~/.cshrc (or \~/.login). On a bash system the following command is
generally sufficient:

     $ cat >>~/.bashrc
     PATH=/usr/local/bin:$PATH ; export PATH
     ^D

(where \^D represents control-D, obtained by holding down the control
key while depressing d. 
 And for the csh family you would type:

     $ cat >>~/.cshrc
     setenv PATH /usr/local/bin:$PATH
     ^D

On non-mac systems it is better to use `~/.profile` and `~/.login`
rather than the files given above.

</div>
</div>

### More commandline options

     $ fontforge font.pfa font2.sfd font3.ttf font4.otf 

will start fontforge looking at the fonts you specify on the command
line. It can read either pfb or pfa fonts, and some ps fonts (type 0
fonts based on a type 1 dictionary) as well as truetype fonts, open type
fonts and many other formats.



     $ fontforge -new

will cause fontforge to create a new font (in iso-8859-1 encoding)


     $ fontforge -script script.pe fonts...

This will invoke fontforge in a non-interactive mode, and have it run
the named script. Any further arguments on the command line will be
passed as arguments to the script and processed (or not) by it.

For a complete description of possible arguments see [the section on the
command line](../cliargs/).

### Troubleshooting on cygwin

One very common problem on cygwin is that you will type in the command
line to start fontforge -- and absolutely nothing will happen. The
cygwin shell simply prints another prompt. There is no error message. No
window appears. Nothing.

This generally means that you are missing a required library. Make sure
that the following are installed

-   libiconv
-   libintl
-   libjpeg
-   libpng
-   libxml2
-   libz

(I have no idea why you don't get an error message. That's a bug in
cygwin or windows or something. FontForge never gets control and has no
chance to generate a message itself).

### On the mac

FontForge now installs itself as a mac application in the Applications
folder. You can start FontForge the way you start any other application,
double clicking on it, dragging files to it, etc.

**Caveat:**`FontForge` and `Font Book` may fight over which will open
standard fonts if you double click on the font file. Both claim they can
open these files, neither claims to be the prefered application for
them. If an .otf file shows a fontforge icon (![](/assets/img/old/FFmacotfIcon.png)) it
will be opened by fontforge, if a font book icon it will be opened by
font book. Dragging a font file to the desired application will always
work. Or you can select the font, and invoke `File->Get Info` (in the
Finder's menu) and use the "Open with" control to select an application.

On the mac the Option key is used to invoke the functionality that
fontforge's docs call "Alt" or "Meta". (See the section on [X11
configuration](mac-install.html#Configuring-X11) for notes on three
button mice and the command key).

* * * * *

You can also start fontforge using traditional unix methods

Before you start fontforge on the mac you must start the X11 server. You
can do this by opening the Applications folder, and then opening the
Utilities folder, and then double-clicking on "X11". (If you don't have
X11 there then refer back to the [instructions for installing
it](mac-install.html#Before))

Having done that there should be a menubar with a menu labeled
"Applications". Click on this. There should be a "FontForge" entry in
it. Selecting FontForge will start fontforge and bring up a dialog
allowing you to open a font or create a new one.

**Caveat:**FontForge does not normally show mac resource fonts in this
dialog -- however it can still open one even it it isn't displayed.
Simply type in the name of the file containing it. (or change the Filter
field to "All Files").

If the Applications menu does not contain a "FontForge" entry, you can
add one yourself:

-   Select Applications-\>Customize Menu
-   Then press the (Add) button in the dialog that appears
-   Double click in the left-most section of the blank line which just
    appeared and then type "FontForge"
-   Press the [Tab] key and type "/usr/local/bin/fontforge"
-   Press the [Tab] key again and type "f"
-   Then press (Done)

(You may also start fontforge from the command line here. Go to the
Applications menu and select Terminal (or xterm), and then type [one of
the commands listed above](#Starting))

**Caveat:** Normally FontForge will never see the command key shortcuts.
X11 intercepts these and uses them itself. If you would like to be able
to use Command-Q to quit FontForge then

-   Make sure the X11 menu bar is visible
-   Select the menu item `X11->Preferences->Input`
-   turn off (uncheck) `[] Enable keyboard shortcuts under X11`

**Caveat:** FontForge was written assuming the availability of a three
button mouse. Under 10.4 X11 simulates this by creating a virtual three
button mouse where the middle button is invoked by Option-Mouse click
and the right button by Command-Mouse click. (You can also control this
from X11-\>Preferences).
