(function() {
    function initStyleSwitcher() {
        var isInitialzed      = false;
        var sessionStorageKey = 'activeStylesheetHref';

        function handleSwitch(activeHref, activeTitle) {
            var activeElm = document.querySelector('link[href*="' + activeHref +'"],link[title="' + activeTitle +'"]');

            if (!activeElm && activeHref) {
                activeElm = document.createElement('link');
                activeElm.setAttribute('href', activeHref);
                activeElm.setAttribute('rel', 'stylesheet');
                activeElm.setAttribute('title', activeTitle);

                document.head.appendChild(activeElm);

                activeElm.addEventListener('load', function linkOnLoad() {
                    activeElm.removeEventListener('load', linkOnLoad);
                    setActiveLink(activeElm);
                });
            }
            else if (activeElm) {
                setActiveLink(activeElm);
            }
        }

        function setActiveLink(activeElm) {
            var activeHref   = activeElm.getAttribute('href');
            var activeTitle  = activeElm.getAttribute('title');
            var inactiveElms = document.querySelectorAll('link[title]:not([href*="' + activeHref +'"]):not([title="' + activeTitle +'"])');

            activeElm.setAttribute('rel', (activeElm.rel || '').replace(/\s*alternate/g, '').trim());

            activeElm.disabled = true;
            activeElm.disabled = false;

            sessionStorage.setItem(sessionStorageKey, activeHref);

            for (var i = 0; i < inactiveElms.length; i++) {
                var elm = inactiveElms[i];

                elm.disabled = true;

                if (window.browsersyncObserver) {
                    var linkRel    = elm.getAttribute('rel') || '';
                    var linkRelAlt = linkRel.indexOf('alternate') > -1 ? linkRel : (linkRel + ' alternate').trim();

                    elm.setAttribute('rel', linkRelAlt);
                }
            }

            if ((window.$docsify || {}).themeable) {
                window.$docsify.themeable.util.cssVars();
            }
        }

        if (!isInitialzed) {
            isInitialzed = true;
            document.addEventListener('DOMContentLoaded', function() {
                var activeHref = sessionStorage.getItem(sessionStorageKey);

                if (activeHref) {
                    handleSwitch(activeHref);
                }
            });

            document.addEventListener('click', function(evt) {
                var dataHref  = evt.target.getAttribute('data-link-href');
                var dataTitle = evt.target.getAttribute('data-link-title')

                if (dataHref || dataTitle) {
                    dataTitle = dataTitle
                        || evt.target.textContent
                        || '_' + Math.random().toString(36).substr(2, 9); // UID

                    handleSwitch(dataHref, dataTitle);
                    evt.preventDefault();
                }
            });
        }
    }
    
    initStyleSwitcher();
})();
