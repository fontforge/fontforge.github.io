---
published: true
layout: default
title: How you can help with FontForge
---

-   *My writing leaves much to be desired*. Anyone who can make my
    documentation more readable is encouraged to do so. (or who wishes
    to translate it into other languages, or who wishes to put it into a
    more flexable format, KANOU has a [Japanese version](ja/index.html))

-   *I also have a brief tutorial in [pdf
    format](/assets/old/fontforge-tutorial.pdf) and in [html](editexample.html).*
    This could also be translated into other languages (and would be a
    simpler job than trying to translate the entire website). The html
    has been translated into [German](de/editexample.html) and
    [Chinese](http://edt1023.sayya.org/fontforge/editexample.html).

-   *The UI can be translated into different languages.* FontForge now
    uses gnu gettext. See the section on [translation
    notes](uitranslationnotes.html)for more info.
    -   English I take care of
        -   (I've even got an en\_GB file for those differences I've
            noticed between British & US spellings, but if anyone with a
            sharper eye finds other differences, please let me know)

    -   Russian is provided by [Alexandre
        Prokoudine](http://www.linuxgraphics.ru/), originally by Valek
        Filippov.
         Last Update Aug 2012
    -   Japanese is provided by KANOU Hiroki. (and has translated the
        entire website) This needs to be updated!
         Last Update Jul 2006
    -   French is provided by Pierre Hanser and Yannis Haralambous.
         Last update Nov 2007
    -   Italian was provided by Claudio Beccari, but I can no longer
        contact him. This needs to be updated!
         Last update Feb 2003
    -   Spanish is provided by [Walter
        Echarri](mailto:wecharri@yahoo.com) This needs to be updated!
         Last update Oct 2004
    -   Vietnamese is provided by [Clytie
        Siddall](http://vnoss.net/dokuwiki/doku.php?id=projects:l10n).
         Last update Apr 2010
    -   Simplified Chinese is provided by Lee Chenhwa
         Last update Jun 2012
    -   Traditional Chinese is provided by Wei-Lun Chao at
        [OSSII](http://opendesktop.org.tw/)
         Last update May 2012
    -   Wei-ju Wu has translated the tutorial into German
    -   Philipp Poll is providing a German UI.
         Last update Apr 2007
    -   Michal Nowakowski is constantly updating the Polish
        translation.
         Last update Jul 2012
    -   [Apostolos Syropoulos](http://obelix.ee.duth.gr/~apostolo/)is
        working on a Greek translation
         Last update Oct 2008
    -   Serhij Dubyk has provided a Ukrainian translation, his last
        update was May-2009.
         Then Yuri Chornoivan took it further.
         Last update Jul 2012
    -   Rafael Ferran i Peralta provided a Catalan translation.
         Last update Jun 2011
    -   Any other language additions would be great (the entire UI does
        not need to be translated, any subset is a help), if you are
        interested see the [translation notes
        here](uitranslationnotes.html).

-   You can take over a chunk of the code:
    -   Michal Nowakowski and Alexej Kyukov have taken over the auto
        instructor and auto hinter.

-   *Different font formats*  
    FontForge supports Type1, truetype, opentype, cff, type42,
    cid-keyed and svg fonts, also bdf and NFNT for bitmaps
    FontForge will sort-of accept metafont files (essentially it runs
    metafont and autotraces the result). It won't produce .mf files
    FontForge will read (but not produce) Ikarus files
    FontForge will read acorn font files with a helper app.
    But there are other formats out there that I can't find
    descriptions of or don't think are worth supporting
    -   Can you point me at documentation for other standards
    -   Can you explain why that format is useful?

-   *There are certain commands which don't work very well*and if
    someone else wanted to they might code them better than I...
    -   Remove overlap (has problems with coincident splines)
    -   Expand Stroke (has problems when there are sharp bends near the
        end of a contour (or near a joint where the slope is
        discontinuous) -- a sharp bend is one where the radius of
        curvature is smaller than half the stroke-width)
    -   Autokern (might be fixed now)
    -   Change Weight & Condense/Extend make assumptions about glyphs
        that aren't always true.

-   *References*
    -   I'd like to provide a reasonable bibliography, please suggest
        some good relevant books.
    -   Are there any other programs or websites that I should be
        mentioning?

-   *Tests*
    -   I've have a very [simplistic testsuite in the "test"
        subdirectory of the
        repository](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)--
        more to weed out crashes in the underlying engine, than to make
        sure it produces the right results. If anyone has a better idea
        for an automated suite, or would like to contribute tests to the
        current stuff, please let me know.

-   *QA*
    -   I don't.
         I find QA boring, and since no one is paying me for this I
        don't do very much (I generally run it past my testsuite from
        time to time). This is obviously a problem. If anyone (or
        several anyones) wants to undertake to do QA [for
        me](mailto:fontforge-devel@lists.sourceforge.net) I'd be
        delighted (this is a public mailing list).

-   *Printing tests*
    -   I'm always on the look out for short copyright free texts for
        printing. I'm looking for samples from languages I don't have
        anything on, or in styles that I don't have.
         I'm also interested in phrases equivalent to "The quick brown
        fox jumps over the lazy dog." (pangrams). These are short
        sentences which use every letter in the script.

-   *Indic information*
    -   Indic languages have a series of special ligature features in
        opentype. I believe that FontForge could probably generate some
        of these by default but I don't know enough to say which. If you
        are familiar with Indic scripts could you give me a list of
        conversions in a format like

        >     U+0066 + U+0069 => U+FB01 'liga'

-   [Donate to
    FontForge](http://sourceforge.net/project/project_donations.php?group_id=103338)


