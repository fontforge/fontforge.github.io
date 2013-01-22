---
title: Writing scripts to change fonts in FontForge
layout: default
---


Writing scripts to change fonts in FontForge
============================================

FontForge includes two interpreters so you can write scripts to modify
fonts. One of these interpreters is [python](python.html), one is a
legacy language I came up with. FontForge may be configured with either
or both of these. If configured with both then fontforge will make a
guess at which to use based on the script file's extension ("py" means
use the python interpreter, "ff" or "pe" means use the old interpreter)

-   [Invoking a script](#Starting)[](scripting-tutorial.html)
-   [Python scripting](python.html)
-   [Native Scripting tutorial](scripting-tutorial.html)
-   [Native Scripting language](#Language)
    -   [Built in variables](#variables)
    -   [Built in procedures](#procedures)
    -   [Examples](#Example)

-   [The Execute Script dialog](scripting.html#Execute)
-   [The Scripts menu](#menu)

Invoking scripts
----------------

If you start fontforge with a script on the command line it will not put
up any windows and it will exit when the script is done. The script can
be in a file, or just a string presented as an argument. You may need to
specify which interpreter to use with the -lang argument.

>     $ fontforge -script scriptfile.pe {arguments}
>     $ fontforge -c "script-string" {arguments}
>     $ fontforge -lang={ff|py} -c "script-string"

FontForge can also be used as an interpreter to which the shell will
automatically pass scripts. If you a mark your script files as
executable\
 `    $ chmod +x scriptfile.pe`\
 and begin each one with the line\
 `    #!/usr/local/bin/fontforge`\
 (or wherever fontforge happens to reside on your system) then you can
invoke the script just by typing\
 `    $ scriptfile.pe {fontnames}`

If you wish FontForge to read a script from stdin then you can use "-"
as a "filename" for stdin. (If you build FontForge without X11 then
fontforge will attempt to read a script file from `stdin` if none is
given on the command line.)

You can also start a script from within FontForge with
`File->Execute Script`, and you can use the Preference Dlg to define a
set of frequently used scripts which can be invoked directly by menu.

The scripting language provides access to much of the functionality
found in the font view's menus. It does not currently (and probably
never will) provide access to everything. (If you find a lack let me
know, I may put it in for you). It does not provide commands for
building up a glyph out of splines, instead it allows you to do high
level modifications to glyphs.

If you set the environment variable `FONTFORGE_VERBOSE` (it doesn't need
a value, just needs to be set) then FontForge will print scripts to
stdout as it executes them.

You may set the environment variable `FONTFORGE_LANGUAGE` to either "py"
(for python) or "ff" or "pe" (for native scripting) as another way to
determne what interpreter to use.

[Python scripting](python.html)
-------------------------------

[Is described elsewhere.](python.html)

Scripting Language
------------------

The syntax is rather like a mixture of C and shell commands. Every file
corresponds to a procedure. As in a shell script arguments passed to the
file are identified as \$1, \$2, ... \$n. \$0 is the file name itself.
\$argc gives the number of arguments. \$argv[\<expr\>] provides array
access to the arguments.

Terms can be

-   A variable name (like "\$1" or "i" or "@fontvar" or "\_global")\
     The scope of the variable depends on the initial character of its
    name.
    -   A '\$' signifies that it is a built-in variable. The user cannot
        create any new variables beginning with '\$'. Some, but not all,
        of these may be assigned to.
    -   A '\_' signifies that the variable is global, it is always
        available. You can use these to store context across different
        script files (or to access data within nested script files).
    -   A '@' signifies that the variable is associated with the font.
        Any two scripts looking at the same font will have access to the
        same variables.
    -   A variable which begins with a letter is a local variable. It is
        only meaningful within the current script file. Nested script
        files may have different variables with the same names.

-   an integer expressed in decimal, hex or octal
-   a unicode code point (which has a prefix of "0u" or "0U" and is
    followed by a string of hex digits. This is only used by the select
    command.
-   a real number (in "C" locale format -- "." as the decimal point
    character)
-   A string which may be enclosed in either double or single quotes.
    String tokens are limited to 256 bytes. "\\n" can be used to
    represent a newline character. (If you need longer strings use the
    concatenation operator).
-   a procedure to call or file to invoke.
-   an expression within parentheses
-   a series of expressions (separated by commas) within brackets, as
    `[1,       2, 3, 5, 8]`, used to create an array.

There are three different comments supported:

-   Starting with a "\#" character and proceeding to end of line
-   Starting with "//" and proceeding to end of line
-   Starting with "/\*" and proceeding to "\*/"

Expressions are similar to those in C, a few operators have been
omitted, a few added from shell scripts. Operator precedence has been
simplified slightly. So operators (and their precedences) are:

-   unary operators (+, -, !, \~, ++ (prefix and postfix), --(prefix and
    postfix), () (procedure call), [] (array index), :h, :t, :r, :e\
     Most of these are as expected in C, the last four are borrowed from
    shell scripts and are applied to strings
    -   :h gives the head (directory) of a pathspec
    -   :t gives the tail (filename) of a pathspec
    -   :r gives the pathspec without the extension (if any)
    -   :e gives the extension

-   \*, /, % (binary multiplicative operators)
-   +, - (binary arithmetic operators)\
     If the first operand of + is a string then + will be treated as
    concatenation rather than addition. If the second operand is a
    number it will be converted to a string (decimal representation) and
    then concatenated. If the first operand of + is an array then + will
    do array concatenation -- if the second argment is also an array the
    two will be concatenated ([1,2] + [3,4] yields [1,2,3,4], while
    [1,2] + 3 yields [1,2,3]). Otherwise these are the normal
    arithmetric operations.
-   ==, !=, \>, \<, \>=, \<= (comparison operators, may be applied to
    either two integers or two strings)
-   &&, & (logical and, bitwise and. (logical and will do short circuit
    evaluation))
-   ||, |, \^ (logical or, bitwise or, bitwise exclusive or (logical or
    will do short circuit evaluation))
-   =, +=, -=, \*=, /=, %= (assignment operators as in C. The += will
    act as concatenation if the first operand is a string.)

Note there is no comma operator, and no "?:" operator. The precedence of
"and" and "or" has been simplified, as has that of the assignment
operators.

Procedure calls may be applied either to a name token, or to a string.
If the name or string is recognized as one of FontForge's internal
procedures it will be executed, otherwise it will be assumed to be a
filename containing another fontforge script file, this file will be
invoked (since filenames can contain characters not legal in name tokens
it is important to allow general strings to specify filenames). If the
procedure name does not contain a directory then it is assumed to be in
the same directory as the current script file. At most 25 arguments can
be passed to a procedure.

Arrays are passed by reference, strings and integers are passed by
value.

Variables may be created by assigning a value to them (only with the
"="), so:\
 `    i=3`\
 could be used to define "i" as a variable. Variables are limited in
scope to the current file, they will not be inherited by called
procedures.

A statement may be

-   an expression
-   `if ( expression )           statements       {elseif ( expression )           statements}       [else           statements]       endif`
-   `while ( expression )           statements       endloop`
-   `foreach           statements       endloop`
-   `break`
-   `return [ expression ]`
-   `shift`

As with C, non-zero expressions are defined to be true.\
 A return statement may be followed by a return value (the expression)
or a procedure may return nothing (void).\
 The shift statement is stolen from shell scripts and shifts all
arguments down by one. (argument 0, the name of the script file, remains
unchanged.\
 The foreach statement requires that there be a current font. It
executes the statements once for each glyph in the selection. Within the
statements only one glyph at a time will be selected. After execution
the selection will be restored to what it was initially. (Caveat: Don't
reencode the font within a foreach statement).\
 Statements are terminated either by a new line (you can break up long
lines with backslash newline) or a semicolon.

Trivial example:

>     i=0;   #semicolon is not needed here, but it's ok
>     while ( i<3 )
>        if ( i==1 /* pointless comment */ )
>         Print( "Got to one" )   // Another comment
>        endif
>        ++i
>     endloop

FontForge maintains the concept of a "current font"-- almost all
commands refer only to the current font (and require that there be a
font). If you start a script with File-\>Execute Script, the font you
were editing will be current, otherwise there will be no initial current
font. The Open(), New() and Close() commands all change the current
font. FontForge also maintains a list of all fonts that are currently
open. This list is in no particular order. The list starts with
\$firstfont.

Similarly when working with cid keyed fonts, FontForge works in the
"current sub font", and most commands refer to this font. The
CIDChangeSubFont() command can alter that.

All builtin variables begin with "\$", you may not create any variables
that start with "\$" yourself (though you may assign to (some) already
existing ones)

-   `$0 `the current script filename
-   `$1 `the first argument to the script file
-   `$2 `the second argument to the script file
-   ...
-   `$argc` the number of arguments passed to the script file (this will
    always be at least 1 as \$0 is always present)
-   `$argv `allows you to access the array of all the arguments
-   `$curfont `the name of the filename in which the current font
    resides
-   `$firstfont `the name of the filename of the font which is first on
    the font list (Can be used by Open()), if there are no fonts loaded
    this returns an empty string. This can be used to determine if any
    font at all is loaded into fontforge.
-   `$nextfont `the name of the filename of the font which follows the
    current font on the list (or the empty string if the current font is
    the last one on the list)
-   `$fontchanged` returns 1 if the current font has changed, 0 if it
    has not changed since it was read in (or saved).
-   `$fontname` the name contained in the postscript FontName field
-   `$familyname `the name contained in the postscript FamilyName field
-   `$fullname `the name contained in the postscript FullName field
-   `$fondname `if set this name indicates what FOND the current font
    should be put in under Generate Mac Family.
-   `$weight `the name contained in the postscript Weight field
-   `$copyright `the name contained in the postscript Notice field
-   `$filename `the name of the file containing the font.
-   `$fontversion` the string containing the font's version
-   `$iscid `1 if the current font is a cid keyed font, 0 if not
-   `$cidfontname `returns the fontname of the top-level cid-keyed font
    (or the empty string if there is none)\
     Can be used to detect if this is a cid keyed font.
-   `$cidfamilyname, $cidfullname, $cidweight, $cidcopyright `similar to
    above
-   `$mmcount `returns 0 for non multiple master fonts, returns the
    number of instances in a multiple master font.
-   `$italicangle `the value of the postscript italic angle field
-   `$loadState` a bitmask of non-fatal errors encountered when loading
    the font.
-   `$privateState `a bitmask of some errors in the PostScript Private
    dictionary (see the [python entry](python.html#Font_privateState)
    for more info).
-   `$curcid `returns the fontname of the current font
-   `$firstcid `returns the fontname of the first font within this cid
    font
-   `$nextcid `returns the fontname of the next font within this cid
    font (or the empty string if the current sub-font is the last)
-   `$macstyle `returns the value of the macstyle field (a set of bits
    indicating whether the font is bold, italic, condensed, etc.)
-   `$bitmaps `returns an array containing all bitmap pixelsizes
    generated for this font. (If the font database contains greymaps
    then they will be indicated in the array as
    `(<BitmapDepth><<16)|<PixelSize>`)
-   `$order `returns an integer containing either 2 (for truetype fonts)
    or 3 (for postscript fonts). This indicates whether the font uses
    quadratic or cubic splines.
-   `$em` returns the number of em-units used by the font.
-   `$ascent `returns the ascent of the font
-   `$descent `returns the descent of the font.
-   `$selection` returns an array containing one entry for each glyph in
    the current font indicating whether that glyph is selected or not
    (0=\>not, 1=\>selected)
-   `$panose` returns an array containing the 10 panose values for the
    font.
-   `$trace` if this is set to one then FontForge will trace each
    procedure call.
-   `$version` returns a string containing the current version of
    fontforge. This should look something like "20050817".
-   `$haspython` returns 1 if python scripting is available, 0 if it is
    not.
-   `$`\<Preference Item\> (for example `$AutoHint`) allows you to
    examine the value of that preference item (to set it use `SetPref`)

The following example will perform an action on all loaded fonts:

>     file = $firstfont
>     while ( file != "" )
>        Open(file)
>        /* Do Stuff */
>        file = $nextfont
>     endloop

The built in procedures are very similar to the menu items with the same
names. Often the description here is sketchy, look at the menu item for
more information.

-   [Built-in procedures in alphabetic order](scripting-alpha.html)
-   [Built-in procedures that do not require a font](#no-font)
-   [File menu](#file-menu)
-   [File manipulation](#files)
-   [Edit menu](#edit-menu)
-   [Select menu](#select-menu)
-   [Element menu](#element-menu)
-   [Font information](#font-info)
-   [Glyph information](#glyph-info)
-   [Advanced Typography](#ATT)
-   [Encoding menu](#encoding-menu)
-   [Hint menu](#hint-menu)
-   [Metrics menu](#metrics-menu)
-   [Multiple master](#MM)
-   [CID keyed fonts](#CID)
-   [User interaction](#user)
-   [Preferences](#prefs)
-   [Math](#math)
-   [Unicode](#unicode)
-   [String manipulation](#strings)
-   [Character manipulation](#Character)
-   [Arrays](#arrays)
-   [Miscellaneous](#misc)
-   [Deprecated](#Deprecated) Names

### Built-in procedures in alphabetic order

- [A](scripting-alpha.html#A) - [B](scripting-alpha.html#B) -
[C](scripting-alpha.html#C) - [D](scripting-alpha.html#D) -
[E](scripting-alpha.html#E) - [F](scripting-alpha.html#F) -
[G](scripting-alpha.html#G) - [H](scripting-alpha.html#H) -
[I](scripting-alpha.html#I)- [J](scripting-alpha.html#J)-
[K](scripting-alpha.html#K) - [L](scripting-alpha.html#L) -
[M](scripting-alpha.html#M) - [N](scripting-alpha.html#N) -
[O](scripting-alpha.html#O) - [P](scripting-alpha.html#P) -
[Q](scripting-alpha.html#Q) - [R](scripting-alpha.html#R) -
[S](scripting-alpha.html#S) - [T](scripting-alpha.html#T)-
[U](scripting-alpha.html#U)- [V](scripting-alpha.html#V)-
[W](scripting-alpha.html#W) - [X](scripting-alpha.html#X)-
[Y](scripting-alpha.html#Y) - [Z](scripting-alpha.html#Z)-

### Built-in procedures that do not require a loaded font

-   [Array(size)](scripting-alpha.html#Array)
-   [AskUser(question[,default-answer])](scripting-alpha.html#AskUser)
-   [ATan2(val1,val2)](scripting-alpha.html#ATan2)
-   [Ceil(real)](scripting-alpha.html#Ceil)
-   [Chr(int)](scripting-alpha.html#Chr)
-   [Cos(val)](scripting-alpha.html#Cos)
-   [Floor(real)](scripting-alpha.html#Floor)
-   [Error(str)](scripting-alpha.html#Error)
-   [Exp(val)](scripting-alpha.html#Exp)
-   [DefaultOtherSubrs()](scripting-alpha.html#DefaultOtherSubrs)
-   [FileAccess(filename[,prot])](scripting-alpha.html#FileAccess)
-   [FontsInFile(filename)](scripting-alpha.html#FontsInFile)
-   [GetEnv(str)](scripting-alpha.html#GetEnv)
-   [GetPref(str)](scripting-alpha.html#GetPref)
-   [Int(real)](scripting-alpha.html#Int)
-   [IsAlNum(val)](scripting-alpha.html#IsAlNum)
-   [IsAlpha(val)](scripting-alpha.html#IsAlpha)
-   [IsDigit(val)](scripting-alpha.html#IsDigit)
-   [IsFinite(real)](scripting-alpha.html#IsFinite)
-   [IsHexDigit(val)](scripting-alpha.html#IsHexDigit)
-   [IsLower(val)](scripting-alpha.html#IsLower)
-   [IsNan(real)](scripting-alpha.html#IsNan)
-   [IsSpace(val)](scripting-alpha.html#IsSpace)
-   [IsUpper(val)](scripting-alpha.html#IsUpper)
-   [LoadEncodingFile(filename)](scripting-alpha.html#LoadEncodingFile)
-   [LoadNamelist(filename)](scripting-alpha.html#LoadNamelist)
-   [LoadNamelistDir([directory-name])](scripting-alpha.html#LoadNamelistDir)
-   [LoadPlugin(filename)](scripting-alpha.html#LoadPlugin)
-   [LoadPluginDir([directory-name])](scripting-alpha.html#LoadPluginDir)
-   [LoadPrefs()](scripting-alpha.html#LoadPrefs)
-   [LoadStringFromFile("filename")](scripting-alpha.html#LoadStringFromFile)
-   [Log(val)](scripting-alpha.html#Log)
-   [NameFromUnicode(uni[,namelist])](scripting-alpha.html#NameFromUnicode)
-   [New()](scripting-alpha.html#New)
-   [Open(filename[,flags])](scripting-alpha.html#Open)
-   [Ord(string[,pos])](scripting-alpha.html#Ord)
-   [PostNotice(str)](scripting-alpha.html#PostNotice)
-   [Pow(val1,val2)](scripting-alpha.html#Pow)
-   [PreloadCidmap(filename,registry,ordering,supplement)](scripting-alpha.html#PreloadCidmap)
-   [Print(arg1,arg2,arg3,...)](scripting-alpha.html#Print)
-   [Rand()](scripting-alpha.html#Rand)
-   [ReadOtherSubrsFile(filename)](scripting-alpha.html#ReadOtherSubrsFile)
-   [Real(int)](scripting-alpha.html#Real)
-   [Round(real)](scripting-alpha.html#Round)
-   [SavePrefs()](scripting-alpha.html#SavePrefs)
-   [SetPref(str,val[,val2])](scripting-alpha.html#SetPref)
-   [SizeOf(arr)](scripting-alpha.html#SizeOf)
-   [Sin(val)](scripting-alpha.html#Sin)
-   [Sqrt(val)](scripting-alpha.html#Sqrt)
-   [Strcasestr(haystack,needle)](scripting-alpha.html#Strcasestr)
-   [Strcasecmp(str1,str2)](scripting-alpha.html#Strcasecmp)
-   [Strftime(format[,isgmt[,locale]])](scripting-alpha.html#Strftime)
-   [StrJoin(array,delimiter)](scripting-alpha.html#StrJoin)
-   [Strlen(str)](scripting-alpha.html#Strlen)
-   [Strrstr(haystack,needle)](scripting-alpha.html#Strrstr)
-   [Strskipint(str[,base])](scripting-alpha.html#Strskipint)
-   [StrSplit(str,delimiter[,max-count])](scripting-alpha.html#StrSplit)
-   [Strstr(haystack,needle)](scripting-alpha.html#Strstr)
-   [Strsub(str,start[,end])](scripting-alpha.html#Strsub)
-   [Strtod(str)](scripting-alpha.html#Strtod)
-   [Strtol(str[,base])](scripting-alpha.html#Strtol)
-   [Tan(val)](scripting-alpha.html#Tan)
-   [ToLower(val)](scripting-alpha.html#ToLower)
-   [ToMirror(val)](scripting-alpha.html#ToMirror)
-   [ToString(arg)](scripting-alpha.html#ToString)
-   [ToUpper(val)](scripting-alpha.html#ToUpper)
-   [TypeOf(any)](scripting-alpha.html#TypeOf)
-   [UCodePoint(int)](scripting-alpha.html#UCodePoint)
-   [UnicodeFromName(name)](scripting-alpha.html#UnicodeFromName)
-   [Ucs4(str)](scripting-alpha.html#Ucs4)
-   [Utf8(int)](scripting-alpha.html#Utf8)
-   [WriteStringToFile("string","Filename"[,append])](scripting-alpha.html#WriteStringToFile)

### Built-in procedures that act like the File Menu

-   [Close()](scripting-alpha.html#Close)
-   [~~ControlAfmLigatureOutput(script,lang,ligature-tag-list)~~](scripting-alpha.html#ControlAfmLigatureOutput)
-   [Export(format[,bitmap-size])](scripting-alpha.html#Export)
-   [FontsInFile(filename)](scripting-alpha.html#FontsInFile)
-   [Generate(filename[,bitmaptype[,fmflags[,res[,mult-sfd-file[,namelist-name]]]]])](scripting-alpha.html#Generate)
-   [GenerateFamily(filename,bitmaptype,fmflags,array-of-font-filenames)](scripting-alpha.html#GenerateFamily)
-   [Import(filename[,toback[,flags]])](scripting-alpha.html#Import)
-   [MergeKern(filename)](scripting-alpha.html#MergeKern) deprecated
-   [MergeFeature(filename)](scripting-alpha.html#MergeFeature)
-   [New()](scripting-alpha.html#New)
-   [Open(filename[,flags])](scripting-alpha.html#Open)
-   [PrintFont(type[,pointsize[,sample-text/filename[,output-file]]])](scripting-alpha.html#PrintFont)
-   [PrintSetup(type,[printer[,width,height]])](scripting-alpha.html#PrintSetup)
-   [Quit(status)](scripting-alpha.html#Quit)
-   [Revert()](scripting-alpha.html#Revert)
-   [RevertToBackup()](scripting-alpha.html#RevertToBackup)
-   [Save([filename])](scripting-alpha.html#Save)

### File Manipulation

-   [FileAccess(filename[,prot])](scripting-alpha.html#FileAccess)
-   [FontImage(filename,array[,width[,height]])](scripting-alpha.html#FontImage)
-   [LoadStringFromFile("filename")](scripting-alpha.html#LoadStringFromFile)
-   [WriteStringToFile("string","Filename"[,append])](scripting-alpha.html#WriteStringToFile)

### Built-in procedures that act like the Edit Menu

-   [Clear](scripting-alpha.html#Clear)
-   [ClearBackground](scripting-alpha.html#ClearBackground)
-   [Copy](scripting-alpha.html#Copy)
-   [CopyAnchors](scripting-alpha.html#CopyAnchors)
-   [CopyFgToBg](scripting-alpha.html#CopyFgToBg)
-   [~~CopyGlyphFeatures(arg,...)~~](scripting-alpha.html#CopyGlyphFeatures)
-   [CopyLBearing](scripting-alpha.html#CopyLBearing)
-   [CopyRBearing](scripting-alpha.html#CopyRBearing)
-   [CopyReference](scripting-alpha.html#CopyReference)
-   [CopyUnlinked](scripting-alpha.html#CopyUnlinked)
-   [CopyVWidth](scripting-alpha.html#CopyVWidth)
-   [CopyWidth](scripting-alpha.html#CopyWidth)
-   [Cut](scripting-alpha.html#Cut)
-   [Join([fudge])](scripting-alpha.html#Join)
-   [Paste](scripting-alpha.html#Paste)
-   [PasteInto](scripting-alpha.html#Paste)
-   [PasteWithOffset(xoff,yoff)](scripting-alpha.html#PasteWithOffset)
-   [ReplaceWithReference([fudge])](scripting-alpha.html#ReplaceWithReference)
-   [SameGlyphAs](scripting-alpha.html#SameGlyphAs)
-   [UnlinkReference](scripting-alpha.html#UnlinkReference)

### Built-in procedures that act like the Select Menu

-   [Select(arg1, arg2, ...)](scripting-alpha.html#Select)
-   [SelectAll](scripting-alpha.html#SelectAll)
-   [SelectAllInstancesOf](scripting-alpha.html#SelectAllInstancesOf)(name1[,...])
-   [SelectBitmap(size)](scripting-alpha.html#SelectBitmap)
-   [~~SelectByATT(type,tags,contents,search-type)~~](scripting-alpha.html#SelectByATT)
-   [SelectByPosSub(lookup-subtable-name,search\_type)](scripting-alpha.html#SelectByPosSub)
-   [SelectChanged([merge])](scripting-alpha.html#SelectChanged)
-   [SelectFewer(arg1, arg2, ...)](scripting-alpha.html#SelectFewer)
-   [SelectFewerSingletons(arg1,
    ...)](scripting-alpha.html#SelectFewerSingletons)
-   [SelectHintingNeeded([merge])](scripting-alpha.html#SelectHintingNeeded)
-   [SelectIf(arg1,arg2, ...)](scripting-alpha.html#SelectIf)
-   [SelectInvert()](scripting-alpha.html#SelectInvert)
-   [SelectMore(arg1, arg2, ...)](scripting-alpha.html#SelectMore)
-   [SelectMoreIf(arg1, arg2, ...)](scripting-alpha.html#SelectMoreIf)
-   [SelectMoreSingletons(arg1,
    ...)](scripting-alpha.html#SelectMoreSingletons)
-   [SelectMoreSingletonsIf(arg1,
    ...)](scripting-alpha.html#SelectMoreSingletonsIf)
-   [SelectNone()](scripting-alpha.html#SelectNone)
-   [SelectSingletons(arg1, ...)](scripting-alpha.html#SelectSingletons)
-   [SelectSingletonsIf(arg1,
    ...)](scripting-alpha.html#SelectSingletonsIf)
-   [SelectWorthOutputting()](scripting-alpha.html#SelectWorthOutputting)

### Built-in procedures that act like the Element Menu

-   [AddAccent(accent[,pos])](scripting-alpha.html#AddAccent)
-   [AddExtrema()](scripting-alpha.html#AddExtrema)
-   [ApplySubstitution(script,lang,tag)](scripting-alpha.html#ApplySubstitution)
-   [AutoTrace()](scripting-alpha.html#AutoTrace)
-   [BitmapsAvail(sizes[,rasterized])](scripting-alpha.html#BitmapsAvail)
-   [BitmapsRegen(sizes)](scripting-alpha.html#BitmapsRegen)
-   [BuildAccented()](scripting-alpha.html#BuildAccented)
-   [BuildComposite()](scripting-alpha.html#BuildComposite)
-   [BuildDuplicate()](scripting-alpha.html#BuildDuplicate)
-   [CanonicalContours](scripting-alpha.html#CanonicalContours)()
-   [CanonicalStart](scripting-alpha.html#CanonicalStart)()
-   [CompareFonts(other-font-filename,output-filename,flags)](scripting-alpha.html#CompareFonts)
-   [CompareGlyphs([pt\_err[,spline\_err[,pixel\_off\_frac[,bb\_err[,compare\_hints[,report\_diffs\_as\_errors]]]]]])](scripting-alpha.html#CompareGlyphs)
-   [CorrectDirection([unlinkrefs])](scripting-alpha.html#CorrectDirection)
-   [DefaultRoundToGrid()](scripting-alpha.html#DefaultRoundToGrid)
-   [DefaultUseMyMetrics()](scripting-alpha.html#DefaultUseMyMetrics)
-   [ExpandStroke(width)](scripting-alpha.html#ExpandStroke)
-   [FindIntersections()](scripting-alpha.html#FindIntersections)
-   [HFlip([about-x])](scripting-alpha.html#HFlip)
-   [Inline(width,gap)](scripting-alpha.html#Inline)
-   [InterpolateFonts(percentage,other-font-name[,flags])](scripting-alpha.html#InterpolateFonts)
-   [MergeFonts(other-font-name[,flags])](scripting-alpha.html#MergeFonts)
-   [Move(delta-x,delta-y)](scripting-alpha.html#Move)
-   [MoveReference(delta-x,delta-y,[refname/ref-unicode]+)](scripting-alpha.html#MoveReference)
-   [NearlyHvCps([error[,err-denom]])](scripting-alpha.html#NearlyHvCps)
-   [NearlyHvLines([error[,err-denom]])](scripting-alpha.html#NearlyHvLines)
-   [NearlyLines(error)](scripting-alpha.html#NearlyLines)
-   [NonLinearTransform(x-expression,y-expression)](scripting-alpha.html#NonLinearTransform)
-   [Outline(width)](scripting-alpha.html#Outline)
-   [OverlapIntersect()](scripting-alpha.html#OverlapIntersect)
-   [PositionReference(x,y,[refname/ref-unicode]+)](scripting-alpha.html#PositionReference)
-   [RemoveOverlap()](scripting-alpha.html#RemoveOverlap)
-   [Rotate(angle[,ox,oy])](scripting-alpha.html#Rotate)
-   [RoundToCluster([within[,max]])](scripting-alpha.html#RoundToCluster)
-   [RoundToInt([factor])](scripting-alpha.html#RoundToInt)
-   [Scale(factor[,yfactor][,ox,oy])](scripting-alpha.html#Scale)
-   [ScaleToEm(em-size)](scripting-alpha.html#ScaleToEm)
-   [Shadow(angle,outline-width,shadow-width)](scripting-alpha.html#Shadow)
-   [Simplify()](scripting-alpha.html#Simplify)
-   [Skew(angle[,ox,oy])](scripting-alpha.html#Skew)
-   [Transform(t1,t2,t3,t4,t5,t6)](scripting-alpha.html#Transform)
-   [VFlip([about-y])](scripting-alpha.html#VFlip)
-   [Wireframe(angle,outline-width,shadow-width)](scripting-alpha.html#Wireframe)

### Font Info

-   [AddSizeFeature(default-size[,range-bottom,range-top,style-id,array-of-lang-names])](scripting-alpha.html#AddSizeFeature)
-   [ChangePrivateEntry(key,val)](scripting-alpha.html#ChangePrivateEntry)
-   [ClearPrivateEntry(key)](scripting-alpha.html#ClearPrivateEntry)
-   [GetFontBoundingBox()](scripting-alpha.html#GetFontBoundingBox)
-   [GetMaxpValue(field-name)](scripting-alpha.html#GetMaxpValue)
-   [GetOS2Value(field-name)](scripting-alpha.html#GetOS2Value)
-   [GetPrivateEntry(key)](scripting-alpha.html#GetPrivateEntry)
-   [GetTeXParam(index)](scripting-alpha.html#GetTeXParam)
-   [GetTTFName(lang,nameid)](scripting-alpha.html#GetTTFName)
-   [HasPrivateEntry(key)](scripting-alpha.html#HasPrivateEntry)
-   [ScaleToEm(em-size)](scripting-alpha.html#ScaleToEm)
-   [SetFondName(fondname)](scripting-alpha.html#SetFondName)
-   [SetFontHasVerticalMetrics(flag)](scripting-alpha.html#SetFontHasVerticalMetrics)
-   [SetFontNames(fontname[,family[,fullname[,weight[,copyright-notice[,fontversion]]]]])](scripting-alpha.html#SetFontNames)
-   [SetFontOrder(order)](scripting-alpha.html#SetFontOrder)
-   [SetGasp([ppem,flag[,ppem2,flag[,...]]])](scripting-alpha.html#SetGasp)
-   [SetItalicAngle(angle[,denom])](scripting-alpha.html#SetItalicAngle)
-   [SetMacStyle(val)](scripting-alpha.html#SetMacStyle)
-   [SetMaxpValue(field-name,value)](scripting-alpha.html#SetMaxpValue)
-   [SetOS2Value(field-name,field-value)](scripting-alpha.html#SetOS2Value)
-   [SetPanose(array)
    SetPanose(index,value)](scripting-alpha.html#SetPanose)
-   [SetTeXParams(type,design-size,slant,space,stretch,shrink,xheight,quad,extraspace[...])](scripting-alpha.html#SetTeXParams)
-   [SetTTFName(lang,nameid,utf8-string)](scripting-alpha.html#SetTTFName)
-   [SetUniqueID(value)](scripting-alpha.html#SetUniqueID)
-   Some items (such as the font name) may be retrieved via built-in
    variables.

### Glyph Info

-   [DrawsSomething([arg])](scripting-alpha.html#DrawsSomething)
-   [GetPosSub(lookup-subtable-name)](scripting-alpha.html#GetPosSub)
-   [GlyphInfo(str)](scripting-alpha.html#GlyphInfo)
-   [SetGlyphColor(color)](scripting-alpha.html#SetGlyphColor)
-   [SetGlyphComment(comment)](scripting-alpha.html#SetGlyphComment)
-   [SetGlyphChanged(flag)](scripting-alpha.html#SetGlyphChanged)
-   [SetGlyphClass(class-name)](scripting-alpha.html#SetGlyphClass)
-   [SetGlyphName(name[,set-from-name-flag])](scripting-alpha.html#SetGlyphName)
-   [SetUnicodeValue(uni[,set-from-value-flag])](scripting-alpha.html#SetUnicodeValue)
-   [SetGlyphTeX(height,depth[,subpos,suppos])](scripting-alpha.html#SetGlyphTeX)
-   [WorthOutputting([arg])](scripting-alpha.html#WorthOutputting)

### Built-in procedures that handle Advanced Typography

-   [AddAnchorClass(name,type,script-lang,tag,flags,merge-with)](scripting-alpha.html#AddAnchorClass)
-   [AddAnchorPoint(name,type,x,y[,lig-index])](scripting-alpha.html#AddAnchorPoint)
-   [AddLookup(new-lookup-name,type,flags,feature-script-lang-array[,after-lookup-name)](scripting-alpha.html#AddLookup)
-   [AddLookupSubtable(lookup-name,new-subtable-name[,after-subtable-name])](scripting-alpha.html#AddLookupSubtable)
-   [AddPosSub(subtable-name,variant(s))\
     AddPosSub(subtable-name,dx,dy,dadv\_x,dadv\_y)\

    AddPosSub(subtable-name,other-glyph-name,dx1,dy1,dadv\_x1,dadv\_y1,dx2,dy2,dadv\_x2,dadv\_y2)](scripting-alpha.html#AddPosSub)
-   [AddSizeFeature(default-size[,range-bottom,range-top,style-id,array-of-lang-names])](scripting-alpha.html#AddSizeFeature)
-   [~~AddATT(type,script-lang,tag,flags,variant)~~](scripting-alpha.html#AddATT)
-   [ApplySubstitution(script,lang,tag)](scripting-alpha.html#ApplySubstitution)
-   [CheckForAnchorClass(name)](scripting-alpha.html#CheckForAnchorClass)
-   [~~DefaultATT(tag)~~](scripting-alpha.html#DefaultATT)
-   [GetAnchorPoints](scripting-alpha.html#GetAnchorPoints)
-   [GetLookupInfo(lookup-name)](scripting-alpha.html#GetLookupInfo)
-   [GetLookups(table-name)](scripting-alpha.html#GetLookups)
-   [GetLookupSubtables(lookup-name)](scripting-alpha.html#GetLookupSubtable)
-   [GetLookupOfSubtable(subtable-name)](scripting-alpha.html#GetLookupOfSubtable)
-   [GetPosSub(lookup-subtable-name)](scripting-alpha.html#GetPosSub)
-   [GetSubtableOfAnchor(anchor-class-name)](scripting-alpha.html#GetSubtableOfAnchor)
-   [GenerateFeatureFile(filename[,lookup-name])](scripting-alpha.html#GenerateFeatureFile)
-   [HasPreservedTable(tag)](scripting-alpha.html#HasPreservedTable)
-   [LoadTableFromFile(tag,filename)](scripting-alpha.html#LoadTableFromFile)
-   [LookupStoreLigatureInAfm(lookup-name,store-it)](scripting-alpha.html#LookupStoreLigatureInAfm)
-   [LookupSetFeatureList(lookup-name,feature-script-lang-array)](scripting-alpha.html#LookupSetFeatureList)
-   [MergeLookups(lookup-name1,lookup-name2)](scripting-alpha.html#MergeLookups)
-   [MergeLookupSubtables(subtable-name1,subtable-name2)](scripting-alpha.html#MergeLookupSubtables)
-   [~~RemoveATT(type,script-lang,tag)~~](scripting-alpha.html#RemoveATT)
-   [RemoveAnchorClass(name)](scripting-alpha.html#RemoveAnchorClass)
-   [RemoveLookup(lookup-name)](scripting-alpha.html#RemoveLookup)
-   [RemoveLookupSubtable(subtable-name)](scripting-alpha.html#RemoveLookupSubtable)
-   [RemovePosSub(subtable-name)](scripting-alpha.html#RemovePosSub)
-   [RemovePreservedTable(tag)](scripting-alpha.html#RemovePreservedTable)
-   [SaveTableToFile(tag,filename)](scripting-alpha.html#SaveTableToFile)

### Built-in procedures that act like the Encoding Menu

-   [CharCnt()](scripting-alpha.html#CharCnt)
-   [DetachGlyphs](scripting-alpha.html#DetachGlyphs)
-   [DetachAndRemoveGlyphs](scripting-alpha.html#DetachAndRemoveGlyphs)
-   [LoadEncodingFile(filename)](scripting-alpha.html#LoadEncodingFile)
-   [MultipleEncodingsToReferences()](scripting-alpha.html#MultipleEncodingsToReferences)
-   [Reencode(encoding-name[,force])](scripting-alpha.html#Reencode)
-   [RemoveDetachedGlyphs](scripting-alpha.html#RemoveDetachedGlyphs)()
-   [RenameGlyphs(namelist-name)](scripting-alpha.html#RenameGlyphs)
-   [SameGlyphAs](scripting-alpha.html#SameGlyphAs)
-   [SetCharCnt(cnt)](scripting-alpha.html#SetCharCnt)

### Built-in procedures that act like the Hint Menu

-   [AddDHint(x1,y1,x2,y2,unit.x,unit.y)](scripting-alpha.html#AddDHint)
-   [AddHHint(start,width)](scripting-alpha.html#AddHHint)
-   [AddInstrs(thingamy,replace,instrs)](scripting-alpha.html#AddInstrs)
-   [AddVHint(start,width)](scripting-alpha.html#AddVHint)
-   [AutoCounter()](scripting-alpha.html#AutoCounter)
-   [AutoHint()](scripting-alpha.html#AutoHint)
-   [AutoInstr()](scripting-alpha.html#AutoInstr)
-   [ChangePrivateEntry(key,val)](scripting-alpha.html#ChangePrivateEntry)
-   [ClearGlyphCounterMasks()](scripting-alpha.html#ClearGlyphCounterMasks)
-   [ClearHints()](scripting-alpha.html#ClearHints)
-   [ClearInstrs()](scripting-alpha.html#ClearInstrs)
-   [ClearPrivateEntry(key)](scripting-alpha.html#ClearPrivateEntry)
-   [ClearTable(tag)](scripting-alpha.html#ClearTable)
-   [DontAutoHint()](scripting-alpha.html#DontAutoHint)
-   [FindOrAddCvtIndex(value[,sign-matters])](scripting-alpha.html#FindOrAddCvtIndex)
-   [GetCvtAt(index)](scripting-alpha.html#GetCvtAt)
-   [GetPrivateEntry(key)](scripting-alpha.html#GetPrivateEntry)
-   [HasPrivateEntry(key)](scripting-alpha.html#HasPrivateEntry)
-   [ReplaceGlyphCounterMasks(array)](scripting-alpha.html#ReplaceGlyphCounterMasks)
-   [ReplaceCvtAt(index,value)](scripting-alpha.html#ReplaceCvtAt)
-   [SetGlyphCounterMask(cg,hint-index,hint-index,...)](scripting-alpha.html#SetGlyphCounterMask)
-   [SubstitutionPoints()](scripting-alpha.html#SubstitutionPoints)

### Built-in procedures that act like the Metrics Menu

-   [AutoKern(spacing,threshold,subtable-name[,kernfile])](scripting-alpha.html#AutoKern)
-   [AutoWidth(spacing)](scripting-alpha.html#AutoWidth)
-   [CenterInWidth()](scripting-alpha.html#CenterInWidth)
-   [SetKern(ch2,offset[,lookup-subtable])](scripting-alpha.html#SetKern)
-   [RemoveAllKerns()](scripting-alpha.html#RemoveAllKerns)
-   [RemoveAllVKerns()](scripting-alpha.html#RemoveAllVKerns)
-   [SetLBearing(lbearing[,relative])](scripting-alpha.html#SetLBearing)
-   [SetRBearing(rbearing[,relative])](scripting-alpha.html#SetRBearing)
-   [SetVKern(ch2,offset[,lookup-subtable])](scripting-alpha.html#SetVKern)
-   [SetVWidth(vertical-width[,relative])](scripting-alpha.html#SetVWidth)
-   [SetWidth(width[,relative])](scripting-alpha.html#SetWidth)
-   [VKernFromHKern()](scripting-alpha.html#VKernFromHKern)

### Multiple master routines

-   [MMAxisBounds(axis)](scripting-alpha.html#MMAxisBounds)
-   [MMAxisNames()](scripting-alpha.html#MMAxisNames)
-   [MMBlendToNewFont(weights)](scripting-alpha.html#MMBlendToNewFont)
-   [MMChangeInstance(instance)](scripting-alpha.html#MMChangeInstance)
-   [MMChangeWeight(weights)](scripting-alpha.html#MMChangeWeight)
-   [MMInstanceNames()](scripting-alpha.html#MMInstanceNames)
-   [MMWeightedName()](scripting-alpha.html#MMWeightedName)

### CID routines

-   [CIDChangeSubFont(new-sub-font-name)](scripting-alpha.html#CIDChangeSubFont)
-   [CIDFlatten()](scripting-alpha.html#CIDFlatten)
-   [CIDFlattenByCMap(cmap-filename)](scripting-alpha.html#CIDFlattenByCMap)
-   [CIDSetFontNames(fontname[,family[,fullname[,weight[,copyright-notice]]]])](scripting-alpha.html#CIDSetFontNames)
-   [ConvertToCID(registry, ordering,
    supplement)](scripting-alpha.html#ConvertToCID)
-   [ConvertByCMap(cmapfilename)](scripting-alpha.html#ConvertByCMap)
-   [PreloadCidmap(filename,registry,ordering,supplement)](scripting-alpha.html#PreloadCidmap)

### User Interaction

-   [AskUser(question[,default-answer])](scripting-alpha.html#AskUser)
-   [Error(str)](scripting-alpha.html#Error)
-   [PostNotice(str)](scripting-alpha.html#PostNotice)
-   [Print(arg1,arg2,arg3,...)](scripting-alpha.html#Print)

### Preferences

-   [DefaultOtherSubrs()](scripting-alpha.html#DefaultOtherSubrs)
-   [GetPref(str)](scripting-alpha.html#GetPref)
-   [LoadEncodingFile(filename)](scripting-alpha.html#LoadEncodingFile)
-   [LoadNamelist(filename)](scripting-alpha.html#LoadNamelist)
-   [LoadNamelistDir([directory-name])](scripting-alpha.html#LoadNamelistDir)
-   [LoadPlugin(filename)](scripting-alpha.html#LoadPlugin)
-   [LoadPluginDir([directory-name])](scripting-alpha.html#LoadPluginDir)
-   [LoadPrefs()](scripting-alpha.html#LoadPrefs)
-   [ReadOtherSubrsFile(filename)](scripting-alpha.html#ReadOtherSubrsFile)
-   [SavePrefs()](scripting-alpha.html#SavePrefs)
-   [SetPref(str,val[,val2])](scripting-alpha.html#SetPref)
-   It it also possible to get the value of a preference item by
    preceding its name with a dollar sign.

### Math

-   [ATan2(val1,val2)](scripting-alpha.html#ATan2)
-   [Ceil(real)](scripting-alpha.html#Ceil)
-   [Chr(int)](scripting-alpha.html#Chr)
-   [Cos(val)](scripting-alpha.html#Cos)
-   [Exp(val)](scripting-alpha.html#Exp)
-   [Floor(real)](scripting-alpha.html#Floor)
-   [Int(real)](scripting-alpha.html#Int)
-   [IsFinite(real)](scripting-alpha.html#IsFinite)
-   [IsNan(real)](scripting-alpha.html#IsNan)
-   [Log(val)](scripting-alpha.html#Log)
-   [Ord(string[,pos])](scripting-alpha.html#Ord)
-   [Pow(val1,val2)](scripting-alpha.html#Pow)
-   [Rand()](scripting-alpha.html#Rand)
-   [Real(int)](scripting-alpha.html#Real)
-   [Round(real)](scripting-alpha.html#Round)
-   [Sin(val)](scripting-alpha.html#Sin)
-   [Sqrt(val)](scripting-alpha.html#Sqrt)
-   [Strskipint(str[,base])](scripting-alpha.html#Strskipint)
-   [Strtod(str)](scripting-alpha.html#Strtod)
-   [Strtol(str[,base])](scripting-alpha.html#Strtol)
-   [Tan(val)](scripting-alpha.html#Tan)
-   [ToString(arg)](scripting-alpha.html#ToString)
-   [UCodePoint(int)](scripting-alpha.html#UCodePoint)

### Unicode

-   [NameFromUnicode(uni[,namelist])](scripting-alpha.html#NameFromUnicode)
-   [UCodePoint(int)](scripting-alpha.html#UCodePoint)
-   [UnicodeFromName(name)](scripting-alpha.html#UnicodeFromName)
-   [Ucs4(str)](scripting-alpha.html#Ucs4)
-   [Utf8(int)](scripting-alpha.html#Utf8)

### String manipulation

-   [Chr(int)](scripting-alpha.html#Chr)
-   [GetEnv(str)](scripting-alpha.html#GetEnv)
-   [NameFromUnicode(uni[,namelist])](scripting-alpha.html#NameFromUnicode)
-   [Ord(string[,pos])](scripting-alpha.html#Ord)
-   [Strcasecmp(str1,str2)](scripting-alpha.html#Strcasecmp)
-   [Strcasestr(haystack,needle)](scripting-alpha.html#Strcasestr)
-   [Strftime(format[,isgmt[,locale]])](scripting-alpha.html#Strftime)
-   [StrJoin(array,delimiter)](scripting-alpha.html#StrJoin)
-   [Strlen(str)](scripting-alpha.html#Strlen)
-   [Strrstr(haystack,needle)](scripting-alpha.html#Strrstr)
-   [Strskipint(str[,base])](scripting-alpha.html#Strskipint)
-   [StrSplit(str,delimiter[,max-count])](scripting-alpha.html#StrSplit)
-   [Strstr(haystack,needle)](scripting-alpha.html#Strstr)
-   [Strsub(str,start[,end])](scripting-alpha.html#Strsub)
-   [Strtod(str)](scripting-alpha.html#Strtod)
-   [Strtol(str[,base])](scripting-alpha.html#Strtol)
-   [ToString(arg)](scripting-alpha.html#ToString)
-   [UnicodeFromName(name)](scripting-alpha.html#UnicodeFromName)
-   [Ucs4(str)](scripting-alpha.html#Ucs4)
-   [Utf8(int)](scripting-alpha.html#Utf8)

### Character Manipulation

-   [IsAlNum(val)](scripting-alpha.html#IsAlNum)
-   [IsAlpha(val)](scripting-alpha.html#IsAlpha)
-   [IsDigit(val)](scripting-alpha.html#IsDigit)
-   [IsHexDigit(val)](scripting-alpha.html#IsHexDigit)
-   [IsLower(val)](scripting-alpha.html#IsLower)
-   [IsSpace(val)](scripting-alpha.html#IsSpace)
-   [IsUpper(val)](scripting-alpha.html#IsUpper)
-   [ToLower(val)](scripting-alpha.html#ToLower)
-   [ToMirror(val)](scripting-alpha.html#ToMirror)
-   [ToUpper(val)](scripting-alpha.html#ToUpper)

### Arrays

-   [Array(size)](scripting-alpha.html#Array)
-   [SizeOf(arr)](scripting-alpha.html#SizeOf)

### Miscellaneous

-   [InFont(arg)](scripting-alpha.html#InFont)
-   [TypeOf(any)](scripting-alpha.html#TypeOf)

### Deprecated Names

-   [ClearCharCounterMasks()](scripting-alpha.html#ClearGlyphCounterMasks)
-   [CharInfo(str)](scripting-alpha.html#GlyphInfo)
-   [ReplaceCharCounterMasks(array)](scripting-alpha.html#ReplaceGlyphCounterMasks)
-   [SetCharColor(color)](scripting-alpha.html#SetGlyphColor)
-   [SetCharComment(comment)](scripting-alpha.html#SetGlyphComment)
-   [SetCharCounterMask(cg,hint-index,hint-index,...)](scripting-alpha.html#SetGlyphCounterMask)
-   [SetCharName(name[,set-from-name-flag])](scripting-alpha.html#SetGlyphName)

* * * * *

Examples
--------

-   [FontForge's testsuite in the test
    subdirectory](http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=summary)
    (such as it is)
-   [Directory of donated scripts](scripts/)
-   Scripts used in other projects
    -   [x-symbol](http://sourceforge.net/projects/x-symbol/)

-   [the scripting tutorial](scripting-tutorial.html)

### Example 1:

>     #Set the color of all selected glyphs to be yellow
>     #designed to be run within an interactive fontforge session.
>     foreach
>       SetCharColor(0xffff00)
>     endloop

### Example 2:

>     #!/usr/local/bin/fontforge
>     #This is the sfddiff script which compares two fonts
>
>     if ( Strtol($version) < 20060330 )
>       Error( "Please upgrade to a more recent version of fontforge" )
>     endif
>
>     flags=0x789
>     outfile=""
>
>     while ( $argc > 1 && Strsub($1,0,1)=="-" )
>       temp = $1
>       if ( Strsub(temp,1,2)=='-' )
>         temp = Strsub(temp,1)
>       endif
>
>       if ( temp=="-ignorehints" )
>         flags = flags & ~0x8
>       elseif ( temp=="-ignorenames" )
>         flags = flags & ~0x100
>       elseif ( temp=="-ignoregpos" )
>         flags = flags & ~0x200
>       elseif ( temp=="-ignoregsub" )
>         flags = flags & ~0x400
>       elseif ( temp=="-ignorebitmaps" )
>         flags = flags & ~0x80
>       elseif ( temp=="-exact" )
>         flags = flags | 0x2
>       elseif ( temp=="-warn" )
>         flags = flags | 0x44
>       elseif ( temp=="-merge" )
>         flags = flags | 0x1800
>         shift
>         outfile = $1
>       elseif ( temp=="-help" )
>         Print( "sfddiff: [--version] [--help] [--usage] [--ignorehints] [--ignorenames] [--ignoregpos] [--ignoregsup] [--ignorebitmaps] [--warn] [--exact] fontfile1 fontfile2" )
>         Print( " Compares two fontfiles" )
>         Print( " --ignorehints: Do not compare postscript hints or truetype instructions" )
>         Print( " --ignorenames: Do not compare font names" )
>         Print( " --ignoregpos:  Do not compare kerning, etc." )
>         Print( " --ignoregsub:  Do not compare ligatures, etc." )
>         Print( " --ignorebitmaps: Do not compare bitmap strikes" )
>         Print( " --exact:       Normally sfddiff will match contours which are not exact" )
>         Print( "                but where the differences are slight (so you could compare" )
>         Print( "                truetype and postscript and get reasonable answers). Also" )
>         Print( "                normally sfddiff will unlink references before it compares" )
>         Print( "                (so you can compare a postscript font (with no references)" )
>         Print( "                to the original source (which does have references)). Setting")
>         Print( "                this flag means glyphs must match exactly.")
>         Print( " --warn:        Provides a warning when an exact match is not found" )
>         Print( " --merge outfile: Put any outline differences in the backgrounds of" )
>         Print( "                appropriate glyphs" )
>     return(0)
>       elseif ( temp=="-version" )
>         Print( "Version 1.0" )
>     return(0)
>       else
>     break
>       endif
>       shift
>     endloop
>
>     if ( $argc!=3 || $1=="--usage" || $1=="-usage" )
>       Print( "sfddiff: [--version] [--help] [--usage] [--ignorehints] [--ignorenames] [--ignoregpos] [--ignoregsup] [--ignorebitmaps] [--warn] [--exact] [--merge outfile] fontfile1 fontfile2" )
>     return(0)
>     endif
>
>     Open($2)
>     Open($1)
>     CompareFonts($2,"-",flags)
>     if ( outfile!="" )
>       Save(outfile)
>     endif

### Example 3:

>     #!/usr/local/bin/fontforge
>     #Take a Latin font and apply some simple transformations to it
>     #prior to adding cyrillic letters.
>     #can be run in a non-interactive fontforge session.
>     Open($1);
>     Reencode("KOI8-R");
>     Select(0xa0,0xff);
>     //Copy those things which look just like latin
>     BuildComposit();
>     BuildAccented();
>
>     //Handle Ya which looks like a backwards "R"
>     Select("R");
>     Copy();
>     Select("afii10049");
>     Paste();
>     HFlip();
>     CorrectDirection();
>     Copy();
>     Select(0u044f);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     //Gamma looks like an upside-down L
>     Select("L");
>     Copy();
>     Select(0u0413);
>     Paste();
>     VFlip();
>     CorrectDirection();
>     Copy();
>     Select(0u0433);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     //Prepare for editing small caps K, etc.
>     Select("K");
>     Copy();
>     Select(0u043a);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     Select("H");
>     Copy();
>     Select(0u043d);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     Select("T");
>     Copy();
>     Select(0u0442);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     Select("B");
>     Copy();
>     Select(0u0432);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     Select("M");
>     Copy();
>     Select(0u043C);
>     Paste();
>     CopyFgToBg();
>     Clear();
>
>     Save($1:r+"-koi8-r.sfd");
>     Quit(0);

The Execute Script dialog
-------------------------

This dialog allows you to type a script directly in to FontForge and
then run it. Of course the most common case is that you'll have a script
file somewhere that you want to execute, so there's a button [Call] down
at the bottom of the dlg. Pressing [Call] will bring up a file picker
dlg looking for files with the extension \*.pe (you can change that by
typing a wildcard sequence and pressing the [Filter] button). After you
have selected your script the appropriate text to text to invoke it will
be placed in the text area.

The current font of the script will be set to whatever font you invoked
it from (in python this is `fontforge.activeFontInUI()`).

Note that if you try to print from a script the output will go to
stdout. If you have invoked fontforge from a window manager's menu
stdout will often be bound to /dev/null and not useful. Try starting
fontforge from the command line instead.

The Scripts Menu
----------------

You can use the preference dialog to create a list of frequently used
scripts. Invoke [File-\>Preferences](prefs.html#scripts) and select the
Scripts tag. In this dialog are ten possible entries, each one should
have a name (to be displayed in the menu) and an associated script file
to be run.

After you have set up your preferences you can invoke scripts from the
font view, either directly from the menu (File-\>Scripts-\>\<your
name\>) or by a hot key. The first script you added will be invoked by
Cnt-Alt-1, then second by Cnt-Alt-2, and the tenth by Cnt-Alt-0.

The current font of the script will be set to whatever font you invoked
it from.

-- [Prev](HotKeys.html) -- [TOC](overview.html) --
[Next](PfaEdit-TeX.html) --
