How to build the site
=====================

	$ ./build/go src/*.md

Pages
=====

Each page should have a `*.md` file assiciated with it, starting with these lines:

	+++
	title="Page title"
	section=""
	bits=""
	+++

`bits` is where you stick things you want to go into the header. I'll explain `section` later.

If you want to be lazy, then just do 

	./build/add src/page.md

and it will make a .md file with the required lines.
