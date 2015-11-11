var ms_splash = {
    btn_splash_show: null,
    construct: function () {
        this.btn_splash_show = document.querySelector('#btn_splash_show');
        this.btn_splash_show.addEventListener('click', ms_splash.showSplash, false);
    },
    destructor: function () {
        this.btn_splash_show.removeEventListener('click', ms_splash.showSplash, false);
    },
    showSplash: function () {
        navigator.splashscreen.show();
        setTimeout(function () {
            navigator.splashscreen.hide();
        }, 2000);
    }
};