---
published: true
layout: default
title: FontForge Developer Documentation
---

# Crash Reporting

To report a crash, please make a screencast of the series of actions that cause the crash, upload it to youtube, and file an issue with a link to the video on youtube.

### Interface

If you would like to suggest a new interface, http://pencil.evolus.vn is a useful tool for making mockups.

### Coding Style

TODO: Add a clear explanation of the FontForge coding style. 

Some elements of the style of existing code are not encouraged.

1. For booleans, use `<stdbool.h>`'s names `true` and `false` ([reference](https://github.com/fontforge/fontforge/issues/724))
2. Indent `return` statements normally; don't put them at the left margin as in much existing code ([reference](https://github.com/fontforge/fontforge/issues/1208))

#### Git Commit Messages

When committing changes, please follow the [git commit message guidelines](http://git.kernel.org/?p=git/git.git;a=blob;f=Documentation/SubmittingPatches;hb=HEAD).

When making a pull request on GitHub, please include the long description to the commit messages themselves, not only in the pull request.
