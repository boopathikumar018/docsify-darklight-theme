# Installation

You can use `docsify-darklight-theme` [by starter template](installation.md#by-starter-template) or [by adding to your existing project](installation.md#by-adding-to-existing-project)

> Note : Remove all default `stylesheets` provided by **docsify** that included on top of `index.html` if you have any conflict with below CSS file

## By starter template

Follow the below steps:

In empty folder run the below commands

```bash
    npm init
    npm install docsify-darklight-theme 
```

Now you can see `documentation` folder was created inside your project folder with below structure

```text
your project folder
└── documentation
    ├── index.html (the entry file)
    ├── quickstart.md ( sidebar subpage)
    ├── README.md ( home page)
    ├── _navbar.md ( navigation bar)
    ├── _sidebar.md ( sidebar)
    ├── _coverpage.md ( coverpage)
    └── style.css ( you can add your own style or update here then update stylesheet path in `index.html` )
```

and run the below command to start your project

```bash
    docsify serve ./documentation
```

you will see below output on terminal

```bash

Serving C:\Users\your_folder\documentation now.
Listening at http://localhost:3000

```

now you can access your site at `http://localhost:3000`


## By adding to existing project

You can add `docsify-darklight-theme` to your existing project in two ways :

- Using  **npm** ( For create custom style by your own )
- Using **jsdelivr CDN** ( For readymade minified styles served through CDN)

### Using npm

Follow the below steps:

1. Move inside your docsify site folder and initialize npm with below command

```bash
    npm init
    npm install docsify-darklight-theme 
```

Now you can see `documentation` folder was created inside your project folder with below structure. If You want to move `style.css` file wherever you want and include in your `index.html` by matching the path.

```text
your project folder
└── documentation
    ├── index.html
    ├── quickstart.md
    ├── README.md
    ├── _coverpage.md
    ├── style.css ( you can add your own style or update here then update stylesheet path in `index.html` )
    ├── _navbar.md
    └── _sidebar.md
```

if you want it in same path add the `stylesheet` on top of `index.html` as shown below

```html
<link 
    rel="stylesheet"
    href="documentation/style.css"
    title="docsify-darklight-theme"
    type="text/css"
/>
```

### Using jsdelivr CDN

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