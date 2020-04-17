const plugin = (hook, vm) => {
  
  var defaultConfig = {
    siteFont : "PT Sans",
    defaultTheme : 'dark',
    dark: {
      toogleBackground : '#ffffff',
      background: '#091a28',
      textColor: '#b4b4b4',
      codeTextColor : '#ffffff',
      codeBackgroudColor : '#0e2233',
      borderColor : '#0d2538',
    },
    light: {
      toogleBackground : '#091a28',
      background: '#ffffff',
      textColor: '#34495e',
      codeTextColor : '#525252',
      codeBackgroudColor : '#f8f8f8',
      borderColor : 'rgba(0, 0, 0, 0.07)',
    }
  }

  let themeConfig = {  ...defaultConfig , ...vm.config.darklightTheme}

  document.documentElement.style.setProperty('--siteFont' , themeConfig.siteFont)

  var setTheme = (theme) => {

    localStorage.setItem('DARK_LIGHT_THEME', theme);
    themeConfig.defaultTheme = theme;

    if(theme == "light") {
      for (var [key, value] of Object.entries(themeConfig.light))
        document.documentElement.style.setProperty('--'+key , value)
    } else if ( theme == "dark") {
      for (var [key, value] of Object.entries(themeConfig.dark))
        document.documentElement.style.setProperty('--'+key , value)
    }

    }
  
    hook.afterEach(function(html, next) {
      var darkEl = `<button id="docsify-darklight-theme"></button>`
      html = `${darkEl}${html}`
      next(html)
    })
  
    hook.doneEach(function() {
      let savedTheme = localStorage.getItem('DARK_LIGHT_THEME')
      if ( savedTheme == "light" || savedTheme == "dark") {
        themeConfig.defaultTheme = savedTheme;
        setTheme(themeConfig.defaultTheme)
      } else {
        setTheme(themeConfig.defaultTheme);
      }

      document.getElementById('docsify-darklight-theme').addEventListener('click', function() { themeConfig.defaultTheme === 'light' ? setTheme('dark') : setTheme('light')})
    })
  }
  
  window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)