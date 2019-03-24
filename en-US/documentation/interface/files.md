---
published: true
layout: default
title: Files used by FontForge
---


\~/.FontForge

FontForge creates this directory the first time it starts up. It
contains various files FontForge uses to hold context across
invocations.

* * * * *

\~/.FontForge/prefs

This file contains user preference settings.

\~/.FontForge/groups

This file contains groups as defined by Encoding-\>Define Groups...

\~/.FontForge/Encodings.ps

If there are any user defined encodings they reside in this file.

\~/.FontForge/autosave

This directory contains the files used to drive the crash-recovery
process. When FontForge is running there will be one file in this
directory corresponding to each font loaded into FontForge that has been
modified. These files will contain all changed glyphs.

When FontForge exits normally, this directory will be cleaned up and
there should be no files in it.

\~/.FontForge/plugins

This directory contains any [plugins](../../developers/plugins/) you want available
for your private use.

\~/.FontForge/python

This directory contains any python init scripts you want to run when
FontForge starts

\~/.PfaEdit

Before Oct 2007 the .PfaEdit subdirectory was used instead of
.FontForge. After Oct 2007 if FontForge finds a .PfaEdit directory (and
no .FontForge directory) it will rename .PfaEdit to be .FontForge.

/usr/local/share -- Assuming you installed FontForge on /usr/local,
otherwise substitute \$PREFIX/share for "/usr/local/share" in the
following.

/usr/local/share/fontforge/\*.ui

These files contain translations of the ui for various locales. (used by
fontforge before November 2005)

/usr/local/share/locale/??/LC\_MESSAGES/FontForge.mo

Contain translations of the ui for various locales. (used after November
2005)

/usr/local/share/fontforge/\*.cidmap

"Encoding" files for Adobe's cid formats. [You can pull down a
compressed archive from here.](/assets/old/cidmaps.tgz)

/usr/local/share/fontforge/plugins

This directory contains any plugins you want available to everyone on
your system.

/usr/local/share/fontforge/python

This directory contains any python init scripts you want available to
everyone on your system.

/usr/local/share/doc/fontforge/\*.html

Optional location for online documentation. [You can pull down a
compressed archive from here.](source-build.html#Documentation)

-- [Prev](../cliargs/) -- [TOC](/en-US/tutorials/overview/) -- [Next](../../developers/src/) --
