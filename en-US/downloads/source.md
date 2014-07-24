---
published: true
layout: default
title: Building from source
---

Download the source .zip package, or clone the repository with git:

     $ git clone https://github.com/fontforge/fontforge.git

Detailed instructions for each supported Operating System are to be
found on their respective page.

### More complicated installs

The configure script allows you to turn off and on various features of
FontForge that might not be appropriate for your system. Type

     $ ./configure --help

for a complete list of options. Some of the most useful are described
below.

#### Building FontForge without X

If you don't want to install X11 on your system, you can use FontForge
as a command line tool which can execute scripts to manipulate fonts.
FontForge's scripting language is described in detail [in the section on
scripting](scripting.html), or the [section on python
scripting](python.html).

     $ ./configure --without-x

#### Building FontForge to edit type3 fonts

If you do want to edit PostScript type3 fonts, you can configure
FontForge to give you access to more drawing modes than are generally
available in fonts.

     $ ./configure --enable-type3

#### Building FontForge to edit device tables

If you do want to create device tables (which allow you to fix up
kerning data at a specific pixel size) in OpenType fonts

     $ ./configure --enable-devicetables

#### Building FontForge to use higher precision internally

FontForge generally uses floats to represent coordinates. If you need
greater accuracy...

     $ ./configure --enable-double

#### Building FontForge with the tile path command available

FontForge has a command which lets you tile a pattern along a path.
Generally this is disabled as it isn't what most fonts will use, but for
some decorative fonts it can be useful.

     $ ./configure --enable-tilepath

#### Building FontForge (also) as a python extension

If you want to write python scripts in normal python (as opposed to
within the python embedded in FontForge)

     $ ./configure --enable-pyextension

#### Installing FontForge somewhere other than `/usr/local`

If you want to install FontForge in a different directory (say in
/usr/bin)

     $ ./configure --prefix=/usr

#### Installing documentation from the cvs tree

If you have a copy of the git repository on your system then you should
be able to type

     # make install_docs

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

     $ bunzip2 fontforge*.tar.bz2
     $ tar xf fontforge*.tar
     $ cd fontforge-*/fontforge
     $ patch <foobar.patch 
     $ cd ..
     $ ./configure
     $ make
     $ make install

Dependencies (external libraries/helper programs)
-------------------------------------------------

FontForge tries to avoid hard dependencies. If a library is missing then
FontForge will (in most cases, but not on cygwin) be able to continue to
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
install the libraries, but [rebuild FontForge from source](#source)) If
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
-   [libspiro](http://libspiro.sf.net/)
     Raph Levien's clothoid to bezier spline conversion routines. If
    this is available FontForge will allow you to edit with clothoid
    splines (spiro).
-   [libuninameslist](http://libuninameslist.sf.net)
     To display unicode names and annotations.
-   [libiconv](http://www.gnu.org/software/libiconv/)
     Only important for systems with no built-in iconv(). If not present
    FontForge contains a minimal version of the library which allows it
    to work. But if you want to use libiconv you must configure it with
    `--enable-extra-encodings`, as FontForge requires Shift-JIS.
-   [freetype](http://freetype.sf.net/)
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
-   libintl
     Is standard on most unixes. It is part of the fink package on the
    mac. Handles UI localization.
-   [libpython](http://www.python.org/)
     If present when FontForge is compiled, allows the user to execute
    python scripts within FontForge (and you can configure FontForge so
    that FontForge's functionality can be imported into python -- that
    is FontForge both *extends* and *embeds* python)
-   [libX](http://x.org/)
     Normally FontForge depends on the X11 windowing system, but if you
    are just interested in the scripting engines (with no user
    interface), it may be built on systems without X (the configure
    script should figure this out).
-   [libcairo](http://www.cairographics.org/)
     Cairo handles drawing anti-aliased splines in the outline glyph
    view. It is dependent on libfontconfig, libXft and perhaps other
    libraries.
-   [libpango](http://www.pango.org/)
     Pango draws text for complex scripts. It depends on glib-2.0,
    libfontconfig, libfreetype, libXft, and perhaps other libraries.
-   Under Mac OS/X these libraries are available from the [fink
    project](http://fink.sourceforge.net/) and from
    [macports](http://www.macports.org/).

    * * * * *

### Extra Files

If you want to edit CID keyed fonts you need these [character set
descriptions](cidmaps.tgz). (These were last updated 22-Dec-2004)

Once upon a time, FontForge only used X11 bitmap fonts, on most systems
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

         $ mkfontdir
         $ xset fp+ `pwd`

You should make sure that the xset line happens whenever X is started on
your machine (put it in your .xsession file).

-   [Running FontForge](running.html)

