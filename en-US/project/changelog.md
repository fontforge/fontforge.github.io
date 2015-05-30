---
published: true
layout: default
title: Changelog for FontForge
---


-   On this page: 25 August 2008 to current
-   [Older changes](../oldchangelog/), from 2 Mar 2004 to 24 August 2008
-   [Even older changes](../pfaeditchangelog/) from 9 Nov 2000 to 1 Mar 2004,  
     when FontForge was known as PfaEdit 
-   [Changes to the sfd format](sfdchangelog.html).

To get the latest changes, for now, take a look at:  
<https://github.com/crudfactory/fontforge/commits/master>

> **TEGEUS:**  
> 	Tell me,  
> What is your opinion of Progress?  
> Does it, for example, Exist?   
> Is there ever progression without retrogression?  
> Therefore is it not true that mankind  
> Can more justly be said increasingly to Gress?  
>    
> &mdash; A Phoenix too Frequent    
> Christopher Fry, 1950
> 
> * * *
> 
> "The trouble is," he said, "is that things *never* get better,  
>  they just stay the same, only more so.  
>  
> &mdash; <del>Faust</del> Eric  
>  Terry Pratchett, 1990

-   Git HEAD
    -   **UI fixes and additions:**
    -   There is now an option in Generate Font dialog to prepend a
        timestamp to the font family name. This is for font development
        only ant it enables simultaneous testing of different font
        versions in production environment.
    -   Improved translation coverage for error messages.
    -   Improved rendering of GTabSet.
    -   Fixed mnemonics clash (*Next* & *Glyph Name*) in glyph info
        dialog.
    -   Fixed mnemonics in contextual menu of layers palette and in
        problem detector.
    -   New and updated translations:
        -   Updated Russian translation from Alexandre Proukodine.

