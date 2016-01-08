<!--
# license: Licensed to the Apache Software Foundation (ASF) under one
#         or more contributor license agreements.  See the NOTICE file
#         distributed with this work for additional information
#         regarding copyright ownership.  The ASF licenses this file
#         to you under the Apache License, Version 2.0 (the
#         "License"); you may not use this file except in compliance
#         with the License.  You may obtain a copy of the License at
#
#           http://www.apache.org/licenses/LICENSE-2.0
#
#         Unless required by applicable law or agreed to in writing,
#         software distributed under the License is distributed on an
#         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#         KIND, either express or implied.  See the License for the
#         specific language governing permissions and limitations
#         under the License.
-->

# cordova-plugin-inappbrowser

[![Build Status](https://travis-ci.org/apache/cordova-plugin-inappbrowser.svg)](https://travis-ci.org/apache/cordova-plugin-inappbrowser)

這個外掛程式提供了一�?web 瀏覽器視圖，顯示在調�?`cordova.InAppBrowser.open()`.

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    

`cordova.InAppBrowser.open()` 函數被定義為一個臨時替�?`window.open ()` 函數�?現有 `window.open ()` 調用，可以通過替換 window.open 使用 InAppBrowser 視窗�?
    window.open = cordova.InAppBrowser.open;
    

InAppBrowser 視窗像一個標準的 web 瀏覽器中，並且無法訪問科爾多�?Api�?為此，建�?InAppBrowser 如果您需要載入協力廠�?（不可信�?的內容，而不是載入，進入主要的科爾多�?web 視圖�?InAppBrowser 是不受白名單中，也不在系統瀏覽器中打開的連結�?
InAppBrowser 預設情況下它自己�?GUI 控制項為使用者提�?（後退�?前進�?完成）�?
為向後相容性，此外掛程式還�?`window.open`�?然而，`window.open` 外掛程式安裝鉤子可以有副作用 （尤其是如果這個外掛程式是只列為另一個外掛程式的依賴項）�?在未來的主要發行版本中，將刪�?`window.open` 鉤�?一直至從該外掛程式鉤子後，應用程式可以手動還原預設行為�?
    delete window.open // Reverts the call back to it's prototype's default
    

雖然 `window.open` 在全球範圍內，InAppBrowser 不可用直�?`deviceready` 事件之後�?
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("window.open works well");
    }
    

## 安裝

    cordova plugin add cordova-plugin-inappbrowser
    

如果您希望所有頁面載入中您的應用程式要通過 InAppBrowser，你可以簡單地在初始化過程中�?`window.open`。舉個例子：

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
    }
    

## cordova.InAppBrowser.open

