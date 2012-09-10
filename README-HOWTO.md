How to build the site
=====================

	$ ./build/go src/*.md

Note: this requires Pandoc.

Pages
=====

Each page should have a `*.md` file assiciated with it, starting with these lines:

	+++
	title="Page title"
	section=""
	bits=""
	+++

`bits` is where you stick things you want to go into the header.

If you want to be lazy, then just do 

	./build/add src/page.md

and it will make a .md file with the required lines.

section=""
----------

This defines the section so that the page may use the appropriate template.