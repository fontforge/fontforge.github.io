How to build the site
=====================

This site uses (Jeykll)[https://github.com/mojombo/jekyll/wiki/Usage]

Pages
=====

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