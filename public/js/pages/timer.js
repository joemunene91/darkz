var elemj = document.getElementById('pablos');        
var id = setInterval(frame, 1000);

if(!localStorage.getItem('timez-set')) {
    var jo = new Date();
    var po = jo.getTime();
    var p1ko = po/1000;
    var p1knoDecimalo = Math.trunc(p1ko);
    localStorage.setItem('seconds-left', p1knoDecimalo);
    localStorage.setItem('timez-set', true);
}
let width = 900;

function frame(){
    var j = new Date();
    var p = j.getTime();
    var p1k = p/1000;
    var p1knoDecimal = Math.trunc(p1k);
    var theTime = localStorage.getItem('seconds-left');
    var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
    width = 900 - timeDifference;

    if(width <= 10){
        window.location.assign('index');
    } else if(width < 300) {
        elemj.classList.add("bg-danger");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        elemj.style.width = (width/9) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    } else if(width < 600) {
        elemj.classList.add("bg-warning");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        elemj.style.width = (width/9) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    } else {
        var minutes = Math.floor(width/60);
        var seconds = width - minutes * 60;
        if(seconds < 10){ seconds = '0'+seconds }
        elemj.style.width = (width/9) + "%";
        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    }
}









auth.onAuthStateChanged(user => {
    var toasti = 0; var toastzi = 0; var toastbtci = '';
    const dbs = firebase.firestore();
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
    }
    
    var i = -1; var $toastlast;
    var theGuys = user.uid;

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
                theGuys = user.email;
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
                theGuys = user.phoneNumber;
            } else {
                var msgs = [`
                        ${toastbtci} Bitcoin payment <br> not detected,
                    <hr class="hr15-bot">
                        Send $${toastzi} BTC:
                    <hr class="to-hr hr15-top">
                        You are also not logged <br>
                        in with Email / Phone.
                    <hr class="hr3-nil">
                `]
                theGuys = user.uid;
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

    $(toastbuts).click(function() {
        var shortCutFunction = 'success'; var msg = ''; var title = '';
        toastr.options = {
        closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
            positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 12000 };
        if (!msg) { msg = getMessage() }
        var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
        if(user.email) { auth.currentUser.sendEmailVerification(); }

        var docRef2 = dbs.collection("users").doc(theGuys);
		docRef2.get().then((doc) => {
			if (!(doc.exists)) {
				return dbs.collection('users').doc(theGuys).set({ download: 'True' })
			} else {
				return dbs.collection('users').doc(theGuys).update({ download: 'True' })
			}
		});
    });

    $(savebuts).click(function() {
        var shortCutFunction = 'success'; var msg = ''; var title = '';
        toastr.options = {
        closeButton: true, debug: false, newestOnTop: true, progressBar: true, onclick: null, 
            positionClass: 'toast-top-full-width',preventDuplicates: true, timeOut: 12000 };
        if (!msg) { msg = getMessage() }
        var $toast = toastr[shortCutFunction](msg, title);$toastlast = $toast;
        if(user.email) { auth.currentUser.sendEmailVerification(); }

        var docRef2 = dbs.collection("users").doc(theGuys);
		docRef2.get().then((doc) => {
			if (!(doc.exists)) {
				return dbs.collection('users').doc(theGuys).set({ download: 'True' })
			} else {
				return dbs.collection('users').doc(theGuys).update({ download: 'True' })
			}
		});
    });

});