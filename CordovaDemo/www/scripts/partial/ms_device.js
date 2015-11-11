var ms_device = {
    construct: function () {
        var content_device_cordova = document.querySelector('#content_device_cordova');
        var content_device_platform = document.querySelector('#content_device_platform');
        var content_device_version = document.querySelector('#content_device_version');
        var content_device_uuid = document.querySelector('#content_device_uuid');
        var content_device_model = document.querySelector('#content_device_model');
        content_device_cordova.innerHTML = device.cordova;
        content_device_platform.innerHTML = device.platform;
        content_device_version.innerHTML = device.version;
        content_device_uuid.innerHTML = device.uuid;
        content_device_model.innerHTML = device.model;
    },
    destructor: function () {
    }
};