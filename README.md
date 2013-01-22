fontforge.github.com
====================

This is the FontForge website repository. To contribute, please fork this
on www.github.com/fontforge/fontforge.github.com/ and make a pull request,
or join the fontforge-devel list to discuss.

Directory Layout
------------------

- `README-HOWTO.md` Instructions for working with site

- `meta/` Files made to redevelop the site (To Do list, sitemap visualisation,
  ideas for homepage and nav copy)

- `src/` Source pages -- the meat of the site, so please **edit these!**

- `build/` Build scripts to convert source pages into html files

- `www/*.html` html files as served *(Don't change these because they are
  generated from the source files with the build scripts!)*

- `www/img/` images as served

- `www/css/` css as served

- `www/js/` javascript as served

Files of interest
-------------------

- `TODO.md` Todo list
- `documentation.md` Organization for the documentation
- `homepage.md` Ideas for homepage
- `navigation.md` Ideas for navigation and main section

How to build the site
-------------------

This site uses (Jeykll)[https://github.com/mojombo/jekyll/wiki/Usage]

Each page is in MarkDown format, with a `.md` file extension. 

These files are converted into corresponding .html files by Jekyll when they start with these lines:

```
    ---
    title: Page title
    layout: default
    ---
```

We have a simple script to make such a page:

    ./_build/add en-US/path/to/page.md

This will make a file with the required lines.