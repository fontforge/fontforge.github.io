---
published: true
layout: default
title: A meandering bibliography of font related things
---


-   [Font File Formats](#Formats)
-   [Unicode](#Unicode)
-   [Other Encodings](#Encodings)
-   [Books](#Books)
-   [Font Related tools](../../utilities/)
-   [Language codes](http://www.w3.org/WAI/ER/IG/iso639.htm)
-   [Country
    codes](http://ftp.ics.uci.edu/pub/websoft/wwwstat/country-codes.txt)

* * * * *

Font File Formats
-----------------

-   [PostScript
    Type1](http://partners.adobe.com/public/developer/en/font/T1_SPEC.PDF)
    -   [Supplement](http://partners.adobe.com/public/developer/en/font/5015.Type1_Supp.pdf)
        (discussion of multiple master fonts & counter hints)
    -   [Format](http://partners.adobe.com/public/developer/en/font/T1Format.pdf)
    -   [PostScript unicode character
        names](%20http://partners.adobe.com/public/developer/opentype/index_glyph.html)
    -   [PostScript Language Reference
        Manual](http://www.adobe.com/products/postscript/pdfs/PLRM.pdf)

-   PostScript Multiple Master
    -   [Type1 MM format specification (in the Type1
        Supplement)](http://partners.adobe.com/public/developer/en/font/5015.Type1_Supp.pdf)
    -   [Design
        considerations](http://partners.adobe.com/public/developer/en/font/5091.Design_MM_Fonts.pdf)
    -   [Naming
        requirements](http://partners.adobe.com/public/developer/en/font/5088.FontNames.pdf)
    -   Type2 (In March of 2000, Adobe removed multiple master support
        from Type2 and CFF files)
        -   [Type2 MM format
            specification](http://ftp.ktug.or.kr/obsolete/info/adobe/devtechnotes/pdffiles/5177.Type2.pdf)
            (In **OBSOLETE** type2 spec)
        -   [CFF MM format
            specification](http://ftp.ktug.or.kr/obsolete/info/adobe/devtechnotes/pdffiles/5176.CFF.pdf)
            (In **OBSOLETE** CFF spec)

-   [CID keyed
    fonts](http://partners.adobe.com/public/developer/en/font/5014.CMap_CIDFont_Spec.pdf)
-   [PostSript
    Type2](http://partners.adobe.com/public/developer/en/font/5177.Type2.pdf)
    -   [Compact Font Format
        Specification](http://partners.adobe.com/public/developer/en/font/5176.CFF.pdf)
        (CFF)
    -   For more information see under [OpenType fonts](#OpenType)

-   PostScript Type3
    -   [PostScript Language Reference Manual
        3.0](http://www.adobe.com/products/postscript/pdfs/PLRM.pdf)
        (see section 5.7)

-   PostScript Type14 (Chameleon)
    -   The PLRM (5.8.1) documents that this font format is
        undocumented.

-   [PostScript
    Type42](http://partners.adobe.com/public/developer/en/font/5012.Type42_Spec.pdf)
-   [Adobe Feature File
    (fea)](http://www.adobe.com/devnet/opentype/afdko/topic_feature_file_syntax.html)
    -   ([FontForge's implementation](../featurefile/)of this format is
        a superset of what Adobe accepts, and a superset of what Adobe
        documents. Neither can completely describe opentype. Adobe
        claims they will update the feat spec in late 2007).

-   [AFM](http://partners.adobe.com/public/developer/en/font/5004.AFM_Spec.pdf)
-   PFM
    -   I can't find microsoft's docs for pfm files any more, I think
        the format may be obsolete having been replaced by ntf.
    -   [Adobe's notes on PFM files for two byte
        fonts](http://partners.adobe.com/public/developer/en/font/5178.PFM.pdf)
    -   [Third Party
        description](http://homepages.muenchen.org/bm134751/pfm_fmt_en.html)

-   [NTF](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/graphics/hh/graphics/pscript_7twn.asp)
    -   This format is supposed to replace the pfm files above in
        windows \>2000. I can't find any docs on it.

-   [BDF](http://partners.adobe.com/public/developer/en/font/5005.BDF_Spec.pdf)
    -   [X11 Long Font
        Descriptor](http://ftp.xfree86.org/pub/XFree86/4.5.0/doc/xlfd.txt)spec
        defines standard X BDF Properties
    -   [ABF](http://partners.adobe.com/public/developer/en/font/5006.ABF_Spec.pdf)
        -- Binary format
    -   [Extensions to BDF for greymap support](../BDFgrey/)

-   True Type Standard
     (Sadly different sources have slightly different definitions of
    less important parts of the standard, be warned)
    -   [Apple](http://developer.apple.com/fonts/TTRefMan/) (I find
        Apple's prose difficult, and sometimes misleading. I suggest
        using a different source when possible)
    -   [Microsoft](http://www.microsoft.com/typography/tt/tt.htm)
    -   [random useful site](http://www.truetype.demon.co.uk/ttspec.htm)
    -   [TTC](http://partners.adobe.com/asn/tech/type/opentype/otff.jsp)
        -- True Type Font Collection

-   [Apple Advanced
    Typography](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6.html)
    extensions to TrueType
-   Apple distortable font (variation tables) -- vaguely equivalent to
    Multiple Master fonts for TrueType
    -   [fvar](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6fvar.html)
        (font variations)
    -   [gvar](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6gvar.html)
        (glyph variations)
    -   [cvar](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6cvar.html)
        (cvt variations)
    -   [avar](http://developer.apple.com/fonts/TTRefMan/RM06/Chap6avar.html)
        (axis variations)

-   [OpenType](http://partners.adobe.com/public/developer/opentype/index_spec.html)
    (postscript embedded in a truetype wrapper, or advanced typography
    tables in a truetype wrapper)
    -   PostScript
        [Type2](http://partners.adobe.com/public/developer/en/font/5177.Type2.pdf)
    -   [CFF](http://partners.adobe.com/public/developer/en/font/5176.CFF.pdf)
    -   [Adobe's version of file
        format](http://partners.adobe.com/public/developer/opentype/index_spec.html)
        -   [SING Gaiji
            extention](http://partners.adobe.com/public/developer/opentype/gdk/topic.html)
            (more information is available in the documentation
            subdirectory of the Glyphlet GDK)

    -   [Microsoft's
        version](http://www.microsoft.com/typography/otspec/default.htm)
    -   Possible source of script codes for scripts not specified by
        MS/Adobe: [ISO
        15924](http://www.evertype.com/standards/iso15924/document/dis15924.pdf)
    -   [Microsoft's full list of locale/language
        IDs](http://www.microsoft.com/globaldev/reference/lcd-all.mspx)
        (not all are supported, some may never be)

-   Open Font Format Specification (ISO/IEC 14496-22:2007)
     (based on OpenType 1.4 but an international standard)
-   [Apple's sfnt wrapper around a PS type1
    font](ftp://ftp.apple.com/developer/Development_Kits/QuickDraw_GX/Documents.sit.hqx)
-   [Various bitmap only sfnt formats](../bitmaponlysfnt/)
-   [WOFF](http://people.mozilla.com/~jkew/woff/woff-2009-09-16.html) --
    Web Open Font Format, mozilla's compressed sfnt format
-   [PostScript
    Type42](http://partners.adobe.com/public/developer/en/font/5012.Type42_Spec.pdf)
    (the opposite of opentype, it's truetype embedded in postscript)
-   SVG 1.1 [fonts](http://www.w3c.org/TR/SVG11/fonts.html)
    -   [SVG 1.2 font hinting proposal](http://www.w3c.org/TR/SVG12/)

-   [Macintosh font formats](../macformats/)
-   Windows raster font formats
    -   [FNT -- Windows version
        2](http://www.technoir.nu/hplx/hplx-l/9708/msg00404.html)
    -   [FNT -- Windows version
        3](http://support.microsoft.com/default.aspx?scid=KB;en-us;q65123)
    -   [Some info on FON file
        format](http://www.csn.ul.ie/~caolan/publink/winresdump/winresdump/doc/resfmt.txt)

-   X11 pcf format
    -   Sadly there is no real standard for this. [There's the source
        code used by
        X11](http://ftp.x.org/pub/R6.4/xc/lib/font/bitmap/).
    -   [So I wrote my own description...](../pcf-format/)

-   [PC Screen Font
    (psf/psfu/psf2)](http://www.win.tue.nl/~aeb/linux/kbd/font-formats-1.html)
-   TeX font formats
    -   [pk packed bitmap
        format](http://www.ctan.org/tex-archive/systems/knuth/local/mfware/pktype.web)
    -   [gf generic font (bitmap)
        format](http://www.ctan.org/tex-archive/systems/knuth/mfware/gftype.web)
    -   [tfm metrics
        format](http://www.ctan.org/tex-archive/systems/knuth/texware/tftopl.web)
    -   To make these viewable you probably want to do something like:
         \$ weave pktype.web
         \$ pdftex pktype.tex

-   [SIL Graphite
    Fonts](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&cat_id=RenderingGraphite)
    (smart font extension to TrueType. Additional tables containing
    rules for composing, reordering, spacing, etc. glyphs)
-   Palm pilot fonts (pdb files)
    -   [font record
        format](http://www.palmos.com/dev/support/docs/palmos/PalmOSReference/Font.html)
    -   [pdb file
        format](http://www.palmos.com/dev/support/docs/fileformats/Intro.html#970318)

-   [OpenDoc](http://www.bitstream.com/categories/developer/truedoc/pfrspec.html).
    Sadly Proprietary so I shan't support it.
-   [Acorn RISC OS font
    format](http://www.pinknoise.demon.co.uk/Docs/Arc/Fonts/Formats.html)
    (these fonts are often zipped up with a non-standard zip).
-   Ikarus IK format is documented in Peter Karow's book *Digital
    Formats for Typefaces,* Appendices G&I. (copies may still be
    available from [URW++](http://www.urwpp.de/english/home.htm))
     Interestingly the exact format of a curve is up to the
    interpretation program.
-   [sfd](../sfdformat/) files (FontForge's internal spline font
    database format)
-   [cidmap](../cidmapformat/) files (FontForge's format for mapping
    cids to unicode)
-   XML formats
    -   TTX -- TrueType XML
    -   [UFO](http://unifiedfontobject.org/) &
        [GLIF](http://unifiedfontobject.org/storageformats/glif.html) --
        Unified font objects & Glyph Interchange Format

Other font links

-   [Adobe's downloadable font
    spec](http://partners.adobe.com/public/developer/en/font/5040.Download_Fonts.pdf)
-   [Adobe's technical
    notes](http://partners.adobe.com/asn/tech/type/ftechnotes.jsp)
-   [Adobe's Font Policies
    document](http://partners.adobe.com/asn/acrobat/sdk/public/docs/FontPolicies.pdf)
-   [PostScript reference
    manual](http://www.adobe.com/products/postscript/pdfs/PLRM.pdf)
    -   (old[reference
        manual](http://partners.adobe.com/asn/developer/pdfs/tn/psrefman.pdf))

-   [Microsoft's downloadable
    fonts](http://www.microsoft.com/typography/fontpack/default.htm)
-   [Downloadable PS CID CJK
    fonts](ftp://ftp.ora.com/pub/examples/nutshell/ujip/adobe/samples/)
    (this site also has cmap files)[
     others](ftp://ftp.ora.com/pub/examples/nutshell/cjkv/adobe/samples/)
-   [Downloadable OTF CID CJK
    fonts](http://www.adobe.com/products/acrobat/acrrasianfontpack.html)
    (this site also has cmap files)
-   [Most recent cid2code tables that I'm aware
    of](ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe)
-   PANOSE
    -   [PANOSE Classification Metrics Guide](http://panose.com) by
	Hewlett-Packard Corporation, 1991 - 1997
    -   [PANOSE structure
	(Windows)](https://msdn.microsoft.com/en-us/library/windows/desktop/dd162774(v=vs.85).aspx)
    -   [PANOSE: An Ideal Typeface Matching System for the
	Web](https://www.w3.org/Printing/stevahn.html) by Robert Stevahn, 1996
    -   [PANOSE 2.0 White Paper](https://www.w3.org/Fonts/Panose/pan2.html) by
	Hewlett-Packard Corporation, 1993
    -   [PANOSE](https://en.wikipedia.org/wiki/PANOSE) on Wikipedia
    -   [Classifying Arabic Fonts Based on Design Characteristics:
	PANOSE-APANOSE](http://spectrum.library.concordia.ca/981753/) by Jehan
	Janbi, 2016

Unicode
-------

-   [Unicode consortium](http://www.unicode.org/)
    -   [Apple's corporate use
        extensions](http://www.unicode.org/Public/MAPPINGS/VENDORS/APPLE/CORPCHAR.TXT)
        (0xF850-0xF8FE)
    -   [Adobe's corporate use
        extensions](http://partners.adobe.com/asn/tech/type/type/corporateuse.txt)
        (0xF634-0F7FF) (also includes some of Apple's codes above)
    -   [FontForge's corporate use
        extensions](../corpchar/)(0xF500-0xF580)
    -   [A registry of code points in the private
        area](http://www.evertype.com/standards/csur/)(does not include
        any of Adobe's or Apple's codepoints)
    -   [American Mathematical Society's corporate use
        extensions](http://www.ams.org/STIX/bnb/stix-tbl.asc-2003-10-10)
        (0xE000-0xF7D7)
    -   MicroSoft uses 0xF000-0xF0FF in their "Symbol" encoding (3,0)
        when they want to an uninterpretted encoding vector (ie. a
        mapping from byte to glyph with no meaning attached to the
        mapping)

-   [Unicode en français![](/assets/img/old/Tricolor.png)](http://hapax.qc.ca/)
-   [Pictures of the characters](http://www.unicode.org/charts/)
-   [Unicode script
    assignments](http://www.unicode.org/Public/UNIDATA/Scripts.txt)
    -   [ISO 15924 script list](http://www.unicode.org/iso15924-en.html)

-   [Unicode
    Bloopers](http://www.babelstone.co.uk/Unicode/Bloopers.html)
-   [PostScript Unicode
    names](%20http://partners.adobe.com/public/developer/opentype/index_glyph.html)
    -   [Glyph names for new
        fonts](http://partners.adobe.com/public/developer/en/opentype/aglfn13.txt)
        (these are the names FontForge automatically assigns to glyphs)
    -   [Adobe Glyph
        Names](http://partners.adobe.com/public/developer/en/opentype/glyphlist.txt)
        provides further synonyms
    -   [Glyph name
        limitations](http://partners.adobe.com/public/developer/opentype/index_glyph2.html)

-   Linux issues
    -   [FAQ](http://www.cl.cam.ac.uk/~mgk25/unicode.html)
    -   [HOWTO](ftp://ftp.ilog.fr/pub/Users/haible/utf8/Unicode-HOWTO.html)
    -   [Linux Unicode man
        page](http://bobo.fuw.edu.pl/cgi-bin/man2html/usr/share/man/man7/unicode.7.gz)

### Other Encodings

-   [Microsoft's
    Codepages](http://www.microsoft.com/globaldev/reference/wincp.asp),
    and at the [unicode
    site](http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/)
-   [Mac
    Encodings](http://www.unicode.org/Public/MAPPINGS/VENDORS/APPLE/)
-   [MacRoman](http://devworld.apple.com/techpubs/mac/Text/Text-516.html)
-   [IPA](http://www2.arts.gla.ac.uk/IPA/fullchart.html)
-   [GB
    18030](http://www-106.ibm.com/developerworks/unicode/library/u-china.html?dwzone=unicode)
-   [TeX latin
    encodings](http://www.tug.org/fontname/html/Encodings.html)
    (possibly also on your local machine in
    `/usr/share/texmf/dvips/base`)
-   [TeX cyrillic
    encodings](http://www.ctan.org/tex-archive/macros/latex/contrib/supported/t2/enc-maps/encfiles/)

* * * * *

Books
-----

### FontForge

-   ![Fontes et
    Codages](http://images-eu.amazon.com/images/P/284177273X.08.MZZZZZZZ.jpg)
    [Haralambous, Yannis, 2004, *Fontes &
    Codages*](http://www.amazon.fr/exec/obidos/ASIN/284177273X/qid%3D1096481415/402-5423443-8577732)
-   ![Fontes et
    Codages](http://images.amazon.com/images/P/0596102429.01._AA240_SCLZZZZZZZ_V40077239_.jpg)
    [Haralambous, Yannis (translated: P Scott Horne), 2006, *Fonts &
    Encodings*](http://www.amazon.com/Fonts-Encodings-Yannis-Haralambous/dp/0596102429/sr=1-1/qid=1158862933/ref=sr_1_1/103-9032945-8593416?ie=UTF8&s=books)

### Typography

### Font editor concepts

Karow, Peter, 1994, *Font Technology, Description and Tools*

Karow, Peter, 1987, *Digital Formats for Typefaces*

### TeX

Hoenig, Alan *TeX Unbound: LaTeX and TeX Strategies for Fonts, Graphics
& More*

Knuth, Donald, 1979, *TeX and METAFONT, New Directions in Typesetting*

Interview
---------

I was interviewed by the Open Source Publishing people at
[LGM2](http://www.libregraphicsmeeting.org/). There's an [mp3 file of
the interview available on their
site.](http://ospublish.constantvzw.org/?p=221)

-- [Prev](../nvd/) -- [TOC](/en-US/tutorials/overview/) --
