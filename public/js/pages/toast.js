auth.onAuthStateChanged(user => {
    var toast = 0; var toastz = 0; var toastbtc = '';

    if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            toast = localStorage.getItem('banktotal');
            toastz = toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) { 
            toast = localStorage.getItem('divtotal');
            toastz = toast.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        toastbtc = (toast / (parseFloat(stockObject.k.c))).toFixed(5);
    }
    
    var i = -1; var $toastlast;

    var getMessage = function() {        
        for (var i = 0; i < items.length; i++) {
            if(user.email) {
                var msgs = [`
                        ${toastbtc} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Send $${toastz} BTC:
                    <hr class="to-hr hr15-top">
                        A verification email sent to: <br>
                        ${user.email}.
                    <hr class="hr3-nil">
                `]
            } else if(user.phoneNumber) {
                var msgs = [`
                        ${toastbtc} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Send $${toastz} BTC:
                    <hr class="to-hr hr15-top">
                        Bank logins will be sent via <br> 
                        SMS to: ${user.phoneNumber}.
                    <hr class="hr3-nil">
                `]
            } 

            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    };

    var toastbut = document.getElementById('anon-check');

    var savebut = document.getElementById('monez');

    $(toastbut).click(function() {
        var shortCutFunction = 'success'; var msg = ''; var title = '';
        toastr.options = {
        closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
            positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 10000 };
        if (!msg) { msg = getMessage() }
        var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
        if(user.email) {
            auth.currentUser.sendEmailVerification();
        }
    });


    $(savebut).click(function() {
        var shortCutFunction = 'success'; var msg = ''; var title = '';
        toastr.options = {
        closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
            positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 10000 };
        if (!msg) { msg = getMessage() }
        var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
        if(user.email) {
            auth.currentUser.sendEmailVerification();
        }
    });

});


// var binance = new WebSocket("wss://ws.blockchain.info/inv");
// binance.onopen = function(){
//     binance.send(JSON.stringify({
//         "op": "unconfirmed_sub"
//     }))
// }
// binance.onmessage = function(onmsg){
//     var response = JSON.parse(onmsg.data);
//     var address1 = response.x.out[0].addr;
//     var address2 = '1AMjPsZQvqeAfnEjfk17fEUZc6rZuM9Ccp';

//     if(address1 == address2) {        
//         var shortCutFunction = 'success';
//         var msg = `
//             Bitcoin payment detected, <hr class="to-hr">
//             Add $50 to complete the download. <hr>
//         `;
//         var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
//     }             
// }