---
published: true
layout: downloads
title: FontForge on GNU+Linux and other Unices
archive_extension: .tar.gz|.zip
---

Most GNU+Linux distributions have packages for FontForge, but these are often quite outdated. If you want the latest FontForge, these are your options:

### AppImage

AppImage is a binary format that has improved to the point where it is generally usable by all GNU+Linux users.

With each release, we compile an AppImage. The latest is [2022-03-08](https://github.com/fontforge/fontforge/releases/download/20220308/FontForge-2022-03-08-582bd41-x86_64.AppImage).

We recommend all users use this method to get the latest release if their distribution has not yet provided it. The Ubuntu PPA, and similar distribution-specific build platforms that put the onus on us, are deprecated and not to be used.

### Compiling

#### From GitHub

Check out [Building From Source](../source), as well as [`INSTALL.md`](https://github.com/fontforge/fontforge/blob/master/INSTALL.md), for more information on using bleeding edge versions of FontForge, which change every time a developer merges a pull request.

#### From distribution-specific build recipe

Some distributions provide a collection of build recipes which can simplify building on them. On Arch Linux this is called a `PKGBUILD` and one way they are distributed is via the Arch User Repository (AUR): it may be simpler to install [`fontforge-git`](https://aur.archlinux.org/packages/fontforge-git/) via the AUR if you are an Arch user.

The Alpine Linux version of this is an [`APKBUILD`](https://git.alpinelinux.org/aports/tree/testing/fontforge/APKBUILD). Gentoo Linux calls it a "`portage` overlay", see e.g. [here](http://gpo.zugaina.org/media-gfx/fontforge).

## Other Unices

* [FreeBSD](https://www.freshports.org/print/fontforge) has a FontForge port in its ports tree.
* [netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html) builds for various architectures (alpha, i386, ppc, sparc, x86\_64) are available.

## Don't miss an update!

Subscribe to the FontForge announcement list.
<form action="https://lists.sourceforge.net/lists/subscribe/fontforge-announce" method="POST">
Name: <input name="fullname" type="text"/><br/>
E-Mail Address: <input name="email" type="text"/><br/>
<input type="hidden" name="pw" value=""/> <input type="hidden" name="pw-conf" value=""/> <input type="hidden" name="digest" value="0"/>
<input type="Submit" name="email-button" value="Subscribe"/>
</form>

You can also subscribe to the [user](https://lists.sourceforge.net/lists/listinfo/fontforge-users) and [developer](https://lists.sourceforge.net/lists/listinfo/fontforge-devel) lists.

## Making it better

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="WARQFUKEGTWQC">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

