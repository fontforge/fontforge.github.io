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
>     # prefix="/usr/local"
>     # rm -rf ${prefix}/bin/{fontforge,sfddiff,fontimage,fontlint} \
>     ${prefix}/lib/{libgdraw,libgunicode,libuninameslist,libspiro,libfontforge,libgutils,libgioftp}* \
>     ${prefix}/lib/pkgconfig/fontforge.pc \
>     ${prefix}/man/man1/{fontforge,sfddiff,fontimage,fontlint}.1 \
>     ${prefix}/share/doc/fontforge \
>     ${prefix}/share/fontforge \
>     ${prefix}/share/locale/*/LC_MESSAGES/FontForge.mo \
>     ${prefix}/include/fontforge

If you installed from a package manager, use the package manager commands.
