var ms_statusBar = {
    btn_status_show: null,
    btn_status_hide: null,
    construct: function () {
        this.btn_status_show = document.querySelector('#btn_status_show');
        this.btn_status_hide = document.querySelector('#btn_status_hide');
        this.btn_status_show.addEventListener('click', ms_statusBar.showStatus, false);
        this.btn_status_hide.addEventListener('click', ms_statusBar.hideStatus, false);
    },
    destructor: function () {
        this.btn_status_show.removeEventListener('click', ms_splash.showStatus, false);
    },
    showStatus: function () {
        StatusBar.show();
    },
    hideStatus: function () {
        StatusBar.hide();
    }
};