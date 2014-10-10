---
published: true
layout: default
title: Install FontForge on Mac OS X
---

FontForge is not a regular Mac application. It was developed since 2001 as a UNIX application, so don't expect it to look and behave like a normal Mac
Application. It runs on Macs thanks to a X11 graphics compatibility layer called XQuartz.

## Install Beta packages for Mac OS X 10.6+

First you need to install the X11 compatibility system:

1. With Finder, look in your `/Applications/Utilities/` folder and check if you have the `X11` or `XQuartz` apps installed on your computer. 
2. If you don't have one of these, [download XQuartz](http://xquartz.macosforge.org)
3. Install it in the normal way
4. Log out and log back in to ensure it works correctly
5. Start XQuartz or X11 from `Applications/Utilities/`, go to X11 menu, Preferences, Input, and **turn off** the `Enable keyboard shortcuts under X11` or `Enable key equivalents under X11` preference item.

![X11.app Preferences Window set correctly](../x11prefs.png)

Then install FontForge:
1. Download this ZIP file: [FontForge.app.zip](http://fuuko.libferris.com/osx/packages/201410/07_1052/FontForge.app.zip) (release made on 2014-10-07)
2. Unzip it, move the `FontForge.app` file to `/Applications` and only there. **Do not move it anywhere else.**
3. If you use 10.8+, you may need to go to System Preferences, Security, unlock, and allow Mac apps from `Everywhere`. You can also right-click/double-tap on the icon, and click `Open` while holding down the `Command` key.
4. Open it in the normal way - double click it, drag it to the dock, use Launcher, Spotlight or Quicksilver...

### Update Beta Package

New beta packages are released every few days. [Check this directory](http://fuuko.libferris.com/osx/packages/) by date. To install an update:

1. quit FontForge and X11
2. drag and drop the new FontForge.app into `/Applications` and replace it
3. start FontForge again

### If things go wrong

The first time you run FontForge it may pop up a dialog box saying "Choose Application. Where is X11?" with a sort of Finder window. Find XQuartz in `Applications/Utilities` and click OK. 

If you have any problems with installation or upgrading, ask for help on the [FontForge Users](/) mailing list.

## Installing from Package Managers

These Mac package managers all have FontForge:
* [Homebrew](http://www.brew.sh) (recommended)
* [MacPorts](http://www.macports.org/)
* [Fink](http://www.finkproject.org/) 

## Building from source
You must ensure that you have the both the X11 server and the XCode
toolchain installed on your system. Normally you can just type
`./configure && make -j3 && sudo make install` and wait if you have
all the [dependencies](../source.html#Dependencies) ready.

### Building with Homebrew

Build with source using [Homebrew](http://www.brew.sh) in the normal way:

```Bash
brew install python
brew install gettext libpng jpeg libtiff giflib cairo pango libspiro czmq fontconfig automake libtool pkg-config glib pango
brew -v install fontforge --HEAD --with-cairo --with-czmq --with-gif --with-x --with-libspiro --with-pango --enable-pyextension --debug
```
If anything go wrong, just create a ticket for the package manager or try to use non-HEAD versions
(These versions are still outdated sourceforge releases on 2014-10-07.)

### Building for Older OS X

This process is slightly different
on OS/X 10.3 & 10.4.

__10.4__

-   Open the Install DVD that came with your system.
-   Scroll down to "Optional Installs" and open it.
-   Keep clicking `Continue` until you get to the pane "Custom Install
    on "Macintosh HD""
-   Press the arrow beside "Applications" so you get a list of them.
-   Select X11
-   Keep pressing `Continue`

    * * * * *

-   The Xcode toolchain is optional software on the install DVD. Simply
    insert the disk and click on the XCode install icon.

__10.3__

-   The X server lives in a package called X11User on the third install
    CD.
-   You must also install the X11SDK package on the XCode CD
-   And you must install the XCode tools themselves.

You may also want to install the [fink](http://fink.sourceforge.net/)
package which includes many useful libraries (see the
[dependencies](../source.html#Dependencies) section below for more info on this.)

You must then start up a Terminal window (the Terminal Application also
lives in the Utilities sub-folder of the Applications folder) and be
prepared to type commands in that window (I know, it's very
un-mac-like.)

#### Special note for building prior to 10.3

OS/X has evolved over time. Certain system calls have changed. The
current source distribution should work on any 10.3+ system.

If you wish to build on a 10.2 system you must say

>     $ ./configure --with-regular-link

(Rather than just saying `./configure`)

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

If you have a two or three button mouse, then use it (and turn off `Emulate three button mouse` in the X11 preferences). 
