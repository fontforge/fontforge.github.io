---
published: true
layout: downloads
title: Install FontForge on Mac OS X
contenttype: application/zip
---

FontForge is a UNIX application, so it does not look and behave like a normal Mac Application.
It runs on Macs thanks to XQuartz, a graphics compatibility layer for the UNIX X Window System.

## How To Install 

### 1. Install XQuartz

Without [XQuartz](http://xquartz.macosforge.org), FontForge will open a Dock icon but not load any further.

Open Finder and look in your `/Applications/Utilities/` folder for the `XQuartz` app. 

If you don't have it then download and install: **[direct link to XQuartz-2.7.7.dmg](http://xquartz.macosforge.org/downloads/SL/XQuartz-2.7.7.dmg)**

![X11.app Preferences Window set correctly](../mac-xquarz-1-installer.png)

![X11.app Preferences Window set correctly](../mac-xquartz-2-start.png)

![X11.app Preferences Window set correctly](../mac-xquart-3-finished.png)

Log out and log back in to ensure it works correctly

Just this first time, start XQuartz from `Applications/Utilities/XQuartz.app`, go to the X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` preference item. FontForge will start XQuartz automatically for you next time. 

![X11.app Preferences Window set correctly](../x11prefs.png)

### 2. Install FontForge

**[Download 2015-03-04 Release App (.dmg)](https://github.com/fontforge/fontforge/releases/download/20150228/FontForge.20150304.app.dmg)**

![Download files](../mac-download-files.png)

Open it and move the `FontForge.app` file to `/Applications` - **do not move it anywhere else**

![Move it](../mac-drag.png)

Right Click (or hold the `Command` key and click once) and choose `Open` from the menu, and confirm you want to open the app

![Right Click](../mac-open-2-right-click.png)

![Confirm](../mac-open-3-confirm.png)

You may see a dialog box saying "Choose Application. Where is X11?" with a sort of Finder window. Find XQuartz in `Applications/Utilities` and click OK

Be patient while it runs a first-time setup process

![Wait](../mac-first-time.png)

FontForge will create a new font and show you its glyphs in a table:

![First Run](../mac-running-fontforge.png)

Next time, it will open fast and in any typical way: double clicking it, drag it to the dock, using Launcher, Spotlight or Quicksilver...

### Tips

When you run FontForge, its dock icon will disappear after it is launched, because it is controlled by XQuartz. 

To bring fontforge's windows to the font, click the XQuartz icon, or use Alt+Tab to switch to it. 

### If things go wrong

If you have any problems with installation or upgrading, create a [Github Issue](https://guides.github.com/features/issues/) to discuss with our community.

### Other sources and versions

You can also install Daily Development Snapshots, install using Package Managers or build from source

New development versions are released every few days, and the latest is always available as [FontForge_latest-HEAD.app.zip](http://fuuko.libferris.com/osx/packages/FontForge_latest-HEAD.app.dmg).

To install an update:

1. quit FontForge and X11
2. drag and drop the new FontForge.app into `/Applications` and replace it
3. start FontForge again

#### Installing from Package Managers

These Mac package managers all have FontForge:

* [Homebrew](http://brew.sh) (recommended)
* [MacPorts](https://www.macports.org/)
* [Fink](http://www.finkproject.org/)

#### Building from source

Build with source using [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew install -v --debug fontforge --HEAD  --with-giflib --with-x11 --with-libspiro
```

If anything goes wrong, just create a ticket for the package manager or try to use non-HEAD versions.

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
