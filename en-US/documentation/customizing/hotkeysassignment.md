---
published: true
layout: default
title: HotKeys assignment
---

## Changing the assignment of Hot Keys

FontForge has a [default assignment of hot key](/en-US/documentation/interface/hotkeys) (menu shortcuts, whatever term you wish to use). This assignment can be difficult to use on non-English keyboards. Even users with English keyboards might find reasons to disagree with it. So FontForge allows you to redefine the hot keys. This is done using a gettext mechanism, but in a different pot file from the normal set of translation strings (which means it uses a different gettext "text domain").

The hot key pot file is called: **FontForge-MenuShortCuts.pot**

On the Mac, FontForge allows for two different key bindings. X11 can be configured to pass the command key on to FontForge, or X11 may use the command key in its own menubar. If FontForge doesn't get the command key then it will do normal processing using normal keybindings. Otherwise FontForge will first look for a file called Mac-FontForge-MenuShortCuts.po if this is found (and if it rebinds the string "Flag0x10+" (which should become "Cmd+" -- or whatever is appropriate in your language)) then it will be used. Otherwise it falls back to normal processing.

This file consists of a sequence of entries that look like:

```
#: bitmapview.c:1720 charview.c:7833 charview.c:9079 fontview.c:6521
msgid "New|Ctl+N"
msgstr ""
 
#: bitmapview.c:1721 charview.c:7834 charview.c:9080 fontview.c:6525
msgid "Open|Ctl+O"
msgstr ""
 
#: bitmapview.c:1723 charview.c:7836 charview.c:9082 fontview.c:6527
msgid "Close|Ctl+Shft+Q"
msgstr ""

#: bitmapview.c:1729 charview.c:7842
msgid "Export...|No Shortcut"
msgstr ""

#: fontview.c:7798
msgid "Help|F1"
msgstr ""
```

Each entry (msgid) is formatted as follows

*   First is the command name as it appears in the (English) menu.
*   Then there is the special character "\|" which separates the command name from the hot key specification.
*   Then a list of key modifiers separated by "+"
*   And finally the key itself

So in the first example above `New|Ctl+N` means that this is the hot key for the New command, and that the default definition of that hot key is Control N.

Modifier lists can be more complex `Close|Ctl+Shft+Q` means that the hot key for the Close command is Control Shift Q.

Not all commands have hot keys in the default assignment, but since some users might want to assign keys to them they still have entries. Thus `Export...|No Shortcut` means that the Export command has no shortcut (no hot key) in English.

It is also possible to use keys with no modifiers. Generally you will not want to do that for a normal, alphabetic key, but for special keys, like the function keys, it is perfectly acceptable. `Help|F1` means that the Help command is bound to the first function key.

* * *

So that's what the msgid field means. The above information describes the default key bindings. You want to know how to change them. The format is almost the same (the only exception is that you will not include the command name nor the "\|" separator), but you need to change the msgstr field.

Suppose that you wanted to remove the shortcut for the open command, and add one to the Export command: You might create a po file which looks like:

```
#: bitmapview.c:1721 charview.c:7834 charview.c:9080 fontview.c:6525
msgid "Open|Ctl+O"
msgstr "No Shortcut"

#: bitmapview.c:1729 charview.c:7842
msgid "Export...|No Shortcut"
msgstr "Alt+Cntl+Shft+E"
```

NOTE: **Omitting a string will not remove the shortcut**. Instead FontForge will use the default shortcut. If you want to remove a shortcut you must add an explicit assignment to `"No Shortcut"`.

FontForge recognizes the following standard modifiers: `Alt+, Ctl+, Shft+, CapsLock+, Opt+` (the last corresponds to the Option key on the mac keyboard, `Cmd+` for the mac Command key **Note:** This can only be used by an X program if the X11 application does not appropriate it -- this can be configured in the X11 Preferences).

Some keyboards have additional modifier keys, X maps them to a flag bit in the keyboard state mask of the XKeyEvent. If you want to use these modifiers you need to know what that bit is. FontForge will also recognize:  
`Flag0x01+, Flag0x02+, Flag0x04+, Flag0x08+,  
Flag0x10+, Flag0x20+, Flag0x40+, Flag0x80+`

The hot key itself should be entered in UTF-8\.

* * *

There are a few other strings in this file.

When FF displays a shortcut in the menu it will use a similar syntax.  
That may not be appropriate for non-English terminals. On a French system it might be better to show the Shift modifier as _Majuscule_. At the bottom of this file are several entries which are not used to set shortcuts but are used in displaying the shortcuts in the menu, thus

```
#: ../gdraw/gmenu.c:120
msgid "Shft+"
msgstr "Maj+"
msgid "Flag0x80+"
msgstr "AltGr+"
```

(These changes only affect what FontForge _displays_ in the menu. If you try to specify a keybinding as `msgstr "Ctl+Maj+E"` it will **NOT** work)

Even though not obvious from this file, it is also possible to add names for special keys. So you could add:

```
msgid "Escape"
msgstr "Échappe"
msgid "Delete"
msgstr "Efface"
```

The English names accepted for special keys are those defined under XK_MISCELLANY in keysymdef.h of the X11 header files -- without the initial XK_

* * *

You can obtain a `FontForge-MenuShortCuts.pot` file in pretty much the same way you [obtain a FontForge.pot file](/en-US/documentation/customizing/uitranslationnotes#Obtaining) -- download the source and then type:

```bash
$ cd fontforge/po
$ make FontForge-MenuShortCuts.pot
```

Again you will want to [rename this file before working on it](/en-US/documentation/customizing/uitranslationnotes#Modifying):

```
$ mv FontForge-MenuShortCuts.pot fr-MenuShortCuts.po
```

Then edit the file to insert your short cuts.

If you want to install your new short cuts:

*   First you need to compile it:
```
$ msgfmt -o fr-MenuShortCuts.mo fr-MenuShortCuts.po
```

    and create an "mo" file.

*   This file you will want to rename and move to the appropriate directory. If fontforge is installed in /usr/local/bin then you would say

```
$ sudo mv fr-MenuShortCuts.mo /usr/local/share/locale/fr/LC_MESSAGES/FontForge-MenuShortCuts.mo
```

The above example assumes you have FontForge installed in `/usr/local`. If you installed it elsewhere (`/usr` for instance) simply replace `/usr/local/share` with `/usr/share`, or whatever is appropriate.

Currently there are no examples of these files, and there is nothing in the Makefile to install them.

Creating a Mac file is similar. There is one example of this in the git repository under `mackeys/en.po`. It should be the same as the default key bindings except that the Control key has been replaced everywhere with the Command key. You can install it

```
$ mv en.mo /usr/local/share/locale/en/LC_MESSAGES/Mac-FontForge-MenuShortCuts.mo
```

