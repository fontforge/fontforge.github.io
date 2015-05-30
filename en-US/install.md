---
published: true
layout: default
title: Download FontForge
---

FontForge is available for <a href="downloads/windows/">Windows</a>, <a href="downloads/mac/">Mac</a> and
<a href="downloads/gnulinux/">GNU+Linux</a>.

Uninstalling: [How to uninstall FontForge](downloads/uninstalling/)

We also provide the <a href="downloads/source/">source code</a> under a [libre license](https://github.com/fontforge/fontforge/blob/master/LICENSE)


Most of the GNU+Linux distributions have packages for FontForge, but these will often be a quite old. 

## Ubuntu

Installing on Ubuntu is easy with our [Ubuntu PPA](https://launchpad.net/%7Efontforge/+archive/ubuntu/fontforge)

```sh
sudo add-apt-repository ppa:fontforge/fontforge;
sudo apt-get update;
sudo apt-get install fontforge;
```

#### Compiling from Github

Check out [Building From Source](../source) for more information on using the bleeding edge.

#### Installing from an rpm

Installing an rpm package is relatively straight forward.
You will need root access.
Download the RPM files on the [release page](https://github.com/fontforge/fontforge/releases)

Move to the directory containing the downloaded rpm, and then type

     rpm -i fontforge-*.rpm

If you've already installed fontforge and are updating an earlier version then you should type:

     rpm -U fontforge-*.rpm

#### Other UNIX Systems

[netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html) builds for various architectures (alpha, i386, ppc, sparc, x86\_64) are available.

[Solaris](http://www.sunfreepacks.com/) packages for x86 by Apostolos Syropoulos
