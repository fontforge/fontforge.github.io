---
published: true
layout: downloads
title: Building FontForge From Source
contenttype: application/x-gzip
---

Building FontForge from source is a three-steps job described in [INSTALL-git.md](https://github.com/fontforge/fontforge/blob/master/INSTALL-git.md), on the main repo.

You can [download a .zip snapshot](https://github.com/fontforge/fontforge/archive/master.zip) of the repository or clone it with this command:

    git clone git://github.com/fontforge/fontforge.git

Download the source .zip or .tar.gz package, or clone the repository with git:

     git clone https://github.com/fontforge/fontforge.git

For building from source for a release versions, go to the [Release Page](https://github.com/fontforge/fontforge/releases) to find out your release tag, and in your cloned copy of the repo use `git checkout tags/20141014` (for example)


Building FontForge from source is a three-step job, described in [INSTALL-git.md], on the main repo.

If you're not familiar with compiling source code, the follow provides some introductory guidance.

The configure script allows you to turn off and on various features of FontForge that might not be appropriate for your system. For a complete list of options, type

     `./configure --help`

Some of the most useful options are:

- **Building FontForge without X.**
  If you don't want to install X11 on your system, you can use FontForge as a command line tool which can execute scripts to manipulate fonts.
  FontForge's scripting language is described in detail [in the section on scripting](scripting.html), or the [section on python scripting](python.html).

     `./configure --without-x`

- **Building FontForge (also) as a python extension**
  If you want to write python scripts in normal python (as opposed to within the python embedded in FontForge)

     `./configure --enable-pyextension`

- **Installing FontForge somewhere other than `/usr/local`**
  If you want to install FontForge in a different directory (say in `/usr/bin`)

     `./configure --prefix=/usr`

## Building a Debian package (.deb)

Use these commands:

    ./bootstrap ;
    ./configure ;
    make F_PACKAGER_NAME="Name" \
      F_PACKAGER_MAIL="somebody@somewhere.com" \
      F_METADATA_REGENERATE=1 \
      UBUNTU_RELEASE="precise" \
      deb-src ;

## Building a Red Hat Package (.rpm)

Use these commands:

    # Install dependencies
    rpm-devel rpm-build git perl autoconf automake tar libtool glibc-devel m4 gcc cpp python-devel libjpeg-turbo-devel libtiff-devel libpng-devel giflib-devel freetype-devel uuid-devel libtool-ltdl-devel bzip2-devel libxml2-devel libuninameslist-devel libspiro-devel pango-devel cairo-devel chrpath;
    ./bootstrap;
    ./configure;
    make rpm-src;
    # That produced a tarball and a spec file in the parent directory
    mkdir -p ~/rpmbuild/SOURCES/;
    cp TARBALL ~/rpmbuild/SOURCES/;
    rpmbuild -ba --nodeps SPECFILE






## Dependencies (External Libraries/Helper Programs)

FontForge tries to avoid hard dependencies.
If a library is missing then FontForge will (in most cases, but not on cygwin) be able to continue to run, it will just lack whatever functionality the library provides.
So if you don't need to import tiff images, you don't need libtiff.
If you don't need to handle SVG fonts you don't need libxml2, etc.

### Executables

If you want to do autotracing around character images you should also download either

-   Peter Selinger's [potrace](http://potrace.sf.net/)
-   Martin Weber's [autotrace program.](http://sourceforge.net/projects/autotrace/)

### Libraries

If your system comes with a package manager, use it. It makes installing thee libraries easier.

None are required for the proper compilation/execution of FontForge, if the libraries are not present they will not be used.
(If the machine on which your executable was build didn't have them, then you must not only install the libraries, but [rebuild FontForge from source](#source))
If your machine doesn't have them and you want them they are available from:

-   Image Libraries (to allow FontForge to import images in those
    formats generally used as backgrounds for autotracing)
    -   [libpng](http://www.libpng.org/pub/png/libpng.html) (and required helper [zlib](http://www.gzip.org/zlib/))
    -   [libtiff](http://www.libtiff.org/)
    -   [libungif](http://gnuwin32.sourceforge.net/packages/libungif.htm)
    -   [libjpeg](http://www.ijg.org/)
-   [libxml2](http://xmlsoft.org/) To parse SVG files and fonts
-   [libspiro](https://github.com/fonrforge/libspiro) Raph Levien's clothoid to bezier spline conversion routines. If this is available FontForge will allow you to edit with clothoid splines (spiro).
-   [libuninameslist](https://github.com/fontforge/libuninameslist) To display unicode names and annotations.
-   [libiconv](http://www.gnu.org/software/libiconv/) Only important for systems with no built-in iconv().
    If not present FontForge contains a minimal version of the library which allows it to work.
    But if you want to use libiconv you must configure it with `--enable-extra-encodings`, as FontForge requires Shift-JIS.
-   [freetype](http://freetype.org/)
    To do a better job rasterizing bitmaps, and to enable the truetype debugger.
    Some of FontForge's commands depend on you compiling freetype with the byte code interpreter enabled.
    It used to be disabled by default because of some [patents granted to Apple](http://freetype.org/patents.html).
    Now that they have expired, you no longer need to worry about this, unless your setup happens to use an old library version.
    Then you may enable the interpreter by setting the appropriate macro in `*.../include/freetype/config/ftoption.h*` before you build the library (see the README.UNX file on the top level of the freetype distribution).
    To enable the truetype debugger, FontForge needs to have the freetype source directories available when it is built (there are some include files there which it depends on.)
-   libintl Is standard on most unixes. It is part of the fink package on the mac. Handles UI localization.
-   [libpython](http://www.python.org/) If present when FontForge is compiled, allows the user to execute python scripts within FontForge (and you can configure FontForge so that FontForge's functionality can be imported into python -- that is FontForge both *extends* and *embeds* python)
-   [libX](http://x.org/) Normally FontForge depends on the X11 windowing system, but if you are just interested in the scripting engines (with no user interface), it may be built on systems without X (the configure script should figure this out).
-   [libcairo](http://www.cairographics.org/) Cairo handles drawing anti-aliased splines in the outline glyph view. It is dependent on libfontconfig, libXft and perhaps other libraries.
-   [libpango](http://www.pango.org/) Pango draws text for complex scripts. It depends on glib-2.0, libfontconfig, libfreetype, libXft, and perhaps other libraries.

### Extra Files

If you want to edit CID keyed fonts you need these [character set descriptions](cidmaps.tgz). (These were last updated 22-Dec-2004)

You might want to pull down some old unicode bitmap fonts.

-   [Kanou's fontview fonts](http://khdd.net/kanou/fonts/ff/fontviewfont-en.html) [![](flags/Nisshoki-Japan.png)](http://khdd.net/kanou/fonts/ff/fontviewfont.html)
-   [The unifont](http://czyborra.com/unifont/)
-   [ClearlyU's font](http://clr.nmsu.edu/~mleisher/cu.html)
-   [The FreeFont project](http://www.nongnu.org/freefont/)
-   [X fixed](http://www.cl.cam.ac.uk/~mgk25/ucs-fonts.html)
-   [Computer Modern Unicode fonts](http://canopus.iacp.dvo.ru/~panov/cm-unicode/) - [Unicode Font Guide for Free/Libre Open Source Operating Systems](http://eyegene.ophthy.med.umich.edu/unicode/fontguide/)


FontForge has [conventions for non-BMP unicode bitmap fonts](nonBMP/index.html).
To install these, put them in a directory, and in that directory type:

     mkfontdir
     xset fp+ `pwd`

You should make sure that the xset line happens whenever X is started on your machine (put it in your .xsession file).
