[fontforge.github.io](http://fontforge.github.io)
====================

This is the FontForge website repository. To contribute, please create issues, 
join the fontforge-devel list to discuss general topics, or simply make 
Pull Requests. Please don’t hesitate to ask for direct commit access. You 
can then use GitHub to edit pages directly, like a wiki.

How This Site Is Made
---------------------

This site is made with the [Jekyll](http://jekyllrb.com/docs/home/) content management system, and
hosted on [GitHub pages](http://pages.github.com).

If you’re not familiar with GitHub, they have [excellent help pages](https://help.github.com).

#### Directory Layout

- `_layouts/*.html` HTML template files
- `_includes/*.html` Snippets of HTML that are included in pages and templates
- `assets/` CSS, JS and image files
- `_config.yml` Configuration for Jekyll (the website generator)
- `en-US/` The site’s contents, in US English
- `meta/` Files made to redevelop the site, including a to-do list, sitemap 
  visualisation, and mock up pages for the homepage, other pages and navigation.

**Note:** `meta/TODO.md` has a list of TODO items, which was made when the website was in its
initial development phase. In the future, GitHub issues may be used.

#### File Formats

Each page is in Markdown format, with a `.md` file extension. These files are converted into corresponding `.html` files by Jekyll when they start with these lines:

- published: if the page should not be published, set this to `false`
- layout: `bookpage` is the default
- weight: an integer value from 1 to 100 that effects the ordering of the page in the sidebar and homepage lists
- category: the category the page belongs in
- title: the page title used in the title tag and h1 of the page

Example:

```
    ---
    published: true
    layout: bookpage
    weight: 60
    category: Workflow
    title: Page Title
    ---
```

We have a simple script to make such a page:

    ./_build/add en-US/path/to/page.md

This will make a file with the required lines.

#### How to build the site

First install Jekyll, with `gem`:

    sudo gem install jekyll

To see the site as it will appear after processing by Jekyll and review your edits live in a browser layout, run:

    jekyll serve --watch

Now browse [http://localhost:4000/](http://localhost:4000/).
