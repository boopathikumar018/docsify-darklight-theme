# Theme support for other Plugins


Are you a plugin developer or theme designer of [docsify.js](https://docsify.js.org/#/) ? If you want your plugin UI to support `dark-mode` and `light-mode` with customizable colours for users who use your plugin with `docsify-darklight-theme` here you want to do

## Desigining your stylesheet

You need to use [CSS Variables](https://www.w3schools.com/css/css3_variables.asp) for your stylesheet design as follows.


Lets take if you have `button` in your plugin, plugin name is `docsify-slack-chat` and its style be like below

```css
.yourButton {
    background-color: #4CAF50;
    color: white;
    border-radius :5px;
    padding: 10px 10px;
    text-align: center;
    cursor: pointer;
}
```

your variable name will be your package name by replacing `- hyphen` with `_ underscore` as your followed by you property variable as `custom_property_name`, then pass your default values as `declaration_value`. If the user not using `docsify-darklight-theme`, your `declaration_value` style will be applied.

> **Important :** Structure of your CSS Variables should be followed to avoid variable name conflict with other plugins

```css
var( --your_package_name_customPropertyName , declaration_value )
```

then the updated stylesheet be like below


```css
.yourButton {
    background-color: var(--docsify_slack_chat_background,#4CAF50);
    color: var(--docsify_slack_chat_color,white);
    border-radius :5px;
    padding: 10px 10px;
    text-align: center;
    cursor: pointer;
}
```

## Add this to your documentation

**#Configuration**

If you are using [docsify-darklight-theme](https://boopathikumar018.github.io/docsify-darklight-theme), you can configure the colors for light and dark mode using **docsify config object** as follows.

**#Variable structure**

In your **docsify *darklightTheme* config object** on `index.html` add the below style property with existing properties

```js
window.$docsify = {

    // ...

        darklightTheme: {
            dark: {

                // ...

                docsify_slack_chat_background : <value>,
                docsify_slack_chat_color : <value>,

                // ...

            },
            light: {

                // ...

                docsify_slack_chat_background : <value>,
                docsify_slack_chat_color : <value>

                // ...

            }

        }

    // ...

};
```

**#Default themes configuration**

The is the default styleproperties and respective values, you can overwrite directly in `window.$docsify` configuration object as shown above

```js

    docsify_slack_chat_background = #4CAF50
    docsify_slack_chat_color = white

```
