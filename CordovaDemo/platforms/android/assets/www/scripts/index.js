// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。

(function () {
    "use strict";
    var stack = [];
    var $container = $('.js_container');
    $container.on('click', 'a[data-id]', function (item) {
        var id = $(this).data('id');
        $.get('partial/' + id + '.html', function (response) {
            //获取部分页面
            var $tpl = $(response).addClass('slideIn').addClass(id).data('wrapper', id);
            $container.append($tpl);
            stack.push($tpl);
            history.pushState({ id: id }, '', '#' + id);
            $($tpl).on('webkitAnimationEnd', function () {
                $(this).removeClass('slideIn');
            }).on('animationend', function () {
                $(this).removeClass('slideIn');
            });
            //执行指定的构造函数
            eval(id + '.construct()');
        });
    });
    $(window).on('popstate', function () {
        //获取当前的部分页面
        var $top = stack.pop();
        if (!$top) {
            return;
        }
        var id = $top.data('wrapper');
        $top.addClass('slideOut').on('animationend', function () {
            $top.remove();
        }).on('webkitAnimationEnd', function () {
            $top.remove();
        });
        //执行指定的析构函数
        eval(id + '.destructor()');
    });
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        //navigator.splashscreen.hide();
        // 处理 Cordova 暂停并恢复事件
        //document.addEventListener('pause', onPause.bind(this), false);
        //document.addEventListener('resume', onResume.bind(this), false);
        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
        //var btn_test = document.querySelector('#btn_test');
        //btn_test.addEventListener('click', function () {
        //    //var ref = window.open('test.html', '_blank', 'location=yes');
        //    //setTimeout(function () {
        //    //    ref.close();
        //    //}, 5000);
        //    navigator.notification.alert('message', alertDismissed, 'title', 'alert');
        //});
        //if (window.navigator.geolocation) {
        //    var geolocation = window.navigator.geolocation;
        //    geolocation.getCurrentPosition(getPositionSuccess, getPositionError, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });

        //    var btn_watch = document.querySelector('#btn_watch');
        //    var watchID = null;
        //    btn_watch.addEventListener('click', function () {
        //        watchID = geolocation.watchPosition(getPositionSuccess, getPositionError, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
        //    });

        //    var btn_clear = document.querySelector('#btn_clear');
        //    btn_clear.addEventListener('click', function () {
        //        geolocation.clearWatch(watchID);
        //    });
        //}
        //else {
        //    alert('不支持啊');
        //}

    };
})();
