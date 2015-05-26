# Source for kabucreative.com

<img src="https://travis-ci.org/KabuCreative/kabucreative.github.io.svg?branch=master" alt="CI status"/>

This website is built with [Jekyll](http://jekyllrb.com) and hosted on Github Pages.

## Adding New Pages

New pages should be added to the root directory, named as `<slug>.html`.  Available front matter:

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
## Style Guide

### Embossed effect when creating new banner images

*N.B. The following instructions have been tested with Gimp 2.8.14&mdash;amendments may need to be made for other software or versions.*

1.  Create text layer with `<MATT_COLOUR>`.
1.  Add a new layer above it - fill it with any colour.
1.  Right click on text layer and select `Alpha to selection`.
1.  Delete selection from layer above.
1.  Create a drop shadow from this layer.
    1.  For large letters, select `offset x: 3, offset y: 3, blur radius: 2`, for small letters select `offset x: 2, offset y: 2, blur radius: 1`.
    1.  Choose `<SHADOW_COLOUR>` as color and specify opacity.
    1.  Untick `Allow Resizing`.
1.  Delete layer filled with any colour.
1.  Right click on text layer and select `Alpha to selection`.
1.  Invert selection.
1.  Move to layer above and delete selection - this should leave you with an *internal* drop shadow on this layer.
1. Create a new layer above the text layer and below the shadow layer.
1. Right click on text layer and select `Alpha to selection`.
1. Move to new layer.  Create gradient (top to bottom) of `<HIGHLIGHT_COLOR>`.

Use the following colours:

#### Orange
```
MATT_COLOUR: D96048
SHADOW_COLOUR: AC321A @40%
HIGHLIGHT_COLOR: F8764E @50%
```

#### Red
```
MATT_COLOUR: BD4137
SHADOW_COLOUR: A42C23 @80%
HIGHLIGHT_COLOR: D9463B @50%
```

#### Green
```
MATT_COLOUR: 6B8A82
SHADOW_COLOUR: 3B6A5E @80%
HIGHLIGHT_COLOR: 72BCA8 @50%
```

For responsive images, remember to save an additional banner image at 400px wide as `<banner-name>-mobile.png`
