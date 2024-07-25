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

    document.getElementById('home-row').style.display = 'none';
    document.getElementById('qa-row').style.display = 'none';

    localStorage.setItem('hasBanklogs', true);

    for(var i = 0; i < items.length; i++) {

        var cartCol = document.createElement('div');
        cartCol.classList.add('alert','alert-warning','alert-dismissible');
        var cartColItems = document.getElementsByClassName('cart-alerts')[0];
        var cartColContents = `
        <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> 
        Pending Sale <strong>${items[i].account}</strong>, ${items[i].balance}
            <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
        `


        var cartRow = document.createElement('tr');
        var cartRow2 = document.createElement('li');
        cartRow.classList.add('table-warning');

        cartRow2.classList.add('total','bg-black');
        var cartItems =  document.getElementsByClassName('champez3')[0];

        var cartRowContents = `
            <td><img src=${items[i].image}></td>       
            <td>
                WAIT
                <i class="fas fa-spin fa-sync-alt spinner-bordez"></i>
                <hr id="hr-pend">
                <span>${(items[i].balance).replace('Balance: ','')}</span> 
            </td>
            <td id=${'name-on-table' + items.indexOf(items[i])} style="filter: blur(0px); white-space: normal !important;"></td>  
            <td>${items[i].account}</td>
            <td>${(items[i].price).replace('Price: ', '')}</td>
            <td>${items[i].info1}</td>
            <td>${items[i].info2}</td>
            <td>${items[i].info3}</td>
            <td>${items[i].info4}</td>
            <td>${items[i].info5}</td>
            <td>${items[i].info6}</td>
            <td>${items[i].website}</td>
        `;
        cartRow.innerHTML = cartRowContents;

        cartCol.innerHTML = cartColContents;
        
        cartColItems.prepend(cartCol);

        cartItems.prepend(cartRow);

    }
} else {
    document.getElementById('cartlength').style.display = 'none';
    document.getElementById('vpn').style.display = 'none';
    showingToast.removeAttribute('onclick');
    showingToast.addEventListener('click', showThis);

    setTimeout(() => {
        window.location.assign('chime');
    }, 18000);

    // document.getElementsByClassName('huntington')[0].style.display = 'block';
    // document.getElementsByClassName('bankofamerica')[0].style.display = 'block';
    // document.getElementsByClassName('chime')[0].style.display = 'block';
    // document.getElementsByClassName('achtransfer')[0].style.display = 'block';
    // document.getElementsByClassName('wiretransfer')[0].style.display = 'block';
    // document.getElementsByClassName('navyfederal')[0].style.display = 'block';
    // document.getElementsByClassName('coinbase')[0].style.display = 'block';
    // document.getElementsByClassName('wellsfargo')[0].style.display = 'block';
    // document.getElementsByClassName('woodforest')[0].style.display = 'block';
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


document.getElementById('balance1').innerHTML = '$5,049';
document.getElementById('balance2').innerHTML = '$5,738';
document.getElementById('balance3').innerHTML = '$5,305';
document.getElementById('balance4').innerHTML = '$5,902';
document.getElementById('balance5').innerHTML = '$5,402';
document.getElementById('balance6').innerHTML = '$5,730';
document.getElementById('balance7').innerHTML = '$5,087';
document.getElementById('balance8').innerHTML = '$5,259';
document.getElementById('balance9').innerHTML = '$5,820';

document.getElementById('balance10').innerHTML = '$5,705';
document.getElementById('balance11').innerHTML = '$5,214';
document.getElementById('balance12').innerHTML = '$5,390';
document.getElementById('balance13').innerHTML = '$5,832';
document.getElementById('balance14').innerHTML = '$5,439';
document.getElementById('balance15').innerHTML = '$5,228';
document.getElementById('balance16').innerHTML = '$5,910';
document.getElementById('balance17').innerHTML = '$5,104';
document.getElementById('balance18').innerHTML = '$5,724';
document.getElementById('balance19').innerHTML = '$5,825';
document.getElementById('balance20').innerHTML = '$5,270';
document.getElementById('balance21').innerHTML = '$5,309';
document.getElementById('balance22').innerHTML = '$5,183';

var jobs = document.getElementsByClassName('prized');
for(j=0; j< jobs.length; j++) {
    var theJob = jobs[j];
    var thePrize = theJob.parentElement.children[1].children[2].innerText;
    
    var thePr = parseFloat((thePrize.replace("$", "").replace(",", "") / 37).toFixed(0)).toLocaleString();

    theJob.innerHTML = '$'+ thePr;
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

    var bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
    
    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        if(bankLog.includes('Huntington')) {
            document.getElementsByClassName('huntington')[0].style.display = 'block';
        } else if(bankLog.includes('America')) {
            document.getElementsByClassName('bankofamerica')[0].style.display = 'block';
        } else if(bankLog.includes('Chime')) {
            document.getElementsByClassName('chime')[0].style.display = 'block';
        } else if(bankLog.includes('Chase') || bankLog.includes('Truist')) {
            document.getElementsByClassName('achtransfer')[0].style.display = 'block';
        } else if(bankLog.includes('Citi')) {
            document.getElementsByClassName('wiretransfer')[0].style.display = 'block';
        } else if(bankLog.includes('Federal')) {
            document.getElementsByClassName('navyfederal')[0].style.display = 'block';
        } else if(bankLog.includes('P.N.C') || bankLog.includes('R.B.C')) {
            document.getElementsByClassName('coinbase')[0].style.display = 'block';
        } else if(bankLog.includes('Fargo')) {
            document.getElementsByClassName('wellsfargo')[0].style.display = 'block';
        } else if(bankLog.includes('Woodforest')) {
            document.getElementsByClassName('woodforest')[0].style.display = 'block';
        }
    } 

    if(localStorage.getItem('timez-set')) { localStorage.removeItem('timez-set') }
    if(localStorage.getItem('depoz-set')) { localStorage.removeItem('depoz-set') }
}