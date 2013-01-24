---
layout: default
title: FontForge Developer Documentation
---

### Coding Style

TODO: Add a clear explanation of the FontForge coding style. 

#### Git Commit Messages

When committing changes, please follow the git commit message guidelines: 

http://git.kernel.org/?p=git/git.git;a=blob;f=Documentation/SubmittingPatches;hb=HEAD

When making a pull request on GitHub, please include the long description to the commit messages themselves, not only in the pull request.

#### Code Style for Emacs

If you use Emacs, add this to your .emacs to force spacing and indentation to
be closer to the FontForge style (by monkeyiq):

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

