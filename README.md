
<h1 align="center"> docsify-darklight-theme </h1>

<p align="center">
    <a href="https://www.jsdelivr.com/package/npm/docsify-darklight-theme">
        <img src="https://data.jsdelivr.com/v1/package/npm/docsify-darklight-theme/badge?style=rounded" alt="jsdeliver">
    </a>
    <a href="https://badge.fury.io/js/docsify-darklight-theme">
        <img src="https://badge.fury.io/js/docsify-darklight-theme.svg" alt="npm-version">
    </a>
    <a href="https://badge.fury.io/gh/boopathikumar018%2Fdocsify-darklight-theme">
        <img src="https://badge.fury.io/gh/boopathikumar018%2Fdocsify-darklight-theme.svg" alt="GitHub version" height="20">
    </a>
</p>


<p align="center"> A Dark and light theme with switch for your docsify site</p>


**docsify-darklight-theme**  is a simple and highly customizable theme for the documentation websites generated using [docsify.js](https://docsify.js.org/). Using this theme, documents will have a theme switcher to switch between  `dark-mode` and `light-mode` .

# Features

- Theme switcher 
- Themes are customizable based on your color preferences
- Preferences can be modified directly in `window.$docsify` configuration object
- Default theme(Dark/Light) can be configured based on your needs.
- Themes are remembered and retrieved from local storage.
- Redesigned search box.

# Installation

Add the below `stylesheet` on top of the `index.html` file 

```html
<link 
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/style.min.css"
    title="docsify-darklight-theme"
    type="text/css"
/>
```
> Note : Remove all `stylesheets` included on top of `index.html` if you have any conflict with above CSS file

Add the below `script` file on bottom of the `index.html` file 

```html
<script 
    src="//cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/dist/index.min.js"
    type="text/javascript">
</script>
```


# Configuration

You can customize the color preference for your document by modified the colors in **window.$docsify**configuration object for both dark and light mode. 

### Variable structure

In your **docsify config object** on `index.html` add the below object with your own variables as follows:

```js

    window.$docsify = {

        // ...

            darklightTheme: {

                defaultTheme : 'light | dark',
                dark: {
                    <your_variable> : <value>
                },
                light: {
                    <your_variable> : <value>
                }

            }

        // ...

    };

```

### Default themes configuration

```js

    window.$docsify = {

        darklightTheme: {

            defaultTheme : 'light',
            dark: {
                background: '#091a28',
                textColor: '#b4b4b4',
                codeTextColor : '#ffffff',
                codeBackgroudColor : '#0e2233',
                borderColor : '#0d2538'
            },
            light: {
                background: 'white',
                textColor: '#34495e',
                codeTextColor : '#525252',
                codeBackgroudColor : '#f8f8f8',
                borderColor : 'rgba(0, 0, 0, 0.07)'
            }
        }

    };

```
# Release notes

View the [Change log](https://boopathikumar018.github.io/docsify-darklight-theme/#/changelog) to know the details of each versions.

# License

This project is licensed under the terms of the [MIT](https://github.com/boopathikumar018/docsify-darklight-theme/blob/master/LICENSE) license.


