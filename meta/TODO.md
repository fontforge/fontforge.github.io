Content
=============

To convert the old site to the new site, Brian Zick ran the 
`build/old/clean` script, which uses pandoc (`apt-get install pandoc`). 
You may want to change the `for j in *.html` on line 5 to 
`for j in $(find -type f | grep ".html")` and for YAML front matter
change line 14 to something like
```
echo "---
layout: default
title: $title
---"
```

- fix lines ending in \
- the \<dl\> tags on some page have been stripped. find them and copy it back.

- make use of section variable
- fix anchor linking problem
- Move a bunch of stuff from helpout.html to features.html and acknowledgements
- Integrate http://dmtr.org/ff.php into site
- Rewrite build/install pages
- make test page with various elements and style the to all match
- Add `prev=""` and `next=""` to pages in pertinent sections
- Add way to add TOC on pertinent pages


Content To Add
-----------------

- [ff install for mountain lion](http://www.pixilate.com/about/installing-fontforge-in-mountain-lion)
- [info from wiki](http://sourceforge.net/apps/trac/fontforge/wiki)
- Add HTML files with meta tags to redirect them so we dont give people 404s
- Add note about Mac copy and paste from '[Fontforge-users] Can't copy/paste references' thread
- Add util for svg splitting (fontforge -lang=ff -c 'Open($1); SelectWorthOutputting(); foreach
Export("svg"); endloop;' font_file.ttf)
- Add a note about 'Add Extrema' as per https://github.com/fontforge/fontforge/pull/125
- Add a note about how to make translations: `make -C po potfile; cd po; msgmerge ru.po FontForge.pot > ru.po`

HTML/CSS
=============

Small
------

- history mock has a bigtext class missing from a para
- add a different :visited color
- rework the table of contents transition on the 'show all' text so it doesnt fade in/out, just transitions directly
- make the footer title h2 same size as the h4s and just 'FontForge'
- make no top nav active on homepage
- main texts narrower (span 9 not 10?)
- add a little right padding to the chevrons used in the table of contents
- add line breaks for the netx/prev texts in table of contents
- make .imageright have -300 so it doesn't effect paragraph width


Medium
-------

- add a sitemap.xml for search engine indexing
- add a copyright and license notice to the footer (Copyright © 2000–2012, <a href="contributors.html">George Williams and others</a>, and shared under the <a href="license.html">revised BSD license</a>.)
- add mailing list search boxes to the homepage
- add retina versions of all bitmap images
- add a lightbox (perhaps bootstrap modal?) for see enlarged images 

Big Tasks
---------

- Get the GitHub API working on the masthead mockup
- Using a thin space as the separator in the masthead downloads stat, not a . or ,
- Make the masthead background a canvas or SVG (with appropriate fallback) that animates on load and mouse movement like okfestival.org
- use an icon font like Font Awesome instead of icon images (consider the 'code on github' button on pybossa.com)
- WL: Change the absolute width of the 'page body' container, so it
  increases if you increase the font size. (On my 1680x1050 laptop screen, with
  Firefox opened fullscreen, almost the 50% of the width stays unused today). 
  Due to this fixed size, after pressing Ctrl-+ a few times, the 
  'Documentation'  label text overlaps with the its right neighbour button.
- Check the display of tables. Find all the pages in the old HTML site 
  with `grep -i -r "<table>"` and compare the display with the generated 
  markdown pages to see if the tables converted in to markdown. If not, fi
  by hand.

Narrowest Design
-----------------

- Put top nav links on a single row, not a single col
- Hover color should be the grey currently used for active
- Active color should be the wider design highlight color
- toggle should be open by default
- toggle should toggle the whole nav area, on all pages
- searchbox should be aligned right
- download and stats areas of masthead to float left, not be on their own rows
- roundel under masthead to be centered
- screenshots to float left, not be on their own rows
- footer to have 2 cols (since the cols are so narrow, single col doesnt make sense)
- video in black container gets really small, should be much bigger


Future Ideas
--------------

- Ask SourceForge to make this Project of the Month
- convert css to sass/compass
- convert html to haml 
- give a individual page design to the key pages - download, tutorials, about, donate, others?
- 