在新�?`InAppBrowser` 實例，當前的瀏覽器實例或系統瀏覽器中打開�?URL�?
    var ref = cordova.InAppBrowser.open(url, target, options);
    

  * **ref**�?參�?`InAppBrowser` 視窗�?() InAppBrowser*

  * **url**�?要載�?（字串）*�?URL。調�?`encodeURI()` 這個如�?URL 包含 Unicode 字元�?
  * **target**�?目標在其中載入的 URL，可選參數，預設值為 `_self` �?（字串）*
    
      * `_self`�?打開在科爾多�?web 視圖如果 URL 是在白名單中，否則它在打開`InAppBrowser`.
      * `_blank`�?在打開`InAppBrowser`.
      * `_system`�?在該系統�?web 瀏覽器中打開�?
  * **options**�?選項�?`InAppBrowser` 。可選，拖欠到： `location=yes` �?（字串）*
    
    `options`字串必須不包含任何空白的空間，和必須用逗號分隔每個功能的名稱/值對�?功能名稱區分大小寫�?所有平臺都支援下面的值：
    
      * **location**�?設置�?`yes` �?`no` ，打�?`InAppBrowser` 的位置欄打開或關閉�?    
    Android 系統只有�?    
      * **hidden**�?將設置為 `yes` ，創建瀏覽器和載入頁面，但不是顯示它�?載入完成時，將觸�?loadstop 事件�?省略或設置為 `no` （預設值），有的瀏覽器打開，然後以正常方式載入�?      * **clearcache**�?將設置為 `yes` 有瀏覽器的 cookie 清除緩存之前打開新視�?      * **clearsessioncache**�?將設置為 `yes` 有會�?cookie 緩存清除之前打開新視�?      * **zoom**: 設置為`yes`，顯�?Android 瀏覽器的縮放控制項，設置為`no`，以隱藏它們�?`預設值是`.
      * **hardwareback**: 設置為`yes`要使用硬體後退按鈕通過`InAppBrowser`的歷史向後導航�?如果沒有前一頁， `InAppBrowser`將會關閉�?預設值是的`yes`所以你必須將其設置為`no`，如果你想要的後退按鈕，只需關閉 InAppBrowser�?    
    只有 iOS�?    
      * **closebuttoncaption**: 設置為一個字串，以用�?*�?*按鈕的標題。請注意您需要對此值進行當地語系化你自己�?      * **disallowoverscroll**�?將設置為 `yes` �?`no` （預設值是 `no` ）。打�?關閉�?UIWebViewBounce 屬性�?      * **hidden**�?將設置為 `yes` ，創建瀏覽器和載入頁面，但不是顯示它�?載入完成時，將觸�?loadstop 事件�?省略或設置為 `no` （預設值），有的瀏覽器打開，然後以正常方式載入�?      * **clearcache**�?將設置為 `yes` 有瀏覽器的 cookie 清除緩存之前打開新視�?      * **clearsessioncache**�?將設置為 `yes` 有會�?cookie 緩存清除之前打開新視�?      * **toolbar**�?設置�?`yes` �?`no` ，為 InAppBrowser （預設為打開或關閉工具列`yes`)
      * **enableViewportScale**�?將設置為 `yes` �?`no` ，防止通過 meta 標記 （預設為縮放的視區`no`).
      * **mediaPlaybackRequiresUserAction**�?將設置為 `yes` �?`no` ，防�?HTML5 音訊或視頻從 autoplaying （預設為`no`).
      * **allowInlineMediaPlayback**�?將設置為 `yes` �?`no` ，讓線在 HTML5 播放媒體，在瀏覽器視窗中，而不是特定于設備播放介面內顯示�?HTML �?`video` 元素還必須包�?`webkit-playsinline` 屬�?（預設為`no`)
      * **keyboardDisplayRequiresUserAction**�?將設置為 `yes` �?`no` 時，要打開鍵盤表單元素接收焦點通過 JavaScript �?`focus()` 調用 （預設為`yes`).
      * **suppressesIncrementalRendering**�?將設置為 `yes` �?`no` 等待，直到所有新查看的內容正在呈�?（預設為前收到`no`).
      * **presentationstyle**�?將設置為 `pagesheet` �?`formsheet` �?`fullscreen` 來設置[演示文稿樣式](http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle)(預設為`fullscreen`).
      * **transitionstyle**�?將設置為 `fliphorizontal` �?`crossdissolve` �?`coververtical` 設置[過渡樣式](http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle)(預設為`coververtical`).
      * **toolbarposition**�?將設置為 `top` �?`bottom` （預設值是 `bottom` ）。使工具列，則在頂部或底部的視窗�?    
    僅限 Windows�?    
      * **hidden**�?將設置為 `yes` ，創建瀏覽器和載入頁面，但不是顯示它�?載入完成時，將觸�?loadstop 事件�?省略或設置為 `no` （預設值），有的瀏覽器打開，然後以正常方式載入�?      * **fullscreen**: 設置為`yes`，以創建無邊框的瀏覽器控制項�?請注意，如果**location=no**同時指定，則將呈現給使用者到密切 IAB 視窗沒有控制�?
### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * 黑莓 10
  * 火狐瀏覽器作業系�?  * iOS
  * Windows 8 �?8.1
  * Windows Phone 7 �?8
  * 瀏覽�?
### 示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = cordova.InAppBrowser.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

### 火狐瀏覽器作業系統的怪癖

外掛程式不會強制任何設計是需要添加一�?CSS 規則，如果打開與 `target=_blank`。規�?�?可能看起來像這些

```css
.inAppBrowserWrap {
  background-color: rgba(0,0,0,0.75);
  color: rgba(235,235,235,1.0);
}
.inAppBrowserWrap menu {
  overflow: auto;
  list-style-type: none;
  padding-left: 0;
}
.inAppBrowserWrap menu li {
  font-size: 25px;
  height: 25px;
  float: left;
  margin: 0 10px;
  padding: 3px 10px;
  text-decoration: none;
  color: #ccc;
  display: block;
  background: rgba(30,30,30,0.50);
}
.inAppBrowserWrap menu li.disabled {
    color: #777;
}
```

### Windows 的怪癖

類似�?Firefox OS IAB 視窗視覺行為可以重寫通過`inAppBrowserWrap`/`inAppBrowserWrapFullscreen`�?CSS �?
### 瀏覽器的怪癖

  * 外掛程式是通過 iframe，執�?
  * 未實現導航歷史記�?(�?LocationBar 的`回顧`與`展望`按鈕)�?
## InAppBrowser

�?`科爾多瓦的調用返回的物件。InAppBrowser.open`.

### 方法

  * addEventListener
  * removeEventListener
  * close
  * show
  * executeScript
  * insertCSS

## addEventListener

