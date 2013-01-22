fontforge.github.com
====================

This is the FontForge website repository. To contribute, please create issues, 
join the fontforge-devel list to discuss general topics, or simply make 
pull requests. Please don't hesitate to ask for direct commit access.

Directory Layout
------------------

- `meta/` Files made to redevelop the site, including a to-do list, sitemap 
  visualisation, and mock up pages for the homepage, other pages and navigation

- `_layouts/*.html` html template files

- `_includes/*.html` snippets of HTML that are included in pages and templates

- `assets/` CSS, JS and image files

- `_config.yml` Configuration for Jeykll (ignore this file)

- `_build/` Some older build scripts to convert source pages from the old site 
  into md files (ignore this directory)

- `en-US/` The site's contents, in US English. 

Files of interest
-------------------

- `meta/TODO.md` 

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