---
published: true
layout: default
title: Changes to pfaedit (predecessor to fontforge)
---


[Current fontforge changes](../changelog/)
 [Older fontforge changes](../oldchangelog/)

-   1-Mar-2004
    -   The Check directions option of Find Problems caused multilayer
        mode to crash.
    -   Expand stroke would produce counter-clockwise paths when given
        an open contour and asked to fill it with a circular (or
        elliptical) pen
    -   Try to do a better job of guessing the correct direction of a
        path in an eps file (or a type3 or svg font)
    -   FontForge would crash when editing in the grid layer
    -   When the control key is down, make the scroll wheel do a
        magnify/minify.
    -   Various cosmetic changes to find problems
        1.  Specify that "nearness" is measured in em-units
        2.  change "refs deeper than" to "refs nested deeper than"
        3.  make check dir be on by default

    -   Put in more comments about fontforge. We now have a domain under
        [fontforge](http://fontforge.sf.net/), future releases will be
        found there.

-   29-Feb-2004
    -   FontForge could crash if given a bad 'cmap' subtable
    -   Clean up generation of OS/2 a bit
    -   Pass motion events to windows even when a dlg is active (so that
        the mouse location will be shown in an outline window when the
        Point info dlg is active).
    -   Put in a comment about changing to FontForge in the copyright
        notice the program prints at start up.
    -   The "preflight" script on the mac had problems if the program
        had never been installed before

-   27-Feb-2004
    -   Redid the way menus respond to arrow keys
    -   a multilayer enabled FontForge would crash when editing a normal
        font.

-   24-Feb-2004
    -   Remove the AddHint command and replace it with AddHHint and
        AddVHint.
    -   FontForge would crash when generating a mac family with NFNT
        bitmaps.
    -   Added support of exporting a character into PDF format.
    -   Oh dear, I was figuring out hintmasks in the wrong direction
        (because PS splines get reversed before output, so I now reverse
        them during the hintmask calculation too).
    -   At Werner's suggestion, added code to show what hints are
        currently active at a point.
    -   At Werner's suggestion added code to show what points are
        affected by a hintmask
    -   Added support for real editing of type3 (and svg) fonts. Support
        for editing stroked paths, different fill colors, multiple
        stroke/fill operations, etc. Because this involves a lot of
        extra overhead it is wrong for people who want to edit CJK
        fonts, so this mode is off by default. It may be turned on by

        >     $ configure --with-multilayer

    -   FontForge failed to interpret h/vstem3 commands properly when
        building a hintmask (when reading a type1 font with hint
        substitution)

-   11-Feb-2004
    -   FontForge would crash when saving a non-multi master font.
    -   Adding new scripting commands ClearCharCounterMasks,
        SetCharCounterMask

-   10-Feb-2004
    -   FontForge could produce bad tfm files.
    -   Added CheckForAnchorClass scripting command
    -   Added SetFontHasVerticalMetrics scripting command.
    -   FontForge would crash if asked to generate a contextual lookup
        which refered to a lookup which only was activated by a
        character(s) which was not worth outputting.
    -   FontForge did the wrong thing when evaluating the PostScript
        "index" command (it returned the wrong value from the stack
        (stack index off by one))
    -   Added support for the PostScript "for" loop.
    -   I have created a simple (1 axis) Multiple Master Type1 font with
        FontForge. It works with both ghostview and freetype.
    -   FontForge would crash when generating a ttf file from an sfd
        file which contain an invalid script/lang index. Put in code to
        warn user about this, and in some cases to correct it.
    -   FontForge had problems reading sfd files in the old point count
        format, this meant we still got bad point count errors.
    -   FontForge wrote bad sfd files if there were countermasks (all
        the contours of the glyph would be lost)
    -   I finally figured out why FontForge kept crashing when palettes
        were docked and an outline view was closed.
    -   Fixed various crashes in Interpolate fonts
    -   FontForge had problems with using subroutines to express
        references in PostScript (introduced 30-Jan)
    -   Added a new scripting commands AddHint and
        ReplaceCharCounterMasks.

-   4-Feb-2004
    -   Make it illegal to select both "Condense" and "Extend" in the
        mac style.

-   3-Feb-2004
    -   Point Info dlg crashed on the mac
    -   Add UI control over Mac Style through the Font Info dlg
    -   more prep work for mm fonts

-   2-Feb-2004
    -   Generating a postscript font from a database with quadratic
        splines didn't work
    -   FontForge crashed on a font with two /CharStrings entries
    -   Small tweak to menubar behavior given left/right arrow (for
        Werner)
    -   Composite glyphs created with seac (type1) had the wrong
        transformation for the accent.
    -   more prep work for mm fonts
    -   Still have problems with ttf point counts
    -   If a user loaded a ttf file and made it monospace and then
        generated it as ttf, all glyphs except the .notdef had an
        advance width of 0

-   1-Feb-2004
    -   sfd reader had a bug. Went into an infinite loop if a hintmask
        contained any of the characters [a-fA-F].

-   31-Jan-2004
    -   In Type2 output, when putting a glyph into a subroutine, if that
        glyph had no conflicts but had a hintmask fontforge produced a
        bad font (which crashed FontForge when it tried to read it in).
    -   configure script still wasn't working on solaris (or mac with
        libiconv probably)

