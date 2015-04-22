---
published: true
layout: downloads
title: Install FontForge on Mac OS X
contenttype: application/zip
---

FontForge is a UNIX application, so it doesn't behave 100% like a normal Mac Application and it needs XQuartz to run.

## Install

#### 1 Install XQuartz

* Do you have `XQuartz` app in your `/Applications/Utilities/`?
  * Yes. Skip down to configure XQuartz
  * No. Continue
* Download and install [XQuartz-2.7.7.dmg](http://xquartz.macosforge.org/downloads/SL/XQuartz-2.7.7.dmg)
* Log out and log back in to ensure it works (⌘⇧Q)

#### 2 Configure XQuartz

* Open XQuartz
* Open XQuartz preferences (⌘,)
* If checked, then uncheck `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` like shown below

![X11.app Preferences Window set correctly](../x11prefs.png)

#### 3 Install FontForge

* [Download](https://github.com/fontforge/fontforge/releases/download/20150330/FontForge-2015-04-07-Mac.app.dmg) the 2015-04-07 release
* Copy `FontForge.app` into `/Applications` - not anywhere else
* Open FontForge
* If asked, confirm that you want to open FontForge
* If asked where X11 is, then find and select XQuartz in `Applications/Utilities`

#### 4 Use FontForge

FontForge is now ready for you to use it like any other app.

![FontForge Mac Screenshot](../mac-running-fontforge.png)


## Tips + Help

When you run FontForge, the dock icon will disappear after it is launched.

Bring FontForge to the font by clicking the XQuartz icon or use ⌘+tab to switch to it.

If you have any problems with installation or upgrading, create a [Github Issue](https://guides.github.com/features/issues/) to discuss with our community.

## Other Sources

You can also install Daily Development Snapshots, install using Package Managers or build from source

#### Development Versions

New ones are released every few days and can be found as [FontForge_latest-HEAD.app.dmg](http://fuuko.libferris.com/osx/packages/FontForge_latest-HEAD.app.dmg).

#### Package Managers

These Mac package managers all have FontForge:

* [Homebrew](http://brew.sh) (recommended)
* [MacPorts](https://www.macports.org/)
* [Fink](http://www.finkproject.org/)

#### Build From Source

Build FontForge using [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew install -v --debug fontforge --HEAD  --with-giflib --with-x11 --with-libspiro
```

If anything goes wrong, just create a ticket for the package manager or try to use non-HEAD versions.

If you build from sources with Homebrew assistance, you may be lucky if you run

    ./configure && make -j3 && sudo make install;

(You'll need to have all the [dependencies](../source.html#Dependencies) already installed.)

## Advanced Configuration

To make FontForge more pleasant to use, you can change some aspects of the way it works on Macs.

#### Changing Hot Keys

If the hotkeys are unfamiliar, you can change them!

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/hotkeys/default`
3. change the hotkeys and save the file
4. start FontForge again

#### Changing UI Size

If the UI appears very big or very small, you can change the way the UI is sized.

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/pixmaps/resources`
3. measure the physical width of your screen in centimeters. In this example, it is 34cm wide.
4. add a new line, `Gdraw.ScreenWidthCentimeters: 34` and save the file
5. start FontForge again
6. if the scaling is still not right, play with the value until it is

#### If you use a three-button mouse

FontForge is designed to make use of a three button mouse. It is also designed to make use of modifier keys on mouse clicks (eg, Control-left-click can mean something different than left-click.)

If you have a standard one button mouse, then you have the option of having the Mac simulate a three button mouse (for instance Option-left-click behaves like clicking the middle mouse button). Unfortunately this means you can no longer use the Option key to change the behavior of the left (only) button click. To enable this, click the XQuartz app in the Dock, and then go to X11 menu in the top left, Preferences, Input, and turn on `Emulate three button mouse`

If you have a two or three button mouse, then use it (and turn off `Emulate three button mouse` in the X11 preferences.)
