---
published: true
layout: default
title: How To Uninstall FontForge
---

Mac OS X
--------------

Open Terminal and copy and paste this command, then hit Enter:

>     sudo rm -rf /usr/local/bin/{fontforge,sfddiff,fontimage,fontlint} \
>     /usr/local/lib/{libgdraw,libgunicode,libuninameslist,libspiro,libfontforge,libgutils,libgioftp}* \
>     /usr/local/lib/pkgconfig/fontforge.pc \
>     /usr/local/man/man1/{fontforge,sfddiff,fontimage,fontlint}.1 \
>     /usr/local/share/doc/fontforge \
>     /usr/local/share/fontforge \
>     /usr/local/share/locale/*/LC_MESSAGES/FontForge.mo \
>     /usr/local/include/fontforge \
>     /Applications/FontForge.app;

Windows
----------------

You should find an "Uninstall" shortcut in the Start Menu. 

If not (perhaps you are on cygwin):

>     $ rm -rf /usr/local/bin/{fontforge,sfddiff,fontimage,fontlint} \
>     /usr/local/lib/{libgdraw,libgunicode,libuninameslist,libspiro,libfontforge,libgutils,libgioftp}* \
>     /usr/local/lib/pkgconfig/fontforge.pc \
>     /usr/local/man/man1/{fontforge,sfddiff,fontimage,fontlint}.1 \
>     /usr/local/share/doc/fontforge \
>     /usr/local/share/fontforge \
>     /usr/local/share/locale/*/LC_MESSAGES/FontForge.mo \
>     /usr/local/include/fontforge

GNU+Linux
-------------

If you installed in /usr/local (the default) then you type either:

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

If you've installed to a different prefix (/usr perhaps) then simply
substitute /usr for /usr/local above.
