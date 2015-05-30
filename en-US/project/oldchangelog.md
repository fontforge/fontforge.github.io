---
published: true
layout: default
title: Older changes to FontForge
---


> **CHAPLAIN:**
>   It was very interesting; I was dreaming I stood
>   On Jacob's ladder, waiting for the gates to open.
>   And the ladder was made entirely of diminished sevenths.
>   I was surprised, but not put out. Nothing
>   Is altogether what we suppose it to be.
> *The Lady's not for Burning*
>  Christopher Fry

[Current changes](../changelog/)
 [Changes to PfaEdit (predecessor to FontForge)](../pfaeditchangelog/)
 Changes to the [sfd format](sfdchangelog.html).

-   24-August-2008
    -   --------------- ------------------
          ![](/assets/img/old/FF32.png)   ![](/assets/img/old/FFsfd32.png)
          --------------- ------------------

        Changes to create a stub Mac application. Add an apple event
        handler to fontforge so that it will notice when the finder
        wants it to open files. Add icons, etc. so it will look like a
        mac app.
    -   Make it possible to drag and drop lookups
        -   from one font info window to another
                 (copy lookups from one font to another)
        -   within a font info window
                 (reorder lookups)

    -   Layers can now be marked as either background or foreground.
        -   Foreground layers may be generated into fonts
        -   Background layers may contain images. Pasting into an empty
            glyph in a background layer will not set the width. Splines
            in background layers do not make a glyph worth outputting.

    -   Add a color picker so users can select glyph label colors other
        than red, cyan, green, etc.
    -   Memory problems with references, introduced recently, have been
        fixed.
    -   I hope I'm now getting keysyms right for non-latin menu short
        cuts.
    -   Typo in background layer patch could cause a crash in fonts with
        many layers.
    -   Werner wants an \$iscid variable to determine whether a font is
        a cid-keyed font or not.
    -   add font.iscid to python too.
    -   python font.cid\* variables didn't work, fix them.
    -   Add \$haspython variable to normal scripting so I can detect if
        python is available.
    -   When pasting a reference into an order2 layer, ff would
        sometimes miss the fact that the instructions were out of date.
    -   Replace with references had the same problem.
    -   In scripting, instructions did not get checked for
        up-to-dateness
    -   In the charview, unlink ref only worked on the foreground layer.
    -   Patch by Barry (fixed up by me) to fix up open charviews when a
        layer is added.
    -   Barry points out that Contour.round and Layer.round are supposed
        to have an optional argument, but instead have a required arg.
    -   Just as pasting references screws up instructions, so does
        replace with reference. Do the same thing that we just did to
        rplref.
    -   When scripting without a UI, the char changed routine did not
        check to see if it should clear the instructions on a change. It
        now does.
    -   Setting device table adjustments from the accent pane of the
        Math dlg didn't work.
    -   File-\>Revert File (from the UI) didn't work.
    -   If a contextual chaining pos/sub in a sfd file referred to a
        non-existant lookup we would insert a NULL lookup into a rule.
        This would cause almost anything that used that lookup to crash.
        Now, simply remove the sequence/lookup info.
    -   When importing lookups we might import a lookup twice if it were
        nested.
    -   When generating bitmaps automatically from a script it was
        possible that the freetype library got initialized too late and
        we'd pass a NULL pointer to FT\_Memory\_Face -- and things would
        crash.
    -   In a quadratic layer of a glyph, when selecting an on-curve
        point and trying to make it interpolated, if that point had no
        control points then behavior was odd.
    -   didn't create an input context for top level window char and
        font views. This meant could only use ASCII in menus if the
        focus were in the top level window (in the scroll bars, or the
        menu bar.
    -   Typo in the code to display side bearings in the charview.
    -   FontForge assumed that all anchor classes for a given subtable
        were in sequence, but Panov has a font where an anchor class for
        a different subtable appears in the middle of a list of classes
        for the desired subtable. Result was garbage output, and
        View-\>Show Att crashed.
    -   View-\>Next/Prev [Def] & Find In Font View don't work in
        charviews when there are tabs active.
    -   R. Sander points out that if you select an ordered set of
        lookups in one font and import them into another they become
        disordered. Not good.
    -   When pasting into a charview we only set the width if there was
        nothing in foreground. When pasting into the fontview we always
        set the width because we were clearing the foreground before we
        pasted (unless we did paste into -- then we didn't set the
        width).
        With layers that should all change. We should only set the width
        if there is nothing in any of the potential foreground layers.
        Don't count the background layers or the grid psuedo layer.
        Don't count open contours (might be a secondary guide line layer
        or something). If we're going to clear a layer before pasting
        (normal behavior in fontview) then don't count the layer
        cleared.
    -   Add several different behavior patterms for the metrics view.
        Users complain that the current multi-functional window is
        confusing and would prefer a view which only does kerning, or
        only sets the advance widths, etc.
    -   Due to a typo, merging two splinesets at a curve point generally
        left the point marked with default adjustment enabled on its
        control points.
    -   Another layers problem. Only in the foreground layer could
        anchor points be moved.
    -   Python glyph.unlinkReference command didn't work.
    -   My intent was that ligature carets positioned at 0 didn't count
        (0 isn't meaningful -- a ligature with a zero-width first
        component?) but that only got implemented for 'lcar' table not
        for 'GDEF'. So fix that.

        Also allow the user to specify exactly how many ligature carets
        s/he wants rather than just setting a minimum bound.

        Also 'lcar' (Apple) output was broken.

        Also neither AAT nor OpenType supports negative lig carets, so
        if the user drags a lig caret line negative, have it stick at 0.

    -   Moving ligature carets always marked for an undo in the
        foreground layer. Register the movement in the layer in which it
        happens.
    -   When placing an accent glyph about which we know nothing, assume
        it should be centered on top.
    -   Change sfd.c so that it will treat the sequence "backslash
        newline" as no characters on input (er, except in ASCII85
        input). And so that it thinks it can parse version 4 or the sfd
        format.
        We don't generate version 4 yet, and we won't for a while.
        Version 4 will include the ability to insert backslash newline
        into long lines. This is so we can conform to the internet
        requirements of fewer than 990 bytes on a line. And the delay is
        so that people don't scream at me for making an incompatible
        change to the format -- if I give the parser time to perculate
        through the user community, with luck no one will even notice --
        especially as long lines are rare.
    -   Selections/Clipboard didn't work in textfields on 64bit intel.
        There seems to be a bug in the 64bit Xlib which doesn't transfer
        32 bit quantities properly. I was passing unicode strings as
        32bit UCS4, but UTF8 will work just fine instead.
    -   Add the ability to clear all device tables associated with a
        kerning by classes table. (Needed because of a bug which
        introduced garbage).
    -   We didn't think we could read in a kerning subtable (class or
        pair) with device tables, so we converted them to pst data. We
        can read them in in optimized form and we should do so.
    -   Alexej points out that if a glyph has
        "instructions\_out\_of\_date" set on it, then setting the
        instructions via a script should clear the bit -- but didn't.
    -   Werner points out that if a type2 charstring contained a
        sequence \<num\> endchar then ff would set the width of the
        charater even if the the width had already been set. Width can
        only be set on first stack clearing operation, any extra params
        on subsequent calls get ignored.

        Actually it's worse than that, the spec says that if there are
        too many things on the stack then start parsing the stack from
        the unexpected end.

        Adobe have admitted that the obvious reading of their spec is
        incorrect (they can't quite bring themselves to say the spec is
        wrong). So revert some of the way we were parsing type2
        charstrings.

    -   Barry complains that when building ff does not apply the ".cap"
        suffix when using inverted breve.
    -   Valgrind finds a bug in drawing non-BMP characters in the
        metrics view.
    -   Alexej would like to be able to manipulate non-unicode glyphs
        with the text field of the metrics view. The textfield used to
        map all non-unicode code points to 0xfffd, but if the font
        doesn't make use of the supplementary private use areas (planes
        15&16) then create a mapping from the font into these areas so
        that we can represent non-unicode glyphs as funky private use
        glyphs.
        (Only do this if font doesn't use these areas).
    -   Alexej points out that in non-foreground quadratic fonts the
        "Points-\>Dont Interpolate" command doesn't do anything.
        Fix a couple of other foreground specific things too.
    -   Barry points out that setting a glyph's anchorPoints from python
        does not mark a glyph as changed nor force an update.
    -   Autoinstructor: large patch from Alexey:
        -   handlles conflicting H/V stems much better;
        -   tries to place HStems between blues better;
        -   adds optional apparatus for instructing serifs;
        -   relies on generic point-to-stem snapping routines from
            stemdb.c;
        -   needs FPGM changed (older FF's glyph programs should still
            work, but FPGMs need updating!).

    -   If the user has opened a backup sfd file (one that ends in
        .sfd\~) and does a save on it, then pop up a save as dlg instead
        of blindly saving it. Saving it back to the backup is probably
        wrong, yet saving it onto the non-backup version without
        prompting the user is questionable.
    -   glyph.appendAccents didn't mark the glyph as changed nor did it
        force an update.
    -   Barry wants a way to control the use\_my\_metrics bit of a
        reference from python.
         Give him a hack
         glyph.useRefsMetrics(name[,set])
    -   Add a glyph.appendAccent() command.
    -   Ralf from end-if.de points out that when trying to change the
        kerning between two glyphs which have a kern class setting of 0,
        then ff keeps asking the same question several times before a
        non-zero value is entered. (once when the field is clicked in,
        once when a minus sign is typed, and once more when a number is
        entered).
    -   The python stuff won't compile under cygwin because it used
        pointers to stuff in shared libraries as initializers of static
        variables. It seems windows can't handle that. This patch should
        provide a work around.
    -   Add a font.importLookups (from another font) function to python
        scripting.
    -   When joining two splinesets (during glyph editing) we didn't pay
        attention to any user settings for the control points, and we'd
        just always refigure default control points. Now use user
        specified directions when possible.
    -   Add a problem (Find Problems) which will look through all glyphs
        for those with both contours and references, and which will
        create a new glyph to contain the contours and make a reference
        to it in the original.
        Do something similar for bad transformation matrices (those with
        members 2 or more (or less than -2)).
    -   Importing a kerning class from one font to another (and perhaps
        merging fonts) could cause memory problems if the number of
        second classes were bigger than the number of first classes.
    -   Retain sizes of bitmap and metrics views. People seem to like
        this even if I don't.
    -   Still problems with the guide lines layer
        1.  Displaying a point read bad memory (probably harmless, might
            cause visual artifacts).
        2.  Edit-\>Undo in guide layer trampled memory.

    -   Find Problems would occasionally pop up a blank problem dlg.
    -   Only show points of inflection in the active layer.
    -   If a glyph window were displaying something other than the
        foreground layer then changes in that window would not be
        reflected in dependant glyph windows (a change to tilde didn't
        show in atilde) nor in the fontview.
    -   In a cubic glyph with references, turning on point numbering did
        not renumber the references. They seem to be numbered for
        TrueType. Not sure where that comes from.
    -   Alexey points out that after deleting the active layer, ff does
        not update the internal bitmap font it used to display glyphs in
        the font view.
    -   Make "-lang ff" work for "-lang=ff", it's more consistent with
        the rest of the arguments.
    -   Add a -unique argument which means that FF checks to see if
        another fontforge is running on the current screen. If no other
        fontforge exists things proceed normally, but if there is
        another, then we send it our arguments and ask it to open them,
        and then we exit.
    -   Make the OFLib dialog have an option to download a preview when
        you click on a line (rather than requiring you press the
        [Preview] button for each).
    -   The BitmapsAvail and BitmapsRegen scripting functions were
        broken by the layers patch (they generated bitmaps of whatever
        was in the background layer).
    -   Put in some checks to warn the user when a 'kern' table subtable
        uses more than 10920 pairs.
    -   Give the user one of those "This operation cannot be undone"
        warnings when deleting a layer in Font Info. (Similar warning
        about instructions if user changes last quadratic layer(s) to
        cubic without deleting any).
    -   When deleting the last quadratic layer, delete the tt
        instructions also.
    -   When deleting a layer from a font, ff very carefully went
        through all open glyph views to make sure none was looking at
        the layer being deleted (and fixing them up if they were) -- but
        it totally ignored the font views. Their layers needed to be
        updated too. And the metrics views.
    -   The Import menu item in Font Info-\>Lookups popup menu was
        always enabled. It should not have been.
    -   Add menu items in Font Info-\>Lookups (popup menu) to do a
        global add/remove language from a specified script in all
        selected lookups.
    -   Get Info (maybe a few other things) didn't work on a selected
        reference which wasn't in the foreground layer.
    -   Copy/Paste of references only worked well in foreground layer.
    -   Only in the foreground layer was it possible to select a
        reference by clicking on it.
    -   Snapping to blues was broken due to a typo in the code.
    -   Still were a number of places where behavior depended on the
        spline order in the foreground layer:
        -   Could only debug a glyph if the foreground layer were
            quadratic
        -   Show gridfit used some point numbers from the foreground
            layer and some from the layer being shown.
        -   Gridfit didn't change when changing layers.

    -   Peter Lunicks points out that a tooltip in the prefs dlg
        actually was for a different preference item.

-   20-July-2008
    -   Updated Russian UI
    -   Updated Simplified Chinese UI
    -   Small Caps dialog greatly rewritten and merged into the
        sub/superscript dialog and a new change glyph dialog.
    -   Alexey Kryukov makes Small Caps and friends deal with diagonal
        stems.
    -   Update the upload mechanism to OFLib to send a preview image,
        license text (if specified in our database) and fontlog (again,
        if in our database). Currently OFLib throws away both the
        license info and the fontlog, but I hope they will fix that in
        time.
    -   Add a dialog to browse fonts on the OFLib.
    -   Fix some bugs in feature file generation of contextual chaining
        lookups which refer to marks. Note these are not supported in
        the spec. This is a FontForge only extension.
    -   If a script contain no default language features (but did
        contain some languages) then ff produced a garbage script table
        for GPOS/GSUB.
    -   A number of Dialogs still did not autosize themselves for
        different languages Create Hints, Kern (Anchor) Pair, Review
        Hints.
    -   Still places where ff uses the foreground layer rather than the
        current layer to determine if a glyph is quadratic.
    -   On systems using different font metrics, the debug pane looks
        bad with the buttons partly covered by the instruction pane. If
        the font is large, and the cvt dlg empty, then I'm told ff
        complains.
    -   Barry points out that Add Encoding Slots scrolls to the wrong
        place.
    -   Adding glyphs in compacted encodings caused problems.
    -   When the user resizes the outline glyph window, retain that size
        and use it for the default size of subsequent invocations of the
        window.
    -   It used to be that whenever ff opened an sfd file then all
        subsequent new fonts (or fonts opened from real font files)
        would be displayed in windows the same size as the one requested
        in the sfd file. Only set the window size preference when the
        user explicitly changes it, not upon openning something with a
        different setting.
    -   In a CID-keyed font, when opening an empty CID slot, ff could
        trample memory.
    -   BlueFuzz support for autohinter and metafont.
    -   Add some checks to make sure that we can survive bad font data
        without crashing.
    -   When trying to change kerning between the last two glyphs in the
        metrics view using the text field (rather than dragging the
        line) then the textfield would change, but the kerning would
        not.
    -   In the metrics view, give the user several options about the
        grid (which shows the advance widths of the glyphs)
        -   hidden
        -   fully displayed
        -   small lines at the top and bottom of the pane
        -   fully displayed except when the user is adjusting kerning or
            the advance width, etc. When adjusting grid vanishes until
            user releases the mouse button.

        (setting is sticky).
    -   Allow the user to customize the colors in the metrics view.
    -   In the metrics view (or in the print display dlg) when glyphs
        are overlapping (e asier to see when glyphs are large) then the
        places where one glyph ends and another begins often have a
        faint halo of lighter pixels. Try to improve things and make
        these joins be more uniform in color.
    -   Add minimal support for alpha channels (treat them as a bitmask
        for transparent).
    -   I find it really hard to believe that this is an error, but I
        have a second hand report that MicroSoft claims that it is. To
        me making it erroneous is pointless and annoying, but I don't
        write the spec. 
         Add to Find Problems and Validate a check to see that if a base
        glyph (or mark) contains an anchor point in one anchor class in
        a lookup subtable, then it must have anchor points for ALL
        anchor classes in that subtable.
    -   Fontimage would crash if asked to process a font with glyphs not
        in BMP. Make fontimage better about fonts which contain no
        standard scripts (Apostolos's Phaistos font).
    -   A few tweaks to make stemdb.c usable for resizing glyphs and
        stem control.
    -   When importing lookups into a font, append the fontname to the
        lookup name only if there is already a lookup in the new font
        with the original name.
    -   Empty glyphs containing a "." in the name could cause ff to
        crash when doing or checking to see if it could do a build
        accented.
    -   Gasp editing was broken (still) from the change to the cleartype
        stuff.
    -   Andrey P. would like to see a reference's bounding box in the
        Element-\>Get Info dlg for the reference.
    -   Revert glyph had some stray memory references.
    -   Add two proposed language tags for IPA use (one for IPA and one
        for Americanist).
    -   In an empty python layer layer.boundingBox should return a tuple
        of 4 zeros, instead it returned a tuple of 2 zeros and 2 random
        garbage values.
    -   Validate dlg's scrollbar was broken, and you couldn't drag the
        thumb up to the top (you could get it to the top by other ways).
    -   Add a revalidate all menu item to the window to force a
        reevaluation of the entire font.
    -   Add ability to import graphics from a page of a pdf file.
    -   Python interface does not catagorize points.
    -   The (python) psMat.skew command skewed vertically, rather than
        horizontally and by the wrong amoung.
    -   When doing a font sample from a script which did not set the
        page width/height explicitly, then ff would use a size of 0 for
        each. All text drawn was out of the imaging area, lines were too
        short (as well as invisible), too many pages (all blank).
    -   Barry points out that "print" is a python keyword. So
        font.print() doesn't work. Call it printSample() instead.
    -   Freetype now (or in the next release, 2.3.7) supports dropout
        modes, which means fontforge must do a bit of work when
        generating rasters for the debugger.
    -   Move some logic out of fontimage.pe and into fontforge to make a
        default string for a font image more widely available.
    -   When saving an image fromt the print dlg, the top line was off
        the top of the image.
    -   Interpolated points need not be on integral boundaries, but ff
        was checking for them. Different problems in validator and find
        problems, but both wrong.
    -   In the point near hint check (find problems), ff was leaving the
        hint selected.
    -   Fix some rounding errors in spline/line intersection.
    -   in Font Info, after user pressed [OK] FF set the state of the
        subscript superscript default checkbox to the panose default
        checkbox by mistake. This means if the user defined panose and
        not sub/super garbage would appear in the OS/2 sub/super fields.
    -   fontimage didn't get the script right, so features weren't
        applied properly.
    -   More work on conflicting stems.
    -   Pressing [Done] in the print dialog would right to a random
        address on the stack. Depending on what was going on when this
        was done it could cause a crash.
    -   Fix an uninitialized variable introduced by the last change to
        order2 conversion.
    -   Add the ability to open an archive and peek inside it for fonts.
        Useful if we want to open stuff from the open font library which
        is often packaged in zip files.
    -   Add a new validation check to see if a glyph has non-integral
        coordinates. Only an error in TrueType (and can't happen when
        fontlinting a truetype file, but could happen on an sfd file).
        Add some logic to ask user if they intend to generate truetype
        in cases where we aren't sure.
    -   Add a preference which allows people to change the pixmap dir --
        and do what we can to reload images from the new dir. Some old
        windows may not be updated, but new ones should reflect the new
        stuff.
    -   When ff changed the name of a glyph, it fixed up all the tabs in
        charviews to the new name -- but in neglected to refresh them.
        So they still showed on the screen with the old name (until
        something forced a refresh).
    -   The Anchor Class dialog (which lists all anchor classes of a
        subtable) only let you create an Anchor Control dialog for the
        first anchor class.
    -   Guard (harder) against generating pathological results when
        converting cubic to quadratic splines.
    -   If we had a spline which almost doubled back on itself,
        sufficiently so that the spline intersector found lots of really
        close points, which it called intersections, but not
        sufficiently so that our colinear detector caught it, then we'd
        generate a ton of intersections, overflow certain arrays, and
        trash the stack. =\> ff would crash. I didn't think this could
        happen, until someone provided a test case, so put in guards
        against this.
    -   provide python access to

        > glyph.altuni

        either None, or a tuple of tuples, one sub-tuple for each
        alternate. each sub-tuple is (alternate-unicode, variation
        selector (or -1), reserved for future=0 now).

    -   Trying to build dieresis with "PreferSpacingAccents" set meant
        that we tried to build it out of itself, and crashed.
    -   Also fix so that 0x22EF (ellipsis variant) is built out of
        centered dot in a spacing mode, while Ldot uses it in a
        non-spacing mode.
    -   Merge fonts broken again. This time references didn't work.
    -   Provide a mechanism for loading image files to make menu item
        icons (instead of expecting the images to live in memory inside
        of fontforge). Then provide a bunch of these icons so the menus
        will look more interesting.

        Provide some icons

        Also update the install procedure to put them in the right
        place.

        Preference item containing a directory from which to read icon
        files

    -   FF crashed when opening CID keyed fonts with compact\_on\_open
        set.
    -   If fontforge got an end of file in the middle of reading a
        (corrupt) cff font, then ff would sit there reading endlessly
        and ignoring the error.
    -   Off by one error in drawing the large "pixel" rectangles that
        show grid fit generated.
    -   Werner points out that my instruction glosses are out of date:
        1.  Was following Apple's docs for SCANTYPE, not MS. MS has a
            number of new values.
        2.  Was using an old convention for accessing PPEM which broke
            after freetype 2.3.5
        3.  Added the FreeType return for GETINFO.

    -   Featurefile patch from Barry.
    -   I used to think that the max glyph instruction length field of
        'maxp' refered to fpgm and prep. I thought this because there
        was a footnote (which I now see was for a different field)
        saying the field also applied to fpgm and prep.

-   07-June-2008
    -   New Russian translation of the UI
    -   Sometimes FF didn't set the message locale directory properly.
    -   Since FF will crash if you load a feature file when the Font
        Info window is open for that font, close the Font Info window
        when loading a feature file.
    -   New [dialog](Styles.html#Italic) to help users convert an
        upright font into an italic one.
    -   New [dialog](Styles.html#Smallcaps) to help users create small
        caps glyphs.
    -   New [dialog](Styles.html#SubSuper) to help users create
        subscript/superscript glyphs.
    -   And matching python commands: font.italicize(),
        font.addSmallCaps(), layer.stemControl()
    -   Make it clear that the transform dlg from the fontview will move
        the width of a glyph by default, and provide a checkbox so the
        user can turn this off.
    -   Fix various bugs in argument handling of fontforge.askChoices
    -   Change font.removeGlyph to accept a single string argument to
        remove the glyph with that name.
    -   FF didn't like decimal points in the metrics view l/r bearing
        fields -- even though it would put them there itself.
    -   Metrics windows weren't being remetricked after a feature file
        was loaded (nor an afm file for that matter). Nor were they
        remetricked after lookups changed in fontinfo.
    -   Add to python
        -   font.revert()
        -   font.revertFromBackup()
        -   font.buildOrReplaceAALTFeatures()

    -   Changing a glyph's width from a python script didn't update the
        metrics window.
    -   Adding two languages in the same script to a lookup in a feature
        file didn't work.
    -   It wasn't possible to rename an anchor class (at least not by
        the obvious method through the dlg). Attempting to delete an
        anchor class popped up an error message which didn't provide all
        its own arguments and so could crash on some systems.
    -   Better error recovery in feature file parsing.
    -   Werner points out that since I allow the user to see points in
        references transformed to their ultimate position, I should also
        transform the raster.
    -   Patch by Barry to fix kerning classes (ie. figuring out WHAT
        glyphs go into a class).
    -   When parsing a feature file which used a default languagesystem
        setup, ff only used the most recent script.
    -   If a lookup contained no data (no subtables, or empty subtables)
        then when generating a feature file ff would output stuff to
        declare a lookup, but when there was no content that frame could
        not be parsed as it would be impossible to figure out the lookup
        type. Try to avoid that.
    -   FF did not put contextual lookups on all the lists they needed
        to be on when loading them from a feature file.
    -   Sometimes the Open Font dlg opened with the files shifted left
        so the first characters of the name were outside the window.
    -   Patch from Barry Schwartz. "include" syntax in feature files
        didn't work.
    -   Sort button in the lookups pane of font info didn't refresh the
        window after it finished (so things looked unsorted even after
        pressing it).
    -   When doing a Build Accented on dotted glyphname (agrave.sc,
        etc.) the accent was positioned using anchors in the undotted
        base glyph (a rather than a.sc).
    -   Fix various problems with tt debugging.
    -   The XUID and UniqueID fields of a PostScript font are
        deprecated, yet FF has continued to output them by default. Make
        it so FF no longer does so.
    -   When outputing an sfd file, ff would sometimes output a truetype
        spline as a line if it had a colinear control-point. I thought
        I'd taken care of that, but here's another case which needed
        fixing.
    -   Typo when loading the underline position field from a 'post'
        table. I was subtracting half the underline width. I should have
        been adding it instead. (Why did adobe use a different
        definition of the same concept in two places? GRRR).
    -   It wasn't possible to make the foreground layer invisible.
    -   When the file chooser bookmark list got too long ff would crash.
    -   I wasn't doing the obvious checks to the sfnt header in font
        lint. So now:
        1.  Check that there are no duplicate table entries
        2.  Check that there are no overlapping tables
        3.  Check that no tables extend beyond the end of file
        4.  Check that the file's checksum is correct
        5.  Check that each table's checksum is correct
        6.  Check that the number of tables is reasonable and that the
            binary search header is consistent with the number of
            tables.
        7.  Check that required tables are present
        8.  Check that certain fixed length tables have the correct
            length.

    -   Werner would like to be able to debug (truetype instructions)
        when using non-square pixels (x\_ppem != y\_ppem).
    -   Barry wants to be able to close a tab. Add a menu item.
    -   When a glyph's name changed, I did not update the names in any
        tabs in the charviews -- so those tabs would stop working after
        the change.
    -   Scrollbar in points debug window wasn't set right.
    -   A. Panov provides a patch. Prefs was losing bookmarks.
    -   the new release of volt reveals some new opentype tags.
    -   If we have a glyph named "agrave.sc" or "eacute.sc" then FF will
        now let you build this as an accented character. It will remove
        the suffix from then name, and look up the components of the
        bare glyph. Then for the first component it will search for a
        glyph named "a.sc" and insert it. For the accents it will use
        "grave.sc" if present, and "grave" if it is not.
    -   FF wasn't handling a FontMatrix in the top dict of a cid font.
    -   Trying to filter for fig files in the Import dlg caused a crash.
    -   Check for bad OS/2 versions (that is, versions windows will
        reject) when loading a font.
         Connect validation's "Points too far" with Find Problem's
        version.
         Make fontlint aware of the new validation states.
         When generating a font we complained about bad os/2 version
        only if they asked for a validation. Move it somewhere more
        prominant.
    -   Add two new problems to find
        1.  Points too far apart
        2.  Bitmap advance width different from scaled outline advance
            widths

        (also boxify the Find Problems dlg).
    -   Add a new validation state: Test that points aren't too far
        appart (must be within 32767 of each other or we can't output
        them).
    -   Try a little harder to get some of the obscure code pages right
        in the OS/2 table.
    -   Was getting the first glyph index of OS/2 wrong for OTF fonts.
    -   If an sfnt contains embedded bitmaps, and if those bitmaps
        contain a glyph whose advance width is different from that
        expected by scaling the horizontal advance of the vector data,
        then windows will only get the correct metrics if the
        "Instructions modify width" bit is set in the 'head'.flags
        field.
    -   If the "changedsincelasthinted" bit got set on a glyph by the
        unlink/remove overlap flag on a glyph during font saving, then
        the glyph did not get restored to its original state.
    -   Doing an Undo in the Guidelines layer didn't work, usually
        crashed.
    -   Validate didn't work on CID keyed fonts.

-   29-Apr-2008
    -   Validate didn't work in CID keyed fonts.
    -   Pierre Hanser wants an X Resource
        (fontforge.CharView.Rulers.FontSize) to specify the font size of
        text displayed in the info line and the rulers. I have applied
        his patch, but have made no effort to insure that text will fit
        in the space allowed for it.
    -   Hmm. Freetype seems to dislike rasterizing some complex outlines
        at large pixelsizes in black and white, but seems fine with
        doing them in greyscale.
    -   When opening a ttc file (and posting a dlg which lists all the
        fonts in the file) try to find a fontname in the current locale.
        We used to look first for English and then anything. Now try:
        First current locale, then english, then anything.
    -   Make the Open Font dlg (and similar file chooser dlgs) be
        customizable, and store that info in prefs. Specifically control
        whether directories are displayed in alphabetical order among
        other files, before normal files, or in a separate pane.
        Also add a bookmark (and back/forward) mechanism.
    -   Add support for opening a font from http & ftp URLs. Can browse
        ftp URLs, and save fonts back to ftp.

        `$ fontforge       http://openfontlibrary.org/people/Nasenbaer/Nasenbaer_-_Widelands.ttf`
    -   The validation patch broke the save mac family dialog, and then
        the upload to open font library broke it further.
    -   When doing expand stroke, it is possible to have two points so
        close together that there is no data on the curve in between the
        two. If this happens ApproximateFromPointsSlopes can't do a good
        job. So be careful of this case.
    -   Layers change introduced a potential crash in the Embolden
        command.
    -   fontimage didn't draw the first line.
         Add a cgi front end to [fontimage](fontimage.html) so now it is
        possible to get a font sample of any font on my website.
    -   In the Display dlg, if you changed the font, or the point size
        without selecting something, then that change would vanish
        instantly. Fix that.
        Also, was a crash bug when mixing a font with a baseline table
        and a font without one (in the disply dlg).
    -   Add a command to insert text into a glyph.
        (`Element->Insert Text       Outlines)` It adds the text
        outlines directly (instead of a draw command using another font)
        because most fonts can't include text drawing in their glyphs.
        Also include a Bind to Path variant.
    -   GLyph lists in kerning classes (in show att) were displayed as
        ligatures.
    -   Upgrade to unicode 5.1
    -   If an sfd file were saved with spiros active, and then loaded
        into a version of fontforge without libspiro, then bad things
        would happen. Whenever we check that spiros are active also
        check that they can be active, and add some warnings for the
        user to let him/her know that spiros aren't available.
    -   Add a tile pattern command (if --enable-tile-path) this allows
        the user to replicate any given pattern in another glyph.
        This could be used to produce a grid of guidelines, or, in
        conjunction with `Element->Overlap->Intersec`t it could provide
        a poor man's "Pattern Fill" (Since Pattern fills are only
        available in type3 fonts this sort of makes them work for any
        font type).

-   30-Mar-2008
    -   Add support for the OpenType 'BASE' table, and to a lesser
        extent for Apple's 'bsln' table.

        Add python scripting (font.horizontalBaseline,
        font.verticalBaseline) too.

        Add support under Show ATT.

        Remove the old vertical origin field.

    -   Add the ability to create a dummy 'DSIG' table (one containing
        no signatures) so that Windows will show an opentype icon for a
        font with extension 'ttf'
    -   Add support for gradient and pattern fills to type3 fonts (only
        if `./configure --enable-type3` is specified, of course.

        Also add support for cliping paths

        Make fonts containing images work in pdf output.

    -   Bump the sfd version number. This should have happened in the
        last release, but I didn't realize it was needed then, thus
        there will be sfd files with an incorrect version number (2)
        when it should be 3. However that should not cause the current
        parser problems.
    -   New Greek translation from Apostolos
    -   Updated Polish translation from Michal
    -   Apostolos points out that compiling on systems without freetype
        (Solaris boxes) was broken after last months layers patch.
    -   Werner suggested various improvements to Show ATT:
        -   Lookups should be sorted
        -   Glyph images should be drawn in more cases (before, just for
            substitutions)

    -   Patch from Alexey, for better handling conflicts between
        diagonal and H/V stems.
    -   Do a more consistent job of handlong curved stem segments. Also
        collect point data for off-curve points too (may be useful in
        future for TTF hinting).
    -   Last month I put in a patch to make sure the lsb as stored in
        the 'hmtx' table was really the glyph's lsb if bit 1 of the
        head.flags field were set. Unfortunately I read in the lsb as an
        unsigned number which shifted negative lsbs off to around 65535.
        FF sometimes refused to rasterize them. Of course when the font
        was generated they got truncated back to negatives in the
        output.
    -   Add a preference item so that fonts will be automagically
        compacted when they are opened.
    -   Add a new preference item (SeekCharacter) to allow users to
        control which character will be displayed when opening a new
        font. Normally FontForge displays 'A', but that's a bit
        latin-alphabet-centric.
    -   If palettes were not docked, then a complicated series of events
        could lead to a crash after closing a TilePath (Math kerning,
        Gradient Fill, etc.) dialog.
    -   Was not outputting the %%LanguageLevel DSC comment.
    -   Generating a CID-keyed otf font was broken by the layers patch.
        (Only the background layer was output).
    -   Encoding-\>Add Encoding Slots didn't work for CID-keyed fonts.
    -   Autoinstructor does more consistent vertical stem placement for
        mono and grayscale. Advance width scales much better. One
        downside: letters tend to 'glue' at small ppems.
    -   When FF read in a pairwise positioning lookup with no change to
        the pos of the first glyph, and an x change to the second glyph
        it treated that as a r2l kern pair even if the lookup was l2r.
        This lead to problems.
    -   In the Print/Display window all vertical GPOS positioning was
        diametrically opposed to the direction it should have gone
        (there was a sign error).
    -   Print managed to break itself somehow. Print of a font display
        to ps file (or was it pdf) didn't work. Type3 pdf fonts were
        broken, last glyph omitted.
    -   In the fontview the horizontal advance and baseline metrics
        lines were drawn as if bitmap magnification were 1 (so if bitmap
        mag\>1 they were in the wrong place).
    -   In the char view, when the active tool is the scale tool, show
        the scale factors on the info line.
    -   The default set for control points of a corner point
        before/after an hv curve point was to have no control point.
        Make it be the same as a normal curve.
    -   layers patch broke type3 editing in that: in a type3 font glyphs
        don't have the same number of layers so it is possible to move
        from one glyph to another in the char view and have the current
        layer become invalid.

-   9-Mar-2008
    -   Undefined value in the martlett patch.
    -   A variable was placed on the stack in font info which needed a
        longer lifetime. This would probably mean that after several
        remetrickings of that window the jump to OS/2 Unicode ranges in
        the Unicode ranges pane would appear in a strange color and
        oddly shaped. I never saw it happen, but it should have. The
        variable is now static.
    -   When ff read in a contextual subs by glyphs it would reorder
        each glyph list (backtrack, lookahead and normal) so that the
        glyphs were in GID order. So "a b c" would probably come out
        fine in the lookahead list, but would be reversed in the
        backtrack, while "c b a" would be reversed in the lookahead).
        Ug.
    -   The code which decided on whether to apply a chaining lookup
        approached backtrack data in the wrong order (so only lookups
        with either 0 or 1 backtrack entries worked. Which was all I
        used to test).
    -   New fonts were created with relative filenames, this screwed up
        some font searches. Make 'em absolute.
    -   Deleting something in the guidelines layer probably caused a
        crash.

-   2-Mar-2008
    -   **Layers**

        The big change in this release is that every font database can
        now contain multiple layers. Before this all layers in a font
        used the same type of splines and there were only 2 or 3 of
        them.

        -   Guideline semi-layer -- where all the glyphs of the font
            shared the same set of outlines, to which points would snap
            if desired.
        -   A background layer -- which could contain outlines and also
            images which could be autotraced into the foreground layer.
        -   A foreground layer -- which was what the font really looked
            like, and what went into generated fonts

        Now there may be any number of layers, and each layer can
        contain different types of splines -- so one database can
        contain both quadratic and cubic data and can store data for
        both PostScript and TrueType fonts.

        In a normal font all glyphs have the same number of layers (this
        is not true in a type3 font, which each glyph may have it's own
        set of layers). You may set the number, names and types of
        layers width the `Element->Font       Info->Layers` pane.

        In the font view you can select which layer is active (and
        displayed) with the `View->Layers` menu item. You can copy
        selected glyphs of one layer to another (automagically adjusting
        the spline type if needed) with `Edit->Copy Layer To Layer`. You
        can compare to layers for differences with
        `Element->Compare Layers...`.

        In the character view the Layers palette has changed. The things
        which controlled the visibility of hints have moved to the
        `View->Show` menu (as have some other entries that used to be in
        the top level `View` menu). The layers palette solely displays
        the glyph's layers and controls which layer is active.

        The `File->Generate Fonts...` dialog allows you to specify which
        layer is to go into the font. Note that many things remain
        common: the hints and truetype instructions apply to all layers.
        GPOS, GSUB, kern, and morx information is common all layers. The
        outlines may differ in detail, but outlines from which a font
        will be generated should have the same shape.

        Add new python stuff to handle layers:

        fontforge.activeLayer()

        Returns the currently active layer

        font.layer\_cnt

        Returns the number of layers in the font

        font.layers

        A dictionary like object which can be indexed either by an
        integer between 0 (inclusive) and layer\_cnt (exclusive) or by
        the name of a layer. After indexing it returns a LayerInfo
        object. LayerInfo objects have no independant existance, and
        contain a layer's name and a boolean indicating whether the
        layer is\_quadratic.

        >     font.layers[1].name = "Foreground"
        >     font.layers[0].is_quadratic = TRUE

        You may delete a layer

        `del font.layers["Extra layer"]`

        You may add a new layer

        `font.layers.add("name",is_quadratic)`

    -   M.P. Suzuki requests a way to load the entire 'glyf' table of a
        ttc. Actually he would like to load all 'glyf' tables of a ttc,
        but that would cause all kinds of problems (multiple fpgm, prep,
        maxp, cvt tables, trying to fix up GIDs in GPOS/GSUB/kern/\*
        tables, dealing with fonts with so many glyphs they could not be
        generated, ...)
        So the command line now takes an --allglyphs argument, and the
        scripting open commands now take a value of 4 for the openflags
        argument to mean this.
    -   Add a command Points-\>Make Arc, which is similar to
        Points-\>Make Line except that it connects the two points with
        an elliptical arc rather than a straight line. The ellipse is
        choosen to run through the two points (obviously) and to be
        tangent to the slope of those points. This isn't enough
        information to determine an ellipse uniquely (three points and
        two tangents being required) so in general there will be an
        infinite number of solutions (and it is possible to provide
        contradictory input so that no ellipse can be found). FontForge
        may not choose the ellipse you had your heart set on. FF will
        first attempt to find an ellipse so that one of the points lies
        on an axis of the ellipse (this will find a circle if there is a
        circle which satisfies the constraints above). If that fails it
        will look more generally for ellipses.
        (If you hold down the \<Alt\> key when you select the menu item,
        FF will leave the ellipse it calculated in the background layer.
        That was a debugging technique but I thought it was kind of
        interesting and left it in.)
    -   Further improvements in calculating active zones for curved
        segments for autohinging: if the spline is closer to the opposed
        stem edge at the given point, don't extend the active zone any
        longer.

        If a line's unit vector is close enough to the font's italic
        slant, then prefer the unit vector based on the italic slant
        instead.

        Added an experimental mode which allows to build glyph data
        based on a preexisting hint layout and extend it with additional
        stems.

    -   The rotate tool in char view didn't show the angle of rotation.
    -   Fixed various uninitialized values
    -   Make sure the first character in marlett is 0xf020.
    -   Reinstate the behavior of the symbol encoding that the wine
        developers depend on.
    -   Add a scripting flag so that script writers can control whether
        a font has a symbol encoding without having to use a funky
        extension. (Wine people don't like having to say ".sym.ttf").
    -   When building a ligature, ff would mark the first letter with
        use\_my\_metrics. That should only happen when building accented
        glyphs.
    -   Put in a way for the user to leap easily from Font
        Info-\>Unicode Ranges to Font Info-\>OS/2-\>Charsets-\>Unicode
        Ranges.
    -   python scripting font.sfnt\_names would sometimes crash.
    -   When a matrixedit is initialized its last visible column
        (especially if followed by hidden columns) may not be at the
        edge of the matrixedit. This lead to drawing spurious lines
        which annoyed Alexej.
    -   When running simplify on a quadratic contour and the contour
        doubles back on itself, FF would do an optimization which only
        worked for cubics.
    -   Werner tells me that if bit 1 of the 'head'.flags field is clear
        then I should adjust so that the left side bearing is what is
        specified in the 'hmtx' table.
    -   Pdf filter decode didn't work if given an array of filters (not
        even in the array contain only a single filter).
    -   FontForge doesn't support pdf encryption which seems to require
        a license from RSA. Before we'd just announce failure for no
        reason, now announce that the file is encrypted and we can't
        read it.
    -   Improper test for point matching in references (in tt).
    -   In an un instructed font, the [Default] button in
        FontInfo-\>Grid Fitting produces the wrong result (and has since
        I added support for the new gasp features of ClearType.
    -   Doing hint modifications caused errant pointers to be used.
        Often crashing.
    -   Math strings weren't getting initialized in math kern.
    -   One of the math constants had the wrong friendly name.
    -   Michal points out that tooltips in the math window don't get
        translated.
    -   TopLeft/TopRight etc. in math kerning weren't translated.
    -   The transform menu item seems to have lost its shortcut. Put it
        back.
    -   When selecting a control point in the outline view, we would
        always select the next point if both next and prev were in the
        same place (ie, on the base point itself). But when the point is
        at the end of an open contour, the one which should be selected
        is the one which controls a spline (which need not be the next
        one).
    -   Oh dear. My original method for storing background layers didn't
        allow for references (because I didn't put them in the
        background). But I need them now.
    -   Label some of the horizontal metrics lines
    -   Trying to move the top accent line resulted in a crash.
    -   Drat. FF really wants to set the latin1 codepage bit, even if
        the user explicitly provides the codepage settings. The wine
        people don't like that.
    -   If we have two fonts open, a type3 (multilayered) one and a
        normal outline, and we have outline glyph windows open from each
        font, and we move the focus between the glyph windows, then the
        layers palette will get left behind when focus moves to the
        other font. (and other more complex senarios when switching
        between multilayered and outline).
    -   When loading a feature file, ff would complain if a mark
        appeared in two anchor classes -- even if those classes were in
        separate lookups. This meant it got unhappy about a mark which
        was in both a mark 2 mark lookup and in a mark to base lookup.
    -   I had intended not to give warning messages about names like
        "nine.oldstyle" (defined in Adobe's obsolete PUA mapping) when
        loading a tt font, if such a glyph had a different unicode
        mapping (or none) than the one Adobe used ages ago. But I
        screwed up and was generating messages anyway.
    -   When converting cubics to quadratics, if we had a curved spline
        where one of the endpoints of the spline had no control point,
        then we'd get a slope at that point of 0/0. This meant that we
        tried to put a quadratic control point on top of that endpoint
        which looked confusing and seemed unnecessary.
    -   Typo in glyph compare. Caused another crash when comparing
        lookups.
    -   Didn't handle NULL tokens properly when reading in a feature
        file.
    -   Make it easier to select control points when the alt key is
        down.
    -   Add a mechanism for getting default values for private dict
        entries in python scripts.
        (Also provide default values now when [Add]ing private entries
        in Font Info.
    -   Making class0 editable broke the ability to create a context
        chaining class lookup.
    -   The encapsulation for creating libfontforge broke importing a
        lookup from one font to another.
    -   Feature file generation omitted a semicolon after (some)
        contextual lookup rules.
    -   Nasty bug with references in ApplySubstitutions scripting
        command.
    -   Mark classes didn't work.
    -   Michal N. points out that "Really Use Typo Metrics" should be
        moved above the typo metrics (or below) but should not be in the
        middle of them.
        He also tells me that the internationalized weight classes don't
        get parsed properly.
    -   Someone handed me a font with a SJIS encoding cmap. The cmap
        mapped a glyph to SJIS 128, which isn't a valid SJIS code point.
        FF got an insane result when trying to convert to unicode and
        crashed. Add a check against bad code points.
    -   Add two proposed features from the pre-draft of OT 1.6
        -   Drop Caps
        -   Character Variants 00-99

    -   Werner wants to be able to select text in the warnings window to
        paste elsewhere. And he points out some scrolling flaws as well.
    -   Could not attach lookups to mac feature settings.
    -   Clean up some display problems in the type3 layers palette and
        layer info dlg.

-   3-Feb-2008
    -   New Vietnamese translation from Clytie
    -   New Russian translation from Alexandre Prokoudne.
    -   New Polish translation from Michal N. .
    -   FF could crash if a cmap subtable contained invalid encoding
        points.
    -   Add various new features/scripts/language tags from OpenType
        draft 1.5.
    -   Add two proposed features from the pre-draft of OT 1.6
        -   Drop Caps
        -   Character Variants 00-99

    -   The warnings window didn't resize properly. It didn't let you
        copy text (ie. a warning) to the clipboard. It should have
        scrolled with keypad keys (arrows, page up/down, etc). There
        should be a way to clear the windows so you know that all the
        warnings are from a given operation. Added a popup menu.
    -   Fixed a problem in the auto hinter.
    -   Could not attach lookups to mac feature settings.
    -   Clean up some display problems in the type3 layers palette and
        layer info dlg.
    -   Autoinstructor: turned on strong point interpolation:
        -   Various important outline points are correctly placed
            between hints' edges.
        -   Potential benefits for DStem positioning.
        -   Drawbacks: 2x slower, code generated is now much bigger.

    -   The merge (and simplify) command could produce odd results if
        the points surrounding the merge had no control points.
    -   Extend find/replace to handle changing angles.
    -   The Display/Print dlg would crash when the user pressed the
        reset button if there were at least two pointsizes of the font
        on display. Perhaps in other cases too.
    -   Make shift click in the lookup dialog (but not the subtable
        part) select all lookups between current click and a previously
        selected point.
    -   glyph.addPosSub doesn't work for ligatures or multiple
        substitutions. It treats both as alternate substitutions.
    -   Michal Now. points out that there are some strings not marked
        for translation in cvruler.c.
    -   FontForge never checked that fonts had fewer than 65536 glyphs.
        I just blythely assumed I wouldn't have to worry. Well someone
        handed me a font with 65731 glyphs, and FF treated it as having
        195 glyphs. Things got nasty after the 196th.
    -   Fix a crash in autohint.c and an infinite loop in stemdb.c.
    -   Font Compare would crash if one font had a lookup subtable which
        was not in the other.
    -   Improve the algorithm used to detect reference points for stem
        edges. Enable snapping "corner extrema" to predefined hints.
    -   Remove the obsolete Private Dict to CVT table command.
    -   Michal Now. wants short cuts to change grid fit attributes, so a
        new sub menu with things like increase point size, change AA,
        etc. (with shortcuts, of course).
    -   Patch by Michal Nowakowski. In Show Grid fit not setting the
        mono bit correctly in freetype.
    -   Bug in pfm file output.
    -   If we failed to open a plugin library during init, it would call
        LogError before the display was initialized, leading to a crash.
    -   Autoinstructor: If a horizontal stem interpolated between blue
        zones was very close to one of them, it often jumped beyond that
        zone in small ppems. This was especcially annoying for serif
        fonts.
    -   Improvements (I hope) to the ruler tool
        1.  Make it snap to splines (in addition to points)
        2.  Have it draw a line from the start point to the mouse
        3.  If they start on a spline, then include info on the offset
            in coordinates parallel to the spline and normal to it.
        4.  Provide a "spline length" if the start and end points are on
            the same spline (instead of just if they were the end-points
            of the spline).

    -   In python scripting contour.reverseDirection only worked on
        closed contours.
    -   If you click wildly in the cvt editor it would eventually go
        into infinite recursion.
    -   If there were no free anchor class then attempting to add an
        anchor point would pop up the Mark Classes pane of Font Info
        (rather than Lookups). This is sufficiently close to Anchor
        Class as to be very confusing.
    -   Make label gadgets (and buttons which are also labels) handle
        multiline text.
    -   If the user closes the font info dlg when there are mark class
        dialogs floating around then close them too (there was code
        which was supposed to do this, but it didn't work).
    -   Try to make it clear in the Mark Classes pane of the Font Info
        that mark classes are not anchor classes. Someone got
        confused...
    -   Fix some bugs in parsing mark anchors in feature files.
    -   When adding an hvcurve point into an existing spline it behaved
        like a curved point and laid parallel to the spline rather than
        being either horiz or vert.
    -   FontForge uses floats (which have \~24 bits of precision
        internally) to represent coordinates. Type2 fonts use a 16.16
        fixed notation, which means that we only represent coordinates
        \<256 accurately. This will cause slight errors during output
        and input of a font. Unfortunately, due to the rel-rel nature of
        postscript these slight errors accumulate.
        So instead, when loading and saving a Type2 font use double
        precision temporaries. This should mean there will be no errors
        to accumulate. There will be slight errors when converted to
        SplinePoints, but these errors will not accumulate.
    -   Check several adjacent splines when detecting active zones for
        curved segments and thus make the algorithm less dependent from
        the number of additional points on a contour and their exact
        positions.
    -   Fix a number of problems that -pedantic complains about.
    -   Some mnemonics in the Element menu are used for two items. Clean
        it up a bit.
    -   Add a "Find Problems" for non integral coordinates.
        Change the "Ref with bad ttf transformation" so that it checks
        for integral coordinates too.
    -   the glyph.validate function in python was marked as taking
        NOARGS in the method table, but, in fact, does take arguments.
    -   Oops. Validate used to complain if the StemSnap[HV] array were
        missing. But that's perfectly ok.
    -   Be more lenient when closing a path (when reading in a type1/2
        font)... we can get rounding errors.
    -   Add a little LogError to let the user know if there are sfnt
        tables we ignore.
    -   Deep in the heart of Find Problems check for bad contour
        direction, was a bug where it looked at the wrong spline.
    -   Just as it is possible to have things in 'morx' that are not in
        'GSUB', it is possible that a 'GPOS' table contains no kerning
        information but a 'kern' table does. We used not to read 'kern'
        if we had 'GPOS', be a little subtler and check for the presence
        of a 'kern' feature inside 'GPOS' before deciding whether to
        read the 'kern' table.
    -   The anchor control dialog didn't work for mark to mark anchors
        when looking at a base mark.
    -   When a font contained glyphs with multiple encodings, then ff
        would produce bdf files with a char count which matched the \#
        glyphs, not the number of encoding slots used.
    -   In a compacted cid font, the status line (containing unicode,
        unicode block/name, etc) was junk.
    -   Barry wants to be able to mark that it's ok for a spline to have
        intermediate extrema.
    -   The []TeX Table checkbox was always disabled in the save font
        dlg.
    -   The DejaVu people want to be able to associate a comment with a
        cvt entry.
    -   Find Problems-\>ATT-\>Missing glyph name complains about the
        special string \<Delete\> which I used in Apple lookups to
        represent the "Delete Glyph" action that apple supports and OT
        does not. Don't complain about this any more.
        Add a problem which will look at the glyphs a lookup is active
        for, and then checks the script of each glyph against the
        scripts attached to the features which invoke this lookup. If
        the script doesn't match anything, then complain.
    -   If a font contained an empty anchor class (having either no base
        glyphs or no mark glyphs) then when dumping out the font
        subsequent anchor classes got the wrong data associated with
        them.
    -   Barry wants non-integral hints.
    -   Barry points out that Scale To Em doesn't scale the guidelines.
        Barry also complains that spiro points are rounded. This is more
        debatable. The bezier conversion will put bezier points where
        there were spiros, so if we don't round the spiros we get
        non-integral points. But if we do round the spiros we mess up
        the splines. Hmm.
    -   When complaining about a bad class in a mark (GPOS) sub-table,
        specify the name of the offending mark if we can.

-   10-Jan-2008
    -   Fixed a crash bug in Auto Hint
    -   Replaced the Short Cut to AutoInstr
    -   In Font Info-\>Lookups, added to the lookup tooltip to show what
        contextual lookups used the current one.

-   9-Jan-2008
    -   Fix some problems with AAT. Mutually exclusive features in the
        chain didn't get the right OffFlags set. (and didn't work).
    -   Add DHint support for native & python scripts. Prevent users
        from specifying incorrect unit vectors for diagonal hints added
        via scripts. Also use stemdb.c to calculate active zones for
        normal (horizontal and vertical) hints added via scripts.
    -   Remove my original (and not very good) auto instructor. Clean up
        the docs to remove references to how bad it was.
    -   Add the ability to store a fontlog in the sfd file. Available to
        python scripting. A way to save it to FontLog.txt when
        generating a font. A way to modify it before generating. Normal
        access through Font Info.
    -   Change the PfEd table so that the font comment is in utf8, and
        the glyph comment subtable too.

        Add subtables to hold:

        -   Names of lookups and lookup subtables and anchor classes
        -   Guide lines
        -   Background and spiro layers
        -   Font Log

    -   It used to be that when a font had both 'mor[tx]' and 'GSUB' we
        would only read 'GSUB'. But Michel Boyer wanted to read both.
        So... read 'morx' after 'GSUB' and if we find a feature/setting
        that looks as though it corresponds to an existing OpenType
        lookup (which we can convert to a Mac format) then skip that
        feature/setting, presuming it to contain redundant data.
        This is a finer grain approach, but similar to, the previous
        one. There we skipped the whole table, presuming it redundant.
        But in CharisSIL the morx table has a lot of functionality
        orthogonal to GSUB. So we must parse both.
    -   The 'feat' table was being output in the wrong order. Features
        were linked together in several ways and 'feat' followed the
        wrong field.
    -   Two related bugs that Charis SIL invokes:
        1.  This font has a contextual substitution which uses class 0
            and replaces it via a nested lookup. But my feature file
            output could not handle class 0 (since it isn't really
            specified) and would crash.
        2.  However, in this case class 0 was specified by the coverage
            table (we fixed that earlier but just for kerning classes).
            So now fix for contextuals.

    -   Auto recovery was broken. Ever since I put in the code to ask
        the user what to do with a recovery file (It always recovered
        into a new file).
    -   When FF opens a char window on my screen it has a bad habit of
        opening it at 40% magnification. Which means mouse clicks give
        things either at em or at half me positions. That's bad. Don't
        want the default behavior to create lots of .5 coordinate
        values.
        Make the window open at 33% instead.
    -   FontForge warns the user when a glyph's name does not match its
        unicode encoding. But in the past it would do this for glyphs
        with multiple encodings even if the name matched one of the
        encodings. Fix that.
    -   When FF uses doubles internally, it still outputs float
        precision into the sfd file. Fix that.
    -   Still said "Tangent" rather than "Constraint" in points menu
        when in Spiro mode.
    -   Ben Laenen of Deja Vu says it would be nice if sfd files stored
        truetype instructions as recognizable text rather that squirrily
        ASCII85 encoded binary data. Sounds reasonable. Might as well
        store 'cvt ' and 'maxp' as numbers then.
    -   Remove some deprecated DStem code. Also move
        CVNumForePointsSelected() to charview.c and make it static (not
        used anywhere else except that file).
    -   Sometimes the pointers to libspiro didn't get initialized.
    -   If a font had no private dica and one tried to put something in
        it from python, ff would crash.
    -   Alexej points out that my use of iconv was broken on many
        systems where UCS-4 is big endian on a little-endian machine.
    -   Use freetype to rasterize the fill blit in the char view.
    -   - In search\_edge, an array subscript was sometimes -1?
        - Previously I forgot to mention Alexey's changes in DStems
        hinting code.
    -   Simple optimization for blue zone hinting - cupped serifs should
        benefit most.
    -   Update copyright notices. (add 2008)
    -   Oops, typo in python menu code.
    -   There is now an incomplete fontforge which uses the gtk toolkit.

        >     $ ./configure
        >     $ make
        >     $ make install
        >     $ make fontforgegtk
        >     $ make install_gtk

        About all it can do is open a font and display it. If a menu
        command does not require a dialog then it might work. There are
        probably scores of bugs even in the little bit that supposedly
        does work.

        I think the open dialog is extremely ugly. That's not my fault,
        that's gtk's widget. The open dialog is far less functional than
        the one in the gdraw fontforge -- I can't figure out how to
        enhance it.

    -   Switching to a new internal representation of diagonal stem
        hints.
    -   Add a mechanism to check that the executable has been configured
        to match the library. And include a library date stamp as well
        as an executable stamp.
    -   In the metrics view, if I switch from outline view to bitmap
        view (by selecting a strike by pixel size from the view menu)
        then ff would crash.
    -   Cleanup the library executable interface a bit more.
    -   Minor tweaks to fontview.
    -   - Alexey suggested improvement for HStemGeninst().
    -   - Added optional experimental code for interpolating strong
        points.
    -   Barry Schwartz wants to be able to set the "don't autohint flag"
        from python. I'm calling it "manualHints" though.
    -   Barry Schwartz points out that the simplify flag
        "setstarttoextremum" is incorrectly documented. Fix that.
    -   - In HStemGeninst(), new positioning method gives bizarre
        results for overlapping stems. Added fallback to old method.
    -   Make it obvious that the Print/Display dlg HAS a menu.
    -   Crossland wants a way to insert random text into the
        Print/Display dialog. So add the ability to generate a bunch of
        random words that look vaguely reasonable. (Invoked by the popup
        menu in the dlg).
    -   Exporting spiros to a plate file produced garbage if any spiros
        were selected.
    -   The Print dlg tended to crash if you did much editing in it.
    -   When switching to spiro mode on an empty glyph (or perhaps the
        first glyph in a new font), FF would complain: Internal Error:
        Character out of bounds in bitmap font 0\>=0
    -   Oof. The math stuff doesn't work if device tables are disabled.
        fix it.
    -   Fix some problems with configuration modes I don't use. Correct
        some pointer arguments which differ in signedness.
    -   If lines are attached to both sides of a diagonal stem, then
        prefer the longer line's unit vector for this stem.
    -   - Fixed snap\_to\_blues(): it used to mess global accuracy
        setting up.
    -   - Fixed finish\_stem(): it did not mark edges of previous hints
        as done.
    -   - CHanged HStemGeninst(): it now tries to interpolate HStems
        within blues when possible.
    -   Dave Crossland points out that ff didn't compile if
        --without-native-script were set.
    -   Trying to change control points with the point info dlg on
        hv-curve points didn't work.
    -   Add the ability to insert a list of words into the metrics view.

-   10-Dec-2007
    -   Redo the internals of fontforge to separate the core font engine
        from its dependance on gdraw, and stuff all of that into
        libfontforge. So libfontforge no longer needs gdraw, and can be
        used to build another user interface with a different widget
        set.
        In theory.
    -   Add the ability to insert a list of words into the metrics view.
    -   If a font has a variant selector 'cmap' subtable, and has some
        unnamed glyphs then base names on the information found in the
        vs subtable as: (u0020.vsFE00)
    -   If a font has a 'MATH' table and some unnamed glyphs then try to
        guess names for glyphs refered to in horizontal/vertical glyph
        construction tables.
    -   When outputing horizontal glyph variants in the 'MATH' table I
        used their vertical size rather than their horizontal size.
    -   Further refinements to the concept of lines: all points assigned
        to the same line now should have filled space at the same side.
        So what we used to call lines would be better called edges now.
        Also the handling of bounding box hints has been improved: all
        relevant points are now assigned to a BBox stem hint (not just
        one point from each side).
    -   Add a user interface to control file recovery (used to be only a
        command line argument).
    -   Patch by Barry who points out an extraneous line in the font
        iter by search.
    -   Barry points out that there is a disconnect between the docs and
        the program about the "spiros" member of a Contour python
        object. So correct the docs to read "spiros", and change the
        program so it will accept "spiro" as well as "spiros".
    -   Add the ability to name contours, primarily for guidelines.
        Add python support for the contour\_name.
    -   Add support for reading Apple's old sfnt wrapped CID format
        (basically the same as the sfnt wrapped 'typ1' format.
    -   FF crashed on Nastaliq Navees from SIL.
        1.  It has no unicode cmap (which ff handled incorrectly)
        2.  It has cross-kerning (which ff doesn't handle, but still
            died while explaining that it didn't handle it)

    -   Use routines from stemdb.c to generate active zones (or stem
        instances) for manually added hints. The old algorithm is still
        used when reading Type 1/OTF font files.
    -   FontView -\> Hints-\>Clear hints did not set the hints changed
        bit.
    -   Erik van Blockland points out that python glyph.addPosSub
        doesn't check for duplicate entries and will blindly add
        something when it should be replacing it.
    -   Also added a short cut so that it is posible to specify simple
        kerning by typing one number rather than requiring an additional
        7 zeroes.
    -   Prevent some redundant stem chunks from being generated.
    -   Both Adobe Acrobat and Apple's Preview exhibit what I consider
        to be a bug. According to the PDF reference manual, if an
        Encoding dictionary is not specified for a font object then the
        built in encoding will be used. But both these programs reencode
        to AdobeStandard and do not use the font's built in encoding.
        GhostScript agrees with my interpretation and does not reencode.
        However, they ain't gwana change, so I must. Always dump out an
        Encoding dictionary even when it shouldn't be needed.
    -   -   Lines are more actively used: stems now have 'leftline' and
            'rightline' properties, and for diagonal stems the stem unit
            vector is always set equal to the unit vector of the line
            corresponding to the left edge of the given stem;
        -   I no longer attempt to calculate "active" zones for bounding
            box hints (they usually don't correspond to any actual glyph
            features and thus look ugly). So now only edges of such
            hints (without any active zones) are displayed in the
            charview;
        -   diagonal stem detection improved (some checks were too
            strict and actually oriented to HV stems);
        -   the 'blue' property is now used not only for ghost hints,
            but also for regular horizontal stems. This may be useful if
            I ever implement an autoinstructor based directly on the
            stem detector;
        -   glyph data initialization has been separated from stem
            detection and put into a separate routine (a first step for
            unification of algorithms used to calculate stem active
            zones).

    -   When doing a print sample to pdf, the second page came out in
        times bold rather than the user's font.
    -   I think setting a compact encoding could overflow an allocated
        string array.
    -   I was setting the Regular bit of OS2.fsSelection if the weight
        class was 400. I probably should have used 500 instead. Or maybe
        both. Let's try both for now.
    -   If a ufo font did not have a lib.plist file (and python was
        enabled) then ff would crash on loading it.
    -   When importing an eps file, ff did not turn off the
        "Bitmap-only" flag. This means that new fonts composed entirely
        of eps files would be treated as bitmap fonts (sometimes).
    -   Moving quadratic control points with the pointer is broken
        (again).
    -   Metricsview would crash if you deleted a character and then
        clicked in one of it's textfields.
    -   Fix typo in stemdb.c
    -   Add a Select-\>Open Contours command.
    -   Add some serbian text (to the built in print samples).
    -   Update the location on the charview info line when dragging out
        a guideline.
    -   If a glyph had a unicode encoding for one code point, and a name
        which mapped to another, then double clicking on the other code
        point would cause fontforge to provide a reference to the base
        glyphs from the new encoding slot. But only in the current
        encoding map. In other words I forgot to set the AltUni field.
    -   Some people have though winDescent should be a negative value
        for things below the baseline. So make the sign of the various
        descent fields explicit in the corresponding popup messages.
        -   Typo Descent: Negative
        -   Win Descent: Positive
        -   Hhea Descent: Negative

    -   If a user edited a glyph in spiro mode, and then did something
        in the fontview ehich caused the spiros to be removed (Lots of
        things: Overlap, Expand Stroke, Embolden, ...), and then did a
        Round to Int (and perhaps other things) from the font view, then
        FontForge would crash.
        It expected to find spiros in a glyph marked as being edited in
        spiro mode, and was surprised when none were available.
    -   Dave Crossland doesn't like having "..." at the end of window
        titles.
    -   Back out the Add Extrema in spiro mode patch. Turn off display
        of extrema in spiro mode (and of Points of Inflection too).
    -   Add an autowidth command to the python interface.
    -   contour.lineTo and friends didn't work (didn't increment the
        contour's point count).
    -   With SnapToInt preference on, and at high magnifications, a
        mouse click would often be snapped so that it was well outside
        the fudge region. This meant that clicking on something might
        not select it.

-   10-Nov-2007
    -   Another bug when loading feature files

-   9-Nov-2007
    -   Introduced Raph Levien's Spiro curves. Please [download
        **libspiro**](http://libspiro.sf.net) before using fontforge.
    -   Deal with things that got deprecated as the mac moved from 10.4
        to 10.5
        -   NSAddImage and family have been replaced by dlopen
        -   the old mechanism for referencing a resource fork from POSIX
            "foo/rsrc" has changed to "foo/..namedfork/rsrc".

        The new stuff all worked as far back as 10.3 -- but FontForge
        source is no longer compatible with 10.2.
    -   In a truetype font, if a substitution lead to an unencoded glyph
        and the cursor hung over the substitution long enough to invoke
        the popup, then we'd generate a tiny font containing just the
        unencoded glyph, we'd complain that there were no encoded
        glyphs, we'd dismiss the popup, we'd generate the glyph image,
        then we'd try to free it with no free function because the popup
        was dismissed.
    -   Merge Feature File didn't actually merge things in, it forgot
        about existing things -- which caused problems for kerning
        classes which get stored in two lists.
    -   Allow people to order entries in the PostScript Private
        dictionary (in Font Info)
    -   Give the user control over how much arrow keys accelerate when
        holding down the Alt (Meta) key.
    -   People want a Snap To Int preference item.
    -   Simplify sometimes ignored points.
    -   People expect to be able to drag guidelines from the rulers
        (because everyone else does that) and don't want to bother to
        learn FF's mechanism. So make that possible.
    -   Dave C wants to be able to use Cntl-Tab to switch tabs in the
        charview.
    -   If freetype gets a single point open contour in postscript mode,
        it simply skips the contour (does not call FT\_MoveTo on it).
        This screwed up my attempt to match the results of freetype with
        the actual splines and caused a crash.
    -   Glyphs with no contours didn't set widthset when read from ufo
        and so were viewed as empty.
    -   FF was expecting descent to be a positive value in a ufo (it is
        in ArialBlack.ufo), but it seems to be negative in most UFOs.
    -   Erik wants the creation order of contours preserved when reading
        a glif file.
    -   Oops. glyph/glyphPen types got the wrong names in the fontforge
        python module. (interchanged)
    -   remove the Elide command. (There's no reason to use it, Merge is
        always better, it just confused people.
    -   Refrain from simplifying an order2 point where the second
        derivative changes sign.
    -   If a font has no "fullname" field (and fonts aren't required to
        have one) ff would crash when generating the font.
    -   Ability to Import/Export Raph Levien's plate file format.
    -   If I moved a corner point adjacent to a tangent, the slope on
        the other side of the tangent did not change.
    -   Exporting a glyph to BMP or PNG was broken, probably since the
        addition of python import export filters.
    -   Add a Strftime scripting command to the legacy language.
    -   Werner points out that I misspelled "persistent" as "persistant"
        in many places, including python member names. Correct that.
        (but leave the old, misspelled membernames around but
        undocumented in case anyone has been mislead by my previous
        documentation.
    -   Add new python stuff to provide access to spiros.
         The fontforge module has a new method -- hasSpiro() which
        returns whether we've got access to libspiro or not.
         The module also has a bunch of numeric constants defined
        spiroG4, spiroG2, etc. for use in the
         The Contour type has a new member -- spiros which is a tuple of
        spiro control points (which are themselves tuples:
        x,y,type,flags, where type is one of the numeric constants
        above.
    -   People would complain that the python interface would give them
        "Invalid second order spline" but no one bothered to give me a
        test case. I hope I've tracked it down now.
    -   Add a "problem" to check for glyphs whose bounding boxes are:
        too tall, too short, too wide, too much to the left.
    -   Used to be I had many problems checked by default. Best to turn
        them all off.
    -   Oops. FF was using Py\_BuildValue("s") on something that was
        already a python string.
    -   Adam Twardoch suggests that codepoints in the PUA have their
        script determined by their name (rather than just returning
        DFLT). Since Adobe used to put things like "a.sc" in this area,
        that seems a good idea.
    -   FF marked almost all fonts with the Oblique bit in the OS/2
        table.
    -   - Patch from Alexej for his diagonal hinting routines, fixes an
        ugly problem reported by Max Rabin.
    -   Various fixes in stem detection. In particular added a concept
        of "base start" and "base end" for curved segments of stem
        edges, allowing to determine more precisely if an active zone
        (which merges left and right segments together) should actually
        be considered "curved" at its
    -   Make implied points to be ignored when determining a diagonal
        stem validity.
    -   Swith the timestamps to GMT. Prior to this all timestamps have
        been PS/DT, but now that other people are making source changes
        GMT seems more sensible.
    -   Max Rabkin supplies a patch to let python import plate files.
    -   A couple of new name table string ids: WWS Family & WWS
        Subfamily.
         Provide reasonable defaults for the wws\* ttf names.
    -   Correct the list of dutch font styles.
    -   Most of the items in the popup menu of the lookup pane didn't
        work.
    -   FF wasn't loading python init files from \~/.FontForge/python
    -   When I fixed mark to ligature positioning I broke the other
        three types of anchor positioning (to base, to mark & cursive).
    -   If you pressed the [\*] Default check box in the Font
        Info-\>OS/2-\>Panose area, the values didn't go back to the
        defaults.
    -   When copying glyphs from one font to another ff would sometimes
        use a temporary value of -2 for the orig\_pos. This meant that
        reference fixups didn't work when looking at those glyphs.
    -   Drat. Typo when copying a contextual lookup from one font to
        another caused a crash.
    -   Add a new point tool which creates curved points which are
        always either horizontally or vertically oriented. (I call 'em
        hvcurves)
    -   Use \~/.FontForge instead of \~/.PfaEdit
    -   I'm told there was a typo in my Bulgarian text for the
        Print/Display dlg, and that this should fix it.
    -   Get some proper Belorussian text.
    -   Several bugs in my mark attachment routines. There was an
        assumption that only one mark could be attached to a base glyph
        per sub-table. This is wrong for mark to base, in that there can
        be several anchor classes per subtable. It is even worse for
        mark to ligature where there can be many marks per anchor class
        (one per ligature position).
    -   Having done this make sure we don't use the same anchor point
        more than once.
    -   What glyph class should be used by default if a glyph is both a
        ligature and a mark? Probably mark. There are greek accent
        ligatures, and its probably more important to treat them as
        marks than as ligatures (I don't know any fonts which actually
        "skip ligatures" but there are lots which "skip marks").
    -   Select-\>Next/Prev Point always selected the first point. Select
        First point did the wrong thing.
    -   Pressing the [Refresh] button could crash ff if a "FontData"
        depended on another (same font).
    -   Someone (John ?Morrison?) requested a way to access fonts by
        numeric index rather than font name when opening font
        collections like ttc files or dfonts.
    -   \* I no longer have separate l/lpotential and r/rpotential pairs
        Â  of point data objects. Instead I use just 'l' and 'r'
        accompanied by Â  boolean flags indicating their state as
        "potential". This greatly Â  simplifies some tests and makes the
        code more readable. \* When I am adding a chunk based on a
        single point to an existing stem, Â  I always mark the second
        point as "potential". Later this state can Â  be changed if
        check based on the second point produces the same chunk, Â  or
        at least doesn't produce another (conflicting) stem. Again, this
        Â  simplifies some tests which accompany adding new chunks and
        makes the Â  result of the stem detection less dependent from
        the order in which Â  the points are processed. \* I allow
        assigning a point to a stem even when its distance from the Â 
        stem edge is larger than standard dist\_error\_hv or
        dist\_error\_diag, Â  if only the difference between maximum
        possible deviations to the Â  both sides of the edge doesn't
        exceed the double dist\_error\_\* value. Â  This prevents us
        from adding several almost-coincident hints, actually Â 
        controlling the same stem. \* I have added a function which
        performs some stem normalization, Â  sorting chunks by point
        coordinates. For HV stems it also can Â  slightly modify the
        positioning of the stem edges preferring the Â  coordinate which
        is closer to most points assigned to each edge. \* There is now
        a special function used to compare conflicting stems Â  and
        decide if one of these two should be preferred, or they both are
        Â  worth to be output. \* The detection of serifs and similar
        elements, which, not being Â  exactly horizontal/vertical, still
        have to be marked with a HV Â  stem, has been improved (two
        points, forming a serif termination, Â  now should not
        necessarily follow each other).
    -   Drat. If we had libjpeg and not libpng we'd get a complaint
        about an undefined symbol.
    -   Add "Mismatch Unicode & Name" to the Find Problems dlg.
    -   There are ttf files in existance where glyph names do not match
        unicode code points. Tons of fonts use ".notdef" for glyphs
        other than "GID=0". Other fonts use ASCII glyph names (space,
        exclam, numbersign,...) for glyphs in other scripts
        (Kedage-n.ttf does this).
    -   In the past, ff has felt that the presence of a zero-width
        ".null" and "nonmarkingreturn" glyph meant that a font was not
        mono-space. In the future ignore these glyphs when determining
        whether a font has fixed width.
    -   in some rare cases we got an uninitialized value in
        spline-\>line display conversion.
    -   Up the size of the File-\>Recent menu to 10, and include non-sfd
        files in the list.
    -   The routine to create an apple state machine from a set of
        OpenType ('init','medi','fina','isol') forms would often crash.
    -   When scaling BlueValues, or other arrays, a trailing space after
        the last number and before the ']' was considered an error. If
        found then ff would not scale that entry.

-   2-Oct-2007
    -   Add `Edit->Select->Autohintable`
    -   Typo in parsing cmap format=6 subtables could cause a crash (or
        eccentric behavior)
    -   Can build fontforge so that it is a python extension (as well as
        embedding python in ff).

        >     $ ./configure --enable-pyextension

    -   If a tt spline had a control point on top of an on-curve point
        we would lose track of it when generating the font.
    -   Add support for the Uncode variation subtable of the 'cmap'
        encoding table (format=14).
    -   add xdg-open to the list of "known" browsers.
    -   Patch from Torsten Bronger. Got the args wrong in (python)
        font.glyphs.
    -   Fabrice Popineau & Taco Hoekwater point out that in the
        featurefile output routines I was using a single backslash
        inside a printf string. The intent was to output a single
        backslash. But I actually need to quote the backslash with
        another to do that.
    -   If a text string were extremely long it could overflow the 16
        bits allowed for a width in a metrixedit column. Truncate to
        32767 in that case. Still can't scroll over the whole thing, but
        editing it will pop up a better view which will allow it all to
        be displayed.
    -   If there are no slots in the current encoding, then clicking on
        the encoding menu caused a crash.
    -   Give the user control over the code pages/unicode ranges fields
        of the OS/2 table. Add python scripting commands to access them
        too.
    -   When the user renames a glyph then things dependant on it should
        change too.
         So if any substitution (or pairwise positioning) refers to the
        old name, change it to refer to the new.
         If any contextual change refers to the old name change to the
        new.
         If any class of glyphs (kerning class, apple state machine,
        contextual by classes) refers to the old name change to the new.
        More debateable: if we change "f" to "u0066" then change "f.sc"
        to "u0066.sc" and "f\_f\_l" to "u0066\_u0066\_l" (and recurse on
        those name changes).
    -   Guess at the meaning for GDEF glyph class component glyph:
        -   Something not encoded
        -   Something which is refered to by at least one other glyph
            (as a reference)
        -   Something which is not generated by GSUB

    -   Further improvements to the auto instructor.
    -   Make the [Guess] button in FontInfo-\>Private active when
        BlueScale is selected. (and make it work too).
    -   Oops. A font member in python was mis-named. Documented to be
        "loadState" was "loadStyle". Corrected to match the
        documentation.
    -   Some of the 'maxp' checks in the validator were off by 1, so
        fontlint would report errors on the glyph with the maximum
        value.
    -   Validator was checking non-composite glyphs against composite
        boundries.
    -   Barry Schwartz points out that I should validate the PostScript
        Private dictionary (Check that entries have the right types,
        check that BlueValues: has an even number of elements, is in
        order, that pairs are separated by bluefuzz\*2+1, not too big
        for bluescale etc.).
    -   FF would crash when building accented glyphs from unicode data
        that included a space as the base glyph.
    -   Torsten Bronger points out that "import" is a python keyword and
        can't (easily) be used as a member/method name. So change the
        glyph.import function to importOutlines.
    -   Patch by Mathias Kilian OpenBSD needs an include file linux
        doesn't (or rather that linux imports in another include file)
        declaration statement mixup.
    -   Patch by Michal Nowakowski to disambiguate some strings and to
        make sure some others get translated.

-   17-Sept-2007
    -   Patch from Daniel Johnson. FF didn't compile --with-regular-link
    -   And FF didn't compile if it had libpng but not libjpeg
    -   Added some warning messages when doing AutoInstr so that if a
        font does not contain a private dictionary, or if none of the
        selected glyphs contain hints, then let the user know s/he isn't
        going to get very useful instructions.

-   15-Sept-2007
    -   Added the ability to upload a font to the [open font
        library](http://www.openfontlibrary.org/). (You need to have
        created an account with them first).
    -   Further improvements to the auto instructor.
    -   When all glyphs are selected and the user auto-instructs, then
        FontForge will clear any legacy tables ('fpgm', 'prep' and
        'cvt '). The old values will be of no use, and they just get in
        the way.
    -   Add a Edit-\>Select-\>Select by Script command
         Make the Select by Name take a wildcard (so you could select
        "\*.sc").
    -   ApplySubstitutions still had problems. Caused crashes in a font
        with instructions.
    -   If one used the metrics view to create a kerning lookup then:
        there would be no 'kern' feature in the feature list yet, and
        the display would randomly lose track of kern pairs and then
        create new ones. Very confusing.
    -   Hmm. In some cases Merge Fonts didn't copy over lookup info.
         Add the ability to merge cross-font kerning pairs (in case the
        two fonts being merged have the same glyphs for those which are
        in both fonts).
    -   Provide a mass glyph rename menu item.
    -   The [Merge] button in Font Info-\>Lookups was disabled when two
        subtables in the first lookup were selected.
    -   If a glyph ended in a suffix (one.superior, etc.), then changes
        to that glyph were not reflected in the fontview.
    -   Add the ability to Populate a lookup from the selection (in the
        lookup sub-table dialogs)
         Do a better job of providing default values for single
        substitutions & positions.
    -   In the Print/Display dlg, deleting something so that the next
        line was blank caused ff to crash.
    -   The Encoding-\>Make From Font menu item should be disabled if
        the encoding is not custom.
    -   Fixed a system specific crash in the BDF Info window.
    -   Major rewrite of tilepath. Now has initial, medial, final &
        isolated tiles which it will use depending on the circumstances.
        No longer uses the clipboard, but you can draw the tiles in the
        dlg.
    -   In Italic/Oblique fonts (those where the font has an italic
        angle specified) make the center in width command correct for
        the italic angle.
    -   Round to Int didn't round anchor points.
    -   The Control Point Info window could wander off the bottom of the
        screen. I was very carefully calculating its position -- and
        then not using the result.
    -   Inkscape stuffs bitmap images into svg files using the data URI
            data:\<mimetype\>,\<data\>
         (see IETF standard RFC 2397)

        So, I'll support this now as my only way of handling type3 style
        svg fonts with embedded bitmaps.

        The standard points out that URIs are limited to 1024 bytes, but
        I don't pay any attention to that restriction, and will stuff
        arbetrary sized images into these things.

    -   The code that set up python import/export filters did not put an
        end of list entry after the last one. Sometimes it would be NULL
        (correct) and things would work and sometimes it would be
        garbage and things would crash.
    -   Drat. In the outline glyph view, the Import command didn't set
        the filter properly when you changed the import type.
    -   Extend fontforge to keep track of errors encountered when
        loading 'sfnt' files, and then have fontlint complain about
        them.
        Also extend fontlint to do validity checking in glyphs against
        the 'maxp' table. (This won't matter when editing fonts, as ff
        will fixup the maxp values when it generates the font, but there
        might be some existing fonts with buggy 'maxp' values).
    -   Oops. When changing the weight of a glyph and retaining the
        counter sizes, fontforge would push two entries onto the undo
        stack rather than one. (So the user would have to do Edit-\>Undo
        twice to get back to where s/he started from).
    -   Added several new python methods to font.

        -   find(contour) will search the font for all glyphs containing
            contour and return an interator on that set.
        -   replaceAll(srch,rpl) Will search for the "srch"
            contour/layer in the font and replace it (each time it
            occurs) with the "rpl" contour/layer.
        -   glyphs(type) returns an iterator over all glyphs in the
            font. If present type may be "GID" (default if omitted) or
            "encoding" and it indicates the order in which the glyphs
            will be returned.

        Added some new members to glyph:

        -   encoding -- returns the glyph's encoding in the font
        -   script -- returns the OpenType tag (a 4 letter string) of
            the script of this glyph.

-   31-August-2007
    -   New traditional Chinese translation of the UI by Wei-Lun Chao.
    -   Updated Vietnamese translation by Clytie Siddall.
    -   Removed the old MetaFont command (which didn't work) and
        replaced it with a styles menu (incorporating the old Effects
        menu, and a command to change weight, to condense/extend, and to
        oblique. Added python scripting commands
        {font,glyph}.{changeWeight,condenseExtend}
    -   Lots of new work on the truetype autoinstructor by Alexej and
        Michal.
    -   Add a validation dialog which can be run just before generating
        a font.
    -   Try a different algorithm for approximating splines by line
        segments (for drawing them in the outline glyph view and
        elsewhere). This one should show symmetry better.
    -   Provide the ability to ask freetype to rasterize glyphs without
        hints in the Print/Display dlg (even if the glyphs have hints,
        rasterize them without).
    -   Oh dear, rasterizing stroked fonts only worked if multilayer was
        defined.
    -   Try to improve display of stroked fonts.
    -   When stroking splines don't let miter joins grow excessively.
    -   FF would remove instructions from glyphs that had at least two
        contours the first of which started with a control point.
    -   Add a short cut for Hide Grid in the metrics view.
    -   Python 2.5 initializes itself differently from Python 2.[34].
        2.[34] delay the init until an import happens, while 2.5 does it
        at start up. I just assumed that when I called Py\_Initialize
        that it did so. This led to a crash on 2.[34] when I tried to
        use my types before the user had tried to import fontforge.
    -   Further improvements to tile path.
    -   When moving a control point in a ttf font where one side of the
        cp was a real point, I would allow an implicit point on the far
        side of the real point to become real.
    -   When dragging truetype points around, adjacent implicit points
        would remain where they were (and not be implicit any longer).
    -   FF would randomly crash after removing a lot of glyphs.
    -   The knife tool would not cut a contour if it landed on a point.
    -   Trying to add a stylename to the size pane of fontinfo generally
        caused a crash.
    -   All blank lines in the display dlg had the same line spacing as
        that of the first character displayed in the dlg.
    -   I don't think feature files where handling classes defined with
        '-' properly.
    -   Read the "lib" structures from UFO/GLIF files into our python
        persistent data. (And write our persistent data out if it's a
        dict).
    -   Add the ability to call hooks (python functions) when various
        fontforge events take place.
    -   Make fontforge's basic types (Point, Contour, and Layer) be
        picklable so they can now be saved in an sfd file.
    -   Oops. With the inclusion of the library check argument, ff would
        not compile if NODYNAMIC were set.
    -   FontForge now stores the "userdata" python members into the sfd
        file as pickled objects. (FontForge's own types are not
        currently pickleable).
    -   Add the ability to mark a glyph so that just before being saved
        its references will be unlinked and we will run remove overlap
        on it. This means the user can work with the references (and get
        the automatic updating they confer) and still not have a
        self-intersecting glyph in the output (think Aring, Ccedilla,
        Eogonek).
    -   Create a fontlint script file.
    -   When dumping both apple and opentype bitmap tables if there were
        a BDF table, then we'd get garbage for 'bloc'/'bhed'.
    -   Add some user interface commands to python, and more
        importantly, add the ability to create menu items which will
        invoke python scripts, and the ability to add import/export
        conversion filters (again, python scripts).
    -   Counter hints for LCG glyphs came out wrong if autohint had not
        been applied first.
    -   Counter masks were not read out of sfd files properly.
    -   Selecting a counter mask in Glyph Info caused FF to crash.
    -   The Execute Script dlg would sometimes complain about invalid
        scrollbar size when it got closed.
    -   AddAnchorPoint (scripting command) should be prepared to cast
        real args to integers.
    -   Just as I needed a special "in use" pass of GSUB when reading
        from a TTC, so I also need an "in use" pass of the MATH table.
    -   All this time and I've mapped "nonmarkingreturn" (GID=2) to
        Unicode+000C instead of Unicode+000D. I'm a twit.

-   08-August-2007
    -   Support for MicroSoft's new 'MATH' opentype table.
        [Element-\>Math Info](math.html).
    -   Michal Nowakowski and Alexej Kryukov have improved truetype
        hinting.
    -   kerning display is off in a pairwise lookup window if a y
        position adjustment were requested.
    -   When reverting a compacted font ff thought the font was
        compacted even when it was not.
    -   Make some effort to retain context in the fontview when changing
        encodings.
    -   ff scripting command CopyReference() was broken.
    -   Werner wants little popup windows in show att. Give him some for
        substitutions.
    -   If you examined a kerning pair subtable (either with glyph info
        or from double clicking on the subtable in the lookup pane) and
        then pressed [OK], and then generated an afm (tfm, old-style
        kern table, etc.) you would lose all the kern pairs you
        examined.
    -   Patch by Barry SCHWARTZ to feature file output on 64bit
        machines.
    -   In freetype 2.3.5 the binary layout of the execution context
        changed.
         This means that if ff is compiled against a 2.3.4 library it
        can't debug truetype if linked with a 2.3.5 library (and vice
        versa).
         So put in checks to see that the library version matches what
        we expect.

        Also the contents of one of the structures has changed a bit,
        and a value that used to live in one field has moved to another
        (the ppem value moved from (exc)-\>size-\>metrics.x\_ppem to
        (exc)-\>size-\>root.metrics.x\_ppem.

        Well, David warned me that this might happen.

        Warn the user (rather than just silently failing) when we have a
        freetype version mismatch.

    -   Patch from Barry SCHWARTZ. python fontforge.font.addPosSub was
        expecting its args inside a redundant tuple.
    -   New Vietnamese translation from Clytie.
         Also some spelling corrections in the original messages.
    -   Patch by Barry SCHWARTZ to lookup/subtable comparison.
    -   If a metricsview was open, then creating a new glyph slot would
        potentially screw up memory and sometimes crashed.
    -   Edit-\>Merge (and simplify) still have bugs.
    -   Fix two memory leaks in the metrics view (one was huge).
    -   If freetype failed to rasterize a glyph, then we would fall back
        on returning a bitmap image from our own rasterizer -- even if
        we asked freetype for a greymap. this caused problems when
        routines expected byte data rather than bit data.
    -   If we were given a cff (otf) font, with a bluevalues array which
        ended in 0 (as [-20 0]) then we would omit the final zero
        ([-20]).
    -   Outputting extension subtables appears to have been broken.
    -   The code which was supposed to detect two glyphs with the same
        set of kerning pairs and use the same data for them didn't work
        (forcing us to get an extension table which also didn't work).
    -   Add some more checks against non-BMP characters when drawing
        text.
    -   For first characters in the kern pair dlg, when editing class 0,
        the [Edit] button was enabled but did nothing. Should work now.
    -   ff could crash if it tried to create a popup image of the
        \<New\> line in the substitution pane of Glyph Info.
    -   Horizontal Scrolling in the matrix edit widget sometimes forgot
        to move the column labels.
    -   Add glyph name completion to lookup subtable dlg and glyph info
        panes.
    -   addKerningClass didn't parse its arguments correctly.
    -   Drat. When printing full page glyphs to a pdf file, the glyph
        was shifted up by almost the full page and we got a second (and
        incorrect) title.
    -   MS proposes two new feature tags with it's new 'MATH' table.

-   23-July-2007
    -   I have merged (and substantially rewritten) the Print and
        Display Dialogs. There is now only one menu item (Print) which
        (vaguely) the old Display dlg except that it can now be printed.
        The text area widget now supports OpenType features just as the
        metrics view does. It also supports ligature carets.
        The dialog is no longer modal, however it does not get updated
        with each change to the font (that would make moving a point
        around in the outline view far too sluggish), instead there is a
        [Refresh] button the user can press to force an update.
    -   It occurred to me that fontforge's current mechanism for setting
        ligature carets requires that there be a ligature substitution
        is the exact number of components used to make the glyph. But in
        indic fonts ligatures are often made up out of other ligatures
        (I think) which means that there won't be enough caret
        positions.
        So I've added a Ligature Caret count to the Element-\>Glyph Info
        dialog to give the user control over it when necessary.
    -   Add minimal support for applying apple state machine lookups in
        metrics view. Support is minimal because:
        -   Apple seems to figure line breaks before doing substitution
            process but I do it afterward so I don't know where the line
            breaks are and I can't enter either the line start or line
            end state.
        -   When I delete a glyph I delete it. Apple inserts a deleted
            glyph mark and then removes that later. State machines can
            respond to deleted glyphs, but I can't.
        -   I don't try to figure out which feature,settings should be
            on by default. So the user must pick them out manually.

    -   Add popup graphics to the Glyph Info and Lookup subtable dialogs
        to show substitutions (that is if there is an entry like 'smcp'
        a =\> a.sc then create a popup window showing the "a" glyph and
        the "a.sc" so the user can see what happens.
    -   Another futile attempt at an embolden command.
        Element-\>Embolden
    -   Add shortcuts to the anchor control dlg (Page Up/Page Down) to
        move to the next/previous glyph.
    -   Michal Nowakowski has improved the truetype autoinstructor. He
        warns that it probably still has bugs (as what does not?) so I
        am leaving the old code available for now. He says it works best
        in "a clean (uninstructed) font with well defined blue zones and
        stems".
    -   If we have a glyph with multiple encodings, and the secondary
        encodings occur after the primary ones, then the backmap will
        probably contain a secondary encoding, which means that when we
        go to load the font in we will probably notice the secondary
        encoding twice and forget the primary.
    -   I used not to distinguish between ligature anchors and normal
        mark to base anchors. Unfortunately when I moved to lookups
        (from features) I had to introduce that distinction. But I
        didn't work through all the implications and have fixed a number
        of bugs related to that.
    -   Barry SCHWARTZ complains that font info says "fontnames must"
        but that the cited adobe tech note only says "should". So change
        "must" to "should".
    -   When processing class-based contextual lookups fontforge could
        not handle class 0 (the class containing "all glyphs not in
        another class") add code to do that.
    -   If the user did not select a Gasp Version (note: active
        selection was needed, just seeing that it was correct and
        leaving it didn't work) then [OK] would leave the font with an
        invalid version and on some systems caused a crash.
    -   View-\>Insert Glyph After didn't work well on a ligature glyph.
        It would insert the glyph after the first component of the
        ligature, not after the last -- which would make more sense.
    -   Misnamed some private dict entries when loading from otf.
    -   Make entry of ghost hints better.
    -   Add the ability to determine whether a point is selected or not
        from python.
    -   Add a mechanism so the user can ask fontforge to check for the
        existance of optional libraries.
    -   Add range checks to some library routines which blindly
        referenced some BMP arrays with codepoints outside bmp. Broken
        by UCS2-\>UCS4 change.
    -   Werner wants GotoChar to be able to switch sub-fonts in a cid
        keyed font. This may introduce bugs...
    -   Revert glyph still wasn't working.
    -   Someone complained that using a negative stroke took a very long
        time but produced correct results. Um. Ok. It's easy always to
        use the absolute value.
    -   Oops. The mac uses UCS2 for filenames, so when I moved to UCS4 I
        should have changed the mac resource file interface.
    -   When creating a mac resource file we only set the type/creator
        fields and failed to initialize the finderFlags.
    -   Fixed crash bug in generating a cursive connection anchor
        sub-table.
    -   In TrueType composite glyphs with the USE\_MY\_METRICS bit set
        the lock icon wasn't scrolled properly.
    -   The change from UCS2 to UCS4 broke text copy/paste.
         We failed to add a terminating NUL of the right size in all
        cases
         We continued to use charset=UCS-2 when it should have been
        UCS-4
    -   FF crashed when trying to View-\>Show ATT on a font that appears
        to me to contain an invalid 'kern' sub-table. I have removed the
        proximate cause of the crash. I have provided a warning that the
        kern table appears invalid. And I have cleaned up my internals
        after detecting the bad sub-table (I had a lookup with a feature
        but no script and this caused problems).
    -   Multiple substitutions in the metrics view did not properly
        update the count of glyphs to be displayed.
    -   If nothing changed in the metrics input field and the output
        contained a ligature (or a mult subs I suspect). FF would
        complain.
    -   in python, font.generate() didn't work. The
        PyArg\_ParseTupleAndKeywords behaves in a way I did not expect.
    -   [Bottom] and [Down] still didn't work for lookup subtables.
    -   Try to force the text field in the metricsview to a fixed size.
        In some fonts it seems to be initialized to a huge value.
    -   Add ability to display italic side bearings in the char view.
    -   The lines drawn for italic fonts to show the italic origin and
        width were at slightly the wrong angle (I used a sine when I
        should have used a tangent).
    -   If a font did not have any horizontal metrics then ff would not
        set the em-size.
    -   Show Att trampled on memory when displaying apple contextual
        substitution state machines.
    -   Wasn't parsing apple's 'lcar' table properly.
    -   if a font contained a 'post' table but didn't name all names (or
        something like that), then the attempt to name the glyph based
        on the encoding was broken after the encoding change.
    -   FF did not recognize that a bdf file was greymaped. Broken by
        the bdf properties work a year ago or so.
    -   The import lookups button in fontinfo forgot about the subtables
        (sort of).
    -   The metricsview used the wrong count field to determine whether
        things changed. It used the glyph count, not the char count
        (which meant that when we had a ligature and the number of chars
        was greater than the number of glyphs, things got confused.)
    -   In the metrics view, anchored attachments only worked if the
        base glyph were itself unmoved (that is the mark was placed
        relative to the unmoved location, not the actual location).
    -   The search dialog should provide user with control over the
        error bound.
         The rotate checkbox didn't work if the flip checkbox wasn't
        checked.
    -   If a replace contour added a control point to a point that did
        not have one (went from a line to a curve) then that control
        point would get lost.
         If a search matched across the start point of a contour then
        search/replace could go into an infinite loop if the search and
        replace paths were the same.
    -   Find/Replace (replace) didn't work on quadratic splines.
    -   Add two python methods:
        -   Layer.interpolateNewLayer(other-layer,amount)
        -   Font.createInterpolatedGlyph(glyph1,glyph2,amount)

        The first creates a new layer by interpolating between the
        current layer and the layer in the first argument.
         The second creates a new glyph in the font by interpolating
        between the first two arguments. The glyph's unicodecode point
        and name will be copied from the first argument (the font must
        not already contain this glyph).
         If amount is 0 the result will look like the first glyph, if 1
        then like the second.
    -   When recovering from a crash, FF would sometimes complain about
        a mismatched version number. Don't.
    -   Problems parsing 'mort' tables could cause a crash.
    -   When building a contextual lookup, don't list that lookup as
        something that it could invoke (ie. list all lookups in this
        table (GPOS/GSUB) except for ourselves). Don't want to encourage
        users to create infinite lookup loops.
    -   Point matching didn't work when there were references to
        references and multiple references within a glyph.
    -   FF was having problems with extension lookups with multiple sub
        tables.
    -   We were trying to print a trailing NUL in some strings from the
        fontview.
    -   Kerning by classes got broken in metricsview by the addition of
        support for device tables.
    -   A GPOS contextual lookup only listed GSUB lookups in the
        lookup/sequence dlg
         Pressing [OK] in the lookup/sequence dlg caused a crash if no
        lookup selected.
    -   Openfontdlg was looking at the filter listbutton rather than the
        rename namelist listbutton.
    -   mf2pt1 now uses "glyph\_dimensions" rather than "bbox"
    -   The metrics view should now handle device tables.
    -   Goto could crash when used on small encodings.
    -   -lang wasn't permitted before -c.
    -   Use numeric text fields for anchor positioning.
    -   Graham Asher points out that the meanings of underline position
        in the 'post' table and the FontInfo dictionary are different.
        One refers to the top of the underline rectangle and one to the
        center of it.
    -   Align point would crash if the selected point were the end point
        of a contour (or if the two points around it were in the same
        place).
    -   The baseline was not properly located when displaying it in the
        fontview.
    -   The scripting command BitmapsAvail would generally cause FF to
        crash if done when there was a UI..
    -   We seem to be misimplementing my obsolete (sfd file) convention
        for having duplicate encodings point to the same glyph. Result
        was that occasionally a glyph would be removed and a pointer to
        something it refered to would be put in its place.
    -   Change the name of activeFontInUI to activeFont
         Add an activeGlyph method.
         Add the ability to call a python script from a outline view.
    -   Hmmm. If a textfield is shifted right, and then resized so
        there's now room for all the text, the unshift it.
    -   Werner suggests that it would be useful to be able to specify
        wildcards in the goto dlg.
    -   Michael Zedler tells me that glyphs output by mf2pt1 contain a
        line:

             % MF2PT1: bbox 0 90 834 422

        where the third (so called) bounding box entry is actually the
        glyph's advance width. I was reluctant to use this at first,
        because that clearly isn't something that belongs in a bounding
        box...

    -   Werner tells me that lilypond uses a slightly different syntax
        for the MF2PT1 bbox comment, so make our parsing slightly more
        generous.
    -   When creating a new lookup subtable for an anchored lookup, it
        did not get marked as having anchor classes and feature file
        output failed because of that.
    -   When outputing single lookups, the feature, script and language
        tags all had \^A where they should have had the second letter of
        the tag.
    -   Remove the code to produce the old, broken, 'size' feature.

-   07-June-2007
    -   Add support for Adobe's feature file syntax.
         Use Merge Kern (now Merge Feature) to read one
         Use Element-\>Font Info-\>Lookups-\>popup menu-\>Save to
        generate one

        Sigh. Adobe documents a feature file syntax they don't fully
        support, and even their documented syntax is inadequate to
        represent all the complexities of OpenType.

        FontForge supports anchors and device tables and will parse
        lookups which contain these. This is a syntax which Adobe
        documents but does not implement. Adobe also warns that this
        syntax may change when they get around to implementing it.

        FontForge makes one extension to the syntax which allows me to
        specify complex contextual features.

        Neither I nor Adobe support reverse contextual substitutions,
        nor GDEF mark classes.

    -   Add a popup menu to the lookups pane of font info.
    -   Change the name of `File->Merge Kern Info `to
        `File->Merge Feature Info`
    -   Remove the code to produce the old, broken, 'size' feature.
    -   An earlier patch, designed to make the tabset work in the
        charview even if the user changed the name, didn't work.
    -   Bug in the selection iterator.
         Also Max Rabkin points out the docs say the iterator returns
        selected glyphs rather than encoding slots. Fix the docs, then
        add a member (.byGlyphs) which will make the iterator return
        glyphs.
    -   Accept contour += (1,2) rather than forcing people to say
        contour += fontforge.point(1,2)
    -   Was using an error return from two setter functions
        (contour.set\_closed, set\_is\_quadratic) when I should have
        returned success.
    -   Crash when mistyping a glyph name in Glyph Info possub panes.
        Probably in the equivalent lookup dlgs too.
    -   If a glyph contained two copies of another glyph, and one of
        those copies was off by enough that ff didn't recognize it, the
        depending on how the contours were ordered, ff might fail to
        recognize the first glyph too, even though it did match.
    -   Add iterators to contours and layers. Python users seem to
        expect them even when they aren't documented to exist.
    -   layer += contour didn't work in python. I was examining a bit
        through the wrong data type.
    -   Provide a mechanism for copying lookup information from one
        glyph to another. (`Edit->Copy Lookup Data`)
    -   Loading kerning info from a mac 'FOND' resource was broken by
        the lookup change.
    -   Python scripting command font.createChar didn't. Partial patch
        from Max Rabkin.
    -   Adding a kerning pair from the metrics view would often add two
        or three pairs with the same character combination and different
        values.
    -   Another remove overlap bug. Introduced recently.
    -   Reinstate Apply Substitutions scripting command.
    -   Add some dutch styles.
    -   Make yet another attempt to correct for rounding errors when
        loading a postscript font.
    -   Add a way to get a font's filename to python.
    -   Werner points out that in scripting I use "break" in an example.
        It isn't documented to work and I don't implement it but I do
        show it. Oops. Ok, make it work.
    -   Display substitutions was broken.
    -   When generating default names for subtables, it is confusing to
        name them the same as the lookup.
    -   Change to using USC4 from UCS2 internally.
    -   Provide default names for lookups once the user sets the
        feature.
    -   Disambiguate some strings for the polish translation
    -   Revert glyph should not work for old sfd files.

-   11-May-2007
    -   Loading some afm files would go into an infinite loop.
        (Introduced 9-May)
    -   [Import] button on Font Info-\>Lookups crashed.
    -   Fix a number of problems related to anchor classes.
    -   After the user does an [Add Lookup] we should select the new
        lookup, to make it easier for him/her to do an [Add Subtable].

-   9-May-2007
    -   When ff parsed an afm file it only read the first ligature on a
        line.
    -   The [Call...] button in the scripting dialog is meaningless for
        python scripts (or I don't know how to give it meaning) so
        disable it.
    -   Vertical scrolling in the metrics view tried to scroll the list
        of features too.
    -   Tab, and arrow keys didn't work in the matrixedit widget after I
        added hidden columns. Make Return do the expected thing (move to
        start of next line and create it if possible).
    -   Patch by Pierre to fix uninitialized value when compacting
        encodings.
    -   Typo in realloc of lookups meant that nothing happened (when it
        should have increased array size by 1).
    -   Add the OFL icon to the fontinfo dlg.
    -   Plugins were broken with regular link configure option.
    -   Inkscape can start X on the mac before it tries to connect. Hmm.
        I can do that too. Inkscape manages to start X without an xterm.
        I don't know how to do that.
    -   When reading PS and CharStrings, the closepath operator didn't
        allow for rounding errors.
    -   Metrics View would crash if more than 20 glyphs entered.
    -   Alexej Kryukov points out that it would be nice if moving an
        anchor point did not set "changed since last hinted.
    -   Alexej Kryukov points out that the "changed since last hinted"
        flag gets set inappropriately.
    -   Alexej Kryukov points out that the Anchor control menu item
        looked as though it had changed, but actually had not.

-   1-May-2007
    -   I've redone the way FontForge handles lookups so that it is more
        in keeping with OpenType.

        > The major change is that fontforge now presents lookups to the
        > user rather than features. I think this makes simple things
        > more difficult (which is why I avoided this when I started),
        > but it makes complex things possible.
        >
        > Sadly the world is not simple.
        >
        > So when a piece of typographic information is created (a
        > ligature, a kern pair, a glyph substitution, etc.) it must be
        > tagged with a lookup (actually a lookup sub-table) rather than
        > a feature tag.
        >
        > The lookup itself will be tagged with a feature tag (possibly
        > several tags) and with scripts and languages in which that
        > lookup should be active.
        >  **NOTE:** This reverses the way GPOS/GSUB think about things,
        > but it contains the same information.
        >
        > The [Font Info](fontinfo.html#Lookups) dialog now contains a
        > Lookup pane which allows you to create and edit lookups and
        > their subtables. You can also reorder them. The order shown in
        > the dialog is the order in which they will be applied.
        >
        > A mac feature/setting subtable also gets converted into this
        > format.
        >
        > The Font Info dialog no longer has Anchor Classes, Contextual,
        > or State Machine panes.
        >
        > Instead you can edit a lookup subtable's data (for any
        > subtable type). There are new dialogs which list all the
        > information for each lookup type (ie. a dialog which lists all
        > kern pairs in a subtable), and these provide access to the old
        > anchor class, contextual or state machine dialogs.
        >
        > The Glyph Info command has also changed. It looks simpler and
        > more comprehensible (I think), but the act of creating a new
        > substitution has become more complex because (potentially) one
        > must create a new lookup and lookup subtable before doing the
        > simple task of adding a new replacement glyph.
        >
        > The kerning class, contextual and state machine dialogs have
        > all changed in that they no longer request a feature tag, they
        > now need a lookup subtable.
        >
        > The metrics view also needs a subtable.
        >  The metrics view has changed considerably.
        >  It displays all the features in the font, and allows you to
        > select which ones you want active in the view. It lets you set
        > the script & language. It will apply lookups that it couldn't
        > handle previously like ligatures and contextuals.
        >
        > It does not do Indic glyph reordering. I'm not sure how to and
        > last I checked MS had not updated their docs to reflect their
        > new procedures.
        >
        > Many other dialogs now take a lookup subtable where
        > appropriate.
        >
        > Show ATT has changed, but it is still not editable. I hope
        > that the Lookups pane will do that instead.
        >
        > There used to be a scripting command which indicated what
        > ligature features got stored in afm files. Now each ligature
        > lookup has a flag set on it which conveys this information.
        >
        > The Element-\>Typographic Features menu has been removed. It's
        > functionality has moved into Font Info-\>Lookups (I hope I've
        > got everything).
        >
        > Some scripting commands have been removed, others have been
        > changed and others have been added. I apologize for this, as
        > it will break existing scripts, but some basic concepts no
        > longer exist and others, very different, have replaced them.
        > (and anyway people may switch to [python
        > scripting](python.html) now).
        >
        > Removed:
        >
        >              DefaultATT
        >              ControlAfmLigatureOutput
        >              ApplySubstitutions
        >              CopyGlyphFeatures
        >              AddATT         Replaced with AddPosSub
        >              RemoveATT
        >              GlyphInfo(Position/Pair/Substitution/AltSubs/MultSubs/Ligature)
        >              SelectByATT    Replaced with SelectByPosSub
        >          
        >
        > Changed
        >
        >              Set(V)Kern takes an optional third argument, a lookup subtable
        >                   name (if not specified it choses one)
        >              AddAnchorClass(name,type,lookup-subtable-name)
        >              GetPosSub(subtable-name)
        >              AutoKern(spacing,threshold,subtable-name[,kernfile])
        >          
        >
        > Added
        >
        >             AddLookup(name,type,flags,feature-script-lang-array[,after-lookup-name])
        >                  n*[feature-tag,script-lang-array]
        >                  n*[script-tag,lang-array]
        >                  n*[lang]
        >              GetLookupInfo(lookup-name) =>
        >             [type,flags,feature-script-lang-array]
        >              AddLookupSubtable(lookup-name,subtable-name[,after-subtable-name])
        >              GetLookupOfSubtable(subtable-name)
        >              GetSubtableOfAnchorClass(anchor-class-name)
        >              AddPosSub(subtable-name,variant(s))
        >                       (subtable-name,dx,dy,dadv_x,dadv_y)
        >                       (subtable-name,other-glyph-name,dx,dy...)
        >              RemoveLookupSubtable(subtable-name)
        >              RemoveLookup(lookup-name)
        >              MergeLookupSubtables(subtable-name1,subtable-name2)
        >              MergeLookups(lookup-name1,lookup-name2)
        >              SelectByPosSub(subtable-name,search_type)
        >              GetLookups("GPOS"/"GSUB")
        >              GetLookupSubtables(lookup-name)
        >              LookupStoreLigatureInAfm(lookup-name,store-it)
        >              LookupSetFeatureList(lookup-name,feature-script-lang-array)
        >
        > The [sfd format](sfdformat.html) has changed. New files are
        > tagged as version 2. Old files will still work, but ff will no
        > longer produce file in the old format.

    -   New translations to match the new UI: Polish, Greek, German,
        French, simplified Chinese.
    -   FontForge now supports [python scripting](python.html) if it has
        been configured to do so.
    -   Tell users they should add their email address to the License
        after pressing the [Add SIL Open Font License] button.
    -   The metrics view had numerous problems. Most significant if a
        glyph changed elsewhere the metrics view would not be updated.
    -   If the width of a glyph changed in the metrics view then that
        was not synchronized to dependent glyphs.
    -   Enforce the "Use My Metrics" bit of a reference.
         In TrueType, if this bit is set on a reference then then width
        of the containing glyph will be the same as that of the
        reference.
         So don't let the user change the width of such glyphs. (and add
        a lock icon to the width line in the character view to show that
        it is fixed).
    -   Fix a number of Remove Overlap bugs.
    -   FF would destroy memory in the metrics view if the user
        attempted to display a character which was not in the font.
    -   Was setting the last char index (of OS/2) incorrectly if the
        font contained non-BMP characters. Might also have set the first
        char index wrong two.
    -   Bugs in 'PfEd' table, glyph comment subtable.
    -   Couple of places where I actually say "FontForge 1.0". Let's
        bump that to 2.0 now that I've done that for the sfd format.
    -   Overlap problems with incorrect path orientations.
    -   Arrow keys didn't work in the charview if the tabset were
        active.
    -   I used to use "\>\<" on the font's window title to represent a
        compacted font. No one understood it. Use "Compacted" instead.
    -   Philipp Poll wants to see the side bearings (I think) in the
        charview.
    -   Nicolas Spalinger of SIL suggests a help button next to [Add
        OFL] to open a browser on the official OFL site.
    -   Patch from Nicolas Spalinger of SIL regarding the verbiage
        surrounding the OFL in the fontinfo. Also his suggestion to make
        the tooltip live longer.
    -   Replace with Reference didn't check reference offsets correctly.
    -   Find problems didn't find references which intersected.
    -   Add some standard classes to the context chaining dlg.
    -   Make sure we only generate a postscript name in the name table
        once.
    -   The change length button of the cvt dlg didn't work.
    -   Input/Output of Apple's 'lcar' table was inconsistent. I don't
        know if it is "right" now, but at least ff can read back what it
        wrote.
    -   Werner points out that the debug windows show up at odd places
        if the window gets resized.

-   12-Mar-2007
    -   Add a button to insert the [SIL Open Font
        License](http://scripts.sil.org/ofl/) into the 'name' table.
    -   FF failed to store TeX heights and depths properly in a tfm
        file. FF failed to read or write TeX extension lists properly.
    -   Patch from Reuben Thomas to turn off the splash screen from the
        preference dlg.
    -   I had the dotlessj code point wrong. Again.
    -   FF did not center the charview window well on an empty glyph.
    -   The scripting command to add instructions to a glyph could
        immediately lose them if the glyph's points weren't numbered
        properly
    -   We used to allow the syntax "\<number\>\<numbers\>\* command" in
        ttf instructions (which automagically inserted an implied push).
        Someone noticed that

        >     PUSHB_1
        >     1
        >     2

        would lose the second number and not complain. In fixing that, I
        broke the first. Now both should work (I hope).

    -   Code which I hope will handle German keyboards and make them do
        what the menu says they (ignoring the shift key) should for
        certain hot keys (brackets, curly brackets, brokets all get
        different modifier sequences on a german keyboard than an
        english).
    -   If a glyph had no hints then ff could add a hintmask operator
        (which didn't try to control any hints). Now I can't find
        anything in the docs which SAYS it's illegal to have a hintmask
        in a glyph with no fonts, it does seem bad practice, and a
        program called tx.exe complained about it.
    -   Patch by Michal Nowakowski to allow a nicer notation for delta
        instructions in the instruction editing window: Example:
         `PUSHB_3 6@12 8 1 DELTAP2 `
         This moves point 8 by six delta-steps (that's clear) at 37 ppem
        (that's not clear at first glance - assuming delta\_base is 9,
        DELTAP2 works from 25 ppem to 25+15 ppem, in this example it's
        25+12 ppem). So it's just a way of constructing an argument byte
        for DELTAP/C.
    -   Allow FontForge's menu shortcuts (hot keys, whatever) to be user
        definable. We use a gettext based mechanism, type \$ make
        FontForge-MenuShortCuts.pot to get a pot file for the process.
        It needs to be converted to an mo file and installed in
        \$(prefix)/share/locale/\$(LANG)/LC\_MESSAGES, just like any
        other getext file.
    -   The Export scripting command did not work as documented. It is
        documented to export all *selected* glyphs. Instead it exported
        *all* glyphs.
    -   Redo the anchor control dlg.
    -   Be a little more lenient about bitmap bounding boxes for empty
        glyphs when loading bdf fonts
    -   Make the ClearHints scripting command take arguments:
        "Horizontal" or "Vertical" to allow users to choose to clear
        either horizontal or vertical hints (the old form with no args
        still works and clears both, of course).
    -   Typo gives us an unititialized variable when saving ufo.
    -   Various problems to various anchor dialogs.
    -   If an anchor point contained an x devtab but not a y devtab then
        it produced a pointer to garbage for the y devtab instead of
        NUL.
        Pairwise positioning lookups could also get their device table
        offsets screwed up.
    -   Werner points out that if you have a series of the same glyph in
        a row in the encoding (generally .notdef) and you are in a char
        view, then pressing Next Glyph does nothing. You are stuck at
        the same code point. (same thing happens for Prev Glyph).
    -   a chinese input method steals keystrokes I use for hot keys (I
        think). So if users don't want glyph navigation by typing
        characters in the charview (controled by a preference item) then
        don't turn on the input method when the window is created.
    -   Add hot key for Select-\>Points on selected contours.
    -   Assign "dotlessj" to map to 0x237, the unicode code point,
        rather than to 0xf6be, the old Adobe private use area. !!!! THIS
        DOES NOT CONFORM TO THE AGL !!!!!
    -   Oops. The gloss for the shift point/contour/zone was slightly
        off and gave the wrong information.
    -   Add vietnamese font styles (bold, italic, regular, etc.)
         From Clytie Siddall.
    -   Fixes for rounding errors in finding spline intersections.
    -   Werner points out that removing a bitmap glyph from the
        bitmapview does not force a redisplay in the fontview.
    -   Gleep. Werner points out that when generating bitmap strikes, ff
        would always generate a temporary postscript font to rasterize,
        so any truetype instructions would be ignored. And the generated
        strikes would be ugly.
    -   Add a command to show anchor point attachments within the
        outline character view
         (View-\>Combinations-\>Anchor Glyph at Point)
    -   Force point numbers to be correct when changing glyphs in the
        charview.
    -   Add support for Apple/Adobe's obsolete 'typ1' sfnt. A way of
        stuffing a type1 font into an sfnt wrapper.
    -   Even though the viewbox/output width height ratios are
        different, people want the image scaled the same in svg input.
    -   People would like to have only one charview and double clicking
        in the fontview just changes the contents of an existing
        window.
         Preference Item: OpenCharsInNewWindow
    -   Add a tabs line to the outline char window. If users are going
        to have only one charview open then they probably want some
        history too.
    -   Werner points out that what I call "Type42 CID" should actually
        be called either "Type11" or "CID Type 2".

-   20-Dec-2006
    -   Patch by Johan Winge fixing a bug in dragging out a
        magnification rectangle
    -   Patch from SUSE fixing a variable which can be uninitialized.

-   19-Dec-2006
    -   I have received many complaints about the grey background, so I
        have tried various other backgrounds -- and gotten complaints on
        all of them. Currently try using a white background by default
        and add a [discussion in the FAQ](faq.html#background) about
        changing it.
    -   Add support for Unified Font Objects (a directory holding many
        Glyph Interchange Format files). People at the Open Font Library
        seem to think this is useful. Also support for
        importing/exporting glyphs in glif.
    -   People asked me to implement the UFO/GLIF format in part because
        each glyph is stored in a separate file giving finer granularity
        to version control. I worry about using UFO/GLIF because it is
        not documented to store all the information needed to regenerate
        a font (being mainly concerned with glyph outlines). So I've
        implemented a directory based version of the sfd format which I
        hope will provide the one glyph per file format people say they
        want.
    -   MS has extended the 'gasp' table to give users control over
        clear type. Version number has changed too. FF now supports the
        new bits.
    -   MS has also added a cleartype bit to the head table.
    -   Hmm. I wasn't setting the apple specific bits of the head table
        properly.
    -   Allow the user to create an empty bitmap strike.
    -   Add the ability to remove bitmap glyphs from a strike.
    -   Fix a couple of memory leaks.
    -   The docs don't mention this, but... mangal.ttf has a NULL offset
        for the lookahead class definition, so if that happens -- no
        classes.
    -   Werner doesn't like that I always add dummy bitmaps for .notdef,
        .null & nonmarkingreturn. It seemed logical to me that if I were
        prepared to add those glyphs to the outline font I should be
        prepared to add them to the bitmap strike. But Werner (I think)
        sees bitmap strikes as containing exceptional glyphs which need
        special handling, whereas I just saw them as complete fonts. So
        in this context I guess there is no need to add these glyphs. As
        a compromise I have decided that I will add the glyphs to the
        bitmap strike if I added the glyphs to the outline font.
    -   Add scripting functions:
        -   SelectMoreIf
        -   SelectMoreSingletonsIf
        -   SelectSingletonsIf

    -   The changed flag wasn't being set in Remove ATT.
    -   GetPosSub scripting command trashed memory.
    -   Make default char of OS/2 be space for otf and .notdef for ttf.
        This is a guess at what should be done.
    -   FF was still setting firstcharindex in OS/2 incorrectly. The
        problem is that glyph 1 (or 2?) has encoding 0 in the mac cmap
        table while it is not referenced at all in the windows cmap.
    -   Wasn't setting os2\_typelinegap field when reading an sfnt.
    -   In a font without any LCG characters, fontforge set the OS/2
        capheight and xheight fields to -1e10. It should have been 0.
        Patch by Roozbeh Pournader.
    -   Patch by Roozbeh Pournader. Regular bit in fsSel in OS/2 was
        being set when it should not have been.
    -   Werner suggests that when looking at a bitmap strike, nextdef
        and prevdef look at the next glyph defined in the strike rather
        than the font as a whole. Useful for sparse bitmaps
    -   Werner wants to be able to set bitmap magnification in the font
        view.
    -   The "Recalculate Bitmaps" button in the bitmap view should
        adjust its positioning as the window is resized (and be
        sensitive to other languages which might have different button
        widths).
    -   there was an uninitialized variable used in parsing contextual
        by coverage table.
    -   Werner points out that when double clicking on a bitmap glyph in
        the font view, the glyph is created / rasterized without using
        freetype.
    -   Sigh. Ok. make the size of the label font in the fontview
        configurable.

            fontforge.FontView.FontSize: 24

    -   Werner finds "Original" confusing for an encoding and suggests
        "Glyph Order" instead.
    -   MS has revealed the meaning of a few new GETINFO bits. Put them
        in the Gloss window.
    -   Set/Select aren't very informative in class definition windows,
        change to "Set from font"/"Select in Font"
    -   Improve the way glyphs are centered in the outline char view. At
        least I hope it's an improvement.
    -   Oh. It is perfectly legal to have a context chain rule with no
        substitutions. This can be used to avoid matches in complex
        cases so:

            [a-z] a b => does nothing
            a b [a-z] => does nothing
            a b => substitutes

        will only substitute of "ab" is a word all to itself.

    -   If the metrics view were displaying text containing non UNICODE
        characters then some edits in the text field which displays
        glyphs would leave us with the replacement character showing
        instead.
    -   Werner wants to know whether storage locations are uninitialized
        or not, and to get warnings when reading an uninit value.
    -   Werner wants to see IF statements indented in truetype
        instruction display.
    -   FF wasn't telling freetype to set the mono bit when loading a
        glyph, which meant that GETINFO would return the wrong value for
        mono rasterization.
    -   If there are too many numbers after an NPUSH[BW] instruction, FF
        silently ignores them.
    -   Anti-Aliased rasters still weren't aligned properly with the
        outlines in the debug window.
    -   When debugging I provided popup information for anti-aliased
        rasters. But I didn't for mono rasters.
    -   ff would crash when asked to debug fpgm/prep (because my
        rasterization routine didn't work if there were no contours).
    -   Werner wants to turn off auto goto in the charview when
        debugging is going on.
    -   The gloss information for delta point (and cvt) was wrong if the
        magnitude selector was 7. I claimed it moved (changed) by 0,
        when it should have been by -1.
    -   Werner wants to be able to set memory watch points on storage
        and cvt locations. Set these through the cvt/storage windows by
        clicking on the appropriate locations. Modify the points window
        so the user can set watch points by clicking on it too.
    -   The Points window would sometimes scroll in unexpected ways.
    -   Werner wants to see the raw value of a "WS" instruction in the
        gloss.
    -   merge fonts would get the script lang index of merged kern pairs
        wrong.
    -   Correct some of icc's warnings
    -   Apostolos points out that NAME\_MAX isn't defined on solaris,
        but \_POSIX\_NAME\_MAX is. But \_POSIX\_NAME\_MAX doesn't seem
        to be defined on linux.
    -   Display fonts would crash if you tried to change the font. But
        introduced in last release.
    -   Patch from Mike FABIAN. Rasterizing by freetype only initialized
        a variable if CONFIG\_TYPE3 (multilayer) was set.
    -   StrSplit & StrJoin scripting functions.
    -   Patch by RÃ¼diger Oertel. Strncat could overflow a buffer.
    -   Make simplify do point catagorization, and not just of points
        changed.
    -   Curved stems are also limited by geometry. Can't just assume
        control points work.
    -   Why are pdf files listed as a source of bitmap fonts?
    -   When examining a bitmap font, metrics view would crash when
        asked to look at a non-existant glyph.
    -   The list of verbs for indic glyph rearrangement didn't display.
    -   Converting from the mac korean encoding didn't work.
    -   Images imported into a bdf character did not set the character
        used bit.
    -   Add a CopyAnchors command.
    -   Patch from Raph Levien. FF mishandled seac if the accent were
        not translated.

-   26-Oct-2006
    -   If a large group of glyphs were autohinted at once, and one of
        those glyphs contained a reference to a glyph that appeared
        after it in the font, then that glyph would still end up with
        the dirty hint mark set.
    -   It was impossible to set preferences on the Accents pane. They
        would either always be 0 (or false), or make spurious
        complaints.
    -   Add a Ucs4 scripting command (reverses Utf8).
    -   when creating an array with [...] notation (in scripting) I
        forgot to dereference lvalues.
    -   Add scripting commands

        -   Revert
        -   RevertToBackup

        Make the "+" operator concatenate arrays

              [1,2] + [3,4] == [1,2,3,4]
              [1,2] + 3 == [1,2,3]

    -   Add a scripting command, FontImage, which generates a font
        thumbnail.
    -   Make it possible to save the Font Display dlg as an image.
    -   Clean up the Display dialog a bit. The concept of "unhinted"
        truetype is obsolete. Remove it.
    -   At Andrey V. Panov's request I have added a scripting command
        "CopyUnlinked" which behaves like Copy except that any
        references will be unlinked (turned into splines) as they are
        placed in the clipboard.
    -   I believe OpenType would prefer if formed arabic glyphs didn't
        use their unicode encodings, but used simple substitutions
        instead. Accept both for svg output (previously we only accepted
        unicode encodings).
    -   Patch from debian (bug392688) from Wojciech Mu\*a and K\*stutis
        Bili\*nas

-   19-Oct-2006
    -   Patch from Mike FABIAN, array overflow in creating PS Private
        dialog
    -   The instructions out of date flag was only getting reset if the
        user made a change in the edit instrs dialog. If s/he just
        pressed [OK] it would remain on.
    -   Make libintl be another library we'll try to dlopen. This is
        complicated because on linux libintl is part of libc so there we
        must link directly. Further complicated because fink install
        script has a bug and doesn't put /sw/lib in DYLD\_LIBRARY\_PATH
        so we have to look there ourselves.
    -   Locale strings aren't required to contain an encoding (which the
        locale docs incorrectly call a charset). Michal Nowakowski
        points me to nl\_langinfo which will give me the encoding even
        if not specified in the locale.
    -   Add pdf files to the standard format list for openfontdlg

-   14-Oct-2006
    -   New translations: Greek, Simplified Chinese, German, Polish.
    -   Using the help command would generally crash fontforge on
        cygwin.
    -   Adobe uses the American spelling of diaeresis (that is
        dieresis), but some fonts contain glyph names with the European
        spelling. So add that as an alternate.
    -   If a bdf font contained an unencoded .notdef glyph, then we
        crashed.
    -   Adding Greek translations for font styles. (Thanks to Apostolos)
    -   If we aren't dealing with a TeX math font, then the
        "Sub/super"script positioning fields of Glyph Info-\>TeX aren't
        meaningful. So grey them out.
    -   Remove internal/external did the wrong thing in expand stroke if
        we also removed overlap and had counter-clockwise splines.
    -   Alexej Kryukov points out that reverting a glyph with anchors
        lost the anchors.
    -   Add simplified Chinese style names to our built-in lists.
    -   Problem reading autotraced input.
    -   The encoding change of last summer broke tfm output with glyph
        lists or extension characters.
    -   If add extrema added a point too close to a start/end point
        expand stroke could generate NaNs.
    -   FF could crash when adding extrema to an open contour.
    -   Add Polish styles to the translation list.
    -   Add a scripting function to set the gasp table.
    -   Add support for the 'gasp' table.
    -   Alexej Kryukov wants format 6 cmap tables.
    -   After editing instructions the debugger would incorrectly
        complain that instructions were out of date.
    -   Michal Nowakowski complains that "Instructions are out of date"
        warning appears too many times when doing a global
        transformation. Make it only pop up as a dlg once and thereafter
        occur as a LogError.
    -   If a font contained only space glyphs it could still be marked
        onlybitmaps and not allow outline generation.
    -   Show ATT did not translate scripts & languages.
    -   Parsing an empty list of ttf instructions crashed Michael
        Zedler's machine.
    -   Make type1 generation use (essentially) the same subroutine
        mechanism as type2.
    -   Local subroutines were being freed twice in cff cid-keyed font
        generation.
    -   Removing an alternate unicode encoding (Detach Glyphs) was
        broken in some cases.
    -   FF failed to perform some simplifications on the last spline of
        a closed contour.
    -   Various fixes for Michal N.
    -   Add scripting interfaces to many of the ctype functions.
    -   Add a scripting interface to the 'size' feature, now that Adobe
        has finally decided what to do about 'size'.
    -   Had the wrong title for kerning state machine dlgs.
    -   Redo the preference dlg.
    -   The two preference items, AlwaysGenApple, and AlwaysGenOpenType,
        were a bad choice on my part and have lead to considerable
        confusion. I mentioned some time ago that I would remove them if
        there were no objection.

        There was no objection.

        I have now removed them.

        I also made the SetPrefs scripting function sort of work if the
        user tries to set one of these (it will set the appropriate
        flags in the default option set used by generate).

        The defaults of these flags were different on the Mac from
        everywhere else. This meant that a script could do different
        things on the Mac and on linux. That seems like a bad idea. I
        have changed things so that the default options setting for
        generate is always OpenType.

        **THIS IS AN INCOMPATIBLE CHANGE AND SCRIPTS ON THE MAC COULD
        NOW BEHAVE DIFFERENTLY.**

    -   Patch from Michal Nowakowski to have ff number points after
        conversion to quadratic.
    -   Try to provide disambiguation for all strings "New" so that in
        languages where "New" must agree in gender with the thing being
        created translators will be happier.
    -   Remove the po/Makefile.in and redo the configure script to build
        it (so that I don't have to modify it each time I get a new
        language).
    -   Extend the knife tool so that if Meta (Alt) is held down it will
        move any spline it intersects (rather than cutting the spline).
    -   FF would crash if \$HOME (the directory that is, not the
        environment variable) did not exist.
    -   I guess it makes sense that if ff read in a compressed sfd file
        then using a simple File-\>Save command (not Save As) should
        produce another compressed sfd file.
    -   When scaling a reference in otf output we had problems if the
        reference had more than one contour.
    -   If we deleted many glyphs from a font we are sometimes left with
        kern pairs pointing to things not worth outputting. Make sure we
        don't generate kerning info for them.
    -   Ligature carets were not being scaled by scale to em.
    -   Patch from mfabian at suse.
    -   If a user has a font with a glyph that is bigger than
        16\*em-size (in many dimensions) and that user generates a tfm
        file, then warn him that the glyph can't be expressed in a tfm
        file and truncate the size to the biggest legal value.
    -   Attempt to mitigate the effects of X claiming to have a font
        when it doesn't.
    -   Saving CID keyed fonts would look at garbage memory for its
        encoding data if not saved from the biggest subfont.
    -   Add support for version 4 of the OS/2 table.
    -   If Interpretation was set in a font then when generating a 8/16
        type cmap fontforge always went down the traditional chinese
        (big5) branch.
    -   MS has changed their indic shaping engine. It still uses the
        same features but they are applied differently. To disambiguate
        this change they have created a parallel set of script tags for
        the indic writing system. FontForge should recognize these and
        use them when appropriate.
    -   When Adobe first released fonts with a 'size' feature they did
        not follow the opentype specification. In August of 2006 they
        announced an incompatible change to bring fonts produced after
        that date in line with the specification. Unfortunately there
        are programs which depend on the old, broken format.

        Legacy programs will not work when given a font in the correct
        format. New programs should be able to handle either correct or
        broken 'size' features.

        A few of Adobe's programs make use of the 'size' feature, and
        XeTeX does. I know of no others (besides font editors). Both
        intend to upgrade their programs... So this may be less of an
        issue than I initially feared.

        FontForge should now be able to read in a size feature in either
        format and gives the user the option of producing 'size'
        features in either format on output.

    -   For Japanese fonts we tried to use cp932 (a variant of sjis) but
        then halfway through didn't know what to do with it.
    -   Another fix for saving sub-opentype fonts from a cid font.
    -   From a script, if a user asks to generate a ttf outline font
        with ttf bitmaps from a database with no outlines then
        technically this isn't supposed to work. But it used to and it's
        easy enough to tweak so that it works again.
    -   **Update to Unicode 5.0**
    -   Again when adding accents to the left of a glyph we should shift
        the glyph over to give it a reasonable lbearing.
    -   When building an accented glyph, we generally want
        use\_my\_metrics set on the reference. But if we add an accent
        to right (horn) or left (psili/varia on cap greeks) we want to
        turn it off. We did turn it off on the right side, but not on
        the left.
    -   Philipp Poll points out that ScaleToEm doesn't scale the OS/2
        metrics (and some other stuff). Actually it does, but font info
        did the scaling BEFORE setting the values. So the metrics get
        scaled, and then reset to the values in fontinfo (which usually
        means they don't get changed).
    -   Fix some memory leaks.
    -   Some fixes for pcf loading.
    -   Various fixes to CID keyed fonts.
    -   Even the pretty ttf approximation routines need to worry about
        diametrically opposed control points.
    -   When generating multiple type1 fonts, output the bounding box of
        each as that of the full font. This will make it vaguely likely
        that applications will get the same line spacing.
    -   Oops. The vertical metrics bit wasn't preserved when flattening
        a cid font.
    -   Ack! Window titles and such were being interpreted in Latin1 and
        not in UTF-8.
    -   Interpretation of PostScript arc operator failed if the two
        angles were 360 degrees apart. Normalization made them both the
        same.
    -   Try to clean up bitmap only sfnt generation.
    -   pcf wasn't in the Open Font dialog format list (nor was pmf, nor
        pdf)
         Add a filter for TeX bitmap fonts.
    -   Provide a mechanism (if a preference item is set) for picking a
        cmap when loading a font.

-   22-Aug-2006
    -   Add a pane to the Preference dlg allowing user to control some
        of fontforge's hint creation.
    -   Someone complained that Find Problems-\>Path Direction got the
        wrong answer. It got the wrong answer because they had a
        self-intersecting path (which screws up all concepts of
        in/out-side. So try to make it clear that they should do a find
        intersecting paths first.
    -   Update my opentype scripts list (in particular include music).
    -   Due to a typo, ff thought pretty much everything outside unicode
        BMP was in the hebrew script.
    -   Add a new command to the point menu which allows you to specify
        a spline and one coordinate (either X or Y) on that spline. FF
        will calculate the other coordinate and add a point there.
    -   CODE2000 contains an anchor class with only base glyphs (no mark
        glyphs) as part of a set of anchor classes. FF crashed.
    -   Patch by Nix. svg.c did not compile when designed to be linked
        directly with libxml (instead of dlopening it).
    -   Redo the font open dlg so that there's a list of standard
        filters and a mechanism for changing that list. Remember the
        last filter used.
    -   If a popup menu is huge it used to appear under the cursor. This
        meant that even if the user didn't mean to s/he would have
        selected something and press/release would not be a no-op. This
        was a problem with the Font Info -\>TTF Names
    -   Patch from SUSE. Use of uninitialized local variable. But the
        result is never used, so just remove the offending lines.
    -   Emulate gtk's boxes and use that to do automatic dialog layout.
        Get the font info dlg working (and then several others too).
        This means that the layout is no longer optimized for English,
        but will look better in other languages (I hope).
    -   Add an information to Font Info to display what unicode
        character ranges are supplied by the font.
    -   Philipp Poll points out that when generating versioned fonts
        (ie. Ambrosia-1.0 rather than just Ambrosia) you don't want the
        filename to default to the fontname (the fontname will be
        Ambrosia), instead you want some way of specifying a default
        filename. So add that to the Names pane of the Font Info dlg.
    -   Try to keep track of font creation and modification times. NOTE:
        This is different from file times (which is what appears to be
        stored in the 'head' table of an sfnt file). Add a new table
        'FFTM' to our sfnt output with these timestamps (and the
        timestamp of fontforge itself, just in case we ever care).
    -   Mark classes could not be set from the selection.
    -   Ben Laenen points out that if an order2 glyph has a dependent
        which refers to it using point matching and we keep changing the
        point number on the glyph then we'll keep getting warning
        messages. He suggests one message.
    -   Empty glyphs weren't marked with red Xs any more.
    -   In font compare, when comparing two contextual/chaining lookups,
        I forgot that class[0] was always NULL.
    -   Open contours caused the ttf point renumberer to crash.
    -   A font can have many kerning pairs. More than will fit in one
        GPOS subtable (which essentially has a 64k data limit or a bit
        more than 10,000 kern pairs). So be prepared to generate many
        sub-tables each dealing with a subset of the (first) glyphs.
    -   If an apple mutually exclusive feature had a default setting
        which wasn't 0 then my previous patch didn't work.
    -   If guessing bluevalues found no OtherBlues, fontinfo-\>PS
        Private would create an incorrect OtherBlues value [0]
    -   Support clipboards containing image/svg
    -   Ralf Stubner points out that the maximum zone size of bluezones
        is determined by 1/BlueScale. So adjust BlueScale if the max
        zone is too big.
    -   Merge fonts didn't merge anchors and got into a terrible mess.
        Let's merge kern classes and state machines too. Merging kern
        classes may be a bad idea. We don't really merge them we just
        copy them so that if the same glyph is mentioned in two classes
        unexpected things might happen.
    -   ff could crash on an sfd file containing erroneous anchors (such
        as might be generated by the merge fonts command).
    -   Once upon a time, Apple was so concerned about accuracy of
        floating point operations that they required all operations be
        performed in IEEE extended (80bit). This had the interesting
        side effect that a program which conformed to Apple's standards
        could not also conform to ANSI C (which required operations use
        double temporaries for double values). I find it somewhat
        ironic, therefore, that gcc on the mac doesn't even promote
        floats to doubles. FF needs the extra accuracy provided by a
        double (an extended type doesn't seem to provide additional
        assistance unfortunately). So on the mac we got extrema that
        weren't, which meant that remove overlap didn't.
    -   If we had a mac feature which had multiple subtables (ie. a
        state machine for a contextual substitution, and a
        non-contextual substitution too) then we produced a bad chain in
        the morx table.
    -   Merge & Simplify would sometimes generate solutions using
        control points which were diametrically opposed to what they
        should be.
    -   Yet another attempt to do a better job of autohinting.
    -   Add a "Revert to Backup" command.
    -   Put code in to correct for single bit (sometimes double bit)
        errors when search from extrema. This is at a lower level than
        the previous patch.
    -   Output of extension lookups wasn't working
    -   Fixed a problem in the ttf names pane of Font Info.
    -   A slight improvement to magnifying by dragging a rectangle.
    -   The first time you click on a transition in a Font Info-\>Mac
        SM-\>Indic state machine, ff would crash.
    -   Tihkomirov points out that it isn't clear how to delete a ttf
        name from the name pane of fontinfo. So add some popup help. The
        language & string ID menus in that pane were sorted on the wrong
        key
    -   Was not preserving (unparsed) tables properly. Several bugs.
    -   When loading an apple bitmap font (with no hmtx tables) we need
        to dummy up widths for the outline glyphs.

-   15-Jul-2006
    -   Apple's bitmap only fonts should not have an 'hhea' nor an
        'hmtx' table
         Dummy up outline glyph widths when we don't have a 'hmtx' table
        by looking at bitmap widths for that glyph.
         ftxvalidate complains if the vertical line metrics are 0. Even
        in a strike with no vertical metrics information. So dummy
        something up.
    -   Was getting the flags wrong for turning off features in an apple
        morx chain.
    -   When outputing mark-to-base sub-tables with multiple marks I
        neglected to output an NUL offsets for the anchors that weren't
        there. So if a glyph had only one anchor (instead of two, or
        however many) then the offsets would be all wrong.
    -   The SetPref() scripting function was misdocumented to be called
        SetPrefs() so accept both names.
    -   When building an accented letter out of glyphs with an anchor
        class ff would increase the advance width of the accented glyph
        by the size (xmax-xmin) of the accent.
    -   Expand the functionality of the ruler tool so that it also shows
        curvature.
    -   When importing a bitmap font from a mac binary or an sfnt and
        the encodings of the destination and the bitmap did not match,
        then things got rather screwed up and might crash.
    -   patch from KANOU. the ref check routine in glyphcomp compared
        one reference to itself.

-   03-Jul-2006
    -   Type2 charstrings have no closepath operator. I used to think
        that meant I could not omit the final vector. In fact it means I
        can omit the final vector AND the closepath operator.
    -   If we had a font with no complete code pages we used to generate
        a version 0 OS/2 table without codepage info. But now windows
        refuses to install such a font. Instead generate a bogus
        codepage field which claims to have latin1 (even though it
        doesn't).
        Windows won't use a font where the codepages field is 0.
    -   When generating a FOND for a bitmap only sfnt, we created dummy
        'NFNT' resources with the wrong resource ids. Which meant we got
        garbage when the font was used.
    -   Make the TabSets in the font & glyph info dialogs run vertically
        rather than hor izontally. (Add an option to get the old display
        back).
    -   Approximate Spline from Point Slopes sometimes set the control
        point while leavi ng the nonextcp flag on.
    -   Add Extrema only looked at how close a point was to the extrema
        in one dimension. While that dimension is more important, make a
        less stringent check on the other.
    -   Expand Stroke removes "U-turns" from splines because they
        confuse it. But the routine that did that got a bit rambunctious
        and did the wrong thing on a circular arc.
    -   If a font did not contain an OS/2 table then we didn't retain
        the 'hhea' ascent/ descent.
    -   Various fixes from Matthias Kilian of OpenBSD.
    -   When asking for default 'subs' features, every glyph gets
        assigned U+2080.
    -   Display the curvature information at each point. In Point Info
        dlg, and in a pop up window when editing cps.
    -   Add two new menu commands/scripting commands:
        -   Canonical Start Points (CanonicalStart())
        -   Canonical Contours (CanonicalContours())

        The first sets the start point of each contour to the leftmost
        point, while the second orders the contours by their leftmost
        points. This will slightly reduce the size of output
        charstrings. It will also make more things available to be put
        in subroutines.
    -   Print Multi-Size & Full Page printed the wrong glyphs from the
        font view. Broken since the encoding change.
    -   When stroking a contour that makes a 180degree turn, ff did not
        give it a semi-circle if linejoin was set to round.
    -   SPLCopyTranslatedHintMasks didn't work if there were more than
        one contour being copied.
    -   Nathan Summers points out that if the XUID is garbage the ff can
        go into an infinite loop when generating an otf/cff font.
    -   Somehow the XUID and UniqueID fields crept off the bottom of the
        fontinfo Names p ane and weren't visible or modifyable. Give
        them their own pane now.
    -   Apply some patches (with some changes) from Nathan Summers to
        the truetype debugger.
    -   The property count in BDF fonts is wrong.
    -   Ralf Stubner points out that the notdef glyph in an otf font
        should look like that in a ttf font, and not like that in a
        type1 font. (that is there should be something in the glyph).
    -   Add support for group "encodings" which have empty spaces for
        unused glyphs.
    -   make another attempt to find a good default sli for glyphs with
        no default script.
    -   Typo in scripting function DefaultATT.
    -   The View-\>Display Substitutions has been broken since the
        encoding change last summer.
    -   Mark glyphs with out of date instructions differently from those
        with no instructions.
    -   The last change to the cvt table generally did not get made.
    -   Make glyph compare check for point matching in anchor points and
        in references.
    -   Add a warning message about out of date instructions when
        generating a font.
    -   When generating a font with anchor points matched to ttf points,
        ff failed to allocate enough space for them and offsets got all
        confused.
    -   Oops. Some variables which should have been static were dynamic.
        Which meant we kept dlopening libfreetype.
    -   If we had an anchor point which positioned itself with point
        matching, and we ge nerated an otf font then we'd output a
        lookup which tried to do point matching i n postscript. Only do
        point matching if we are sure we're in a tt font.
    -   Add a preference item to control clearing of tt instructions.
    -   Printing a multi-size page of a truetype font crashed.
    -   Anchor Point dlg didn't work well with matching tt points.
    -   Add a field to allow users to search for a glyph name within a
        kerning class.
    -   Interesting. In kerning by classes, if the coverage table does
        not match the glyphs specified in all the classes (for the first
        (left) glyph), then any glyphs in the coverage table but not in
        any class should be treated as being in class 0.
    -   Add something to the font view's copy from menu to control
        whether truetype instructions are copied or not.
    -   Add some more problems to find problems
        -   Check for glyphs with both contours and references.
        -   Find out of date point matched references.
        -   Find references with transformation matrices which can't be
            expressed (as refs) in truetype
        -   Find references with transformation matrices which aren't
            translations (and so can't be expressed (as refs) in type1/2
            fonts.

    -   Allow the user to turn off composite info in afm files.
    -   otf kerning classes were dumped in the wrong order.
    -   In GaramondPremrPro.otf (version 001.000) Adobe has coverage
        tables (for some context chaining subs) which have the glyphs
        mentioned multiple times. I suppose this is legal, but it is
        annoying. I want my strings to have each glyph appear at most
        once. So add a little thingy to remove duplicate glyphs when we
        generate a list of glyph names.
    -   Adobe has depreciated the use of PUA to represent small caps,
        old style numerals, etc. Add a preference item so that ff will
        no longer recognize "a.sc" as having a PUA encoding.
    -   The tool tip for the preference item "NameListForNewFonts" was
        wrong.
    -   Horizontal scrolling in the show att dlg was too slow. It was by
        pixel. Make it be by something which approximates the width of a
        character.
    -   Add a new scripting command to give a font's bounding box.
    -   Sigh. Within a GPOS lookup, sub-tables are not additive. Only
        one will be applied at a time. So order the 'kern' lookup so
        that pair-wise kerning comes out first (to override class
        kerning).
    -   Was sometimes outputting mkmk base-mark attachement points as
        the mark attachment point.
    -   Clytie Siddall has many suggestions about how to make the
        translation process easier for translators. He also tells me how
        to insert contextual comments into the program source, and
        provides many fixes for typoes.
    -   The OS/2 version 1,2 has a different defn of avgCharWidth than
        OS/2 version 3(,4) does. Display of CJK fonts is supposed to
        break under windows if using the v3 defn.
        Use the appropriate defn for the version we happen to be
        outputting.
    -   Autohinting crashed on glyphs in an order2 font if the glyph
        contained both an outline and a reference.
    -   Pressing the help key in the main windows went to the overview
        page, not to the contextual help for the window.
    -   Add a warning when 'CFF ' widths and 'hmtx' widths differ (when
        loading a font).
    -   Set the default and normative widths too late after the cff
        subroutine change.
    -   Make double clicking in the list of kern pair/anchor
        combinations bring up either Kern Pair Closeup dlg or Anchors
        Away.
    -   The Anchor control dlg didn't work after the encoding change.
    -   Add a popup message to explain what "Cor:" means.
    -   Doing a Close() from a script didn't work if the windowing
        system were open.
    -   Yet another bug in type1 hinting output.
    -   Some versions of realloc don't like allocating 0 bytes.
    -   Users expect ff to recognize a glyph name "Diaeresis", even
        though Adobe (following standard American, but not European
        spelling) spells it "Dieresis".
    -   GhostScript has canniptions when it gets a version 3 OS/2 table
        in a ttf file.
    -   Can't add a flex hint when there's a hintmask at the mid point.
    -   The hintmask part of PointInfo would not let you clear a
        hintmask.
    -   Add a new command to the fontview: Edit-\>Select-\>Select by
        Name
         and a new scripting command: SelectAllInstancesOf
        Both will select all encoding slots containing the named glyph
        (or unicode value)
    -   Add scripting command: RemoveDetachedGlyphs
    -   Was setting typo linegap to hhead linegap.
    -   Using the X clipboard to paste into the character view has been
        broken at least since I added multi-layered editing.
    -   Add a pref to control whether we prefer to use spacing or
        combining accents when building accented glyphs.
    -   Spacing in the group dlg was sometimes off.
    -   More hinting fixes. If the edges of a stem aren't quite parallel
        we had problems
    -   Add some new built in variables: \$order, \$em, \$ascent,
        \$descent
    -   The 'TeX ' table was output incorrectly if glyph's order wasn't
        the same in the sf as in the ttf.
    -   Allow the [\*] Back visibility checkbox to control whether the
        grid fit lines are visible or not.
    -   If scripting is in verbose mode, flush the output buffer before
        calling a built in procedure (so any errors it generates will at
        least show the right line).
    -   Ambrose LI points out that the master font in a cid keyed font
        should match the ascent/descent of at least one of its subfonts
        (so that the typoAscent/Descent f ields will default correctly).
    -   Spend some quality time with valgrind looking (oh, and fixing)
        memory leaks.
    -   Make ControlAfmLigatureOutput (scripting command) apply to
        ofm/tfm files too.
    -   Oops. When parsing mac state machines I was using sizeof(long)
        when I should have said sizeof(int32). It gave rather bad
        results on 64bit machines.
    -   Add a scripting function to load a user defined cidmap file.
    -   Hmm. sizeof(point)==8 on AMD64, but structures are aligned to 4.
        This means our chunk alloc routines complain. So if we're given
        something that isn't in units of sizeof(pointer) then just round
        it up.
    -   lookup ordering within GSUB has been totally broken at least
        since I added the code to coalesce lookups for kerning.
    -   Kanou suggests changing function name that includes Char to be
        Glyph. Well a few do really mean Char, but the rest should be
        Glyph. Leave the old names there bu t document them as
        deprecated.
    -   Make CID keyed fonts use the new subroutine mechanism too. We
        can use global subrs now too!
    -   Oops. Familyname can be NULL, and we were indescriminately
        checking to make sure its length was less than 31.
    -   Make a better use of subroutines when generating otf fonts.
        Doesn't work for CID fonts yet.
    -   We crashed if we changed from one cid sub-font to another when
        compacted.
    -   Oops. I made ff work with ft22 if the debugger was being
        built... but it failed to compile if people didn't build the
        debugger.
    -   Oops a scripting function was marked as not needing a font when
        it did (HasPreservedTable & friends).
    -   More for font compare. If there is a difference in a glyph in
        the two fonts add the option for including the outlines of the
        second glyph into the first. If the first font is missing a
        glyph, add an option to insert it with the outlines in the
        background.
    -   Good heavens, someone wants to play with acorn2sfd. Make it
        compile again.

-   08-Apr-2006
    -   Patch by Mike Frysinger from gentoo. Use the HOME environment
        variable in preference to /etc/passwd.
    -   Werner wants to see raw data in the points window of the
        debugger. My guess is that most people won't be interested in
        this mode (and it makes the window a bit uglier) so I've made it
        configurable. --with-debug-raw-points
    -   Write sfddiff as a fontforge script and put it back into the
        install process.
    -   Add code to font compare so it can do the old sfddiff --merge
        option (if two corresponding glyphs differ, add the outlines of
        the second to the background of the first).
    -   Someone wanted acorn2sfd! Make it compile again.
    -   Make configure look for libgif

-   06-Apr-2006
    -   Patch by Ian Jackson of Ubuntu. When in an empty glyph (one not
        WorthOutputting) then doing a View-\>Show Grid Fit would cause a
        crash.
    -   The PLRM says that formfeed is whitespace. The T1\_Spec says
        that it is not. After an eexec the T1\_Spec is right (and ff was
        following the PLRM definition).
         Also add a check to insure that the first character we generate
        in pfb encryption isn't a white space character.
    -   On some windows systems (mine at least), windows will refuse to
        install a postscript font if the fontname or familyname of that
        font is longer than 31 characters. These are the names in the
        Font Dictionary of the postscript font itself, not the names in
        the 'name' table (for otf fonts).
    -   Make ff compile with freetype 2.2.0
    -   The popup menu of text fields was garbage.
    -   Make a change to pfm output which might allow non windows ANSI
        encoded fonts to work.
    -   Allow the freehand tool to work in quadratic fonts.
    -   Didn't always refigure splines properly when using Get Info in
        quadratic mode. Patch by Michal Nowakowski.
    -   Trying to invoke the KDE browser (for help) didn't work. Patch
        by Dimitar Zhekov
    -   Still losing instructions if contours begin with off-curve
        points.
    -   if a font had a defined notdef glyph, then FF would usually
        enter it incorrectly in the 'hmtx' table.
    -   In the Select menu, Width had an extra underscore.
    -   Wasn't looking in the right place to get the right weight name
        in an otf font.
    -   People have been complaining about the UI for drawing quadratic
        (truetype) curves. It was consistent with the UI for drawing
        cubic (postscript) curves, but it seems hard to draw quadratics
        that way. Rather than concentrating on the on-curve points (as
        in cubics), now concentrate on the off-curve points. So the
        pen-tool behaves quite differently now in quadratic mode. As
        does Element-\>Get info.
    -   A patch added back in 2004 to make vertical substitutions work
        for Japanese (to work around a bug in Windows to be precise) had
        a bug itself if more than one language was involved.
    -   When outputting an inline copy of a reference in otf fonts with
        translated hintmasks we did the wrong translation for vertical
        stems and got garbage results.
    -   New command to allow user to enter X,Y coordinates of a point
        and have that point be selected. I want this for debugging. It
        might be useful generally.
    -   Fixed problems with type2 subroutines containing glyphs with
        conflicts.
    -   ReplaceWithReference had too large a fudge factor and found
        macron when it should have found macron.sc in minionpro-regular.
    -   If an alternate/multiple subs had more than 30 components then
        we lost all those after 30 when generating opentype GSUB table.
    -   Hmm. Sometimes least squares does give the answer we want for
        merge. So give it a try.
    -   Patch by kanou to fix some translation problem.
    -   In the shape tools (round rect, ellipse): Instead of generating
        a quadratic shape at the start, generate a cubic shape and
        convert to quadratic. The convert routine now knows about how to
        find integer control points and such.
    -   Patch from Kanou to get more grid size values for looking at
        bitmaps.
    -   If a glyph starts with a control point then ff would sometimes
        throw out the ttf instructions, thinking it wasn't numbered
        properly.
    -   A merge in a quadratic font produced a straight line. Even when
        it shouldn't have.
    -   Change namelists to support non-ASCII glyph names.
    -   Oops. Some hinting scripting commands had a "b" prepended to
        their name by mistake. Sigh. From now on support both names.
    -   When pasting a glyph with hints into an empty glyph, we
        shouldn't set the "in need of autohinting" flag. (Actually, we
        might should if the original copy were done in a glyph with out
        of date hints.... but that gets more complicated).
    -   Patch to make loading bdf fonts more efficient.
    -   Add Kanou's "fontview" font to the list of fonts searched by
        default for the fontview window.
    -   FF did not mark ghost hints as different from normal hints.
    -   Interpolating fonts broke when I did the encoding change last
        summer.
    -   Patch from Kanou to prevent the hash function from returning
        negative numbers. (and crashing)
    -   Add a menu and a scripting command to compare two fonts.
    -   Oops. There's a stray underscore in a field in font info.
    -   Refresh font view(s) after changing glyph name/unicode in glyph
        info in case those are being displayed.
    -   If a name entered in the goto dlg was a single unicode char,
        then goto would treat it as such. Normally this is fine, but a
        user might use the underscore character (for example) as a glyph
        name and not assign it to U+005F. So check for the name too.
    -   Rewrite the cubic-\>quadratic conversion code. It now looks much
        prettier and tries to position intermediate points on integer
        (or half integer) locations so there won't be unexpected
        rounding later. It's slightly less accurate though.
    -   Many changes to the postscript hinting code.
    -   If a glyph contained references but no alphabetic characters
        then Glyph Info would crash.
    -   Scripting command AskUser doesn't work unless
        FF\_SCRIPT\_IN\_LATIN1 is set. Patch by Kanou.
    -   In some error messages I ended a sentence with a comma. Make it
        a full stop.
    -   Patches from Kanou to make Japanese translation better.
    -   Kanou points out that the code which handles modifications to
        the unicode char textfield (in glyph info) complains about the
        wrong things and he provides a patch.
    -   Hand tool failed to scroll background images (probably failed on
        hints too).
    -   When doing a copy splines with hintmask operation we neglected
        to refigure the spline after transforming the end points. This
        was ok since we never used that info -- except if the splines
        were quadratic and we needed to convert to cubic. So when
        generating a ps font from a quadratic database, and the font
        contained references with scaling/rotation/etc. then we'd get
        erroneous results.
    -   In Find Problems, the Flipped Reference check could fail if the
        reference contained a contours which intersected (themselves or
        each other).
    -   Make ff aware of ExtraLight as a valid weight when setting a
        default value for the PS weight string.
    -   When the user clicked on a textfield with attached pulldown
        list, ff would get an event saying the first entry on the list
        had been chosen. This meant that the Tag dialog (used for new
        ligatures/substitutions/etc. would show the first tag in the
        list instead of blank.
    -   Include some glyph name synonems from Richard Kinch's TrueTeX
        list.
    -   Determination of whether a ghost hint is top (-20) or bottom
        (-21) should depend on the current contour, not on the glyph as
        a whole.
    -   If a glyph consists solely of references then add
        \_\<ref-name-1\>\_\<ref-name-2\>...\<ref-name-n\> to the list of
        possible names. Sometimes also add uniXXXXXXXX.
    -   Kanou wants to translate some more strings.
    -   Barry.SCHWARTZ wants to be able to reencode a font to compact
        from a script.
    -   Barry.SCHWARTZ points out that my "cfg" files contain no
        newlines. Shows how much use they've received:-)
    -   Barry.SCHWARTZ points out that when generating an afm file for
        an otf font only the first 256 characters were given encodings.
    -   Simplify much improved.
    -   Make simplify for quadratic splines aware of the peculiarities
        of truetype. So one simplification is to make a point
        interpolateable. And removing a point is not always good if it
        means points that were interpolateable become
        non-interpolateable.
    -   After examining (and stealing with permission) Huw Davies's code
        in wine/tools/fnt2fon.c I believe I can now produce .fon files.
    -   Add support for reading bitmap references (from an sfnt bitmap)
    -   Patch by Kanou. cvknife didn't compile in one mode.
    -   Typo in an error message
    -   Add a command to show points of inflection (also change
        View-\>Mark Extrema to show where extrema occur on a spline if
        not at the endpoints)
    -   Patch by Michal Nowakowski. Uninitialized variable in simplify
        dlg.
    -   glyph names for unencoded glyphs were always "uniFFFFFFFF"
        should be "NameMe-\<n\> broken by last summer's encoding
        changes.
    -   Werner wants CC (composite character) entries in afm for GPOS
        mark-to-base features.
    -   The switch to utf8 last summer broke font info-\>Size
    -   Allow users to ask for both 'GPOS' and old-style 'kern' tables.
        FontLab does this. The OpenType list is generally disapproving
        of the idea.
    -   If we tried to put more than about 10000 kerning pairs into one
        old-style kerning sub-table then we'd overflow various shorts.
        So split it up after about 10000 kp into several different
        sub-tables.
    -   Round to Int screwed up interpolated points.
    -   When generating a tfm file don't generate a width bigger than
        16\*em-size (even if the font says to) because TeX will throw it
        out.
    -   Alexey Kryukov's patch to fix an error message.
    -   Printing a CID keyed truetype font to a pdf file produced a very
        odd ordering of glyphs (compacting some and omitting others and
        getting errors when it ran out of glyphs but asked for more).
    -   Alexey Kryukov suggests repunctuating an error message.
    -   Johan Winge suggests an improvement to converting cubic splines
        to quadratic: If we end up using a line when looking at the
        spline as a whole, try breaking it at the point(s) of inflection
        first. It seems like a good idea.
    -   Johan Winge also points out that I identify points as tangents
        when they should not be. This is because I use one measure of
        sloppiness no matter how close the cps are to the base point
        when determining colinear. It's probably best to have a variable
        measure depending on how far the cp is from the base point.
    -   Alexey Kryukov thinks Add Unencoded Slots should work in the
        compacted view by making the thing have a custom encoding.
    -   Scripting reencode didn't get rid of the "compacted" mark.
    -   Ralf Stubner points out that I produce type1 charstrings which
        end in "seac endchar" when a simple "seac" is sufficient. He's
        right.
    -   When generating opentype tables in from a single sub-font of a
        cid-keyed font (ie. user asked for a ttf font generated from one
        sub-font) ff would crash.
    -   We didn't hint bold fonts well (anything where stems were bigger
        than em-size/10)
    -   When generating a type1 font with a glyph containing a reference
        that had to be unlinked, then the vertical stems in that
        reference would not be hinted.
    -   When guessing points at which to attach hints in type1/2 read in
        we failed if the points were too widely spaced. Be a bit more
        lenient.
    -   SetCharName didn't check its flag value properly.
    -   Uncompacting a font caused memory problems.
    -   Fix simple crash in metafont.
    -   When importing unencoded glyphs into an already existing font,
        we would sometimes fail to find the matching glyph (and would
        create a new one).
    -   If a font contain an encoded glyph called ".notdef" and that
        glyph was not the first glyph, then type1 fonts had a .notdef
        glyph at a random place in the font. Now freetype seems to
        renumber glyphs so .notdef is always glyph 0 which fontforge did
        not expect and produced some strange results when rasterizing
        (tested on 2.1.10). Fix is simple: always make notdef be first
        in the chars dictionary and then all is happy.
    -   Add new scripting command to compare two glyphs. I want this for
        testsuites, other people might find a use for it.
    -   gniibe reports that the scripting function Export() produces
        bitmap images with the wrong format and provides a patch.

-   9-Feb-2006
    -   Instead of refusing to do expand stroke/remove overlap for
        order2 fonts, why not convert the contours to order3, do the
        function and convert back.
    -   Once more we are numbering points badly.
    -   If we clear a glyph which is being referred to (and we don't
        unlink it first) then when we save it into an sfd file we get a
        reference to a glyph at orig\_pos -1 (because the cleared glyph
        isn't stored in the sfd) which causes an error when reading it
        back in.
    -   If a copyright message were an exact multiple of 100 characters
        long, fontforge would screw up memory (and potentially crash)
        when reading it in from an sfd file.
    -   The Merge/Simplify command (which Add Extrema now calls) had
        problems when the control points were very close to the base
        point so that the point was (to the human eye) a corner point.
    -   Add support for the r2l script N'Ko. MS says opentype will use
        script 'nko ', ISO says the tag should be 'nkoo'. Follow
        opentype.
    -   Kanou tells me that Syriac & Thaana are also r2l scripts and
        should be added to my list.
    -   If FF was given multiple fonts on the command line the sizes of
        the font windows would jump around in a very peculiar fashion.
    -   Add the concept of a namelist. Users can specify what names they
        want for new glyphs, or can force an entire font into a new
        naming scheme. Changes to
        -   FontInfo
        -   Open
        -   Generate (Family)
        -   Preferences
        -   and the Encoding menu.
        -   New scripting functions:
            -   LoadNamelist(filename)
            -   LoadNamelistDir([dir])
            -   RenameGlyphs(namelist)
            -   Extended Generate (scripting) to take a namelist
                argument.

    -   If users didn't have libuninameslist installed we were still
        generating spurious ligatures for numero and TM. (and others)
    -   KANOU points out that if you comment out a bdf glyph (with
        COMMENT) fontforge sort of reads it anyway.
    -   Kanou needs to distinquish between the script latin and the
        language.
    -   SplineRemoveAnnoyingExtrema1 got tweaked a little too much in
        attempting not to generate insane control points.

-   25-Jan-2006
    -   If you try to create a bitmap only sfnt but provide pixelsizes
        for no valid bitmap strikes, the fontforge would crash.
    -   Chia points out that I should use the PIXEL\_SIZE property to
        set a bdf font's pixelsize (instead of using font
        ascent+descent).
    -   Trying to rasterize a glyph with a coordinate of 1e7 caused a
        crash.
    -   The change to make Add Extrema remove points near the extrema
        failed to consider the possbility that some of those points
        might be corner.
    -   In Gentium Roman, when searching for bluevalues, the baseline is
        further than 1 standard deviation from the mean of glyph ymin.
        Change the range searched so that 0 is always included.
    -   In Font Info-\>PS Private, if we selected OtherBlues and pressed
        [Guess] it did not change the OtherBlues value.
    -   The gettext patch changed Histograms-\>Blue Values menu item
        into a line.
    -   When changing the order of a font, ff would ask if you minded
        losing the undoes. There's no point in asking the question if
        the font hasn't been modified (it has no undoes).
    -   The Point Info dlg should enforce that curved points cps are
        colinear (so if the user changes one cp, the dlg should change
        the other to be in the opposite direction.
    -   There was a path though PointInfo that called SplineRefigure3,
        which meant that splines got marked as cubics even when they
        should have been quadratics.
    -   Using a rotated elliptical pen in expand stroke did not work
    -   Add a homedir button to the file chooser dialogs.

-   17-Jan-2006
    -   Make the Import() scripting command accept {bdf,pcf}.gz files
    -   Reading utf7 (ttf name) strings from an sfd file was broken if
        one of the characters had bit 15 (high bit) set and its position
        in the string mod 3 was 1.
    -   My horizontal line metrics in the sfnt bitmap strike header were
        incorrect
    -   Use the horizontal line metrics (if they work) to set the
        ascent/descent of a bitmap strike.

-   15-Jan-2006
    -   The change to fold all COMMENTS into one bdf property broke the
        sfnt 'BDF ' table routines.

-   14-Jan-2006
    -   Change AddExtrema so that if an extremum is very close to an old
        point it will add the extremum and then remove the old point.
    -   Redid how bdf properties were handled
        -   I had the definitions of some properties slightly wrong
        -   I was generating some obsolete properties
        -   When I generated CHARSET\_ENCODING for iso8859 encodings I
            had an extraneous "-" in the value.
        -   retain the properties when loading a bdf, pcf font
        -   Add a dialog which gives user control over bdf properties
        -   design a 'BDF ' table for SFNT files which can contain bdf
            properties and make FontForge read and generate this table.

    -   Ted Packard points out that I output "big metrics" in sfnts
        inconsistently. This patch should make them consistent and
        right.
    -   Restore "compact" views to their old glory. Ie. they can now be
        uncompacted (and uncompaction happens automagically when
        generating a font).
    -   When reading a GenTags: line from an sfd file stored with CRLF
        line terminators, the next line would be lost.
    -   ff couldn't handle xrefs which were broken in bits in pdf files?
    -   When reading a ttf font from a pdf file we found no encoding
        info. This caused us to crash because various routines expected
        an encoding map. Add a dummy (Original) map if not exists.
    -   Wasn't numbering points in references properly.
    -   Gleep! Ever since the gettext code went in, the Generate fonts
        dlg has refused to generate "No Outline Font" and "No Bitmap
        Font".
    -   Herbert Duerr from OpenOffice tells me that their OpenSymbol.ttf
        font when produced by fontforge does not work on Win98. This is
        because Win98 doesn't like the codepages bits ff produces and
        refuses to use any glyphs in the font. He submitted a patch to
        make ff produce a version 0 OS/2 table (with no codepage info)
        for this font. Win98 will accept it then. His patch was against
        an earlier version of ff and needed to be modified for the
        current version.
    -   Patch by Raph Levien which finally shows me how to use
        FT\_Outline\_Get\_Bitmap properly.
    -   If the user has never called PrintSetup (or if the user has not
        called PrintSetup this session and has not loaded prefs), then
        fontforge will invode setpagedevice on a pagesize which will fit
        on either A4 or US-Letter. The PS manual says a printer should
        refuse such a size unless it has paper within 5 points of it. So
        on printers which follow the spec (not mine) nothing will print
        as it waits for paper.
        Now if the pagesize has not been set, don't specify a PageSize
        to setpagedevice.
    -   The PrintSetup scripting command should not require a font.
    -   Add a mechanism so that users can prevent ff from making a point
        implicit. Useful in that point needs to be instructed.
    -   New copyright notices for 2006
    -   Make the pen tool work better with quadratic splines (make it
        default to having control points which cause the point to be
        implicit).
    -   Order2 elipses were not drawn accurately.
    -   Point numbers sometimes didn't get properly renumbered after
        changes. If we have references & splines in a (truetype) glyph
        then show the numbers as "?".
    -   When a charview displays numbered (truetype) points, then it
        shows all the control points. But the control points are not
        selectable. This is not a good thing, so make them selectable.
    -   The font display to pdf did not include a title at the top of
        each page.
    -   Peter Denisevich points out that when we print something we say
        "%%Pages atend" instead of "%%Pages (atend)". And the latter is
        correct.
    -   Werner points out that my type1 (and type1 cid) fonts contain a
        %%DocumentSuppliedResource line, and they should not. The next
        level up should do that when it includes the font.
    -   Show .xpm files as images we support in import image dlg. We've
        always supported them, might as well show them.
    -   Check the glyph class when deciding what anchor to use.
    -   Anshuman Pandey wants to be able to set the glyph's GDEF class.
        I've never understood why the default behavior wasn't good
        enough, but it's easy to do.
    -   One of the fields in Glyph Info had some garbage initialization.
    -   Add a default anchor point type to the AddAnchorPoint scripting
        command. FF will try to guess an appropriate value.
    -   Add some standard window sizes to the fontview window. I'm tired
        of having the windows sized to other people's standards whenever
        I review a bug.
    -   There was a path through expand stroke where a control point was
        marked as non-e xistant by mistake.
    -   Expand Stroke would leave contours with the reversed orientation
        if it had to do a remove overlap internally.
    -   Oops. The routine to save the encoding prefs file could not
        handle an encoding plug-in.
    -   KANOU points out that the origin pulldown list in the transform
        dlg was not being translated.
    -   In the preference dlg all of the [...] file browsers had the
        title "Call Script" which isn't appropriate for most of them.
    -   Typing .\* and pressing [Filter] did not show hidden files in
        the file chooser.
    -   the code to check for intersections failed to check if there
        were a crossover in the last tiny section of a spline before its
        end.
    -   Was generating ofm files when creating bdf fonts. Seems
        unnecessary.
    -   Was producing a EBLC table with bad first/last values for first
        glyphs.
    -   Hmm. Not all systems have tzset. Add a configuration option for
        it.
    -   In scripting, a return within a loop sent ff into an infinite
        loop.
    -   Kanou's patch for adding a new flag to scripting Import, to
        clear out the layer first.
    -   Patch from KANOU to add SetGlyphChanged scripting function.
    -   If an implied point became real, this fact was not reflected on
        the display until the user forced a point renumbering.
    -   A mouse click in an empty metrics view references garbage memory
        -- And crashed Kanou's session.
    -   Loading a large bitmap font left bits of the backmap of the
        encoding map uninitialized.
    -   Loading a pcf font caused a crash.
    -   Moving the control points of an implied point should move the
        implied point. And we should indicate which points are implied
        so this behavior doesn't surprise.
    -   Michal Nowakowski points out that renumbering points in a glyph
        should turn off point matching in references.
    -   Add support for bitmaps with vertical metrics.
    -   Wasn't storing the vendor id in the OS/2 table properly.
    -   Rounding error present on PPC which was absent on \*86 machines.
    -   Werner would like pixel size info to show on the title of a
        charview when debugging.
    -   Added a new menu command "Point-\>Center Between Control Points"
        for truetype.
    -   When manipulating menus with keys (rather than mouse) Werner
        found a crash.

-   5-Dec-2005
    -   Creating the first bitmap view might cause a crash -- depending
        on how the linker organized memory.
    -   Loading an sfd file now checks to see if there are any glyphs
        with splines in them, and if there are not turns on the
        onlybitmaps flag. Someone pointed out that if you inadvertantly
        edit in the outline view -- even if it is nothing significant,
        then the font is forever after marked as outline. This isn't a
        perfect fix, but it will prevent the worst from happening.

-   1-Dec-2005
    -   Use GNU gettext rather than my nomen routines to handle
        translation of the UI..
    -   Add support for plugins.
    -   I added a check in parsing tfm files to make sure I didn't read
        outside the bounds of the kern table. But the table size was
        expressed in ints (32 bit units), and my index was in bytes, so
        I frequently exceded it.
    -   If we used Get Info on a reference in a ttf font, and that
        reference did NOT do point matching we would generate an
        inappropriate error.
    -   My support for using endchar as seac in type2 fonts only worked
        in bare cff fonts, it did not work if the cff were inside an
        sfnt wrapper (opentype).
    -   I have decided that I will now store all postscript strings in
        utf8 (copyright, weight, familyname, etc.) They SHOULD all be
        ascii. But the occasional copyright mark would sneak in. We went
        into an infinite loop on one such because that was an illegal
        utf8 string. So fix a number of problems related to this.
    -   Switch from using an internal routine to using freetype to
        rasterize b&w bitmaps when debugging ttf instructions.
    -   Make the gridfit/debug settings sticky across invocations (store
        in prefs).
    -   Add popup info showing the level of greyness in a truetype font
        being debugged in anti-alias mode.
    -   Werner suggests altering the dynamic range of anti-aliased
        rasters in the charview so that the outlines remain visible
        behind them.
    -   Make the background color of the debugger raster window
        configurable by the user
    -   If a curved point had no control point in one direction, then ff
        thought it had no direction and felt free to change it. It
        should inherit the direction from the other side of the point.
        This was even more confusing if the point went through a two
        step process, first simplifying one side into a line (losing the
        cp) then simplifying the line away (losing the direction).
    -   Use a better algorithm to indicate changed pixels. (in debug
        window)
    -   Screwed up View-\>Show Grid Fit... in Mono mode.
    -   Werner wants to be able to see grey scale rasters while
        debugging truetype. He also points out that if the instruction
        before the end of instructions changes pixels, ff would leave
        them marked "changed" even after finishing the instructions.
    -   We were getting multiple error windows.
    -   Don't allow users to add instructions to a glyph containing both
        a reference and contours. Or a glyph where a reference is scaled
        more than 200%. (tt doesn't allow these combinations so the
        references need to be copied inline)
    -   Typo in remove overlap caused bad bug in feta26. Error
        introduced 15 Sept.
    -   Further work on what makes a spline linear.
    -   The utf7 output routine in sfd did not convert from utf8
        properly.
    -   Panov has found yet another error in simplify. Be really
        exuberant about turning splines that trace out lines into lines.
    -   Panov finds another bug:
        -   If we change the unicode value of a glyph, then we also need
            to change
        -   the unicode value of any references to that glyph.

    -   Panov presents four more bugs:
        -   If an sfd file contains an unencoded glyph, it will crash
        -   Force Encoding-\>Original will crash if there's a bdf font
            missing some characters (ie. the piecemeal display font)
        -   Goto Dlg tried to free an uninit value
        -   Goto Dlg contained a string initialized by latin1 rather
            than utf8.

    -   Hmm. the changedsincelasthinted flag doesn't apply to truetype.
        The equivalent thing (I guess) is not having any instructions on
        a glyph with splines.
    -   Panov wants a way to build up arrays using easier syntax than:
        create array, assign each element.
    -   Sometimes we would get both an EUC-CN and a GB2312packed entry
        in the Encoding menu.
    -   Create a plugin for GB12345, and treat it (in sfnt tables) as
        GB2312.
    -   Add a new scripting funtion: NearlyLines to convert almost
        linear splines to linear.
    -   Tweak AddExtrema so that it doesn't create Extrema points which
        are too close to the endpoints.
    -   Didn't terminate an array of answer strings to a question
        dialog.
    -   Fixed a crash in stem database.

-   28-Oct-2005
    -   More work on the mac install procdure.
    -   Redo the install documentation on the website & in the readmes
    -   Add a hack to the directory browser so that on cygwin getting a
        directory listing of "/" will include the magic (fake) directory
        /cygdrive (which gives access to the rest of the PC)
    -   Add a new scripting funtion: NearlyLines to convert almost
        linear splines to linear.
    -   Tweak AddExtrema so that it doesn't create Extrema points which
        are too close to the endpoints.
    -   I was dumping all opentype ligatures into an ofm(tfm) file. But
        I should probably only add 'liga' and 'rlig' ligatures.
    -   Omega has a bug where it thinks 0 width glyphs do not exist.
        Which means it thinks none of the combining accents, etc. exist.
        So force the width of any zero width glyphs to be the smallest
        positive width.
    -   When reading ttf/otf fonts, FF gave alternate substitutions (and
        multiple subs?) a tag of 0.
    -   Add two scripting routines to allow people to read & write
        strings from and to files. One string per file.
    -   The ClearTable scripting command parsed the table's tag
        incorrectly.

-   23-Oct-2005
    -   Try to make the Mac install a bit more mac-like by adding an
        entry to the X11 Applications menu rather than expecting users
        to start fontforge from the command line.
    -   David Binderman points out an out of bounds array reference in
        cvexport which has been there for years. Gleep.
    -   Add scripting commands for manipulating ttf instructions.

        I added the following new scripting functions:

        -           SetMaxpValue("item-name", value)
        -           GetMaxpValue("item-name")
        -           ClearInstrs()
        -           ClearTable(tag)
        -           AddInstrs(thingamy,replace,instrs)
        -           FindOrAddCvtIndex(value[,sign-matters])
        -           ReplaceCvtAt(index,value)
        -           GetCvtAt(index)
        -           PrivateToCvt()

    -   Daniel Gillmor points out there is no way to set the OS/2 Width
        field from a script. He then provided a patch with two new
        functions which does this. I realize there is no way to set any
        of the OS/2 values (except panose), and there should be (and to
        retrieve them too).

        I added the following new scripting functions:

        -           SetOS2Value("item-name", value)
        -           GetOS2Value("item-name")
        -           SetPrivateValue("item-key","item-value")
        -           GetPrivateValue("item-key")
        -           HasPrivateValue("item-key")
        -           RemovePrivateValue("item-key")

    -   A number of fixes for ofm files.
    -   When outputting mark-to-base lookups with multiple anchor
        classes, ff would put a base glyph in the coverage table several
        times if it was used by several mark classes. Bad.

-   18-Oct-2005
    -   KANOU points out that I was using too strict a rule for parsing
        svg polygons.
    -   OFM output was not working in fonts with lots of kerning
        combinations.

-   16-Oct-2005
    -   A number of fixes for ofm files.
    -   Add default 'nukt' "ligature" substitutions to appropriate
        Devanagari characters

-   15-Oct-2005
    -   The patch to the routine determining what glyphs got output
        broke bitmap only fonts.
    -   Ofm files didn't contain ligatures.
    -   The ofm patch broke tfm output.

-   12-Oct-2005
    -   Add support for generating & parsing ofm files (I hope)
    -   If I tried to generate a font from an absolutely empty fontdb
        (ie. a new one) then I'd get a stupid error about how .notdef
        was at encoding -1 and this was a bad idea.
    -   Add 4 new information types to scripting GlyphInfo
        \* LayerCount
        Number of layers in glyph (usually 2)
        \* RefCount
        Number of refs in glyph
        \* RefNames
        Returns an array of all reference names (may be 0 length)
        \* RefTransform
        Returns an array of all reference transforms
    -   Don't mark glyphs with widths other than 1em as being worth
        outputting (require widthset). Used to use both (because in the
        early days, before pfaedit moved to sourceforge even, the
        widthset bit didn't exist). Now there are too many cases w here
        glyphs are created with a width other than 1em (marks, glyphs in
        monospace fonts (where the space is anything but 1em)).
    -   When printing a type3 pdf font, give it a name. Not required,
        but so what.
    -   Patch from Michal Nowakowski. When editing truetype instructions
        using my prefix notation for numbers, there was a crash if a
        number needed a word (rather than a byte).
    -   Add some support for reading fonts out of a pdf file.
        -   Limited support for pdf type3 (no images)
        -   Only support (Hex, 85, Flate, RLE)Decode filters (no support
            for lzw, fax, JBIG, DCT)

    -   The routine to build the stem database (autohint) would set up a
        point database and then call a routine to convert all splines
        into a set of monotonics. But that routine could remove 0 length
        splines (and the points attached), which would mean our point db
        would be wrong.
    -   Stefan Wanger suggests some patches to fix memory leaks.
    -   Stefan Wanger gave me a type2 font which used type1 flex
        conventions (calling othersubrs, etc.) There is no othersubrs
        operator in type2, nor any place to store othersubrs
        subroutines. But it is easy enough to support, so why not. Warn
        that it's an illegal font, of course.
    -   Stefan Wanger gave me a font containing the utf8 byte order mark
        in a fontname ( in a CFF Name Index). PostScript says FontNames
        are printable ASCII. But it's easy enough to skip over it.
    -   Stepan Roh points out that in a monospace font, combining glyphs
        should default to the mono-width while in a proportional font
        they should default to 0 width (or perhaps 1 em-unit for
        compatability with old idiotic windows systems). Use the panose
        field to determine if a font is monospace.
        Actually ALL glyphs in a monospace font should default to the
        mono-space width rather than 1em.
    -   New dialog: Hints-\>Edit 'maxp'... Gives user access to number
        of functions defined, the stack depth, storage usage, number of
        twilight points, which ff can't figure out for you.
    -   Figured out how to make transparent images work on cygwin
    -   Michal Nowakowski points out that negative values are duplicated
        in cvt.
    -   Patch from Michal Nowakowski fixing crash when setting size of
        cvt table to 0.

-   29-Sept-2005
    -   Add utf8 entry points for many (ucs2) routines. Minimal ability
        to draw non-BMP glyphs now with [bdf fonts](nonBMP/index.html)
        with encodings: \*-UnicodePlane-1 (for plane 1),
        \*-UnicodePlane-2 (for plane 2), etc.
    -   Add a menu command to add values from the private dict into the
        cvt table (BlueValues, StemSnaps).
    -   The Edit cvt window usually failed to draw anything in itself
        when it popped up (subsequent refreshes were ok).
    -   Patch from Michal Nowakowski to improve memory usage in auto
        instr.
    -   Printing sample text was broken in fonts with no kerning
        classes.
    -   cygwin does very weird things with shared libaries, and we
        didn't support them at all.
    -   FontForge did not support the depreciated usage of endchar to
        mean (almost) seac in type2 charstrings. It should now.
    -   os2 typo linegap was not read out of sfd files.
    -   Display 'gai' files in the open dlg.
    -   I got some mnemonics wrong. Fix 'em up.
    -   bdftopcf will use the glyph encoded at 0 as the default glyph if
        there is no explicit DEFAULT\_CHAR. It seems happy with a
        DEFAULT\_CHAR of -1 to mean no default, so use that if we don't
        want glyph 0 to be the default.
    -   when outputting bdf, fnt or pt3 bitmap fonts with no outline
        font generated, we'd get filenames like foo-\*-13.bdf. Get rid
        of the "-\*".
    -   Support point numbering of composites even when not debugging.
    -   Michal Nowakowski points out that the cvt editor crashed if we
        changed the length of the table.
    -   Provide two new scripting functions:
        -   MoveReference(xoff,yoff,[ref-name/ref-unicode]+)
        -   PositionReference(x,y,[ref-name/ref-unicode]+)

        These search all selected glyphs, looking for any references in
        those glyphs with the given name/unicode value, and then
        translating the reference by (xoff,yoff) or positioning the
        reference absolutely at (x,y).
    -   ff failed to read horizontal metrics properly from a type2 CFF
        CID font. In most cases this would be masked by the fact that ff
        would correct the bad width values by reading the hmtx table.
        But if one had a bare CFF font, or a 'gai' font where there is
        no external source of widths, ff would get things wrong.
    -   Alexej Kryukov points out that most entries in the private dict
        should be scaled when we do a ScaleToEm.
    -   Fix a couple of problems with cid font display that "gai" fonts
        expose.
    -   Michal Nowakowski points out that I generated truetype
        instructions --- and then forgot to attach them to the glyph.
        Whoops.
    -   Loading extensible glyph information from a tfm file was broken
        by the encoding change.

-   19-Sept-2005
    -   ff did not read AAT classes (kerning classes, etc) properly. It
        read one extra element which could cause problems
    -   Cleanup svg output for kerning classes with no members.
    -   Out of bounds array reference in OS2FigureCodePages caused a
        crash on the mac.
    -   When loading a type1 font we failed to set the unicode encoding
        on seac references. This probably broke lots of things, it
        certainly broke replace with reference.
    -   Add a DefaultRoundToGrid scripting function to set the
        Round-to-Grid truetype reference bit (basically set it whenever
        we have a reference which isn't point matched).
    -   Add support for truetype point matching in references and anchor
        points
    -   Improve the debugging heuristic that notices when we've jumpped
        to a new routine to work better with composites
    -   If I attempted to debug a glyph with no instructions there was a
        race condition and if the race was won one way, ff would hang.
    -   We weren't numbering points in a composite. This was only
        obvious when we did a View-\>Show Grid Fit on a composite glyph.
    -   When debugging a composite glyph, ff forgot that some references
        are translated (or scaled or rotated), and failed to display
        this.
    -   FF failed to keep track of the truetype "RoundToGrid" bit which
        applies to references.
    -   In the Points window of truetype debugging, if the penultimate
        point of a contour was interpolated, then the contour boundary
        was drawn in the wrong place.
    -   Use to store debugging dpi/pointsize in the charview. Werner
        suggests that it be global (so different glyphs will all share
        the same defaults).
    -   Some Unicode code blocks have moved (probably those which only
        in the pipeline or some such), and some others have been added
        to the pipeline.

-   15-Sept-2005
    -   Can't use a subroutine to refer to a translated glyph which
        contains flex hints in type1 output.
    -   Hide another problem with rounding errors in remove overlap.
    -   Don't produce multiple warnings about the local encoding.
    -   In quadratic fonts the Remove Overlap menu item is disabled, but
        if you use the hotkey the command is invoked (with disasterous
        results).
    -   Typo in point info code to determine whether a hint mask
        contains conflicts (matched vertical hints against horizontal
        ones)

-   12-Sept-2005
    -   Added a scripting command DefaultUseMyMetrics() to set the
        use\_my\_metrics bit in old fonts.

-   11-Sept-2005
    -      When ff pastes refs from one font to another it tries to
        figure out the width of a glyph containing references from the
        width of what appears to be the base glyph. (because if you
        paste Aacute from one font to another, the size of the "A" glyph
        may be quite different in the new font. Using the width of the
        glyph in the original font would be wrong).

        There are two problems with this:

        1.  It didn't take forward references into account, and would
            use the original width rather than the modified width of the
            reference.
        2.  It would (probably) be confused by an Alphatonos where the
            width of Alphatonos is not the same as that of Alpha.

        instead figure widths out after all pastes have completed,
        looking at the use\_my\_metrics bit to get things right.

    -   Handle forward references to glyphs which will be pasted into by
        the current command (used to work, broken by the encoding
        change)
    -   Various fixes for pasting references from a font which has since
        been closed.
    -   Support the ttf "\_USE\_MY\_METRICS" bit on composite glyphs.
        This entails:
        -   Retaining it when reading a truetype font
        -   Setting properly when generating one
        -   Storing it in sfd files
        -   Giving the user a way to set it with the Element-\>GetInfo
            command

-   9-Sept-2005
    -   ff crashed when given a bdf font with multiple glyphs with the
        same name
    -   Try to avoid generating bdf fonts with multiple glyphs with the
        same name. This happened when a single glyph was mapped to
        several encodings, a concept bdf doesn't support. Now when it
        looks like this will happen we rename the glyph.
    -   Uninitialized variable in dependant sub-menu (broken by encoding
        change)
    -   Pasting a reference into a font which did not contain the
        referred glyph did not give you the option of copying the
        original outlines any more. (broken by the encoding change)
    -   Merging fonts where glyphs had multiple encodings caused
        crashes.
    -   I'm very old fashioned. I like having error messages on stderr.
        But far too many people don't see them there. I guess they
        invoke fontforge directly from X with stderr directed to some
        invisible console window. Well create a little window to contain
        warning messages about font errors (for instance when reading an
        otf font we might complain about glyphs out of bounds, etc.)
    -   Add support for postscript bitmap fonts. This means:
        -   Ability to parse (simple forms of) the imagemask ps operator
        -   Code to detect that a type3 is a ps bitmap, and convert it
            into a normal bitmap font that people can edit.
        -   Bitmap output as a ps type3 font (using imagemask)
        -   Fixing a bug in my output routines which worked fine for
            images in eps files, but failed horribly if that same code
            was stuffed into a charproc and executed on demand.

    -   -   ff could not handle an encoding specified as a simple array.
        (Not allowed in typ e1 spec, but obvious for a type3)
    -   And ff's handling of any type3s was broken by the encoding
        patch.
    -   If a font contained fewer than 256 glyphs, then ff failed to
        load a format0 cmap subtable properly.

-   4-Sept-2005
    -   In fontinfo, changed the tab "TTF Values" to be "OS/2",
        consolidated the Panose tab underneath it. Added many more
        fields, almost all of OS/2.
    -   Fixed a number of uninitialized variables, at the instigation of
        Pavel Roskin.
    -   Applied several patches from Pavel Roskin.
    -   The scripting WorthOutputting command insisted on an argument,
        even when it should not have.
    -   Scripting SetCharCnt command has been broken since the encoding
        change.

-   31-August-2005
    -   The mac fix for 25-Aug wasn't quite enough.
    -   I used to maintain a hidden value of the os2 linegap. This
        didn't change when users set linegap with font info, leaving
        users annoyed.
    -   It used to be that both the Hint-\>Add Hint and Hint-\>Create
        Hint commands would destroy all hint masks. Now we update those
        hint masks appropriately.
    -   The "Original" encoding was broken, and reencoding to it gaves
        us 256 blank glyphs before glyph0. Sigh.
    -   The CodeRange bit for symbol doesn't mean the font contains any
        standard set of "symbol" glyphs, but rather either that it has a
        3,0 cmap sub-table, or that there are glyphs mapped to
        0xf000-0xf0ff in the 3,1 (unicode) sub-table.

        Setting this bit should give you a symbol encoding as well as
        all the other encodings you've set bits for. It doesn't work
        under windows. It doesn't work. TrueType fonts do not provide a
        symbol encoding, while 'CFF ' fonts only provide a symbol
        encoding. But hey, let's support it anyway!

        change View-\>Goto to know about this range as MS Symbol.

    -   Importing an eps file (or pasting the x clipboard) made use of
        an uninitialized variable. (introduced 7-Aug)
    -   Cleanup pasting references from one font to another (gave some
        very strange results when pasting refs with no unicode
        encodings).

-   25-August-2005
    -   Recode the mac resource fork routines so that they no longer use
        the FSSpec structure. 10.4 complains about it.
    -   Bug in mm font charstring generation.
    -   If a font contained mac feature setting names, then when ff
        generated it, ff would produce duplicate entries in the 'name'
        table for these guys. One for the name in the font itself, and
        one for the name ff thought that feature setting should have.
    -   Nobody else puts apple unicode names into the 'name' table so I
        probably should not either. Adobe says one should not. Apple's
        website implies one should -- but Apple doesn't and its ttf
        website is not very accurate.
    -   When ff generated a ttf/otf font with applemode set and opentype
        off then the font would have version 'true'. Which means windows
        would reject it. That's probably not a good idea given that this
        situation is default on the mac -- even if we don't have a
        GSUB/GPOS table we should at least let the glyphs show on
        windows.
        On the other hand some people might want to make fonts that only
        work on macs. So add a configure flag.
    -   ff couldn't undo changing the lig carets (if it weren't compiled
        for multilayer)
    -   Copying a pairwise positioning left memory in a bad state.
    -   Coalesce all lookups with the same feature & script lang. This
        makes ATM happy about kerning on windows.
    -   When rasterizing a multilayer font we would sometimes get
        warnings from the stroker about how the stroke self-intersected.
        Get rid of those warnings.
    -   Pasting from a multilayered font into a normal one crashed
    -   If an order2 font were turned into a PS font, then characters
        with hint conflicts got no hints.
    -   Makers of fonts on the mac often use out of bound GIDs as flags
        in contextual su bstitutions. What I have seen is that one
        sub-table will insert such a "glyph" w hen a match is found, and
        then the next sub table will remove the flag, and perf orm
        subsequent transformations. This is important on the mac because
        there is a limited number of substitutions that can happen once
        a match is found, but if a match is found at the start (ie. the
        match being some magic marker glyph) then u nlimited
        substitutions are available. When ff first stumbled on these
        fonts it crashed, then it treated a gid\>glyph\_cn t as an error
        (and so it ignored the substitution). I've just put in code that
        c reates dummy glyphs for all these bizarre GIDs so (I hope) the
        font will work af ter passing through ff (only there will be
        some real blank glyphs at the end of the font rather than
        vaper-ware glyphs).
    -   The Active Hints pane (of Point Info) didn't always work if a
        glyph had more than one contour.
    -   Be more canny in the use of subroutines for references in
        type1/2 output.
    -   When generating contextual lookups, ff did not set the lookup
        count between gpos and gsub. So if a font had both contextual
        gpos & gsub elements ff got confused.
    -   The code for cff encodings (ie. in bare cff non-cid fonts)
        didn't handle multiply encoded glyphs
    -   Change the default color of the prev control point (so it's
        easier for me to see)

-   11-August-2005
    -   The configure script did not find libfreetype when it lived
        (solely) in /usr/X11R6/libs
    -   On the Mac, menus incorrectly suggested using Cmd rather than
        Ctl. (Cmd used to work on earlier versions of the X server, but
        now it is snagged by the X11 menubar itself.)
    -   ff uses the Alt/Meta key to alter the behavior of some tools
        (magnify, ruler, pointer, pencil, etc.) in the editing windows.
        This doesn't work well on the mac. First there is no real
        Alt/Meta key. If we contemplate using Option or Command it will
        generally already be used to turn the single button mouse into a
        three button mouse (Option - mouse =\> button 2, Command - mouse
        =\> button 3). So instead use the CapsLock key.

-   9-August-2005
    -   The big5 encoding stopped at 64000, which confused routines
        which expected unencoded glyphs to start at 65536.
    -   We would crash when reencoding a font with enough unencoded
        alternate unicode code points.
    -   The code for creating an 8/16 cmap subtable didn't work.
    -   ff would crash if it had two windows open on the same font and
        one got reencoded
    -   Didn't set the length of the format4 'cmap' sub-table, so the
        offset to the format12 (32bit unicode) table was wrong.
    -   ttfcopyfile can complain about a ttf table offset being wrong.
        Give it the info so that it will now tell us which table has the
        wrong offset.
    -   Uninitialized variable in metricsview when creating a popup
        window.
    -   Redo the ttfnames pane of the font info dlg. Now show the names
        as an editable list.
    -   Histogram dlg still used wrong encodings for selected glyphs
        when historgrams invoked from Hints menu.

-   7-August-2005
    -   SelectIf failed when passed an encoding which was out of bounds
    -   Added a new scripting command: ToString
    -   Using the X clipboard to paste a glyph into a glyph that
        contained stuff caused a crash.
    -   Using the X clipboard to paste a glyph with references or with
        multilayer did no t work.
    -   None of ttf, otf nor svg got multiply encoded glyphs output
        properly.
    -   FF screwed up memory when creating ligatures from an svg font.
    -   Merge fonts was writing to bad memory.
    -   FF was confused by a strange MM font
    -   FindExistingSlot should understand altuni.
    -   Font View didn't display current unicode of multiply encoded
        glyphs. (same for popups).
    -   Still having problems generating type1 code for complicated
        reference glyphs.
    -   Retain knowlege of multiple unicode encodings for some glyphs.
        Used when a glyph has multiple encodings and is reencoded.
    -   Add back an option to compact an encoding. It's not the same as
        the old compact which kept track of the former encoding. This
        just compacts, user must explicitly reencode.
    -   Force encoding didn't work if the new encoding had more slots
        than the old.
    -   FF also failed to parse glyph based contextual lookups properly

-   3-August-2005
    -   FF failed to parse class based contextual lookups properly
        (contextual chaining lookups were ok)

-   2-August-2005
    -   **The OS/2 ulCodeRanges field has been broken for a long time,
        and has failed to mark the presence of any latin code pages.**
    -   The ulCodeRanges field never set Vietnamese, TradChinese, Mac
        nor PC OEM
    -   FF did not support EUC-CN, ISO-2022-CN, ISO=2022-KR iconv
        encodings properly.
    -   Work around a bug in iconv's support for CP1258
    -   Put some code in to warn users about unknown language/locales in
        the ttf 'name' table.
    -   Enter some new language/locale codes for ms.
    -   Crash when moving the end of an open path in an order2 font.
    -   If one loaded an encoding specified by codepoint and then
        cancelled the dlg which asked for a name for that encoding, then
        ff would crash.
    -   Don't use Adobe's glyphnames when they are obviously wrong (use
        uni???? instead)
    -   Add (better) support for the new dotlessj
    -   Put a check into the context chain dlg to make sure that people
        don't add sequence/lookup pairs where the sequence number is too
        big.
    -   Make class be the default format for contextual/chaining
        substitutions rather than coverage tables.
    -   **The format of the LineBreak.txt file changed with Unicode 4.1,
        so all the line break info is wrong (essentially lines never
        broke in text fields).**
    -   Reference to bad memory when creating a popup in combinations
        list.
    -   Still problems in the 'name' table when Mac & Mac Unicode
        strings don't match.
    -   Use of the X clipboard for transfering glyphs resulted in a
        crash
    -   When generating an old-style 'kern' table (either OpenType nor
        Apple modes set) decompose all kerning classes into kern pairs
        as we do for AFM files.
    -   Scripting didn't have a way to generate a font with neither
        Apple nor OpenType tables. Add one.
    -   Oops. wrong default extension for otb fonts from scripts.
    -   Fix some potential crashes where loading font types left a new
        field unset.

-   28-July-2005
    -   **Redesigned the way encodings are handled. From the user's
        perspective Encodings are no longer controlled by FontInfo, but
        via an encoding menu.**
    -   If we create a bitmap strike in an empty font then change the
        fontview to look at the strike.
    -   The SetWidth command of FontView produced garbage defaults for
        empty fonts
    -   Don't set the hinting needed bit on: bitmap only fonts,
        multilayered fonts, stroked fonts nor quadratic fonts.
    -   Fix some problems with the generated names in File-\>Generate
        multiple
    -   The Save command failed to reset the font window's title (so it
        still looked modified)
    -   The enabled state of Encoding-\>Detach Glyphs was wrong
    -   FF still didn't allow two ligatures to be created for the same
        glyph (ie. it complained if you tried to make both "f + f + i
        =\> ffi" and "ff + i =\> ffi"
    -   Added a TypeOf command to scripting
    -   Added a GetPosSub command to scripting.
    -   Werner says negative widths and depths be set to 0 in tfm files.
    -   FontForge was generating an incorrect warning message. If a
        'name' table contains a duplicate entry for a given
        platform/specific/language/id that's an error in the font. But
        ff conflated mac names with window names and so was only
        checking language/id. So if the mac windows names were different
        (which is probably a bad design idea, but not an error) ff said
        it was wrong. It can also be caused by using a character in the
        string which is not in the Mac Encoding for that language.
    -   Don't set "Hinting needed" flag in bitmap only fonts.
    -   AutoHint had a crash if there were open contours in a glyph
        being hinted.
    -   Add a couple of browsers to the list to check by default.
    -   Using the kerning pair closeup dlg to create a new kerning pair
        caused a crash (eventually).
    -   When saving a block of ttf bitmap glyphs all with about the same
        metrics,
    -   Kern pairs were not scaled to emsize when loading from an afm
        file.
    -   Add a series of new selection commands, to the font view and to
        scripting:

        -   SelectChangedGlyphs
        -   SelectHintingNeeded

        (just to scripting)

        -   SelectSingletons
        -   SelectMoreSingletons
        -   SelectFewerSingletons

    -   Revert Glyph didn't work. One bug caused by multilayer, one
        caused by encoding changes, and one really old one.
    -   GetFontNames returned an uninitialized value on bad ttf files.
    -   Add some new scripting commands to access the TeX per-glyph
        fields.
    -   Werner suggested some improvements to tfm output.
    -   Cleanup behavior of generating ttf bitmaps in a script.
    -   I was attaching script/langs to lookups when parsing GPOS/GSUB.
        That wasn't good enough. Each sub-table and have it's own set,
        so attach script/langs to subtables as well. Still a flaw in
        that sub-tables could be referenced through severel extension
        sub-tables or directly and I don't unravel that complexity until
        too late.
    -   ATM which handles some kerning for otf fonts for Word, does not
        handle 'kern' features where the feature contains more than one
        lookup. So whenever we have a feature with multiple lookups try
        to compress them into one lookup with multiple sub-tables.
    -   Transform (in fontview) and Scale To Em do not scale the
        vertical advance.
    -   We didn't test the right thing when deciding where a subroutine
        containing refs began.
    -   Remove Undoes was broken by the encoding changes.
    -   When saving multiple, make sure we don't get extraneous kerns.
        (to glyphs not in the current sub-font).
    -   Make sure the blue lines (marking hints needing to be updated)
        get cleared properly.
    -   Some display problems in the SameGlyphAs command.
    -   The Apply Substitutions code did not consider the possibility of
        loops:
         a-\>b-\>c-\>d-\>a
    -   Werner suggests indicating multi-layer in the version string.
    -   Mark to Mark anchor classes should allow each mark glyph also to
        contain a base mark entry.
    -   Give unicode name data (in grey) for dotted names. (ie for
        A.super give unicode name data for "A", but in grey so it stands
        out as modified).
    -   Add scripting routines to detach glyphs from the encoding and to
        remove them from the font.
    -   FF produced some very strange 'gasp' tables... depending on the
        bitmap fonts in the sfd and not on the bitmaps in the output ttf
        for one thing.
    -   Werner wants an Invert Selection command.
    -   The position of Coptic and Glagolithic has been shifted in
        Unicode 4.1 (shifted from some earlier proposal).
    -   Patch by KANOU, ttc files were broken.
    -   Some english language strings in the ttfnames pane of fontinfo
        where sort of bound to equivalent fields in the names pane. Make
        this clearer, and consistent.
    -   Werner thinks my error messages for scripts should be improved.
    -   Add a check in case sfd files contain unreasonable values for
        pixelsize, etc.
    -   Werner suggests a --dry \<scriptfile\> argument which does
        syntax checking without actually executing the script. I think
        it is trivial.
    -   Werner points out that the DSC Version comment has a very
        specific syntax:
         %%Version: \<version\> \<revision\>
         \<version\> is a real, \<revision\> is a uint. So we can't use
        the font's version string here (which might be anything).
        Instead we now generate a version comment
         %Version: \<string\>
         rather than a DSC Comment.
    -   We used to assign a unicode value to ".notdef"s when reading ps
        encoding file, if the encoding was in the region of control
        chars (so location 1 would get uni0001, while location 65 would
        get -1). Seems inconsistent.
    -   Oops. I failed to provide a mechanism to add other iconv
        encoding names into my menu.
    -   Code to support group display.
    -   Was not reading ps encoding files properly.
    -   Remove encoding should always be available.

-   19-July-2005
    -   Extend to Unicode 4.1
    -   Change to configuration system to allow relative pathspecs for
        --with-freetype-src didn't work.
    -   Context chain dlg had problems with empty patterns (no terminal
        NUL in empty string used to represent them)
    -   The [EditData] button in contextual fontinfo pane was disabled
        due to reasons which are no longer valid..
    -   Transforming by a negative scale factor screwed up the hints.
    -   Add move up/down buttons to the kerning class dlg (class lists
        area) Use the selection from the class lists to highlight
        offsets.
    -   Print sample did not handle kerning by classes.
    -   When we had: a glyph which contained refs where that glyph was
        itself used as a reference in another glyph and all glyphs
        (except the last) lived in subroutines then we got multiple
        declarations of hints and the middle glyph was translated from
        where it should have been.
    -   When changing lists they should not scroll back to the
        beginning.
    -   Various fixes regarding hints: changing hints should set the
        char changed flag changing a glyph should mark all glyphs that
        refer to it as having out of date hints display out of date
        hints in font view. hints weren't being preserved (and should
        have been) in charview in Paste and transform.
    -   Apply Substitutions was badly broken when ff compiled with
        multilayer.
    -   Kern Pair dlg looked at garbage memory when it closed (and
        crashed sometimes).
    -   ff decides whether to add a 'gasp' table to a font based on
        whether the font has instructions or not. ff's own ttf fonts
        contain instructions in .notdef but nowhere else, so ignore
        .notdef when making this check.
    -   One more attempt to rule out absurd results in simplify().
    -   if the lsb/rsb dlg was given a negative value it complained
        about negative widths. (whether the width would have been
        negative or not).
    -   \$italicangle has been broken since I added reals to scripting.
    -   The kernclass dialog did not handle deleted classes properly.
    -   Add ability to undo hints.
    -   Once again starting a browser on windows is broken.
    -   We didn't do a bounds check when indexing into the names array
        of an encoding (when building a character from scratch). If the
        index was huge the result was garbage, generally leading to a
        crash sometime thereafter.
    -   An open path consisting of a single point caused replace with
        reference to crash.
    -   Generating a postscript resource font on the mac from a script
        did not work.
    -   Werner points out that afm files generated by FontForge still
        claim to have been made by pfaedit. Oops.
    -   Didn't parse user defined encodings properly and often omitted
        the first glyph.

-   24-June-2005
    -   Improvements in the way type42 fonts where handled in printing.
    -   Fix a crash when parsing mangled cff files
    -   Marvelous triple bug:
        -   Adobe's Tech Note 5176 (cff format) says that a private dict
            is required. They mean it's required in a type1 font.
        -   Because of this I put a null private dict entry into my cid
            cff fonts.
        -   ghostview finds the null private dict entry and tries to
            read data from it even though it is of 0 length.

    -   Add postscript code necessary for loading a cff font to my cff
        font output.
    -   Fix some uninitialized variables in the display dlg.
    -   We didn't get DSC pages properly when printing a CID keyed font.
    -   The default (notdef) glyph generated by my palm output routines
        was a little wonky.
    -   The rle image reader in my sfd routines had an off by one error
        causing it to reject some images.
    -   We used to munch memory when loading empty glyphs from mac NFNT
        resources.
    -   It used to be that we didn't set the default background until
        the first font view window was opened. This meant that if we
        loaded a grey scale bitmap before opening a window (ie. from the
        command line) then that bitmap's clut would be relative to white
        rather than the appropriate background.
    -   Add some code to protect against badly generated bitmap strikes
        in sfnts.
    -   vhea & vmtx tables were generally wrong in otf fonts (unless the
        last full vmetric happened to be the last full hmetric). Also
        fix problems with cid hmtx output.
    -   The sfd reader looked in the wrong place for sli information in
        cid keyed fonts.
    -   Damn. Default output (for stdout) encoding never gets
        initialized when in a script.
    -   I realized a few months ago that there is a difference between
        encodings based on names and encoding based on unicode
        codepoints. Unfortunately I was only saving encodings as though
        they were based on names (generating default names if
        necessary). This patch retains the distinction even when
        encodings are saved to the preferences folder.
    -   AddAccent behaved differently when passed a glyphname and a
        unicode code point. In the first case it used the glyph
        specified. In the second it performed an arcane search which
        would not always use the specified glyph (left over from the
        days when it was important to use a glyph in Adobe Standard so
        you could do a seac).
    -   When debugging composite glyphs ff failed to notice when we
        switched from one glyph to another and so failed to reset the
        instruction list to those of the new glyph.
    -   Problem with cubic to quadratic spline approximation. Fixed by a
        more careful comparison between original and resulting spline.
    -   Kerning (and Anchor positioning) didn't work when printing to
        pdf.
    -   Won-kyu Park points out that ff's internal utf7 parser (deep in
        the guts of sfd.c) only parses utf7 strings as produced by ff.
        He took a utf7 string produced by python and inserted it and ff
        could not read it. He provides a patch to fix the problem.
    -   If we got an invalid second order spline, let's fix it up into
        some vaguely reasonable form, so the poor user doesn't keep
        getting errors.
    -   Extra "-" in type42 header removed.
    -   The anchor dialog was all screwed up.
    -   The test in show att that all components of a substitution
        existed failed to handle a trailing space.
    -   Make page Up/Down work in Show ATT
    -   Sometimes the simplify algorithem fails to converge.
    -   When generating a tfm file the width (height, depth, ic) table
        was being scaled twice.
    -   Remove a NaN that occurred when moving quadratic splines.
    -   Oops. The unicode code point of a glyph was restricted to BMP by
        Glyph Info dlg.
    -   Werner gave me a font where the glyphs were not properly
        ordered. So you can't tell the length of a glyph by
        loca[i+1]-loca[i]. The data appear valid in spite of that. So
        put in a warning for this particular case (we were generating a
        warning, but it wasn't as meaningful as it might be.)
    -   Make View-\>Show ATT aware of the mark attachment class info so
        it can show the classes.
    -   When interpolating to quadratic fonts where the two designs
        didn't match then the various possible errors gave us bad
        splines: Different numbers of points on the paths meant that the
        control points at the end (after we reached the end of the
        contour in one design but not the other) didn't match. Different
        designs meant that interpolating a line (with no control points)
        to a curved spline again produced nasties.
    -   Drag and drop was broken.
    -   Extend lookup flags support to include mark attachment classes
        (as defined in GDEF).
    -   Bad argument type checking on the AddAccent scripting command.
    -   Infinite loop in a rare case involving a flex hint at the start
        of a contour.
    -   The merge fonts command would crash.
    -   Problems parsing some bare cff fonts.

-   2-May-2005
    -   Add support for Mark Classes.
        -   New pane in Font Info to create them
        -   New field in the feature tag dlg to use them
        -   Input/Output routines

    -   Drag and drop was broken
    -   Infinite loop in some bizarre cases when generating a hinted
        opentype font.
    -   The Merge Fonts command was broken
    -   The scripting command: AddAccent checked for the wrong argument
        type
    -   ff generated an error when loading some bare cff fonts.
    -   Store desired fontview sizes in prefs file
    -   Add a tweak to make the mac's dynamic loader look for fink
        libraries
    -   Problems parsing bare cff cid-keyed fonts
    -   recognize that code page 932 is a variant of SJIS
    -   The feature tag 'nutf' is an obsolete name for 'afrc'
    -   Add a couple of new scripting functions
        -   Int() which casts its real/int/unicode argument to int
        -   UCodePoint() which casts its real/int/unicode argument to
            unicode

    -   scripting CharInfo no longer creates the glyph it is asked about
    -   WorthOutputting/DrawsSomething can now be applied to the current
        selection
    -   When using the freetype rasterizer don't do an automatic close
        of open paths.
    -   For SCWorthOutputting I used to check both that !widthset and
        width==em-size. Remove the em-size check, should be redundant
        and somethimes (marks) is wrong.
    -   The various FindBounds routines didn't pad stroked fonts
        appropriately
    -   Discrepency in docs and code on spelling of scripting
        Auto[tT]race command. Accept both variants
    -   A debug statement was left in the ps interpreter
    -   Make the help command look for japanese docs in the ja locale
    -   Add a select fewer scripting command
    -   Fix some problems with custom encodings
    -   Support '\\r' and '\\r\\n' as line-endings for backslash
        continuation
    -   New version of Japanese UI
    -   The kerning pair dlg would sometimes fail to display a pair when
        searching on the second char of the pair.
    -   Danish translation of some style names, courtesy of Anders Lund
    -   Fix some problems with SJIS encoding
    -   The point info dlg was quite unusable if you typed in somethng
        which wasn't a number
    -   When in debug mode display pointer position in pixels
    -   Point Info had problems with order2 splines
    -   The instruction pane of the debug window was interpretting
        keystrokes it should not have
    -   Peter Selinger has changed the way potrace is built so it no
        longer uses cygwin (it uses MinGW instead). This means ff can't
        pass it the name of a temp file as '/tmp/foo' because (on
        windows) /tmp is a cygwin fiction. So continue to put the file
        on cygwin's /tmp, but cd to that directory and then pass the
        bare filename.
    -   Add some more greek PUA small caps
    -   Add scroll bars to debug windows which lacked them
    -   Add a gloss window which explains what a ttf instruction is
        going to use and what it is going to do.
    -   Was using the wrong accent to build cyrillic breves.
    -   Remove the adobe private use defs from libgunicode and put them
        in fontforge.
    -   ff had problems reading pfm files containing kerning pairs using
        non-existant chars
    -   Add pixels per em in register view.
    -   No contours in twilight zone
    -   When generating tt fonts we did not set bit 8 in 'head'.Flags.
        This gives bad results when ppem is not an integer
    -   When reencoding to adobe standard (or any encoding where glyph
        names are more important than code points) make sure we use
        glyph names rather than code points (so "f\_i" is not in
        AdobeStd while "fi" is. But they map to the same code point).
    -   When creating a debug window in a glyph with no instructions (or
        in which 'gasp' has turned off hinting) we used not to rasterize
        it.
    -   Script/lang count was wrong in a number of places
    -   Oops, the transform dlg and menu both used the "round to int"
        string. Then I changed what it looked like in the menu, a change
        which is not appropriate for the transform dlg. Add a new string
        just for the dlg.
    -   Tavmjong Bah added something to the "ypogegrammeni" list.
    -   Fix problems with multiple text fields in the same window all
        wanting input contexts (for input methods).
    -   We generated ligature code in morx for ligatures that were not
        worth outputting.
    -   Pierre Hanser points out that a recent change to SetWidth broke
        the scritping SetWidth command.
    -   Yet more effort to remove rounding errors from remove overlap.
        If a control point causes a slight overshoot we get an
        unexpected extremum very close to one of the endpoints. If it's
        close enough this can cause problems. Tweak cps so this does not
        happen
    -   Solaris stores isnan & friends in ieeefp.h not in math.h
    -   Add scripting access to standard math functions (trig, exp log)
    -   Unary minus didn't work on reals
    -   The recalculate bitmaps button in bitmap view was getting
        munched when we updated the cursor position.
    -   CharInfo("BBox") returned gibberish

-   9-Mar-2005
    -   Deleting a glyph class within a kerning by classes object caused
        a crash
    -   Added some support for palm bitmap fonts
    -   Replace with reference only replaced the first instance.
    -   The Options dlg behaved oddly with respect to Apple & OpenType
        modes
    -   When given a glyph with conflicting hints for which the first
        contour contained no hints, then in type2 output the glyph was
        drawn at a strange offset from its correct position.
    -   When generating an opentype font from a script, and specifying
        flags, the round coordinates flag was ignored
    -   When generating a font from a script using the default flag
        setting, we would always generate afm/tfm/pfm files
    -   KANOU pointed out that the stroked font import glyph command
        only worked if multilayer set.
    -   Added a preview bitmap to eps files.
    -   In a bitmap only font the font metrics menu items behaved in
        unexpected ways (as if they referred to a postscript font rather
        than the bitmap fonts)
    -   Various fixes to make importing stroked eps files into stroked
        fonts work better.
    -   KANOU requests a preference item to turn off use of freetype in
        font view.
    -   Fix more rounding errors in remove overlap.
    -   Fix some problems in the routine which finds roots of an
        arbetrary quartic.
    -   The remove bump option of simplify could screw up memory.
    -   Remove overlap got unhappy about control points which caused a
        very tiny overlap between adjacent splines
    -   Redo from the fontview usually caused a crash.
    -   KANOU provides a MakeLine scripting command
    -   If TYPE3 (multilayer) was not enabled, there was a flow of
        control through a function which did not return anything.
    -   Recovery files did not contain multilayer marks which lead to
        strange behavior and crashes
    -   Converting a font to multilayer caused a crash if there were
        outline glyph windows open.
    -   Make the encoding for scripts be utf8 consistently
    -   Allow the scripting Export command to take a format spec
    -   Add support for reals to the scripting language
    -   NearlyHv{Cps,Lines} scripting commands erroneously complained
        about too many args
    -   ff had a bug when outputting otf contextual ligatures
    -   Fix various crashes and infinite loops involved in parsing bad
        font files.
    -   ff had problems with user defined encodings.
    -   Made ff work if the psuedo-type "real" was defined to be a
        double.
    -   the string += concattonation operator in scripting screwed up
        memory
    -   Problems with -c \<arg\> syntax
    -   The font type detector could fail to notice an svg file as such
        if it began with a byte order character.
    -   Ord didn't do proper type checking on its second argument

-   9-Feb-2005
    -   Use freetype's FT\_Outline\_Get\_Bitmap to make freetype
        rasterize from our internal data structures. Use freetype by
        default for the fontview and metricsview (except in some cases).
    -   The bitmap dlg didn't work for multilayered fonts when told to
        use freetype to rasterize.
    -   If we had a contour nested inside another, and did an Overlap
        Exclude with the nested contour selected, then that contour was
        not excluded.
    -   The []Correct Direction check box when importing PostScript,
        didn't do anything. (or rather it did, but got overrulled later)
    -   In bitmap only fonts, bitmaps created without moving the width
        line would get lost.
    -   Added a scripting command "SelectByColor"
    -   Don't apply transformations to glyphs which aren't worth
        outputting
    -   Moving control points with the get point info command had
        problems in quadratic splines.
    -   When adding type42 support I broke multiple master support.
    -   Werner provided a patch to add a trailing newline to my type1
        fonts.
    -   Support for PaintType==2 and stroked fonts.
    -   Various problems with the clustering command
    -   Oops, somehow a patch reverted and things didn't work on systems
        without iconv
    -   worked on a couple of other configuration problems for the mac
    -   Some people install libraries without headers. Be prepared.
    -   Uniscribe (MS unicode text layout routines) may ignore either
        the GPOS or the GSUB table depending on the script, and may even
        refuse to use the font at all if it doesn't have the right stuff
        in GPOS/GSUB. A Hebrew font must have both a GPOS and a GSUB. If
        it doesn't the font is not used. A latin font need not have
        either, but if it doesn't have GSUB then GPOS won't be used.
        So the script sub-table of both GPOS/GSUB should contain all
        scripts used in either (rather than just the scripts used in the
        current one).
    -   The AddATT scripting command didn't understand Nested.
    -   Add a cli argument "-c" to introduce a scripting command in an
        argument.
    -   Someone ran ff on a solaris box without iconv. (Odd because
        iconv is there by default). FF ran fine (Odder, why didn't it
        demand the library?), but crashed when it tried to use a
        conversion which didn't exist.
    -   There's another ASCII map in Unicode (0xe0000-0xe007f).
    -   Allow user to supply their own OtherSubrs routines (Some people
        object to Adobe's copyright).
    -   Codes to handle identifying a loaded font by relative filespec
        didn't work.
    -   Change Add Extrema so that it only adds extrema if
        1.  The spline length is \>= em\_size/32
        2.  The extremum is an extremum of the entire contour containing
            the spline.

        (Behavior in the outline view when there is a selection remains
        the same. So if the endpoints of a spline are both selected then
        all local extrema will be added to that spline, no matter how
        long it may be).
    -   Patch by Ralf Stubner. Fonts without UniqueID had a bad syntax.

-   17-Jan-2005
    -   CapsLock now makes the arrow keys scroll in the outline view
    -   We lost count of hints when generating type2 fonts in glyphs
        with references to something containing hints which did not
        overlap. If we were unlucky, \<new-cnt+7\>/8 was different than
        \<real-cnt+7\>/8 and we ended up with garbage in the charstring.
    -   Add a TeX table to contain TeX metrics.
    -   TFM output was wrong. the TFtoPL doc says "
    -   reencoding with original encoding could create a glyph table one
        too small resulting in writing/reading garbage and an eventual
        crash.
    -   KANOU fixed a couple of problems in reading glyph names from bdf
        fonts.
    -   KANOU needed to disambiguate between "Point" a unit of
        measurement and "Point" a geometric object.

-   16-Jan-2005
    -   Added support for OpenType Device Tables (These allow you to add
        small corrections to things like kerning at a given point size.
        Often at small point sizes kerning and advance widths will round
        in such a way as to produce unpleasing results. Device tables
        allow you to correct for that).
    -   Add dialogs for kerning pairs and anchors to allow users to set
        device tables. Extend dlg for kerning classes for this.
    -   Neil Parker suggested a patch for panose values that didn't
        apply to latin fonts
    -   Doing a Get Info on a single point caused a crash on the mac
    -   Further attempts to improve spline approximation, underlying
        Merge & Simplify commands
    -   Relaxed simplify's definition of parallel so it will merge a few
        more straight lines.
    -   Make the behavior of Simplify More consistant across
        font/outline view. Simplify More can now set the default
        behavior for future simplify commands.
    -   Provide a menu command to round to hundredths of a em-unit
    -   Add a new facility to cluster coordinates to the same value.
        Useful as a prepass to Remove Overlap.
    -   Bug reading ligature data from a tfm file
    -   Add support for GPOS 'size' feature. Create a 'size' pane of the
        fontinfo dlg
    -   Replace with Reference had an interesting flaw. Consider the
        open and closed bullet characters. If the (single) contour in
        closed bullet matched the outer contour in open bullet then it
        would replace it with a reference. But this is incorrect as the
        two contours of open bullet need to be treated as a unit.
    -   Could get a bad memory reference in the font view if the mouse
        were to extend the selection outside of the window.
    -   Add a scripting function to return whether a file exists.
    -   In a Type1 font, if a glyph had no conflicting hints (and no
        flex hints) and got put in a subroutine, then we'd get no hints
        at all.
    -   Be more willing to generate format12 cmap subtables (unicode,
        non-bmp tables)

-   6-Jan-2005
    -   New Copyright message, etc. Get rid of pfaedit message.
    -   Simplify produced strange results on quadratic splines.
    -   Simplify had problems with tangent points
    -   Changing a point's type from a tangent to a curve usually had
        unexpected results.
    -   Add a warning message in remove overlap when user passes us two
        intersecting contours which are oriented in oposite directions.
        Unfortunately it also complains about some other things.
    -   The 18 Dec changes to remove overlap introduced an infinite loop
        in some rare cases. (When there is a gradient of 0 in distance
        function between two splines).
    -   In a conditional operator (like && or ||) in scripting where the
        second operand was not evaluated and the second operand
        contained a procedure call, then ff would crash
    -   Tweaked the point info dialog to show small offsets better
    -   Tweaked the merge command to behave better when merging tiny
        spline segments (where the length of the spline segment is so
        small that it should just be treated as a zero length spline and
        its slope ignored).
    -   Added an "Invert selection" command to the outline view, from
        Yoshiki Hayashi
    -   Pasting from the font view did not clear a glyph's instructions.
    -   New version of AutoHint. I've removed Diagonal Stem hints and
        mimum distance hints for now.

-   31-Dec-2004
    -   Ah, windows pfm files expect the metrics to be output in win
        latin encoding order, not in the encoding defined by the pfb
        file. (Actually there are other posibilities for encoding, but
        as none is documented, I must ignore them).
    -   ReplaceWithReference broke at some point
    -   Add an argument-pair to the ReplaceWithReference() scripting
        command to allow the user to specify the amount of error that
        will be accepted.
    -   When generating a Type1 font, if a glyph had a single reference
        to a glyph not in adobe encoding, and that glyph itself had a
        single reference (in adobe enc) and some splines, then ff would
        make a reference to the ref in adobe enc and ignore the splines.
    -   Upgrade to Adobe-Japan1-6
    -   Various fixes to svg output
        -   export glyph to svg didn't work
        -   multilayered generation had problems

    -   Ghost hints could get outside a glyphs bounding box in a type2
        font.
    -   The generated truetype unique id string had an off by one error
        in the month
    -   Add support for dashed lines in multilayered mode
    -   In Full Page Glyph printing, the glyph was offset slightly from
        where it should have been.
    -   Pasting a reference into a multi-layered font produced a very
        odd layer
    -   ff didn't update the metrics view if the user pasted the
        selection with the middle mouse button.
    -   if a character were not in the current encoding then ff would
        not display it in the metrics view (even if it were in the font)
    -   Make the behavior of control points at the ends of open paths
        more reasonable.
    -   The Point-\>Curve command did not adust control points
        correctly.
    -   The View-\>Display Substitutions had numerous problems.
    -   Fix several problems from unicode unification of accents. Many
        characters which are said to be based on cedilla actually use a
        comma, other characters said to be carons also use comma. Make
        the n-with-apostrophe character be treated as an accented
        letter.
    -   Werner points out that straight lines should generally not be
        simplified (as they will no longer be straight afterwards). Add
        this knowledge to the simplify command.

-   18-Dec-2004
    -   Added a raster debugger wndow
    -   Each time debugger starts, remember what debug windows were open
        last time it was used.
    -   Constraining the pen tool did not do what I expected
    -   If a glyph was encoded twice (or more) in a font, and an
        opentype font (or perhaps a bitmap only sfnt) were generated,
        then any glyphs after the second encoding would have the wrong
        width (ie. there would be an extra entry in the horizontal
        metrics table corresponding to a (non-existant) copy of the
        doubly encoded glyph)
    -   If a type1 font never defined .notdef but used it at least twice
        it the Encoding vector, then ff would crash.
    -   Updated Japanese UI (by KANOU)
    -   Werner found some crashes related to calling isalnum (etc.)
        using an index outside of bmp.
    -   More changes (I hope improvements) to remove overlap

-   13-Dec-2004
    -   Some fixes to the raster display of the debug window
    -   Conversion of cubic to quadratic had a rounding error introduced
        by -O2. Made it a bit more forgiving about rounding errors.
    -   Added two new buttons to the point info dialog to allow the user
        to walk around the current contour (Normally the Next button
        skips to the start of the next contour if you are at the end of
        the current one, the "Next On Contour" button returns to the
        first point on the contour)
    -   improve interpretation of some type3 fonts (including those
        produced by fontographer 4)
    -   patch by Yoshki Hayashi to fix mnemonic crash in layers palette
    -   Added a rand() scripting command
    -   Support backslash newline to break up lines in a scrpt
    -   The internal adobe standard encoding thought it was unicode
        causing strange effects
    -   Type3 fonts that set colour/grey didn't work
    -   Printing at 140pt tried printing 4 glyphs across although there
        was only room for 3
    -   At install tell pkg-config the verson of fontforge

-   3-Dec-2004
    -   If a cff file contained unencoded glyphs then ff would crash
        when loading it.
    -   When converting from cubic to quadratic splines, ff would
        sometimes produce a line when it should have found a spline
    -   During debugging of a ttf glyph, show what rasterization would
        produce if the current splines were used (highlight pixels which
        change)
    -   The debugger windows didn't always say "\<empty\>" when they
        should have.
    -   The debugger would often crash the second time we closed its
        window
    -   Asking for the script (as latin, greek, cyrillic...) of
        ".notdef" caused us to look at unallocated memory.
    -   We weren't labelling control points in the debugger
    -   debugger and grid fitter for tt fonts showed curved splines as
        lines
    -   Kerning pairs did not get scaled when changing em-size
    -   Add a preference for turning off automatic gotos as the user
        types in the glyph window
    -   Add a command to the glyph window to toggle between the two most
        recent glyphs used in that window (a mini history)
    -   Improved the points debugger window to show
        -   implied points
        -   whether a point is on or off the curve (normal or control)
        -   added a scroll bar

    -   Provide info on debugging points as mouse moves over them.
    -   Fix (an innocuous) reference to unallocated memory
    -   Added ability to insert an uninterpreted table into an SFNT
        -   New preference item: PreserveTables which lists a comma
            separated set of table tags which are to be loaded from SFNT
            files without interpretation (Note if ff thinks it
            understands a table it will parse it rather than preserving
            it)
        -   Scripting command LoadTableFromFile("tag ","filename")
        -   Scripting command SaveTableToFile("tag ","filename")
        -   Scripting command RemovePreservedTable("tag ")
        -   Scripting command HasPreservedTable("tag ")

-   22-Nov-2004
    -   Kevin Schoedel suggests a new scripting command DrawsSomething()
    -   Kevin Schoedel requests that PrintFont be able to print a string
        sample (as opposed to a sample file)
    -   Kevin Schoedel points out that type1 fonts stuffed into mac
        resource forks are to be read in resource order rather than file
        order (often the two are the same) and provides a patch to fix
        this.
    -   Change the way the default language/locale is picked in
        fontinfo-\>TTF Names
    -   Remember (across invocations) whether palettes should be hidden
        or not.
    -   Ignore NUL chars when reading PostScript strings (PS supports
        NULs in strings, I'm not going to bother, but I don't want to
        parse incorrectly because of them).
    -   ff lost the ability to Select("U+xxxx") or Select("=") from a
        script.
    -   Oops, the routine to read PostScript FontNames from a ttf file
        was broken by the encoding change.
    -   If a ttf file contained an erroneous composite glyph with flags
        indicating more components after the glyph had run out of data,
        then ff might attempt to read instructions also and have
        problems.
    -   If a font contains multiple ttf names for a given string in a
        language then allow the user to pick which one s/he likes best.
    -   Another case where a bad otf table crashes fontforge
    -   If a ttf/otf font does not contain a postscript FontName string
        in the name table, then ff's attempt to synthesize one out of
        fullname/familyname did not check for a valid name.

-   15-Nov-2004
    -   If ff started without a prefs file, then creating a new font
        would crash
    -   If a copyright string contained a newline then ff would generate
        bad postscript
    -   If user added a comment to an empty glyph then the comment
        wasn't saved in the sfd file.
    -   If ff saved a utf7 string to an sfd file (ttf names, etc.) and
        that string contained a hyphen that followed immediately after
        something that needed to be encoded in base64, then the hyphen
        would be lost.
    -   new french UI
    -   ff was (usually) setting the ascent/descent fields of the 'hhea'
        table to 0. When the font was drawn on the mac it was clipped to
        nothing. **Caveat: Old sfd files are still broken and there is
        no UI for fixing them. Instead you must edit them manually, and
        change:**

            HheadAOffset: 0
            HheadDOffset: 0

        to be:

            HheadAOffset: 1
            HheadDOffset: 1

-   12-Nov-2004
    -   ff would crash on postscript fonts where the encoding included a
        glyph name not defined in CharStrings (probably broken on
        12-Oct)
    -   More remove overlap work
    -   In the glyph window, when the scaled distance between the top
        and bottom of the window is less than 1 em-unit, then the
        vertical ruler was drawn with the top and bottom labels
        reversed.
    -   sfd files used to have a limit of 1023 characters in ttf 'name'
        table strings.

-   6-Nov-2004
    -   Encoding change broke prefs dialog

-   5-Nov-2004
    -   Encoding change didn't work on libiconv systems

-   4-Nov-2004
    -   Added a new scripting command: AddAccent() to add an arbetrary
        accent to an arbetrary glyph.

-   3-Nov-2004
    -   KANOU has a [Japanese version](http://khdd.net/fontforge-jman/)
        of this reference manual under construction.
    -   In MultiLayered mode, the "New Layer" menu item left a dangling
        pointer which caused a crash if anyone looked at the background
        layer.
    -   In MultiLayered mode, if one clicked beyond the last layer in
        the Layers palette, ff would crash.
    -   KANOU provided a patch to fix another crash in the layers
        palette.
    -   KANOU has provided a new Japanese UI.
    -   Made an addition to CharInfo() scripting command so user can
        determine the horizontal extrema of a glyph at a given vertical
        position. Similar addition for vertical extrema at horizontal
        pos.
    -   Add a scripting command (PasteWithOffset) to allow user to apply
        an offset when pasting. For building accented letters by hand.
    -   KANOU provides a patch to fix a problem in the new encoding
        stuff.
    -   Select(".notdef") usually didn't work.

-   28-Oct-2004
    -   Kanou noticed that ISO 15924 has been updated and provide a
        patch including new scripts.
    -   I have redone the way ff handles encodings internally. We used
        to depend on the encodings builtin to gdraw/gunicode. Now we use
        iconv() (if there is no iconv, then ff will use a dummy iconv
        which understands the encodings of gdraw/gunicode). Encodings
        are identified by name rather than by number now.
    -   Further fixes to the extremum detector
    -   Further fixes to remove overlap
    -   Added an extra argument to scripting RoundToInt, so that you can
        have control over what it rounds to (ie. round to hundredths,
        tenths, etc.)
    -   Added two new scripting commands NearlyHvCps() and
        NearlyHvLines() which look for control points or lines that are
        nearly horizontal or vertical and force them to be horizontal or
        vertical.
    -   Kanou provided a patch so that the GRadio.Font resource controls
        the font in the layers palette of the glyph view.

-   23-Oct-2004
    -   Remove overlap had problems with splines which made abrupt turns
        (ie. tiny splines after we found extrema points and divided the
        spline into bits between extrema)
    -   Remove overlap could munch memory
    -   The ruler tool showed all tiny splines as having a length of 0
    -   Autorecovery had problems with glyphs containing features (would
        complain about sli)
    -   KANOU wants to be able to scale greymap fonts
    -   removed routines from fvcomposit.c, metricsview.c that were
        duplicates of fvfonts.c
    -   Oops, the default mac filesystem isn't case concious either,
        extend the windows export patch to the mac.
    -   Simplify didn't have a very good extremum detector and would
        sometimes delete extrema.

-   14-Oct-2004
    -   Remove overlap had problems with tiny splines.

-   13-Oct-2004
    -   I notice (in Fontes & Codages) that the labels in the metrics
        view aren't translatable
    -   Fontes & Codages suggests that it would be nice if the glyph
        labels in the fontview could be something other than an image of
        the glyph (glyph name, unicode code point, encoding, etc.)
    -   Change the word "Character" to "Glyph" where appropriate.
    -   Move the Open Outline/Bitmap/Metrics commands to the Window
        menu, and change "Open" to "New".

-   12-Oct-2004
    -   We have a Spanish UI now, courtesy of Walter Echarri. Yeah!
    -   Support for loading type3 fonts (that ff produced) was broken.
        Note: ff is still unable to load many type3 fonts (any that are
        filtered, or that use images for example), but it should be able
        to read its own fonts.
    -   (I hope) minor change to the way .notdef is handled when reading
        postscript files.
    -   Added support for printing to pdf file
    -   (fixed a bug in pdf generation from the export command)
    -   Fixed various problems from turning off the multilayer bit in
        fontinfo
    -   KANOU needs a couple more strings disambiguated.
    -   Add support for generating type42 and type 11 (type42 cid)
        fonts, add support for loading type42 (but I'm not bothering
        with type11s) and use these guys when printing order2 fonts.
    -   Check to make sure the PostScript Fontname is valid when reading
        in a truetype (or svg) font (syntax doesn't enforce this), and
        if not warn the user and fix it up.
    -   Add some new scripting commands for handling MM fonts since
        someone seems to want them.
    -   Used to complain if there were more than one Unique Font ID in
        the truetype 'name' table. (because the OpenType list said there
        should only be one, else it would not be unique). But both Apple
        and MS ship with fonts containing multiple Unique Font IDs. God
        knows what that means, or when you pick one over the other...
        Anyway I changed my error into a warning.

-   30-Sept-2004
    -   I have rewritten Remove Overlap from scratch. I seems less
        likely to crash, but I'm not sure that in any other respect it
        is improved.
    -   In the character view the Remove Overlap (and Intersect and Find
        Intersections) now only work on selected contours, or, if no
        contours are selected then on all contours. This change makes
        these commands consistant with most other commands in the
        character view, but it is a change from past behavior.
    -   The Import scripting command has been extended to give the user
        control over the stroking flags (correct direction, remove
        overlap, handle erasers). And the background flag has been
        extended a bit to apply to other things than bitmaps.
    -   ff had a pointer dangling to a freed block after loading a font
        containing multiple versions of some greek letters.
    -   U+1D400-U+1D7FF are stylized variants of the latin and greek
        alphabets as used in Mathematics. The font view will now display
        (in the glyph header) the proper variant of the glyph (assuming
        it can find a font with that style).
    -   The AMS (American Mathematical Society) has their own
        interpretation of the public use area. FF now understands their
        glyph names as alternates for those glyphs, and has an AMS
        interpretation (under FontInfo-\>Encoding) that will make ff use
        those names in new fonts.
    -   Many of code points in the AMS PUA are reencodings of other
        glyphs. FontForge will automatically generate these reencodings
        for you.
    -   The AMS also describes how some TeX glyph names map to unicode.
        So include those names in our alternate list too (so we can map
        them correctly, not as a way of encouraging people to use them).
    -   Both the AMS defn. of the PUA and the Big5 defn. map characters
        which are properly in other unicode planes into the BMP. FF now
        understands this, and converting between a BMP encoding and a
        full unicode encoding will move things from the PUA to their
        proper unicode slot in higher planes.
    -   Find Problems thought that adjacent splines intersected at their
        common end-point. I suppose they do, but it isn't useful
        information
    -   In the char view, I used to blank out the status line when the
        mouse moved outside the window. But some of that info is still
        valid. So only blank out the meaningless bits.
    -   Kanou requests a disambiguation between two strings with the
        same label in English but different meanings in Japanese.
        (Vertical/VerticalWriting)
    -   The Point-\>Make Line command would crash if either of the two
        points was missing a previous or next spline.
    -   Pierre HANSER provides a patch to problems.c (it would crash
        when dealing with fonts with an encoding with \< 32 code points.
    -   Pierre HANSER provides a patch to merge fonts (it would crash
        when merging bitmap fonts.
    -   Closing a charview window with a docked palette could cause a
        crash if the cursor was moved quickly into another charview
        which needed a new cursor.
    -   The perspective icon had the wrong background
    -   Piska keeps complaining about the way ff handles 0 width
        strokes. He wants it to have zero width (disappear, I guess),
        but PS says it should be stroked as the thinnest line possible
        (not clear what this should mean in ff, I interpret it as a
        1em-unit stroke). But METAPOST uses a 0 width stroke in cases
        where it wants no stroking (with a fill) so in the special case
        of a fill with a 0 width stroke, turn off stroking.
    -   Use a different approach to approximating a set of points with
        fixed slopes at the end points. Used to do least squares (fixup
        slopes), least squares again (fixup slopes). Now I do least
        squares (fixup slopes), perturb the lengths of the slope vectors
        until we find the best fit.
    -   I was generating flex hints when I should not have done so. Add
        a heuristic so that ff doesn't add flexes to small circles.
    -   Failed to read long format pk bitmaps.
    -   Patch by Mchael Ghrken to make the Skew scripting command take a
        numerator/denominator style argument.

-   24-Aug-2004
    -   Oops, didn't get the expand stroke scripting patch quite right
    -   **Changed the way preferences are handled in scripts**
        -   By default preferences are no longer loaded when starting a
            script.
        -   Preferences are not saved in a script unless explicitly
            requested.
        -   Added 2 new scripting functions LoadPrefs() and SavePrefs()
        -   Added an environment variable FONTFORGE\_LOADPREFS to give
            the user control over loading of preferences.

    -   Used to have a preference item DumpGlyphMap. Now we have an
        equivalent flag in the Generate Fonts [Options] dialog.
    -   The SetPanose scripting command didn't work. MURAOKA Taro
        provides a patch
    -   It was not possible to get or set NewCharset preference item
        with GetPref/SetPref scripting commands. Now GetPref returns a
        magic number, which may be used in SetPref. SetPref will accept
        either a number or one of the encodings accepted by Reencode().
    -   If you copied a glyph feature from a glyph that didn't have that
        feature, and then did a paste ff would crash.
    -   Added two new tools to the outline character view. One allows
        you to rotated your glyph through 3dimensions (and project it
        back on the xy plane), the other allows you to do a perspective
        transformation.
    -   Extended the Transformation dialog to handle 3D
        rotation+projection. After all it's just:
        cos(y-axis-rotation)
        0
        0
        cos(x-axis-rotation)
    -   Add a Point of View dialog to do real perspective projections
    -   Remove the FONTFORGE\_CONFIG\_NONLINEAR flag, and enable the
        nonlinear dlg perminantly. I need some of its routines to do the
        perspective projections.
    -   There was a path through LoadEncodingFile (in a script) where it
        would silently fail.
    -   LoadEncodingFile would save default encodings even though it
        hadn't loaded them. It no longer does this, but now SavePrefs
        does it instead.
    -   Added the ability to see (and create) simple substitutions in
        the font view.
    -   The embossed box around the fontinfo dlg wasn't always in the
        right place

-   8-Aug-2004
    -   Zhang Lin-bo reports two bugs (which were really three)
        -   Expand Stroke failed when given a path consisting of a
            single point had a zero length spline returning to itself.
        -   AddExtrema falls into an infinite loop if the initial spline
            of a path needs an extremum added to it.
        -   Expand Stroke generates garbage output in some very obscure
            conditions.
        -   AutoHint crashes when given garbage input.

    -   Michael Gährken points out that ExpandStroke scripting command
        doesn't work for caligraphic stroking, provides a patch and an
        extension.
    -   KANOU provides a patch for BDFMakeChar in CID keyed fonts.
    -   Change the Shades palette in the bitmap view so that it shows
        what grey level is underneath the cursor.
    -   When the width is huge, then moving it causes it to wrap into
        negative values. It should probably stick at SHRT\_MAX instead.
    -   If one moves to a negative width and releases the mouse, an
        error message pops up warning of this. If you move the cursor
        around the width continued to change.
    -   If one moves to a negative width, and in response to the width
        warning says [No] then the width reverted to the wrong value.
    -   ff would crash on a postscript sequence containing "{}" if that
        was the first function defined.
    -   I got the locale wrong for Hong Kong
    -   If nothing was selected in the import dlg (or any of the file
        open dlgs) and the user pressed [OK], then the directory would
        be returned.
    -   Improved error message for Import dlg.
    -   In spanish various dlgs had buttons that were too close together
        (and similar problems)

-   01-Aug-2004
    -   ff did not generate amfm files correctly
    -   Changed the Merge Kern Infor (menu item and scripting command)
        to
        -   support pfm files
        -   detect file type from the file header rather than from the
            extension

    -   Added InterpolateFonts as a scripting command
    -   Added GetEnv as a scripting command
    -   The scripting \$fontversion and \$copyright psuedo variables
        broke when I added the fond name changes.
    -   More problems with tfm files.
    -   Fixed a couple of problems related to dialog sizing for
        different languages.
    -   In Windows 3.1 some chinese fonts were released with a ttf
        version of 2 (rather than 1). Add this to the list of supported
        TrueType/OpenType versions (see discussion on freetype mailing
        list, july 2004 for more info)
    -   Added both a menu and scripting command to copy kerning &
        substitution info from one glyph to another.
    -   FontForge fails to load some svg fonts properly (if they use the
        "t" directive within a path =\> quadratic splines, control point
        implied, relative to last point). Result is a nasty scribble.
    -   Windows file systems are not case conscious. The file names
        generated for Export use glyph names (which are case conscious).
        So on windows exporting "a" and "A" will overwrite the same
        file. (Add a "\$" in front of capital letters to distinguish).
    -   We were not scaling refs/images uniformly when we dragged
        corners. Instead we changed the sides by the same amount (this
        works for squares, but nothing else).
    -   XML does not allow backspace as an input character, even when
        specified by an entity. This means we can't specify the unicode
        code point for backspace in a an svg font (and many ttf fonts
        contain a blank backspace char, god only knows why).
    -   The Default ATT-\>Unicode decomposition didn't work.
    -   Added a new entry to Default ATT, Caps-\>Small Caps (and cleaned
        up lower case-\>small caps too).
    -   Eschew 0 width hints.
    -   Add support for localized unicode glyph names (currently only
        french is available)

-   3-July-2004
    -   Undoes in the Guide layer caused a crash (introduced with
        multi-layer)
    -   Fixed another problem with subroutine references in type1 output
    -   Preserve hhea.ascent/descent and some OS/2 values (no UI for
        these, but they are retained)
    -   KANOU provided two patches
        -   One to set the average Char Width field of OS/2 properly
        -   One to set the 'gasp' table so that Windows would actually
            use embedded bitmaps

    -   Added support (in build accent) to look for upper case and
        cyrillic variants of accents (use grave.cap rather than grave,
        use breve.cyr rather than breve) when building upper case or
        cyrillic letters.
    -   Points were not being properly renumbered if they were out of
        order (when editing in quadratic mode)
    -   When a character had a color attached to it, it looked very
        strange if the user changed it.
    -   Added an "x" to check boxes when checked
    -   FF did not realize that tonos should be treated as an accent (it
        is spacing, which confused ff)
    -   Cleaned up an ancient message in the nomen files. Used to be
        three separate strings, now one with format specs in it.

-   18-June-2004
    -   Point types were not set properly after conversion from
        quadratic to cubic splines.
    -   Several preference items were not being saved and were not
        accessable from scripts.
    -   Scripts could not set the resolution for bdf fonts
    -   Still having problems with references to references in type1
        subroutines.
    -   AutoTrace had problems with multi-layered mode.
    -   Enhance "ItalicConstrained" in the Character View to allow
        vertical constrains as well as those parallel to the italic
        angle.
    -   Build Accented Characters had problems when there were bitmap
        characters involved.
    -   Can no longer blindly rotate splinesets in type2 fonts to avoid
        an initial flex.
    -   Add three new problems to Find Problems
        -   Check for intersecting contours
        -   Check for mulitple glyphs with same unicode code point
        -   Check for multiple glyphs with same name

-   31-May-2004
    -   In the 19-May build I introduced a bug which could generate NaN
        values for control points.

-   29-May-2004
    -   The MergeKern scripting command didn't have the capabilities of
        its menu counterpart.
    -   Enhance the pattern matching capabilities on font names when
        loading kerning information from a mac FOND (there is no place
        in the FOND that names the styles, so best we can do is make
        reasonable guesses).
    -   When editing quadratic fonts (truetype), changing the type of a
        point to be a tangent caused the previous control point to be
        set the to same location as the next control point. Bleah.
    -   New versions of libpng will not automagically load libz when
        they are loaded. Needed a patch to load libz manually.
    -   Fixed a couple of bugs in contextual / chaining dialog.
    -   When reading PostScript arrays FF failed to parse negative
        numbers properly.
    -   Make it an error (which it should be) to create a mac postscript
        resource file without also generating an NFNT.
    -   Warn that NFNTs don't work under OS/X, warn that POST resources
        are probably depreciated.
    -   WinAscent/Descent were being saved incorrectly in sfd files,
        leading to bad WinAscent/Descent in t/otf OS/2 tables.
    -   Crash in ExpandStroke from a NaN when try to intersect parallel
        lines
    -   Improved Merge a little bit for quadratic splines

-   23-May-2004
    -   Added popups in the Open Font dialog to show the fontname(s) of
        any font(s) in a file.
    -   FontForge failed to load background images. A bug introduced
        24-Feb (part of multi-layer)
    -   Reordered the which glyph FF would pick when searching for
        accents. It used to use ASCII versions of the accents over those
        in the U+03xx range.

-   20-May-2004
    -   Bug in scripting change for mac families.
    -   Added a Paste After command (which isn't visible by default)
        which will allow you to build up words more easily.

-   19-May-2004
    -   Give the user access to the OS/2 fields WinAscent and
        WinDescent.
    -   Add a new command (Points-\>Make Line) which will turn a spline
        between two selected points into a line.
    -   Improve the behavior of defaulting control points so we don't
        get self-intersecting loops
    -   Add a mode to the pointer tool. Holding down the \<Alt\> key now
        means we don't join two open contours if they make contact while
        dragging.
    -   When loading an otf file and saving it as ttf, sometimes the
        space glyph would become zero width.
    -   Redid the way mac families were output. Should be more flexible
        under OS/X

-   9-May-2004
    -   Several problems with tfm files. Didn't handle tfms with more
        that 128 lig/kerns.
    -   Failed to set the r2l flag properly in 'morx' tables
    -   More typos in the ghost hint code
    -   Allow users to express error term of the scripting Simplify
        command as a fraction.
    -   The strings in the context / chaining dlg's initial pane were
        wrong
    -   Fixed some bugs in converting OT contextual substitutions to Mac
        state machines
    -   If we wanted to put a glyph with references into a subroutine
        (in type1 output) we failed miserably
    -   Added a new command
        [Edit-\>ReplaceWithReference](editmenu.html#ReplaceRef)(and a
        scripting version too), which searches all glyphs in the font
        for any selected glyphs, and for each embedded occurance it
        replaces the outlines of the glyph with a reference to it. This
        is because reading a postscript (type2 or type1) font generally
        loses all reference information.
    -   The documentation for OS/2.winAscent makes no sense. I shall
        ignore it and set winAscent to hhea.ascent
    -   Sivan says that hebrew kerning is broken again.
    -   The search dlg didn't work on quadratic (truetype) fonts

-   2-May-2004
    -   I've changed the colour of check boxes because people found
        black confusing
    -   FontForge read Italic Correction incorrectly out of tfm files
        and had minor problems generating tfm files.
    -   the kern class dlg had an uninitialized variable (introduced
        with the multiple master code I think)
    -   FontForge would sometimes crash when generating a GDEF table for
        some types of otf font.
    -   Pierre Hanser has updated the french UI, and pointed out some
        problems with the english UI.
    -   In a version of FontForge compiled with MultiLayer on, Pasting
        something containing a reference screwed up memory

-   25-Apr-2004
    -   AutoHint produced ghost hints for curved stems that sometimes
        were outside of the character.
    -   Fixed some uninitialized variables in MetaFont (but the
        algorthim is still flawed)
    -   FontForge had problems when the fontview was maximized.
    -   The 18-Apr patch for cubic-\>quadratic conversion had a bug
        which generally resulted in a crash.
    -   When flickering in and out of compacted mode, during a Generate
        Fonts, the encodings in the displayed bitmap could get out of
        sync with those of the font leading to a crash.
    -   Don't mess with the control points in point type conversion
        (corner-\>curve/tangent) when the they are already reasonable.
    -   Allow rectangles and ellipses to have separate settings of the
        center out flag.
    -   Add a dialog which allows you to specify exactly where
        rectangles/ellipses should go.
    -   Double-clicking on the scale/flap/rotate/skew tool brings up the
        transform dialog.
    -   Add a couple of entries in the transform dlg option menus which
        copy information from the last ruler measurement.
    -   Give the user control over how long the ruler window hangs
        around.

-   18-Apr-2004
    -   Fix a couple of bugs dealing with references in multilayered
        editing.
    -   Uninitialized variable in creation of 'name' table (introduced
        on 10-Apr)
    -   Edit-\>Merge didn't work properly on quadratic splines
    -   LCarets should have ignored the script assigned to them, but
        they didn't.
    -   Put in more protection against bad GSUB/GPOS tables. In
        particular mangal.ttf has a bad GSUB table (with erroneous class
        specifications).
    -   FontForge wasn't setting `'hhea'.caretSlopeRun` appropriately in
        italic fonts (should match `tan(italicAngle)`).
    -   Oops. Can do much better converting from cubic to quadratic
        splines. We were getting far too many linear segments.
    -   Our cubic-\>quadratic conversion could generate splines where
        the endpoints were less than 1 unit apart. Since ttf rounds all
        coords to ints, this meant we'd get the two endpoints on top of
        one another.
    -   When generating a truetype font from a cubic database, FontForge
        calculated 'maxp'.maxCompositePoints incorrectly.
    -   Gave the user control over when point numbers are visible (even
        for cubic fonts)

-   10-Apr-2004
    -   The flatten commands didn't preserve the ttf 'name' table nor
        the 'OS/2' table
    -   Redid the way 'name' table was generated, hopefully we do better
        for the mac now.
    -   the 'kern' table had a bad rangeShift value (it was the negative
        of what it should be)
    -   Pasting a reference from one font to another could crash if the
        destination font did not have the refered character.
    -   ".null" was appearing twice in the 'post' table when saving a
        ttf file a second time.
    -   Markus Schwarzenberg points out that the ScaleToEm() scripting
        command didn't work when given a single argument.
    -   Pierre Hanser points out that the version fix on 4-Apr had a bug
        that caused crashes on Macs (perhaps elsewhere).

-   04-Apr-2004
    -   Several more fixes for cff output.
    -   We had a bad habit of including extraneous hintmask operators in
        output
    -   Add a proper ff version (well, as much as my versions be proper)
        to postscript/svg output
    -   Patch from Kanou about reading format 2 bitmaps in a sfnt
    -   Patch from Kanou. MS requires a weird format for GSUB in
        vertical writing.

-   29-Mar-2004
    -   When Type1 output needed to output a reference as inline splines
        (as opposed to a subroutine call or using a seac command) then
        it would lose any translation applied to that reference.
    -   Patch to Type3 output from R.L.Horn
    -   FontForge used to crash when reading in a bdf glyph with a bad
        bounding box.
    -   Reading a kerning class from an sfd file when that class had
        more second character classes than first character classes would
        screw up memory and probably cause a crash.
    -   Attempting to edit a 'cvt ' table in a font without one caused a
        crash. Attempting to edit a 'cvt ' table in a font with one
        showed an empty table.
    -   Make scaling from the fontview apply to kerning and positioning
        data.
    -   Drawing a rectangle by dragging from center out didn't work
    -   Display phantom points when debugging. Be prepared to find
        either 2 (horizontal metrics) or 4 (both horizontal or vertical)
        depending on what version of freetype we've got.
    -   Bug in both reading and writing encoding format 0 of cff fonts.
        I forgot to ignore .notdef so everything was off by 1.
    -   If a glyph was used as a reference in another glyph, and we put
        it in a subroutine (type1 output), and it had hint conflicts,
        then the first group of hints never got output.
    -   In multilayered mode, the Revert Glyph command left memory in a
        potentially bad state. (If you immediately closed the charview,
        then nothing bad would happen, but if you tried any editing in
        it, then nasty things happened.)

-   21-Mar-2004
    -   When flattening a CID file fontforge lost track of the
        script/lang list (and other things) which caused bugs when
        dealing with substitutions
    -   When saving multiply, fontforge could free a fonts hash table
        several times
    -   When flattening by a CMAP file from a script fontforge could
        crash
    -   Added a CIDFlatten command to scripting.
    -   The "cleanup of OS/2" on 29-Feb actually broke WinAscent/Descent
    -   When loading a mac unicode string from the 'name' table,
        fontforge failed to convert the language correctly.
    -   When loading a mac contextual substitution statemachine,
        fontforge made egregious errors in guessing to what glyphs were
        usable for a substitution of the marked glyph.
    -   Added the current encoding to the font's window title (also
        display a flag to show whether the font has been changed)
    -   When moving points around on an order2 contour fontforge could
        end up with bad control points and would then produce annoying
        internal errors alerting the user to this fact.
    -   The CID Flatten commands did not work when the view was
        compacted.
    -   CharInfo had been deliberately disabled in CID fonts
    -   Show ATT didn't work with CID keyed fonts
    -   The preference mapping between mac and opentype small caps
        features was wrong.
    -   Werner found a strange bug in splinefill that I can't reproduce
        (and can't understand how it could happen) but the fix appears
        obvious.
    -   Add a command to show what glyphs use the current glyph in a
        substitution (so "A.swash" would show that "A" used it, and "i"
        would show that "fi" used it).
    -   Changed the extension shown in the Generate Fonts dlg for
        multiple saves to ".pfb". Put in a %s to make it obvious that
        more will be added to the name. Support people who want .pfa
        fonts too.
    -   The dialog for adding/editing correspondences between mac
        feature/settings and opentype features never went away.
    -   Disable the Default ATT menu if no char is selected in the
        fontview.
    -   FontForge sometimes had trouble drawing the correct rotated
        glyph in cid fonts on the display lines of the fontview.
    -   Changed the way names used in cidmap files, so there are new
        cidmap files now.
    -   The ShowAtt dialog could overwrite itself if there were enough
        aats in it. (and at one point the vertical scroll bar was set to
        the bounds of the horizontal scroll bar)
    -   Still getting the windows ascent/descent wrong. This time in CID
        keyed fonts.
    -   Add some new language translations for things like "Bold"
        (dutch, swedish, norwegian)
    -   Dragging and dropping a char from the font view into the char
        info dlg (to create a substitution) created a crash instead.
    -   Support more of postscript in the interpreter
    -   Our svg fonts pointed to a not-yet-existing dtd file
    -   Support for Apple's distortable fonts (sort of like truetype
        multi-master fonts)
    -   Depressing the control key now makes popups live longer (until
        the mouse moves).
    -   new command in MM menu: Blend to new font

-   2-Mar-2004
    -   Changed name from pfaedit to fontforge

FontForge was first released on 2-Mar-2004. An earlier version of the
program, called PfaEdit, was begun in Sept of 2000, released on the web
7-Nov-2000, and moved to pfaedit.sf.net on 21-Apr-2001.
