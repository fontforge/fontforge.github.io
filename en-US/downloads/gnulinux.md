---
title: FontForge install procedures for unix/linux based systems
layout: default
---


FontForge install procedures
 for unix/linux based systems
=============================

**I no longer provide pre-built packages. You may either compile from
source or download a package from another site (most linux distributors
will have a fontforge package).**

-   [Installing on a Mac](mac-install.html)
-   [Installing on MS/Windows](ms-install.html)
-   [Installing on VMS](vms-install.html)
-   [Building and installing from source](source-build.html#source)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html)
-   [Uninstalling](uninstall.html)

Installing from a pre-built package
-----------------------------------

### Obtaining one of my pre-built packages

I used to post pre-built packages for i386 linux systems and for Sparc
Solaris systems. These can still be found on [sourceforge's file release
system](http://sourceforge.net/projects/fontforge/files/). **But they
are out of date now.** There's a certain amount of pother involved in
using this system, but you get the file eventually.

-   If you follow the [link
    above](http://sourceforge.net/projects/fontforge/files/fontforge-executables)you
    will end up on a page showing many releases of FontForge for many
    systems
     in most cases you will want the most recent release.
-   Then click on the executable package you want to download:
    -   For i386 linux you will want the rpm file for the i386 (This
        happens to have been built on RedHat 9, but it should work on
        any i386 linux system that supports rpm -- RedHat, Fedora, Suse,
        Mandrake, etc.)
    -   For Sparc Solaris you will want the tar.bz2 file for sparc.

-   Then you have the joy of choosing a mirror site (pick one that's on
    the same continent you are) and click on the little icon in the
    download column
-   Then you wait. After a bit you get another copy of this same page.
    After an even longer time your browser notices that you've started a
    download.

#### Obtaining a package from another source

Most of the linux distributions have packages for fontforge. These will
often be a little older than my packages, but perhaps more stable. I
shall not try to provide a complete list, but I am aware of the
following sites:

-   [debian](http://packages.debian.org/unstable/x11/fontforge.html) --
    has builds for (alpha, amd64, arm, hppa, hurd-i386, i386, ia64,
    m68k, mips, mipsel, ppc, s390, sparc)
-   [netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html)
    -- has builds for (alpha, i386, ppc, sparc, x86\_64)
-   [rpmfind](http://www.rpmfind.com/) -- will point you toward builds
    for Fedora, Suse, Mandrake, and others
-   Apostolos Syropoulos has a Solaris x86 package at [his
    site](http://www.sunfreepacks.com/)
-   [Mac OS/X](mac-install.html)-- Although the Mac is now a unix system
    its install procedure is sufficiently different that I have a page
    devoted to it specifically.

### Installing from an rpm

The i386 package I provide, and many of the linux packages others
provide are "rpm" files.

Installing an rpm package is relatively straight forward. You will need
to be root. Move to the directory containing the downloaded rpm, and
then type (do not type the "\$" or "\#"):

>     # rpm -i fontforge-*.rpm

If you've already installed fontforge and are updating an earlier
version then you should type:

>     # rpm -U fontforge-*.rpm

### Installing from an executable tarball

The solaris package I provide is a bzipped tarball (that is, it has an
extension of ".tar.bz2"). You will probably need to be root for some of
this process. Move to the directory containing the downloaded tarball
and type (do not type the "\$" or "\#"):

>     $ bunzip2 fontforge-*.tar.bz2
>     $ tar xf fontforge-*.tar
>     $ cd fontforge
>     $ su
>     # ./doinstall

(Older versions may have an extension of .tgz. In this case you would
replace the first two lines with "`$ tar xfz   fontforge-*.tgz`")

**Caveat:** My packages generally install to /usr/local, and this may
not be in your default PATH. You may need to add a line like

>     PATH=$PATH:/usr/local/bin ; export PATH

to your \~/.bashrc file (or equivalent if you use a different shell).

### What's in a package

Just in case you are interested. My packages contain:

-   fontforge -- the executable itself
-   libgunicode\*.so -- a shared library containing functions for
    manipulating UCS2 strings, and various data about unicode code
    points.
-   libgdraw\*.so -- the graphics and widget library used by fontforge
-   pfaedit-ui.{es,fr,it,ja,ru} -- translated strings to provide a user
    interface for non-English users.
-   \*.cidmap -- not present in all packages. These are useful when
    editing CID-keyed Asian fonts.
-   README\*
-   fontforge.1 -- a manual page for fontforge

### Ports that I am aware of

FontForge has been ported to the following systems (at some point in its
life)

-   Linux (obviously, (redhat, debian, suse, mandrake),
    386,spark,arm,alpha,ia64,m68k,mips,mipsel,powerpc,s390)
-   Solaris
-   Irix
-   FreeBsd
-   NetBsd
-   Mac OS/X
-   OpenVMS7.3 for Alpha
-   [cygwin](http://cygwin.com/) with X running on top of MS windows.

* * * * *

-   [Building and installing from source](source-build.html#source)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html)


