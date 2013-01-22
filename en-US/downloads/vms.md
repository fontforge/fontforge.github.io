---
title: FontForge install procedures for VMS
layout: default
---


FontForge install procedures\
 for VMS
=============================

-   [Installing from a pre-built vms package](#Installing)
-   [Installing on a unix/linux system](nix-install.html)
-   [Installing on a mac](mac-install.html)
-   [Installing on MS/Windows](ms-install.html)
-   [Building and installing from source](source-build.html)
-   [Dependencies (external libraries/helper
    programs)](source-build.html#Dependencies)
-   [Installing documentation](source-build.html#Documentation)
-   [Running FontForge](running.html)
-   [Uninstalling](uninstall.html)

Installing from a VMS package
-----------------------------

I'm afraid I have absolutely no idea what you need to do. All I can say
is that Jacob Jansen has provided a vms package at:

-   [An OpenVMS executable](ftp://nchrem.tnw.tudelft.nl/pfaedit/)
-   [With some information on
    dependencies](ftp://nchrem.tnw.tudelft.nl/openvms/software2.html#FONTFORGE)

He has provided the following notes:

Notes for VMS created on 17 November 2005

Compilation :

-   -use MMS or MMK in the main directory (the one containing this file)
-   -Ignore all messages about undefined symbols during linking of the
    shareable images. I have no idea how to supress them.

To use :

-   the file [.libs]libfontforge.exe should be in a directory defined by
    the logical SYS\$SHARE. So either copy it to it or redefine it i.e.:
    assign
    dev:[fontforge.fontforge.fontforge.libs],sys\$sysroot:[syslib]
    sys\$share
-   To use the plugins (an example is in the [.plugins] directory) you
    have to create a logical FONTFORGE\$PLUGINS pointing to all
    directories to be scanned for plugins i.e.
    define/job/trans=(concealed)/nolog fontforge\$plugins
    dev:[fontforge.fontforge.fontforge.plugins.] Note that the final "."
    before the "]" is essential. Note that both logicals
    FONTFORGE\$PLUGINS and SYS\$SHARE can be defined system-wide, for a
    group of users or for a single user only.