> 為事件添加一個攔截器`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

  * **ref**�?參�?`InAppBrowser` 視窗*(InAppBrowser)*

  * **eventname**�?事件偵聽*（字串）*
    
      * **loadstart**�?當觸發事�?`InAppBrowser` 開始載入一�?URL�?      * **loadstop**�?當觸發事�?`InAppBrowser` 完成載入一�?URL�?      * **loaderror**�?當觸發事�?`InAppBrowser` 載入 URL 時遇到錯誤�?      * **exit**�?當觸發事�?`InAppBrowser` 關閉視窗�?
  * **callback**�?執行時觸發該事件的函數。該函數通過 `InAppBrowserEvent` 物件作為參數�?
### InAppBrowserEvent 屬�?
  * **type**�?eventname，或�?`loadstart` �?`loadstop` �?`loaderror` ，或 `exit` �?（字串）*

  * **url**: 已載入的 URL�?（字串）*

  * **code**�?僅中的情況的錯誤代碼 `loaderror` �?（人數）*

  * **message**�?該錯誤訊息，只有在的情況�?`loaderror` �?（字串）*

### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * iOS
  * Windows 8 �?8.1
  * Windows Phone 7 �?8
  * 瀏覽�?
### 瀏覽器的怪癖

`loadstart`和`loaderror`的事件不會被觸發�?
### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function(event) { alert(event.url); });
    

## removeEventListener

> 移除的事件攔截器`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

  * **ref**�?參�?`InAppBrowser` 視窗�?() InAppBrowser*

  * **eventname**�?要停止偵聽的事件�?（字串）*
    
      * **loadstart**�?當觸發事�?`InAppBrowser` 開始載入一�?URL�?      * **loadstop**�?當觸發事�?`InAppBrowser` 完成載入一�?URL�?      * **loaderror**�?當觸發事�?`InAppBrowser` 遇到錯誤載入一�?URL�?      * **exit**�?當觸發事�?`InAppBrowser` 關閉視窗�?
  * **callback**: 要在事件觸發時執行的函數。該函數通過 `InAppBrowserEvent` 物件�?
### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * iOS
  * Windows 8 �?8.1
  * Windows Phone 7 �?8
  * 瀏覽�?
### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function(event) { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## close

> 關閉 `InAppBrowser` 視窗�?
    ref.close();
    

  * **ref**�?參�?`InAppBrowser` 視窗*(InAppBrowser)*

### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * 火狐瀏覽器作業系�?  * iOS
  * Windows 8 �?8.1
  * Windows Phone 7 �?8
  * 瀏覽�?
### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## show

> 顯示打開了隱藏的 InAppBrowser 視窗。調用這沒有任何影響，如果 InAppBrowser 是已經可見�?
    ref.show();
    

  * **ref**�?InAppBrowser 視窗 (參考`InAppBrowser`)

### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * iOS
  * Windows 8 �?8.1
  * 瀏覽�?
### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'hidden=yes');
    // some time later...
    ref.show();
    

## executeScript

> 注入�?JavaScript 代碼 `InAppBrowser` 視窗

    ref.executeScript(details, callback);
    

  * **ref**�?參�?`InAppBrowser` 視窗�?() InAppBrowser*

  * **injectDetails**: 要運行的腳本的詳細資訊或指定 `file` �?`code` 的關鍵�?（物件）*
    
      * **�?*�?腳本�?URL 來注入�?      * **代碼**�?要注入腳本的文本�?
  * **回檔**�?執行後注入的 JavaScript 代碼的函數�?    
      * 如果插入的腳本的類型 `code` ，回檔執行使用單個參數，這是該腳本的傳回值，裹在 `Array` �?對於多行腳本，這是最後一條語句或最後計算的運算式的傳回值�?
### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * iOS
  * Windows 8 �?8.1
  * 瀏覽�?
### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({file: "myscript.js"});
    });
    

### 瀏覽器的怪癖

  * 只有**code**關鍵被支援�?
### Windows 的怪癖

由於[MSDN 文檔](https://msdn.microsoft.com/en-us/library/windows.ui.xaml.controls.webview.invokescriptasync.aspx)調用的腳本可以返回唯一字串值，否則該參數，傳遞�?*回檔**將是`[null]`.

## insertCSS

> 注入�?CSS `InAppBrowser` 視窗�?
    ref.insertCSS(details, callback);
    

  * **ref**�?參�?`InAppBrowser` 視窗*(InAppBrowser)*

  * **injectDetails**: 要運行的腳本的詳細資訊或指定 `file` �?`code` 的關鍵�?（物件）*
    
      * **file**�?樣式表的 URL 來注入�?      * **code**�?文本樣式表的注入�?
  * **callback**�?�?CSS 注射後執行的函數�?
### 支援的平�?
  * 亞馬遜火 OS
  * Android 系統
  * iOS
  * Windows

### 快速的示例

    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });