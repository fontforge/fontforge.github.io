---
published: true
layout: default
title: How to build FontForge binary packages
---

Windows
-----------

Matthew Petroff documents [the Windows build process](http://www.mpetroff.net/software/fontforge-windows/) on his site.

Mac OS X 
-----------

FontForge binary builds for MacOS X 10.7 and 10.8 can be created with MacPorts. By default they will be built with a prefix of /opt/local. This is known to case weird problems for people already having MacPorts installed in /opt/local trying to install that package, because it will overwrite MacPorts-owned files. 

For this reason, please refrain from distributing binary packages built from a MacPorts installation with /opt/local as prefix. Instead, install a different MacPorts copy somewhere else (e.g., /opt/fontforge). The
guide has information on how to do this, see [MacPorts Manual section 2.3.2](http://guide.macports.org/#installing.macports). 