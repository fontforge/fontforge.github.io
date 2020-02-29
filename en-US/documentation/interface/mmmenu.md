---
published: true
layout: default
title: Multiple Master menu
---

The MM Menu provides a few commands for manipulating [Multiple Master or
Apple distortable fonts](../multiplemaster/#MM). If the current font is
a MM itself font the menu also includes a list of all font instances
that make up this one. This menu is available in the [font
view](#fontview) and the [outline glyph view](#outline-char).


[table_of_contents]


### Font View

The menu as it appears in the font view.


#### Create MM

Brings up the [multiple master dialog](../multiplemaster/) and allows
you to create your own multiple master font from scratch.


#### MM Valid

Checks that the current multiple master font can be saved. So each
master design must match in:

-   Contours
    -   There must be the same number of contours and
    -   each contour must have the same number of points and
    -   each spline on the contour must be the same type (ie it can't
        correspond to a straight line in one font and a curve in
        another)
-   References
    -   There must be the same number of references and
    -   Each corresponding reference must refer to the same encoding
-   Hints
    -   Same number of hints
-   HintMasks (Counter masks are not supported here)
    -   HintMasks at corresponding points must specify a corresponding
        set of hints
-   Kerning
    -   If a glyph kerns with another glyph in one font, then a
        corresponding kerning pair must exist in all designs


#### MM Info

Brings up the [multiple master dialog](../multiplemaster/) and allows
you to modify the current multiple master font.


#### Blend to New Font...

Allows you to create a blended version of the current multiple master
font set as a stand alone font.


#### MM Change Default Weights

Allows you to change the default weights assigned to each master design
used in blending the default instance of the font


#### (sub font name)

Clicking on a different sub font name in the menu will cause that
sub-font to be displayed instead of the current one. The subfonts are
the master designs and the default blended font.


### Glyph View

The menu as it appears in the <a name="outline-char">outline glyph</a> view.


#### MM Reblend

Reblends the default version of the current glyph


#### View

A submenu which allows you to choose which of the designs of this glyph
you want displayed in the background of the view


#### (sub font name)

Clicking on a different sub font name in the menu will cause the glyph
from that sub-font to be displayed instead of the current one. The
subfonts are the master designs and the default blended font.
