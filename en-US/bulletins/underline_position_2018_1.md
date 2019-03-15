---
published: true
layout: default
title: Technical Bulletin&#58; Incorrect handling of underline position in FontForge.
---

## Overview

Recent bug reports have revealed present and historical problems with FontForge's handling of underline position. The next release will fix the software problem, but users may need to fix their existing files.

## Technical Details

FontForge generally follows PostScript conventions. Under these conventions, the underline position is an up-positive offset from baseline to the center of the underline. (Usually negative.) In TrueType's `post` table, the underline position is an up-positive offset from the baseline to the top of the underline.

For about three years, from commits [2114635](https://github.com/fontforge/fontforge/commit/211463509c94cb98d5def5315da69560061e8a4b) and [5aa59fb](https://github.com/fontforge/fontforge/commit/5aa59fb77c642ee80b4ed16f9136182a3220576b) in 2015 to commits [9e9278c](https://github.com/fontforge/fontforge/commit/9e9278c66ecc47290accb4e9e4aff82e8578ce1e) and [9f667c9](https://github.com/fontforge/fontforge/commit/9f667c9c1e13104bcb612e4d28f8ec18ba967f50) in 2018, FontForge incorrectly computed the underline position on import, on export, or on both operations to/from TrueType by adjusting in the wrong direction for the thickness of the underline. The underline was thus positioned too high in FontForge. This additionally affected SFD resulting from bad imports and any files exported from those bad imports. See also commit [5aa59fb](https://github.com/fontforge/fontforge/commit/5aa59fb77c642ee80b4ed16f9136182a3220576b) from 2017.

The issues are now corrected. But files generated in the last three years may have incorrect underline positions requiring manual adjustment.

## Assessing Existing Files

* If your font did not enter FontForge through TrueType/OpenType format and you set the underline position according to PostScript conventions, SFD originals and exports other than TrueType/OpenType files are likely to be okay. It may be necessary to regenerate TrueType/OpenType files.
* If your font did not enter FontForge through TrueType/OpenType format, but you set the underline position according to test results with an exported TrueType/OpenType file, you may need to adjust your SFD or UFO originals and to regenerate any exported files, including OpenType files with CFF tables.
* If your font entered FontForge through TrueType/OpenType format and you did not adjust the underline position. It is probably wrong in your SFD originals and all exported files.

## Fixing Affected Files

* First install the newest release of FontForge.
* Open your SFD original.
* If you know what the underline position ought to be in PostScript format, skip the next step.
* If you have a TrueType/OpenType font that looks correct, import it into FontForge, and check the underline position (as indicated in the next step).
* Set the underline position in your original font (Top menu >> Element >> Font Info >> General >> Underline Position).
* Save the original file (likely under a new name).
* Regenerate all downstream files.

## Additional Details

See also pull requests [3389](https://github.com/fontforge/fontforge/pull/3389) and [3323](https://github.com/fontforge/fontforge/pull/3389).
