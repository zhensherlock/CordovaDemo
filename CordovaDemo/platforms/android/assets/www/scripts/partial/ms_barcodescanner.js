var ms_barcodescanner = {
    btn_barcodescanner_scan: null,
    construct: function () {
        this.btn_barcodescanner_scan = document.querySelector('#btn_barcodescanner_scan');
        this.btn_barcodescanner_scan.addEventListener('click', ms_barcodescanner.scanBarcodeScanner, false);
    },
    destructor: function () {
    },
    scanBarcodeScanner: function (status) {
        cordova.plugins.barcodeScanner.scan(
          function (result) {
              alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
          },
          function (error) {
              alert("Scanning failed: " + error);
          }
       );
    }
};