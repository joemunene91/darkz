auth.onAuthStateChanged(user => {
    var toasti = 0; var toastzi = 0; var toastbtci = '';

    if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            toasti = localStorage.getItem('banktotal');
            toastzi = toasti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('btcDola', toastzi);
        } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) { 
            toasti = localStorage.getItem('divtotal');
            toastzi = toasti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('btcDola', toastzi);
        }
    }

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        toastbtci = (toasti / (parseFloat(stockObject.k.c))).toFixed(5);

        localStorage.setItem('btcPoint', toastbtci);
    }
    
    var i = -1; var $toastlast;

    var getMessage = function() {        
        for (var i = 0; i < items.length; i++) {
            if(user.email) {
                var msgs = [`
                        ${toastbtci} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Send $${toastzi} BTC:
                    <hr class="to-hr hr15-top">
                        A verification email sent to: <br>
                        ${user.email}. 
                    <hr class="hr3-nil">
                `]
            } else if(user.phoneNumber) {
                var msgs = [`
                        ${toastbtci} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Send $${toastzi} BTC:
                    <hr class="to-hr hr15-top">
                        Bank logins will be sent via <br> 
                        SMS to: ${user.phoneNumber}. 
                    <hr class="hr3-nil">
                `]
            } else {
                var msgs = [`
                        ${toastbtci} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Scan the address and send <br>
                        exactly $${toastzi} BTC.
                    <hr class="to-hr hr15-top">
                `]
            }

            i++;
            if (i === msgs.length) {
                i = 0;
            }
            return msgs[i];
        }
    };

    var toastbuts = document.getElementById('anon-check');

    var savebuts = document.getElementById('monez');

    if(user.email || user.phoneNumber) {
        $(toastbuts).click(function() {
            var shortCutFunction = 'success'; var msg = ''; var title = '';
            toastr.options = {
            closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
                positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 12000 };
            if (!msg) { msg = getMessage() }
            var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
            if(user.email) { auth.currentUser.sendEmailVerification(); }
        });
    }

    $(savebuts).click(function() {
        var shortCutFunction = 'success'; var msg = ''; var title = '';
        toastr.options = {
        closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
            positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 12000 };
        if (!msg) { msg = getMessage() }
        var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
        if(user.email) { auth.currentUser.sendEmailVerification(); }
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