-   30-Jan-2004
    -   The kerning state machine addition broke the indic state machine
        dialog
    -   The mac docs claim that the 'feat' table should be sorted by
        feature id. But if you do this WorldText can't find features.
        All Apple fonts seem to be sorted by the order the features are
        used in the 'morx' table's chains. WorldText works if you do
        this.
    -   Yannis proposed several extensions to the State Machine editor,
        most notably the ability to move the edit dialog with
        Up/Down/Left/Right buttons.
    -   I had the feature settings for Linguistic Rearrangement and
        Vertical Subs. reversed.
    -   In some cases I wasn't outputting anything to turn a feature
        off.
    -   Fixed many problems with kerning state machine dlg
    -   Fixed several problems with insertion state machines
    -   Fixed several problems with reading in state machines.
    -   Added SetMacStyle() to give the user control over how mac
        families are built.
    -   Added a fflush after doing Print()s in scripting
    -   FontForge would crash when given an extremely long real number
        in a cff dictionary (in this case the font itself was in error)
    -   FontForge did not copy a bitmap character's width when it copied
        the bitmap.
    -   Char Info didn't handle pairwise positioning properly.
    -   Some more pangrams from
        [http://shair.net/misc/txt/pangram.en](http://shair.net/misc/txt/pangram.en)
        (link provided by David Shaal)
    -   My old approach to hint substitution caused problems with
        multiple master fonts. So now I keep track of which points are
        substitution points and what the hint masks are at those points.
        There is a new command which will automatically figure out these
        points, and the user may control them directly through Point
        Info (Element-\>Get Info). At the same time I figured I might as
        well do the same thing for counter masks, so FontForge will read
        counter masks in from otf file (I did not implement this for
        type1s), there is a new command to try and make a guess as to
        what they should be, and the user may control them directly
        through Element-\>Char Info. (new scripting commands,
        SubstitutionPoints() and AutoCounter() do the obvious).
    -   Added a Hints-\>Don't AutoHint command to mark a character as
        having hints the user likes which should not be modified until
        the user explicitly calls AutoHint(). (and a matching scripting
        command).
    -   Added ability to control whether a PostScript font (type1&type2)
        is output with rounding.
    -   FontForge could generate a bad 'post' table for bitmap only
        fonts.
    -   FontForge didn't allow you to create two pairwise positioning
        items with the same tag.
    -   Hungarian names for mac features and for some standard names
        like "Bold", etc. provided by Laszlo Karoly.
    -   Pierre HANSER noticed that if FontForge mapped a single glyph to
        two encodings then bitmap generation through freetype got
        confused.
    -   If a font contained a non-.notdef character at encoding 0, then
        generating an opentype font from it had a fair chance of
        crashing.
    -   Added a couple of new select menu items: Select-\>Contours,
        Select-\>First Point, Next Contour
    -   Added a new sub-menu to allow ordering contours within a glyph.
        This is almost totally useless (the final look of the character
        should not be affected by the order in which the contours are
        drawn), but for multiple master fonts, the contour list must
        have the same ordering in corresponding glyphs.

-   11-Jan-2004
    -   A patch for reading broken mac tables got lost. I've reinstated
        it.

-   10-Jan-2004
    -   FontForge would crash when asked to use the truetype debugger on
        fpgm
    -   FontForge always coloured the background of debugger windows
        grey.
    -   The Points window did not show any points.
    -   Changed the Points window and the character view to show whether
        a point has a watch point set on it.
    -   Display the code range ('fpgm'/'prep'/Glyph) in the character's
        info line when debugging.
    -   When creating a 'fpgm'/'prep' table we created one with some
        garbage instructions in it.
    -   Somehow I neglected to put in a dlg for editing the 'cvt '
        table. This has been rectified.
    -   There was a bug in the postscript interpreter (the thing used
        for reading .eps files and type3 fonts) and transforming a point
        by a matrix with diagonal entries (rotation, skew, etc.) gave
        the wrong value.
    -   Added code to preserve more of the PS graphic state when eps
        file does a gsave
    -   Merge Fonts would crash when merging a font with references into
        an empty font
    -   I wasn't providing default values for width/weight classes in
        the OS/2 table
    -   The bitmap dlg could write one byte beyond the area allocated in
        some cases.
    -   Changed the outline character popup menu to include an Add
        Anchor Point entry
    -   The Ligature index wasn't correctly enabled in some cases.
    -   Add little arrows near the first point of each contour (in the
        outline character view) showing the direction of the contour.
    -   The mac's interpretation of the CFF spec is very picky, but
        correct. If a font contained no references then FontForge would
        generate an empty subroutine index. This is wrong. There should
        be no subroutine index, rather than an empty one. (Strangely,
        global subroutines have the reverse requirement. Stupid). Now if
        there are no references, then FontForge will not generate a
        local subroutine index.
    -   Yannis Haralambous has corrected the French UI.
    -   Three new scripting commands: AddAnchorClass, AddAnchorPoint,
        RemoveAnchorClass
    -   Show ATT did not show glyph classes properly.
    -   Made scripting dlg be resizable.
    -   Save As & Import dlgs looked bad in French. Various other
        improvements to make things look better on non-english systems.
    -   Added the ability to set the glyph class from Char Info.
    -   FontsInFile did not work on pfb files (nor on cff)
    -   Opening a mac resource file with multiple FONDs from a script
        would crash.
    -   In Font Info-\>TTF Names the languages now appear in unicode
        ordering no matter what the locale (used to be the langs were in
        alphabetical ordering for English, even if they were actually
        French)

-   2-Jan-2004
    -   More accurate round joints in stroking.
    -   Better approximations to splines which turn through 180 degrees
        or more
    -   Support for reading cff files.
    -   Yet more problems counting ttf points
    -   Update copyright notices.
    -   Add code to protect FontForge against reading bad Apple lookup
        tables (I think the Zapfino.dfont that ships with 10.3 has two
        bad lookups, but perhaps I just don't understand them).
    -   Try harder to avoid using 'DFLT' script when coming up with a
        default script for glyphs with no innate script.
    -   Add a Find Problems to detect 'DFLT'
    -   I've been generating bad Simple Positioning subtables for GPOS
        all along.
    -   Be pickier about what glyph names I let the user choose.
    -   On cygwin (perhaps elsewhere, but I was never able to find the
        bug elsewhere) if you invoked one command from the menu while
        another was still executing, then fontforge would probably
        crash.
    -   Support for reading and writing bare cff files.
    -   Build Accents crashed when asked to build accented chars for
        iacute, etc. in a font without dotlessi.

-   28-Dec-2003
    -   RemoveATT scripting command didn't work if the third argument
        were "\*"
    -   FontForge's clipping in the character view left something to be
        desired.
    -   Make Meta-Arrow move selected points by 10 times what Arrow
        would move them by.
    -   Grabbed the feature ordering for GPOS/GSUB specified on the
        [microsoft
        site](http://www.microsoft.com/typography/specs/default.htm) and
        taught it to FontForge.
    -   Change the Point Info dlg
        -   to allow the user to control the point type from there.
        -   to enforce constraints on control points (ie. the control
            points of a curve point must be in line with the point
            itself)
        -   by adding an alternated mode of entering data, by distance
            and angle (rather than just offset)

    -   Some MF fonts have glyph names with characters which aren't
        allowed in PostScript names
    -   FontForge failed to set widthset when it read in glyphs from a
        windows FNT (FON) file. This meant that some glyphs might be
        ignored.
    -   The context chaining dialog had a bad test for valid glyph names
        and complained about any name containing digits
    -   The histogram dlg would crash if the mouse moved across it when
        the window was so wide that it could contain more stem widths
        than were actually in use.
    -   Added three commands to the metrics view view menu to allow
        users to insert glyphs by name or encoding.
    -   Yannis points out that afm files produced on fonts with vertical
        metrics did not contain "WY" values (vertical advance width),
        also that the vkerns in the file actually contained the values
        of horizontal kerns.
    -   The 'kern' table did not contain pairwise vertical kerns (it did
        contain vertical kerning by class).
    -   The View-\>Substitutions sub menu of the metricsview was not
        being cleared properly if the current glyph had no
        substitutions.
    -   Yannis wants the View-\>Substitutions menu to have a way to
        return to the original glyph.
    -   Yannis points out that the metricsview in vertical mode changed
        the top side bearing in an unexpected way. Also the vertical
        advance width did not refresh the display properly.
    -   Thanks to David Opstad, I now have an example of a format 1
        kerning table and have extended FontForge to support kerning by
        state machine.
    -   The code for generating and loading otb (OpenType bitmap) fonts
        was broken.
    -   And the code for generating my own weird bitmap only fonts for
        windows had some flaws too (different flaws).
    -   If I typed a character into a fontview (or char view) and the
        font did not contain the character, fontforge would not select
        that slot that encoded the character, even if the character was
        in the encoding.
    -   When loading a ps type3 font, make sure that the glyph name is
        available when parsing glyphs so we can produce reasonable error
        msgs. (mostly this means "Spline stroke is too big"
    -   Only generate Spline stroke too big errors once per font.
    -   Adam Goode tells me that the format 12 (32bit unicode) cmap was
        wrong, and provided a patch to fix it.
    -   Pretty much rewrote the stroking command from scratch.
    -   Merge fonts would crash when merging in a font containing either
        a ligature caret or a nested lookup.
    -   Made FontForge cognizant of the proposed unicode dotlessj
        character (0237), it will now use either this or the dotlessj in
        adobe's private use area (depending on which is in the font)
    -   FontForge would crash when trying to build an accented character
        based on inverted breve in pala.ttf

        -   It wrongly considered pala.ttf to be slightly italic
            (.0005°)
        -   It would crash when doing this in an italic font

        * * * * *

    -   When importing postscript (type3 fonts, eps files)
        counter-clockwise paths which are both stroked and filled cause
        problems
    -   Changed the version stamp of otb fonts from 'OTTO' to 1.0

-   10-Dec-2003
    -   When there were multiple features with the same tag (different
        scripts with 'kern' for instance) FontForge would produce
        multiple copies of the same lookup instead of different lookups.
    -   FontForge was not setting the right to left lookup flag bit
        properly for hebrew (and presumably arabic) kerning
    -   Remove overlap was coalescing some splines that it should not
        have.
    -   Typo in expand stroke meant that some round line joins were
        really weird

-   5-Dec-2003
    -   When changing the ascent/descent with fontinfo or scaletoem some
        of the OS/2 fields did not get updated properly.
    -   The OS/2 TypoDescent field was set positive instead of negative.
    -   Added two scripting functions SetTTFName and GetTTFName to give
        scripts access to the truetype names as well as the PS ones
    -   Patch from Kazuyuki. SetPanose didn't work when argument was an
        array.
    -   New French translations from Pierre
    -   \$copyright didn't return the correct thing (Patch from Giuseppe
        Ghibo)
    -   Kerning pair data for non-ASCII unicode characters did not get
        output properly into SVG fonts
    -   The AddATT scripting command did not add ligatures correctly
        leading to problems when time came to generate a font.

-   23-Nov-2003
    -   FontForge would crash if given an encoding for the locale which
        it didn't understand
    -   Center/Thirds in width from the font view would change the width
    -   There was a synchronization problem and the truetype debugger
        window could deadlock
    -   FontForge failed to read a Contextual (but not Contextual
        chaining) Coverage lookup properly.

-   10-Nov-2003
    -   FontForge was crashing when loading a bitmap font with encoded
        characters outside the range specified by the encoding (ie. a
        character 0x10000 in a unicode BMP font).
    -   Fixes for several memory leaks provided by Kazuki Ohta
    -   Slight improvements to the View-\>Combinations-\>Ligature dlg

-   8-Nov-2003
    -   Bug introduced 6-Nov, FontForge generated a bad 'loca' table
        when outputting a ttf outline font with bitmaps.
    -   FontForge was getting the truetype point number wrong when
        reading outlines from an sfd file.
    -   If the loca table was 2 or 4 bytes long, FontForge failed to
        warn about a bad glyph count.
    -   FontForge got confused if two truetype glyphs had the same name.
    -   When dumping out embedded ttf bitmaps, FontForge got confused by
        the extra glyphs (.null and return) and generated garbage.
    -   Make View-\>Combinations-\>ligature dlg a bit better for
        non-latin glyphs

-   6-Nov-2003
    -   The clut used for drawing anti-alias bitmaps in the metrics view
        was wrong.
    -   In a bitmap only ttf file, FontForge was usually producing bad
        line spacing data as far as the mac was concerned.
    -   When importing bitmaps into an empty font, we might as well
        change to font view to show the bitmaps rather than the empty
        outline data.
    -   If glyph 0 was selected in the fontview then the File-\>Open
        Outline command was disabled.
    -   With a user defined encoding we were again getting occasional
        crashes. (introduced by my work on bitmaps)
    -   On certain glyphs, the optimizer introduced an slight error when
        calculating a spline's coefficients from its control point. Even
        though this error was on the order of 7e-8 it was enough that
        the rasterizer produced grossly incorrect results. I have pulled
        the relevant routine out into its own file which is now compiled
        by itself without optimization.

-   4-Nov-2003
    -   When FontForge removes glyphs with Font Info-\>Encoding-\>Number
        of characters, it will now run through the font and remove any
        ligatures, substitutions, etc. refering to non-existent glyph
        names.
    -   Some improvements to remove overlap.
    -   Added a warning message so that when user attempts to output a
        ttf file where no characters have unicode encodings, then the
        user at least gets warned that the result will probably not
        work. For fonts with fewer than 256 glyphs it will offer the
        choice of a symbol encoding.
    -   If a reference were copied in the outline character view and
        pasted into the font view, fontforge would crash.
    -   the expand stroke patch on 29-Sept broke calligraphic and
        ellipse modes.
    -   The mouse's scroll wheel did not work in the metrics view.
    -   The metrics view resized very slowly under window managers which
        do continuous resizing.
    -   Give the magnifying glass's rectangle mode a threshold so that
        it doesn't resize tiny rectangles which are really caused by
        mouse jitter.
    -   Attempt to set a zoom size for character and bitmap windows, but
        modern window managers don't seem to support the old protocol,
        and I can't find docs on a new version.
    -   Was not converting filenames to unicode properly for the
        open/generate progress dlgs.
    -   FontForge would crash when attempting to draw a character for
        which in had no (X11) glyph when doing bidirectional text.

-   29-Oct-2003
    -   When removing an ATT feature from a glyph using a script,
        FontForge would screw up memory. Leading to unpredictable
        results.

-   28-Oct-2003
    -   FontForge would crash when converting from cubic to quadratic
        splines in a script
    -   FontForge would leave a dangling pointer when converting from
        cubic to quadratic. This did not affect ttf generation, but
        would affect most other operations.

-   27-Oct-2003
    -   FontForge would crash when changing the encoding of a font with
        a .notdef character to a user defined encoding.
    -   If one had multiple ligatures for the same glyph with the same
        tag and script, FontForge would eat all but one of them.
    -   When generating most kinds of font, of a font which had
        ligatures containing glyph names that were not in the font, then
        FontForge would often screw up memory and eventually crash.

-   26-Oct-2003
    -   Simplify sometimes removed points at extrema even when it should
        not have
    -   If one had a ttf font (with instructions) and merged in a
        postscript font and then generated a ttf font, FontForge would
        complain about an internal error, but go on to produce a valid
        font. It should no longer complain.
    -   When generating fonts from a script, if the font were in
        compacted format the generated font would have a compact
        encoding (instead of the desired encoding).
    -   Kanou provided a patch to speed up importing bitmap fonts.

-   23-Oct-2003
    -   The change on the 20th to make custom encoding support 32bit
        unicode was incomplete and made custom encodings crash instead.
    -   The File-\>Display dialog ignored the left-sidebearing of a
        glyph causing output of some fonts to look awful.
    -   Was getting the AdobeStandardEncoding a bit wrong (after the
        5-Oct change to the new unicode glyph list which does not
        contain "fi" nor "fl")
    -   I used to set the "widthset" bit on .notdef characters, but
        there's really no point to that.
    -   Maxim Iorsh tells me that U+fb4f should be a historic ligature.
    -   On some displays right scrolling the Histogram dlg would leave
        black lines on the window.
    -   AutoHint removed too many stems from consideration as hints on
        some very bold fonts
    -   Make FontBBox of Type1 fonts be executable. Adobe says it
        doesn't have to be, but dvips expects it to be.

-   20-Oct-2003
    -   Windows XP & 2000 insist on having (what cygwin describes as)
        the execute bit of the file set. So FontForge now sets execute
        permissions on ttf, otf and pfb fonts on the cygwin platform.
    -   If a menu was so big that it had to be positioned over the
        menubar (instead of above or below it), and the user clicked on
        the menubar to invoke it, then the mouse release would go to the
        new menu and invoke whatever item happened to be under the
        cursor. Not good.
    -   Oops. The Effects sub-menu should have been disabled for
        quadratic (truetype) fonts.
    -   Added a new configuration option --with-regular-link to disable
        my dlopening of libraries. I dislike this. I don't think it is
        anywhere near as flexible as the dlopen method. It makes it much
        harder to ship something that will work with freetype (detecting
        whether the bytecode interpreter is present must be done at link
        time rather than run time and that is a severe disadvantage. But
        I have been asked for it.
    -   Change internal format so that custom encodings can handle 32
        bit unicode.

-   16-Oct-2003
    -   FontForge was still outputting a disordered name table.
    -   The source tarball on the website included many files twice and
        some files that it should not have included at all. I should now
        be less than half the size it used to be.

-   15-Oct-2003
    -   FontForge did not bother to open files in binary mode. If cygwin
        was configured with DOS linebreaks, then fontforge failed to
        generate valid font files on cygwin.

        * * * * *

    -   Added some more warnings to the default build list and fixed the
        problems they indicated.

-   12-Oct-2003
    -   Several bad bugs in last night's build (name table was (usually)
        all screwed up, conversion from PS to TTF got incorrect Internal
        Error msgs)
    -   Order tables in truetype output

        * * * * *

    -   My 5-Oct-2003 libpng fix broke it completely. Should now be
        refixed.

-   11-Oct-2003
    -   Another patch from Kanou to recognize encodings better in bdf
        files.
    -   Various memory fixes found by valgrind
    -   The Element-\>Find Problems-\>ATT-\>Missing glyph names fixup
        dlg had some formatting problems and failed to skip properly.
    -   Draw an "x" through encodings which do not map to glyphs
    -   If the user is in a compacted encoding and asks to print a font,
        then revert to the uncompacted encoding for the duration of the
        printing.
    -   View-\>Show ATT would show ligatures (and substitutions) even if
        some of the glyphs in the glyph list were missing.
    -   Fix a number of bugs found by the MS Font Validator
        -   I misunderstood (and the spec incorrectly documented) the
            behavior of the maxp table
        -   I had a typo in figuring out the OS/2 table

    -   I had one more case where I was computing the point count of a
        glyph incorrectly.
    -   Make the width line snap to zero when the user drags near it.

-   6-Oct-2003
    -   Give the Metrics View a vertical mode in which it does vertical
        kerning, etc.
    -   Add a hack to allow FontForge to parse a weird pfb file.

-   6-Oct-2003
    -   Fixed a number of bugs in the new kerning class dlg including:
        -   Vertical kerning classes were displayed horizontally
        -   When adding a new class the new offsets were garbage

    -   The routine to convert a horizontal kerning class to the
        equivalent vertical kerning class (of the vertical variants of
        the glyphs in the horizontal class) didn't work.
    -   In Back and Lookup Classes of a contextual chaining substitution
        by class, the [New] button was never enabled. (it was disabled
        if []SameAs was on, and then never enabled).
    -   My new 94x94 encodings were actually 93x93. Patch by kanou.

-   5-Oct-2003
    -   Got rid of GreekFixup and added Interpretations of encodings to
        FontInfo
    -   FontForge failed to output ligature substitutions nested under a
        context/chain sub
    -   If a font had more than about 5 nested ligatures, fontforge
        would screw up its memory and (likely) crash
    -   Fixed various problems pertaining to adding a kerning class to
        an empty font
    -   Add a runtime check for the case where the user's system has a
        dynamic libpng installed without libz
    -   If a character had ligature carets then FontForge could crash
        when determining its script
    -   FontForge was reading mac 'kern' format 3 incorrectly.
    -   Rewrote the Kerning class creation dialog. I hope it is clearer
        now.

-   2-Oct-2003
    -   got rid of my strange 94x94 encodings for JIS/KSC/GB (based on
        the kuten array) and used instead the much more obvious encoding
        that everyone else uses.
    -   BDF files were output with the wrong encoding name for JISX0208
        (I was outputting "JISX208" instead-- missing a "0").
    -   Autotrace failed to read potrace output properly if there were
        more than one contour in a given glyph.
    -   Upgraded psunicodenames to the current Adobe Glyph List for New
        Fonts.
    -   Simplify now works for quadratic splines. If one uses the
        []Allow Slopes to Change checkbox then results are not good. I
        need a better algorithm.
    -   If asked to generate a type0 postscript font for a font encoded
        with an extended 1byte encoding (ie. one that had about 300
        characters) FontForge would probably crash.

-   29-Sept-2003
    -   When a path was both stroked and filled (in a postscript/eps
        file), fontforge would ignore the stroke.
    -   I forgot that the stroke linewidth needs to be transformed by
        the current transformation matrix. This meant that when a path
        should have been stroked by an ellipse (when reading a ps/eps
        file) fontforge would blithely stroke it with a circle.
    -   Added some support for reading the /Metrics array.
    -   If there were a sharp corner (where the "radius of curvature" of
        the corner was less than the radius of the pen used to stroke
        the path) then FontForge would generate an incorrect path.
    -   Round line joins were not a good approximation to circular arcs.
    -   When filling the outline character view, rounding errors caused
        the fill bitmap to stray from the outline.
    -   Extend the functionality of the magnifying (or minifying) tool
        so that if the user drags out a rectangle with it then the view
        will be shifted and scaled so that rectangle fits in the window.
    -   FontForge will no longer auto-generate hints on non-integral
        boundaries. In Type1 fonts such hints become meaningless and
        just confuse things.
    -   FontForge will now draw a halo around points which will be part
        of a flex hint. See the [UpdateFlex](prefs.html#UpdateFlex)
        preference item.
    -   FontForge now has as set of commands for manipulating
        typographic features in large lumps rather than one at a time.
        -   Copy features from one font to another
        -   Remove certain features
        -   Give features a new tag

    -   I have greatly rewritten the code for dealing with AAT fonts
        -   FontForge now supports mac feature/setting values to be used
            as feature tags as well as opentype 4 letter tags
        -   FontForge will now read any feature in even if it doesn't
            map to an opentype tag
        -   FontForge understands the most of the state machines in the
            morx/mort tables (it does not understand ligature state
            machines, it parses these for all unconditional ligatures,
            but it will miss any conditional ones).
        -   FontForge now lets you edit apple state machines
        -   FontForge lets you specify feature/setting names in the font
            to override the default values specified in preferences

    -   Added support for reading Apple's format 3 kern sub-table format
        (another way of storing a kerning class)
    -   Oops. SVG didn't read relative movetos properly in a path
        option. Patch by Kengo Ichiki.
    -   Simplify had a bug when passed a path which consisted of a
        single point with a zero length spline connecting it to itself
    -   Simplify was not greyed out properly in quadratic fonts
    -   Some of the low-level error routines consumed massive amounts of
        cpu time while waiting for events
    -   The PostScript parsing routines would sometimes think that
        "noaccess" was part of the value of something in the private
        dictionary.
    -   Several other patches to importing images by templates from
        scripts. By Kengo Ichiki
    -   Importing pcf bitmaps into the background had some problems.

-   4-Sept-2003
    -   the 17-Aug addition of context/chaining broke anchor classes.
        Should be fixed now.
    -   Károly László has added Hungarian translations for the style
        codes to Font Info-\>TTF Names
    -   If a font had comments, an svg file generated from it had syntax
        errors.
    -   Add support for generating multilingual strings (in 'name') for
        the apple platform.
    -   Add support for the packed gb2312 which mac and windows seem to
        use.
    -   Make a UniqueID of -1 in Font Info mean that the font has no
        UniqueID.

-   31-Aug-2003
    -   Add problems for maximum number of hints (96) and maximum number
        of subroutine nests (references) \~10.
    -   I looked at AppleChancery again and figured out why I was having
        trouble parsing its 'mort' ligature tables, and put in code to
        make it easy to parse tables of this type.
    -   After figuring that out, I realized there was a bug in my own
        table generation. Suppose we have two ligatures "f l =\> fl" and
        "s t =\> st", and are given "fst". Then my table would fail to
        find the "st" ligature. The state of 'read "f" waiting for "l"'
        would see that it didn't get an "l" and revert back to the
        initial state. It should instead have checked to see if "s"
        could start a ligature in its own right, and if so jump to the
        'got "s" waiting for "t"' state.
    -   The same fix needs to be done for contextual glyph substitution.

-   29-Aug-2003
    -   FontForge failed to display the morx table if all it contained
        were simple substitutions.
    -   FontForge generated incorrect simple substitution (AAT) tables
        if it found a substitution with no valid elements
    -   New problem for find problems. Check for characters with more
        than 1500 points in them.
    -   FontForge will now draw selected points in a different color
        (currently yellow), and draws them bolder. This makes them stand
        out better for Find Problems (but also makes it harder to
        distinguish between corner and curved points).
    -   Redid the way FontForge handled arabic forms in AAT. Old method
        was cleaner but depended on behavior which is unspecified in
        Apple's docs.

-   27-Aug-2003
    -   **The preference dlg has been broken since about 12 July.
        Anything on the Preference-\>Font Info tab is probably wrong.**
    -   FontForge wasn't always getting the script/lang right when
        filling in the fields of the New Substitution dlg.
    -   The newly generated apple state machines for context/chaining
        were quite wrong. I hope I've got them right now.
    -   The []PSNames checkbox (in Generate Font, Options dlg) did the
        opposite of what it was documented to do. Behavior has been
        changed to conform to the documentation (and expectations).
    -   FontForge would crash when loading some sfd files from a few
        months ago.

-   26-Aug-2003
    -   When I added metadata to svg fonts (20-Aug) I inadvertently put
        in two closing metadata tags. Which broke the font.
    -   Fixed a bug conversion of context/chain coverage sub-table into
        a morx subtable.
    -   Figured out in what cases I could generate a morx subtable from
        context/chain glyph or class format subtables.
    -   Fixed problems reading required features from ttf files.
    -   Updated French UI

-   25-Aug-2003
    -   View-\>Show ATT didn't show contextual/chaining tables even if
        they would be put in the 'morx' table
    -   View-\>Show ATT had problems showing anything in 'morx'
    -   Make it possible to edit contextual/chaining lookups that are
        formatted by class
    -   parsing/generating ttf files with class format context/chaining
        had problems
    -   loading a class format context/chaining lookup caused memory
        problems when closing the file.
    -   FontForge would sometimes lose track of script/languages of
        lookups when reading from a ttf file
    -   Added a conversion routine from glyph to class format
        context/chain
    -   Kanou points out that not all encodings available in Font
        Info-\>Encoding are present in the scripting interface, and
        fixes that.

-   22-Aug-2003
    -   Fix simplify again
    -   Patch from Andrey V. Panov to improve bluevalues
    -   KDE refused to make the find problems explanation window
        visible, so now I shan't make it invisible in the first place.
    -   Generate mac family crashed instead (introduced 2-July)

-   20-Aug-2003
    -   Support for [potrace](http://potrace.sf.net/)
    -   Fix some bugs with simplify more
    -   Mac build was badly configured and linked with a shared library
        it should not have.
    -   When compiled with -O2 fontforge had rounding errors which
        resulted in a bad bezier order3=\>order2 conversion (PS-\>TTF)
    -   SetPanose sometimes didn't
    -   Patch from KANOU to set ulUnicodeRange for version 4

-   18-Aug-2003
    -   **FontForge did not interpret SVG relative paths properly, and
        did not generate correct SVG output because of this**. FontForge
        was mistakenly assuming things should be interpreted as in the
        Type1 rrcurveto operator (where each point is relative to the
        previous point in the operator) rather than the rcurveto
        operator (where each point is relative to the initial point).
    -   If FontForge opened a Bold font stored in OTF CFF format, then
        when it closed that font it would either crash, or screw up
        memory so that a crash would happen later.

-   17-Aug-2003
    -   Support for contextual, chaining contextual and reverse chaining
        contextual sub-tables of GPOS/GSUB.
        -   Will generate an Apple contextual glyph substitution table
            if:
            1.  There is an apple feature which matches the otf tag
            2.  The sub-table is in coverage format
            3.  The sub-table contains either exactly one nested single
                glyph replacement substitution, or
                 it contains exactly two single glyph replacements and
                one of them refers to the last glyph matched (and the
                other does not)

    -   KANOU points out that on screens with high dpi FontForge would
        sometimes draw splines 2 pixels wide and sometimes 1 pixel wide
        (122dpi had this effect)
    -   KANOU provided another patch for reading bitmaps one part
        covered a memory leak the other fixed a bug reading ttc files.
    -   Added a LoadEncodingFile scripting command
    -   New french ui.
    -   FontForge was using the wrong definition of ascent & descent to
        set those fields in the 'hhea' table. This confused some mac
        programs (perhaps others).
    -   Added a "BBox" item to CharInfo scripting.
    -   Added a FontsInFile scripting command to return an array
        containing the fontnames of all fonts in a file. If an error
        occurs, a zero length array is returned.
    -   Change so that when opening a file containing multiple fonts the
        font's filename contains the fontname (so it is possible to open
        other fonts from the same file).
    -   Kanou provides a patch for compressing bitmaps with more than 8
        bits of white space to their left.
    -   Markus Schwarzenberg provides a patch to make fontforge
        recognize \$cidfamilyname as it should have done.
    -   Add the ability to generate fonts which contain both OpenType
        and Apple Advanced Typography tables (ie. a font that should
        work everywhere).
    -   Added Utf8(int), Chr(int), Ord(int) to interconvert between
        strings and their encodings.
    -   Add two problems to Find problems
        -   Search for substitutions, contexts, kerning classes, etc.
            which refer to a name which does not match any glyph in the
            font
        -   Search for contexts, chains, etc. which refer to a nested
            lookup which does not exist

    -   Add a new command line argument "-last" which will load the last
        sfd file closed.

        * * * * *

    -   FontForge would crash when importing bitmap fonts
    -   FontForge would crash when trying to do an Element-\>Default
        ATT-\>Suffix to Tag command

-   3-Aug-2003
    -   I still wasn't getting r2l kerns correct
    -   Add support for vertical kerning
        -   In 'GPOS', 'kern' tables of Open/TrueType
        -   In SVG fonts
        -   menu commands
            -   Remove VKern
            -   Vertical Kern By Classes
            -   VKern From HKern

        -   scripting
            -   RemoveVKern
            -   SetVKern
            -   VKernFromHKern
            -   Add a "VKern" item to CharInfo
            -   **Type argument to SelectByATT has changed**!!!

    -   Add support for other Pairwise positioning features.
    -   Add a \$panose command to return an array of panose values
        (scripting)
    -   Add a SetPanose command allowing scripts to change panose values
    -   FontForge was not rotating .vert glyphs properly

-   31-Jul-2003
    -   Installed KANOU's fix for a buffer overrun
    -   Installed KANOU's fix for compacted cid-keyed fonts
    -   Fixed another bug with compacted cid-keyed fonts
    -   Mathias Wollin points out that my pfm files don't have the
        correct kerning table format
    -   Handles the case where a font has both a 'glyf' and a 'CFF '
        table by asking user which to use
    -   Various improvements to the goto dialog from James Crippen.
    -   If the ttf "Apple" box got checked then it remained checked in
        subsequent Generate Fonts even though the [Options] dialog did
        not show it checked.
    -   FontForge would crash if given an Anchor class with no marks.
    -   Hmm... I notice that volt only uses format 2 coverage tables. I
        wonder if windows fails to handle format 1 tables...

-   30-Jul-2003
    -   Add support for [svg
        fonts](http://www.w3c.org/TR/SVG11/fonts.html) (and add
        dependency on libxml2 for reading them in)
    -   Add support for importing/exporting svg files (again libxml2
        needed for import)
    -   Add support for required features.
    -   In quadratic fonts the ellipse tool did not draw ellipses
    -   Add support for rectangles/ellipses drawn center out rather than
        just within the bounding box
    -   Preserve the rect/ellipse tool settings across invocations
    -   Put a license entry into the help menu

-   20-Jul-2003
    -   made the default linux browser be mozilla rather than netscape.
    -   If the metrics view were displaying an anchored pair
        (mark-base), and a character were typed into the text field at
        top before the anchored pair, then the display got very strange.
    -   FontForge got confused when merging a font which contained
        multiple encodings for the same glyph
    -   FontForge got confused if there were an lparen in a directory
        name (thought this meant a font collection).

-   15-Jul-2003
    -   We weren't parsing any type3 fonts properly any more
    -   Extend our ps interpreter to understand some of METAPOST's
        idioms better.
    -   I used to call all characters which weren't in the encoding
        ".notdef" this could cause problems if a user forgot to name
        them. I now give them unique names starting with "NameMe". I
        still leave characters \<256 called ".notdef" if the encoding
        calls for it, this may be a mistake...
    -   Fix on 14-July to simplify was incomplete.
    -   More fiddling with autohint
    -   Added support for the new X11 opentype bitmap format.

-   14-Jul-2003 (Bastille Day!)
    -   There are still cases where I'm getting the truetype point count
        wrong. If a truetype file had a control point that lay under an
        end point, then I would treat that as a "no control point" mark,
        and ignore the cp. But if I do that blindly I mess up the point
        count, so during font generation I must be prepared to put the
        cp back.
    -   Kanou provided a patch to fix a bug in the underlying graphics
        library.
    -   Add a popup menu to Show Att to allow those data to be saved (as
        utf8 text)
    -   Fixed (I hope) right to left kerning
    -   Added 'ccmp' entries by default for Hebrew
    -   Fixed a couple of bugs with the new simplify more options
    -   fontforge didn't compile on solaris. It now does.

-   12-Jul-2003
    -   Remove weirdness in scripting interface to TeX font parameters
    -   Kanou points out that the code for reading format 4 embedded
        (ttf) bitmaps was ambiguous and would behave incorrectly
        sometimes. He provided a patch.
    -   FontForge used not to create ghost hints for curved splines. It
        does now.
    -   FontForge did not find some of the hints needed for n021004l.pfb
    -   New French UI
    -   FontForge would sometimes crash when autotracing characters
    -   Don't snap to points when moving control points
    -   Directory browsing didn't work if the local encoding wasn't
        latin1 and the directory name contain non-ascii characters.
    -   Add an entry to find problems to look for 'GSUB' entries to
        non-existent characters.
    -   Expanded the simplify more command
    -   The GPOS output routines got very unhappy if a duplicate glyph
        happened to have GPOS data. Fixed on both ends I hope.
    -   The pcf reader was unhappy if
        -   the glyph bb width was a multiple of 8 (we read an extra
            byte per line which made the result appear as garbage)
        -   several glyphs had the same name.

    -   the FontInfo dlg failed to parse the merge\_with field of Anchor
        Classes properly, meaning that each time [OK] was pressed in
        fontinfo each anchor class name got a number prepended to it.
    -   Change the way the merge\_with field of anchor classes is
        handled by the UI so that it makes more sense. We used to
        display a number, now display the name of another anchor class
        with which it can be merged.
    -   Added an arabic text sample, courtesy of Thomas Milo.
    -   Upgraded to Unicode 4.0 (**Note:
        [libuninameslist](http://libuninameslist.sf.net/) has also been
        upgraded**)
    -   Added a new preference item CharCenterHighest to assist in
        accent placement.

        * * * * *

    -   Oh. This isn't documented, but each langsys table can only point
        to one (1) feature with a given tag. So if I have multiple
        'mark' lookups, I can't have multiple 'mark' features, I must
        have one 'mark' feature with pointers to many lookups.
    -   FontForge could crash when generating a tfm file from a CID
        keyed font
    -   Change GDEF output so that the class def table isn't generated
        when it isn't needed (we used to generate a 0 length one, which
        would confuse the freetype-1 opentype code, and perhaps others).
    -   Fixed a bug in autohint caused by negative stem widths.

-   4-July-2003
    -   Added a page to the font info dlg which allows users to set TeX
        font parameters
    -   Added a mechanism for specifying TeX charlists and extension
        characters
    -   Added a mechanism for specifying TeX Italic Correction
    -   Revamped support for reading tfm files so that it sets all these
        new things correctly.

-   2-July-2003
    -   Add an Options dialog to the Generate Font window, and remove
        the check boxes from it.
        -   Add a UI for the 'PfEd' table
        -   Add a UI to turn off PostScript hinting

    -   FontForge can now generate a tfm and enc file (for TeX)

-   30-June-2003
    -   I**n the table of contents at the start of a true/open type file
        the GDEF table was listed as having the wrong size. This caused
        many applications to ignore it, which in turn meant that Mark to
        Base GPOS tables were ignored**(at least I hope that's what was
        going on).
    -   On the mac local help files weren't working properly.
    -   Combining unicode characters (mark glyphs) should have an
        advance width of 0, and now they default to that.
    -   Several people at EuroTeX wanted more pen shapes in the expand
        stroke dlg. Ellipses are easy, so we add them.
    -   One guy at EuroTeX wanted to be able to store arbitrary
        per-glyph data in the font, so add a new (private) true/open
        type table that can contain the glyph comments. This table has
        tag 'PfEd' and can contain sub-tables containing font comment,
        glyph comments, glyph colors. Perhaps other data as need arises.
    -   Kanou has added a new scripting command, SizeOf, to return the
        number of elements in an array.

-   19-June-2003
    -   Added a histogram dialog to help figure values for StemSnap[H/V]

-   17-June-2003
    -   Scripting interface to SelectByATT
    -   Crash bug caused by incorrect CID fix on 15-June
    -   (the web interface to the cvs tree seems broken. It doesn't show
        rmligamarks). Here's a copy of [rmligamarks.c](rmligamarks.c).

-   15-June-2003
    -   Cleaned up the spelling of some scripts.
    -   Deactive the [Edit] button of the Script/Lang list when
        appropriate.
    -   FontForge wasn't removing the quotes around the copyright notice
        when read from a bdf file. After several rounds of read/save
        there were lots of quotes.
    -   Added a wireframe effect.
    -   Added a find problems entry which will check for control points
        which are very close to their main point (so close that it is
        unlikely that they will effect the curve much).
    -   The Undo command from the font view did not reset the character
        changed bit.
    -   GDEF table output had problems with cid-keyed fonts.
    -   So did 'prop' table output.
    -   Expanded View-\>Show ATT to show 'GDEF', 'lcar', 'prop', 'opbd'
        tables.
    -   Added a Ligatures entry for View-\>Combinations in the outline
        character view
    -   Added "Edit-\>Select-\>Select by ATT", to allow user to select
        characters depending on advanced typographic features.
    -   **FontForge always used to set the "ignore-combining-marks" flag
        bit for all ligatures. But yudit (and probably gedit) will not
        process the substitution if that bit is set. On the other hand I
        believe some arabic ligatures may depend on it (at least
        arabtype-volt.ttf uses it). So... now we only set this bit for
        arabic ligatures which do not contain combining marks. Dunno if
        that is right either.**
        -   I have created a little tool,
            [rmligamarks](http://cvs.sourceforge.net/viewcvs.cgi/pfaedit/pfaedit/fonttools/rmligamarks.c),
            which will take an sfd file with the "ignore combining
            marks" bit in ligatures and turn it off. It does not try to
            guess what should be done, it ALWAYS turns the bit off.

-   5-June-2003
    -   FontForge was generating Apple 'morx' tables with the right to
        left bit reversed (so it thought latin text was right to left
        and arabic was left to right). This meant that ligatures
        happened backwards (the "ffi" ligature would be invoked if you
        typed in "iff")
    -   FontForge was generating a format=1 glyph class definition
        sub-table of GDEF. ttx didn't like this, I'm not sure why.
        Problem goes away if I generate a format=2 sub-table.

-   4-Jun-2003
    -   Added a Shadow effect
    -   More fixes for remove overlap
    -   fixed a bug with timers
    -   Preserve the Fit To Em mode of a font.
    -   Added a bunch of scripts (as in writing systems, not executable
        files) from the proposed ISO 15924 standard.
    -   Added support for underline position to bdf files.
    -   The 18-May build was bad and failed to read postscript fonts
        properly on many platforms (the sources were ok, but the builds
        were bad)
    -   Display the version number in the about box, and attach it to
        the directory in the source .tgz file.

-   18-May-2003
    -   FontForge would crash when asked to produce a ttf font where
        there was an unused anchor class.
    -   The original encoding is now preserved when a font is generated.
    -   The goto dialog (and scripting) now recognize "glyph\<nnn\>" as
        refering to glyph \<nnn\> in the original encoding.
    -   Kanou provided two scripting commands, ConvertToCID and
        ConvertByCMap.
    -   Added a Remove External flag to Expand Stroke to complement
        Kanou's Remove Internal
    -   Expanded on Remove Overlap by adding
        -   Intersection -- which removes everything except the overlap
        -   Exclude -- which removes areas where any selected contours
            cross non-selected contours (and then removes the selected
            contours)

    -   Added an Effects sub-menu of Elements, including (so far)
        -   Outline -- turns the selected characters into outline
            versions of themselves
        -   Inline -- turns the selected characters into inline versions
            of themselves

    -   FontForge would crash when reading in an sfd file containing a
        kerning class
    -   gimp objected to some of my ttf fonts. I think because it is
        inappropriately clipping to the ascent/descent values in the
        hhea rather than using the font's bounding box. It's easy enough
        to preserve the 'hhea' ascent/descent values and perhaps that
        will be enough to make gimp happy.
    -   Kanou points out that rasterization has problems with the new
        TOfNextMajor, so use the new code for remove overlap and friends
        and the old code for rasterization

-   12-May-2003
    -   Added a command to do non-linear transformations (but made it
        require user configuration to have it compiled)
    -   Added a UI for Kanou's Remove Internal flag to Expand stroke

-   9-May-2003
    -   Apple's 'lcar' (ligature caret) table was being generated
        incorrectly
    -   Another bug in point numbering
    -   Make "Slanted" a synonym for Oblique.

-   8-May-2003
    -   FontForge did not recognize "filename(fontname)" notation for
        loading a specific font from a resource fork of a mac file.
    -   FontForge crashed on the mac when generating a GPOS table. There
        was an uninitialized variable there, left behind be recent
        changes. Removed.

-   7-May-2003
    -   Oops. It should be legal for a 'mkmk' anchor class to have two
        points in a glyph, one the normal mark point, the other the base
        mark point. (that is it should be possible for a glyph to attach
        to itself).
    -   Kanou supplied a patch to extend expand stroke.
    -   Changed behavior of AnchorClasses so that two classes could be
        associated to form a single feature (ie. one class of "Above"
        marks, and one class of "Below" marks)
    -   Show ATT now displays something meaningful for marks
    -   Some general Anchor Class clean up.
    -   Was not setting bits in the CodePage[1] field of the OS/2 table
        for all the weird MS specific encodings. It seems I should do
        that.

-   6-May-2003
    -   Although undocumented, digits behave just like lower case
        letters in macintosh filenames for postscript resource fonts.

        * * * * *

    -   Looking at the font info-\>ttf values dialog would cause
        fontforge to crash after [Ok] was pressed.
    -   Old sfd files with anchor classes but not script lang index
        would crash fontforge when being read in.

-   5-May-2003
    -   Made it possible to select kerning class 0 (ie. everything that
        isn't specified)
    -   Put in a check to make sure the user didn't add a glyph to two
        different kerning classes
    -   **FontForge was dumping out a full GSUB sub-table for each
        character that sub-table applied to (rather than one sub-table
        for all characters). So there were tons of duplicates.**
    -   **FontForge was producing extension sub-tables that held an
        incorrect offset.**
    -   Added some code to protect FontForge when it read incorrect ttf
        fonts like those generated above.
    -   Drag and Drop to the Char Info dlg was broken.
    -   If a font had a non-notdef character at encoding 0 and we used
        freetype to generate bitmaps for it, then those bitmaps would be
        assigned to the wrong glyphs (ie. the bitmap for "A" would go to
        "B", etc.)
    -   I used "Mac Roman" in several places where I should have said
        "Macintosh Latin"

-   4-May-2003
    -   Added code to determine better defaults for the script lang
        index
    -   The ligature state table in Apple Chancery has so many possible
        paths through it that FontForge bogs down when evaluating it. I
        presume it would finish in finite time, but it takes
        unacceptably long. So I've put in an abort.
    -   Add support for KernClasses (ie. they are no longer just
        converted into a large number of kernpairs, but will be stored
        internally as a set class and will be output as such). And they
        have their own dialogs to manage them.
    -   Add support for Apple's new version of the 'kern' table.
    -   Add support for the format 2 sub table of Apple's 'kern' table
        (which is different from OpenType's format 2 sub-table of the
        kern table), and is Apple's kerning class sub-table (note:
        [Apple's
        docs](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6kern.html)are
        **WRONG**. they claim class data are stored in an array of
        uint8, but they really are in an array of uint16).

-   29-Apr-2003
    -   Oops, one more fix to remove overlap
    -   Kanou points out that copy hasn't been working (for some time
        now) when a contour has be split into bits, only one of the bits
        is copied.
    -   Kanou points out that Paste reorders open contours
    -   Further work on Show ATT dlg
    -   Further work on multiple features.

-   28-Apr-2003
    -   Yet more fixes for Remove overlap
    -   Added a mode to the ruler tool where it shows the exact position
        of the mouse cursor
    -   The Goto command had a strange bug: If a font had a glyph with a
        known name, but that glyph did not reside at the unicode slot
        assigned to that name, then goingto that name would go to the
        (empty) unicode slot, rather than to the actually character.
    -   Werner wants a [dlg](showatt.html) which shows collects all the
        GPOS/GSUB (morx/kern) information in one place rather than
        scattering it around hundreds of dlgs.
    -   FontForge now stores the script/langs for kern pairs
    -   FontForge failed to read script/langs for GPOS properly.
    -   FontForge had problems generating an AFM file from a CID font
        with ligatures
    -   FontForge had problems getting script lang lists right when
        multiple features refered to the same lookup.

-   20-Apr-2003
    -   One of FontForge's deficiencies is that it handles multiple
        encodings for the same glyph very badly (it does not have the
        multiple layers of indirection that fonts do). Rather than solve
        this properly I have added a new command that allows for this
        case. [SameGlyphAs](editmenu.html#SameGlyphAs).
    -   Add some more synonyms for greek glyph names
    -   Failed to realize that U+1FED was an accent
    -   No longer tries to build greek accents out of latin ones when
        Build Accented is invoked. (but still will for Build Composite).
    -   When swapping character names, check for names like "uniXXXX"
        and instead of swapping it, rebuild it as appropriate for the
        other character.
    -   Font Info-\>Encoding failed to change the encoding properly when
        switching from "Compacted" to anything other than the original
        encoding.
    -   A couple of changes to the italian translation
    -   Added an "Original" encoding which gives you back the ordering
        of the glyphs in the ttf font. (this may be changed when you
        regenerate a ttf font)
    -   FontForge failed to read ttf instructions for composite glyphs.
    -   FontForge got confused if a ttf file had multiple glyphs named
        ".notdef" (which to me looks like a bug in the ttf font, but
        Times New Roman does this so I have to deal with it).
    -   Added a command to the popup menu in the charview to bring up a
        window looking at a reference.
    -   Add a check for when sfd files contain bad kerning info.

-   14-Apr-2003
    -   Change a tab in Font Info from "PS General" to "General"
    -   When searching for encoding files, look for the extension ".enc"
        used by TeX for PostScript encoding files
    -   Fixed a crash when setting a character's name to a name already
        given to another character
    -   Added many new X resources for controlling colors in the outline
        character view.

-   7-Apr-2003
    -   Program generated divide by zero errors when using Meta-Shift to
        move a control point which didn't exist.
    -   (cleaned up some syntax issues in non-English nomen files)
    -   Added new scripting commands ClearPrivateEntry,
        ChangePrivateEntry, GetPrivateEntry
    -   Added new scripting command: UnicodeFromName
    -   Added new script command: RemoveATT
    -   Vadim pointed out that loading "pala.ttf" and then generating it
        again (as ttf) produced bad results. FontForge was getting
        confused by the points which were used to control Anchors,
        getting its points list out of order and generally screwing up.

-   04-Apr-2003
    -   autosave sometimes lost track of which font it should be
        applying changes to.t
    -   Add Extrema (or just adding a point in the middle of a spline)
        would generate incorrect splines if the spline were linear in
        one but not both of the two dimensions
    -   One more change to Merge/Simplify. Deal with the case of a curve
        point with no control point (use the control point in the
        opposite direction to get the slope).
    -   Typo in 2-Apr script/lang fix caused crashes.
    -   TeXBaseEncoding (T1) changed in Oct-2002. Updated my version
        (also updated the other TeX encodings I've got and included the
        cyrillic ones into Encodings.ps.gz)
    -   Sometimes we failed to remove the dot when creating a dotless
        i/j character.
    -   Merge/Simplify had conniptions when given a zero length spline.
    -   Added "DefaultATT" and "AddATT" scripting command to allow user
        to add Advanced Typography features to characters.

-   2-Apr-2003
    -   Problems with script/lang when: Pasting or Merging ligatures and
        substitutions from one font to another
    -   FontForge could generate points (within a ttf simple glyph) in a
        different than the original glyph, meaning that the instructions
        would move the wrong point resulting in blots. I have fixed this
        (or at least the cases I found).
    -   FontForge would always give ASCII characters their standard
        names in a ttf post table. This was wrong if the character did
        not have its standard name.
    -   FontForge could go into an infinite loop on some simplifies.

-   1-Apr-2003 (April Fish!)
    -   Fixed a crash in the Join command
    -   Fixed a crash when loading some truetype fonts (never bothered
        to figure which ones exactly)
    -   Fixed a similar crash when loading old sfd files (note some old
        fonts won't guess the script for ligatures, etc. properly)
    -   Added a new preference item: Stop At Join
    -   Changed the way control points are set when changing point type.
    -   The fill of the outline view sometimes lagged the change.
    -   Added another tag to CharInfo scripting command: GlyphIndex. It
        returns the glyph number in the ttf font.
    -   Werner suggests that instead of naming things "nounicode-%x"
        where %x is the encoding, use "nounicode-%d-%d-%x" where the two
        new arguments are the platform/specific pair used in the cmap we
        picked.

-   31-Mar-2003
    -   FontForge was not reading pfb fonts properly if they had more
        than one binary section header.
    -   When FontForge removed a character it did not remove all the
        kernpairs that refered to that character.
    -   Fixed more leaks with valgrind.
    -   Added more synonyms for glyph names from Adobe Glyph List (I
        still rely on Glyph names for New Fonts as my basic set of
        names)
    -   FontForge had problems if the use selected 0 levels of undoes
        when the UI was active.
    -   Selecting the freehand tool in a quadratic font caused a crash.
        (The freehand tool doesn't work in quadratic fonts, but it
        shouldn't crash)
    -   Changed the way scripts are specified. I used to assign a script
        to every character. I realize that doesn't work. The digits are
        used in many scripts and the fraction ligatures based on them
        need to be seen in all those scripts, not just the one that the
        digit was assigned to. So...
        -   Glyphs no longer have a script assigned to them
        -   Substitutions, Ligatures, Anchor Classes and other Advanced
            Typographic features now have a list of scripts (and
            languages) for which they are active.
        -   There is now an absurdly complex [stream of
            dialogs](charinfo.html#Feature-Tag) which may be used to set
            this list.

    -   Added a new preference item to allow the user to specify a local
        help directory
    -   Added a new scripting command SelectIf which allows you to
        determine whether a character is in a font (Select signals an
        error if the character isn't there, SelectIf returns failure).
    -   Added a new scripting command to change a font's order (from
        quadratic to cubic)
    -   ScaleToEm scripting command will now accept a single argument,
        the em-size.
    -   Added a new scripting command to allow you to apply an otf
        substitution to the font
    -   Added a new scripting command to give control over which
        ligatures are output in an afm file
        -   (it used to be that all ligatures were output in the afm
            file, no only 'liga' and 'rlig' that appear in a default
            language are output)

    -   AFM files only support 2 character ligatures. So, when possible,
        generate a sort of closure on the ligatures. So if we are given
        the two ligs "ffi-\>f f i" and "ff-\>f f" then add the ligature
        "ffi-\>ff i". This means that the sequence f+f-\>ff+i-\>ffi will
        eventually reach the ligature we want.
    -   Changed so that an untitled anchor class is now called
        "Anchor-\*" rather than "Untitled-\*".
    -   Rewrote Merge & Simplify commands. In my tests they now produce
        better results.
    -   Type2 font generation did not make use of hv/vh curveto commands
        in some cases
    -   When figuring out whether to synchronize the width/lbearing of a
        base character with the composites containing it, I only checked
        if the base character was alphabetic. But that doesn't work for
        hebrew where unicode says the marks are alphabetic. So add an
        additional check that it can't be a combining character.
    -   When pasting a composite character from one font to another, the
        saved width is not useful. Added a check that finds the correct
        width of the appropriate base character.
    -   When pasting a composite character from a font with one em-size
        to another with a different em-size try to scale the amount
        references are translated by an appropriate amount.
    -   CharInfo scripting command has been extended to allow users to
        test the presence of substitutions
    -   Some fonts (bsmi00lp.ttf for one) have bad cmap tables which map
        several glyphs to the same unicode code point. Put in a check
        for this and only map one glyph to that code point now.

-   13-Mar-2003
    -   Add a preference item to control the number of undoes saved per
        character
    -   Turn off saving undoes when in a script started from the command
        line
    -   Added a preference item to control the undo depth from the UI.
    -   Try to do better about scaling my chunk allocator to machines
        with 8 byte pointers
    -   Was doing 32 bit arithmetic when reading GSUB simple
        substitution lookups when I should have done 16 bit.
    -   Tracked down a lot of memory leaks with valgrind (and some
        uninitialized variables too)
    -   Added access to a font's version from scripting
    -   Added PostNotice scripting command
    -   When reading a ttf/otf font with a GSUB table fontforge will try
        to guess reasonable names for unnamed glyphs by looking them up
        in the GSUB table. Thus an unnamed vertical variant for "A"
        might be named "A.vrt2".
    -   FontForge would crash when outputting ttf files with no 'cvt'
        table (bug introduced around 27-Feb)
    -   the configure script did not respect the argument
        --with-freetype-src as it should have.

-   10-Mar-2003
    -   Added a TrueType instruction debugger (actually an interface to
        FreeType's truetype bytecode interpreter)
        This command depend on your compiling freetype with the byte
        code interpreter enabled. This is disabled by default because it
        infringes on certain [patents granted to
        Apple](http://freetype.sourceforge.net/patents.html). If you
        have a license from Apple then you may enable the interpreter by
        setting the appropriate macro in
        .../include/freetype/config/ftoption.h before you build the
        library (see the README.UNX file on the top level of the
        freetype distribution).
        FontForge needs to have the freetype source directories
        available when it is built (there are some include files there
        which it depends on)
    -   Added an Edit-\>Copy Grid Fit command (to put the grid fit
        splines into the clipboard)
    -   Added a warning if the freetype library doesn't have a byte code
        interpreter so that the user knows his/her splines have been
        autohinted (rather than had the bytecode instructions run).
    -   Improved Edit-\>Merge in some cases that don't fit its
        constraints
    -   KANOU found some more underscores in character names
    -   And provided a new japanese ui
    -   Round to Int had problems on quadratic splines
    -   Added support for runtime loading of dynamic libraries on the
        mac.

-   03-Mar-2003
    -   Memory got screwed up when converting TTF splines to PS ones
    -   KANOU suggested some changes to the quadratic spline UI
    -   I had the wrong makefile at top level so builds didn't
    -   syntax error on systems without freetype

-   02-Mar-2003
    -   Changed the Show Instructions command to be an Edit Instructions
    -   Bug saving 'prep' table
    -   Bug changing 'cvt ' table
    -   Added ability to look at gridfit splines in charview.

-   28-Feb-2003
    -   New dialog in outline view to examine ttf instructions
    -   If an sfd file was created from a script then when it was next
        opened from the UI it would appear in a tiny window.
    -   The preference item refering to the []Hint check box in the
        generate dlg has been renamed.
    -   A checksum-like thing has been added to ui files so that in the
        future the application will refuse to use .ui files which do not
        match its expectations.

-   27-Feb-2003
    -   Didn't get the SetLBearing change right yesterday.
    -   Changing to quadratic splines with Font Info could generate an
        invalid spline.
    -   We now preserve truetype instructions when reading in a truetype
        file (the fpgm and prep tables, the cvt table and any per
        character instructions)
    -   These instructions will be dumped out when generating truetype
        fonts
    -   Added a menu command AutoInstr to generate our own (bad)
        instructions for a character.
    -   Any significant change (ie. anything that reorders the points,
        or adds or removes points) will clear the instructions for that
        character.
    -   Changing to cubic splines (fontwide) will clear the instructions
        (and the fpgm and prep tables).

-   26-Feb-2003
    -   configure scripts got confused in the freetype libraries were
        findable but the include files were not. Changed the scripts so
        that freetype is marked not present if the include files are
        missing.
    -   Table ordering was not read in properly from an sfd file
    -   Typos in SetCharName & SetUnicodeValue prevented second argument
        from working
    -   Added a second argument to SetLBearing and friends to allow
        relative bearing settings (ie. to increment the bearing by some
        amount)

-   25-Feb-2003
    -   Bad bug in GSUB generation introduced yesterday
    -   Font level round 2 int command now rounds hints too.
    -   Adobe lies when they say that a hint can't stretch from one
        bluezone to another, so be a bit more cautious in removing this
        case.
    -   Be a little better about getting the script from the GSUB/GPOS
        table.

        * * * * *

    -   FontForge had problems generating mac cursive connection
        setting.
    -   FontForge had problems defaulting ligatures in cid keyed fonts
        (even if there were no ligature characters to be defaulted, the
        attempt would fail)
    -   I introduced memory problems yesterday. Fixed.
    -   Font level round 2 int will take hints into account when
        positioning points in order to maintain stem widths.

        * * * * *

    -   When running a script from the command line FontForge failed to
        initialize the adobe standard encoding.

-   24-Feb-2003
    -   Claudio Beccari has provided an Italian UI.
    -   (added Italian style translations to fontinfo)
    -   User now has the ability to control the conversion from mac
        feature/settings to otf features.
    -   FontForge now remembers the order features are to be applied in
        GSUB/GPOS/morx tables (and dumps features out in that order when
        it next saves them).
    -   FontForge allows you to reorder the GSUB/morx tables should you
        wish to do so. I am sufficiently ignorant that I don't believe
        it is necessary to reorder the GPOS table, so there is currently
        no UI for this. If I am wrong let me know and I will add that
        too.
    -   The 'kern' table was not being generated when it should have
        been. This error was introduced sometime in the last month due
        to the AAT changes.
    -   Scripts generating otf fonts would crash if the font had
        non-integral coordinates because of a bug in my PostNotice
        routine when running without X.

-   18-Feb-2003
    -   Hmm. It looks as though apple uses the "ascending glyph" flag on
        the features of the 'mort'/'morx' tables to mean left to right
        text
    -   Fixed a crash on reading a GSUB table with a glyph out of range.
    -   Added support for a cursive connection (contextual glyph
        substitution subtable of) morx.
    -   Added an [index](realindex.html) to this manual and put a link
        to it in FontForge's Help menu. Index is by no means complete
        yet.

-   12-Feb-2003
    -   Support direct editing of quadratic (truetype) splines

-   11-Feb-2003
    -   Change made on 8 Feb 2003 broke the code that read type1 flex
        hints
    -   Hide files beginning with "." (except for "..") in file chooser
        dlgs.
    -   Add protections in the afm file output to handle very long
        copyright notices.

-   08-Feb-2003
    -   Support for Apple's 'opbd' (Optical Bounds) table
    -   Support for reading some features in non-contextual glyph and
        ligature sub-tables of the 'mort' or 'morx' tables.
    -   Support for writing those features in non-contextual glyph and
        ligature sub-tables of 'morx'.
    -   added char info to the fontview popup.
    -   the scripting command Generate (and GenerateFamily) would
        generate truetype .dfont files when asked to generate otf dfont
        files.
    -   Add ClearHints scripting command
    -   Add access to preference items from scripting (via:
        \$\<prefname\>, GetPref("\<prefname\>"),
        SetPref("\<prefname\>",\<value\>)

-   01-Feb-2003
    -   Add some support for Apple Advanced Typography tables ('prop',
        'lcar')
    -   Popup menus in textfields failed to refresh the text field
    -   KANOU provides a patch for sfd files with long Alternate Subs
    -   FontView didn't deselect properly after doing a drag and drop.
    -   Should now deal with the case where (under cygwin) the user sets
        BROWSER to 'netscape' with no path spec.
    -   Ligature carets introduced a crash bug.

-   30-Jan-2003
    -   Should figure out the default windows browser under cygwin now.
    -   Should handle the case where a user sets the BROWSER variable to
        something with a DOS pathspec
    -   Apply KANOU's patch to turn off more autohinting.

-   29-Jan-2003
    -   Fix a crash introduced yesterday.
    -   scripting didn't work for \$familyname fix from Alex Raftis

-   28-Jan-2003
    -   The title of the Anchor Pair dialog was wrong (said Kern Pairs)
    -   Improved error messages for when a font file did not exist or
        was unreadable.
    -   Failed to generate a GSUB table when the ligatures came from a
        r2l ttf file.
    -   I was generating incorrect data for r2l GPOS kerning sub-tables.
    -   Failed to display r2l anchored attachments properly in the
        metricsview, anchor pair dlg, or when printing.
    -   Typo when loading libuninameslist dynamic library, introduced on
        the 24th.
    -   Now we generate a GDEF table too, containing (possibly) a glyph
        class def and (possibly) a ligature caret list
    -   Added code for editing horizontal ligature caret locations

-   25-Jan-2003
    -   More cygwin fixes for invoking browsers.

-   24-Jan-2003
    -   Added a preference item to control whether autohinting happens
        before a font is generated.
    -   When calling Internet Explorer or Netscape on cygwin we needed
        double backslashes
    -   moved hidden menu items (those invoked by Shift) into submenus

-   20-Jan-2003
    -   Put in a number of errors and warnings related to a glyph not
        having a script.
    -   Fixed a crash bug when generating a popup for a glyph with no
        unicode encoding
    -   Support for scroll wheels.
    -   I hope I've now fixed the problems related to the GSUB table and
        ttc files. Now does a pass through the GSUB table to see what
        glyphs can be introduced by it when it figures out what glyphs
        to read from the glyph table (ttc files have more than one font
        sharing the table, don't want to read all glyphs).
    -   Added support for extension subtables of GPOS/GSUB.
    -   Making a selection in the textfield of the Display dlg was
        broken when the selection was scrolled.
    -   Valek wants a Paste Into command.
    -   Uninitialized variable in GSUB output caused erratic ligature
        behavior
    -   I'm told that even though it makes logical sense for hebrew to
        have a 'fina' tag, it is not customary and I have been asked to
        remove it from Default ATT. Which I have done.

        * * * * *

    -   FontForge now protects itself better against erroneous GSUB/GPOS
        tables.
    -   Valek points out there were display problems with the
        File-\>Display (and File-\>Print) menu options in Russian.

-   16-Jan-2003
    -   Recent char info changes broke copy & paste within text fields
        of the char info dlg.
    -   Problems reading GSUB table of a ttc files (problems remain, but
        we should no longer crash).
    -   Reorganized libraries. Now FontForge has an additional
        dependency:
         [libuninameslist](http://libuninameslist.sf.net). Please
        install this.
    -   With libuninameslist FontForge can display the Unicode
        annotation information.

-   14-Jan-2003
    -   Fixed a couple of bugs loading pcf files with complex encodings
    -   Bug in pasting metadata when there was no glyph comment.
    -   Made SetCharColor scripting command set the color on any
        selected glyphs
    -   Cleaned up selection behavior in fontview. Drag & drop made it
        difficult
    -   Oops. Was scaling round rect radius incorrectly in xfig
        conversion
    -   Oh yes, hebrew has final letters too. And greek. Add them in to
        the default for 'fina'.
    -   Fixed many problems with mac font generation
    -   Open VMS update from Jauk Jansen

-   12-Jan-2003
    -   Support for xkb extension
    -   New Russian UI from Valek
    -   New Japanese UI from KANOU

        * * * * *

    -   Saving a compacted font did not preserve the old encoding
    -   Added a preference item to control Edit-\>Join
    -   made Edit-\>Copy From-\>Copy Name (now Metadata) be a preference
        item too.

-   9-Jan-2003
    -   Support for round rects in xfig files
    -   Added the glyph name to the title of the char info dlg
    -   Char info failed to deal with all the flags properly
    -   Fixed crash when creating GPOS sub-table 1 (simple positioning)
    -   GPOS/GSUB output now handles case where a feature has several
        different sets of flags.

-   8-Jan-2003
    -   Update copyright notices
    -   Printing now handles anchored marks. (Display does not, just as
        display doesn't handle kerning-- because X doesn't).
    -   Support for cursive positioning.
    -   I've registered with Adobe, and they have assigned FontForge an
        XUID base number of 1021. Now when new users start fontforge for
        the first time they will be assigned an XUID base sequence of
        1021 xxx nnn where xxx and nnn are two random numbers generated
        by fontforge. New fonts will get a fourth number for their full
        XUID.
    -   Kanou points out that glyph names should not contain underscores
        so redo the .cidmap files to change to dashes. Also change
        "japan1\_%d" to "cid-%d" to make life easier for me.
    -   KANOU points out there were places where fontforge did not check
        psunicodenames\_cnt. Once outside of BMP this causes a crash.
    -   New Japanese UI from KANOU.
    -   Support for many more GPOS/GSUB sub-tables.
    -   Keep track of the order in which characters are selected in the
        fontview and recreate that order when user asks to create a
        metricsview based on the fontview's selection
    -   Make it possible to drag&drop characters from fontview into
        metricsview (again keeping track of selection order)
    -   Make it possible to drag&drop characters from fontview into
        charview to create references
    -   Make it possible to drag&drop characters from fontview into
        charinfo to create ligatures, etc.
    -   Command to set the default values for sub GSUB/GPOS features
        that are easy for FontForge to figure out.
    -   Ability to zoom metrics view.
    -   Metrics view displays anchor points and does the needed work to
        position the characters. It is also possible to move anchor
        points around in the metrics view.
    -   Metrics view now has a pop-up menu that allows you to see
        alternate metrics
    -   Metrics view now has a submenu (off of View) which allows you to
        change the current glyph to one of its alternates.
    -   Fixed uninitialized variable what would sometimes cause a crash
        when storing bitmaps in a TTF/OTF file.
    -   Fixed crash bug in 29-Dec when generating a truetype font
        without a GPOS table.
    -   Many changes to charinfo dlg. Made non-modal. Can Copy/Paste
        Position/Substitution data.
    -   Do a minimal amount of work toward supporting the alpha channel
        of a png file.

-   29-Dec-2002
    -   FontForge now supports [anchor points](overview.html#Anchors)
        for mark to base (ligature and mark) positioning.
    -   FontForge was mistakenly treating NumLock on PC keyboards as if
        it were the command key on Mac keyboards.
    -   The font info dlg now remembers what tab was last pressed.
    -   The char info dlg has been restructured. It includes a script
        field, and associates a tag with the ligature (if any).
    -   I have decided to generate a 'GPOS' table rather than a 'kern'
        table in truetype output as well as in opentype output (unless
        applemode is set).
    -   I have changed the default names of items in adobe's private use
        area to match their new conventions. ie. names used to look like
        "Asmall" and now look like "a.sc".
    -   I have rewritten the way [GPOS and GSUB](gposgsub.html) tables
        are output. I hope this will not have much effect on users, but
        it does mean that a few more sub-tables are now supported.

-   23-Dec-2002
    -   Various improvements to cubic-\>quadratic (truetype) conversion.
    -   When switching from displaying a 12,8,6,4,3,2,1pt bitmap to a
        24pt anti-aliased version, fontforge would fail to update the
        display.
    -   The bitmap dlg would come up with the labels for X showing when
        it should have shown those for Win/Mac.
    -   Inspired by KANOU's mentioning the mona font, I've made it
        possible to generate an ms bitmap only ttf font. This is done by
        creating dummy glyph and loca tables (full of space glyphs) and
        putting a bitmap scaling table which causes the most likely
        pixelsizes to be scaled from the strikes available.
        You can generate this with: [No Outline Font] [In TTF]
    -   Drat. Fix of 24-Nov was wrong. I still wasn't putting the
        UniqueID into the Private dict.
    -   I've been generating bad macbinary files since I started
        -   I had not noticed that the resource and data fork must be
            padded to a multiple of 128 bytes.
            -   This also meant that on rare occasions I would read them
                incorrectly too.

        -   I was generating the crc incorrectly.

    -   Be a bit more vigorous about displaying filter text in file
        choosers.
    -   Default buttons didn't respond to the keypad enter key.
    -   Pressing OK in the character info dlg would often destroy the
        font's encoding event when it should not have.
    -   Was generating bad kerning tables for mac FONDs.
    -   Jim Killock reminds me that there was no way for fontforge to
        read kerning data from a mac FOND. File-\>Merge Kern Data will
        now accept a mac resource file.

-   15-Dec-2002
    -   Add support for Big5HKSCS
    -   Redo CJK encodings
    -   Update cidmap files.

-   14-Dec-2002
    -   Add support for reading windows .FON and .FNT files.
    -   Add support for writing windows .FNT files. Sadly .FNT files
        aren't particularly useful. They need to be converted to .FON
        files with the resource editor somehow.
    -   Bug when reading postscript files that included complicated
        combinations of translate scale and concat commands.
    -   FontForge was a bit too cavalier about guessing how big serifs
        were. Caused problems when autokerning a fraktur font.
        (FontForge thought it had huge serifs when it had none).
    -   Direction (Clockwise, counterclockwise, correct) menu items are
        now greyed out if the selected path is open.
    -   New OpenVms patches from Jacob Jansen.
    -   Update unicode database to 3.2

-   13-Dec-2002
    -   FontForge will now open a ttf/otf font that contains only bitmap
        strikes
    -   FontForge will now read NFNT resources (old mac bitmaps)
    -   FontForge will import NFNT resources
    -   Fixed a number of problems with loading and saving bdf files
        -   Did not understand that the "ENCODING" keyword could take
            two values if the first were -1
        -   Added unencoded glyphs at the wrong encoding (I know that
            sounds like an oxymoron. I assign them an encoding, and I
            did it badly).
        -   If a font name were not one of the X Logical Font Names then
            fontforge might fail to give the font a familyname or a
            fontname. This caused more problems when generating a new
            bdf file.

-   11-Dec-2002
    -   Revert Glyph is now undoable
    -   Fixed a crash when pressing return in the font display of a
        bitmap font.
    -   Display the name of references near the top of the reference in
        the outline char view.
    -   Took the width display off the info line and did it as hints are
        displayed.
    -   Menus now respond to Home and End key events.
    -   I have changed the calling conventions for the ExpandStroke
        scripting command to reflect the height ratio value that is now
        needed.
    -   Holding down the Alt (Meta) key when using the freehand tool
        will now close the path.
    -   The Generate Fonts dlg will now display an appropriate bitmap
        fontname if "No Outline Font" is selected.
    -   I think I've got the wacom stuff working now. FreeHand tool now
        takes options.

-   08-Dec-2002
    -   Oops. Can't use Alt-Shift for menus (it's treated as a mnemonic)
        use Alt-Ctl-Shift instead.
    -   Reorganized the prefs dlg.
    -   Made FontInfo non-modal.
    -   Added a default icon for all fontforge's windows & dlgs.

-   06-Dec-2002
    -   Fixed a problem where FontForge still picked bad fonts
        sometimes.
    -   Typo in format spec for character windows
    -   At Werner's suggestion:
        -   The Transform dlg now preserves hints in the undo
        -   Added an indication of which layer was active
        -   Added an indication on the title bar that a character was
            changed
        -   Added a Revert Glyph command
        -   The location of the advance width pops up on the info line
            when the cursor moves over the advance width
        -   changed the Set Width command to get the right default
            value.
        -   There were some layout problems in the char info dlg.

    -   Redid the configuration for mac os/x. I've just upgraded to the
        new developers' tools and that fixed a lot of problems.

-   05-Dec-2002
    -   Fixed a crash in menus, if the cursor was moved from a submenu
        (a cascaded menu) to the menubar without passing through the
        main menu then a crash would happen.
    -   Clicking in a menu above the first line will dismiss the menu.
    -   Fixed a crash when generating postscript fonts.
    -   Oops. Bug in work of 2-Dec. The character named "u" was treated
        as uXXXX and given unicode U+0000 rather than U+0075.
    -   It is now possible to switch between editing layers in the
        outline character view by using the mnemonics displayed in the
        layers palette (even if the layers palette is hidden).
        Or by using the popup menu invoked by the third mouse button.
    -   Rewrote Expand Stroke so that the calligraphic pen is no longer
        treated as a line (it is now treated as a rectangle).
    -   Changed behavior of Next/Prev char so that they do not wrap in
        the outline character view. Also added the encoding to the
        title.
    -   In the outline view made a separate menu entry for Char Info and
        removed it from "Get Info". Made Ctl-Shft-I invoke Char Info in
        all views (Ctl-I will also invoke it everywhere but the outline
        view).
    -   Undo will now attempt to reset the modified bit on a character.
        It will not attempt to reset the modified bit on the font as a
        whole (there are too many things that can change without setting
        undo info).

-   2-Dec-2002
    -   If the fontview were only one line high FontForge would not
        scroll to the selected character properly.
    -   Adobe has released a new version of their glyph naming
        conventions. In particular they provide names for code points
        outside of the bmp. Danilo Sagan points out that they also allow
        for alternate glyph names. (specified in the
        [FDK](http://partners.adobe.com/asn/tech/type/otfdk/)).
    -   Remove the PFAEDIT\_PI1 environment variable.
    -   Cut and Paste bug fixed when clearing metadata.

-   25-Nov-2002
    -   Harald Harders provides a patch to allow SetItalicAngle to deal
        with real numbers.
    -   Vadim Belman provides a patch to keep Element-\>MetaFont from
        crashing when applied to spaces.
    -   Bringing up the preference dlg would segfault if there were
        arguments specified for autotrace.
    -   Put in a hack so that the environment variable PFAEDIT\_PI1
        controls whether U+03D6 is named "pi1" (as Unicode suggests it
        ought to be) or "omega1" (as Adobe has said it should be).
    -   Follow riggle's suggestion and use the shell command "open" (on
        a Mac) to bring up a browser window.

-   24-Nov-2002
    -   Harald Harders points out that UniqueID needs to be in both the
        font and the Private dictionaries in a PostScript font.
    -   And provides access to UniqueID from the scripting language.
    -   More fixes for TeX sfd files.

-   20-Nov-2002
    -   Changed the Simplify More command to bring up a dlg giving the
        user control over what errors Simplify More is allowed to
        induce.
    -   Bug in import image with non-latin1 fontnames
    -   New Russian ui translation
    -   Merge fonts didn't work well with CID keyed fonts
    -   Fixed yet another problem with notdef generation.
    -   Fixed yet crash in sfddiff.
    -   Using Font Info to convert to SJIS didn't work.
    -   Merge fonts had problems when both fonts were CID keyed.
    -   Generate a unicode encoding subtable even when generating a CJK
        encoding subtable.
    -   Added a preference item to allow user to specify whether s/he
        would rather read in the unicode or the cjk encoding subtable.

-   13-Nov-2002
    -   Two new tools in the outline character view.
        -   A hand tool -- for scrolling around
        -   A freehand tool -- for having fontforge try to fit splines
            to a hand drawn curve

    -   MergeFonts was broken from scripts.
    -   New Russian UI from Valek.
    -   Another remove overlap fix from KANOU.
    -   Added code to invoke Internet Explorer (or an Mac App) on the
        Mac (so pressing F1 should actually load some help on the mac
        now).
    -   Fixed random crash in font generation dialog
    -   PS-\>TTF conversion tried to force splines in cases where it
        could not.

-   05-Nov-2002
    -   Improved behavior of Remove Overlap. Fix inspired by Kanou.
    -   Added a "Find Intersections" command, a variant of remove
        overlap that stops after it finds the intersections. I think
        this half of the job has no major bugs.
    -   If a single point is in the clipboard, then FontForge will also
        export the clipboard as STRING, giving the coordinates of the
        point. This is to make it easier to refer to the point.

-   04-Nov-2002
    -   KDE has the lovely habit of losing some resize events when in
        continuous resize mode. So I've tweaked the fontview resize code
        so that it is less dependent on individual events.
    -   Added a mode where the user can choose between whether the font
        shown in the fontview should be scaled so that the em fits in
        the space provided (this is the old behavior) or so that the
        bounding box does.
    -   Rewrote the knife tool so that it cuts at the end rather than as
        it goes along. I think this is easier to use.
    -   Bug in the generation of format=2 truetype encoding tables (used
        for CJK fonts).

-   02-Nov-2002
    -   Png reading failed on greyscale images with an alpha channel
    -   Png now reads mono images as mono.
    -   make install (via libtool) didn't work if "." weren't in the
        PATH.

-   30-Oct-2002
    -   GenerateFamily() scripting command had a number of problems.

-   26-Oct-2002
    -   The "Apple" checkbox was sometimes (incorrectly) invisible in
        the Generate Font/Family dialogs
    -   Minor improvements to the "Insert Character" dialog (to match
        [umap](http://umap.sf.net/))
    -   Minor tweak to text fields
    -   More configuration changes

-   25-Oct-2002
    -   Problems when reading an sfd with references to cleaned up
        characters.
    -   Removed code from ttf generation that check for points of
        inflection (but fixed a couple of bugs in it before doing that).
    -   Change the way scripting GenerateFamily behaves. One person has
        already been unable to figure out how to use it, and I agree
        that it didn't make much sense the way I had it.

-   24-Oct-2002
    -   Change the default configuration process to use dynamic libaries
        -   Added "configure.static" which will configure for static
            libaries (On Mac OS/X the compiler gets internal compiler
            errors if asked to generate pic code)

    -   Enable reading a straight ttf file out of a .bin or .hqx wrapper
        (ie. doesn't need to be in a resource fork)
    -   The Kern Pairs dlg did not show Hebrew/Arabic right to left.
        Fixed
    -   Added a popup menu to Kern Pairs which will allow you to reset a
        kern pair
    -   Added a way to configure the font family used for info messages
        in the outline and bitmap character views.
    -   New man pages which use the macros supported by Sun. Thanks to
        R. P. Channing Rodgers.

-   22-Oct-2002
    -   Initial version of Mac Family (FOND) generation
    -   Fix old sfds so that their bad pngs will become bitmaps
    -   optimize the fix to draw magnified.

-   21-Oct-2002
    -   Verbose addition to scripting broke loops
    -   Various changes to make utf8/ucs2 selections work properly with
        other programs
    -   Hebrew/Arabic drag and drop could cause crashes
    -   The Increment right side bearing command (Metrics-\>Set
        RBearing) set the width to the value rather than incrementing by
        that value.
    -   Fixes for the local encoding being utf8
    -   Imported bitmap pngs still were seen as indexed
    -   Problems drawing magnified images when the scale factor was 100%

-   20-Oct-2002
    -   Updated French and Japanese UI translations
    -   Use LC\_CTYPE (rather than LC\_MESSAGES) to determine the
        current local encoding
    -   If the width line were selected then FontForge would sometimes
        snap cursor movements to an arbitrary x-value (often the axis)
    -   KANOU provided a patch which fixes some remove overlap problems.
    -   I had broken the generation of pure bitmap sfnts from scripts
        (7-Sept)
    -   Added a verbose mode to scripts (prints script to stdout as it
        is executed).

-   18-Oct-2002
    -   Tweaked metrics view so that null kerning now displays as an
        empty string rather than "0"
    -   If a font contained a kerning pair to a character that was
        omitted when saving the sfd file, then loading that font would
        leave it in a bad state and eventually cause a crash. Fixed on
        both ends (don't generate bad sfds any more, and can deal with
        them properly when found)
    -   Improved the "Insert Character" dialog a bit.

-   17-Oct-2002
    -   More work on Ik format files
    -   Redid UI for Auto Width/Kern to make it easier for
        cyrillic/greek users to kern their alphabets.
    -   Changed so that CJK encodings will attempt to map directly to a
        CJK font (rather than going through unicode) when displaying in
        the fontview.
    -   Added a command to join paths
    -   KANOU points out that support for mimetype cut/paste (11-Sept)
        broke cut/paste in scripting.
    -   KANOU supplied a patch for the knife tool.
    -   KANOU points out that IsVisible didn't work properly if passed a
        NULL point (it should never be passed a NULL pointer, but if it
        is no reason not to work correctly).
    -   KANOU points out that the UniqueID for ttf files used a bad
        date.
    -   Had the wrong MS language ID for hungarian
    -   Some of Luc Devroye's fonts contain a "div" in the FontMatrix.
        ATM doesn't support this, but it is easy enough to accept. Still
        don't support a full expression there, just a div.
    -   If we read in a gsf font and then generated postscript from
        that, we weren't able to read in the result.
    -   Added an empty glyph-encoding sub-table to mac FONDs
    -   Save multiple postscript did not save the first sub-font
    -   The second count in BeginChars could be wrong in an sfd file
        (FontForge doesn't care, but I suppose some program might).
    -   Add support for local encoding being UTF-8. Prefs now has an
        option to try and figure out the encoding from the locale
    -   Display filenames in the local encoding.
    -   There was an erroneous test in simplify which caused FontForge
        to complain about an internal error when in truth all was well.
    -   There was a bad test in dumpbdf
    -   Export will now allow the user to generate png files (if s/he's
        got the png libraries)
    -   It is possible to invoke Export from a script

-   11-Sept-2002
    -   Added a menu in textfields (right mouse button)
    -   Added support for STRING\_UTF8 selections
    -   Added support for "image/png", "image/bmp", "image/eps",
        "text/plain;charset=ISO-10646-UCS-2", "text/plain;charset=UTF-8"
        -   (two image format)
        -   (one format for reading spline data)
        -   (two more ways of expressing unicode text data)

-   10-Sept-2002
    -   Added support for UTF8 in display/print dlg imports.

-   9-Sept-2002
    -   Added support for loading Ikarus .IK font files
    -   Fixed a divide by zero problem when generating ttfs
    -   If you type into the Kern Pairs dlg, it will now scroll to the
        pairs associated with the character you typed.

-   8-Sept-2002
    -   Display crashed on systems without freetype
    -   my xfig reader didn't handle arcs
    -   Merge fonts and Interpolate fonts didn't merge/interpolate
        kerning pairs

-   7-Sept-2002
    -   The ruler tool will give the length of a spline if applied
        between the spline's endpoints
    -   Made FontForge a little smarter about when to change the xuid
        field.
    -   Added a dlg to [display fonts](display.html)using freetype.
    -   Added support for the obsolete \_XFREE86\_GLYPH\_RANGES property
        and then turned it off by default.
    -   Improvements to type2 output.
    -   Changed greek accents to use 0x384 rather than 0x30d when
        substituting for 0x301
    -   I've found another case where Apple and MS/Adobe disagree on the
        format of ttf/otf files. So there's now a check box in the
        Generate dlg which allows you to select between the two defns.
        I've removed the two different kinds of bitmaps for ttf files,
        these are now controlled by this new checkbox too.
    -   FontForge would sometimes in otf files generate curves which
        should have been done as lines.
    -   macbinary resource output broke when I fixed straight resource
        output the other day.
    -   When a grid line was a line but expressed with control points,
        then fontforge would get very confused about how to snap to it.
    -   Fixed a bug in the generation of ttf/otf fonts with
        big5/sjis/wansung encodings.
    -   The ligature dlg had a bad habit of crashing.
    -   On the Mac, Obliqued fonts are stored in a weird postscript
        format. Try to support them

-   2-Sept-2002
    -   When in no-x mode, fontforge did not notice any arguments
        (except -script). It will now notice -version, -usage and -help.
    -   The PS Names check box would be visible when generating otf
        fonts. It should not have been.
    -   If a font contained multiple encodings for the same character,
        then generating an otf font from it would crash fontforge.
    -   There is now a proper french translation of the ui (Merci Pierre
        Hanser!)
    -   Under cygwin, FontForge would fail to find internet
        explorer/netscape (because not in user's path) and if it did
        find them would try to invoke them with a cygwin style name (ie.
        /usr/local/share/doc/fontforge/overview.html rather than
        c:\\cygwin\\usr/local/share/doc/fontforge/overview.html )
    -   Added a preference item to allow you to control whether a
        mapping file from glyph ids to character names is produced along
        with ttf and otf fonts.

-   1-Sept-2002
    -   Added an \#ifdef to an include file to make it work when built
        without X11

-   31-August-2002
    -   Making a font be a cid-keyed font might screw up all other
        fontviews and lead to crashes.
    -   type1 cid keyed fonts got the wrong fontmatrix if the em-size
        was something other than 1000. Doesn't seem to make a difference
        though, we still get bad output for emsize!=1000
    -   got maxp.numGlyphs wrong for otf cid-keyed fonts which lacked a
        .notdef character
    -   Added a check to make sure fontnames are less than 63
        characters. Needed for ATM.
    -   format 2 Coverage tables (used by GPOS and GSUB tables (kerning
        & ligatures for otf)) were being generated incorrectly. This
        meant that windows would refuse to read my otf files which had
        complex kerning. (presumably complex ligs, but I had no test
        cases). The mac printer driver has also had problems with my otf
        files. This may be why.
    -   Added a popup to the kern pair dlg to tell user how many kern
        pairs there are, and how many characters start kern pairs.

-   29-August-2002
    -   Merge and Elide were backwards
        -   And merge (simplify) had problems when a desired spline at
            the same slope at the start and end (or something like
            that).

    -   Added a field to Review Hints showing the total number of hints,
        flag for h/vstem3, ability to move points associated with hint
        when moving hint. also added a hot key for it.
    -   Added a Find Problem to detect things which are almost but not
        quite h/vstem3
    -   AutoHint wasn't finding all the ghost hints it should have.
    -   Put in (what I hope is) a better way of detecting extraneous
        hints (the hypen case. At first sight the hstem and vstem appear
        equally valid) remove hints which are wider than they are long.
    -   More fixes from KANOU for cid fonts
    -   The scale to em checkbox only (sort of) worked if the emsize
        increased. Fix from KANOU
    -   Autohint could go into an infinite loop on characters containing
        a 0-length spline.
    -   Problem with cff name table fix of 27-Aug
    -   bdf fonts were loaded into background by default
    -   Scripting problem loading bitmap fonts into background.

-   27-August-2002
    -   Further attempts to fix the fact that FontForge in some ways
        does not believe that monospaced ttf files are monospaced.
    -   Problems with endif
    -   Redid the Find Problems dialog by adding tabs so that related
        problems are grouped together.
    -   Added a problem which will report advance widths which do not
        match some standard value.
    -   CID keyed generation was broken again by the (failed) attempt to
        make things work with FontLab (18-Aug)
    -   cff name table could be off by 1 if there were a real notdef
        character
    -   Added ability to display blue zones in outline view.

-   21-August-2002
    -   Broke cid-keyed otf generation on 27 July when I enabled the
        [Stop] button. Fix by KANOU.
    -   Bringing up progress indicator early (20 August) broke scripting
        without X11.
    -   Added ability to load a font protected by fstype=2 to a
        scripting (extra argument to open).
    -   Enhanced print abilities.
    -   Added ability to Print to scripting.
    -   Attempt to fix the fact that windows doesn't recognize my
        monospaced ttf fonts as monospace.
    -   FontForge could be confused by strange values of Ascent in the
        hhea table
    -   Added a Round to Int option to the transform dialogs
    -   Added ability to change the em-size (and rescale the font) to
        fontinfo

-   20-August-2002
    -   Under KDE my tools palettes are made too wide and without
        borders. That's ok until they get reparented (docked). Added
        code in the docking routines to fix these problems.
    -   May have fixed a race condition problem due to reparented
        windows under freebsd.
    -   TeX sfd files are a little more complicated than I had
        originally thought, the parser is now more general.
    -   FontForge sometimes thought some X fonts had iso8859-1 encoding
        when they did not.
    -   cleaned up some problems with encodings
    -   Added support for TeX (actually MetaFont) gf files
    -   RLE background images sometimes showed up inverted (with
        background color as foreground & vice versa)
    -   The Fit in window command should now take docked palettes into
        consideration.
    -   Added a Japanese translation of the UI, courtesy of KANOU
        Hiroki.
    -   Added the ability to run `mf` on a .mf font, generate a gf file,
        autotrace the gf file, and leave you with a font based on an mf
        file.
    -   Menus now do pointer grabs.
    -   Fixed a bug in generating PostScript resource file fonts on Mac
        OS/X

-   18-August-2002
    -   Added a dlg to show all kern pairs (and another to show all
        ligatures)
    -   Added a "Find Problems" item to check for missing bitmaps.
    -   Put in some warnings to the ttf parser for bad cmap and glyf
        tables
    -   FontForge was still having trouble about loading space bitmaps
        (that had been generated with freetype).
    -   FontForge did not set the flag indicating manual hinting after
        changes by Review Hints or Create Hint. Should be set now.
    -   Various small tweaks to the pfa/pfb output because FontLab
        doesn't like what we currently do. Probably none will make much
        difference.
    -   The Print command would attempt to print characters outside the
        encoding of type1 fonts. This did not work well.
    -   The autowidth command got very confused when given a sans-serif
        script to autowidth when the Latin characters in the font were
        serifed.
    -   The Print sample text is now ordered so that the language
        specified in the LANG environment variable comes first in the
        list.
    -   Added \$version
    -   FontForge will now read scripts from stdin if you follow the
        "-script" argument with "-".
    -   Valek points out the using CharInfo to change a character's
        color did not change it until the fontview was refreshed
    -   Expand Stroke had problems when intersections bent the wrong
        way.

-   9-August-2002
    -   I've decided to encourage use of the [mailing
        lists](index.html#Mail) for reporting bugs. A feeble attempt to
        cut down on the spam I get by removing my e-mail address from
        the site.
    -   Bug in the dlg asking for the resolution of a bdf font. The
        second (and subsequent) time(s) it came up it would have a good
        chance of never going away again, and potentially crashing
        FontForge into the bargain. (number of other bugs here too)
    -   If the postscript "FontName" contained a hyphen then any
        generated BDF fonts would have invalid X fontnames (they hyphen
        would be included which would throw the name parsing off by one
        hyphen).
    -   Greg Ford points out that generating a bdf font and then loading
        it back in will often change the fontname. This is because the
        fontname is not actually stored in bdf files. I've added a
        FONT\_NAME property to the bdf fonts I generate.
    -   FontForge would sometimes forget about the first bitmap
        character in each bitmap font stored in an sfd file. **Please
        check any sfd files to see if they are missing bitmaps of space,
        exclamation point, etc.**Probably introduced 11-June.

-   8-Aug-2002
    -   After yesterday's fix textfields ignored backspaces
    -   More work on the metrics lines. There's now a dlg to control
        which ones get drawn.
    -   FontInfo would sometimes crash after adding ttf names.
    -   Added minimal ability to dock palettes into their respective
        views.
    -   Added a way of looking at the fontview where there are now holes
        in the font (ie. a compacted view where every cell contains a
        glyph). This is just another encoding, but people have been
        asking for it and it is slightly easier to get to than normal
        reencoding of a font. Note: It has no defined relationship to
        the glyph array in a ttf file.

-   7-Aug-2002
    -   The 21-July autowidth/kern change broke autowidth/kern
        scripting.
    -   And the serif detection failed if the character I did not reach
        the baseline.
    -   FontForge read RGB png files incorrectly.
    -   FontForge used to bring up most dialogs underneath the cursor.
        Now it only does that if the focus is set to FocusFollowsMouse,
        and otherwise centers dlgs.
    -   FontForge now will draw metrics lines in the fontview if you
        want it to.
    -   FontForge remembers what outline character views were open when
        a font was saved (as an sfd file) and will automagically reopen
        them when you next load that font.
    -   Added `View->Find In Font View` command to the outline character
        view. Will scroll the fontview to display the current character.
    -   Textfields within FontForge ignored the numeric keypad

-   4-Aug-2002
    -   Yesterday's resize fix didn't quite work
    -   Try to improve conversion of cubic to quadratic spline
        (actually, we make the conversion worse, but it probably helps
        rasterizers not to have points quite so close together).
    -   Some more work on the TTF style name

-   3-Aug-2002
    -   Failed to read ttf fontnames properly for some dfonts (probably
        some ttc files as well)
    -   Didn't position references by point matching properly (when
        loading from ttf)
    -   removed some debugging code inadvertently left in after the rle
        fix.
    -   Added support for [X Input Methods](xim.html) (to do CJK
        character input properly)
         This only works if X\_HAVE\_UTF8\_STRING is defined -- an XFree
        4.0.2 extension (ie. not on solaris)
    -   Added a possible fix to a resizing problem for some window
        managers.
    -   Added CIDFlattenByCMap function to scripting.

-   30-July-2002
    -   Fixed a couple of problems found by
        [valgrind](http://developer.kde.org/~sewardj/)
    -   Applied a patch from KANOU Hiroki. PasteInto did not work.
    -   Added run length encoding compression to sfd files (for
        background images). Bitmap image sizes are much smaller now.
    -   FontForge failed to recognize that a PNG black and white image
        was monochrome.
    -   Now FontForge will immediately put up the progress indicator
        when loading the first font (so the user has something to look
        at)
    -   A little more work on generate multiple.
    -   Removed a confusing message about autohinting a font for which
        no autohinting was actually done (it was just checking to see if
        it needed to).
    -   Oops. Windows won't accept a ttf file if there is no name table
        entry with the same platform/specific entries as those in the
        cmap.
    -   If a character contained a reference to a blank character that
        FontForge decided wasn't worth outputting, then the truetype
        composite for it would not work.
    -   The standard format for the ttf "version" name is different from
        the equivalent postscript name. Added code to interconvert
        between the two rather than expecting them to be the same.
    -   Added a gasp table for when there was no hinting.

-   28-July-2002
    -   Pressing the [Filter] button on a blank field will show the
        current filter text (holding the mouse over the [Filter] button
        will cause a popup to appear with the same info).
    -   If there were know selection the pressing an arrow key would
        presume that the selection was at encoding -1, which caused
        strange behavior. Now we will pretend that the selection is
        visible and halfway down the screen.
    -   Oops. CMap files allow for multiple encodings for the same
        glyph. Now prepared to put in refs.
    -   Oops. Generate multiple had several problems (couldn't handle
        encodings above 0x80000000, was surprised by empty font numbers,
        etc.)
    -   If a family name contained a space then only the first word in
        it would be read out of an sfd file

-   27-July-2002
    -   Oops. I was calling TeX sfd files Sub Font Directories and their
        proper name was Sub Font Definition.
    -   Enabled the [Stop] button in the progress dlg when saving a
        font.
    -   FontForge would go into an infinite loop when reading one of its
        sfd files when it was expecting a TeX sfd file. Fixed, and put
        in guards so that won't happen anyway.
    -   Added two new menu commands "Flatten to CMap" and "Convert By
        CMap". These will use one of Adobe's CMap files to guide the
        Flattening/Converting process (rather than one of my cidmap
        files)
    -   Added support for some really large encodings if they have
        almost equally large gaps in them (use adobe's "coderange" data
        to manage a sparce array).
    -   If we could not find any style modifiers in a fontname, then we
        used to claim that the style was "Regular". I think it is better
        if we claim that it is /Width (ie. whatever is in the FontInfo
        /Width entry) and if that isn't set then return "Regular")

-   26-July-2002
    -   Added support for Werner's (TeX's) Sub Font Definition files
        which provide a way of splitting up a 2 byte encoding into lots
        of little pfb fonts with 256 characters in each.
    -   Normally in a ttf font, FontForge generates a 'post' table with
        the names of all the characters in it. I've just added a way to
        make it generate a short 'post' table with no character names.
    -   FontForge generates bad truetype hints. There is now a way to
        turn these off in the Generate Font dlg.

-   24-July-2002
    -   Code for finding the style still not working as it should.
    -   Oops, the postscript parser was over-zealous about generating
        warnings.
    -   Oops, the code which interprets results from autotrace was
        over-zealous on getting rid of contours in small images.

        * * * * *

    -   SetUnicodeValue did not behave as it should have.
    -   Made acorn2sfd a little sturdier.

        * * * * *

    -   Bitmap copies didn't work from the font view (probably broke
        when I added anti-aliased support)

-   23-July-2002
    -   Crash bug introduced yesterday by the duplicate name work.
    -   Initial version of *[acorn2sfd](acorn2sfd.html)* -- a program to
        convert Acorn RISC/OS font directories into sfd files.
    -   If a font is loaded from a ttf file, then it will have both
        postscript and ttf versions of certain names stored (family,
        copyright, version, etc.). The postscript names are obviously
        displayed, but changing them would not change the ttf versions.
        So generating a ttf font and then looking at it would still show
        the old setting of the name. The two should be better
        synchronized now.

-   22-July-2002
    -   Introduced a crash yesterday if a postscript font contained an
        name in an encoding vector which was not defined in the font.

        * * * * *

    -   More work on duplicate names. I no longer append a ".\<number\>"
        to the end of duplicate entries and when generating fonts I
        remove them and generate an encoding with has multiple
        references to the base glyph. Which is what I should have been
        doing.
    -   Small improvements to the style name detector.
    -   If the Width field was a null string, then reading it from an
        sfd file caused us to thing the next keyword was the width.
    -   Fixed a bug in the display of menus.

-   21-July-2002
    -   Various small bugs in build accented characters
    -   On the mac the filenames for mac resource fonts are different
        from same fonts elsewhere (elsewhere they have an additional
        ".bin"). Made either extension work from a script file (so they
        can work cross platform).
    -   Expand Stroke had problems with curved splines where the slope
        at one of the end-points was 0/0. Since this will happen by
        default when joining a corner point to a curved point this
        should have been a frequent occurrence.
    -   Bug in generating 'post' table if glyph 0 existed but was not
        .notdef.
    -   PostScript fonts with one glyph going to multiple encodings
        cause problems.
    -   Now both PS and TTF load will have consistent names in the above
        case.
    -   My presumption of how symbol encodings were stored under
        MicroSoft was wrong. It is not a one byte encoding, it is a map
        into the private/corporate use area of unicode. 0xf000-0xf0ff.
        Changed to deal with that.
    -   Loading a font with mac roman encoding often generated a font of
        65536 characters (rather than 256+a few extras). Fixed.
    -   New version of autowidth/kern. I don't think it kerns serifed
        fonts well, might do ok for sans.
    -   Ability to provide autokern with a list of potential kern pairs
        and have it just check them.

        * * * * *

    -   Scripting support for kernpair files
    -   AutoWidth/Kern now does a little better on serifed fonts

-   15-July-2002
    -   Correct Direction should now only set the changed bit when it
        actually changes a character.
    -   Correct Direction will now warn about flipped references, and
        offer you the chance to unlink them (after which it will be able
        to correct their direction)
    -   Added ability to scripting to check if a character has changed,
        and to get a font's filename.
    -   Cleaned up build accented chars a bit.
    -   Another attempt to keep X from crashing on disappearing progress
        dlgs.
    -   Maximizing the fontview could make it bigger than the screen so
        that the scroll bar was unusable.

-   14-July-2002
    -   Valek points out that bitmaps generated by freetype were one
        pixel too high.
    -   Changed the get info dlg for references so that the user could
        change the transformation matrix.
    -   Font Info-\>PS Private got the wrong value when guessing the
        vertical stem snaps
    -   FontForge did not find ghost hints for things at the numeric
        height.
    -   FontForge got non-integer values for some hints where it should
        have found integer values.
    -   Bug when auto-hinting references fixed.
    -   FontForge would find hints for things that don't need to be
        hinted (finding a vertical stem for the top of "E" for instance.
        There is a vertical stem there, but it is deemed irrelevant). It
        now finds fewer of these hints. I hope it still finds all the
        legitimate ones.

-   13-July-2002
    -   I think I've finally worked out Apple's scaled offset
        [composite](/assets/old/Composites/index.html) glyphs (and they do not
        behave as Apple documents)
    -   FontForge was not setting the maxCompositePoints and
        maxCompositeContours fields of the maxp table of truetype fonts.
        This meant that in some cases rasterizers would crash when
        trying to deal with characters containing many components.
    -   The translation tables between unicode and johab were wrong.
    -   FontForge failed to generate ttf fonts with big5/sjis/wansung
        cmaps.
    -   Changed so that reading sjis/wansung encoded ttf files would use
        a sjis/wansung encoding in fontforge (rather than the 94x94
        encoding that no one but me seems to understand).

-   9-July-2002
    -   Bug in generating ttf fonts with embedded bitmaps.
    -   Open Font dlg will now try again if it can't load a valid font.
    -   Started working on a [minimal
        testsuite](http://cvs.sourceforge.net/viewcvs.cgi/fontforge/fontforge/test/),
        and what do you know? I found some bugs...
        -   Scripting had problems when user preference was set to ask
            for bdf resolution.
        -   Generate() scripting built in now takes an optional
            resolution argument
        -   Problems generating the vertical metrics tables in cid keyed
            otf fonts
        -   Problems working with cid-keyed fonts in scripts if
            fontforge could not find the requisite cidmap file

            * * * * *

    -   Fixed various problems with parsing EPS files, and extended the
        vocabulary a little.
    -   If the ".notdef" character was whitespace (as it is for most
        postscript fonts) then generating a ttf font would produce an
        entry for glyph 0 that both flint and NT consider to be
        erroneous, while freetype and windows think it's fine. Fixed so
        that Flint no longer complains.
    -   the fontview could get confused about matching short names with
        periods in them against the standard postscript unicode names,
        so it could think that "b.0" matched "bracketleft". This caused
        some confusion in the display.

-   27-June-2002
    -   A couple more vms patches

-   26-June-2002
    -   Merged in Jouk Jansen changes for OpenVMS

-   23-June-2002
    -   Valek wanted to be able to add comments to characters and to
        flag characters with some visible mark. The [Char
        Info](charinfo.html#Character)dlg has been extended to do this.
        The scripting language has been extended to allow scripts to set
        and test these too.
    -   Added a "foreach selected character in the font" loop.
    -   Added \$selection variable to return the current selection as an
        array
    -   Extended the Select() and SelectMore() commands to accept an
        array as an argument (and set the selection to the array).

-   22-June-2002
    -   Yesterday's unicode sprintf change introduced another bug. Fixed
    -   Valek points out that if you have a bitmap only font and you
        attempt simultaneously to scale it and delete all the bitmaps,
        then FontForge would crash. (Same thing would happen if you just
        removed all the bitmaps).
    -   Valek provided some additional russian translations.

-   21-June-2002
    -   Ttf fonts seem to be unhappy if they contain a glyph with a
        single contour and a single point on that contour. I don't know
        why. Output all such as spaces.
    -   Added ability to set the resolution of a bdf font.
    -   Rearranged preferences.
    -   Added scripting access to Force-Encoding
    -   FontForge memory allocation optimizations didn't work if
        sizeof(int \*)==8
    -   Bug in unicode sprintf routine when sizeof(long)==8
    -   In some cases when reading a ttf font with a (unicode) cmap
        which assigned one glyph to two encodings, and if that glyph
        happened to be in the AdobeStandardEncoding, then when
        converting to Type1 FontForge would create a dictionary which
        recursively seac-ed (invoked) itself. This caused an infinite
        loop in GhostView, and crashed some printers.

-   11-June-2002
    -   CID fix on 3 June was wrong, it broke all non-CID keyed
        postscript fonts (it did work for CID fonts). Both should work
        now.
    -   Added better support for bdf foundries and for bdf copyrights.
    -   Added a preference item to specify the ttf VendorID (foundry).
        Used to truncate the bdf foundry to 4 characters.
    -   Small bug fix in print
    -   Cleaned up bug in scripting (\$bitmaps)

-   7-June-2002
    -   Fixed some more CID font problems
    -   Tweaked behavior of FamilyName/FullName in GetFontInfo dlg.

-   6-June-2002
    -   FontForge now supports greymap strikes in truetype files
    -   The bitmap editor has been extended to handle greymap
        (anti-aliased) fonts
    -   There is no longer a separate mechanism for generating greymap
        files from the Generate Font dlg, instead they may be added to
        the font database file with the bitmap dlg.
    -   Added support for vertical metrics in bdf files.
    -   Fixed some problems in moving the vwidth line in outline
        character views
    -   Added some default window positioning code.

-   4-June-2002
    -   Oops, more bug fixes for the new greymap format.
    -   One more attempt to solve the X Server bug where
        destroying/unmapping a window before its map notify event gets
        processed causes the X server to crash.

-   3-June-2002
    -   Stopped using my extension to bdf to make it support greymaps
        and started using that supported by freetype (removed the
        BITSPERPIXEL keyword and added an extra argument to the SIZE
        keyword).
    -   More fixes for cid fonts

-   18-May-2002
    -   Font Info will prompt user about changing the UniqueID/XUID if
        the font name is changed without changing them.
    -   Fixed some Mac configuration problems.

-   16-May-2002
    -   FontForge would not compile when trying to used libjpeg as a
        static library (as on Mac OS/X)
    -   Use psili rather than koronis where appropriate
    -   It was not possible to select the ellipse/star tool from the
        tools palette.

-   14-May-2002
    -   Made fontforge work without X (ie. the scripting engine can be
        linked without requiring that X be present. Possibly useful for
        Mac OS/X, Cygwin)

        * * * * *

    -   When showing what a greek accented character will be built from,
        the character info dlg will now show the non-unicode alternate
        whether or not the characters needed exist in the font.
    -   The Reference Info dlg will now include the unicode value of the
        referenced character
    -   The positioning of ypogegrammeni with respect to eta was broken
        (again)
    -   Some more greek fixes.

-   13-May-2002
    -   Various fixes for greek accented characters

-   7-May-2002
    -   FontForge would crash when attempting to Flatten a CID keyed
        font (introduced 16-Apr with the multiple fontview support)
    -   FontForge did not process panose information correctly (broken
        21-Jan, comment change)
    -   FontForge did not create new ttf names properly when they were
        for a language which had not been used before in the font.

-   6-May-2002
    -   Oops. Adobe describes two naming conventions for ligatures and I
        only supported one of them. I should support the other one now.
    -   Fixed a number of bugs caused by custom encodings.
    -   If the selection in the font view contained either "dotlessi" or
        "dotlessj" and the Element menu was pulled down then the dotless
        characters would be created from their dotted variants (you
        didn't even have to select anything from the menu) (broken
        24-Feb-2002)
    -   FontForge had trouble reading non-empty ttf glyphs with 0
        contours.
    -   FontForge failed to read images from an sfd file without a
        transparent colour
    -   Allow parens in familyname in the fontinfo dlg.
    -   When the width was selected, depressing a mouse button would
        snap the logical pointer location to a random x coordinate
        (often 0).
    -   When generating a ttf file from a subfont of a CID keyed font
        fontforge would crash. This has been fixed.
    -   When exiting with multiple font views looking at one (changed)
        font, there would be no prompt to save the font.
    -   Added a [Find/Replace](search.html) feature

-   16-Apr-2002
    -   BDF fonts did not mark the missing (.notdef, undefined, etc.)
        character properly.
    -   otf fonts had the default and normative widths reversed on
        output
    -   Added marginally better support for non-latin ligatures in
        GPOS/GSUB tables.
    -   Added support for arabic forms in the GSUB table (ie. we now
        produce 'init', 'medi', 'fina', and 'isol' features)
    -   Build composite should now note whether arabic ligatures are
        \<initial\>, \<final\>, \<medial\> or \<isolated\>
    -   It is now possible to have multiple font views looking at one
        font. I expect this will be a rich source of bugs, especially
        for CID keyed fonts.

-   9-Apr-2002
    -   Under KDE we could get two textfields flashing cursors (thinking
        they had focus) should be fixed.
    -   Added Undo/Redo to metricsview
    -   Added Undo/Redo to fontview
    -   Added Element menu to metricsview
    -   Added [Fix] button to (some of) Find Problems

-   5-Apr-2002
    -   Applied various patches from KANOU Hiroki
    -   Changes to metricsview
        -   Fixed some minor bugs
        -   Double clicking on a character will open that character
        -   Enabled Copy/(CopyRef/CopyWidth/)Paste but not Cut

    -   FontForge had problems when there were exactly two X resources.
    -   Made the Point Info dlg wider.
    -   Improved printing text samples at large point sizes.
    -   I was generating flex hints incorrectly.
    -   Extended postscript interpreter slightly to recognize the eps
        files (called "art") produced by fontographer
    -   Additions to the scripting language
        -   CenterInWidth
        -   AutoWidth (from Andreas Påhlsson)
        -   AutoKern

    -   The Expand Stroke fix for 4-Mar-2001 was too extreme.
    -   Added a field to Char Info that shows the components out of
        which this character (accented, ligature, hangul syllable, etc.)
        may be built.

-   3-Apr-2002
    -   Various scrollbar enhancements
        -   thumb now has a bigger minimum size
        -   fontview/charview both respond to page up and page down
            requests
        -   right mouse button may be used to position thumb

    -   Installed James A. Crippen makefile patch so that distclean
        reports success even if there are no files to clean.
    -   FontForge had problems guessing default ligatures for characters
        outside of BMP.
    -   In the outline character view, double clicking with one of the
        point tools (curve, corner, tangent, pen) will add a point and
        then bring up a [Point Info](getinfo.html) dialog
    -   If you edit in a textfield (so that the mouse pointer vanishes)
        and then tabbed into another text field the mouse pointer would
        never reappear.
    -   Merge Fonts left memory in a bad state and would often cause a
        crash.
    -   Merge Fonts used a string for a title which was ascii when
        unicode was expected. This could cause strange characters to be
        displayed.
    -   More fixes for build accented characters (for inverted breve and
        Oslash).

-   14-Mar-2002
    -   Nifty. The modifier keys auto-repeat under cygwin (if Control is
        down one gets a series of Press/Release, Press/Release... while
        normal X just gives one Press.) This meant we'd keep refreshing
        the tools palette, which meant an annoying flicker and slowed
        things down.
    -   Raise the palettes after a resize
    -   FontForge didn't handle 8bit colormaps well. I've improved the
        behavior, and added an x resource to give the user some control
        over behavior.

-   10-Mar-2002
    -   Oops. I broke CID-keyed postscript input (ie. none-otf) when I
        added the 6-Mar fix for type1utils
    -   Applied another patch from KANOU Hiroki, on otf cid support

-   9-Mar-2002
    -   added docs for sfddiff.

-   8-Mar-2002
    -   Added a new program, [sfddiff](sfddiff.html), to compare fonts
        and show their differences.

-   6-Mar-2002
    -   Small change to the format of cidmap files (to bring names into
        conformance with adobe's spec on modified unicode names), and
        corresponding changes to a few routines.
    -   Add support for the type1 format produced by GNU type1utils.
        Which is vaguely like that used by ghostview.

-   4-Mar-2002
    -   Fixed more problems with reading eps files (these were mostly
        within Expand Stroke, so presumably also problems with
        Element-\>Expand Stroke)
    -   And one more problem with the file chooser.
    -   Scripting additions:
        -   Ability to generate a pfm file from script
        -   Ability to Merge Kerning Info from a script
        -   Ability to Remove All Kerning info from a script

    -   

        * * * * *

        Will now display something useful for rotated and italic cids

-   3-Mar-2002
    -   Fixed a number of problems involved in reading in eps files.
    -   28-Feb Mac work introduced a bug in the file picker dlg (in
        wildcarding).

-   2-Mar-2002
    -   Rounding errors could accumulate when generating Type1 fonts.
    -   Fix for some overlap problems due to KANOU Hiroki
    -   If FontForge crashed (or was interrupted) after making some
        (unsaved) changes to a font, and that font was subsequently
        deleted, the FontForge's autorecovery would complain about a
        missing file each time it was started. Now it will notice the
        problem and ask whether it should delete the recovery file
        (whereupon it will stop complaining).
    -   Enabled a fix from Greg Ford so that FontForge set the mac style
        bits appropriately.

-   28-Feb-2002
    -   When running under Mac OS/X FontForge is now able to open/create
        mac resource forks
    -   I may have fixed a bug displaying images on solaris screens with
        bit depth 8
    -   Cleaned up a problem with the postscript name table (in a ttf
        file) when there was a .notdef character
    -   Fixed some problems with references when reading in truetype.

-   24-Feb-2002
    -   Substr() did not work when given three arguments
    -   Added
        -   \$bitmaps (returns an array of all bitmap sizes rasterized
            for the current font)
        -   BitmapsAvail()
        -   BitmapsRegen()

    -   Changed the FontInfo dlg to give direct access to the postscript
        names rather than trying to build the fontname out of family and
        modifiers.
    -   Added the ability to create an encoding which is any given plane
        of unicode (ie BMP is plane 0, SMP is plane 1, SIP is plane
        2...)
    -   Fixed a bug in Revert
    -   More work on hints.

        * * * * *

    -   Build Composite will now build a dotlessi from an "i" (and same
        for dotlessj)

-   20-Feb-2002
    -   Made Shift-Arrow keys move along italic axis.
    -   \$argv didn't work in scripting. (broken when I added arrays)

-   19-Feb-2002
    -   Bugs in the generation of MacRoman encoding tables in ttf output
        (introduced 14-Feb)
    -   The Goto Dlg sometimes didn't notice Returns (ie. OK button
        wasn't always invoked)
    -   Some linear splines were not noticed as such.

-   18-Feb-2002
    -   Cancelling the Point Info dlg would leave minimum distance hints
        in a bad state.
    -   Using Undo also left the MD hints wonky
    -   added \$fontchanged to scripting
    -   Added SaveAll menu item in font view.
    -   Sometimes the underlines for accelerators didn't print in the
        menu (depended on what FontForge thought the screen resolution
        was).
    -   Added a new minimum distance hint for serifs of diagonal stems.
    -   Fixed a bug where some extra serif stems were hinted.

-   16-Feb-2002
    -   Created a "Select" submenu of the edit menu in the outline view.
        Moved Edit-\>Select All, View-\>Next Point, View-\>Prev Point
        into it.
    -   Added Deselect All, Select Next Control Point, Select Prev
        Control Point, Select First Point, Select Width, Select VWidth
    -   It is now possible to select the width (right bearing) line and
        move it with the arrow keys or transform dlg (or to move points
        and the width line concurrently). VWidth too.
    -   Added variables with global and font scope to Scripting.
    -   Yet another bug in the new simplify/merge code
    -   Cleaned up unicode range names a bit more.

        * * * * *

    -   Changed the Goto Character dialog so that it will now (for
        two/four byte encodings) display a list of unicode ranges which
        are in the font and allow you to go to a range by name.
    -   Made it possible to copy and paste the left and right side
        bearings (from menus and scripts)

-   14-Feb-2002
    -   My TrueType parser will now read cmap subtable formats 8,10 and
        12 (the 4 byte encoding tables) and will produce format 12
        subtables for full unicode fonts.
    -   Cleaned up various encoding problems.
    -   Fixed display of SJIS.
    -   Added better commentary on unicode outside of BMP
    -   Cleaned up the spec file
    -   In pfb files subroutines for references didn't work if the first
        thing called was untranslated.
    -   The arrow keys can be used to move a control point.

-   12-Feb-2002
    -   Added sjis and Wansung encodings
    -   Used freetype for a couple of other things (generating gdf files
        and exporting bitmaps)
    -   Textfields didn't respond to middle button clicks (to paste the
        primary selection).
    -   FontForge would sometimes fail to exit properly if you brought
        up a script dlg.
    -   Added a --version command line option.
    -   Fixed another bug in generating postscript.
    -   Added a user defined print command option to the print dlg.
    -   Fixed a bug in Simplify/Merge
    -   Fixed a bug in loading integer resources
    -   Cleaned up the help command line option.

-   9-Feb-2002
    -   FontForge will now use freetype (if available) to generate
        bitmaps for the fonts (results are much better).
         It still does its own rasterizing for the fontview (there's a
        lot of overhead involved with freetype, and this needs to be
        fastish)
    -   Made the Generate Font dlg settings sticky across invocations of
        fontforge.

-   8-Feb-2002
    -   FontForge would crash when generating a PostScript font from
        ARIAL.TTF.
    -   Changed the bitmap dlgs so that they allow you to specify some
        control over interesting screen resolutions. (before just
        support X standard res. of 75 and 100, now support MS 96&120 and
        Mac 72).
    -   Oops, Apple now documents that the bdat and bloc tables should
        have version number 0x20000. But when I last looked it said
        0x10000 and that didn't work.
    -   Put the docs in their own rpm file.

-   7-Feb-2002
    -   I think I've figured out how Apple does asian bitmaps now. They
        don't use NFNTs at all (or they do, but those NFNT are tiny
        stubs with no real data in them). All the data are in the sfnt.
        I should produce them properly now.
         -- Except I don't.
    -   I've also added the ability to create bitmap only sfnts for the
        mac.
         -- Which also isn't recognized by the mac.
    -   Made it possible for scripts to generate bitmaps without
        generating an outline font
    -   Fixed some problems loading bitmaps from ttf files.
    -   Fixed some problems loading bitmaps from anything...
    -   Allowed importation of eps files from the font view (to the
        extent that I can parse eps files, that is)
    -   Oops, scripting didn't support importation of pcf files.

-   5-Feb-2002
    -   Sometimes popup windows (tool tips) would show up with nothing
        in them. That should be fixed now.
    -   Added icons for pcf files
    -   Started work on 32 bit unicode.
    -   Oops. Scripting handled the calligraphic pen angle incorrectly.
    -   Put something into the about box.

-   4-Feb-2002
    -   Oops. FontForge was misusing the type1 "seac" command in some
        cases. I had not realized that the character being built needed
        to have the same width as the base (non-accent) character. This
        has been fixed.
    -   When using the charinfo dlg to change the name of a char, and
        that name was in use, and you cancelled the dlg after being
        warned about it then FontForge would crash (it would muck up
        memory).
    -   FontForge wasn't always calling subroutines (in postscript) when
        a character was in a subr.
    -   FontForge will now read in X11 pcf font files (they can be
        compressed, if so FontForge will decompress them first).
    -   Bug in wildcard processing for file chooser window.

-   1-Feb-2002
    -   Nifty! SUSE ships some greek (bitmap) fonts with iso8859-1
        encodings rather than iso8859-7. FontForge is now alert and when
        it sees a bitmap font with foundary "greek" and encoding
        "iso8859-1" it will pretend it has encoding "iso8859-7".
    -   FontForge got confused by some fonts produced by type1fix.pl.
        Should be fixed.
    -   Build Composite Characters will now check the user defined
        ligature string to see what characters to use to build a
        ligature.

-   31-Jan-2002
    -   Conversion tables between JIS0201 (Katakana) and Unicode were
        wrong. KANOU Hiroki provided correct ones.

-   30-Jan-2002
    -   Oops. I'd left diagonal stems enabled in ttf generation. Caused
        problems. Disabled now.
    -   More work on accented characters.

-   29-Jan-2002
    -   Sped up background image drawing (finally)

-   28-Jan-2002
    -   Added
        -   Strtol
        -   Strskipint
        -   AskUser
        -   Error

    -   Added a menu of commonly used scripts which the user can specify
        with the preference dlg.

-   25-Jan-2002
    -   Oops. Generate command in scripting language only generated pfb
        fonts
    -   FontForge would get confused if it loaded a font from a script
        when running with windows. Eventually it would crash, but
        perhaps not until you exited.
    -   Added
        -   \$italicangle
        -   \$cidfontname, \$cidfamilyname, \$cidfullname
        -   \$weight, \$copyright
        -   \$cidweight, \$cidcopyright
        -   SetItalicAngle

    -   Removed \$cidname (replaced with \$cidfontname)
    -   Added a Call... button to the execute script dlg to allow you to
        insert a call to a script file easily

-   24-Jan-2002
    -   Added a way to scale dlgs in different languages.

-   23-Jan-2002
    -   Fixed a crash in merge (caused by selecting all points on a path
        and merging it (to remove the path))
    -   Improved positioning of ogonek and cedilla accents in Build
        Accented Character

-   22-Jan-2002
    -   Added:
        -   SetCharCnt
        -   SetCharName
        -   SetUnicodeValue
        -   CIDChangeSubFont
        -   SetFontNames
        -   CIDSetFontNames
        -   \$curcid, \$nextcid, \$firstcid, \$cidname

    -   Cleaned up ligature handling in char info dlg
    -   Cleaned up array freeing in scripting.
    -   Fixed a crash in FontInfo introduced yesterday

-   21-Jan-2002
    -   Import will now allow you to import background images from the
        font view
         (and the default setting of "Background" for "pk" files has
        been set to true)
    -   Added a scripting command to access
        -   Import
        -   strlen
        -   strstr
        -   strcasecmp
        -   strsub
        -   arrays
        -   access to the postscript names of the font
        -   access to information about individual characters

    -   Cleaned up some display oddities in the fontview.
    -   Added a Set Width command to the bitmap view IF there is no
        outline font.
    -   Added a menu item to invoke a script
    -   Added a "Comment" field to FontInfo. This does not correspond to
        any postscript or truetype entity. It is to be used for a
        changelog within the sfd file (or something similar).

-   19-Jan-2002
    -   Initial version of [scripting](scripting.html).
    -   Optimizer caused rounding errors which caused test for divide by
        zero to fail leading to errors in Simplify and Merge commands.
    -   bdf fonts with an encoding which did not itself include "-1" (or
        similar) failed to get the implied "-0" added.

-   17-Jan-2002
    -   FontForge used to crash (sometimes anyway) if a list popup were
        active when a window was destroyed.
    -   TextFields within tabsets (like Font Info) responded to some
        events twice.
    -   Bug in the new TTF hinting routines could cause a crash (and did
        cause glyph programs which were erroneous)
    -   Crash caused by long names in /etc/passwd when creating a new
        font
    -   Redid fontname handling in Font Info dlg to allow URW names to
        pass through unscathed
        -   Recognize "Regu" as meaning "Regular"
        -   Only updates the fullname (human readable name) if it were
            previously in sync
        -   Recognize "-" as starting the modifiers rather than trying
            to find the end of the family name
        -   If you don't change the family or the modifiers then
            fontforge will now leave the fontname untouched

-   14 Jan 2002
    -   The 9 Jan metrics view fix caused crashes when changing the last
        character displayed.
    -   The outline view now will display points at extrema in a
        different color from other points if you want that.
    -   Added a command to the font view to clear out the backgrounds of
        all selected characters.
    -   Fixed one more image freeing problem (see 29-Dec-2001)

        * * * * *

    -   bdf fixes of 9&11 Jan did not work on bdf files with character
        encodings of "-1"
    -   Fixed several bugs with ttf bitmap tables.
    -   Added a mechanism for specifying a font inside a truetype
        collection from the command line:
         `    $ fontforge "gulim.ttc(GulimChe)"`
         will load the GulimChe font within the collection file.

-   12 Jan 2002
    -   Russian ui had an unexpected space in it which confused
        makenomenh. Have fixed both (makenomenh & nomen.ru)
    -   Last fix to Merge made most merges return straight lines
    -   Added an elide command which allows the slopes of the endpoints
        to change
    -   Releasing the control or super key when in one of the palettes
        did not update the tool cursor.
    -   The point info dlg now comes up beside (rather than on top of)
        the selected point.

-   11 Jan 2002
    -   bdf "fix" of 9 Jan. lost the encoding of the font.
    -   FontForge source included "ushort" in a couple of places. Linux
        must define this but some systems don't. It has been changed to
        uint16 which I define.
    -   Worked around some imaging bugs of the X server under cygwin
        (FontForge seems to work under cygwin now)
    -   Using the arrow keys to scroll only worked if something were
        selected. should always work now.
    -   The fontview now contains an indication of which characters have
        backgrounds
    -   Minor improvements to merge when given an impossible problem.

-   9 Jan 2002
    -   destroy window fix on 2 Jan was not enough, it popped up again.
        Hope I've killed it this time
    -   FontForge had trouble reading bdf fonts that
        -   did not have standard X font names
            (-vendor-family-weight-italic-...)
        -   had the same name used for different characters

    -   The metrics view got confused by characters with negative
        lbearings.
    -   Added some Japanese (Kanji) text samples.

-   8 Jan 2002
    -   Fixed a bug in gdf output

-   7 Jan 2002
    -   Added a traditional chinese sample
    -   In the metrics view, the kerning offset was not rescaled when
        the size of the window changed.
    -   Added a preference item to control the amount by which the arrow
        keys move selected points
    -   Changed the behavior of the grid layer so that now points will
        snap to any spline in the grid layer, not just horizontal and
        vertical splines
    -   Added a preference item to control this snap distance.
    -   Added a couple new outline display sizes to the fontview
    -   Use the "super" modifer to simulate a mouses middle button. If
        the super key (the one with a windows flag on it on pc
        keyboards) is depressed then any mouse click will be treated as
        if it were mouse button 2 that was used.
    -   Minor improvements in truetype hinting

-   4 Jan 2002
    -   if a dfont (or other mac resource file) contains multiple
        truetype fonts, fontforge will let you pick one (before it would
        read in the first and ignore the others)
    -   The tools palette now shows the mouse bindings.
    -   Next/Prev control points are drawn in different colors now, and
        those colors are reflected in the point get info dlg.
    -   Merge and Simplify will now retain the slope of curve points.
    -   Simplify will no longer remove points at the extrema of their
        curves (PostScript fonts are supposed to have points at the
        extrema)
    -   New command in Element menu to [add points at
        extrema](elementmenu.html#Add-Extrema) to a spline or set of
        splines.
    -   Next/Prev Point commands will shift the screen so the newly
        selected point is visible.
    -   Metrics View now allows for anti aliased character display.
    -   Metrics View View menu was broken and was missing half its
        entries.
    -   Revert Font would leave fontforge in a state where some commands
        would cause a crash. Should be fixed now.
    -   TextFields did not scroll properly with the arrow keys.
    -   The outline and bitmap views may be scrolled with the arrow keys
        by holding down either the control or meta key.
    -   When reading a ttf file with an encoding fontforge doesn't
        recognize which has some glyphs which are refered to from
        multiple code points, then fontforge used to crash.
    -   Support Menu key on windows keyboard
    -   Use the Windows "flag" key as a modifier to indicate mouse
        button 2 (so if that key is depressed, and a mouse button is
        pressed/released pretend it was button2)

-   2 Jan 2002
    -   Copy From has been made global and sticky (each font used to
        have a separate value and it got lost on exit. Now there is one
        global value and it is saved in the prefs file).
    -   Copy From now allows you to control whether a character's name
        should be copied along with the glyph data (only in font view).
    -   View-\>Fill should now show the current setting.
    -   If there were background images in a glyph then changing the
        Show/Hide rulers made the display wrong
    -   In the Outline view, the character's popup box would appear if
        the mouse were over the menubar. Werner thought that
        inappropriate.
    -   If import bitmaps needed to expand the number of characters in a
        font (to provide slots for all the bitmaps) it would fail to do
        so properly. Resulting in a crash.
    -   Hmm. There appears to be a race condition inside the XServer on
        my machine and if I map a window but destroy it before I read
        the MapNotify (or possibly Expose) event on the queue, then the
        server will calmly crash. This can happen if a progress
        indicator is ended just after we decide to display it. I've
        tried to work around it, but there may still be holes.
    -   Added an "About..." menu entry to display the splash screen
        again
    -   Gleep! type1 cid font generation had a couple of problems
    -   Print Sample is now available for cid fonts.
    -   View-AntiAlias didn't work (characters were always displayed as
        antialiased)
    -   Menus made more responsive to key presses.
    -   The Zoom In and Out commands are now centered around the
        selection (if there is one, if not they continue to use center
        of the window)
    -   Changed the order of entries in the Point Info dlg so that Prev
        is above Next
    -   The Escape key can be used to deselect
    -   New copyright notices.

-   29-Dec-2001
    -   TextFields had numerous display problems. Should have fewer now.
    -   The 15 Dec image crash fix was not complete, turns out there
        were two memory problems (well, two so far)
    -   Some dialogs could show up half off the right edge of the
        screen. Should not do so now.
    -   Added a few more language samples for printing.
    -   Bidi display didn't work when there were lots of combining
        letters around
    -   Bidi printing didn't work when there was more than one line of
        right to left text
    -   Typing control characters to the fontview will no longer move to
        that character.
        -   Typing [Return] opens selected characters
        -   Typing [Tab] moves to next character with something in it.

    -   Depressing the right mouse button invokes a popup menu in the
        fontview now.
    -   Trying to move a control point with the mouse while
        simultaneously moving the point itself with the arrow keys used
        to cause a crash
    -   Selecting a bdf font which was in a bad format as a background
        caused a crash.

-   19-Dec-2001
    -   The german ui file should be in better german
    -   fontforge would not notice that an iso10646 bdf file was unicode
    -   Support for conversion to and from some 2 byte encodings
        (LocalCharset preference item)
    -   sfd files store the font's encoding as a string rather than a
        number now so if we add more standard encodings things won't get
        screwed up as they were when we added johab.

-   18-Dec-2001
    -   **TrueType hints were terrible**. I fixed one huge bug. There
        are still problems with diagonals and the results are not as
        nice as Fontographer's, but they are better.
    -   Some more greek fixes.
    -   Metrics window did not handle the transition from a left -\>
        right view to a right-\>left one properly (mostly this means if
        you had a blank metrics view and you put a hebrew/arabic
        character into it then that character was displayed left to
        right).
    -   The transform dialog in the fontview now has a checkbox which
        allows you to control whether you want the background
        transformed in sync with the foreground.

-   17-Dec-2001
    -   Fixed another bug with cid fonts, this one when attempting to
        create such a font in the absence of cidmap files
    -   Fixed a bug when outputting otf cid files (bug appeared when I
        added vertical metrics)
    -   When loading a cid font FontForge could get caught up in an
        semi-infinite loop asking for cidmap files. Should be fixed now.
    -   Finally got rid of the annoying warning about tempnam() when
        linking.

-   16-Dec-2001
    -   Scrollbars didn't always update in big textfields
    -   Missed the hot key for unlink reference in the font view.
    -   Fixed crash when clearing empty character cells
    -   More greek accent fixes
    -   changed character popups slightly.
    -   Added another problem to find problems. Will now check for
        flipped references (=\>counter-clockwise paths most of the time)
    -   Interesting. The EuroFont uses the endchar opcode in way that
        both the type1 and type2 docs claim to be illegal (it is not the
        last thing in the subroutine, it is followed by a return). Since
        EuroFont is from adobe, I presume the docs are wrong, so I
        ignore this error now. (The Adobe people insist that the docs
        are right, just misleading. That the endchar is the last thing
        in the subr because nothing after it gets executed. Hmm, I
        continue to be misled)
    -   FontForge will be better able to figure out where hints should
        be active when it reads in a postscript font.
    -   Autohint will no longer find some erroneous hints.
    -   Autohint will now find the serifs in Nimbus Roman

-   15-Dec-2001
    -   Copying a background image caused a crash at some indeterminate
        future time
    -   Made the Help browser configurable
    -   Changed greek accent processing so that it uses more of the
        greek accents. For reasons known best to themselves, unicode
        tends to map greek varia to grave, oxia to acute, etc.
    -   More work to make sure the screen fonts are readable
    -   tabbing into a text field selects all of it.
    -   autotrace 2.8 has changed its argument conventions. new versions
        of fontforge will no longer work with autotrace2.7.
    -   If a menu doesn't fit in its window there is now a way to get at
        the menu items which are offscreen
    -   Cleaned up the panose (fontinfo) window
    -   Added names to the private use area of unicode for greek small
        caps (starting at 0xf500)
    -   Fixed a couple of autohint problems
    -   Manual hint addition might refuse to add a hint if it didn't
        like it. It should now realize that the user is in charge...

-   14-Dec-2001
    -   Oops Edward Lee points out that I was missing some colons in my
        eps file generation.
    -   Hot key added for Unlink Reference
    -   Werner found two more bugs when reading in cid keyed fonts
        without a corresponding cidmap file.

-   11-Dec-2001
    -   Fixed a crash if there were no .cidmap files and FontForge was
        not installed in a directory named bin.
    -   Cleaned up the distribution a bit per Werner's requests
    -   Added a ScreenWidthCentimeters resource
    -   FontForge will no longer ask the X (Font) Server to scale bitmap
        fonts. It will only used unscaled bitmaps or outline fonts.

-   10-Dec-2001
    -   Fixed a crash when adding (manually) a minimum distance hint to
        the width.
    -   Fixed a bug in the configure script which caused it to fail on
        solaris

-   9-Dec-2001
    -   Added proper names for Hangul Syllables
    -   The Greek fixup wasn't working as it should (sometimes would
        generate two characters named "Delta" in pfb files). Should be
        fixed. Should also be controllable by Preference item (ie. you
        can turn it off if you want to)
    -   The metrics view did not display changes
    -   The metrics view's cursor sometimes got stuck in the wrong shape

-   3-Dec-2001
    -   Merge Kern Info dlg crashed if you cancelled it.
    -   The encoding tables in the cmap are supposed to be ordered by
        platform and mine were not.
    -   FontForge would crash when writing out very large copyright
        notices
        -   I lifted the 2000 character restriction on copyright
            strings.

    -   If there were more than 2 lines of tabs in a TabSet then
        clicking on a tab would often cause the wrong pane to appear.
    -   Cleaned up Font Info a bit so it looks better with the Russian
        translations.
    -   Fixed a memory leak when generating a truetype font with an
        encoding other than unicode.
    -   Fixed a crash when generating a truetype font which referenced
        characters with encodings bigger than 65535.
    -   Added a patch from Ulrich, FontForge now reads class based
        kerning from the GPOS table.

-   1-Dec-2001
    -   Figured out the format of mac .dfont files
    -   The mac Command (Apple, Cloverleaf) modifier key is now treated
        as if it were the Control key (So users may exit FontForge with
        Command-Q as they expect).
    -   Another bug reading in flex hints from OTF. Fixed by Ulrich
        Klauer.
    -   FontForge had problems with drawing images when there was an
        endian mismatch between the X server and the machine running
        fontforge.

-   27-Nov-2001
    -   Build Accented Character failed to update bitmaps in CID keyed
        fonts
    -   Build Accented Character will generate rotated characters when
        appropriate for CID keyed fonts
        -   If a character's name is "vertcid\_\<cid\>" where \<cid\>
            should be replaced by a number, then that character will be
            replaced by a rotated version of \<cid\>
        -   If a character's name is "vertuni\<uni\>" where \<uni\>
            should be replaced by a 4 hex-digit number, then that
            character will be replaced by a rotated version of the
            unicode character \<uni\>.

    -   When saving a font with rotated characters FontForge will now
        generate a vrt2 feature in the GSUB table (this lets the font's
        users find out about the rotated glyphs.
    -   Before this FontForge would only read entries in the 'name'
        table which were in unicode (or macroman). FontForge is a bit
        more general now and will read the other encodings it knows
        about.
    -   Oops. Another screw up reading in open type.
    -   If the character at encoding 0 was not .notdef then FontForge
        would omit it when generating a postscript/opentype font.

-   26-Nov-2001
    -   Adobe has upgraded their cid version for traditional chinese, so
        I generated a new cidmap to reflect that. I've also cleaned up
        most of the others.
    -   Initial version of vertical metric support.
        -   (only in true/open type fonts)
        -   Added ability to set the vertical advance of each character
        -   Added ability to set the vertical origin (as an offset from
            the origin in the design coordinate system (which happens to
            be the origin for horizontal metrics)).
        -   Added ability to set the line gap (er, column gap?)
        -   What else do I need?

-   24-Nov-2001
    -   Oops. Urich Klauer found a bug in my parsing of ttf/otf tables
        (introduced by the linegap change on 8 Nov) and sent a patch.
    -   FontForge was erroneously complaining that all ttf composite
        glyphs were too big (when reading them in, introduced 15 Nov).
    -   FontForge stored StdHW and StdVW in the wrong format when
        reading opentype fonts and any .pfa/b fonts generated from that
        db caused ghostview problems.

-   23-Nov-2001
    -   Fixed a potential crash from popups in the fontview.
    -   Fixed three crashes in remove overlap (there are more problems)
    -   Added support for reading/writing mixed 8/16 bit encodings.
        (used in some CJK fonts)
    -   Added support for big5, johab (johab is untested, big5
        minimally)
    -   Improved treatment of ttf encodings we don't understand.
    -   Added a command to move to the next defined character (useful in
        CJK encodings with great holes in the middle. Unicode too I
        suppose)
    -   Added a resource ([fontforge.FontView.FontFamily](xres.html)) to
        control the font for the character labels that appear above
        every user defined character.
    -   FontForge now supports multi-line copyright notices (must be
        less that 2000 ascii characters though).

-   17-Nov-2001
    -   Changed the configure script to deal with Mac OS/X properly (I
        hope)

-   15-Nov-2001
    -   FontForge had a bug when loading some ttc files which caused it
        to crash.
    -   FontForge wasn't prepared for the erroneous truetype found in
        wcl-02.ttf, this caused a crash. FontForge should do better now.
    -   FontForge's scrollbars didn't work very well. Should be much
        improved now.
    -   FontForge used to generate an entire antialiased bitmap font to
        display in the fontview window. Now it only generates the images
        when it needs them. This speeds up the loading of large fonts
        and reduces their memory requirements.

-   12-Nov-2001
    -   Some nearly horizontal (but non-linear) splines could not be
        selected.
    -   Changed the point info dlg so that users could set points back
        to have default control points.
    -   There was a pathway whereby points could be marked as having
        default control points even when they didn't. That one is
        plugged.
    -   The chinese font, kaui contains some interesting bugs which
        we've had to work around:
        -   Glyph 257 contains a contour consisting of one off-curve
            point.
        -   The encoding cmap refers to non-existent glyphs
        -   The fpgm attempts to move points around (it isn't allowed to
            do that according to the docs)

-   11-Nov-2001
    -   Added support for macintosh resource fonts (by reading them from
        and writing them to macbinary wrapped files)
    -   Fixed a bug in metricsview where pasting with more than one
        character caused a crash.

-   8-Nov-2001
    -   FontForge will now save ligature information in the GSUB table
        when creating an opentype font.
    -   When double clicking on a previously unused character, FontForge
        would not set the default ligature properly.
    -   FontForge would crash if you merged a font containing ligature
        information into another one (or diagonal stems or minimum
        distances).
    -   When opening some bdf files, fontforge would display nothing
        until you resized the window.
    -   Added the ability to set the TTF linegap fields. There are two
        of them (one in OS/2 and one in hhea). I don't understand the
        distinction between them, so I set both to the same value.
    -   When merging fonts, characters which did not fit in the current
        encoding would be placed immediately after the last character
        with something in it. The intent was that they should go to an
        unused slot outside of the encoding rather than within. This has
        been fixed.
    -   I've added a preference item allowing you to configure the
        separation between the base character and the accent in the
        Build Accented Character command. I've also changed it so that
        if the character is close to the x-height or the cap height, the
        accent is positioned as if the character were at the x-height
        (or cap height), this means the accents will be at a consistent
        level rather than slightly ragged.
    -   I moved the Make First command to the Point menu.
    -   Added a command to copy the splines in the foreground layer into
        the background layer.

-   2-Nov-2001
    -   FontForge would not notice certain disk errors when generating
        truetype fonts. It should do better now.
    -   FontForge could crash when generating postscript from a unicode
        font that did not contain all the greek letters.
    -   Fixed a display bug in the metrics view.
    -   FontForge should not be able to read in an opentype GPOS table
        and extract kerning information from it.
    -   FontForge will now put kerning info into the GPOS table when
        saving an opentype font. TrueType fonts will still put kerning
        info into the kern table.

-   31-Oct-2001
    -   Added a command to remove width MDs & changed ttf generation to
        check if there were any width MDs before setting the "metrics
        depend on pointsize" flag in the head table.
    -   Improved (I hope) placement of palettes under default gnome.
    -   There was a bug in my otf read in of 'hflex1' instructions which
        warped some otf fonts badly.

-   29-Oct-2001
    -   Change type1 encoding vectors so that they start with a for loop
        setting everything to notdef. older versions of dvipdfm assume
        it's there
    -   Added two new concepts to hinting which only apply to truetype:
        -   You can specify that a certain point should be rounded to
            the grid in x or y
             (note: points on hints don't need this, they'll always be
            rounded)
        -   You can specify that the x or y distance between two points
            should never vanish (this is called Minimum Distance)
             (note: each hint implies one of these going from one side
            of the hint to the other, also there is an implied one of
            these between any two non-overlapping hints)
             You can also specify that the distance between a point and
            the width should never vanish. This means that there will
            always be at least one pixel between that point and the
            advance width of the character.

    -   I removed the serif checker from the ttf instruction generator
        and moved it to the autohinter (with some changes of course) and
        it now generates minimum distances.
    -   I added a minimum distance between the last stem of a character
        and the width.
    -   I added a user interface to display and control these
    -   I realized I was misinterpreting the ttf docs (again) and that
        IUP worked better than I thought, and so I removed my own
        interpolation code (thank you freetype! it is so good to see
        what the instructions do.)
    -   Cleaned up some rather technical issues in the truetype
        instruction generation occasioned by non-overlapping and
        non-intersecting hints.
    -   FontForge will now read (but not produce) '.gsf' files. These
        are yet another postscript format, like a pfa but without the
        eexec encoding. Ghostscript uses them (others may, I think
        Wadalab did...).
    -   Oops. In encodings containing characters with no defined
        postscript unicode names, then the name generated for an unused
        character was wrong.
    -   Oops. FontForge thought all user defined encodings were two byte
        encodings and produced a warning message for them when
        generating type1 fonts.
    -   Added a force encoding flag to the Font Info dlg. This is for
        those cases where FontForge reads in a font but can't figure out
        what the proper encoding is, then doing a force encoding will
        simply rename all the characters to match what they should be in
        the chosen encoding.
    -   Oops, neither afm nor bdf files were correctly normalized for
        fonts whose em size wasn't 1000.
    -   Improved bdf "CHARSET\_COLLECTIONS" output.
    -   Added a command to make two lines parallel

-   21-Oct-2001
    -   FontForge could crash when autohinting a diagonal hint.

-   20-Oct-2001
    -   FontForge generated awful instructions (hints) for truetype
        characters. I've fixed some of the more egregious problems (I
        hope).
         In particular:
        -   Diagonal hints were completely broken
        -   Overlapping hints didn't work either
        -   Normal hints with more than one point on them sometimes had
            the second (third, fourth...) point moved by the wrong
            amount.
        -   Points that weren't on any hints were often not interpolated
            properly.
        -   The serif code picked up on things which weren't serifs and
            tried to hint them as though they were.

    -   I've written a [tool](http://mensis.sf.net/) which will allow
        you to look at what the instructions are and what they do.
    -   TTF spline approximation (cubic-\>quadratic) should be twice as
        fast.
    -   Clearing/Cutting a character with references from the font view
        corrupted FontForge's internal state. If this were followed by a
        reduction in the number of characters in the font
        (Element-\>Font Info-\>Encoding) a crash could occur.
    -   Clearing/Cutting a character with dependents from the font view
        now gives the user the option of instanciating the character in
        all its dependents.

-   11-Oct-2001
    -   Hmm. Apple has some very strange things to say about how offsets
        and scaling factors overlap in compound ttf glyphs. It is not
        well enough described (at least when it applies to rotations)
        for me to implement it. Microsoft doesn't do this. Great.
        OpenType gives a pair of bits to control this behavior (bit 11
        set do it apple's way, bit 12 set do it MS way, neither set flip
        a coin and guess, both set die in horrible agony). But still no
        description of exactly what Apple does. So I've changed my ttf
        output routine always to set bit 12 in the composite flags. And
        the read in does something if it gets the apple bit. Probably
        not the right thing though.
    -   Fixed a potential problem clipping splines in the outline
        character display.
    -   Added a warning when attempting to save a font with a two byte
        encoding into a format that only supports one byte encodings
        (ie. unicode to pfb)
    -   FontForge crashed when loading a bare bdf with more than 256
        characters
    -   FontForge used out of date versions of config.guess and
        config.sub. These should be updated now.

-   3-Oct-2001
    -   Added support for saving bitmaps into ttf files. I don't know
        that I've got it right. Windows Me ignores the bitmaps I put in.
        Windows may ignore all bitmaps, or I may have done something
        wrong... There are so few files to test bitmaps on though...
    -   Some older systems have problems taking the cubed root of 0.
        This can pop up in the Cubic Solution code now (when doing
        simplify for example). There should be a work-around in place
        now.
    -   On monospaced fonts FontForge generated a .notdef character
        whose width was the em-square rather than the size of the rest
        of the font.

-   1-Oct-2001
    -   makefile wouldn't build ui files if "." wasn't in PATH
        environment variable. Should be fixed.
    -   Holding down the Shift key when invoking Element-\>AutoTrace
        will cause it to prompt for command line arguments to the
        autotrace program (you have to figure these arguments out
        yourself).

-   30-Sept-2001/1-Oct-2001
    -   Improved importing background bitmap fonts (scaling factor set
        more accurately, pk characters whose bitmap width was a factor
        of 8 had problems).
    -   Import width from background bitmap fonts if the outline
        character is empty.
    -   Merge Fonts was disabled except under bizarre circumstances,
        should be fixed.
    -   Makefiles should create the \*.ui files now.
    -   Mac encoding table should include the Euro character now (I was
        using an old version which had the currency symbol instead).

-   24-Sept-2001
    -   [Mac OS/X port](Problems-MacOSX.html)done (or at least a
        semi-working version has been produced)
    -   Localization didn't work if there was no preference file.

        * * * * *

    -   Can now read metafont pk files as bitmap fonts (Warning: No
        encoding on these files, you've got to guess at the encoding
        before loading them).
    -   Can now read kerning information from TeX .tfm files (Again,
        there's no encoding in these guys, I just assume the font's
        encoding matches the tfm)

-   22-Sept-2001
    -   Can now read bitmap fonts out of a truetype EBDT (or bdat) table
    -   Can import a bitmap and put it into the background of a font.
    -   FontForge would sometimes get character widths wrong when
        reading a ttc file.

-   19-Sept-2001
    -   Major rewrite of Remove Overlap.
    -   Fixed potential crash in autohint
    -   I now find the intersection of a (cubic) spline and a line by
        the cubic algorithm rather than by iteration.

-   15-Sept-2001
    -   Fixed more remove overlap/merge/simplify problems related to
        having many points at the same location.
    -   Fixed a bug in Point Info.

-   14-Sept-2001
    -   Fixed a couple more memory problems (caused by the chunk
        allocation), one in remove overlap, one in autotrace
    -   I'm told that yesterday's executable upload didn't work. Hope
        today's does better

-   13-Sept-2001
    -   Fixed a crash when joining two paths
    -   More tweaking of search path for ui files.

-   11-Sept-2001
    -   more configuration fixes
    -   Fixed many simplify bugs
    -   otf output would crash if given an open path. Fixed

-   8-Sept-2001
    -   Font View Paste has changed slightly. If the copy buffer
        contains more than one character, and the selection is exactly
        one character, then the selection will be changed so that it
        will exactly fit the copy buffer.
    -   Also Font View Copy will copy the hints of the character.
    -   Fixed a bug with reading CID keyed Type1 fonts
    -   cleaned up some compilation problems on older systems (I hope)
    -   Inserted Olaf's bug fix in gresource.c
    -   Cleaned up behavior on zero-length splines

-   5-Sept-2001
    -   Ug. yesterday's install changes weren't complete. I forgot to
        remove the old files from /usr/local/bin so fontforge used out
        of data translation tables and things looked confused for
        non-English users. Also libgunicode had an old version of some
        header files so there were compilation problems if this was tar
        x'ed last (the other packages had the correct headers).
    -   Also I posted a bad libgdraw source.
    -   And got the dates wrong.
    -   Added a tiny bit of German to the ui (hope it's right)

-   4-Sept-2001 (but posted as 5-Sept-2001)
    -   Menubar should be redrawn properly after a resize now.
    -   File chooser should be smarter about retaining filenames after
        changing directories.
    -   Various fixes to support URW's odd habit of abbreviating
        everything to 4 characters (ie. recognize "obli" for "oblique",
        and "medi" for "medium")
    -   Fixed a crash bug in postscript generation when character 0 was
        deemed worth outputting
    -   Tweaked XHeight calculation to look for greek/cyrillic "x"
    -   Changed install process to put user-interface files into
        /usr/share/fontforge instead of into the bin directory.

-   1-Sept-2001
    -   Small fixes to (my implementation of) Adobe Standard Encoding.
    -   Small tweaks to get things to compile on solaris again.

-   31-August-2001
    -   If you dragged on a new spline, and then translated one or both
        of its end-points the spline reverted to its default
        configuration
    -   TTF files encoded in Wansung/SJIS will be read into a font
        encoded with either KSC5601 or JIS208.

-   30-August-2001
    -   Fixed some bugs in otf output:
        -   hintmasks were being output incorrectly, omitting bytes of
            data. This could cause horrendous errors. If FontForge read
            in one of these fonts it would often report "stack
            underflow".
        -   Another hintmask problem caused characters to be offset from
            where they should be.
        -   Placing a hintmask between multiple [rhv]lineto s caused us
            to skip a line segment
        -   cleaned up generation of subroutines (used to be extraneous
            rmovetos)
        -   If the user gave bad input to certain Private values
            (BlueValues for instance), FontForge could go into an
            infinite loop.

    -   Non-CID otf fonts did not get their encodings read
    -   Improved parsing of hints in a type1 font with hint substitution
    -   Fixed a crash bug in Inserting a font (or a blank font) into a
        CID font
    -   Generate font dialog would sometimes default to producing a CID
        keyed font when it was not appropriate.
    -   I got the ulCodePageRange bits wrong of the CJK codepages (which
        meant that windows thought the wrong characters were in the
        font)
    -   I generated a bad cmap (ttf encoding) table for CID keyed otf
        fonts.
    -   If a TTF/OTF font is encoded with KSC5601 or JIS208 then I will
        give it a Wansung / SJIS encoding in the cmap (if a unicode
        encoding is desired then reencode as unicode).
    -   Found format for afm files of CID fonts. Can now produce such
        for CID font output.
    -   Improved reference handling in type1s. If a reference doesn't
        fit into a "seac" then try to use subroutines. Subroutines are
        possible if:
        -   None of the references in the character use hint
            substitution (or flex hints)
                   - or -
        -   Only one of the references uses hint substitution and it
            isn't translated (not moved)

    -   Improved reference handling in type2s (opentype). Allow a
        reference to a character with hint substitutions to go into a
        subroutine if none of the other referenced characters use any
        hints at all, and the character with hint substitutions is not
        translated.
    -   Get Info was broken inside outline characters
    -   Made an attempt to speed up handling of larger fonts. Only
        noticeable difference I've seen is that it speeds up freeing the
        font.
    -   Added a dialog to show what characters refer to the current
        character
    -   Made a feeble attempt to sort out the confusion engendered by
        adobe's naming conventions for greek letters.
        -   if a font contains either the of the characters U+00B5 or
            U+03BC then when saving the font FontForge ensures that
            characters with the names: "mu", "uni00B5" and "uni03BC" are
            all present. Similarly for Delta, uni0394 uni2206 and Omega,
            uni03A9 uni2126

    -   Added support for command line arguments which begin with "--".
    -   Added -usage and -help arguments
    -   Added -recover={none,auto,clean} to give you control over the
        autorecovery process.
        -   -recover=none means that the current run will not perform
            auto recovery but will leave things so that the next run
            will do so. (Note: If you change a font that will be
            recovered later, the results are indeterminate).
        -   -recover=auto default behavior
        -   -recover=clean cleans out the autorecovery directory

    -   extension guessing would do the wrong thing if we actually
        wanted to open a font with no extension.

-   8-August-2001
    -   Some minor fixes to gchardlg.c
    -   Try to upgrade the CJK translation tables to Unicode 3
    -   Improve processing of ttc files (I can actually read one no)
    -   chooser icon for cid-keyed fonts

-   6-August-2001
    -   KSC5601-1987 was still wrong.
    -   Fixed a crash in FontInfo on CID fonts.

-   4-August-2001
    -   Eek. FontInfo-\>Panose,TTF Values never got stored into the
        font.
    -   Also added access to Version, and UniqueID
    -   Was given a TTf font with no fontname. This caused a crash.
        FontForge now assigns a fontname if the font doesn't provide
        one.
    -   Added support (well ability to read) for SJIS, Big5 and Wansung
        TTF encodings (platform=3, specific=2,3,5)
    -   After playing with large asian fonts I am now making (minimal)
        attempts to conserve memory and have changed all my doubles to
        floats (it's configurable of course, but default is float).
    -   Fixed a number of bugs in open type output
    -   Was using out of date Korean-\>Unicode conversion. Should be
        fixed now.
    -   Initial support for [CID keyed fonts](cidmenu.html).

-   26-July-2001
    -   Added a constrain points command to align a collection of
        points, or to space points evenly on a line.

-   25-July-2001
    -   Fixed a rare crash from closing the outline (or bitmap) view
    -   Added a new problem to find problems
    -   Fixed some small bugs in find problems
    -   Oops. TrueType names came out in the wrong endianness.

-   24-July-2001
    -   Although the family name accepted spaces, it then silently
        removed them. No longer. (I hope)
    -   FontForge is now more careful when you attempt to clear a
        character from the font view which has dependents (at least one
        of which is not being cleared itself). It will warn you and
        allow you not to clear that character.
    -   FontForge is also more careful when you attempt to paste a
        reference to a character that does not exist in the current
        font. Before it silently ignored it. Now it will warn you and
        give you the option of pasting the outlines of the original
        character being refered to (if it can find that character).
    -   Fixed an uninitialized variable in print that could cause things
        to go into an infinite loop.
    -   Fixed a rounding error problem in ttf generation that could
        cause an infinite loop.
    -   Small bitmap fonts will be magnified in the font view
    -   Expand Stroke didn't work on counter-clockwise triangles
        (presumably other shapes, but I didn't check). It also would
        randomly leave paths counter-clockwise when they should have
        been clockwise.
    -   Finally!
         Often when joining two paths (or closing one path) the point
        would jump when you released the mouse. I finally figured out
        why.

-   22-July-2001
    -   wrote a unicode printf which is now used by most of the error
        routines. Should be no visible difference to users.
    -   cleaned up the truetype names aspect of the font info dlg.
    -   Added a Translate Styles button to the above aspect if the
        string is Style and the language is American English. (Sorry
        about the linguistic chauvinism)
    -   Allowed spaces in the PostScript family name again
    -   Fixed a bug where the "lpr" radio button would sometimes be
        disabled.
    -   Various other small improvements to "Print".
    -   The "Clockwise" detector failed on some paths. I've rewritten
        it, it should work better now.
    -   The clockwise detector in find problems also needed to be
        rewritten.
    -   Added a Find Problems detector for almost horizontal/vertical
        control points.
    -   Some improvements to metafont (well, a few characters look
        better anyway, I hope it's an improvement). It still doesn't
        work of course.

-   17-July-2001
    -   Using almost any stringized error routine would munch memory.
        Many inexplicable errors resulted. I hope it is now fixed and
        that FontForge is stable again.
    -   Valek's improvements to Find Problems
    -   Valek's russian version of "A quick brown fox..."
    -   use textarea gadget for Font's copyright notice.

-   16-July-2001
    -   FontForge did not do a very good job of guessing at where hints
        should be active when they were supplied by the user. Should do
        better now.
    -   More tuneups for autohint.
    -   Added a command to the outline view to allow you to set the
        "First Point" of each spline set. This is important for
        Interpolate font.
    -   Fixed a bug in Font Reencoding having to do with references.
    -   Added direction detection to Find Problems (to make sure outer
        paths are clockwise)
    -   Cleared selections between explanations on Find Problems
    -   Gave some indication of how near horizontal/vertical lines are
        wrong in find problems
    -   Fixed a crash in MetaFont
    -   Added a progress indicator to MetaFont
    -   Added some more to the print sample text (bulgarian, macedonian,
        welsh, czech, lithuanian, polish, slovene)
    -   Stringized some more files

-   15-July-2001
    -   FontForge should now be able to read truetype collection files
        and do something reasonable --
         At least in theory. I don't have any truetype collection files
        to test on.
    -   Oh dear. The rasterizer was looking at vertical hints when it
        should have looked at horizontal ones, looking at no hints when
        it should have looked at vertical ones. The result was that
        vertical edges weren't found.
    -   FontForge had problems reading in lone bdf fonts with strange
        encodings.
    -   Cleaned up print behavior slightly on systems without ghostview
    -   Find Problems would not always stop immediately after pressing
        the stop button.
    -   more files stringized

-   11-July-2001
    -   Eek! Memory problem in metrics view (writing beyond what was
        allocated). Fixed now.
    -   There is scrollbar in the metricsview again. This time it
        actually does something.

-   10-July-2001
    -   Did significant improvement to arabic ligature creation (at
        least it's done right to left now and the proper forms will be
        picked).
    -   Improved the character icons of Anti-Aliased fonts.
    -   Oops. FontInfo would mistakenly complain about modifiers like
        "-Bold". Fixed.
    -   There's the start of a [command to change the weight of a
        font](MetaFont.html). It doesn't work very well yet. It probably
        never will work perfectly, but I hope it may eventually be
        useful.

-   7-July-2001
    -   Fixed a crash when referring to a character whose encoding was
        bigger than 65535
    -   Rewrote the [Font Info](fontinfo.html) dlg.
        -   Made the dialog controlled by tabs instead of trying to show
            everything at once.
        -   Merged the private info dlg into it
        -   Provided access to some ttf settings which were previously
            hidden
        -   Provided access to the ttf name table (which allows you to
            give the font and its styles different names on different
            languages. So CaslonItalic could be CaslonItalique in French
            and CaslonKursive in German.

-   30-June-2001
    -   Fixed another crash from putting strings in resources.
    -   Added a snap-to feature on horizontal/vertical lines in the grid
        (guide) layer.
    -   Missing a few files in the distribution of the 28th.

-   28-June-2001
    -   Oops. Now all empty characters are nameless, not just controls.
    -   Many improvements to [find problems](problems.html).
    -   Added some new shortcuts to the menus.

-   27-June-2001
    -   When generating truetype (or opentype) fonts, FontForge failed
        to set the ulCodePageRange for encodings other than
        latin1/latin2. Should do a better job now.
    -   Fixed a crash introduced by decompress.
    -   Fixed a crash when trying to merge two paths (by moving them
        with the mouse) when the stationary "path" consisted of exactly
        one point.
    -   Sometimes control characters would be named "uni0001" (etc.)
        rather than ".notdef". Appropriate, but inconsistent. They
        should now always be called ".notdef" (unless explicitly
        renamed).

-   24-June-2001
    -   Change configure script to work on solaris

-   23-June-2001
    -   Make giofile.c compile on solaris
    -   Fix crash in autohint
    -   Decompress compressed font files automagically before loading
        them
    -   Update russian version.

-   21-June-2001
    -   Copy Width did not work from the font view
    -   made the info display in the outline view more legible if the
        locale used "," as decimal point.
    -   One more attempt to get palettes right. They would disappear if
        you went to a non-outline view window and then returned to that
        same window.
    -   Some useful information will now be displayed in the outline
        view as you add points to a path.
    -   And during rectangle, ellipse, polygon and star generation.
    -   Build Composite Char will now create the characters
        0x2000-0x2015 (spaces and rules) if you ask it to.
    -   Fixed several bugs caused by the resource string changed.
        -   This one showed up in font info when removing characters.
        -   And this on adding an encoding (to font info).
        -   Any simple request for a string got two OK buttons (ie. no
            Cancel)

    -   Added some more strings.
    -   Cleaned up the hint translation code to work with the new (ie.
        hint substitution, diagonal)
    -   Improved UI for metrics view as per Valik's suggestions
        -   Before it would wait until you depressed the mouse before
            changing the cursor, now it changes the cursor as you move.
        -   Better cursors (separate cursors for kerning, setting
            rbearing (== width), setting lbearing)
        -   Selected character is drawn in a different color.

    -   Implement ghost/edge hints. (Oops)

-   19-June-2001
    -   Initial version of russian menus
    -   Recently AutoHint would remove control points from splines which
        traced out a line (ie. if the control points were on the line
        segment between the two end points). AutoHint shouldn't muck
        with things like that. And anyway it got it wrong in several
        cases.
    -   The simplify command will now remove collinear control points
        from a spline. And if you hold down the shift key when invoking
        the menu the simplify command will only do this (and will change
        its name to cleanup).

-   18-June-2001
    -   Oops. FontForge looked in the current directory, not the
        executable's directory for the ui files. Should be looking in
        the executable's dir.
    -   Oops. The "font has changed" dialog caused a crash.
    -   The simplify command will remove control points if the spline
        traces out a line.
    -   Cleaned up diagonal hints
    -   Made a change to menus which might fix Valek's menu crash. Or
        might not.
    -   Added some more strings to the ui files (yesterday files can't
        be used any more)
    -   Cleaned up some problems with the metrics view.

-   17-June-2001
    -   Added a minimal help menu
    -   If the Hint menu was invoked when there were not exactly two
        points selected, then fontforge would crash. Fixed
    -   Created a superstructure to allow localization of the UI.
        Created a small (incomplete, probably wrong in many places)
        french ui.

-   13-June-2001
    -   Palettes would vanish when the first outline character view was
        closed. That should be fixed.
    -   Palettes should (I hope) do a better job of tracking windows.
    -   Fixed another clipping problem
    -   Added support for diagonal stems (for truetype instructioning.
        Not supported by postscript hints)
        -   AutoHint finds them
        -   There's a Clear DStem command, and an Add DStem
        -   Review Hints does not display them (they can't be described
            the same way as H and V stems).

    -   Changed the background color to be dark green so it will stand
        out against a filled character
    -   Previously if FontForge were given a corrupted font with no font
        name it would crash. That should be fixed.

-   11-June-2001
    -   Added ability to create a pfm file (for ATM under windows)
    -   Extended Font Info to allow you to set the FullName (the human
        readable font name) from FontInfo
    -   Two bugs with hint substitution code:
        1.  It would occasionally generate one subr containing
            overlapping hints
        2.  It would create a Subrs array much bigger than needed. For
            some reason xfs had conniptions over the blank (but unused)
            entries

-   6-June-2001
    -   Cleaned up Exit, close and fontinfo commands to avoid possible
        race conditions.

-   5-June-2001
    -   Added a command to look for common problems
    -   Fixed a crash caused by removing character slots from a font
        (using Number of Characters in Font Info)
    -   Fixed a crash caused by reading in a ttf file where the kerning
        info specified a non-existent glyph
    -   Fixed a crash caused by reading in a pf\* file where the
        encoding was specified in a slightly different format from the
        one we expect
    -   Palettes should be controllable again.
    -   Menu shortcuts should be available from palettes

-   12-May-2001
    -   That was a stupid idea (yesterday's). I've backed it out.
        Instead I've done what Val asked for -- all windows share common
        palettes.

-   11-May-2001
    -   Made a preference item so that palettes could live within the
        outline view. It's sort of a temporary hack until I get palettes
        working (if ever) so it isn't really well integrated with
        things...

-   10-May-2001
    -   Fixed a crash bug which occurred when doing Transformations with
        the origin set to Center of Selection (default) in a character
        with an unclosed path.
    -   Fixed a similar crash when generating postscript.
    -   And another when updating control points.
    -   Added much to printing, should be done for now.
    -   Valrk Filippov suggested that things should be constrainable to
        angles other than horizontal, vertical and 45. In particular
        constraining to the ItalicAngle of an Italic/Oblique font is
        very useful. So we do that now. Thanks Val!

-   7 May 2001
    -   Fixed more locale problems (I hope)
    -   Info line should show the location of a point moved with the
        arrows.
    -   Added Next/Prev Point commands
    -   Added a Print to file command that displays the entire font, or
        fills a page with the current character. More options to follow.
    -   Fixed a bug in seac output
    -   Fixed an introduced crash bug in hint output
    -   Fixed a crash bug caused by increasing the number of characters
        allowed in the font with FontInfo.

-   6 May 2001
    -   Redid [hinting](hinting.html) to support hint substitution and
        counter hinting in PostScript (& opentype)
        -   Hints now have an extent in both dimensions, indicating over
            what parts of a character they should be active.
        -   Dotted lines are used to show the extent of a hint in the
            primary dimension
        -   I draw horizontal hints and vertical hints in different
            colors now, otherwise it was too confusing guessing which
            was which.
        -   If a hint conflicts with another its dotted lines are shown
            in cyan (rather than light blue/green)
        -   When the Review hints dlg is active the current hint is
            shown in dark blue/green.
        -   The Review hints dlg shows whether a hint overlaps
            (conflicts with) another.
        -   Auto Hinting will generate a list of all horizontal and
            vertical stems, and then use some heuristics to remove some
            of the more annoying and less useful stems from the Hint
            list. If you don't want this automatic pruning then holding
            the Shift key down when you invoke AutoHint from the menu
            will leave you with the full stem list.
        -   Minor changes to truetype output to deal with the new hint
            list.
        -   Major changes to PostScript output to deal with counters and
            hint substitution
        -   **No longer saves Type1 charstrings when loading a type1
            font**

    -   The icon for outline character windows was *still* wrong for
        anti-alias fonts if there were no bitmap fonts installed. Sigh.
    -   Added a Correct Direction command to the font view.
    -   Fixed many bugs with Correct Direction
    -   Improved accent placement when we have serifs (I hope), don't
        want to center on top serif of "i" for example.
    -   Slight improvements when pasting bitmaps.
    -   Oops. 0x2d should be "hyphen" in the Adobe Standard Encoding
        rather than "minus" as I had it.

-   3 May 2001
    -   Opps. Generating postscript could crash if there were many blank
        characters.
    -   **This is the last version which will allow you to make small
        modifications to fonts while retaining the original hint
        substitution**

-   28 Apr 2001
    -   Transform from the font view will (for some transformations and
        if [Copy From](editmenu.html#From) is set to All Fonts)
        transform the bitmap associated bitmap characters as well as the
        outline characters.
    -   Cleaned up Build Accented character so that it behaves
        consistently between font/outline views, works with Copy From.
        The two different aspects of the command (Accented vs.
        Composite) are now controlled by whether the Shift key is down
        when the menu is invoked.
    -   Some more locale tweaking for reading in/writing out postscript.
    -   The Preference encoding for new fonts didn't work if set to a
        user defined encoding. Should be fixed now.

-   27 Apr 2001
    -   Tangent points should display a little better now.
    -   If a font is a 94x94 CJK font then the LanguageGroup field of
        the Private dictionary will be set to 1.
    -   Fixed a recently introduced crash bug that happens on
        non-unicode fonts with accented characters.
    -   If a character contained a reference and that character could
        not be converted into a seac then there would be no hints for
        the reference. That should be fixed now.
    -   Accented bitmaps should be positioned better now.
    -   Added a couple of progress indicators to font level operations
        (transform, paste, etc.)
    -   Expand stroke didn't work from the font view.

-   23 Apr 2001
    -   Fixed a clipping problem
    -   Redid a change from yesterday. It should now work for the stuff
        that used to work (as well as for what I fixed yesterday)
    -   (moved to [![SourceForge
        Logo](http://sourceforge.net/sflogo.php?group_id=25752&type=1)](http://sourceforge.net))

-   22 Apr 2001
    -   Added code to allow users to select more than one bitmap font at
        a time to be imported into an sfd.
    -   Cleaned up opening a bdf file.
    -   Fixed various crash bugs dealing with missing bitmap characters
        where there were outline characters.
    -   Fixed various problems with building greek accented characters
        (Unicode 3's decompositions are no longer helpful)
    -   Added some support for [Adobe's documented corporate
        use](http://partners.adobe.com/asn/tech/type/type/corporateuse.txt)
        characters (Small Caps, Old Style numbers...)
    -   Cleaned up the outline character's icon (got broken when I added
        anti-aliasing)
    -   em space character kept vanishing. Fixed that.
    -   Fixed many other small bugs.

-   20 Apr 2001
    -   Addition improvements to the handling of format0 (1byte)
        encodings
    -   Put a Symbol encoding into the FontInfo encoding list.
    -   Oops. Ligature's had their semi-colons in the wrong place in afm
        files.

-   19 Apr 2001
    -   Yesterday's builds were transferred as ASCII not BINARY and are
        totally useless.
    -   Added a macintosh encoding to ttf output
    -   Slight improvement to ttf output (I hope)

-   18 Apr 2001
    -   Crash when reading a ttf font fixed (introduced by ligature
        code).
    -   Crash when generating almost any postscript Type1 font (recently
        introduced)
    -   Added code to read ligature information from the TTF/OTF GSUB
        table.
    -   List buttons near the bottom of the screen would popup their
        list in inappropriate places.
    -   Fixed two bugs in cubic-\>quadratic spline conversion.
    -   Added support for TrueType Symbol encodings

-   17 Apr 2001
    -   Menus would go into an infinite loop if you: depressed the mouse
        on the menu bar (and pulled down a menu) and then moved the
        mouse so that it was above the menubar when the menu was below
        it. Should be fixed.

-   12 Apr 2001
    -   Added a submenu of recent files and a pull down list in the open
        dlg.
    -   Added stuff to put ligature info into an afm file (But not the
        GSUB table of ttf/otf)

-   10 Apr 2001
    -   Fixed a crash bug when making an encoding from a font with a
        non-unicode character in it.
    -   Reencoding a font got confused if the new encoding contained
        more than one instance of the same glyph (common example is to
        have both 0x20 and 0xA0 point to space) or if it contained a
        non-unicode character. This should be fixed now.
    -   Fixed a couple of problems with reading otf files
    -   Added ability to save an Open Type font
    -   Added a "Round to Int" command
    -   .sfd files contain decimal points. This means they are locale
        specific. Changed the input routines so that it would accept
        either "." or "," as a decimal point.

-   2 Apr 2001
    -   FontForge provides some support for XUIDs
    -   FontForge now has a button in the font info dialog which may be
        able to guess the italic angle for the font.
    -   AutoWidth/Kern didn't work well when the font was missing "A"
    -   AutoWidth/Kern didn't work well when the font was italic/oblique
    -   Build Accented Character didn't work too well when the font was
        italic/oblique
    -   Previously opening a Type1 font failed to read /OtherSubrs
        correctly
    -   Oops. In the Open Font Dialog, typing a wildcard changed the
        default button to [New] rather than [Filter]. And pressing on
        [Filter] caused a crash.
    -   Added ability to open an Open Type font (PostScript Type2 in a
        TrueType wrapper)

-   29 Mar 2001
    -   It is now possible to edit bdf fonts directly (without first
        creating a dummy postscript font to contain them)
    -   Fixed crash bug under kde

-   28 Mar 2001
    -   Made it possible to for the user to new encodings
    -   (added TeX base encoding)
    -   slight improvements to the palette code

-   26 Mar 2001
    -   Fixed a clipping problem in the Metricsview
    -   Fixed various other display problems in Metrics
    -   Fixed various display problems in the fontview
    -   Added "Remove All Kern Pairs" menu item
    -   Fixed Auto Kern yet again
    -   Added a preference item to control the foundry name for
        generated bdf fonts.

-   25 Mar 2001
    -   Oops. Fixed a typo in auto-kerning code. It should work now...
    -   From the outline view, exporting to a bmp file allows you to
        save an anti-aliased character as well as a bitmap.
    -   The Generate Fonts command allows you to save anti-aliased
        greymap fonts. The format they are saved in was invented by me
        an hour ago so it's totally useless (it's exactly the same as
        bdf except there's one extra header "BITSPERPIXEL" which may be
        1, 2, 4 or 8 (1 would be the same as bdf), and the number of
        pixels packed into a byte is 8/BITSPERPIXEL (so 8, 4, 2 or 1
        respectively).
    -   If you selected "No Outline font" in the Generate fonts dialog,
        it would generate a postscript font anyway. This has been fixed.

-   24 Mar 2001
    -   AutoKerning now lets you specify the number of kerning pairs the
        font may have.
    -   I'm told that ttf fonts can only have 2048 kerning pairs, so if
        a font has more, the ttf generator will only save the 2048 ones
        with the biggest (absolute) kerning offset.
    -   Fixed a bug in autowidth (would make some characters far too
        wide).
    -   Fixed a bug in autokern which caused it to kern things too
        closely together. This also reduced the number of kern pairs
        generated.
    -   Fixed a crash when loading a truetype font (if a glyph's start
        point and end point were both off-curve points then the point
        between them was interpolated incorrectly).
    -   FontForge should now work with XFree 4.0.\* before it would
        crash after putting up the splash screen.

-   21 Mar 2001
    -   Fixed yet another remove overlap bug.

-   12 Mar 2001
    -   a number of small improvements
    -   fixed a crash bug (occurred when holding down the alt key, using
        the pointer tool, and no reference was selected)

-   9 Mar 2001
    -   Fixed a small bug in the hinting of glyph 0 (the unknown
        character)
    -   Added "rulers" to the character outline view
    -   Expanded the abilities of the postscript importer
    -   Fixed yet another clipping bug.
    -   Fixed a problem displaying tangent points when the control point
        was less than 1 unit away
    -   Provides an interface to the autotrace program to autotrace
        background images
    -   Fixed a crash when drawing large images.
    -   Fixed a problem with detecting clockwise paths.
    -   Fixed a bug with reading in Type3 fonts

-   5 Mar 2001
    -   Minimal truetype instructing (hinting) is now in place.
        ![](/assets/img/old/HI.nohints.png)
         no hints
        ![](/assets/img/old/HI.hints.png)
         hints
    -   This includes applying instructions to all points that lie on
        the Hints generated for PostScript, a certain amount of extra
        effort to detect serifs, and application of the PostScript
        BlueValues to the TrueType cvt.
    -   AutoHint has been improved for some characters again.

-   4 Mar 2001
    -   When Get Info is applied to a single selected reference
        character the dialog now has a button which will bring up a
        window displaying the character refered to.
    -   The Font View now displays info on the current character
    -   Selecting by dragging out a rectangle in the character outline
        view would sometimes miss points. I think that's fixed.
    -   Doing a multi-character copy in the fontview would remove
        non-existent characters from the copy set. They are no longer
        removed.
    -   Build Accented character would always use a dotlessi when
        building an character based on an "i". This behavior is only
        correct if the accent added is above the letter. Adding an
        ogonek for example should retain the dot. This is now fixed. (In
        theory the same problem could occur for j, but I don't think
        there are any cases where it does).
    -   When generating a type1 font FontForge will detect whether Flex
        hints can be used and use them if appropriate.
    -   There was a bug in the routine that read in flex hints. It would
        leave behind 6 extra points not on any path in most characters
        with a flex hint. These points were not harmful, but they should
        not have been there.
    -   I found some cases where autohint picked the wrong hints. I
        cleaned them up. I hope I haven't broken others...
    -   Fixed another clipping problem.
    -   (Various experiments with instructing truetype have yielded no
        display improvement)

-   25 Feb 2001
    -   FontForge no longer crashes on high-end systems where the
        default visual has a smaller depth than the maximum the screen
        supports.
    -   FontForge no longer crashes on systems with no bitmap unicode
        fonts installed.
    -   When FontForge reads in a Type1 font it will preserve the
        original character strings (the type1 strings that define the
        glyph shape) and will write them out again when you save the
        font. If you modify a character (even something innocuous like
        setting the width) the string for that character will be lost.
        This means that any characters you do not modify will retain
        flex hints and hint substitution. (the Subrs and OtherSubrs
        arrays are also preserved).
    -   There is now a way to edit the entries in the Private dictionary
        (well most of them. No way to edit the Subrs entry). The program
        will guess at good values for some entries (like StdHW or
        BlueValues). If there is no BlueValues entry present when a
        type1 font is generated then the program will guess at good
        values (and will also guess at values for OtherBlues), otherwise
        it will use the one supplied. Similarly for StdHW and StdVW (if
        StdHW is absent then the program will guess at SnapStemH too,
        similarly for SnapStemV). If UniqueID is present in the Private
        dictionary then that value will be used in the font dictionary,
        if no UniqueID is present then the program will generate a
        random number in the allowed range.

        * * * * *

    -   Removed a number of warnings from the code
    -   Made arrow keys functional in the fontview
    -   Changed type0 unicode generation so that if the font does not
        contain U+2700-U+27FF the printer's own ZapfDingbats (if
        present) will be mapped there.
    -   Added Adobe Standard to the Font Info Encoding list.

-   20 Feb 2001
    -   Fixed some problems in saving both Type1s and TrueType fonts.
    -   Added clipping code to the outline character view. (Before at
        magnifications around 100 or so we'd run into overflow problems)
    -   Added progress widget to font generation (and font database
        saving)

-   13 Feb 2001
    -   Fixed some problems with the configure script (handles libraries
        now)
    -   Added a progress widget to show how things are going on long
        operations (currently only font opens)
    -   Fixed numerous small annoyances
    -   Fixed a crash I introduced into build accented characters.
    -   Fixed a couple of bugs in truetype generation

-   11 Feb 2001
    -   Added a configure script
    -   Rearranged (simplified) the directory structure
    -   Improved the build accented character function
    -   (similar improvements to display of unicode text (in text
        fields, etc.) with composing characters)
    -   BiDi text was previously confused by composed characters and
        would put them on the wrong letter. Fixed.

-   9 Feb 2001
    -   Tweaked some include files so fontforge might compile under Irix
    -   Added anti-aliasing code to the font view.
    -   Fixed bugs where server has 24bit depth but 32bit pixel size
    -   Added a resource which turn palettes off (so they stop trying to
        steal focus and stop trying to track the main window)

-   7 Feb 2001
    -   Some improvement in processing of postscript names in true type
        fonts (will make truetype output marginally smaller in most
        cases)
    -   Fixed a bug with popup menus.
    -   Holding down the meta key allows you to drag (rather than
        resize) references which fill the bounding box.
    -   Improved saving of both postscript and truetype fonts when there
        are composite characters referring to other composites.
    -   Fixed bug in file chooser where typing into the listbox (to
        select a file) made it think (sometimes) that it had a
        directory.
    -   Fixed bug in Goto Char code where it would refuse to go to a
        character's location (sometimes) if the character had not been
        created yet.
    -   Improved drawing of palettes on indexed displays
    -   Improved accent processing in build accented characters

-   26 Jan 2001
    -   Fixed a bug that kept the file chooser (the open file dlg, etc.)
        from browsing the root directory.
    -   Realized that libgif is just a symbolic link to libungif. Made
        the readgif routine use either one
    -   A typo in writepng caused it to require libpng at link time,
        this has been fixed, it should now only need libpng if someone
        actually loads a png file.

-   21 Jan 2001
    -   Added a preference dlg. Not much in it as yet.
    -   fixed a number of bugs
        -   Timers sometimes failed to go off -\> splash screen might
            not vanish, popups might not pop, autosave might not
            happen...
        -   Vertical lines might cause divide by 0 errors on some
            systems when reading in a font
        -   Some fonts were thought not to have characters they actually
            had.
        -   94x94 fonts were encoded as 92x94 (losing 188 characters)
        -   Fixed problems with kuten decoding
        -   Fixed various crashes involving selecting and deselecting
            non-existent characters

-   9 Jan 2001
    -   Added Tom Harvey's man page to the distribution (Thanks Tom!)
    -   Fixed a bug where radio buttons, etc. sometimes got left highlit
    -   Added an interpreter for (some) postscript type 3 fonts
    -   made libgdraw and friends into one shared library

-   6 Jan 2001
    -   More distribution bug fixes
    -   Fixed bugs in Overlap & AutoWidth
    -   Added new command to Metrics menu (Thirds in Width)

-   4 Jan 2001
    -   Fixed a distribution bug
    -   Fixed some problems with build accented character

-   2 Jan 2001
    -   Many small improvements and bug fixes.
    -   More remove overlap corrections

-   21 Dec 2000
    -   I think I'm reading xfig splines properly now. The conversion to
        postscript still leaves something to be desired, but it's as
        good as I'm likely to make it.

-   20 Dec 2000
    -   Generate Fonts can produce TrueType

-   17 Dec 2000
    -   TrueType reader now gets (horizontal) kerning info
    -   Added code that automagically preserves changes if the program
        should crash (but does not save on the source file unless you
        ask it to).
    -   Added a Revert File command.

-   16 Dec 2000
    -   FontForge will now read in a TrueType font
        -   (it doesn't read hints from the font)
        -   (it doesn't read bitmaps from the font)

-   14 Dec 2000
    -   Got FontForge to build on a netbsd alpha box
    -   Added Auto Width & Auto Kern commands
    -   If you do a translation which is of the entire outline character
        and is only in the x-direction, then all the character's hints
        will be translated too, and if the character is a letter then in
        any characters which depend on this one, the other things in the
        character will also be translated.

-   12 Dec 2000
    -   Added a skew command to the bitmap view
    -   Added Interpolate Fonts

-   11 Dec 2000
    -   fixed more remove overlap bugs (don't know of any left)
    -   Added Merge Font command

-   10 Dec 2000
    -   fixed many small bugs with constrained movements
    -   fixed many autohinting bugs
    -   Fixed some remove overlap bugs
    -   Added backup files when saving sfd files

-   5 Dec 2000
    -   Added a command that automagically builds an accented (or
        general composite) character. ([see
        below](elementmenu.html#Accented))
    -   Added support for various CJK encodings (JIS 208, JIS 212, old
        KSC 5601, GB 2302, all 94x94)
    -   Implemented a fairly poor importer/exporter of xfig files. (I
        don't know how to convert XSplines to Bézier Splines
        reasonably).
    -   Implemented a metrics window, added support for kerning (kern
        info only lives in the afm file, not in the font itself)
    -   Metrics window will also display text from bitmap fonts (but you
        mayn't change a bitmap's metrics)
    -   Reexamined palette code with transient windows. It seems to work
        on kde now.
    -   Fixed blinking cursor on 8&16 bit-depth displays

-   1 Dec 2000
    -   Generate & save bitmaps
    -   Bitmap editor (added a couple of tools like flipping and corner
        turning, circle drawing, etc. that aren't in fontographer)
    -   fontview can display a bitmap, if it does then double clicking
        on a char will display the bitmap
    -   Changing the width of a character (in outline view) will
        automatically change the width of all bitmaps of that character.
        Also if the character is a letter and there are accented
        characters which refer to it and the accented characters have
        the same with that the letter used to have, then the accented
        characters (and their bitmaps) will also have their width
        updated.
    -   Can import and export bitmap images into bitmap window
    -   Can import a bdf file
    -   Can copy and paste in the fontview (bitmaps can be affected as
        well as outlines)

-   28 Nov 2000
    -   Improved star tool
    -   Added various metrics menu items
    -   Added a simplify command
    -   fixed bugs in the merge command
    -   Made font view functional, can apply to many outline characters
        at once
        -   transform
        -   expand stroke
        -   remove overlap
        -   simplify
        -   metrics items above
        -   Char Info

-   19 Nov 2000
    -   Added Calligraphic expand stroke
    -   Added Get Info
    -   Added Correct Path Direction
    -   Added Remove Overlap (probably very buggy)
    -   Enhanced support for Unicode, added type0 font output.
    -   Added type3 output (not compressed type 3, can't open a type3 or
        type0)
    -   Sped up background image drawing.
    -   Implemented drag-resize of images and referenced characters
    -   Added Rectangle, Ellipse, Polygon and Star tools.

-   14 Nov 2000
    -   Added expand stroke
    -   Paths stored in .sfd files are now closed (bug fix)

-   13 Nov 2000
    -   Added the equivalent of a .fog file (Spline Font Database, sfd
        files)
    -   Implemented transform tools
    -   continued fixing palettes

-   11 Nov 2000
    -   Imports and exports simple eps files for characters
    -   Transform allows you to pick origin
    -   Bunch of menu items for manual hinting added. (I hope I'm done
        with hints now... at least till I look at truetype)
    -   Clockwise now agrees with Fontographer (and everyone else)
    -   Added "pen" , and a knife tools
    -   (Added many other tools pictures, but they aren't implemented
        yet)
    -   Fixed many palette problems. (including kde's not doing menu
        shortcuts)
    -   Put in menu items to show/hide palettes

-   9 Nov 2000
    -   It can now calculate hints, font wide stem hints and character
        specific hints.
    -   Transform should do rotations right now.
    -   Metamorphosis file format bug should be fixed

FontForge (as PfaEdit) was initially made available (on the web) on 7
Nov 2000, and moved to sourceforge 21 Apr 2001. I started coding it in
approximately Sept of 2000.
