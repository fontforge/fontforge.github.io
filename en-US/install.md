---
published: true
layout: default
title: Install FontForge
---

`Latest version: {{ site.releasedate }}`

FontForge works on almost every desktop operating system. Prepackaged installers are available for Windows + Mac and we have our own PPA. You can also [build](https://github.com/fontforge/fontforge/blob/master/CONTRIBUTING.md) from source.

Please post any [issues]({{ site.githubissue }}) you might have.

-----

## Installers

<a class="btn btn-primary btn-large default" href="{{ site.windownload }}">Windows</a>
<a class="btn btn-primary btn-large default" href="{{ site.macdownload }}">Mac</a>

#### Windows

1. Right click and select `Run as Administrative User`
2. Installing...
3. Right click FontForge icon and select `Run as Administrative User`

Dev. snapshots and "MSYS" Windows build system at the [fontforgebuilds](http://sourceforge.net/projects/fontforgebuilds/) project.

#### Mac

FontForge runs on Mac thanks to XQuartz (included in the installer) which means it doesn't behave 100% like a normal Mac App. Read [this](http://osxdaily.com/2012/07/27/app-cant-be-opened-because-it-is-from-an-unidentified-developer/) if you get a warning about `unidentified developer`

-----

## GNU+Linux

Most of the GNU+Linux distributions have packages for FontForge, but these will often be a quite old.

```
sh
sudo add-apt-repository ppa:fontforge/fontforge;
sudo apt-get update;
sudo apt-get install fontforge;
```

-----

## Other UNIX Systems

[netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html) builds for various architectures (alpha, i386, ppc, sparc, x86\_64) are available.

[Solaris](http://www.sunfreepacks.com/) packages for x86 by Apostolos Syropoulos
