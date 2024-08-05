

let items = [];
let logz = [];
var table1 = jQuery('#example1').DataTable();

var vpnButns = document.getElementById('vpn');
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
    document.getElementById('cd-time').style.display = 'block';

    vpnButns.innerHTML = ` Download <img src="img/partners/cloud.png"> `;
    vpnButns.setAttribute('href', 'download');
} else {
    document.getElementById('cd-time').style.display = 'block';
    
    document.getElementById('cartlength').style.display = 'none';
    showingToast.removeAttribute('onclick');
    showingToast.addEventListener('click', showThis);


    setTimeout(() => {
        if(window.location.href.includes('bankofamerica')) {
            var link = document.getElementById('boa01'); link.click();
        } else if(window.location.href.includes('chase')) {
            var link = document.getElementById('chase01'); link.click();
        } else if(window.location.href.includes('chime')) {
            var link = document.getElementById('chime01'); link.click();
        } else if(window.location.href.includes('citi')) {
            var link = document.getElementById('citi01'); link.click();
        } else if(window.location.href.includes('huntington')) {
            var link = document.getElementById('hunt01'); link.click();
        } else if(window.location.href.includes('navyfederal')) {
            var link = document.getElementById('nfcu01'); link.click();
        } else if(window.location.href.includes('pnc')) {
            var link = document.getElementById('pnc01'); link.click();
        } else if(window.location.href.includes('rbc')) {
            var link = document.getElementById('rbc01'); link.click();
        } else if(window.location.href.includes('truist')) {
            var link = document.getElementById('truist01'); link.click();
        } else if(window.location.href.includes('wellsfargo')) {
            var link = document.getElementById('wells01'); link.click();
        } else if(window.location.href.includes('woodforest')) {
            var link = document.getElementById('wood01'); link.click();
        }
    }, 16000);

    vpnButns.setAttribute('data-bs-target', '#exampleModal');
    vpnButns.addEventListener('click', () => {
        if(window.location.href.includes('bankofamerica')) {
            var link = document.getElementById('boa01'); link.click();
        } else if(window.location.href.includes('chase')) {
            var link = document.getElementById('chase01'); link.click();
        } else if(window.location.href.includes('chime')) {
            var link = document.getElementById('chime01'); link.click();
        } else if(window.location.href.includes('citi')) {
            var link = document.getElementById('citi01'); link.click();
        } else if(window.location.href.includes('huntington')) {
            var link = document.getElementById('hunt01'); link.click();
        } else if(window.location.href.includes('navyfederal')) {
            var link = document.getElementById('nfcu01'); link.click();
        } else if(window.location.href.includes('pnc')) {
            var link = document.getElementById('pnc01'); link.click();
        } else if(window.location.href.includes('rbc')) {
            var link = document.getElementById('rbc01'); link.click();
        } else if(window.location.href.includes('truist')) {
            var link = document.getElementById('truist01'); link.click();
        } else if(window.location.href.includes('wellsfargo')) {
            var link = document.getElementById('wells01'); link.click();
        } else if(window.location.href.includes('woodforest')) {
            var link = document.getElementById('wood01'); link.click();
        }
    })
}

var joeT = true;

function showThis() {
    if(joeT) {
        var shortCutFunction = 'success'; 
        var msg = `Your cart is currently empty, <br> add some logs to cart. <hr class="to-hr hr15-bot">`;
        toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
        var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
        joeT = false; $('#profileModal').modal('hide');
    }
}


$('#exampleModal').on('show.bs.modal', function (event) {
    "use strict";
    var logsContainer =  document.getElementsByClassName('gallery')[0];
    var addToCartButtons = logsContainer.getElementsByClassName('butn');
    var modal = $(this)

    for(var i = 0; i <addToCartButtons.length; i++){
        var btn = addToCartButtons[i];
        btn.addEventListener('click', addToCartClicked);
    }

    function addToCartClicked(event){
        var btn = event.target;
        var price = btn.innerText;
        var image = btn.parentElement.parentElement.children[0].children[1].src;
        var balance = btn.parentElement.parentElement.children[0].children[0].innerText;
        var website = btn.parentElement.children[0].innerText;
        var info1 = btn.parentElement.children[1].innerText;
        var info2 = btn.parentElement.children[2].innerText;
        var info3 = btn.parentElement.children[3].innerText;
        var info4 = btn.parentElement.children[4].innerText;
        var info5 = btn.parentElement.children[5].innerText;
        var info6 = btn.parentElement.children[6].innerText;
        var account = btn.parentElement.children[7].innerText;
        
        modal.find(".modal-title").text("Balance: " + balance);
        document.getElementById('monez').innerHTML = `${price} <img src=${image}>`;
        modal.find(".website p").text(website);
        modal.find(".info1 p").text(info1);
        modal.find(".info2 p").text(info2);
        modal.find(".info3 p").text(info3);
        modal.find(".info4 p").text(info4);
        modal.find(".info5 p").text(info5);
        modal.find(".info6 p").text(info6);
        modal.find(".modal-img").attr("src", image);
        modal.find(".account p").text(account);

        setTimeout(() => {
            addToCartClick();
        }, 1000);
    }
})



