---
published: true
layout: downloads
title: Install FontForge on Mac OS X
contenttype: application/x-apple-diskimage
---

FontForge is a UNIX application, so it doesn't behave 100% like a normal Mac Application and it needs XQuartz to run.

Read either the short or detailed guide to get you started.

<a class="btn btn-default" data-toggle="collapse" href="#collapseBasic" aria-expanded="false" aria-controls="collapseBasic">
  Short Guide
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
  Detailed Guide
</a>

<div class="collapse" id="collapseBasic"><div class="well" markdown="1">
#### XQuartz
* Download and install [xQuartz](http://xquartz.macosforge.org/downloads/SL/XQuartz-2.7.7.dmg) if you don't already have it
* Open XQuartz
* Preferences (⌘,)
* If checked, then uncheck `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` like shown below

![X11.app Preferences Window set correctly](../x11prefs.png)

#### FontForge

* Download and install [FontForge 2015-04-30](https://github.com/fontforge/fontforge/releases/download/20150430/FontForge-2015-04-30-Mac.app.dmg) in `/Applications` - not anywhere else
* Open FontForge
* If asked where X11 is, then find and select XQuartz in `Applications/Utilities`
* FontForge is now ready for you to use it like any other app.
</div></div>

<div class="collapse" id="collapseDetail"><div class="well" markdown="1">
#### 1. Install XQuartz

Without [XQuartz](http://xquartz.macosforge.org), FontForge will open a Dock icon but not load any further.

Open Finder and look in your `/Applications/Utilities/` folder for the `XQuartz` app.

If you don't have it then download and install: **[direct link to XQuartz-2.7.7.dmg](http://xquartz.macosforge.org/downloads/SL/XQuartz-2.7.7.dmg)**

![X11.app Preferences Window set correctly](../mac-xquarz-1-installer.png)

![X11.app Preferences Window set correctly](../mac-xquartz-2-start.png)

![X11.app Preferences Window set correctly](../mac-xquart-3-finished.png)

Log out and log back in to ensure it works correctly

Just this first time, start XQuartz from `Applications/Utilities/XQuartz.app`, go to the X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` preference item. FontForge will start XQuartz automatically for you next time.

![X11.app Preferences Window set correctly](../x11prefs.png)

#### 2. Install FontForge

**[Download FontForge 2015-04-30](https://github.com/fontforge/fontforge/releases/download/20150430/FontForge-2015-04-30-Mac.app.dmg)**

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

## Tips

When you run FontForge, its dock icon will disappear after it is launched, because it is controlled by XQuartz.

To bring fontforge's windows to the font, click the XQuartz icon, or use Alt+Tab to switch to it.

</div></div>

## Problems?

If you have any problems with installation or upgrading, create a [Github Issue](https://guides.github.com/features/issues/) to discuss with our community.

## Other sources and versions

You can also install Daily Development Snapshots, install using Package Managers or build from source

<a class="btn btn-default" data-toggle="collapse" href="#collapseDev" aria-expanded="false" aria-controls="collapseBasic">
  Daily dev
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapsePkg" aria-expanded="false" aria-controls="collapseDetail">
  Pkg manager
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapseSrc" aria-expanded="false" aria-controls="collapseBasic">
  Source
</a>

<div class="collapse" id="collapseDev"><div class="well" markdown="1">
New development versions are released every few days, and the latest is always available as [FontForge_latest-HEAD.app.zip](http://fuuko.libferris.com/osx/packages/FontForge_latest-HEAD.app.dmg).

To install an update:

1. quit FontForge and X11
2. drag and drop the new FontForge.app into `/Applications` and replace it
3. start FontForge again
</div></div>

<div class="collapse" id="collapsePkg"><div class="well" markdown="1">
Installing from Package Managers

These Mac package managers all have FontForge:

* [Homebrew](http://brew.sh) (recommended)
* [MacPorts](https://www.macports.org/)
* [Fink](http://www.finkproject.org/)
</div></div>

<div class="collapse" id="collapseSrc"><div class="well" markdown="1">
Building from source

Build with source using [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew install -v --debug fontforge --HEAD  --with-giflib --with-x11 --with-libspiro
```

If anything goes wrong, just create a ticket for the package manager or try to use non-HEAD versions.

If you build from sources with Homebrew assistance, you may be lucky if you run

    ./configure && make -j3 && sudo make install;

(You'll need to have all the [dependencies](../source.html#Dependencies) already installed.)
</div></div>

## Advanced Configuration

To make FontForge more pleasant to use, you can change some aspects of the way it works on Macs. **These steps are optional.**

<a class="btn btn-default" data-toggle="collapse" href="#collapseHot" aria-expanded="false" aria-controls="collapseBasic">
  Hot keys
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapseUI" aria-expanded="false" aria-controls="collapseDetail">
  UI size
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapseMouse" aria-expanded="false" aria-controls="collapseBasic">
  3-button mouse
</a>

<div class="collapse" id="collapseHot"><div class="well" markdown="1">
If the hotkeys are unfamiliar, you can change them!

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/hotkeys/default`
3. change the hotkeys and save the file
4. start FontForge again
</div></div>

<div class="collapse" id="collapseUI"><div class="well" markdown="1">
If the UI appears very big or very small, you can change the way the UI is sized.

1. quit FontForge and X11
2. with your text editor, open `/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/pixmaps/resources`
3. measure the physical width of your screen in centimeters. In this example, it is 34cm wide.
4. add a new line, `Gdraw.ScreenWidthCentimeters: 34` and save the file
5. start FontForge again
6. if the scaling is still not right, play with the value until it is
</div></div>

<div class="collapse" id="collapseMouse"><div class="well" markdown="1">
FontForge is designed to make use of a three button mouse. It is also designed to make use of modifier keys on mouse clicks (eg, Control-left-click can mean something different than left-click.)

If you have a standard one button mouse, then you have the option of having the Mac simulate a three button mouse (for instance Option-left-click behaves like clicking the middle mouse button). Unfortunately this means you can no longer use the Option key to change the behavior of the left (only) button click. To enable this, click the XQuartz app in the Dock, and then go to X11 menu in the top left, Preferences, Input, and turn on `Emulate three button mouse`

If you have a two or three button mouse, then use it (and turn off `Emulate three button mouse` in the X11 preferences.)
</div></div>
