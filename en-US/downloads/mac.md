---
published: true
layout: downloads
title: Install FontForge on Mac OS X
archive_extension: ".dmg"
---

FontForge runs on Mac thanks to XQuartz which means it doesn't behave 100% like a normal Mac App. 
It is unsigned so it's easiest if your [GateKeeper](https://support.apple.com/en-us/HT202491) settings are set to 'anywhere'.

<a class="btn btn-default" href="https://github.com/andreaslarsen/fontforge-installer/releases/download/v0.6/FontForgeInstaller.dmg">
  FontForge Installer
</a> or 
<a class="btn btn-default" data-toggle="collapse" href="#collapseDetail" aria-expanded="false" aria-controls="collapseDetail">
  Manual installation
</a>

<div class="collapse" id="collapseDetail"><div class="well" markdown="1">
#### 1. Install XQuartz

Without [XQuartz](http://xquartz.macosforge.org), FontForge will open a Dock icon but not load any further.

Open Finder and look in your `/Applications/Utilities/` folder for the `XQuartz` app.

If you don't have it then download and install: **[direct link to XQuartz-2.7.7.dmg](http://xquartz.macosforge.org/downloads/SL/XQuartz-2.7.7.dmg)**

![X11.app Preferences Window set correctly](../mac-xquarz-1-installer.png)

![X11.app Preferences Window set correctly](../mac-xquartz-2-start.png)

![X11.app Preferences Window set correctly](../mac-xquart-3-finished.png)

Log out and log back in to ensure it works correctly

Just this first time, start XQuartz from `Applications/Utilities/XQuartz.app`, go to the X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` preference item. 
FontForge will start XQuartz automatically for you next time.

![X11.app Preferences Window set correctly](../x11prefs.png)

#### 2. Install FontForge

**[Download FontForge 2015-04-30](https://github.com/fontforge/fontforge/releases/download/20150430/FontForge-2015-04-30-Mac.app.dmg)**

![Download files](../mac-download-files.png)

Open it and move the `FontForge.app` file to `/Applications` - **do not move it anywhere else**

![Move it](../mac-drag.png)

Right Click (or hold the `Command` key and click once) and choose `Open` from the menu, and confirm you want to open the app

![Right Click](../mac-open-2-right-click.png)

![Confirm](../mac-open-3-confirm.png)

You may see a dialog box saying "Choose Application. Where is X11?" with a sort of Finder window. 
Find XQuartz in `Applications/Utilities` and click OK

Be patient while it runs a first-time setup process

![Wait](../mac-first-time.png)

FontForge will create a new font and show you its glyphs in a table:

![First Run](../mac-running-fontforge.png)

Next time, it will open fast and in any typical way: double clicking it, drag it to the dock, using Launcher, Spotlight or Quicksilver...
</div></div>

#### Design With FontForge

[DesignWithFontForge.com](http://designwithfontforge.com/) is a free online book to get you started with FontForge and typeface creation. 
It also has configuration tips and tricks to customize your installation and get the most out of FontForge on Mac.

#### Problems, ideas, contributions etc.

Create a [Github Issue](https://guides.github.com/features/issues/) to discuss with our community.

#### Other Sources

<a class="btn btn-default" data-toggle="collapse" href="#collapseDev" aria-expanded="false" aria-controls="collapseBasic">
  Dev Version
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapsePkg" aria-expanded="false" aria-controls="collapseDetail">
  Pkg Manager
</a>
<a class="btn btn-default" data-toggle="collapse" href="#collapseSrc" aria-expanded="false" aria-controls="collapseBasic">
  Build From Source
</a>

<div class="collapse" id="collapseDev"><div class="well" markdown="1">
Released every few days as [FontForge_latest-HEAD.app.zip](http://fuuko.libferris.com/osx/packages/FontForge_latest-HEAD.app.dmg). 

Follow the manual install guide above to install it.
</div></div>
<div class="collapse" id="collapsePkg"><div class="well" markdown="1">
These Mac package managers have FontForge:

[Homebrew](http://brew.sh) (recommended), [MacPorts](https://www.macports.org/)
and [Fink](http://www.finkproject.org/)
</div></div>
<div class="collapse" id="collapseSrc"><div class="well" markdown="1">
Use [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew install -v --debug fontforge --HEAD  --with-giflib --with-x11 --with-libspiro
```

If anything goes wrong, just create a ticket for the package manager or try to use non-HEAD versions.

Building from sources with Homebrew assistance, you may be able to run:

    ./configure && make -j3 && sudo make install;

(You'll need to have all the [dependencies](../source.html#Dependencies) already installed.)
</div></div>
