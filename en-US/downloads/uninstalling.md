---
published: true
layout: default
title: How To Uninstall FontForge
---

Mac OS X
--------------

Move the FontForge.app in your Applications folder to the Trash.  

Windows
----------------

Go to Start, Programs, FontForge, Uninstall and run the uninstaller.

GNU+Linux
-------------

If you installed from source to /usr/local (the default) then you may type:

>     $ su
>     password:
>     $ rm -rf /usr/local/bin/{fontforge,sfddiff,fontimage,fontlint} \
>     /usr/local/lib/{libgdraw,libgunicode,libuninameslist,libspiro,libfontforge,libgutils,libgioftp}* \
>     /usr/local/lib/pkgconfig/fontforge.pc \
>     /usr/local/man/man1/{fontforge,sfddiff,fontimage,fontlint}.1 \
>     /usr/local/share/doc/fontforge \
>     /usr/local/share/fontforge \
>     /usr/local/share/locale/*/LC_MESSAGES/FontForge.mo \
>     /usr/local/include/fontforge

If you installed from a package manager, use the package manager commands.
