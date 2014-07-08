---
published: true
layout: default
title: How To Compile FontForge
---

Mac OS X
============

## Installing from Package Managers

These Mac package managers all have FontForge:

* [Homebrew](http://www.brew.sh) (recommended)
* [MacPorts](http://www.macports.org/)
* [Fink](http://www.finkproject.org/) 

## Installing from Source Code

Build with source using [Homebrew](http://www.brew.sh) in the normal way:

```sh
brew install python;
brew install gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango;
brew -v install fontforge --HEAD --with-cairo --with-czmq --with-gif --with-x --with-libspiro --with-pango --enable-pyextension --debug
```



Old Information
-----------------

TODO: Modernise this

-   [Installing from a pre-built unix
    package](nix-install.html#Installing)
-   [Installing on a Mac](mac-install.html#Installing)
-   [Installing on MS/Windows](ms-install.html#Installing)
-   [Before you build (on a mac)](#src-mac)
-   [Before you build (on MS/Windows)](#src-MS)
-   [Building and installing from source](#src-source)
    -   [Obtaining a source distribution](#src-distribution)
        -   [tarball](#src-tarball)
        -   [from the git repository](#src-git)
        -   [~~from the cvs tree~~](#src-cvs)

    -   [Building & installing it](#src-Building)
    -   [More complicated installs](#src-installs) (some configuration
        options)
    -   [Building Plugins](plugins.html)
    -   [Creating user interface translations](uitranslationnotes.html)

-   [Applying a patch](#patch)
-   [Dependencies (external libraries/helper programs)](#Dependencies)
-   [Suggested fonts](#suggested-fonts)
-   [Installing documentation](#Documentation)
    -   [Installing a documentation tarball](#doc-tar)

-   [Running FontForge](running.html)
-   [Uninstalling](uninstall.html)

Before you build (on a mac)
---------------------------

You must insure that you have the both the [X11](http://xquartz.macosforge.org/landing/)
server and the Xcode toolchain installed on your system.
This process is slightly different on OS/X 10.3 & 10.4

10.4

-   Open the Install DVD that came with your system.
-   Scroll down to "Optional Installs" and open it.
-   Keep clicking `Continue` until you get to the pane "Custom Install
    on "Macintosh HD""
-   Press the arrow beside "Applications" so you get a list of them.
-   Select X11
-   Keep pressing `Continue`

    * * * * *

-   The Xcode toolchain is optional software on the install DVD. Simply
    insert the disk and click on the XCode install icon.

10.3

-   The X server lives in a package called X11User on the third install
    CD.
-   You must also install the X11SDK package on the XCode CD
-   And you must install the XCode tools themselves.

You may also want to install the [fink](http://fink.sourceforge.net/)
package which includes many useful libraries (see the
[dependencies](#Dependencies) section below for more info on this)

You must then start up a Terminal window (the Terminal Application also
lives in the Utilities sub-folder of the Applications folder) and be
prepared to type commands in that window (I know, it's very
un-mac-like).

### Special note for building prior to 10.3

OS/X has evolved over time. Certain system calls have changed. The
current source distribution should work on any 10.3+ system.

If you wish to build on a 10.2 system you must say

>     $ ./configure --with-regular-link

(Rather than just saying `./configure`)

Before you build (on MS/Windows)
--------------------------------

You must download the [cygwin](http://www.cygwin.com/) environment. You
will need

-   the basic cygwin packages
-   the X11 package
-   the xterm package
-   binutils
-   the package containing gcc, make (probably called c compiler
    development or something)
-   You may want to download some additional optional packages to
    provide support for various image formats (See the
    [Dependencies](#Dependencies) section below).

**Caveat:**cygwin has a different approach to the file system than
Windows. A filename like `C:\windows\fonts\arial.ttf `will be called
`/cygdrive/c/windows/fonts/arial.ttf `under cygwin (backslashes are
replaced by slashes, and the initial drive "`C:`" becomes
"`/cygdrive/c`"

Having done that you should now be ready to build. Open a cygwin
terminal window and be prepared to type commands in it.

Building and installing from source
-----------------------------------

### Obtaining a source distribution

There are two basic ways to obtain a source distribution. One is by
downloading an entire source tree from the web, and the other is by
using the git utility to maintain a source tree on your machine which
will be as up to date as possible. The former solution provides more
stability, the latter provides access to cutting edge bugs.

#### tarball or zip

Fontforge uses the tarball release system provided by GitHub:

[Fontforge Releases](https://github.com/fontforge/fontforge/releases).

Or you can use the snapshots generated directly from the git repo:

[Github Zip](https://github.com/fontforge/fontforge/archive/master.zip).

After you have downloaded one of these packages, either copy the file
to where you are, or move to the directory containing the file (I
can't provide explicit instructions here, because I don't know where
your browser put the file) and type (do not type "\$"):

>     $ tar xf fontforge*.tar.gz
>     $ cd fontforge-*

It should be almost the same if you use the zip archive.
Just unpack it and cd into it, then follow the instructions in 
`README.md` .
#### from the git repository

git is another version control system. To set up your own (local,
read-only) copy of the git repository (including documentation), create
a new directory, cd into it and type the following (do not type "\$",
when it asks for a password, just hit return):

>     $ git clone https://github.com/fontforge/fontforge

You can also [browse the git repository](https://github.com/fontforge/fontforge)
online. Or see [GitHub Help](http://help.github.com) for more information,
or read the [git documentation](http://git-scm.com/documentation).

#### ~~from the cvs tree~~

The cvs repository is no longer up to date. It still exists (for now)
for historical purposes (and in case something goes wrong with git) but
it is no longer in active service and no commits have been made to it
since 13-Feb-2011. You really want to use git, above.

~~cvs is a nifty set of utilities which allows concurrent access to a
source tree by many users. To set up your own (local) copy of the cvs
tree (including documentation), create a new directory, cd into it and
type the following (do not type "\$", when it asks for a password, just
hit return):~~

>     $ cvs -d:pserver:anonymous@fontforge.cvs.sourceforge.net:/cvsroot/fontforge login
>     CVS password:
>     $ cvs -d:pserver:anonymous@fontforge.cvs.sourceforge.net:/cvsroot/fontforge checkout fontforge
>     $ cd fontforge

~~Once you have established a directory you may update it to obtain the
most recent version of the source by typing:~~

>     $ cd fontforge
>     $ cvs -d:pserver:anonymous@fontforge.cvs.sourceforge.net:/cvsroot/fontforge login
>     CVS password:
>     $ cvs -d:pserver:anonymous@fontforge.cvs.sourceforge.net:/cvsroot/fontforge update

~~You can also [browse the CVS
tree](http://fontforge.cvs.sourceforge.net/fontforge/fontforge/) online.
Or see [sourceforge's
description](http://sourceforge.net/cvs/?group_id=103338)for more
information, or read the [CVS
manual](http://www.cvshome.org/docs/manual/).~~

### Building & installing from github sources

Now you have the source installed on your system and you should be
positioned at the top directory of that tree. You need to configure your
package (this is a little program that figures out how to use your
system), and then build it (do not type the "\$"):

>     $ ./bootstrap # if there is no bootstrap, read README.md
>     $ ./configure
>     $ make

Having done this you will probably want to install what you have built.
This should be done as root:

>     $ su
>     password: ******
>     # make install

Or if you can't use root (e.g. when you are on a mac), try `sudo`:

>     $ sudo make install
>     password: ******

While on cygwin, where there is no root, you just say:

>     $ make install

### More complicated installs

The configure script allows you to turn off and on various features of
fontforge that might not be appropriate for your system. Type

>     $ ./configure --help

for a complete list of options. Some of the most useful are described
below.

#### Building fontforge without X

If you don't want to install X11 on your system, you can use fontforge
as a command line tool which can execute scripts to manipulate fonts.
FontForge's scripting language is described in detail [in the section on
scripting](scripting.html), or the [section on python
scripting](python.html).

>     $ ./configure --without-x

#### Building fontforge to edit type3 fonts

If you do want to edit PostScript type3 fonts, you can configure
fontforge to give you access to more drawing modes than are generally
available in fonts.

>     $ ./configure --enable-type3

#### Building fontforge to edit device tables

If you do want to create device tables (which allow you to fix up
kerning data at a specific pixel size) in OpenType fonts

>     $ ./configure --enable-devicetables

#### Building fontforge to use higher precision internally

FontForge generally uses floats to represent coordinates. If you need
greater accuracy...

>     $ ./configure --enable-double

#### Building fontforge with the tile path command available

FontForge has a command which lets you tile a pattern along a path.
Generally this is disabled as it isn't what most fonts will use, but for
some decorative fonts it can be useful.

>     $ ./configure --enable-tilepath

#### Building fontforge (also) as a python extension

If you want to write python scripts in normal python (as opposed to
within the python embedded in fontforge)

>     $ ./configure --enable-pyextension

#### Installing FontForge somewhere other than `/usr/local`

If you want to install fontforge in a different directory (say in
/usr/bin)

>     $ ./configure --prefix=/usr

#### Installing documentation from the cvs tree

If you have a copy of the git repository on your system then you should
be able to type

>     # make install_docs

Again you will probably need to be root to do this install too. Use
either "su" or "sudo" as appropriate for your system ([see above](#su)).

Applying a patch
----------------

From time to time someone will report a bug or request a feature and I
will reply by sending a patch which purports to fix the bug or implement
the feature. But how do you use the patch file I sent?

patch is a standard unix utility (Try typing \$ man patch, for more
info) which will make changes to text files. I use it to modify the
source files of FontForge.

So before you can apply the patch you must [have the source
code](source-build.html#src-distribution)available to you. If you choose
to download from the git repository, then, in all probability, the patch
will already have been applied (so you don't need to do anything with
it). But if you download one of my tarballs then you will need to apply
the patch:

>     $ tar xf fontforge*.tar.gz
>     $ cd fontforge-*/fontforge
>     $ patch <foobar.patch 
>     $ cd ..
>     $ ./configure
>     $ make
>     $ make install

Dependencies (external libraries/helper programs)
-------------------------------------------------

FontForge tries to avoid hard dependencies. If a library is missing then
fontforge will (in most cases, but not on cygwin) be able to continue to
run, it will just lack whatever functionality the library provides. So
if you don't need to import tiff images, you don't need libtiff. If you
don't need to handle SVG fonts you don't need libxml2, etc.

### Executables

If you want to do autotracing around character images you should also
download either

-   Peter Selinger's [potrace](http://potrace.sf.net/)
-   Martin Weber's [autotrace
    program.](http://sourceforge.net/projects/autotrace/)

### Libraries

None is required for the proper compilation/execution of FontForge, if
the libraries are not present they will not be used. (If the machine on
which your executable was build didn't have them, then you must not only
install the libraries, but [rebuild fontforge from source](#source)) If
your machine doesn't have them and you want them they are available
from:

-   Image Libraries (to allow FontForge to import images in those
    formats generally used as backgrounds for autotracing)
    -   [libpng](http://www.libpng.org/pub/png/libpng.html) (and
        required helper [zlib](http://www.gzip.org/zlib/))
    -   [libtiff](http://www.libtiff.org/)
    -   [libungif](http://gnuwin32.sourceforge.net/packages/libungif.htm)
    -   [libjpeg](http://www.ijg.org/)

-   [libxml2](http://xmlsoft.org/)
     To parse SVG files and fonts
-   [libspiro](https://github.com/fonrforge/libspiro)
     Raph Levien's clothoid to bezier spline conversion routines. If
    this is available fontforge will allow you to edit with clothoid
    splines (spiro).
-   [libuninameslist](http://libuninameslist.sf.net)
     To display unicode names and annotations.
-   [libiconv](http://www.gnu.org/software/libiconv/)
     Only important for systems with no built-in iconv(). If not present
    FontForge contains a minimal version of the library which allows it
    to work. But if you want to use libiconv you must configure it with
    `--enable-extra-encodings`, as FontForge requires Shift-JIS.
-   [freetype](http://freetype.org/)
     To do a better job rasterizing bitmaps, and to enable the truetype
    debugger.
    Some of FontForge's commands depend on you compiling freetype with
    the byte code interpreter enabled. It used to be disabled by default
    because of some [patents granted to
    Apple](http://freetype.sourceforge.net/patents.html). Now that they
    have expired, you no longer need to worry about this, unless your
    setup happens to use an old library version. Then you may enable the
    interpreter by setting the appropriate macro in
    *.../include/freetype/config/ftoption.h* before you build the
    library (see the README.UNX file on the top level of the freetype
    distribution).
    To enable the truetype debugger, FontForge needs to have the
    freetype source directories available when it is built (there are
    some include files there which it depends on)
-   [cygwin](http://www.cygwin.com/)
     To build or run on a MS Windows system you need the cygwin
    environment and libraries.
-   libintl
     Is standard on most unixes. It is part of the fink package on the
    mac. Handles UI localization.
-   [libpython](http://www.python.org/)
     If present when FontForge is compiled, allows the user to execute
    python scripts within fontforge (and you can configure fontforge so
    that fontforge's functionality can be imported into python -- that
    is fontforge both *extends* and *embeds* python)
-   [libX](http://x.org/)
     Normally FontForge depends on the X11 windowing system, but if you
    are just interested in the scripting engines (with no user
    interface), it may be built on systems without X (the configure
    script should figure this out).

     If you use a Mac, use [XQuartz](http://xquartz.macosforge.org/landing/)
-   [libcairo](http://www.cairographics.org/)
     Cairo handles drawing anti-aliased splines in the outline glyph
    view. It is dependent on libfontconfig, libXft and perhaps other
    libraries.
-   [libpango](http://www.pango.org/)
     Pango draws text for complex scripts. It depends on glib-2.0,
    libfontconfig, libfreetype, libXft, and perhaps other libraries.
-    Under Mac OS/X these libraries are available
    from the [fink project](http://fink.sourceforge.net/),
    from [macports](http://www.macports.org/) and from [Homebrew](http://brew.sh).

    * * * * *

### Extra Files

If you want to edit CID keyed fonts you need these [character set
descriptions](cidmaps.tgz). (These were last updated 22-Dec-2004)

Once upon a time, fontforge only used X11 bitmap fonts, on most systems
in now uses fontconfig.

There seem plenty of good unicode outline fonts, so I shan't provide any
suggestions. To install them you simply create a subdirectory called
.fonts in your home directory, and then copy the font file into that
subdirectory.

**Warning for mac users:** pango uses opentype to layout complex
scripts. Most fonts on the macintosh are in a different format -- glyphs
from them will display fine (so they work for latin, greek cyrillic,
japanese, chinese, etc.) but more complex features will probably not
work (so Arabic and Indic scripts may not be displayed properly).

In the old days there weren't many bitmap fonts with good unicode
coverage so I provided a list of suggested fonts. That's not nearly as
important now. But if fontconfig isn't available for you, you might want
to pull down some old unicode bitmap fonts.

-   [Kanou's fontview
    fonts](http://khdd.net/kanou/fonts/ff/fontviewfont-en.html)
    [![](flags/Nisshoki-Japan.png)](http://khdd.net/kanou/fonts/ff/fontviewfont.html)
-   [The unifont](http://czyborra.com/unifont/)
-   [ClearlyU's font](http://clr.nmsu.edu/~mleisher/cu.html)
-   [The FreeFont project](http://www.nongnu.org/freefont/)
-   [X fixed](http://www.cl.cam.ac.uk/~mgk25/ucs-fonts.html)
-   [Computer Modern Unicode
    fonts](http://canopus.iacp.dvo.ru/~panov/cm-unicode/)
-   [Unicode Font Guide for Free/Libre Open Source Operating
    Systems](http://eyegene.ophthy.med.umich.edu/unicode/fontguide/)

    * * * * *

-   [FontForge's conventions for non-BMP unicode bitmap
    fonts](nonBMP/index.html)

To install these, put them in a directory, and in that directory type:

>         $ mkfontdir
>         $ xset fp+ `pwd`

You should make sure that the xset line happens whenever X is started on
your machine (put it in your .xsession file).

Documentation
-------------

[The complete fontforge manual is available online.](overview.html)

-   A documentation tarball can be retrieved from the [file release
    system](http://sourceforge.net/projects/fontforge/files/fontforge-docs/)
-   A Japanese![](flags/Nisshoki-Japan.png)
    [tarball](fontforge_ja_htdocs-20060822.tar.bz2) (Version
    22-Aug-2006) **Out of Date!**
-   There is a shorter tutorial which
    -   [Is available online](editexample.html)
    -   [](ja/editexample.html)![](img/spacer1x20.png)**Out of Date!**
    -   [](http://edt1023.sayya.org/fontforge/editexample.html)![](img/spacer1x20.png)**Out
        of Date!**
    -   [![](flags/GermanFlag.png)](de/editexample.html)**Out of Date!**
    -   [Can be downloaded as pdf](fontforge-tutorial.pdf)
    -   [example files](tutorial.tgz)(to work through the tutorial
        yourself)

-   The git repository contains a sub-directory called htdocs containing
    the manual
    -   The git repository contains a sub-sub-directory called htdocs/ja
        containing the Japanese translation of the manual

    See the general comments on the [git repository](#src-git)to see how
    to access this.
     See the section on [installing git
    documentation](#installing-documentation-git)to see how to install
    the docs from the git tree

### Installing a documentation tarball

Once you have downloaded the documentation tarball as described above,
you should move to the directory containing it, and type:

>     $ su
>     password: ******
>     # mkdir -p /usr/local/share/doc/fontforge
>     # mv fontforge_htdocs*.tar.bz2 /usr/local/share/doc/fontforge
>     # cd /usr/local/share/doc/fontforge
>     # tar xfj fontforge_htdocs*.tar.bz2
>     # rm fontforge_htdocs*.tar.bz2

After doing this fontforge will be able to find the docs on your system
when you press the [F1] (or [Help]) key. If you don't do this fontforge
will attempt to find documentation online.

(on some strict unix systems you may need to do the following instead)

>     $ su
>     password: ******
>     # mkdir -p /usr/local/share/doc/fontforge
>     # mv fontforge_htdocs*.tar.bz2 /usr/local/share/doc/fontforge
>     # cd /usr/local/share/doc/fontforge
>     # bunzip2 fontforge_htdocs*.tar.bz2
>     # tar xf fontforge_htdocs*.tar
>     # rm fontforge_htdocs*.tar

* * * * *

-   [Running FontForge](running.html)

