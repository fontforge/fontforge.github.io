Todo
====


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
