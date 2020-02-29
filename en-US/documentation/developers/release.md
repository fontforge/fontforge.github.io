---
published: true
layout: default
title: Making a FontForge Release
---

This page will describe how to make a release


### Update Website

#### Update Download Pages

For Mac and Windows, update the download pages and change the URLs to the new Github Release URLs.

#### Update Download Counter to count new release

The download count shown on the homepage and downloads pages is fetched from the Github API.
The API has a release ID that is used by the Javascript that displays the count. 
To list all the possible release ID values, run:

```py
python -c "import urllib; import json; print [(x['id'], x['name']) for x in json.loads(urllib.urlopen('https://api.github.com/repos/fontforge/fontforge/releases').read())]"
```

Then edit the [downloads.html(https://github.com/fontforge/fontforge.github.io/edit/master/_layouts/downloads.html#L39) and `_includes/homepage-end.html` files and replace the current ID with the latest
(Example [part 1](https://github.com/fontforge/fontforge.github.io/commit/23667bd00510df8ff8285a524d87b7ac13da05ee) and [part 2](https://github.com/fontforge/fontforge.github.io/commit/b8d8d8b0ae1c9a9bc1c3b356243d28db8d306eac))

### Announce

Email the fontforge-users email list ([example](http://fontforge.10959.n7.nabble.com/fontforge-users-Release-Announcement-td14554.html))

Tweet the release from @fontforge
