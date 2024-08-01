let items = [];

var table1 = jQuery('#example1').DataTable();

var showingToast = document.getElementById('showtoasts');

if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
    items = JSON.parse(localStorage.getItem('banklogs'));
    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);

    items.map(data=>{
        var image = `<td><img src=${data.image}></td>`
        var balance = `<td class="btn-balance">${data.balance}</td>`
        var price = `<td class="btn-price">${data.price}</td>`
        var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
        var account = `<td>${data.account}</td>`
        var website = `<td>${data.website}</td>`
        var info1 = `<td>${data.info1}</td>`
        var info2 = `<td>${data.info2}</td>`
        var info3 = `<td>${data.info3}</td>`
        var info4 = `<td>${data.info4}</td>`
        var info5 = `<td>${data.info5}</td>`
        var info6 = `<td>${data.info6}</td>`
        
        table1.row.add([
            image,
            balance,      
            account,   
            remove,
            price,
            info1,   
            info2,   
            info3,   
            info4,   
            info5,   
            info6,   
            website,      
        ]).draw();
    });

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    updateCartTotal();
} else {
    document.getElementById('cartlength').style.display = 'none';
    document.getElementById('vpn').style.display = 'none';
    showingToast.removeAttribute('onclick');
    showingToast.addEventListener('click', showThis);

    // setTimeout(() => {
    //     window.location.assign('chime');
    // }, 15000);
}

var joeT = true;

function showThis() {
    if(joeT) {
        var shortCutFunction = 'success'; 
        var msg = `Your cart is currently empty, <br> add some logs to cart. <hr class="to-hr hr15-bot">`;
        toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
        var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
        joeT = false;
    }
}


function removeCartItem(event) {
    var buttonClicked = event.target
    
    localStorage.setItem('banklogs', []);

    buttonClicked.parentElement.parentElement.remove();

    window.location.reload();
}

function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    document.getElementById('thetot').innerHTML = `Total:  <span>$${total.toLocaleString()}</span>`;

    
    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();


    var id = setInterval(frame, 1000);

    if(!localStorage.getItem('timez-set')) {
        var jo = new Date(); var po = jo.getTime(); var p1ko = po/1000; var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo); localStorage.setItem('timez-set', true);
    }  let width = 900;

    function frame(){
        var j = new Date(); var p = j.getTime(); var p1k = p/1000;
        var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 900 - timeDifference;

        if(width <= 840) {
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