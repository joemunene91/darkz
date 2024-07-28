let items = [];
var table3 = jQuery('#example1').DataTable();

var theLogo = document.getElementById('logo');
var theLogo2 = document.getElementById('vpn-img');

var btcChecks = document.getElementById('btc-check');
var cartLength = document.getElementById('cartlength');


if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
    cartLength.innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    updateCartTotal();
} else {
    cartLength.style.display = 'none';
    btcChecks.innerHTML = `Home Page ID`;
    btcChecks.setAttribute('href', 'home');
}



function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    
    document.getElementById('thetot').innerHTML = `Cart:  <span>$${total.toLocaleString()}</span>`;

    btcChecks.innerHTML = `Checkout <span class="muher">$${total.toLocaleString()}</span>`;



    var id = setInterval(frame, 1000);

    if(!localStorage.getItem('timez-set')) {
        var jo = new Date(); var po = jo.getTime(); var p1ko = po/1000; var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo); localStorage.setItem('timez-set', true);
    }  let width = 900;

    function frame(){
        var j = new Date();
        var p = j.getTime();
        var p1k = p/1000;
        var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 900 - timeDifference;

        if(width <= 300) {
            setTimeout(() => {
                if(localStorage.getItem('timez-set')) { localStorage.removeItem('timez-set') }
                if(localStorage.getItem('depoz-set')) { localStorage.removeItem('depoz-set') }
            }, 300);
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        } else {
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds }
        }
    }
}