-   31-Jul-2012
    -   **General:**
    -   Thanks to Matthew Petroff, we have now a binary package for
        MS/Windows available.
    -   Thanks to Jose Da Silva, Unicode utils are now partially
        sanitized (which means less possible buffer overruns and memory
        allocation failures) and better documented.
    -   FontForge now takes x-www-browser, Google Chrome and Konqueror
        into account when trying to open help pages.
    -   Improved compatibility with UFO workflow with Robofab based apps
        by preserving letter cases in \*.glif names.
    -   Fixed some crashes on X resource loading and saving that
        occurred because of bad image path or pixmap directory.
    -   Georg Duffner reported and helped to isolate a bug in parsing
        OS/2 Version in Font Info in case the string "Automatic" was not
        localised.
    -   Configure works on mac again.
    -   Fixed compilation with XCode 4.3 on Max OS X Lion.
    -   Fixed a crash for fonts with kerning entries containing negative
        values.
    -   Patch by Sourceforge user serval2412 to fix some resource leaks.
    -   Patch by Khaled Hosny for calculating wrong x and cap height for
        some fonts. If glyphs checked don't have flat surfaces at the
        top, FontForge takes the mean. But it was dividing by the wrong
        value.
    -   FontForge didn't build on some systems where /bin/sh is
        synonymous with dash, yet the usual user shell is bash.
        Configure and libtool were thus using different shells, that
        turned out to be incompatible. Luigi Scarso suggested patching
        the makefiles with explicitly setting the SHELL variable.
    -   Path by Steve White to enable support for ASMO 708 codepage.
    -   [We needed to go back to old implementation of the fsType
        table.](http://sourceforge.net/mailarchive/forum.php?thread_name=4F37E48C.4020508%40newtypography.co.uk&forum_name=fontforge-devel)
    -   Patch by Michael Terry to fix crashes for pngs having NULL for
        trans\_alpha;
    -   Patches by Daniel Kahn Gillmor and Paul Flo Williams to add
        support for libpng 1.5.
    -   The names 'alefmaksurainitialarabic' and
        'alefmaksuramedialarabic' in the Adobe Glyph List disagree with
        Unicode. The use of these glyph names is therefore discouraged.
        Patch by Steve White.
    -   Encoding ID should be set to 10 for fonts containing unicode
        characters outside of BMP. Patch by Steve White.
    -   Hunh. We aren't adding libintl to the library list when we find
        out that we need it.
    -   Patch from Johan Winge to fix outputting of 24-bit BMP images.
    -   Patch from Maxim Iorsh to fix a crash for very long lines in UI.
        Specifically, crash occurs when putting a very long list of
        glyphs (\~300 characters) in chaining substitution dialog.
    -   Patch by Pierre Hanser to fix a segfault in validation code when
        there was an empty line in PS private dictionary.
    -   Patch from Paul Flo Williams to Fedora bug 694986. See
        https://bugzilla.redhat.com/show\_bug.cgi?id=694986
    -   Patch by Khaled Hosny to fix a crash when cancelling a warning
        about glyph name or encoding already being in use.
    -   Patch from Matthew Skala to fix PS "Stack got too big" error.
    -   Matthew Skala pointed out, that featurefile.c line 94 tests the
        pointer sc for being null \*after\* dereferencing it, thus
        segfaulting if it does happen to be null.
    -   Patch from Steve White, to fix various issues in the Unicode
        Ranges panel in the Font Info dialog.
    -   Khaled Hosny forwarded a tweaked patch from Werner Fink of
        LuaTEX team, fixing a warning on line 400 and 401 within
        ioescapestopped() of psread.c
    -   When reading a kerning class we did not check to see if we got
        back an erroneous coverage table.
    -   At some point, FF only compiled if configured for type3 fonts.
    -   Fixed handling PDF opacity and patterns/gradients behaviour with
        respect to the current transformation matrix.
    -   Kerning pairs associated with a glyph weren't properly
        reinstantiated when reverting that glyph from the original SFD
        file. This could result to crashes (e. g. when attempting to
        save the font).
    -   When displaying a pair of kerned glyphs in a tooltip box, FF
        would actually ignore the left bearing of the second glyph. If
        bearing was negative (e. g. in case of a combining mark) this
        could even result into a crash.
    -   A wrong Descender value has been written into generated afm
        files, if the font lacked typical glyphs with descenders.
    -   The gasp table version was ignored when writing and opening SFD
        files.
    -   Fixed a bug when loading a type3 font with references.
    -   Patch by Alexey Kryukov to fix a crash in matrix edit controls.
    -   FF wasn't reading cmap AT ALL for cid keyed files.
    -   FF's CID menu now allows 256 cid sub-fonts - it used to be 42.
    -   Fixed a crash when a context chaining lookup glyph-based
        subtable had no glyphs in the backtrack section.
    -   The routine which (re)calculated the line height of a matrix
        edit had a bug which caused it to look at (random garbage)
        characters after the end of a string. This often produced
        warnings about "bad utf8 string" or some such.
    -   Fixed handling of he symetrical smoothing flag bits for gasp.
    -   FontForge checks at configure to see if libintl and libintl.h
        are on the system. It did NOT check whether msgfmt was in the
        path. So if a user has installed macports/fink but not added the
        appropriate bin directory to their path the configure script
        would think all was well and would create a makefile for .po
        files. Unfortunately the make file would die because msgfmt
        would not run.
    -   The charview hint routines used a routine which could try to
        store 5 points in an array that only held 4. The resultant
        memory corruption could cause crashes. Patch by Paul Flo
        Williams.
    -   Fixed a crash in Expand Stroke.
    -   Fixed some bugs in deletion of mark classes and mark sets in
        font info.
    -   **Python scripting fixes and additions:**
    -   'altuni' member of glyph object in Python API was not
        documented.
    -   Patches by Akiro Sakigawa to fix setting and changing
        os2\_unicoderanges and os2\_codepages.
    -   Patch by GUST Team to fix a resource leak in python scripting.
    -   Patch by Khaled Hosny to fix a memory corruption crash in python
        scripting.
    -   When loading an encoding from Python, one need to know the name
        of the encoding in order to use it, so it makes sense for
        loadEncodingFile() to return that name. Patch by Khaled Hosny.
    -   'fontlog' and 'comment' members of font object in Python API
        were not documented. Patch by Khaled Hosny.
    -   Patch from Andrew Miller to make python "addLookup" function
        actually work.
    -   A patch from Khaled, fixing a memory issue in python interface.
    -   Assign the correct meaning to the symmetrical smoothing GASP
        flags in the Python interface.
    -   Changing the unicode value of a code point with python did not
        mark the font's encoding as changed which lead to subtle errors
        later.
    -   New python command: `font.addContextualSubtable`
    -   Adxded a python entry to the "Change Glyph" dlg.
    -   **Opentype Features fixes and additions, mostly by Khaled
        Hosny:**
    -   Fixed a (probably) misplaced warning reported by Matthew Skala,
        displayed on openning an OpenType file with a design size and
        design range but no stylename.
    -   Optical size now gets actually included into fonts built.
    -   In contextual chaining substitution lookups the backtrack
        classes are ordered in reverse way, but feature file syntax
        expects them to be in natural order, as confirmed by Adobe. FF
        does this from now, but this breaks any feature files that
        expect the old, incorrect behaviour.
    -   Added support for feature files containing kerning classes with
        value records that can't be handled by classes. They will get
        converted into kerning pairs, like with AFDKO's makeotf.
    -   Changed behaviour of kerning right to left characters. Now it's
        the user who is responsible for specifying the kerning in the
        right order and for adjusting the right values. But this makes
        things predictable.
    -   FontForge was trying to output "pos" rules for the marks
        themselves, not base glyphs. It was also outputting the mark
        once for the base anchor (correct) and once for the mark anchor
        (wrong).
    -   FontForge will, from now, handle new, unescaped syntax for mark
        lookup tags in feature files.
    -   FontForge escaped 'mark' feature tag when exporting feature
        files. According to the specification, escaping is only for
        glyph names and CID indices.
    -   Ligature caret handling in feature files was broken; only first
        LigatureCaret declaration worked as expected, all subsequent
        ones was accumulating all previous ones.
    -   Sometimes GDEF definitions in feature file were being formatted
        wrongly.
    -   Fixes by Alexey Kryukov to some issues reported by Adam
        Twardoch:
        -   In the 'size' feature the parameters were written with a
            locale-dependent decimal separator, while the decimal dotis
            only allowed by the spec;
        -   FF used to generate empty definitions for standard GDEF
            classes if there were no glyphs to assign to them, while
            they should have been omitted according to the spec.
            Although the class names in GlyphClassDef should be
            comma-separated, and the positions for omitted classes still
            should be indicated with commas.
        -   Moreover, FF would put some glyphs into wrong classes due to
            a difference between its internal standard class IDs and
            ones used in the feature file syntax.

    -   Any operation which required temporary expansion of kerning
        classes (such as displaying the "Kern Pairs" dialog) could
        result into a complete loss of pairwise (not class based)
        kerning data.
    -   Eric Schrijver requested that GLIF output be more similar to
        that of RoboFab's to make diffing files easier.
    -   Patch by Khaled to fix a bug in ff's featurefile processing of
        UseMarkFilteringSet.
    -   If a feature contained both multiple and single substitutions,
        then FF would lose the single subs. Instead change the single
        subs to multiples.
    -   **UI fixes and additions:**
    -   Zvi Gilboa pointed out that for FontForge to be listed under
        "show other applications", the `exec=` line in .desktop file
        needs to be terminated by `%U`.
    -   Tried to improve integration with EWMH. Not guaranteed to work
        at all!
    -   Fixed handling of HV Group Box (actually GGroup) in X resource
        editor.
    -   ![](/assets/img/old/fftype32.png)
        New application icons by Severin Meyer.
    -   Layers palette changes by Tom Lechner. It's now possible to
        manage layers without leaving the glyph view.
    -   Added support for UI icons with alpha-channel. Not enabled for
        Mac, because it happens to crash on some builds. This is still
        under investigation.
    -   New GGadget and new X resources for interface styling:
        -   `GVisibilityBoxOn.Image`
        -   `GVisibilityBoxOn.DisabledImage`
        -   `GVisibilityBoxOff.Image`
        -   `GVisibilityBoxOff.DisabledImage`
        -   `GGadget.Box.BorderInnerCol`
        -   `GGadget.Box.BorderOuterCol`
        -   `FontView.GlyphInfoColor`
        -   `FontView.EmptySlotFgColor`
        -   `FontView.HintingNeededColor`

    -   Fixed styling of scrollbar border. Also made possible a
        different color for thumb's bed (using depressed background).
    -   Widget gradients changed.
    -   Palette buttons in Glyph View, point type icons in Point Info
        dialog, icons for TTF debugger and file chooser are now loadable
        from external files, like icons for menu items.
    -   Fixed `Box.ShadowOuter` and `Box.Padding` handling in resource
        editor.
    -   New and updated translations:
        -   New Catalan translation, from Rafael Ferran i Peralta.
        -   New Ukrainian translation from Yuri Chornoivan.
        -   Lee Chenhwa Simplified Chinese translation.
        -   Wei-Lun Chao updated Traditional Chinese translation.
        -   Michal Nowakowski updated Polish translation.
        -   Updated Russian translation from Alexandre Proukodine.
        -   Spelling Fixes by Yuri Chornoivan, Steve White and Michal
            Nowakowski.

    -   Make message about bad anchor point more informative. Patch by
        Steve White.
    -   Allow user to customize frequency of autosaving (or turn off
        entirely).
    -   Patch from Khaled Hosny, to disable automatic setting "Is
        offset" field on in the font metrics. This confused users.
    -   Patch from Khaled Hosny not to set NeedsXUIDChange if UseXUID is
        not set.
    -   The CharView-\>Element-\>Order submenu did not enable its menu
        items properly if an image were selected.
    -   If a glyph had more than one background image then selecting one
        and scaling it would ignore the selection and scale all images.
    -   It was impossible to import more than one background image due
        to a typo.
    -   When closing a gradient window, ff tended to crash.
    -   Patch by Alexey Kryukov to make possible selecting control
        points without moving them. Later its glitch were fixed by
        George Williams.
    -   It was not possible to cut or delete bitmap references from
        bitmap view.
    -   Patch by Alexey Kryukov to center glyphs in charview by default
        (but not yet vertically).
    -   Patch by Alexey Kryukov to tweak rules on when to refit charview
        contents within window after pasting new content there.
    -   A few tweaks by Alexey Kryukov to metrics view.
        -   If the displayed kerning value comes from a kerning file,
            assume this pair should take a precedence over any possible
            kern class entries and don't bother user asking what exactly
            (s)he wants to modify;
        -   If user sets a kerning offset to zero and this offset is
            defined by a kerning pair, then clean up that kerning pair
            automatically;
        -   The kerning subtable selection combo box was practically
            useless as its value was reset each time a glyph was
            selected. So first check if the selected subtable is
            relevant, and, if so, don't change it.

    -   Patch by Alexey Kryukov to make it possible again to reorder
        classes and rules in the contextual substitutions dialog. Also
        the dialog was initialized with zero classes, but, as soon as
        the first class was created, FF was starting to treat it as an
        "Everything else" class, no matter how it was defined by user.
        So make sure this magick class is always present to avoid any
        confusion.
    -   FF will remember the last font(s) open (at the last quit) and
        reopen them on a start-up with no named fonts on the command
        line. Starting up with the flag --open will avoid this code.
    -   On glyph rename, all places the name is referenced
        (substitutions, etc.) are supposed to be updated. But glyph and
        coverage table contextual (chaining) substitutions were not
        being renamed.
    -   In the new context chain dlg, simple glyph page had a bug which
        failed to remove the parenthesised unicode character after a
        glyph name (and complained about it).
    -   Change the context chaining dialog. I hope it will be easier to
        use. Unfortunately there are lookups which can't be expressed in
        the new format so retain the old format as a fall-back. (Adobe's
        feature files don't support these exceptions either, so I doubt
        anyone actually uses them).
    -   The lookup panes of font info didn't refresh when someone
        changed the name (Edit metadata) of a lookup or subtable.
    -   It used to be that long menus which didn't fit on the screen had
        up/down arrows at the top and bottom. But for very long menus
        scrolling using this method was slow. So this code puts in a
        scrollbar instead.
    -   Changed the Size pane of Font Info to use a matrix edit for font
        style names.
    -   People didn't like the way Glyph Info behaved (They wanted the
        "Done" button to do a "Cancel". So make it so.

-   21-Feb-2011
    -   Did a lot of work to improve the accuracy in remove overlap.
        Improved accuracy means that it is less likely to do the wrong
        thing. Problems happen when there are points or intersections
        very close to each other. (So quadratic glyphs are more likely
        to have problems than cubics simply because they have more
        points, on average).
    -   Fix various error messages.
    -   Remove some obsolete documentation.
    -   Technical fixes to stroking code.
    -   Add a miterlimit to stroking code.
    -   FontForge was using the wrong MIME type for svg files. W3C has
        changed it and it's now "image/svg+xml" not "image/svg-xml" or
        "image/svg".
    -   Since Inkscape images tend to be at unexpected y positions,
        force the view to rescale/recenter itself if the result after a
        paste/import is outside the current window. (Inkscape tends to
        put things at the top of a page, but the origin is at the
        bottom, and FF looks at the origin.
    -   A line joint of 180 degrees (which shouldn't have happened in
        stroking, but did) caused an infinite loop.
    -   Typo in add extrema code (again).
    -   Patch from Khaled Hosny: sets correct version of OS/2 tf table.
    -   Patch from Khaled Hosny: instead of dumping all OtfFeatName's
        into a single line, dump each on a line of its own, this make
        VCS diffs more readable.
    -   Commas in the list of bitmap strikes could be recognized as a
        decimal separators when generating fonts with bitmap strikes and
        this caused broken fonts to be generated.
    -   In various places FF was supposed to temporary set LC\_NUMERIC
        to \`C', but the original locale was actually never restored.
    -   Add a python reverseDirection() method to Layer.
    -   Make the head\_optimized\_for\_cleartype flag accessible via
        Python interface.
    -   Patch by Khaled Hosny to allow setting default font file base
        name from python.
    -   Patch by Khaled Hosny: adds \<font\>.texparameters member to
        access TeX font parameters from Python, readonly for now. The
        returned values can be different from what is present in FF UI
        due to different rounding methods.
    -   Patch from Khaled Hosny: python's addAnchorPoint() function does
        now check if a similar anchor point exists or not, and behaves
        accordingly.
    -   When we open an sfd file it can contain flags asking us to open
        charviews for some glyphs. But on the mac, if we open more than
        one charview X11 (usually) crashes. So, on the mac, put in a
        hook that only opens one.
    -   valgrind found a place where I was looking at freed memory.
    -   In the metrics view list index was not properly updated when
        user was manually selecting an item from the word list. So wromg
        items were selected if (s)he then used up/down arrow keys to
        navigate the list.
    -   Matthias Kilian spotted a buffer overflow in svg processing.
    -   The fix for LastResort.ttf had an undesired effect: each time an
        sfd file was opened all AltUni entries were duplicated.
    -   Fixed validation crash for references to empty glyphs (Fedora
        bug 536920); patch by Paul Flo Williams
    -   Patch by Paul Flo Williams to fix a crash when resizing toolbox
        while editing bitmap glyphs.
    -   Try to get compilation working with multiple versions of libpng
        on the system.
    -   Khaled Hosny found that deleting the last anchor in a glyph
        causes a crash.
    -   Khaled Hosny fixed a crash in multiline text editing widget.
    -   Patch by Paul Flo Williams to fix a crash when attempting to
        edit glyphs in Unicode Plane 16.
    -   Patch by Werner Lemberg to make FF compile with Python 2.7.
    -   Patch by Khaled Hosny to prevent crash when adding certain
        lookup types.
    -   If one try to compile with -Wall -Wextra, lots of warnings show
        up. The first to fix are nested comments. As a result, a value
        that got, commented out in gxdrawtxt.c, probably by accident, is
        now active.
    -   Notice from Andrey Panov: FF did not compile with gcc 4.4.4
    -   Khaled Hosny made gtk stub compile again.
    -   Some typos and new comments in autoinstr code.
    -   Khaled Hosny provided an option in preferences/edit to turn off
        automatic openning of autokern window for any new horizontal
        kerning subtable.
    -   Patch by Khaled Hosny to fix wrong type conversion when
        assigning GASP values from python script. Spotted by Adam
        Twardoch.
    -   Make ligature carets accessible from python scripts.
    -   Khaled Hosny noticed that deleting anchors from Anchor Info
        dialog didn't mark glyphs affected as changed.
    -   Patch by Khaled Hosny, who noticed that OpenType glyph
        positioning is applied from left to right even for right to left
        scripts. As he writes:

        > 'This patch fixes the kerning pairs dialog to render kerning
        > as close to what OpenType engines does, also makes sure FF
        > activates by default and adjusts the correct fields. There are
        > other places in the code that need to be checked too, but I
        > think the code affected by this patch is self contained.'

    -   Fixed a crash when FontForge was given NULL glyph name in python
        script.
    -   Fixed misinterpretation of '+-' in UTF-7 strings read from sfd
        files. Spotted by Paul Flo Williams.
    -   Fixed misinterpretation of '//' at end of lines read from sfd
        files. Spotted by Paul Flo Williams.
    -   The statemachine table uses a matrix gadget, but some of the
        code was still expecting a list gadget, causing a crash. The
        patch, by Keith Stribley, also fixes a couple of typos and round
        tripping of the glyphnames
    -   Patch by Keith Stribley, to fix crashing lookup metadata that
        don't have scripts specified - he points that AAT doesn't need
        them.
    -   Patch by Keith Stribley, to fix corrupting of single
        substitution lookups used in the state table after generating
        are corrupted.
    -   Patch by Keith Stribley, to fix export of Mac features, though
        it may not cover every case.
    -   Patch by Khaled Hosny, to update Unicode support to Unicode
        6.0.0
    -   One point in code forgot to check if unicode number is in range
        before testing for alternatives.
    -   Removed two infinite loops in overlap code. Turned out to be a
        floating point accurracy issue.
    -   Zoom by mouse scroll scales around mouse pointer now.
    -   Ctrl+A in background layer (in charview window) picked up anchor
        points from foreground layers, too.
    -   FontForge forgot to categorize points after importing a svg
        font.
    -   Patch by Philipp Stephani, to fix wrong interpretation of most
        top accent data for newer versions of Cambria Math.
    -   Patch by Louis Simard: fixes multiple stack based buffer
        overflows in BDF processing routine. Ref:
        https://bugzilla.redhat.com/show\_bug.cgi?id=659359
    -   Patch by Barry Schwartz to fix error in handling of glyph name
        ranges in feature files, reported by Matthew Skala:
    -   Fixed crashes on pasting splines into guide layer in the glyph
        view window, reported by Andrey Panov.
    -   Remove one source of rounding errors in solving cubics, clean up
        function calls to match new calling conventions.
    -   Matthias Kilian notices that previous patch to fvimportbdf.c
        made unterminated strings.
    -   Khaled Hosny spots a paragraph in the docs that's no longer
        valid.
    -   Cleanup the fontforge desktop file.
    -   Freehand tool was very broken.
    -   When doing remove overlap on quadratic beziers (truetype) ff
        converted them to cubics and then did the ro. This introduced
        slight rounding errors which gave ro canniptions. Just as easy
        to make remove overlap work on quadratics too.
    -   See if we can improve conversion from quadratic beziers to
        cubic. There are rounding errors involved in finding the "cubic"
        control points which mean that the cubic term of the spline will
        be non-zero when it should be zero. See if we can find better
        approximations to the control points, and be prepared to force a
        small third order term to 0.
    -   "Make arc" didn't work as expected for connected points (it
        actually produced a straight line).
    -   The previous patch for matrixedit was incomplete: although the
        function indicator box was always drawn at the visible area of
        the control, it actually didn't work. Moreover, the box was
        being duplicated multiple times during horizontal scrolling. So
        this is one more attempt to make the whole GUI for editing OT
        glyph classes functional again. Note that now the special
        handling is applied only to the last column of a matrix edit
        control: if this column contains text fields with function
        indicators, then those indicators are always drawn at the top of
        the field by a such way that they should always be visible.
    -   Daniel Dumitriu has provided Romanian translations for style
        names.
    -   Daniel Johnson sent me a print sample of Mayan in the K'iche'
        dialect used in Guatemala from the prolog to the Popol Wuj.
    -   Expand stroke didn't work if the intial spline in a contour had
        a length of 0.
    -   Khaled points out that if the subtable dlg for a single
        substitution is [Populated] then hovering the mouse cursor over
        an empty cell will cause a crash. (the thing that pops up an
        image of the sustitution failed here).
    -   Legacy scripting did not support importing pdf files.
    -   There used to be two preference item controling autohinting.
        That does not seem a good idea, so coelesce them into one
        preference item.
    -   \_strtod could munch the stack if given a long string. This
        caused crashes, etc.
    -   Fixed a number of problems with the mm dlg:
        1.  of the design vector were bigger than 60 characters then ff
            would crash (happened if there were more than 2 axes)
        2.  default values for the Slant access were backwards
        3.  Convert-Design-Vector functions were wrong for 3 & 4 axis
            designs.

    -   The freehand dlg did not retain the previous shape of a
        polygonal nib. It always used the default shape each time it was
        invoked.
    -   More problems with zero length splines in expand stroke. Biggest
        problem was that the routine which was suppposed to remove them
        didn't (at least in some cases).
    -   Add a link to the panose docs from the panose pane of fontinfo.
    -   Add strings and support for other latin panose families.
    -   Patch by Werner Lemberg to improve rasterization accuracy in TTF
        debugger.
    -   Trying to create a new kerning subtable from font info would
        often crash.
    -   Brian Zick wanted a preference item so that if one end of a
        spline were moved and the other were not then the control points
        would be interpolated (rather than being moved by the same
        amount as the adjacent end point).
        Note that this will have problems if the moving end point ever
        ends up on the same horizontal/vertical line as the stationary
        end point. Then the control point may vanish and never reappear.
    -   Add a bit more info to the version string (whether compiled for
        doubles, etc.)
    -   When modifying OT classes by inserting glyphs from a
        fontview-based window, the add\_char\_to\_name\_list preference
        item was not respected.
    -   FF used to allow modifying the width (and vwidth) of a bitmap
        glyph only in bitmap-only fonts. This seems to make no sense for
        TTF, where widths of rasterized glyphs can be set independently
        for each PPEM.
    -   Use FT\_LOAD\_TARGET\_MONO instead of FT\_LOAD\_MONOCHROME for
        spline rasterization with freetype. This guarantees more
        accurate rendering of hinted fonts in monochrome mode.
    -   If a font contains several sets of kerning classes (e. g. for
        different scripts), and a particular glyph is present in more
        than one set, then attempting to find a matching kerning value
        between this glyph and a subsequent glyph might result in
        selecting the combination with the {Everything Else} class from
        the first set being processed, even if there are better matches
        in other sets.
        Also FF would still complain that the "{Everythin Else}" string
        in the kern class dialog represents a missing glyph.
    -   Two small corrections for metrics view:
        1.  Since the {Everything Else} class is now recognized by FF as
            a valid glyph class, it was possible to occasionally modify
            a kerning value involving this class in the metrics view. So
            when asking user if he is going to modify a class-based
            kerning value or create a new kerning pair, inform him if
            one of the glyphs from this pair has been actually matched
            by the {Everything Else} class.
        2.  Make it possible to easily deselect all glyphs in the
            metrics view by pressing [Escape].

    -   Pasting bitmaps from fontview didn't work.
    -   Allow a user to enter values for the PS private dictionary in
        his/her own locale but convert them to the "C"==PostScript
        locale when storing them. That is a French user could enter [3,5
        20] for BlueValues, but it needs to be converted to [3.5 20]
        when put in the sfd file (or PS font file).
    -   Change the Histogram dialog to use boxes (cosmetic change,
        shouldn't matter to English speakers, dlg won't have fields
        overrunning other fields in French).
    -   Redo the "PS Private" pane of the Font Info dialog so that it
        uses a matrix edit rather than the old clumsy list with editing
        area kludge.
    -   Patch by Khaled Hosny to fix crash when importing svg with
        linked image.
    -   The scripting function "FontsInFile" did not support pdf files,
        and always returned an empty array when asking if they contained
        fonts.
    -   Scripting didn't let anyone pick a subfont within a pdf file.
        (did not support: filename(fontname) notation for pdf).
    -   Update cidmap to CNS-1.6.
    -   My cidmap files have always been a one to one mapping of cid to
        unicode. But that's not what Adobe does. Many cids get mapped to
        several code points each. So I've revamped the format to support
        this. The new map files need the new code (obviously) so don't
        download one without the other.
    -   An earlier patch added support for horizontal scrolling (shift
        trackwheel) in the outline glyph window. This builds on that and
        supports it in (I hope) all windows. Also adds support for
        apple's wheel which can do both horizontal and vertical motion.
    -   When ff calculated the size of a kerning subtable it was off by
        two bytes per glyph in the coverage table. This meant that it
        would sometimes make a table that was slightly too big to be
        supported and not realize it. I've fixed the bug, and put in
        checks so that if there's yet another problem like this, at list
        it will be reported to the user.
    -   It is now possible to differentiate stems by width (rather than
        by direction) in the "Change glyph" dialog. This approach
        produces better results for glyphs like "N" or "g", and thus
        seems more logical even for the Latin script, where vertical
        stems are normally "thick" and horizontal ones are "thin".
        This patch also affects some gdraw internals, since the new
        layout of the "Change glyph" dialog makes it necessary to
        dynamically switch the captions of some labels, and the text
        strings should fit to the space initially reserved for those
        labels. So it is now possible to assign a list of strings to a
        label, just like if it was a list button.
    -   Fix some issues with hv points.
    -   Do some internal cleanup.
    -   User doesn't like that ff does a "fit to window" ever time the
        user resizes the window. So... let's try not doing that.
    -   Someone complained that when the fontview was maximized it would
        make itself one cell smaller than it should have. Well that's
        screen size and window manager dependant. It did allow 10 pixels
        of horizontal border (not knowing what the WM would give it).
        That's probably too much. And even if a tiny bit of the window
        is off the screen, it probably doesn't matter much.
    -   When ff was started with a .ufo fontdirectory on the command
        line, it would fail to open it (and produce a garbage error
        message). I suspect the underlying problem would cause other
        problems too, but haven't found any yet.
    -   Barry points out that FF incorrectly loaded an opentype font
        with an empty bluevalues array (FF showed it as not having a
        bluevalues array at all, the two are different). (pfb files with
        empty arrays worked as expected).
    -   Correct two "bugs" in UFO output. I believe that I was following
        the spec in both cases, but since the reference implimentation
        does not follow the spec I shall do what it does instead.
        1.  The spec gives a complex algorithm for converting a glyph
            name to a filename. The proper behavior appears to be "add
            an underscore immediately after every capital letter" and
            leave it at that.
        2.  The spec says for OS2 fsType we should output bit numbers.
            It doesn't mean the numbers of the bits (0..15) but rather
            the values (0..1).

    -   Retain the UFO ascender and descender fields.
    -   Werner found a place where apple kerning output didn't work if
        glyphs which weren't being output had kerning pairs associated
        with them.
    -   Richard Gitschlag and Khaled complain that the Glyph Info dlg
        says "Done" rather than "Cancel".

        There is a reason for this. The button does not do a cancel. It
        only cancels changes to the current glyph, but the dlg can be
        applied to several glyphs one after another, and any changes
        made to previous glyphs are committed when the user changes
        glyphs. So the "Done" button only cancels the current glyph.

        However, I can change it so that it says "Cancel" until the user
        changes glyphs. And in most cases the user is only interested in
        one glyph so this will solve most of the problem...

    -   Richard Gitshlag suggests that the buttons in the "non-integral
        coordinates" question of validation are confusing and suggests
        they be relabeled.
    -   More fixes needed where \*printf expects a double and gets a
        long double if --enabel-longdouble.
    -   According to the spec there are two different types of GPOS
        'size' feature. One specifies a design size and nothing else,
        the other specifies a design size, a design range a style name
        and a magic number used to associate all fonts in the same
        family with the same weight and style but with different design
        sizes.

        FontForge was not very good about warning the user when s/he
        created something which had some but not all of these
        attributes. (ie. a design range but no style name). So add some
        error messages to the fontinfo dlg which makes these checks.

        FF would also not read in a 'size' feature unless it were in one
        of these formats. So if the user created a 'size' feature with a
        design size, and a design range but no style name, then FF would
        not complain, would happily output it, but would not read it
        back in again. So be a little more lenient in what we read in.

    -   Sort human-readable stylistic set names (first by feature tag,
        then by language) both in the FontInfo dialog and in SFD output.

-   13-Feb-2011
    -   Switched from cvs to git.

-   29-Apr-2010
    -   A new algorithm for stroking splines. Allows the user to specify
        arbetrary convex polygons as pens as well as more traditional
        circles (ellipses) and slanted rectangles (calligraphic pens).
        (It should also produce better results and each resultant
        contour will have no self-intersections)
        Extended the python interface so you can specify a polygon pen.
    -   Add support for the [Web Open Font
        Format](http://people.mozilla.com/~jkew/woff/woff-2009-09-16.html)
        (woff) which is basically just an sfnt with its tables
        compressed and some extra metadata. New pane in Font Info dlg,
        and python support for that info.
    -   Redo Auto Kerning. Add support for automagically generating
        kerning classes and auto kerning those classes. Rework most of
        the kerning related dialogs. Provide python interfaces to all
        this.
    -   Compile with libpng1.4.
    -   Add two python methods:
        -   contour.similar
        -   layer.similar

        which allow you to compare two contours (or layers) and specify
        an error bound on how far they may diverge.
    -   Khaled would like access to the math constant table from python.
        Add a set of fields
         font.math.\<math-constant-name\> to the font, and a set of
        fields to the glyph for math kerning, variants and composition.
    -   If the method of approximating a cubic spline by subdivision
        fails, then relax the precision requirements for a match, and
        try again.
    -   Add support for the "style" attribute from svg 1.2.
    -   python glyph.ImportOutlines would crash if it were not given a
        flags argument.
    -   Barry reports that the metrics view crashes for him because
        things in the pairwise kerning subtable pulldown list are
        sometimes garbage. Mmm. This can happen if the user has a
        metrics view open and then uses font info to delete a kerning
        subtable (or lookup). (And presses [OK] in fontinfo).
    -   Suppress warnings about 'showpage' operator when importing PS
        files.
    -   I have been trying for years to figure out how to apply
        least-squares to this problem. I kept having 4 equations and 2
        unknowns. An over specified system with no solutions. I realized
        last night that I was looking at the problem wrong (of course).
        Instead of seperating it into x and y components and minimizing
        errors in each, I should have been minimizing the sum of the x
        and y errors. Simple. Worked first try. Makes stroking about
        10-15 times faster.
    -   When doing square pens or polygons then long bendy splines will
        be broken up roughly every 90 degrees (every time we switch
        verteces, actually). That turns out to be a good thing (makes it
        easier to approximate the curve). It doesn't happen
        automagically for circle pens, so add a little bit of code that
        detects 90 degree slope transitions and inserts a point there.
        Results are more accurate now.
    -   The various dialogs involving the fontview did not resize
        properly when the user changed the display size.
    -   FF failed to put a trailing NUL on some strings for glyph
        classes resulting in strange displays (and complaints from pango
        about bad utf8 strings).
    -   Patch by François Charette to allow UTF8 to be spelled as "utf8"
        in locales.
    -   Some users don't like having the character representation of a
        glyph name showing up in lists of glyph names, so add a
        preference item: Prefs-\>Font Info-\>AddCharToNameList to let
        them turn that off.
    -   If you have freetype rasterizing in the metrics view, and if you
        are working on a cubic layer, nd if you are editing a glyph in a
        char view and looking at it in the metrics view, and if you make
        a change to the glyph -- then Undo doesn't do what you expect.
        Instead the glyph gets autohinted (by default) before a font is
        generated for freetype, and a hint undo gets added to the undo
        list. Undo undoes the hint change (which the user probably isn't
        aware of) and leaves his/her changes untouched.
    -   Andrew Robbins points out that when generating an svg font the
        unicode-range attribute should look like U+0020-0E4A rather than
        U+0020-U+0E4A (no second U+).
    -   d binderman points out a missing closedir.
         Also d binderman points out that I was missing an fclose in
        archive processing.
    -   FontForge failed to handle archives with double extensions (like
        ".tar.bz2").
    -   Typo in code for parsing extenders in tfm file.
    -   The python operators which tested if two contours were
        equivalent would crash when called.
    -   Add a "dup()" member to Points, Layers and Contours to produce a
        deep copy of the object.
    -   The default \_\_iter\_\_ for a selection type (in python) didn't
        work. It was supposed to return all the selected encoding slots
        (that is, numbers) instead it returned the empty set (when I
        tested it, actually it's return would be random depending on an
        uninitialized variable).
    -   Some seemingly valid bdf fonts were rejected. Thanks to Andrey
        V. Panov for providing a sample.
    -   Patch from Alan Coopersmith to fix "showttf -verbose filename"
        behavior.
    -   Khaled Hosny spots duplicate "Descent" fields written to sfd
        files.
    -   When generating a cursive attachment anchor lookup fontforge did
        two passes through the glyph list. The first did everything
        needed. And the second thought it was handling marks (rather
        than cursives) and produced garbage.
    -   The clockwise check sometimes gave up when it should not have.
    -   When generating a feature file for a mark to mark lookup
        fontforge could generate gibberish.
    -   Three bugs in reading feature files:
        1.  FF dereference garbage (and probably, but not necessarily)
            crash when parsing a glyph class with no glyphs in it inside
            an anchor specification.
        2.  When freeing data describing a list of anchors FF would
            crash if one of the anchors were defined to be NULL
        3.  A multiple substitution entry with just a single element in
            it looks exactly like a single substitution. FF would
            complain about multiple substitution lookups containing both
            single and multiple entries.

    -   Hot keys for the grid fit Bigger/Smaller pointsize menu commands
        got lost when I merged in the mingw changes. (Not saying the
        fault lies with the mingw people, that's just when they
        vanished. I might have removed them myself).
    -   The bluezones weren't marked in the charview when hinting
        display was turned off. Patch by Michal Nowakowski.
    -   Merge fonts doesn't merge bitmap strikes if one font has a
        different number of strikes than the other. Patch by Won-Kyu
        Park.
    -   Jeff Harmon reports that ff writes "Postscript" into PFM files
        rather than "PostScript" and that this matters. Change all
        instances of "Postscript" to "PostScript".
    -   FF crashes if asked to produce a small-caps variant of a lower
        case letter for which there is no corresponding upper case.
        Patch from Rogerio Brito via debian.
    -   Some time ago MS put in a patch to their OS so that they would
        refuse to load a font with a name table \>5K. They have now
        decided that was an error
        http://support.microsoft.com/kb/978909/ And have removed the
        limitation.
        So remove the warning ff used to generate about name tables
        bigger than 5K.
    -   Complain when the user attempts to put a unicode copyright
        symbol into the copyright string of a PostScript font.
    -   The Hint-\>Edit cvt dlg would crash if you resized the dlg
        window.
    -   Couple of patches from Louis Simard:
        1.  in the kern class dlg, if classes were very long then could
            segfault when displaying popup messages listing both first
            and second class members.
        2.  Would complain that the special case string "{Everything
            Else}" was a missing glyph.
        3.  Would crash when switching from a newly-created First class
            entry directly to the \<FNew\> entry at the bottom of the
            Second class column.

    -   MatrixEdits with up/down buttons never enabled the down button.
    -   FF could display multiline utf8 textfield strings incorrectly.
    -   Updated Vietnamese translation from Clytie. He also fixes
        various typos on my part.
    -   Added a new python function to the module:
        fontforge.unitShape(n) which returns a contour containing a
        regular n-gon.
    -   Grab many patches from the mingw build. I did not grab the
        winmmap files because I'm not sure what the license is for that.
    -   Patch by Michal to remove some hard coded colors in the ff ui
        (mostly yellow for selections and black for text).
    -   If FF had to split a GPOS pairwise kerning subtable into several
        bits (because it was bigger than 65535) then ff would go into an
        infinite loop -- at least sometimes.
    -   Fix another place where I was using strcpy against the spec.
    -   When doing a Rename to Namelist operation prior to generating a
        font, FF neglected to clear the glyph-name hash table. This
        meant that any glyph lookups by name on renamed glyphs would
        fail. Meaning we would inexplicably lose substitutions.
    -   On 64 bit machines, in a contextual chaining display, nested
        lookups were not shown by name.
    -   When FF lists glyph names, it appends the unicode character of
        the glyph after the name. It probably should not do that if the
        glyph name maps to the private use area -- if the display font
        has a glyph there, it probably won't match the one in the
        designed font and will just add confusion.
    -   In a list of a simple substitution subtable the arrow between
        glyphs was pointing the wrong way so it looked as if the
        replacement glyph became the source glyph.
    -   At Kevin Fenzi's request warn about use of seac instructions in
        type2 charstrings. Similarly warn about other type1 but not
        type2 operators (we warned about some. I think I'm now warning
        about all).
    -   New copyright notices for 2010.
    -   Unicode 5.2
    -   FontForge had no error checking for bad GIDs in the JSTF table.
    -   A bad 'kern' table could send fontforge into an infinite loop.
    -   Patch from Stephen Hartke, contour slicing still not working
        properly.
    -   More patches from Barry to make ff work with Python 3
    -   Annie Olsen of SIL says that the big tick marks in the rulers in
        the glyph window aren't obvious enough. So make them longer and
        of a different color.
    -   Patch by Tilman Blumenbach. Legacy scripting GetPrefs crashed
        when asked about "AutotraceArgs".
    -   Patch by Khaled to add an optional flags argument to the python
        glyph.importOutlines()
    -   Patch from Alexey Kryukov to make legacy scripting commands
        GetAnchorPoints and AddAnchorPoint to be consistant.
    -   Patch by Martin Hosken to fix some problems with UFO metrics
        output.
    -   Patch by Michal Nowakowski to fix an autohinting problem with
        hint masks.
    -   FF used to map the characters U+1D400-U+1D7FF to equivalent
        ascii (in the appropriate font). Khaled says that Pango can do
        that for us.
    -   Patch by Khaled to add some missing feature tags.
    -   Allow the user to provide a python routine which will calculate
        the optical spacing between two glyphs. Used to override
        fontforge's default routine when calculating autokern, autowidth
        and left and right optical bounds.
         fontforge.registerGlyphSeparationHook
    -   I recently broke loading sfd files which contain multiple
        kerning subtables.
    -   Rework the other dialogs which use glyph classes (or sets) so
        that they now use matrix edits (which I hope make more sense)
        and have better glyph entry, in line with the kerning dlg.
    -   The Goto Char dlg now has an option (when executed in the
        fontview) to merge the new glyph into the selection (before it
        simply set the selection to the new glyph).
    -   Panov complains that the afii\* names (and uni\* or u\*) don't
        mean much. So when we have a glyph name (or a list of glyph
        names) append the unicode character itself to the name inside
        parens. I don't do this everywhere yet, but moving in that
        direction. (don't do this for glyph names where it is obvious
        (like "A"), nor for names that might cause parsing confusion
        (like close paren itself or space)).
    -   Add an autokern command to python.
    -   Use autokerning idea to find (default) optical bounds when
        filling up 'lfbd' and 'rtbd'
    -   Someone pointed out that Clockwise and CounterClockwise should
        only be disabled if the selected contours self-intersect, while
        correct direction should be disabled if there are any
        intersections.
    -   PDF has changed since I last downloaded the spec, and Barry
        wanted support for Cross-reference streams (which required also
        supporting object streams).
    -   Apple keeps changing the environment. In 10.2 the Option key
        would produce the keyboard state mask of 0x2000. In 10.4 it
        produced 0x0008. In 10.6 it again produces 0x2000. Constant
        change makes it difficult to create a program which will work on
        all versions of the OS.
    -   Patch by Alexey K so that ff will look for (and parse) unicode
        cmaps when loading fonts from pdf files. Loaded fonts will then
        have an encoding rather than just being a list of glyphs.
    -   Memory bug when generating ttc files with a 'post' table.
    -   Barry points out that some fields in OS/2 were set incorrectly
        if the font were a cff.
    -   in winfonts.c under 64 bit mode, the sizeof(FARPROC16) is 8
        rather than 4 and this screws up the font dump. We'd already
        fixed it for FARPROC, but FARPROC16 escaped. Thanks to Alexey.
    -   Was writing random memory locations on 64 bit machines when
        generating ttc files (possibly on 32 machines too, but no
        crashes involved and valgrind didn't find anything).
    -   Several fixes to the resource editor.
    -   Alexey suggests that Control + Mouse wheel should Zoom the
        metrics window just as it does the glyph view.
    -   Fix a couple of problems with the Set Point Size dlg of the
        metrics view.
    -   Blending a new Apple MM instance left us in a font with no
        encoding.
    -   The pulldown list in the apple version of the MM dlg did not get
        set to the correct default value.
    -   Attempt to free something that should not have been freed in MM
        dlg.
    -   Loading LastResort.ttf was extremely slow because some glyphs
        had hundreds of thousands of altunis and whenever we added a new
        one we went all through that list to check for duplicates. When
        parsing a standard encoding there won't be any duplicates.
    -   More problems reading apple tables from ttc files. Some crashes,
        etc.
    -   Barry wants to have review hints regenerate substitution points
        and hint masks.

-   11-Sept-2009
    -   FontForge will now generate ttc files. It has two options:
        -   share a common glyf table (not always possible)
        -   Use CFF output.

        There is also a python command font.generateTtc()
    -   Barry points out that some fields in OS/2 were set incorrectly
        if the font were a cff.
    -   in winfonts.c under 64 bit mode, the sizeof(FARPROC16) is 8
        rather than 4 and this screws up the font dump. We'd already
        fixed it for FARPROC, but FARPROC16 escaped. Thanks to Alexey.
    -   Several fixes to the resource editor.
    -   Alexey suggests that Control + Mouse wheel should Zoom the
        metrics window just as it does the glyph view.
    -   Fix a couple of problems with the Set Point Size dlg of the
        metrics view.
    -   Blending a new Apple MM instance left us in a font with no
        encoding.
    -   The pulldown list in the apple version of the MM dlg did not get
        set to the correct default value.
    -   Attempt to free something that should not have been freed in MM
        dlg.
    -   Loading LastResort.ttf was extremely slow because some glyphs
        had hundreds of thousands of altunis and whenever we added a new
        one we went all through that list to check for duplicates. When
        parsing a standard encoding there won't be any duplicates.
    -   More problems reading apple tables from ttc files. Some crashes,
        etc.
    -   Barry wants to have review hints regenerate substitution points
        and hint masks.
    -   Clean up some minor issues which show up on Mac 10.6
    -   Patch by Alexey to add a NameFromUnicode function to both native
        and python scripting.
    -   Drag & dropping a glyph into the metrics view didn't mark the
        end of string properly so cruft left over could be displayed.
    -   In CharView Element-\>Join and Element-\>Correct Direction were
        turned off when they should not have been.
    -   Patch by Khaled to add some feature names to my list and extend
        the lookup type to which others apply.
    -   new python fields:
        -   glyph.topaccent
        -   glyph.italicCorrection
        -   glyph.isExtendedShape

    -   Khaled provides a patch. 'Top Accent Pos' value in Glyph Info
        -\> TeX & Math was not being retained when user pressed OK.
    -   Alexey points out that wordlists in the metrics view really
        assumed ASCII letters and didn't handle utf8 well.
    -   Patch by Michal to render more strings translateable.
    -   See if I can speed up execution of "\<glyphname\> in \<font\>"
    -   Patch by Alexey K to add two preference items which control
        features of the autohintor/instructor.
    -   Dave Crossland tells me that some security patch to windows
        considers fonts with a 'name' table bigger than 5K to be
        insecure (Don't ask me why they think this) and windows will
        refuse to load any such fonts. This means Windows won't load any
        font with the Open Font License in the 'name' table. This patch
        adds three checks:
        1.  When generating a font it will let the user know if the name
            table is too big.
        2.  When loading a font in validation mode it will warn if the
            name table is too big.
        3.  Font Info will make a rough approximation to the size of the
            name table (an approximation which will always be too small)
            and warn if this approximation is bigger than 5K

    -   When opening a ttf file the guideline psuedo-layer was cubic not
        quadratic.
    -   Patch by Michal:
        -   Duplicate "Raster Dark Color" in xresources editor.
             "Delta Grid Color" was really meant the second time
        -   Duplicate charview-\>point-\>tools-\>rotate menu item.
        -   In charview palettes, it was impossible to unset "don't
            stroke" in freehand
        -   Charview-\>hinting-\>autohint and
            Charview-\>hinting-\>autoinstr were not
             disabled if guide were the active layer. This resulted in
            segfaults
        -   In GlyphInfo-\>Unicode, "variant selector" matrix had
            headers untranslated.

    -   Autoinstructor: added aspect-ratio correction for new diagonal
        code.
    -   Autoinstructor: pushes EF2Dot14 values in a more compact manner.
    -   In the metricsview Cut/Copy/Paste/Undo/Redo menu commands all
        apply to the textfields as well as the glyphs. So don't disable
        them. It used not to matter because disabling didn't affect the
        shortcuts, but it does now.
    -   `File->X Resource Editor...->FontView->Font Size` was supposed
        to allow the user to set the size of the glyph labels in the
        fontview. It didn't. Fixed.
    -   Add a new problem (Find Problems) and a new validation state
        indicative of whether a glyph (or hint mask) has overlapping
        hints.
    -   Patch by Alexandre Prokoudine to make an error message
        translatable.
    -   Patch by Stephen Hartke to make contour splicing (in fontforge's
        python module) work the way splicing normally does in python.
    -   Back in the dark ages adobe provide a set of encodings for the
        PUA. For instance A.small was encoded into PUA. Nowadays it is
        thought better to leave A.small unencoded. But if a modern font
        contained an A.small glyph FontForge would think it should be
        encoded into the PUA. So I added a preference item to turn off
        adobe's obsolete names.
        Sadly the preference item wasn't very smart and turned off names
        like uE001 as well. Fix that.
    -   Autoinstructor: made much faster by caching
        SplinePointListIsClockwise() results.
    -   Problem when converting an OpenType contextual subtable to an
        Apple state machine.
    -   If an old-style kerning table kerns glyphs which are outside
        unicode BMP then windows has problems. Someone provide a patch
        to check for this. Sadly the patch had a bug which could cause
        crashes.
    -   Autoinstructor: patch from Alexey to fix artifacts caused by
        diagonal hints at small and medium PPEMs. Code now sets
        projection vector from the stack, because that's more accurate
        than using dual projection vector, so some font validators may
        give warnings due to aspect-ratio-dependent nature of SPVFS.
    -   Autoinstructor: Alexey pointed out that inaccurate strong points
        interpolation caused assymetry of implied perpendicular
        extremas.
    -   I was intended to translate espace\_espace\_i to space\_space\_i
        and espace.small to space.small but that didn't work.
    -   When renaming a font to a new namelist I only renamed glyphs,
        but not the places where glyph names ocurred in lookups or math
        variants.
    -   I used to have a separate set of default Generate [Option] flags
        for ttf and otf. There's no real need for that, and it's
        probably a bit confusing, and it makes life hard with ttc files.
    -   Typo in code for converting an OpenType contextual sub to an
        apple state machine.
    -   Hunh. If we configured with gb12345 then that encoding appeared
        twice in the encoding list and the first occurance was broken.
        Remove the broken occurance.
    -   Barry complains that when a feature file creates glyphs which
        aren't in the encoding then those glyphs aren't visible (until
        you reencode, of course). This causes confusion. I think the
        solution is simply to encode the new glyphs.
    -   Patch by Michal. Some of the strings for the new delta suggestor
        were not marked for translation (also resizing the window didn't
        reset the scrollbar properly).
    -   Add a new python method glyph.preserveLayerAsUndo() to add an
        undo to the undo list which will restore the layer to its
        current state.
    -   embedded bitmaps in CID keyed fonts didn't work.
    -   Interpolate fonts would screw up internals if the first font had
        a layer count which wasn't 2. This would almost certainly cause
        a crash later.
    -   Hunh. Python creates an iterator for my cvt type which doesn't
        work. So create a real one.
    -   Barry wanted a selection field in python glyph.anchorPoints so
        create a new routine glyph.anchorPointsWithSel()
    -   Patch from Peter, python cvt[i] returned an unsigned value.
    -   Python cvt.find function crashed if there were no cvt table.
    -   Werner suggests that .02 is a better default value for delta
        checking than .01.
    -   When generating a type3 font from a script, ff would convert to
        type0 if it had a two byte encoding.
    -   Werner keeps asking for a clearer header in the GASP part of
        fontinfo.
    -   When generating a temporary font for rasterization purposes,
        don't output GPOS GSUB, or any AAT tables.
    -   Patch by Herbert Duerr. With traditional 'kern' tables, windows
        has problems with kerning glyphs which do not have BMP
        encodings. So produce a warning in this case.
    -   SVG kerning produced garbage. Two typos. Patch by Simo Kinnunen.
    -   Bug in feature file (and hence UFO) output. When outputing a
        contextual class-based lookup ff would crash if class 0 was
        unused.
    -   Werner requests a command to check when a spline gets very close
        to the center of a pixel as this might be a candidate for a
        delta instruction. That is: Grid fit many glyphs at many pixel
        sizes and see which splines come close to which pixel centers.
        This is a functional but ugly implementation.
    -   Add mnemonics for the first 10 layers (Guide is \_0, Back \_1,
        Fore \_2, \<user layer 1\> \_3, ...). Guide, Back and Fore
        already had mnemonics... Now they have two.
    -   You can rebind the charview menus separately from the others.

        If you have an entry like:

        >       msgid "CV*Open|Ctl+O"
        >       msgstr "Super+O"

        then that will rebind Open in the charview and nowhere else.

        Note that the string "CV\*Open|Ctl+O" will not appear in the pot
        file, you must add it manually if you want to do this (that's
        because I don't want people to do this).

        If you have a rebinding for

        >       msgid "Open|Ctl+O"

        and no entry for "CV\*Open|Ctl+O" (ie. the common case) then all
        menus (including the charview) will follow the standard
        rebinding.

    -   When listing all languages used in a script, ff would only look
        at gpos.
    -   When creating an ellipse or rectangle, ff would round the points
        to be integers -- but it would not refigure the splines after
        doing that (so the spline polynomials do not actually reach
        their endpoints causing peculiar errors).
    -   When reading a featurefile from a ufo there is no associated fv
        yet, but there is an associated map. Use the map instead of
        fv-\>map when checking encodings.
    -   FF was not translating the spiro point menu in charview.
    -   Add a mechanism so user can specify a modifier mask to be
        applied to characters for navigation. Used to be that user typed
        "a" and the glyph for "a" was selected in the fontview (or the
        charview shifted to show "a"). No modifier was used. Now I've
        added "NavigationMask|None" to the pot file for hotkeys. If left
        as "None" then there will continue to be no modifier. If changed
        to something like "Super" then the super key must be used.
    -   Set Width (Set Right Bearing, etc.) from the fontview would
        change the width of a glyph even if it were composite with a
        "use my metrics" reference.
    -   If cairo was turned off, and a glyph had background images, then
        deleting those images (Cut or Clear) in the charview did not
        update the display. (That's a simplification, but is what it
        looked like).
    -   In python font.save(), if the script does not specify a
        filename, and the font isn't associated with an sfd file, then
        generate the same name as used in SaveAs by default.
    -   FF can save spiro info into an sfnt. Unfortunately FF didn't
        read it back in properly.
    -   Autoinstructor: patch from Alexey to fix a bug reported by
        Andrey V. Panov: - sometives the last vertical stem protruded
        beyond the advance width.
    -   Various patches from Michal. Array bounds out of bound kind of
        thing.

-   22-June-2009
    -   Apple seems to have broken the X11 clipboard around 10.5.7. Or
        so other people tell me. I can't reproduce the issue on my
        10.5.7 system.

        I hope I have worked around this by adding a preference item
            File-\>Preferences-\>Generic-\>ExportClipboard
         Turn this **Off** if the clipboard doesn't seem to work.

        Peter Baker says that a solution is to go into X11 Preferences,
        click on the "Input" tab, and uncheck "Enable key equivalents
        under X11".

        Possibly downloading a new set of developer tools will fix it:

              http://developer.apple.com/Tools/
                (then log in, (or become a member & log in, it's free))
              Click on Downloads
              In the "Downloads" side bar, click on "Developer Tools"
              Download and Install 3.1.3

    -   Add support for friendly names attached to style set features
        (New in OTF 1.6).
    -   Add support for Mark Sets (New in OTF 1.6)
    -   Serhij Dubyk has provided a Ukrainian UI.
    -   Alexandre Prokoudine has updated the Russian UI.
    -   Updated Polish translation from Michal
    -   Various patches from Michal fixing some out of bound array
        references.
    -   Added a cvt.find method to the python cvt object which returns
        the index in the cvt table of a given value (or -1 if not
        found).
    -   Two issues:
        -   Apple has changed the name of the preference file for X11.
            Annoying. Pointless.
        -   Apple (or xorg) has changed the default setting of DISPLAY.

        Together these meant that ff did not use appropriate command
        keys in the menus.
         I wish Apple wouldn't do pointless changes.
    -   When faced with non-integral coordinates ff would sometimes
        introduce rounding errors so the start and end of a contour were
        slightly different in type1 output. I think this is now fixed...
    -   Fix some problems with the non-linear transform dlg.
    -   Add a nltransform method (non-linear transform) to python font,
        glyph and layer.
    -   python simplify could crash.
    -   Patch by Michal to fix problem when compiled with long doubles.
    -   If used twice, tilepath would screw up memory.
    -   Someone wants a Reverse contour direction command (in addition
        to correct contour direction).
    -   The code used to check bounding boxes in otf fonts had a bug
        which caused it to report a minimum value of 0 when the min
        value was positive. This meant we got erroneous reports of
        points outside the font's bounding box in fontlint.
    -   The code used to check spline intersections had a typo which
        occasionally caused erroneous intersections to be reported.
    -   fontlint said bad 'glyf' table when it meant bad glyph data in
        CFF table.
    -   If a font had multiple glyphs in the ff clipboard, and we sent
        that clipboard through X11 (rather than just using the internal
        clip) then only one glyph would come out on the other side.
        Provide a mechanism for specifying multiple glyphs in the X
        clipboard too.
    -   Refined fix to 'kern pair loss' problem, reported by Louis
        Simard. There probably was also a similar 'ligature loss'
        problem.
    -   Fixed buffer overrun when filling GASP with default values.
    -   Enlarging Metrics window made the feature pane and kerning
        values grid illegible.
    -   Fixed a bug reported by Louis Simard:
         'Build composite glyph' was enabled in wrong situations and
        crashed.
    -   when saving an sfd after adding a new "kerning by classes"
        subtable and cancelling its edit dialog.
    -   FF crashes just after closing an open spiro contour (by dragging
        its first point over the last one, and then a bit further).
    -   When reading strings from the name table, certain
        platform/specific settings would cause ff to:
        1.  read the wrong string
        2.  screw up memory.

    -   Consolidate various mechanisms for finding the xHeight/capHeight
        of a font. Look for flat lines at the top of appropriate glyphs
        and then snap to the closest bluevalue. If no flat lines, then
        try curves.
    -   Output Cap/X Height into UFO.
    -   Add new python commands
        -   font.capHeight
        -   font.xHeight

    -   Was outputting dates within \<date\> but should be in \<string\>
        when generating UFO files.
    -   A font with erroneous GSUB tables (referring to non-existant
        glyphs) and an incomplete set of glyphs (caused by having
        bitmaps for glyphs without outlines) caused ff to crash.
    -   In svg paths, if you omit a command after a 'moveto' then it
        defaults to a lineto, not another moveto.
    -   Add a python font.saveNamelist(filename) command.
    -   Jakub Steiner thinks it would be a good idea if the tool
        bindings of mouse clicks in the glyph editor were sticky across
        invocations.
    -   Werner finds a place where the new jstf code was corrupting
        memory.
    -   Cancelling Element-\>Validation-\>Set Extremum Bound caused a
        crash.
    -   When closing a metrics view associated with a CID keyed font, ff
        would crash.
    -   Someone wanted to be able to set both the left and right side
        bearings at the same time.
    -   Patch by Alexey to unlink bitmap code.
    -   Barry points out it would be better to use fputs when I use
        fprintf.
    -   If the user didn't have freetype, then the anti-aliased metrics
        view was faint.
    -   Oops, could write but not read styleset names from a feature
        file.
    -   Show Att didn't display cursive anchor positioning anchor
        classes properly.
    -   Panov wants a python function to determine the extent in the x
        direction of a contour when y is fix. That is, the minimum and
        maximum values x can attain for a given y. And vice versa.

        Extend this a little so the user can specify a range of y values
        (return the extent in x when y is between ybottom and ytop).

        -   contour.xBoundsAtY(ybottom[,ytop])
        -   contour.yBoundsAtX(xleft[,xright])
        -   layer.xBoundsAtY(ybottom[,ytop])
        -   layer.yBoundsAtX(xleft[,xright])

        And that appears not to be what he wants anyway. Oh well.

    -   Dave wants a python function to return a random text string.
        -   font.randomText(script[,lang])

    -   If ff opened a bad bitmap font file and tried to place it in a
        font's background layer, ff would crash.
    -   Adjusting the Previous Control Point from the Get Info (point)
        window of an HVCurve point had very odd effects.
    -   Ubuntu now checks that if you use "%3\$s" in a sprintf format
        string you must also use "%1\$" and "%2\$".
    -   Patch by Nicolas Spalinger improving OFL tooltip.
    -   Patch by Andrey Panov to add GetAnchorPoints to legacy
        scripting.
    -   Widhaya Trisarnwadhana points out that the mnemonic \_N is bound
        to two items in the View menu of outline glyphs.
    -   I let people assign any name to glyphs in the private use area
        without destroying the encoding. But due to a bug, if you
        changed the glyph's encoding to the PUA it fell into that code
        and would not change the font's encoding either.
    -   If a point had control points which were less than 1 em-unit
        from it, then FF would sometimes think it was a curve point when
        it wasn't. That's probably still true, but some of the more
        egregious cases have been fixed.
    -   Panov suggests that for cubic points, when we round them we
        should not round the locations of the controls but should round
        the distance from the on-curve point. Things are a bit trickier
        for quadratic controls. If the on-curve point is interpolated,
        then obviously the controls should be rounded and not the
        on-curve point.
    -   Exporting bitmap formats chose the wrong format.

    I wish to thank Michal Nowakowski for fixing my bugs these last few
    months. I no longer have as much time for FontForge as I have in the
    past, and my attention to the project is spotty.
    Currently I am training to run a [50 mile
    race](http://www.seattlerunningcompany.com/WR50/) (\~80K) to
    celebrate my 50th birthday this year. I've already run a [50K
    race](http://georgeruns.wordpress.com/2009/06/06/50-at-50-not-quite/)
    as preparation.
-   8-Apr-2009
    -   Extensive patch by Alexey Kryukov to support composites
        (references) in bitmap fonts.
        -   Copy/Paste bitmap references
        -   Output into sfnts
        -   sfd extension
        -   Fix them up so that bitmap formats which don't support them
            have them unlinked

    -   Support for the JSTF table (sfd extension), new dialog
        `Element->Other Info->Justification`.
    -   Add a set of new python functions for manipulating CID keyed
        fonts:
        -   cidConvertTo(registry,ordering,supplement)
        -   cidConvertByCmap(filename)
        -   cidFlatten()
        -   cidFlattenByCmap(filename)
        -   cidInsertBlankSubFont()
        -   cidRemoveSubFont()

    -   Add support for reading/writing version 1.8 of Adobe's feature
        file format (while, I hope, retaining the ability to read
        version 1.6). Fix a number of bugs in parsing feature files.

        FontForge now supports the 'BASE' table (in feature files).

        The new format is considerably better than the old and can now
        be used to express almost all of OpenType.

        Changes:

        -   ability to name anchors and value records and use them
            later.
        -   contourpoints used to be expressed as "\<contourpoint 2\>"
            and are now expressed as "contourpoint 2" (no brokets).
            Adobe does not mention this in the changelog. [Incompatible
            change]
        -   It is now possible to specify a GDEF mark attachment class
            in the lookupflags statement.
        -   The syntax for mark to base/ligature/mark lookups is
            completely different. [Incompatible change]
        -   The syntax for contextual lookups has been extended to allow
            them to reference lookups by name. [FontForge has always
            done this. When I suggested to Adobe that they follow suit
            they said they would not. They have now followed suit but
            have used an incompatible syntax to accomplish the same
            ends. So this is an Incompatible change for FontForge]
        -   The syntax for contextual lookups has been extended to allow
            for the new mark lookups.
        -   It is now possible to specify a reverse chaining
            substitution lookup.
        -   It is now possible to specify descriptive names for the
            ss00-ss99 features. FontForge doesn't support this but will
            parse and ignore it

    -   Last release Werner asked me to put in checks for glyphs that
        exceded various limits in the font (glyphs outside the bounding
        box, glyphs with advance widths bigger than the max, etc.) The
        problem is that erroneous fonts often have thousands of these
        errors, so only report once -- unless they turn on fontlint.
    -   Fix several problems with simplifying quadratic splines.
    -   Could still get control points pointing diametrically opposite
        their desired position when converting cubics to quadratics
        (happened when we could not find a good solution by subdividing
        the spline and had to try another approach).
    -   AddExtrema could go into an infinite loop.
    -   Barry points out that when converting something to a CID font
        through a CMAP the last glyph in the encoding will be lost.
    -   Some inconsistancies in ff python docs and reality.
    -   The regen bitmaps dlg sometimes did not use freetype for all
        glyphs.
    -   Metrics view had problems with cid fonts.
    -   FontForge was supposed to check that the compile time (include
        file) freetype library version number matched the installed
        version number. But it didn't. Only matters in the debugger, but
        is important there.
    -   Autoinstructor: fixed a hang reported by Andrey V. Panov.
    -   Autoinstructor: patch from Alexey:
        -   More tweaking to diagonal stems.
        -   Added support to horizontal ghost hints not tied to blue
            zones and vertical ghost hints.

    -   Barry points out a free which is sometimes inappropriate.
    -   The transform function from the fontview (and python) would
        transform images in the background layer multiple times -- once
        for each selected layer.
    -   Autoinstructor: patch from Alexey:
        -   Fix an issue reported by Andrey V. Panov (counter control
            again).
        -   One type of dependent stems were positioned with wrong
            method; resulting in serifs pushed beyond their blue zones
            and other quirks.

    -   Fix a crash bug in the math kern dlg.
    -   If a tt control point were on top of an on-curve point, then ff
        would ignore it. So when I read things in I moved it, slightly.
        But that didn't work, because the instructions would do the
        wrong thing with it, and if it were part of an interpolated
        sequence that info would be garbled. So only swallow control
        points if they don't have a nextcpindex.

-   24-Feb-2009
    -   Support for UFO version 2.
    -   If a CID font contained a ".notdef" glyph, then when FF
        generated a Type1 CID font resource from it, FF would omit the
        .notdef glyph.
    -   Patch from Panov to allow legacy scripting to guess values for
        the private dictionary. PrivateGuess(key).
    -   Werner wants to know what version of freetype ff is using. So
        the debug window now shows this on the info line (I presume
        that's where it is most important).
    -   Andreas Neustifter provided a FontForge icon with a transparent
        background (or the mac).
    -   In TrueType debugging Werner originally asked to mark pixels
        which changed state. (So there were four states: on and still
        on, just recently turned on, just recently turned off, always
        off). Now he'd like to see exactly the current state.
    -   People complain that under window managers that try to behave
        like MS Windows, the palettes slowly walk off the screen. This
        patch should (almost) fix that. A palette may start to walk off
        but each time it does, it will be brought back close to the zero
        point.
    -   Pango doesn't like a utf8 string which consists solely of a
        variation selector. So don't draw them.
    -   Werner doesn't want to see anchor points when debugging.
    -   Change weight from the fontview usually crashed.
    -   In the past if someone had a glyph with a negative advance
        width, FF would output a large positive number to the 'hmtx'
        table, instead output 0.
    -   Yet another undo problem caused by the [Apply] button in the
        expand stroke dlg. This one on cancelling the dlg.
    -   Werner wants to see what points the current instruction is going
        to move, so when debugging highlight these points. Also draw
        circles around the points which are used as reference points.
    -   FF needed libxml to compile.
    -   If there were no undoes in a glyph then Expand Stroke would
        crash.
    -   Werner suggests adding a check that advance widths are all less
        than hhea.advanceWidthMax
    -   Ah. Werner wants ff to tell him when an isFixedPitch font has a
        glyph with an andvance width which differs from advanceWidthMax.
    -   Add a check that glyphs are within the font's bounding box too.
    -   When creating a metrics view with many glyphs, one of which
        needed to be autohinted, then ff might crash.
    -   Width was not set when building some small-caps glyphs out of
        references.
    -   When I boxified Page Setup a typo meant that one radio button
        occurred twice and another got lost. Resulting in -- a crash.
    -   Some dialogs don't get destroyed after they are finished with.
        Instead they hang around, invisible, containing state
        information that becomes relevant next time they appear. They
        need to be able to change their transient\_for hints, since they
        may pop up with a new owner window.
    -   Points of extrema weren't being marked correctly in the glyph
        view.
    -   Mark to ligature anchor points not output properly to feature
        files.
    -   Another member problem in merge fonts.

-   24-Dec-2008
    -   Apple appears to have shipped a buggy version of X11 with 10.5.
        The problem appears fixed in 10.5.6 (It may have been fixed
        earlier, but I don't have a machine on which I can test that).

        The problem only affects fontforge it if uses pango or cairo.

        This release of fontforge tries to check for a buggy system, and
        if it thinks it is running on one, then it will refuse to use
        Pango and Cairo.

        The problem does not affect Mac 10.4.\*

        * * * * *

        You may upgrade from 10.5 to 10.5.6 by going to the Apple Menu
        and selecting the "Software Update" menu item, and then the "Mac
        OS X Update Combined".

        You probably need to install X11 **before** you upgrade the
        Operating System.

    -   Fix more memory problems in Merge Fonts.
    -   If a font were missing a .notdef glyph. If the user tried to
        display a font sample of text which included a character not in
        the font. Then (after the recent patches for grid-fit metrics in
        Print dlg) fontforge would crash.
    -   Fix a bug in old cubic to quadratic conversion.
    -   Lots of changes to extrema code.
        1.  Find problems and add extrema had different defn of "short"
            splines (ones which could have extrema) so we'd get
            conflicting behavior.
        2.  FontView add extrema couldn't be undone.
        3.  Many improvements in the algorithm. Too worried of rounding
            errors before.

    -   Initializing the font info dialog crashed on the mac when -O2
        was specified during configure (the default situation).
    -   After adding an Apply button the Transform dlg would crash if
        invoked in a glyph with no undoes.

-   15-Dec-2008
    -   Add an [X resource editor](resedit.html).
    -   Make the metrics view be more like the display dlg in that you
        can specify a point-size/dpi to view stuff (also include
        increment/decrement pointsize). Fix Display dlg so that it
        passes freetype a point size/dpi combination rather than the
        (almost) equivalent pixelsize.
    -   Patch by "JustFillBug" to exend python scripting by making the
        find interator become a find/replace iterator.
    -   Patch by Taco to fix a memory problem reading bad baseline data.
    -   Patch from Andrey PANOV to extend GlyphInfo (legacy scripting)
        by adding "XProfile" and "YProfile" options.
    -   Add an [Apply] button to the transform and expand stroke dialogs
        in the outline view. (Request from Andrey).
    -   Make ff parse preference files independent of the decimal point
        local in which they were written (that is -- accept either "."
        or "," in floating numbers).
    -   If a Cubic layer had a notdef glyph, then sometimes, rasterizing
        using freetype would fail (not a freetype problem, I didn't set
        things up right).
    -   Fix one more problems with points being snapped to a wrong stem
        side (it was still possible in case of off-curve points).
    -   Metrics View and Display dlg weren't showing grid fit metrics
        properly. Several bugs.
    -   FF used to shift glyphs left if "build accented" created
        something with a large enough negative left side bearing (ie.
        generally when centering a large accent over an "I"). Panov
        doesn't like this.
    -   Change so that only modal dialogs are marked transient. Make
        sure everybody is marked as a dlg.
    -   FF got confused by format 4 cmaps which weren't unicode.
    -   Goto dlg would not test altunis when looking for a unicode code
        point.
    -   If a langsys table had a required feature, then ff would drop
        one feature from the list of features. This omitted feature
        should have been the required one (which is marked specially),
        but wasn't always.
    -   In my eternal vigilence against rounding errors I failed to
        report some intersections which were very close to the end
        points.
    -   Change the contour direction tester so that instead of looking
        at the first part of the contour it sees, make it check the
        whole thing, so if there are self-intersections we will get
        inconsistent results. Change everyone who looks at the direction
        tester to be prepared for an error return.
    -   In the glyph view, add the option to check for
        self-intersections before calculating whether a contour is
        clockwise or anti-. However, this check can be extremely slow
        for complex glyphs (those with lots of splines) so include an
        option to turn it off.
    -   Add the extension ".lzma" to the list of compression styles that
        ff is prepared to deal with.
    -   patch by Taco for sfnts with no understandable encoding.
    -   Patch by Panov to add a new scritping command SelectGlyphsBoth.
    -   loading of Apple gvar fonts broken.
    -   Redo all the default font family names we ask for. For example
        "Helvetica" is provided by X11 bitmaps, but not by fontconfig.
        Now provide a set of names for each family grouping which will
        work with either font provider.
    -   Back before supporting multiple layers, the transform dlg had an
        entry "Transform Background too", that should be changed to
        "Transform all layers".
    -   When doing a "Scale Emsize", glyphs containing references with
        UseMyMetrics set were not set to the correct width if the
        refered glyph occured later in the encoding.
    -   Change the definition of FontView.FontSize. Used to be in
        pixels. Make it be in points.
    -   We could get into infinite recursion when CVChar and DVChar each
        passed non-latin characters to the other in hopes the other
        could handle it. Neither could. They kept calling deeper and
        deeper.
    -   Add some more checks for badly numbered glyphs.
    -   Memory problems with merge:
        -   Counter masks
        -   Diagonal stems
        -   Mismatch layers

    -   Memory bug when copying contextual chaining lookups.
    -   Scrolling the GPOS/GSUB lookups panes for font info cause lots
        of nasty flickering.
    -   The text fields in the metrics view (right, left bearings,
        width, kern, etc) drew black text on top of a black selection.
        It wasn't legible.

-   17-Nov-2008
    -   Displaying magnified bitmap strikes in the font view often
        caused a crash.
    -   Non-English translations of "%d pixel bitmap" in the View menu
        of the font view came out garbled. There were interpreted as
        latin1 rather than utf8

-   15-Nov-2008
    -   FontForge will now use libpango and libcairo if these libraries
        are present. Pango provides support for drawing opentype text in
        any language, so it should now be possible to provide po files
        for the Arabic and Indic languages. Pango also draws
        anti-aliased text so the user interface should look nicer.

        Cairo will draw anti-aliased lines and splines (and text as
        well). Cairo also supports translucent colors.

        If you have an old release of pango then it may not be able to
        draw on top of cairo, in which case you won't see complex
        scripts drawn properly in the outline glyph view (the only view
        in which cairo is active).

        Start up is slower with either Pango or Cairo active because
        both use fontconfig to initialize stuff and that can take time.

        Cairo, and to a lesser extent, Pango can slow down drawing.
        Especially if you use X across a wire (on a display not
        connected to your computer). The slowdown depends to some extent
        on your video card, driver, X release, etc. If you find these
        libraries too slow to be useable you may turn either off in
        Preferences. (You may also turn them off at configure time).

        The first time fontforge starts with pango (I think it's pango)
        enabled, initialization is very slow -- several minutes -- do
        not be alarmed, it only happens once.

        Pango crashes on my cygwin system, so my cygwin build does not
        ship with either pango or cairo.

        The version of cairo available from fink on the mac (1.0) is too
        old for it to work with fontforge (which needs at least 1.2). So
        the mac builds do not ship with cairo.

        The default initialization of fontconfig on the mac doesn't seem
        to find any fonts. You should create a \~/.fonts directory and
        drop into it the fonts you want to be displayed.

    -   Updated Polish, Greek and Russian translations.
        Created a teeny tiny translation file for Malayalam.
    -   Change the image import dlg to display jpegs by default.
    -   Show gridfit omitted a round to int when displaying grid fit
        outlines. If you use 72dpi, then all was fine, otherwise there
        would be a slight difference between where the outline was and
        where it should have been.
    -   Remove the preference item to specify a pixmap directory.
        Instead allow the user to specify a pixmap search path with X
        resources. `Gdraw.GGadgets.ImagePath`
    -   Many new X resources:
        -   GComboBox.Box...
        -   GComboBoxMenu.Box...
        -   GNumericField.Box...
        -   GNumericFieldSpinner.Box...
        -   fontforge.View.Background.
        -   ...Box.GradientBG
        -   ...Box.GradientStartCol

    -   All dialogs should now be marked as transient for tiling window
        managers (I'm told). But a few dialogs weren't even marked as
        dialogs.
    -   Boxify the Print Setup dialog.
    -   Doing a print sample of a truetype font produced bad CID output.
    -   Widths of dependent glyphs where not changed by changing the
        rbearing of a glyph in the metrics view.
    -   Force a reflow of the TeX box when the user changes from TeX
        Text to TeX Math. The labels change, and in polish the label
        gets so long it hides under the text field.
    -   Boxify the TeX More Params dialog of fontinfo.
    -   When a point was exactly midway between its control points,
        FontForge would not detect that it was a curve point after
        recent work. As this happens frequently in TrueType (all
        interpolated points) we shouldn't do that.
    -   Fix some more cases where the "link" buttons in the
        FontInfo-\>UnicodeRanges and Generate Fonts dlgs looked wrong.
    -   FontForge has been generating bad bounding box information for
        BDF fonts.
    -   Adobe doesn't define how big a spline must be for the "no
        extrema" restriction to apply. Phillip Poll suggests that
        fontforge have a command that defines this on a per-font basis.
        Element-\>Validation-\>Set Extremum Bound.
    -   More accurate catagorization of whether a point is curve or
        tangent.
    -   Sequence/Lookup dlg of contextual lookup dlgs can be too small.
    -   Michal points out some strings which are not translated.
    -   Michal points out that the [Default using suffix] button in the
        single substitution subtable dialog didn't work if the lookup
        were bound to no features.
    -   Add a lock icon beside a reference name if that reference has
        "use-my-metrics" set.
    -   If a quadratic glyph is put into spiro mode, modified, and then
        put back into bezier mode then it LOOKS as if it is still
        quadratic (there are interpolated points shown) but it is
        actually cubic.
    -   If someone changed the button shape to round rect, then the link
        button in Font Info-\>Unicode Ranges became a blot.
    -   Alexey suggests using typo-line-gap between lines in the print
        dialog.
    -   Alexey also provides a patch to fix the old church slavonic
        sample text in the print dialog and a couple of other issues.
    -   Patch by Kanou. SetPanose in legacy scripting did not set the
        panose\_set bit so all changes were lost.
    -   Added duplicate name and duplicate unicode to the things
        validate checks for.
    -   Add a command to set the color of all selected glyphs.
    -   Give instructions in Find Problems on how to figure out which
        two glyphs have the same name, or the same unicode code point.
    -   Pango has caniptions if I ask it to draw one of the code points
        reserved for surrogates or some of the "NOT A UNICODE CHARACTER"
        codepoints (0xffff, etc.). So don't draw these, and mark them as
        unusable slots instead.
    -   Redo the selection menu in the font view.

        -   If the user holds down the shift key then the selection is
            enlarged by any glyphs specified in the command. (logical
            or)
        -   If the user holds down the control key then any glyphs
            specified by the command are removed from the selection.
        -   If the user has both shift and control down then only glyphs
            currently selected and specified by the command will remain
            selected (logical and)
        -   Otherwise the selection is set to what is specifed by the
            command.

        Add new commands to select glyphs which

        -   Contain nothing by references
        -   Contain nothing by splines
        -   Contain both splines and references (bad idea)
        -   Are whitespace (and contain neither splines nor references).

    -   The print dialog had a nasty habit of crashing when asked to
        undo.
    -   Off by one error with scrollbar would sometimes hide the last
        line in the print dialog.
    -   Lines of text in the Insert Text Outlines dialog were drawn in
        the reverse order from that shown in the dialog (ie. top line on
        the bottom).
    -   Fix a crash bug in the print dialog.
    -   It used to be that if a glyph had instructions, and the
        background was order2, then editing the background (or any
        order2 background layer) would clear the instructions.
    -   Peter Baker says:

        > In both "Show Grid Fit" and the TT debugger it used to be
        > possible to turn off the display of outlines in the foreground
        > layer simply by unchecking "fore". Now it can no longer be
        > done, and as a result it's become more difficult to check at a
        > glance the overall effect of TT instructions. It would be nice
        > to have this capability back.

    -   HV points don't work well with quadratic splines. Too many cases
        where they just specify an impossiblility. Attempt to improve on
        that. Merge on quadratic splines also left much to be desired.
    -   When FF starts browsing the OFLib it creates a thread which
        requests the new state of OFLib (ie. any fonts since last time I
        looked?). This thread should die after it has read all the new
        stuff. It did die, but then someone restarted it and the whole
        process repeated. Which might be ok -- we'd get a new state
        whenever the site changed -- except that it meant a flicker of
        the display every minute or so.
    -   Nicolas Spalinger points out that a license search in the oflib
        dialog (of fontforge) finds exactly the opposite of what was
        asked for (searching for PD finds OFL and vice versa).
    -   There exist sfds where the width of a glyph does not match that
        specified by use my metrics on references. So when we read these
        guys in, fix up the erroneous widths and complain.
    -   Distributions no longer provide .so files -- unless you ask for
        -dev packages, and sometimes those don't exist. This means that
        dlopening a library doesn't work. I think that's really stupid
        on the distibutioner's part. What do they gain by removing the
        .so file? But I won't even try to change their minds. Instead
        try to open the appropriate foo.so.? file if we can't find
        foo.so (Not always, but in the more important cases).
    -   When deleting a mark-to-mark anchor class, then any mark glyph
        which had both a base mark anchor point and a normal mark anchor
        point would have only one of them deleted. The other would be a
        sort of ghost point pointing to an anchor class that didn't
        exist and causing problems.
    -   Jason Pagura points out that while the short cuts in menus may
        be changed by the user, the short cuts which appear in windows
        without menus may not be. So Cut/Copy/Paste in textfields always
        use Cntl-X/C/V rather than Cmd-X/C/V. Fix this.
    -   Add a resource to let the user set the background color of
        selected glyphs in the fontview. Then Alexey wanted a way to set
        the foreground color of selected glyphs.
    -   Points could be snapped to a wrong edge of a non-ghost stem
        controlling a blue zone.
    -   Put in code to complain when a font contains a hint mask with
        bits set indicative of hints which have not been defined.
    -   When generating random text for a font in the print dlg, FF
        would alocate one character to few and trample memory.
    -   Prefs file was treating hvoffset as a float rather than an int.
    -   Patch by Michal to allow user control over whether points are
        snapped to pixels in charview, or whether we get sub-pixel
        positioning (and fuzzy lines).
    -   Markers for lines/curves which are almost, but not quite,
        horizontal or vertical.
    -   The french translation of the Unicode Names List database
        changed encodings from latin1 to utf8 when they came out with
        version 5.0, and I didn't notice.
    -   Alexej provides some new preferences for truetype hinting:
        -   InstructDiagonalStems -- Generate instructions for diagonal
            stem hints
        -   InstructSerifs -- Try to detect serifs and other elements
            protruding from base stems and generate instructions for
            them.
        -   InstructBallTerminals -- Generate instructions for ball
            terminals
        -   InterpolateStrongPoints-- Interpolate between stem edges
            some important points, not affected by other instructions.
        -   CounterControl -- Make sure similar or equal counters remain
            the same in gridfitted outlines. Enabling this option may
            result in glyph advance widths being inconsistently scaled
            at some PPEMs

    -   Many problems when numbering points in glyphs with references.
    -   Back in Feb, Werner gave me clear instructions on how to handle
        fonts where bit one of 'head'.flags was unset. I did something I
        thought was equivalent, but which wasn't. The result broke some
        glyphs in the "Vista fonts". Let's try doing what he said to do
        instead.
    -   Autoinstructor: some fixes to strong point optimizer.
    -   Old bug still exists for monospaced fonts. Glyphs were
        positioned at 65,000+ rather than with a negative left side
        bearing.
    -   Autoinstructor: some points didn't really need to be touched by
        'strong point' interpolation.
    -   Be a little more careful about TeX pk and gf files in the
        openfont dlg. Alexej points out that .\*gf also matches .xgf.
    -   It used to be that when we changed glyphs in a charview we would
        turn off gridfit. Now it will simply refigure gridfit info for
        the new glyph.
    -   Make it so that moving a point around will not turn off grid
        fit.
    -   Andy Balholm points out that Help-\>Help often fails on the mac
        because DYLD\_LIBARY\_PATH points to /sw/lib which often
        contains libjpeg.so which conflicts with apple's libjpeg.so
        which means oascript doesn't work to invoke things. Undefine it
        before trying to open the help file.
    -   make acorn2sfd work again.
    -   When an svg font specified kerning with more than one glyph name
        in glyph1 or 2 then ff would create a kerning by class thing ...
        except it didn't do any of the checking needed to insure that we
        were given a valid set of glyph classes, and so generally
        produced garbage. Just make lots of kern pairs.
    -   When processing svg arc commands (in a path) we could get
        rounding errors that lead to NANs. Clip the range so that
        doesn't happen.
    -   Add font.importBitmaps to python scripting.
    -   the cli argument "--library-status" was broken.
    -   A couple of important textfields were not using an input context
        and were limited to ASCII (probably) when they should not have
        been. Font Comment, lookup name, etc.

-   27-Sept-2008
    -   Implement a concept of "master counters" (similar to PS counter
        hints, but more flexibe). I. e. if there are two or more equal
        or similar counters in the glyph, then references pointing to
        stems forming the first counter are added to stems forming the
        subsequent counters. This can be used to implement a sort of
        counter control in the autoinstructor.
        Adjust the width to length ratio used to determine if a diagonal
        stem is acceptable.
    -   There appears to be (what I consider to be) a bug in scim. If
        the Mod2Mask bit is set in the event then it returns a keysym of
        0. Other input managers do not do this. And some input managers
        depend on having that bit set (it is used on the Mac for Option
        processing for example). The upshot is that if I want to do
        mnemonics (Alt/Meta key sets Mod2Mask) I must clear this bit
        when passing info to scim. Since I don't know what input manager
        is attached I must clear the bit for all managers. Which breaks
        some of them.
    -   When doing completion in a textfield, if ff completed the entire
        string, then it would not select the unexpected stuff. The
        result would be that I would type "a", then "." and ff would
        complete to "a.sc" (rather than "a.sc") so when I typed the "s"
        I would get "a.scs" rather than "a.sc".
    -   Add code to allow users to customize the font used in various
        dialogs and windows which previously could not be customized.
    -   Multiple Master dlg was very broken.
    -   Saving and Reading quadradic splines to the 'PfEd'.'layr'
        subtable didn't work.

        Also if we didn't save the background layer (layer=0) then a
        random layer would (inappropriately) become the background.

        Extend the 'layr' format to store a background/foreground flag
        per layer.

    -   Still problems in importing lookups on 64bit machines.
    -   A [thread on typophile](http://typophile.com/node/49550) exposes
        my ignorance. The x-height of an italic font is usually a little
        less than that of it's companion roman font. (This is to correct
        for an optical illusion, because vertical stems are slanted in
        italic they will be longer than the corresponding stem in an
        upright font, and to the human eye they will look taller (even
        though they are not)). So add an option to the Italic dialog to
        make the x-height a little smaller.
    -   Change the menu handler so it can draw mac menu icons
        (cloverleaf for command, up arrow for shift, \^ for control and
        weird squiggly for option).
         ![](/assets/img/old/MenuWithMacIcons.png) ![](/assets/img/old/MenuWithoutMacIcons.png)

        Remove the hack that if the modifier mask for the command key
        was set then we'd also set the control mask (this meant that the
        command key would work as control, but it meant it could only
        work as control).

        Let the command key work as itself, and put in special code to
        check whether X11 is going to give us the command key (or will
        that key be used in the X11's own menubar). If we get command
        then we load a special set of keymap bindings (which,
        presumably, will use command). If we don't find a special set of
        keymaps, then fall back on normal processing.

    -   Make the pixelsize in anchor control be saved in prefs file
        (clean up prefs file for scripting, bring up to date).
    -   We didn't have any way to remove an sfnt table (like 'fpgm')
        even though we tell the user to do exactly that in the auto
        instructor.
    -   Was not allocating enough memory for comments in the cvt table
        structure when user did a [Change Length].
    -   Patch by Thomas ?. When FF loaded a ufo font (actually any glyf
        file) it used integers for the coordinates instead of reals.
    -   We used to move left and right point coordinates to the baseline
        for italic stems, so that they may well fall outside of the
        glyph bounding box. So prevent the situation where this could
        lead to a nan in spline creation. Also don't change the slope of
        italic stems when resizing a glyph.
    -   Clear should only clear anchors, hints and tt instructions if it
        is the last foreground layer. We could get picky and clear hints
        when the last cubic foreground layer went, and instructions
        whent he last quadratic layer went, but I don't think it is
        worth the bother.
    -   If we have a 'TYP1' sfnt with a kern table which kerns a glyph
        with no unicode encoding, then FF would likely crash.
    -   Oops. Typo in Generic change function. Crashed when doing change
        glyph on a glyph with only references
    -   Just as the paste command should only set the width in
        foreground layers if all other foreground layers are empty, so
        the clear command should only reset the width in similar
        conditions.
    -   Internal conversion from fontforge splinesets to ff python
        contours would often leave interpolated points showing in the
        contour.
    -   When FF generated a default name for a lookup when adding a new
        lookup from font info, that lookup index was always set to 0,
        which meant multiple lookups for the same feature would stand a
        good chance of getting the same default name. Do a little
        better.
    -   Extend the small caps dlg to create petite caps if desired.
    -   Fix an uninitialized variable in GXDrawGrabSelection.
    -   FF would attach a mark to the first anchor point in the correct
        subtable in the base glyph. It would not check for the correct
        anchor class.
    -   Python contour conversions would often introduce a control point
        on a linear order2 spline.
    -   List of Panose letterforms was missing an entry from the middle
        so all later entries were off by one.
    -   "Fore" and "Back" weren't localized in one significant place.
    -   Add a few more checks (when reading in) on the validity of the
        'MATH' table.
    -   FF would generate a bad MATH table if given a glyph with
        assembly data but no variant sizes.
    -   Dropping a drag and drop into the metricsview after the last
        character tried to insert the drop before the first character.
        Clean up drag and drop from the font view a bit.
    -   I have been trying to attach marks to bases backwards. It is the
        mark which moves, so the attachment should happen when we get to
        the mark, and we should look backwards to find the base. I have
        been finding the base, and then walking forward to find the
        mark.
        My approach failed if the lookup contains multiple subtables and
        a base glyph has two marks being attached, one from each
        subtable -- I would attach the mark in the first subtable, but
        then having found a subtable that worked would stop, and the
        second mark never got attached.
    -   When dragging and dropping lookups, allow dropping a lookup
        subtable into a different lookup of the same font (assuming it's
        got the right lookup type).
    -   The recent patch to insure that [Imported] lookups from one font
        to another came across in the right order didn't work if there
        were nested lookups involved. The order of nested lookups is
        irrelevant -- unless they are also used in a non-nested context.
    -   Add the ability to define a "Group" by glyph color.

-   28-August-2008
    -   The Layers pane of Font Info randomly wrote memory when it was
        initialize. This could cause crashes, and who knows what weird
        behavior.
    -   Validate spent half its time validating the foreground layer and
        half validating the current layer. This could cause crashes if
        the current layer was not the foreground.
    -   Fixed a bug in parsing old style CID files. (those with type1
        charstrings)
    -   FontForge's OpenType layout engine probably didn't do the right
        thing in anchor positioning of mark-to-base lookups when the
        base glyph had been moved by a previous GPOS lookup.
    -   Still missing some unicode ranges from 5.1.

-   25-August-2008
    -   Turn off debugging if the user switches layers.
    -   The truetype debugger really wanted to debug the foreground
        layer and not any other.
    -   When validating a font, and double clicking to bring up find
        problems in a charview, then the layer setting of find problems
        was (usually) incorrect.
    -   Add a command font.correctReferences() to python scripting to
        fixup cases of mixed outlines and references (outlines get moved
        into a newly created glyph and then a reference will be made to
        it). Also fix cases where the transformation matrix can't be
        expressed in truetype (scaling by 2 or more, for example).
    -   Barry points out a typo introduced in the background layers
        patch which would cause crashes in fonts with many layers.
    -   Minor improvements and bugfixes in resolving stem conflicts.
        Also, lists of HV stems are now built in stemdb.c, so rely on
        these data instead of doing a double work in autohint.c.
