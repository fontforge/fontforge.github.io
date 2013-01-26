---
published: true
layout: default
title: FontForge install procedures for cygwin (MS/Windows)
---


**I no longer provide pre-built packages. You may either compile from
source or download a package from another site (cygwin has a fontforge
package).**

-   [Installing on a unix/linux system](nix-install.html)
-   [Installing on a mac](mac-install.html)
-   [Installing on VMS](vms-install.html)
-   [Building and installing from source](source-build.html#MS)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html#cygwin)
-   [Troubleshooting](running.html#cygwin-troubles)
-   [Uninstalling](uninstall.html)

Installing from a pre-built cygwin package
------------------------------------------

### Before you install

You must insure that you have [cygwin](http://www.cygwin.com/) installed
on your system. Cygwin is free. (cygwin makes MS Windows look enough
like unix to allow fontforge to run there). Getting all the bits of
cygwin seems to be the hardest part of installing fontforge -- probably
because it is the least expected part.

-   First download the setup.exe program from
    [http://www.cygwin.com/](http://www.cygwin.com/)
-   Run it. It will ask you what components of cygwin you wish to
    install
-   You will need the default stuff, plus the X window system, binutils,
    libpng, libjpeg, and libxml2.
    Most of what you need you get by default. But you must explicitly
    request X11 and the libraries.
-   Once you have cygwin installed, start it. This should give you a
    terminal window running bash (a unix shell)

### Alternatives to cygwin.

There are now alternatives to cygwin.

Someone has ported fontforge to mingw, which is much simpler to download
than cygwin:

-   [fontforge-mingw](http://www.geocities.jp/meir000/fontforge/)

Instead of downloading cygwin you can install one of the virtual
machines (or something similar) which run linux, and then install
fontforge from a linux package.

-   [andLinux](http://www.andlinux.org/)

### Obtaining one of my pre-built packages

I used post a cygwin install package on [sourceforge's file release
system](http://sourceforge.net/projects/fontforge/files/fontforge-executables/).
**Old versions are still there, but they are out of date now.** There's
a certain amount of pother involved in using the file release system,
but you get the file eventually.

-   If you follow the [link
    above](http://sourceforge.net/projects/fontforge/files/fontforge-executables/)you
    will end up on a page showing many releases of FontForge for many
    systems
     in most cases you will want the most recent release.
-   Then click on the executable package you want to download:
    -   The cygwin release will be called something like
        "fontforge\_cygwin-200xxxxx.tar.bz2

-   Then you have the joy of choosing a mirror site (pick one that's on
    the same continent you are) and click on the little icon in the
    download column
-   Then you wait. After a bit you get another copy of this same page.
    After an even longer time your browser notices that you've started a
    download.

### Installing

I have no idea where your browser put the package you have just
downloaded. This is unfortunate as I can't tell you exactly what to do
next. But find the package (often it's on the desktop) and then move it
into C:\\cygwin\\home\\\<username\>. (where \<username\> is whatever
name cygwin gave you)

-   Then open a cygwin window (by clicking on the cygwin icon)
-   With luck you will now be in the directory containing the package
    you downloaded.
-   Now type (do not type the "\$"):

    >     $ bunzip2 fontforge_cygwin-*.tar.bz2
    >     $ tar xf fontforge_cygwin-*.tar
    >     $ cd fontforge
    >     $ ./doinstall

-   Then each time you want to run fontforge, start X11

    -   On recent cygwin systems you may start X by invoking:

        >     C:\cygwin\usr\X11R6\bin\startxwin.bat

    -   Or:

        >     startx

    -   While on older systems try:

        >     $ xinit

    -   This should bring up X in a large window that covers the screen
        and within that should be a subwindow, an xterm, running bash.
    -   From the xterm you first start a window manager

        >     $ twm &

    -   And then you should be able start FontForge.

        >     $ fontforge -new

    ### Notes

    **Caveat:**cygwin has a different approach to the file system than
    Windows. A filename like `C:\windows\fonts\arial.ttf `will be called
    `/cygdrive/c/windows/fonts/arial.ttf `under cygwin (backslashes are
    replaced by slashes, and the initial drive "`C:`" becomes
    "`/cygdrive/c`".

    Similarly a cygwin filename "`/home/<username>/myfont.ttf`" becomes
    "`C:\cygwin\home\<username>\myfont.ttf`"

    **Caveat:** Do **NOT** try to install a font by using fontforge to
    write the font directly to the Windows\\Fonts directory. This
    doesn't work. Windows needs to do some magic when installing a font
    that it can't do if fontforge writes directly there. Instead have
    fontforge create the font somewhere else and then use Windows' own
    drag & drop technique to move the font from there into
    Windows\\Fonts.

    **Caveat:** I've been told that on Win 98 you need to have
    "Microsoft Network Login" installed to run X. I never found this to
    be true myself, but if you have problems it might be something to
    try.

    * * * * *

    -   [Building and installing from source](source-build.html#MS)
    -   [Dependencies (external libraries/helper
        programs)](source-build.html#Dependencies)
    -   [Installing documentation](source-build.html#Documentation)
    -   [Running FontForge](running.html#cygwin)
    -   [Troubleshooting](running.html#cygwin-troubles)


