# Installation

> Note : Remove all default `stylesheets` provided by **docsify** that included on top of `index.html` if you have any conflict with below CSS file

You can add `docsify-darklight-theme` in two ways :

- Using  **npm** ( For create custom style by your own )
- Using **jsdelivr CDN** ( For readymade minified styles served through CDN)

## Using npm

Follow the below steps:

1. Move inside your docsify site folder and initilize npm with below command

```bash
    npm init
    npm install docsify-darklight-theme 
```

Now you can see `docsify-darklight-theme` folder was created inside your project folder with below structure

```text
your project folder
└── docsify-darklight-theme
    ├── index.min.js
    ├── style.css ( you can add your own style or update here)
    └── style.min.css
```

then add the `stylesheet` on top of `index.html` as shown below

```html
<link 
    rel="stylesheet"
    href="docsify-darklight-theme/style.css"
    title="docsify-darklight-theme"
    type="text/css"
/>
```

and add below `script` on bottom of the `index.html` file 

```html
<script 
    src="docsify-darklight-theme/index.min.js"
    type="text/javascript">
</script>
```

## Using jsdelivr CDN

If you don't want to do any customization and use default styling add below `stylesheet` on top of the `index.html` file

```html
<link 
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/style.min.css"
    title="docsify-darklight-theme"
    type="text/css"
/>
```

Add below `script` on bottom of the `index.html` file 

```html
<script 
    src="//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/index.min.js"
    type="text/javascript">
</script>
```