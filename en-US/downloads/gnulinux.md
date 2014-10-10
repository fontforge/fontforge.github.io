---
published: true
layout: default
title: Install FontForge on GNU+Linux
---

### Building from source

Building FontForge from source is a three-steps job described in [INSTALL-git.md], on the main repo.

You can [download a .zip snapshot] of the repository or clone it with this command:

    $ git clone git://github.com/fontforge/fontforge.git

[INSTALL-git.md]: https://github.com/fontforge/fontforge/blob/master/INSTALL-git.md
[download a .zip snapshot]: https://github.com/fontforge/fontforge/archive/master.zip

You may want to read [Building from source](../source.md) for more information.

### Distro Packages 

Most of the GNU+Linux distributions have packages for fontforge. These will
often be a quite old. This is not a complete list, but there are packages for:

-   [debian](http://packages.debian.org/unstable/x11/fontforge.html) --
    has builds for (alpha, amd64, arm, hppa, hurd-i386, i386, ia64,
    m68k, mips, mipsel, ppc, s390, sparc)
-   [netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html)
    -- has builds for (alpha, i386, ppc, sparc, x86\_64)
-   [rpmfind](http://www.rpmfind.com/) -- will point you toward builds
    for Fedora, Suse, Mandrake, and others
-   Apostolos Syropoulos has a Solaris x86 package at [his
    site](http://www.sunfreepacks.com/)
-   [Mac OS/X](../mac/)-- Although the Mac is now a unix system
    its install procedure is sufficiently different that I have a page
    devoted to it specifically.

### Installing from an rpm

The i386 package I provide, and many of the linux packages others
provide are "rpm" files.

Installing an rpm package is relatively straight forward. You will need
to be root. Move to the directory containing the downloaded rpm, and
then type (do not type the "\$" or "\#"):

     # rpm -i fontforge-*.rpm

If you've already installed fontforge and are updating an earlier
version then you should type:

     # rpm -U fontforge-*.rpm

### Installing from an executable tarball

The solaris package I provide is a bzipped tarball (that is, it has an
extension of ".tar.bz2"). You will probably need to be root for some of
this process. Move to the directory containing the downloaded tarball
and type (do not type the "\$" or "\#"):

     $ bunzip2 fontforge-*.tar.bz2
     $ tar xf fontforge-*.tar
     $ cd fontforge
     $ su
     # ./doinstall

(Older versions may have an extension of .tgz. In this case you would
replace the first two lines with "`$ tar xfz   fontforge-*.tgz`")

**Caveat:** My packages generally install to /usr/local, and this may
not be in your default PATH. You may need to add a line like

     PATH=$PATH:/usr/local/bin ; export PATH

to your \~/.bashrc file (or equivalent if you use a different shell).
