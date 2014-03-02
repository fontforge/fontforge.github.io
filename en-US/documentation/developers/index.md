---
published: true
layout: default
title: FontForge Developer Documentation
---

# Development

## Building Fontforge from git

To build Fontforge from git, check out the [repository](http://github.com/fontforge/fontforge/) and read `.travis.yml`, which is a recipe for building it on Debian, Ubuntu and similar apt-based systems. For GNU systems with other package managers (e.g. Fedora and other yum-based systems), and for non-GNU systems, you'll have to install the dependencies appropriately.

TODO: Add and maintain Fedora, brew, Cygwin and Mingw recipes for installing dependencies.

## Bug reporting

To report a bug, please file an issue on [github](https://github.com/fontforge/fontforge/issues), and give a precise description of what you think should happen, and what actually does happen; or if you prefer, make a screencast of the series of actions that cause the crash, upload it somewhere (e.g. YouTube), and put a link to the video in the issue.

If you're able to build Fontforge from source, it's really helpful if you can find where the bug was introduced, using [`git bisect`](http://webchick.net/node/99), but don't worry if not.

# Interface

If you would like to suggest a new interface, http://pencil.evolus.vn is a useful tool for making mockups.

## Coding Style

TODO: Add a clear explanation of the FontForge coding style. 

Some elements of the style of existing code are not encouraged.

1. Only one statement per line. This makes semi-automatic processing and reading of diffs much easier.
2. For booleans, use `stdbool.h`'s names `true` and `false` ([reference](https://github.com/fontforge/fontforge/issues/724)).
3. Indent `return` statements normally; don't put them at the left margin as in much existing code ([reference](https://github.com/fontforge/fontforge/issues/1208)).
4. Use POSIX/gnulib APIs in preference to glib, e.g. `strdup` instead of `g_strdup` and `xvasprintf` instead of `g_printf_strdup`. This minimizes the impact of non-standard types and functions, and simplifies memory management (glib-allocated memory needs freeing; non-glib-allocated memory is garbage-collected).

#### Git Commit Messages

When committing changes, please follow the ['conventional-changelog' commit message guidelines](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md) so that we can easily generate a CHANGELOG file when making a release :)

When making a pull request on GitHub, please include the long description to the commit messages themselves, not only in the pull request.
