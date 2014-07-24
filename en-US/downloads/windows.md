---
published: true
layout: default
title: Install FontForge on Windows
---

The [fontforgebuilds] project provides Windows builds along with the
MSYS buildsystem used to compile FontForge.

Althrough this project is hosted on SourceForge, please post eventual
bug report on our [GitHub repository].

## Building with Cygwin

FontForge also has an in-tree, cross-compiling build environment that
targets Cygwin, a POSIX compatibility layer for Windows.  
**Note:** we encourage to use MSYS as noted above instead of Cygwin.

You must download the [cygwin](http://www.cygwin.com/) environment. You
will need

-   the basic cygwin packages
-   the X11 package
-   the xterm package
-   binutils
-   the package containing gcc, make (probably called c compiler
    development or something)
-   You may want to download some additional optional packages to
    provide support for various image formats (See the
    [Dependencies](#Dependencies) section below).

**Caveat:**cygwin has a different approach to the file system than
Windows. A filename like `C:\windows\fonts\arial.ttf `will be called
`/cygdrive/c/windows/fonts/arial.ttf `under cygwin (backslashes are
replaced by slashes, and the initial drive "`C:`" becomes
"`/cygdrive/c`"

Having done that you should now be ready to build. Open a cygwin
terminal window and be prepared to type commands in it.

[fontforgebuilds]: http://sourceforge.net/projects/fontforgebuilds/
[GitHub repository]: https://github.com/fontforge/fontforge