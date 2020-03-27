# Installation

> Note : Remove all `stylesheets` included on top of `index.html` if you have any conflict with below CSS file

Add below `stylesheet` on top of the `index.html` file 

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

# Configuration

You can configure the colors for light and dark mode using **docsify config object** as follows.

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
