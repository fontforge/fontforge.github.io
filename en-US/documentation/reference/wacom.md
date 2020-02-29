---
published: true
layout: default
title: Wacom graphics tablets and FontForge
---

Some support was added to FontForge for the wacom graphics tablet in the early 2000s.

To install a wacom tablet on your (gnu+linux) machine you must do two
things:

-   Install a kernel module "wacom.o" into your system
     Unfortunately the module which ships with gnu+linux (Nov 2002) does not
    work but John Joganic has [an excellent
    website](http://linuxwacom.sf.net/) that will help you install a
    working driver.
-   Install an X11 driver "wacom\_drv.o"
     Again the X11 driver that ships with X does not work for USB
    tablets. Again John's website provides a patched driver.

If you can't get the X11 driver to work, I have hacked a little
mini-driver into FontForge (this can take the place of the X11 driver,
it depends on the kernel driver working). Since the configure script
can't detect that you have a non-working X11 driver on your machine (or
a tablet) you must configure this option by hand. So after the normal
configure script has run (and before typing make):

>     $ su
>     # chmod 644 /dev/input/event0
>     # ^D
>     $ cd gdraw
>     $ vi Makefile

Add `gdrawwacomdriver.lo` to the list of `libgdraw_OBJECTS` And add
`-D_WACOM_DRV_BROKEN` to `CFLAGS`.
