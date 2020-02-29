---
published: true
layout: default
title: Plugins in FontForge
---


FontForge supports a plugin mechanism for extending its functionality.

Plugins are shared libraries that can be loaded at runtime. When
fontforge starts up (actually, when it loads its preferences) it will
automatically load all files that look like shared libraries and that
live in the two directories:

-   `/usr/local/share/fontforge/plugins`
     (more precisely: `$(PREFIX)/share/fontforge/plugins`)
-   `~/.FontForge/plugins`

Most of what I once expected to do with plugins I now do with [python
scripts](../../scripting/python/#python-init-scripts).

Installing a one of my example plugins
--------------------------------------

Currently none of my pre-built packages contain any plugins. If you want
to play with them you must [grab a source
distribution](source-build.html), build it, and install it. Having done
that type the following:

>     $ cd plugins
>     $ make install

Creating your own plugin
------------------------

FontForge currently supports two types of plugins:

-   plugins which add a 2byte encoding
-   plugins which add a scripting command to the native scripting
    interface.

(Actually I suppose there is a third type. When it loads a plugin FF
calls an initialization routine. I suppose the plugin could just start
running and doing things without ever returning to fontforge).

I once expected to add

-   plugins which add new menu items

(but I did that in python instead).

When FontForge loads a plugin it calls a routine
`int FontForgeInit(void)`. This routine is responsible for registering
the plugin with FontForge, and then returning to allow FontForge to
continue. FontForge provides two registration routines:

`AddEncoding(char *name,int (*enc_to_uni)(int), int     (*uni_to_enc)(int))`

This registers a new encoding with the given name. You must supply two
functions, one which converts from the encoding to unicode, and the
other which converts from unicode to the encoding. **NOTE:**FontForge
has a slightly unconventional definition of an encoding. It is not
interested in byte streams, but in numbers. So if you have an 8/16
encoding (like EUC or SJIS) then the encoding of a character will be a
number between 0 and 65535. A single byte will be a number \<256, while
a double byte character will be a number like 0xa1a1.

This will return 0 if it failed (if you tried to replace a built in
encoding for example), 1 if it added the encoding, 2 if it replaced a
previous plugin with that name.

`AddScriptingCommand(char *name, void (*UserScriptFunc)(Context *),     int needs_font)`

This will add a new scripting command with the given name. If that name
is called then UserScriptFunc will be invoked with a Context (which
contains information like the arguments passed, the current font, and
into which you set the return value (if any) of your function). The
final argument indicates whether your command needs a font to be loaded
or not. (the command Open() does not need a font loaded. The command
Close() does).

This will return 0 if it failed (if you tried to replace a built in
scripting command for example), 1 if it added the command, 2 if it
replaced a previous plugin with that name.

You may register more than one thing in from `FontForgeInit`. For
example, many encodings have an EUC form and an ISO-2022 form and it
makes sense for one plugin to handle both.

`FontForgeInit` should return 1 if it succeeds, and 0 if it fails. If it
fails FontForge will dlclose() the library.

When you write your plugin you should include "plugins.h" from the
fontforge directory.

Look in the plugins subdirectory for an example on how to create, build
&