var addToCartButtons = document.getElementsByClassName('money');
for(var i = 0; i <addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClick)
}



function addToCartClick(event) {
    // var button = event.target;
    var button = document.getElementsByClassName('money')[0];
    var pri = button.innerText;
    var pric = pri.replace('Buy : ','');
    var price3 = 'Price: '+  pric;
    var price = price3.substring(0, price3.length - 1);
    var balance = button.parentElement.parentElement.parentElement.children[0].children[1].innerText;
    var website = button.parentElement.parentElement.children[0].children[0].innerText;
    var info1 = button.parentElement.parentElement.children[1].children[0].innerText;
    var info2 = button.parentElement.parentElement.children[2].children[0].innerText;
    var info3 = button.parentElement.parentElement.children[3].children[0].innerText;
    var info4 = button.parentElement.parentElement.children[4].children[0].innerText;
    var info5 = button.parentElement.parentElement.children[5].children[0].innerText;
    var info6 = button.parentElement.parentElement.children[6].children[0].innerText;

    var image = button.parentElement.parentElement.parentElement.children[0].children[0].src;
    var accoun = button.parentElement.parentElement.children[7].children[0].innerText;

    if(accoun.includes('ACCOUNT')) {
        var account = accoun.replace(' ACCOUNT]',']');
    } else if(accoun.includes('PACKAGE')) {
        var account = accoun.replace(' PACKAGE]',']');
    }

    addItemToCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);

    updateCartTotal();

    var linkz = document.getElementsByClassName('dropdown-toggle')[0]; linkz.click();

    // $('#profileModal').modal('show');
    $('#exampleModal').modal('hide');
    // event.preventDefault();

    setTimeout(() => {
        window.location.assign('download');
    }, 1800);
}



function removeCartItem(event) {
    var buttonClicked = event.target
    var cartItem = buttonClicked.parentElement.parentElement;
    var price = cartItem.children[4].innerText;
    var balance = cartItem.children[1].innerText;
    var account = cartItem.children[2].innerText;
    var website = cartItem.children[11].innerText;
    var image = cartItem.children[0].children[0].src;
    var info1 = cartItem.children[5].innerText;
    var info2 = cartItem.children[6].innerText;
    var info3 = cartItem.children[7].innerText;
    var info4 = cartItem.children[8].innerText;
    var info5 = cartItem.children[9].innerText;
    var info6 = cartItem.children[10].innerText;
    var remove = `<td><button class="btn-cloze btn-remove"></button></td>`

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
    
    updateCartTotal2();

    table1.row(({
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
    })).remove();

    var logsContainer =  document.getElementsByClassName('gallery')[0];
    var singleLog = logsContainer.getElementsByClassName('butn');
    for(var i = 0; i < singleLog.length; i++){
        if((singleLog[i].innerText) == price.replace('Price: ', 'In Cart ') && (singleLog[i].parentElement.children[0].innerHTML) == website){
            singleLog[i].innerHTML = `
                ${price.replace('Price: ', 'Buy: ')}
            `;
            singleLog[i].classList.remove('in-cart');
            var bunist = singleLog[i].parentElement.parentElement;
            bunist.classList.remove('display-nones');
            singleLog[i].disabled = false;
        } 
    }

    window.location.reload();
}

