# Docsify-Themeable

You can add [docsify-darklight-theme](https://docsify-darklight-theme.boopathikumar.me) switcher with [docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable) to switch between `Dark` and `Light` theme.

> Note : Remove all default `stylesheets` provided by **docsify** and **docsify-themeable** that included on `index.html` if you have any conflicts.

### Setup

If you don't want to do any customization and use default styling add below `stylesheet` on top of the `index.html` file

```html

<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-darklight-theme@3/dist/docsify-themeable/style.min.css" type="text/css">

<!-- docsify-themeable styles-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css" title="light">
<link rel="stylesheet alternative" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css" title="dark">

```

Add below `script` on bottom of the `index.html` file

```html

<script
    src="//cdn.jsdelivr.net/npm/docsify-darklight-theme@3/dist/docsify-themeable/main.min.js"
    type="text/javascript">
</script>

<script
    src="//cdn.jsdelivr.net/npm/docsify-darklight-theme@3/dist/docsify-themeable/index.min.js"
    type="text/javascript">
</script>

  
```