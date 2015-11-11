var ms_capture = {
    btn_photo_capture: null,
    construct: function () {
        this.btn_photo_capture = document.querySelector('#btn_photo_capture');
        this.btn_photo_capture.addEventListener('click', ms_capture.getPhotoCapture, false);
    },
    destructor: function () {
    },
    getPhotoCapture: function () {
        navigator.device.capture.captureImage(ms_capture.captureSuccess, ms_capture.captureError, { limit: 2 });
    },
    captureSuccess: function (mediaFiles) {
        for (var i = 0, length = mediaFiles.length; i < length; i++) {
            alert(mediaFiles[i].fullPath);
        }
    },
    captureError: function () {
    }
};