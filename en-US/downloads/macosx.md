---
title: FontForge install procedures for macintosh
layout: default
---


FontForge install procedures\
 for the macintosh
=============================

**I no longer provide pre-built packages. You may either compile from
source or download a package from another site (both
[macports](http://www.macports.org/) and
[fink](http://www.finkproject.org/) have fontforge packages).**

-   [Before you install](#Before)
-   [Installing on a unix/linux system](nix-install.html)
-   [Installing on MS/Windows](ms-install.html)
-   [Installing on VMS](vms-install.html)
-   [Building and installing from source](source-build.html#mac)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html#mac)
-   [Uninstalling](uninstall.html)

Installing from a pre-built package
-----------------------------------

### Before you install

You must insure that you have the X11 server installed on your system.

10.5, 10.4

-   Open the Install DVD that came with your system.
-   Scroll down to "Optional Installs" and open it.
-   Keep clicking `Continue` until you get to the pane "Custom Install
    on "Macintosh HD""
-   Press the arrow beside "Applications so you get a list of them.
-   Select X11
-   Keep pressing `Continue`
-   (If you want to build from source you should also install the Xcode
    packages).
-   Apple appears to have shipped a buggy version of X11 with 10.5. The
    problem appears fixed in 10.5.6 (It may have been fixed earlier, but
    I don't have a machine on which I can test that).

    The problem only affects fontforge it if uses pango or cairo.

    This release of fontforge tries to check for a buggy system, and if
    it thinks it is running on one, then it will refuse to use Pango and
    Cairo.

    The problem does not affect Mac 10.4.\*

    * * * * *

    You may upgrade from 10.5 to 10.5.6 by going to the Apple Menu and
    selecting the "Software Update" menu item, and then the "Mac OS X
    Update Combined".

    You probably need to install X11 **before** you upgrade the
    Operating System.

10.3

-   The X server lives in a package called X11User.pkg in the Packages
    folder on the third install CD.
-   Just double click on this file and follow its instructions to
    install X11

You may also want to install the [fink](http://fink.sourceforge.net/) or
[macports](http://www.macports.org/) packages which includes many useful
libraries (see the [dependencies](source-build.html#Dependencies)
section below for more info on this)

##### Configuring X11

`X11->Preferences->Input`

FontForge is designed to make use of a three button mouse. It is also
designed to make use of modifier key modes on mouse clicks (so Control
left click can mean something different than left click). If you have a
three (or two) button mouse then use it (and turn off
"`Emulate three button   mouse`" in the X11 preferences). If you have a
standard one button mouse then you have the option of having the mac
simulate a three button mouse (for instance Option mouse click behaves
like clicking the middle mouse button). Unfortunately this means you can
no longer use the Option key to change the behavior of the left (only)
button click. So either choice means you lose capabilities.

Normally X11 is configured so that the Command key (cloverleaf) is bound
to the X11 menu bar, and not to fontforge's. When fontforge starts it
checks this, and if X11 gets command then fontforge configures its
menubar to use Control rather than command. This isn't very mac-like. If
you turn **off** the "`Enable keyboard shortcuts under X11`" preference
item then fontforge will configure its menubar to make use of Command.

If type the following into a terminal (or xterm) window

>     $ cat >~/.fonts.conf
>     <?xml version="1.0"?>
>     <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
>     <!-- /etc/fonts/fonts.conf file to configure system font access -->
>     <fontconfig>
>
>     <!-- Font directory list -->
>     <!-- Add to system list -->
>
>             <dir>/System/Library/Fonts</dir>
>             <dir>/Library/Fonts</dir>
>             <dir>~/Library/Fonts</dir>
>
>     </fontconfig>
>     ^D

then fontforge's UI will be able to use the fonts Apple supplies with
the mac. (You don't type the "\$", and \^D means hold down the control
key and press "D").

##### Note:

On the mac, the Option key is mapped to what fontforge calls "Alt" or
"Meta".

### Obtaining one of my pre-built packages

I used to post mac install packages on [sourceforge's file release
system](http://sourceforge.net/projects/fontforge/files/). The old ones
are still there **but they are now out of date.** There's a certain
amount of pother involved in using the file release system, but you get
the file eventually.

I currently post builds for Mac 10.5 & 10.4 (I post different builds for
the two systems because they provide different python libraries).

**Neither of these builds will work on 10.3**. If you wish a 10.3 build
you can [build from current source](source-build.html), or download a
build from 2006. If you wish a 10.2 or earlier build the current sources
will not work and you must delve more deeply into the past.

-   If you follow the [link
    above](http://sourceforge.net/projects/fontforge/files/)you will end
    up on a page showing many releases of FontForge for many systems\
     in most cases you will want the most recent release.
-   Then click on the executable package you want to download:
    -   The mac release will be called something like
        "FontForge-200xxxxx.pkg.sitx

-   Then you have the joy of choosing a mirror site (pick one that's on
    the same continent you are) and click on the little icon in the
    download column
-   Then you wait. After a bit you get another copy of this same page.
    After an even longer time your browser notices that you've started a
    download.

### Installing

Generally your browser will decompress the package after pulling it
down, and then start the install process itself.

If this doesn't happen, find the package (it's usually on the desktop)
and double-click on it.

The install will request your password (to make sure you have the right
to do an install on your machine, and then ask some innocuous questions,
and proceed to install.

### Notes

FontForge does not conform to Apple's Human Interface Guidelines.
FontForge never will. Don't expect it to look like a normal Mac
Application. It doesn't.

Before you can start FontForge you must start the X11 server. You do
this by opening the Utilities sub-folder of the Applications folder and
double-clicking on X11. This will bring up a new menu bar, and under the
Applications menu you should find an entry for FontForge.

* * * * *

-   [Building and installing from source](source-build.html#source)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html#mac)


