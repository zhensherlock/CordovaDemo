var ms_camera = {
    btn_front_camera: null,
    btn_back_camera: null,
    btn_gallery: null,
    img_result: null,
    construct: function () {
        this.btn_front_camera = document.querySelector('#btn_front_camera');
        this.btn_back_camera = document.querySelector('#btn_back_camera');
        this.btn_gallery = document.querySelector('#btn_gallery');
        this.img_result = document.querySelector('#img_result');
        this.btn_front_camera.addEventListener('click', ms_camera.getFrontCamera, false);
        this.btn_back_camera.addEventListener('click', ms_camera.getBackCamera, false);
        this.btn_gallery.addEventListener('click', ms_camera.getGallery, false);
    },
    destructor: function () {
        this.btn_front_camera.removeEventListener('click', ms_camera.getFrontCamera, false);
        this.btn_back_camera.removeEventListener('click', ms_camera.getBackCamera, false);
        this.btn_gallery.removeEventListener('click', ms_camera.getGallery, false);
    },
    getFrontCamera: function () {
        navigator.camera.getPicture(ms_camera.cameraSuccess, ms_camera.cameraError, {
            quality: 50,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI,
            cameraDirection: Camera.Direction.FRONT
        });
    },
    getBackCamera: function () {
        navigator.camera.getPicture(ms_camera.cameraSuccess, ms_camera.cameraError, {
            quality: 50,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI,
            cameraDirection: Camera.Direction.BACK
        });
    },
    getGallery: function () {
        navigator.camera.getPicture(ms_camera.cameraSuccess, ms_camera.cameraError, {
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: Camera.DestinationType.FILE_URI,
        });
    },
    cameraSuccess: function (imageURI) {
        img_result.src = imageURI;
        console.log('cameraSuccess');
    },
    cameraError: function (message) {
        alert('操作失败：' + message);
        console.log('cameraError');
    }
};