How to build the site
=====================

	$ ./build src/*.md

Pages
=====

Each page should have a `*.md` file assiciated with it, starting with these lines:

	+++
	title="Page title"
	section=""
	bits=""
	+++

`bits` is where you stick things you want to go into the header. I'll explain `section` later.

If you want to be lazy, then just do `./add-page` and it will make a .md file with the required lines.



Todo
====


- fix lines ending in \
- the \<dl\> tags on some page have been stripped. find them and copy it back.

- make use of section variable
- fix anchor linking problem
- Move a bunch of stuff from helpout.html to features.html and acknowledgements
- Integrate http://dmtr.org/ff.php into site
- Make the stylesheet more sane
- Rewrite build/install pages
- make test page with various elements and style the to all match


To add
======

- [ff install for mountain lion](http://www.pixilate.com/about/installing-fontforge-in-mountain-lion)
- [info from wiki](http://sourceforge.net/apps/trac/fontforge/wiki)
- emacs hacking:

---

  I'm hacking on the FontForge code using emacs. Earlier today I
thinkered with my .emacs to force spacing and indentation to be closer
to what seems to be in use. I thought I'd drop my handywork here in case
others are hacking using emacs and have some additions/modifications
which might help making cleaner code.

	(c-add-style
	 "fontforge"
	 '("stroustrup"
	   (indent-tabs-mode . t)
	   (tab-width . 8)
	   (c-basic-offset . 4)
	   )
	 )
	(defun my-fontforge-style-hook ()
	  (c-set-style "fontforge")
	  (setq show-trailing-whitespace nil)
	)


	(setq ff-style-path-alist
	  (list (expand-file-name "/usr/local/src/git/fontforge")))
	(add-hook 'c-mode-hook (lambda ()
	  (dolist (path ff-style-path-alist)
	   (if (string-match path (buffer-file-name))
	     (my-fontforge-style-hook)))))

---


Path
====

Going through from overview using next buttons :)
Note: on importexample.html there is a nice, sane list of links, which is more workflow-centric.

- overview.html
- editexample.html
- editspiro.html
- importexample.html
- editexample2.html
- editexample3.html
- editexample4.html
- editexample5.html
- editexample6.html
- editexample6-5.html
- editexample7.html
- scriptnotes.html
- 
- [then it starts into ui pages]
- 
- fontview.html
- charview.html
- bitmapview.html
- metricsview.html
- filemenu.html
- editmenu.html
- pointmenu.html
- elementmenu.html
- toolsmenu.html
- hintsmenu.html
- encodingmenu.html
- viewmenu.html
- metricsmenu.html
- cidmenu.html
- mmmenu.html
- windowmenu.html
- helpmenu.html
- HotKeys.html
- 
- scripting.html
- PfaEdit-TeX.html
- errrecovery.html
- xres.html
- cliargs.html
- files.html
- src.html
- sfdformat.html
- bezier.html
- corpchar.html
- 
- [breaks at ./sfds/index.html]
