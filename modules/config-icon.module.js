(() => {
    'use strict';

    const MODULE_FLAG = 'configIconModuleReady';

    function resolveOpenConfiguracionesHandler() {
        if (typeof window.openConfiguracionesPopupGlobal === 'function') {
            return window.openConfiguracionesPopupGlobal;
        }
        if (typeof window.openConfiguracionesPopup === 'function') {
            return window.openConfiguracionesPopup;
        }
        return null;
    }

    function initConfigIconModule() {
        const btnAjustesMain = document.getElementById('btnAjustesMain');
        if (!btnAjustesMain || btnAjustesMain.dataset[MODULE_FLAG] === '1') return;

        btnAjustesMain.addEventListener('click', () => {
            const openConfiguraciones = resolveOpenConfiguracionesHandler();
            if (openConfiguraciones) {
                openConfiguraciones();
            }
        });

        btnAjustesMain.dataset[MODULE_FLAG] = '1';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConfigIconModule, { once: true });
    } else {
        initConfigIconModule();
    }
})();
