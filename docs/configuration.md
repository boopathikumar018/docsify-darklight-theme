# Configuration

You can configure the colors for light and dark mode using **docsify config object** as follows.

### Variable structure

In your **docsify config object** on `index.html` add the below object with your own variables as follows:

```js

    window.$docsify = {

        // ...

            darklightTheme: {
                siteFont : 'PT Sans | Source Sans Pro',
                defaultTheme : 'light | dark',
                dark: {
                    <your_css_variable> : <value>
                },
                light: {
                    <your_css_variable> : <value>
                }

            }

        // ...

    };

```

### Default themes configuration

You can be overwrite directly in `window.$docsify` configuration object

```js

    window.$docsify = {

        darklightTheme: {
            siteFont : 'PT Sans',
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
