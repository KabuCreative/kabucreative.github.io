# Source for kabucreative.com.au

<img src="https://travis-ci.org/KabuCreative/kabucreative.github.io.svg?branch=master" alt="CI status"/>

This website is built with [Jekyll](http://jekyllrb.com) and hosted on Github Pages.

## Adding New Pages

New projects should be added to the root directory, named as `<slug>.html`.  Available front matter:

```yaml
---
layout: <default> or <sidebar>
title: <page title>
description: <text used for meta description>
permalink: </desired-slug/>
id: <should match desired-slug> # Used for navigation pointer
banner: <image-name> # Name of banner image.  Mobile images should be called <image-name-mobile>.
redirect_from:
  - <redirected URL 1>
  - <redirected URL 2>
---
```