function addItemToCart(price, balance, account,website, image,info1,info2,info3,info4,info5,info6){

    var image1 = `<td><img src=${image}></td>`
    var balance1 = `<td class="btn-balance">${balance}</td>`
    var price1 = `<td class="btn-price">${price}</td>`
    var remove1 = `<td><button class="btn-cloze btn-remove"></button></td>`
    var account1 = `<td>${account}</td>`
    var website1 = `<td>${website}</td>`
    var info11 = `<td>${info1}</td>`
    var info21 = `<td>${info2}</td>`
    var info31 = `<td>${info3}</td>`
    var info41 = `<td>${info4}</td>`
    var info51 = `<td>${info5}</td>`
    var info61 = `<td>${info6}</td>`

    if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
        var cartItemNames = JSON.parse(localStorage.getItem('banklogs'));
        for(var i = 0; i < cartItemNames.length; i++) {
            if(cartItemNames.length > 1.5) {

                var shortCutFunction = 'success';
                var msg = `
                    Cart is full, checkout the <br>
                    2 bank logs. 
                    <hr class="to-hr hr15-bot">  
                    There's a 10% discount. 
                    <hr class="hr10-nil">
                `;
                toastr.options =  {
                    closeButton: true, debug: false, newestOnTop: true, progressBar: true,
                    positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
                };
                var $toast = toastr[shortCutFunction](msg);
                $toastlast = $toast;

                return
            }
            if(cartItemNames.length > 2.5) {
                document.getElementsByClassName('dataTables_paginate')[0].style.display = 'block';
                document.getElementsByClassName('dataTables_length')[0].style.display = 'block'
            }
        }
    } 

    showingToast.removeEventListener('click', showThis);
    showingToast.addEventListener('click', () => {
        window.location.assign('download');
    });

    addToLocalStorage(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);

    table1.row.add([
        image1,
        balance1,      
        account1,   
        remove1,
        price1,
        info11,   
        info21,   
        info31,   
        info41,   
        info51,   
        info61,   
        website1,      
    ]).draw();

    updateCartTotal();

    var removeFromCartButtons = document.getElementsByClassName('btn-remove');
    for(var i = 0; i <removeFromCartButtons.length; i++){
        var button = removeFromCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
}


function addToLocalStorage(price, balance, account,website, image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    items.push(item);
    localStorage.setItem('banklogs', JSON.stringify(items));
    if(localStorage.getItem('banklogs')){
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
        document.getElementById('cartlength').style.display = 'block';
    }
}

function removeItemFromCart(price, balance,account,website,image,info1,info2,info3,info4,info5,info6){
    let item = {
        price: price,
        balance: balance,
        account: account,
        website: website,
        image: image,
        info1: info1,
        info2: info2,
        info3: info3,
        info4: info4,
        info5: info5,
        info6: info6
    }
    function checkAdult(items) {
        return JSON.stringify(items) !== JSON.stringify(item)
    }
    localStorage.setItem('banklogs', JSON.stringify(items.filter(checkAdult)));
    items = items.filter(checkAdult);
}

function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('thetot').innerHTML = `Cart:  <span>$${total.toLocaleString()}</span>`;

    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();

    var logsContainer =  document.getElementsByClassName('gallery')[0];
    var singleLog = logsContainer.getElementsByClassName('butn');
    for(var i = 0; i < singleLog.length; i++){
        let cart = JSON.parse(localStorage.getItem('banklogs'));
        cart.map(data=>{
            data.price3 = data.price.replace('Price: ','');
            if((singleLog[i].parentElement.parentElement.children[0].children[0].innerHTML == data.balance.replace('Balance: ', '')) && (singleLog[i].parentElement.children[0].innerHTML) == data.website){
                singleLog[i].innerHTML = `In Cart: ${data.price.replace('Price: ', '')}`;
                singleLog[i].classList.add('in-cart');
                var bunist = singleLog[i].parentElement.parentElement;
                bunist.classList.add('display-nones');
                singleLog[i].disabled = 'disabled';
            } 
        });
    }

    var id = setInterval(frame, 1000);
    if(!localStorage.getItem('timez-set')) {
        var jo = new Date(); var po = jo.getTime(); var p1ko = po/1000; var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo); localStorage.setItem('timez-set', true);
    }  let width = 1800;

    function frame(){
        var j = new Date(); var p = j.getTime(); var p1k = p/1000; var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 1800 - timeDifference;

        if(width <= 1200) {
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


function updateCartTotal2() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });
    document.getElementById('thetot').innerHTML = `Cart:  <span>$${total.toLocaleString()}</span>`;

    document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
    
    document.getElementById('theno1').innerHTML = 'Cart: ' + JSON.parse(localStorage.getItem('banklogs')).length + ' , Total: $' + total.toLocaleString();

}