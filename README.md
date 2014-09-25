# Gardr Collapse Plugin

[![Build Status](https://api.travis-ci.org/gardr/gardr-plugin-host-collapse.png?branch=master)](https://travis-ci.org/gardr/gardr-plugin-host-collapse)
[![Dependency Status](https://david-dm.org/gardr/gardr-plugin-host-collapse.png)](https://david-dm.org/gardr/gardr-plugin-host-collapse)
[![devDependency Status](https://david-dm.org/gardr/gardr-plugin-host-collapse/dev-status.png)](https://david-dm.org/gardr/gardr-plugin-host-collapse#info=devDependencies)


Gardr plugin to collapse sections (typically banners, but can be used for anything) that are less than a minimum number of pixels (default 10).

## Install

    npm install gardr-plugin-host-collapse --save

## Use

Add these to your hostBundle.js file:
```
    var collapse = require('gardr-plugin-host-collapse');
    gardrHost.plugin(collapse);
```

The plugin will be called for each item after render, and will set display: none on any that are less than the minimum number of pixels.

The default minimum is 10 pixels. You can also configure your own threshold using gardr options (define-options). The plugin will use the configured options if they exist.


Configure custom thresholds like this, in script.js:

```javascript
    var gardr = gardrHost({
        iframeUrl: 'http://127.0.0.1:9966/gardr/iframe.html', // cross-domain
        collapseIfWidthLessThan  : 20,
        collapseIfHeightLessThan : 20
    });
```
