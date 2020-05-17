# Configuration

You can configure the colors for light and dark mode using **docsify config object** as follows.

### Default browser theme detection

`docsify-darklight-theme` will automatically **detect default theme used by browser** (only supported browsers) and set theme to your website accordingly. In non-supported browsers, theme which you are mentioned in config variable `defaultTheme` inside `darklightTheme` configuration object will be applied otherwise it will set `dark theme` as default theme. If the user changes the theme and it will be saved. When they open the website again saved theme will be served. You can follow below steps for configuration.

![browsermode](images/browserSupport.png)

### Variable structure

In your **docsify config object** on `index.html` add the below object with your own variables as follows:

```js

    window.$docsify = {

        // ...

            darklightTheme: {
                siteFont : 'PT Sans | Source Sans Pro',
                defaultTheme : 'light | dark',
                codeFontFamily : 'Roboto Mono, Monaco, courier, monospace',
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
            siteFont : "PT Sans",
            defaultTheme : 'dark',
            codeFontFamily : 'Roboto Mono, Monaco, courier, monospace',
            bodyFontSize : '17px',
            dark: {
                accent: '#42b983',
                toogleBackground : '#ffffff',
                background: '#091a28',
                textColor: '#b4b4b4',
                codeTextColor : '#ffffff',
                codeBackgroudColor : '#0e2233',
                borderColor : '#0d2538',
                blockQuoteColour : '#858585',
                highlightColor : '#d22778',
                sidebarSublink : '#b4b4b4',
                codeTypeColor : '#ffffff',
                coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
                toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)'
            },
            light: {
                accent: '#42b983',
                toogleBackground : '#091a28',
                background: '#ffffff',
                textColor: '#34495e',
                codeTextColor : '#525252',
                codeBackgroudColor : '#f8f8f8',
                borderColor : 'rgba(0, 0, 0, 0.07)',
                blockQuoteColor : '#858585',
                highlightColor : '#d22778',
                sidebarSublink : '#b4b4b4',
                codeTypeColor : '#091a28',
                coverBackground : 'linear-gradient(to left bottom, hsl(118, 100%, 85%) 0%,hsl(181, 100%, 85%) 100%)',
                toogleImage : 'url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)'
            }
        }
    };

```
