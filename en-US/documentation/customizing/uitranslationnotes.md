---
published: true
layout: default
title: FontForge Translations
---


> **CASCA:** Ay, he spoke Greek.  
> **CASSIUS:** To what effect?  
> **CASCA:** Nay, an I tell you that, I'll ne'er look you i' the face again: but those that understood him smiled at one another and shook their heads; but, for mine own part, it was Greek to me.
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Julius Caesar, I, ii_, Shakespeare  
> 
> **CHAPLAIN:** ...legal matters and so forth Are Greek to me; except of course That I understand Greek.
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_The Lady's not for Burning, II_, Christopher Fry   

## User Interface Translation Notes  

FontForge uses a standard mechanism called gettext to provide translations of user interface strings into different language. Gettext is described profusely at the [gettext site](http://www.gnu.org/software/gettext/manual/), the following are some brief notes on what you need to know to translate FontForge's UI.

*   [Obtaining the strings](#Obtaining)
*   [Creating and Modifying a "po" file](#Modifying)
*   [Updating an already existing "po" file](#Updating)
*   [Testing a "po" file](#Testing)
*   Examples, [browse the git repository for the "po" directory](https://github.com/fontforge/fontforge/tree/master/po)
*   [Still more strings to translate!](#More)
*   [Different hot keys](#HotKeys)

<a name="Obtaining"></a>
## Obtaining the strings

In a gettext based package, the translatable strings live in a "pot" file. In FontForge's case it is called "FontForge.pot".

If Fontforge does not have already a translation for your language you will need to start with a new pot file.  This can be done using the latest version of FontForge found on [Github](https://github.com/fontforge/fontforge). Create a local git repository as described in the [section on building from source](https://github.com/fontforge/fontforge/blob/master/INSTALL-git.md). Having done that type

```bash
$ cd fontforge/po
$ make FontForge.pot
```

> The Bellman looked uffish, and wrinkled his brow,  
> `If only you'd spoken before!  
> It's excessively awkward to mention it now,  
> With the Snark, so to speak, at the door!'
> 
> `We should all of us grieve, as you may well believe  
> If you never were met with again-  
> But surely, my man, when the voyage began  
> You might have suggested it then?'
> 
> \`It's excessively awkward to mention it now  
> As I think I've already remarked.'  
> And the man they called "Hi!" replied with a sigh,  
> `I informed you the day we embarked.'
> 
> `You may charge me with murder- or want of sense-  
> (We are all of us weak at times):  
> But the slightest approach to a false pretense  
> Was never among my crimes!'
> 
> `I said it in Hebrew- I said it in Dutch-  
> I said it in German and Greek:  
> But I wholly forgot (and it vexes me much)  
> That English is what you speak!'
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_The Hunting of the Snark_, Lewis Carroll

<a name="Modifying"></a>
## Creating and Modifying a "po" file

You should now have a FontForge.pot file (if you don't, see the [above section](#Obtaining) on how to get one).

The pot file is in the same format as the "po" file which you need to generate. Simply rename FontForge.pot to the language/locale that you are working on. In most cases you will probably want to rename it just to the language

```bash
$ mv FontForge.pot fr.po
```

But sometimes that will not be enough. For example, Traditional and simplified chinese are sufficiently different that a locale must also be specified:

```bash
$ mv FontForge.pot zh_TW.po
```

Once you have created your po file it is time to start modifying it. We will use French as an example in the following, obviously you will need to make changes appropriate for your language.

The po file begins with some lines like:

```
# (American) English User Interface strings for FontForge.
# Copyright (C) 2000-2007 by George Williams
# This file is distributed under the same license as the FontForge package.
# George Williams, <pfaedit@users.sourceforge.net>, 2007.
#
#, fuzzy
msgid ""
msgstr ""
"Project-Id-Version: PACKAGE VERSION\n"
"Report-Msgid-Bugs-To: \n"
"POT-Creation-Date: 2017-05-02 14:40-0400\n"
"PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE\n"
"Last-Translator: FULL NAME <EMAIL@ADDRESS>\n"
"Language-Team: LANGUAGE <LL@li.org>\n"
"Language: \n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"Plural-Forms: nplurals=INTEGER; plural=EXPRESSION;\n"
```

You should change this to:

```
# (French) French User Interface strings for FontForge.
# Copyright (C) 2004-2007 by Pierre Hanser & Yannis Haralambous
# This file is distributed under the same license as the FontForge package.
#
#, fuzzy
msgid ""
msgstr ""
"Project-Id-Version: 20060821\n"
"POT-Creation-Date: 2006-08-19 07:32-0700\n"
"PO-Revision-Date: 2006-08-20 14:46+0100\n"
"Last-Translator: Pierre Hanser\n"
"Language-Team: French <LL@li.org>\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=>UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"Plural-Forms: nplurals=2; plural=n>1;\n"
```

Most of these are pretty self-explanatory. Fill in your name and email address where appropriate, and the date on which you last worked on the file. The plurals line is a little more complex, and we will describe it [later](#plurals).

Next there are thousands of string entries. They look something like this:

```
#: ttfinstrs.c:2184 typofeatures.c:1450 ../gdraw/gaskdlg.c:1076
#: ../gdraw/gaskdlg.c:1332 ../gdraw/gaskdlg.c:1391 ../gdraw/gfiledlg.c:152
#: ../gdraw/gmatrixedit.c:711 ../gdraw/gsavefiledlg.c:280
msgid "_Cancel"
msgstr ""
```

You should change these to:

```
#: ttfinstrs.c:2184 typofeatures.c:1450 ../gdraw/gaskdlg.c:1076
#: ../gdraw/gaskdlg.c:1332 ../gdraw/gaskdlg.c:1391 ../gdraw/gfiledlg.c:152
#: ../gdraw/gmatrixedit.c:711 ../gdraw/gsavefiledlg.c:280
msgid "_Cancel"
msgstr "_Annuler"
```

So the translation goes into the msgstr line. (The comment lines above indicate in what source files and on what lines the "_Cancel" string is used -- this information may be helpful if you want more information about context). If you don't want to translate a string just leave the msgstr as a null-string, and the English text will be used ("OK" seems to be left untranslated in many languages)

```
#: ttfinstrs.c:2184 typofeatures.c:1450 ../gdraw/gaskdlg.c:1076
#: ../gdraw/gaskdlg.c:1332 ../gdraw/gaskdlg.c:1391 ../gdraw/gfiledlg.c:152
#: ../gdraw/gmatrixedit.c:711 ../gdraw/gsavefiledlg.c:280
msgid "_OK"
msgstr ""
```

Some strings contain mnemonics. The mnemonic is preceded by an underscore.

That seems fairly straight forward. But there are always complications. Sometimes an English word might be translated by different French words depending on context. For example in French the English word "New" might be translated as either "Nouveau" or "Nouvelle" depending on the gender of the thing being created. In Japanese the word for the latin language is different from the latin script. So to disambiguate some strings a little bit of context information may appear before the actual string to be translated:

```
msgid "File|_New"
msgstr "_Nouveau"
```

or

```
msgid "Anchor|_New"
msgstr "_Nouvelle"
```

The context will be any text before an "\|". It should not be translated. Indeed both it and the "\|" should be completely omitted.

Finally we have the problem of <a name="plurals"></a>plurals. Suppose we have a string

```
msgid "%d Group"
```

We need to inflect the word "Group" depending on the number of groups we've got -- and each language has different rules.

Remember, at the beginning of the file there was a line:

```
"Plural-Forms: nplurals=2; plural=n>1;\n"
```

This says that this language has two plural forms, the singular form is used when there are 0 or 1 entries (n<=1), and the plural form is used for n>1 entries. That rule is correct for French. English looks like:

```
"Plural-Forms: nplurals=>2; plural=>n!=1;\n"
```

A language like classical Greek, which has a dual form, might look like

```
"Plural-Forms: nplurals=3; plural=n<=1?0:n==2?1:2;\n"
```

The expression is a c language expression. When there is a string that might be plural it has a slightly different form in the po file

```
#: groups.c:1558
msgid "%d Group"
msgid_plural "%d Groups"
msgstr[0] "%d Groupe"
msgstr[1] "%d Groupes"
```

Obviously, in a language with three forms there would be additional `msgstr[n]` entries.
<a name="Updating"></a>
## Updating an already existing "po" file

After a few months, you will probably find that some additional strings were added to FontForge, and you may want to update your original po file.

To do this, go to the po directory and type:

```bash
$ make FontForge-Update-po 1=fr
```
In this example (above), 'fr' is chosen to update po file 'fr.po'.

This will update your po file to contain any new strings for you to translate. It will also make guesses for these new strings. Some of these guesses are correct, some are very strange, so you will want to examine the guessed strings (they will be marked with the word "fuzzy" -- emacs has a mode that makes checking these easy).
<a name="Testing"></a>
## Testing a "po" file

Once you have completed your po file you will want to test it.

1.  You can test it by reconfiguring fontforge, and installing it

	```bash
	$ cd fontforge;
	$ ./bootstrap;
	$ ./configure;
	$ make;
	$ sudo make install;
	$ sudo ldconfig;
	```

2.  Or, if you want to do things manually:
    *   First you need to compile it:

        ```bash
		$ msgfmt -o fr.mo fr.po
        ```

        and create an "mo" file.

    *   This file you will want to rename and move to the appropriate directory. If fontforge is installed in /usr/local/bin then you would say

        ```bash
		$ mv fr.mo /usr/local/share/locale/fr/LC_MESSAGES/FontForge.mo
        ```

Then make sure your locale is set properly (and that your operating system has the support files it needs for that locale) and start fontforge. You should see your translation

```bash
$ LANG=fr_FR.UTF-8; export LANG
$ fontforge -new
```

![fontview in French](/assets/img/fontview.fr.png)

* * *
<a name="More"></a>
## Still more strings to translate!

FontForge has some strings that do not fit into the standard gettext mechanism. These are strings for which fontforge wants to know all translations at all times. For exampe the truetype 'name' table encourages designers to provide a translation for the stylistic variant of the font into as many languages as possible. So if you had a Bold font it would be nice if the 'name' table contained: An English entry, "Bold"; A French entry, "Gras"; A German entry, "Fett". To make this easier on the designer FontForge would like to have all translations of "Bold" built into it at all times, all translations of "Italic", "Condensed", and so forth.

There is a [table of the stylistic names](../fontstyles) FontForge recognizes on the Font Info page.

There is a second list of names for which FontForge would like multiple translations because these also appear in the 'name' table translated into as many languages as possible. These are the names of the mac's Feature/Setting strings, and they may be found on [Apple's Font Feature registry](http://developer.apple.com/fonts/Registry/index.html).

Finally I would like to make it as easy as possible to embed the [OFL](http://scripts.sil.org/OFL) into a font created by FontForge, and I would like to encourage its translation (And that of its accompanying FAQ) into as many languages as possible.

SIL regards translation as important but adds the following caveats (in their [FAQ](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&item_id=OFL-FAQ_web)):

> 
> SIL certainly recognises the need for people who are not familiar with English to be able to understand the OFL and this FAQ better in their own language. Making the license very clear and readable is a key goal of the OFL.
> 
> If you are an experienced translator, you are very welcome to help translating the OFL and its FAQ so that designers and users in your language community can understand the license better. But only the original English version of the license has legal value and has been approved by the community. Translations do not count as legal substitutes and should only serve as a way to explain the original license. SIL - as the author and steward of the license for the community at large - does not approve any translation of the OFL as legally valid because even small translations ambiguities could be abused and create problems.
> 
> We give permission to publish unofficial translations into other languages provided that they comply with the following guidelines:
> 
> - put the following disclaimer in both English and the target language stating clearly that the translation is unofficial:
> 
>      "This is an unofficial translation of the SIL Open Font License into $language. It was not published by SIL International, and does not legally state the distribution terms for fonts that use the OFL. A release under the OFL is only valid when using the original English text.
>
>      However, we recognize that this unofficial translation will help users and designers not familiar with English to understand the SIL OFL better and make it easier to use and release font families under this collaborative font design model. We encourage designers who consider releasing their creation under the OFL to read the FAQ in their own language if it is available.
>  
>      Please go to http://scripts.sil.org/OFL for the official version of the license and the accompanying FAQ."
> 
> - keep your unofficial translation current and update it at our request if needed, for example if there is any ambiguity which could lead to confusion.
> 
> If you start such a unofficial translation effort of the OFL and its accompanying FAQ please let us know, thank you.

[The text of the current version of the OFL](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&item_id=OFL_web). If anyone is interested in translation both the OFL and its FAQ [please let us know](https://github.com/fontforge/fontforge.github.io) (via an issue or a pull request). George Williams had intended to include these translations in the font's 'name' table, but he has been asked not to because of the possible legal ramifications.

At the moment (May 2017) OFL version 1.1-update 5 is the current version. The following [unofficial translations](../OFL-Unofficial) were collected.

* * *

## Changing the assignment of Hot Keys
<a name="HotKeys"></a>
FontForge has a default assignment of hot key (menu shortcuts, whatever term you wish to use). This assignment can be difficult to use on non-English keyboards. FontForge allows you to [redefine the hot keys](/en-US/documentation/customizing/hotkeysassignment).

* * *

#### Website Translation

Please refer to the [website translation](/en-US/site/) page for details.
