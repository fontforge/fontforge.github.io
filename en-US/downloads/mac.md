---
published: true
layout: downloads
title: Install FontForge on Mac OS X
contenttype: application/zip
---

FontForge is not a regular Mac application.
It was developed since 2001 as a UNIX application, so don't expect it to look and behave like a normal Mac Application.
It runs on Macs thanks to XQuartz, a X11 graphics compatibility layer.

## How To Install 

First you need to install XQuartz:

1. With Finder, look in your `/Applications/Utilities/` folder and check if you have the `X11` or `XQuartz` apps installed on your computer.
2. If you don't have one of these, [download XQuartz](http://xquartz.macosforge.org)
3. Install it in the normal way
4. Log out and log back in to ensure it works correctly
5. Start XQuartz or X11 from `Applications/Utilities/`, go to X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` preference item.

![X11.app Preferences Window set correctly](../x11prefs.png)

Then install FontForge:

1. [Download 2014-11 Release App (.zip)](https://github.com/fontforge/fontforge/releases/download/20141126/FontForge-2014-11-26-Mac.zip)
2. Unzip it, move the `FontForge.app` file to `/Applications` - **do not move it anywhere else**
3. Right Click (or hold the `Command` key and click once) and choose `Open` from the menu, and confirm you want to open the app
4. You may see a dialog box saying "Choose Application. Where is X11?" with a sort of Finder window. Find XQuartz in `Applications/Utilities` and click OK
4. Be patient while it runs a first-time setup process
5. Next time, see it open fast and in the normal ways - double clicking it, drag it to the dock, using Launcher, Spotlight or Quicksilver...

### Daily Development Snapshots

New development versions are released every few days, and the latest is always available as [FontForge_latest-HEAD.app.zip](http://fuuko.libferris.com/osx/packages/FontForge_latest-HEAD.app.zip).

To install an update:

1. quit FontForge and X11
2. drag and drop the new FontForge.app into `/Applications` and replace it
3. start FontForge again

### If things go wrong

If you have any problems with installation or upgrading, create a [Github Issue](https://guides.github.com/features/issues/) to discuss with our community.

## Installing from Package Managers

These Mac package managers all have FontForge:

* [Homebrew](http://www.brew.sh) (recommended)
* [MacPorts](https://www.macports.org/)
* [Fink](http://www.finkproject.org/)

## Building from source

Build with source using [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew install -v --debug fontforge --HEAD  --with-giflib --with-x11 --with-libspiro
```
If anything go wrong, just create a ticket for the package manager or try to use non-HEAD versions.

If you build from sources with Homebrew assistance, you may be lucky if you run

    ./configure && make -j3 && sudo make install;

(You'll need to have all the [dependencies](../source.html#Dependencies) already installed.)

## Advanced Configuration

To make FontForge more pleasant to use, you can change some aspects of the way it works on Macs. **These steps are optional.**

### Changing Hot Keys

If the hotkeys are unfamiliar, you can change them!

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/hotkeys/default`
3. change the hotkeys and save the file
4. start FontForge again

### Changing UI Size

If the UI appears very big or very small, you can change the way the UI is sized.

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/pixmaps/resources`
3. measure the physical width of your screen in centimeters. In this example, it is 34cm wide.
4. add a new line, `Gdraw.ScreenWidthCentimeters: 34` and save the file
5. start FontForge again
6. if the scaling is still not right, play with the value until it is

### If you use a three-button mouse

FontForge is designed to make use of a three button mouse. It is also designed to make use of modifier keys on mouse clicks (eg, Control-left-click can mean something different than left-click.)

If you have a standard one button mouse, then you have the option of having the Mac simulate a three button mouse (for instance Option-left-click behaves like clicking the middle mouse button). Unfortunately this means you can no longer use the Option key to change the behavior of the left (only) button click. To enable this, click the XQuartz app in the Dock, and then go to X11 menu in the top left, Preferences, Input, and turn on `Emulate three button mouse`

If you have a two or three button mouse, then use it (and turn off `Emulate three button mouse` in the X11 preferences.)
