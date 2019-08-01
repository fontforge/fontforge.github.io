---
published: true
layout: downloads
title: FontForge on GNU+Linux and other UNIXes
archive_extension: .tar.gz|.zip
---

Most of the GNU+Linux distributions have packages for fontforge, but these will often be a quite old.

### AppImage

Use the precompiled AppImage: [2019-08-01](https://github.com/fontforge/fontforge/releases/download/20190801/FontForge-2019-08-01-ac635b8-x86_64.AppImage)

### Ubuntu

Installing on Ubuntu is easy with our [Ubuntu PPA](https://launchpad.net/%7Efontforge/+archive/ubuntu/fontforge)

```sh
sudo add-apt-repository ppa:fontforge/fontforge;
sudo apt-get update;
sudo apt-get install fontforge;
```

### Compiling from Github

Check out [Building From Source](../source) for more information on using the bleeding edge.

### Installing from an rpm

Installing an rpm package is relatively straight forward.
You will need root access.
Download the RPM files on the [release page](https://github.com/fontforge/fontforge/releases)

Move to the directory containing the downloaded rpm, and then type

     rpm -i fontforge-*.rpm

If you've already installed fontforge and are updating an earlier version then you should type:

     rpm -U fontforge-*.rpm

## Other UNIX Systems

[netbsd](ftp://ftp.netbsd.org/pub/NetBSD/packages/pkgsrc/fonts/fontforge/README.html) builds for various architectures (alpha, i386, ppc, sparc, x86\_64) are available.

[Solaris](http://www.sunfreepacks.com/) packages for x86 by Apostolos Syropoulos

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

