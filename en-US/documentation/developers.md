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

## Contributing

Contributing to FontForge is done by forking the main [fontforge
repository](https://github.com/fontforge/fontforge) and creating
updates in your fork. When you are ready to send your changes to the
main fontforge repository create a pull request with your changes.

The Travis CI system is used to verify changes that a pull request
makes. The CI run will also build binary osx packages to allow members
of the FontForge team to quickly test out your changes. Because it is
a security risk to allow github forks access to secure variables you
have to push your branch into the main fontforge repository for binary
packages to be built. 

To have Travis CI build OSX packages, first create a branch with your username 
as the first part and push it to the main repository using the following setup:

   $ cat .git/config
   ...
   [remote "upstreampush"]
           url = git@github.com:fontforge/fontforge.git
   ...
   $ git push --verbose upstreampush johndoe/2014/aug/this-will-help-because-of-yyy

That will make a branch this-will-help-because-of-yyy in the
fontforge/fontforge repository which you can then create a pull
request from. Because that pull request is coming from the
fontforge/fontforge repository repository, Travis CI will allow secure
environment variables to be used and an OSX bundle will be created for
the pull request.

You can update your local branch, commit to it, and then run the above
to push that update upstream to your branch in fontforge/fontforge and
that will trigger another OSX bundle build.

Builds are synced over to the bigv server, currently at /tmp/bigvbase
though the base directory may change in the future. Relative to the
base directory you will see subdirectories of the form shown below. If
all has gone well you should see a FontForge.app.zip file in that
subdirectory which is around 60mb in size. If you have access to OSX
10.9.3 or later you can install that app.zip and test it out.

   2014-08-20-1664-0d986d9242da9e741d50c5f543faba2f37b7723d
   yyyy-mm-dd-PRnum-githash

## Travis SSH keys

Inside the tracis-scripts subdirectory you will see a encrypt-key.sh
script which can be used to marshal and carve up an SSH key to setup
Travis CI secure environment variables that allow the CI system to
reconstitute the SSH key.

Usage of encrypt-key.sh is as follows, where fontforge/fontforge is
the github repository that you want to encrypt the SSH key for.

   ./encrypt-key.sh the-ssh-private-key-filename fontforge/fontforge

The Linux and OSX Travis build scripts have been updated to
reconstitute the SSH key. See the travis-scripts/common.sh file for
how to easily use the key to upload information to the server.

## Building an OSX app bundle

There are two scripts to build an app bundle, which one you use will
depend on if you are using homebrew or macports on your OSX machine.
Both scripts aim to create a complete stand alone bundle of FontForge
and all the libraries, data files, and dependencies that it needs,
including Python.

The osx/create-osx-app-bundle.sh works on a macports machine whereas
the travis-scripts/create-osx-app-bundle-homebrew.sh script is for
homebrew. It is possible that these scripts will be merged into a
single script that can work on both platforms in the future.

For macports there is an osx/Portfile and for homebrew you might like
to see travis-scripts/fontforge.rb for changes. Both of these files
are geared to build current git master.

The osx/create-osx-app-bundle.sh script has been used since early 2013
to create the daily bundle for FontForge. Both the bundle scripts
expect to be run from the root directory of where FontForge was
compiled. For example, doing the below command to install fontforge on OSX:

sudo port -v -k install fontforge

and then move to
the/opt/local/var/macports/build/.../work/fontforge-2.0.0_beta1 and
run the ./osx/create-osx-app-bundle.sh script from that directory.

On homebrew you have to run the
travis-scripts/create-osx-app-bundle-homebrew.sh from the directory in
/private/tmp that homebrew uses to compile the FontForge source tree
at. Note that the bundle-homebrew.sh script is used on Travis CI to
build a bundle and has not been extensively tested outside that
environment.

In both cases you will see a new file at ~/FontForge.app.zip (or
perhaps a dmg in the future) which is the output from running the
create-osx-app-bundle script.

