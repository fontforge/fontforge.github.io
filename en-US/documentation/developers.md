---
published: true
layout: default
title: FontForge Developer Documentation
---

## Bug reporting

To report a bug, please file an issue on [GitHub](https://github.com/fontforge/fontforge/issues), and give a precise description of what you expected, and what actually happens (or if you prefer, make a screencast of the series of actions that cause the crash, upload it and put a link to the video in the issue).

You can also run FontForge under the gdb debugger to get more informations about crashes, see [When Things Go Wrong With FontForge Itself](http://designwithfontforge.com/en-US/When_Things_Go_Wrong_With_Fontforge_Itself.html).

## Coding Style

Here is the current FontForge style guide that we use for Pull Requests:

1. Only one statement per line. This makes semi-automatic processing and reading of diffs much easier.
2. For booleans, use `stdbool.h`'s names `true` and `false` ([reference](https://github.com/fontforge/fontforge/issues/724)).
3. Indent `return` statements normally; don't put them at the left margin as in much existing code ([reference](https://github.com/fontforge/fontforge/issues/1208)).
4. Use POSIX/gnulib APIs in preference to glib, e.g. `strdup` instead of `g_strdup` and `xvasprintf` instead of `g_printf_strdup`. This minimizes the impact of non-standard types and functions, and simplifies memory management (glib-allocated memory needs freeing; non-glib-allocated memory is garbage-collected).

The Pull Request process itself is outlined in [our in-tree guidelines](https://github.com/fontforge/fontforge/blob/master/CONTRIBUTING.md#contributing-code).

## Interface

If you would like to work on a new interface, [Pencil](http://pencil.evolus.vn) is a useful tool for making mockups. We are also seeking
workforce in order to develop a new GTK-based UI.