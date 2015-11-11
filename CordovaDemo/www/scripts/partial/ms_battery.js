var ms_battery = {
    content_battery_status: null,
    content_battery_level: null,
    construct: function () {
        this.content_battery_status = document.querySelector('#content_battery_status');
        this.content_battery_level = document.querySelector('#content_battery_level');
        window.addEventListener('batterystatus', ms_battery.onBatterystatus, false);
    },
    destructor: function () {
        window.removeEventListener('batterystatus', ms_battery.onBatterystatus, false);
    },
    onBatterystatus: function (status) {
        ms_battery.content_battery_level.innerHTML = status.level + '%';
        if (status.isPlugged) {
            ms_battery.content_battery_status.innerHTML = '已充电';
        }
        else {
            ms_battery.content_battery_status.innerHTML = '未充电';
        }
    }
};