---
layout: default
title: Install FontForge on Mac OS X
---

FontForge does not conform to Apple's Human Interface Guidelines.
FontForge never will. Don't expect it to look like a normal Mac
Application. It doesn't. However, it does run on Macs.

Latest Package
---------------

First, you must look in your `/Applications/Utilities/` folder to check that 
you have the `XQuartz.app` installed on your system.
If you don't have it already, 
[download XQuartz](xquartz.macosforge.org) and install it in the normal way.

Next, download 
[FontForge.app.zip](http://fuuko.libferris.com/osx/packages/v13/MacFontForgeBundledApp.zip). 
Unzip it and move the `FontForge.app` file to /Applications. 
Then run it and it will appear in the Dock. It will automatically
start X11 (but the first time can take a while.) You will soon see 
the 'Open Font' window.

#### Screen Size Problems

If the UI appears very big, open 
`/Applications/FontForge.app/Contents/Resources/opt/local/share/fontforge/pixmaps/resources` 
with a text editor and change the value of the first line, 
`Gdraw.ScreenWidthCentimeters: 34`, to its true value.

### Improving the experience

You can make FontForge more pleasant to use by taking a moment to configure a few extra settings.

Click the XQuartz app in the Dock, and then go to X11 menu and open Preferences.

FontForge is designed to make use of a three button mouse. It is also
designed to make use of modifier key modes on mouse clicks (so Control
left click can mean something different than left click). If you have a
three (or two) button mouse then use it (and turn off
"`Emulate three button   mouse`" in the X11 preferences). If you have a
standard one button mouse then you have the option of having the mac
simulate a three button mouse (for instance Option mouse click behaves
like clicking the middle mouse button). Unfortunately this means you can
no longer use the Option key to change the behavior of the left (only)
button click. So either choice means you lose capabilities.

Normally X11 is configured so that the Command key (cloverleaf) is bound
to the X11 menu bar, and not to fontforge's. When fontforge starts it
checks this, and if X11 gets command then fontforge configures its
menubar to use Control rather than command. This isn't very mac-like. If
you turn **off** the "`Enable keyboard shortcuts under X11`" preference
item then fontforge will configure its menubar to make use of Command.

On the mac, the Option key is mapped to what fontforge calls "Alt" or
"Meta".

#### System Fonts

If you create a file in your home folder named `.fonts.conf` with the
following contents then fontforge's UI will be able to use the fonts 
Apple supplies with OS X.

>     <?xml version="1.0"?>
>     <!DOCTYPE fontconfig SYSTEM "fonts.dtd">
>     <!-- /etc/fonts/fonts.conf file to configure system font access -->
>     <fontconfig>
>
>     <!-- Font directory list -->
>     <!-- Add to system list -->
>
>             <dir>/System/Library/Fonts</dir>
>             <dir>/Library/Fonts</dir>
>             <dir>~/Library/Fonts</dir>
>
>     </fontconfig>

## Installing from Package Managers

Both
[macports](http://www.macports.org/) and
[fink](http://www.finkproject.org/) have FontForge packages
which you may like to use.
