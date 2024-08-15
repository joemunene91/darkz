let items = [];
var table1 = jQuery('#example1').DataTable();

var theLogo = document.getElementById('logo');

if(localStorage.getItem('banklogs')){
    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        items = JSON.parse(localStorage.getItem('banklogs'));
        document.getElementById('cartlength').innerText = (JSON.parse(localStorage.getItem('banklogs')).length);
    
    
    
        items.map(data=>{
            var image = `<td><img src=${data.image}></td>`
            var balance =`<td class="btn-balance">${data.balance}</td>`
            var account = `<td>${data.account}</td>`
            var remove = `<td><button class="btn-cloze btn-remove"></button></td>`
            var price = `<td class="btn-price">${data.price}</td>`
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
            
            if((items[i].account).includes('CHECKING') || (items[i].account).includes('SPENDING') || (items[i].account).includes('CHEQUING')){
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'Save: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list highlight">
                        <div class="pricing-list-price">
                            <h2 class="text-white">${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li class="text-white">${items[i].website} </li>
                            <li class="text-white">${items[i].info1} </li>
                            <li class="text-white">${items[i].info2} </li>
                            <li class="text-white">${items[i].info3} </li>
                            <li class="text-white">${items[i].info4} </li>
                            <li class="text-white">${items[i].info5} </li>
                            <li class="text-white">${items[i].info6} </li>
                            <li class="text-white">${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" class="butn white" style="letter-spacing: 2px !important; padding-right: 15px !important" data-bs-toggle="modal" data-bs-target="#profileModal">
                                Download
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
            } else {
                var cartRow3 = document.createElement('div');
                cartRow3.classList.add('col-lg-3', 'col-xl-2', 'col-md-3', 'col-6');
                var balance2 = items[i].balance;
                var price2 = items[i].price;
                var balance3 = balance2.replace('Balance: ', '');
                var price3 = price2.replace('Price: ', 'Save: ');
                var cartItems3 = document.getElementsByClassName('xenon3')[0];
                var cartRowContents3 = `
                    <div class="pricing-list">
                        <div class="pricing-list-price">
                            <h2>${balance3}</h2>
                            <img src=${items[i].image} class="borderp">
                        </div>
                        <ul>
                            <li>${items[i].website} </li>
                            <li>${items[i].info1} </li>
                            <li>${items[i].info2} </li>
                            <li>${items[i].info3} </li>
                            <li>${items[i].info4} </li>
                            <li>${items[i].info5} </li>
                            <li>${items[i].info6} </li>
                            <li>${(items[i].account).replace('[','<br>[').replace(']',' ACCOUNT]')}</li>
                            <button type="submit" style="letter-spacing: 2px !important; padding-right: 15px !important" class="butn" data-bs-toggle="modal" data-bs-target="#profileModal">
                                Download 
                            </button>
                        </ul>
                    </div>
                `;
                cartRow3.innerHTML = cartRowContents3;
                cartItems3.prepend(cartRow3);
    
            }    
        }
    
        updateCartTotal();
    
        var removeFromCartButtons = document.getElementsByClassName('btn-remove');
        for(var i = 0; i <removeFromCartButtons.length; i++){
            var button = removeFromCartButtons[i];
            button.addEventListener('click', removeCartItem)
        }
    } else {
        window.location.assign('home');
    }
} else {
    window.location.assign('home');
}



document.getElementById('balance1').innerHTML = '$6,249';
document.getElementById('balance2').innerHTML = '$6,738';
document.getElementById('balance3').innerHTML = '$4,815';
document.getElementById('balance4').innerHTML = '$6,902';
document.getElementById('balance5').innerHTML = '$4,402';
document.getElementById('balance6').innerHTML = '$6,730';
document.getElementById('balance7').innerHTML = '$6,087';
document.getElementById('balance8').innerHTML = '$6,259';
document.getElementById('balance9').innerHTML = '$4,820';

document.getElementById('balance10').innerHTML = '$4,805';
document.getElementById('balance11').innerHTML = '$4,214';
document.getElementById('balance12').innerHTML = '$6,390';
document.getElementById('balance13').innerHTML = '$6,832';
document.getElementById('balance14').innerHTML = '$4,439';
document.getElementById('balance15').innerHTML = '$6,228';
document.getElementById('balance16').innerHTML = '$4,910';
document.getElementById('balance17').innerHTML = '$6,104';
document.getElementById('balance18').innerHTML = '$6,724';
document.getElementById('balance19').innerHTML = '$4,724';
document.getElementById('balance20').innerHTML = '$6,270';
document.getElementById('balance21').innerHTML = '$6,309';
document.getElementById('balance22').innerHTML = '$6,183';

var jobs = document.getElementsByClassName('prized');
for(j=0; j< jobs.length; j++) {
    var theJob = jobs[j];
    var thePrize = theJob.parentElement.children[1].children[2].innerText;
    
    var thePr = parseFloat((thePrize.replace("$", "").replace(",", "") / 37).toFixed(0)).toLocaleString();

    theJob.innerHTML = '$'+ thePr;
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

    removeItemFromCart(price, balance, account,website,image,info1,info2,info3,info4,info5,info6);
    buttonClicked.parentElement.parentElement.remove();
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
    if(localStorage.getItem('timez-set')) {
        localStorage.removeItem('timez-set');
    }
    window.location.reload()
}


function updateCartTotal() {
    let items3 = (JSON.parse(localStorage.getItem('banklogs')));
    var total = 0;
    items3.map(data=>{
        var price4 = data.price.replace('Price: ','').replace(',','').replace('$','');
        total = total + (price4 * 1);
    });

    var downFile = document.getElementById('down-file');
    var anonP = document.getElementById('anon-p');

    var usaP = document.getElementById('usage-p');

    var titleLog2 = document.getElementById('titlelogs2');
    var modalAmount = document.getElementById('modal-amount');

    document.getElementById('thetot').innerHTML = `Total:  <span>$${total.toLocaleString()}</span>`;


    var discountTotal = parseInt((total * 0.9).toFixed(0));
    localStorage.setItem('divtotal', discountTotal);
    var disTot = localStorage.getItem('divtotal');

    if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
        const bankLog = (JSON.parse(localStorage.getItem('banklogs'))[0].account);
        const bankBal = (JSON.parse(localStorage.getItem('banklogs'))[0].balance);
        
        const bankImg = (JSON.parse(localStorage.getItem('banklogs'))[0].image);

        const banking1 = (JSON.parse(localStorage.getItem('banklogs'))[0].info1);
        const banking2 = (JSON.parse(localStorage.getItem('banklogs'))[0].info2);
        const banking3 = (JSON.parse(localStorage.getItem('banklogs'))[0].info3);

        const banking4 = (JSON.parse(localStorage.getItem('banklogs'))[0].info4);
        const banking5 = (JSON.parse(localStorage.getItem('banklogs'))[0].info5);
        const banking6 = (JSON.parse(localStorage.getItem('banklogs'))[0].info6);

        
        if(bankLog.includes('America')) { downFile.innerHTML = 'Bank America' } 
        else { downFile.innerHTML = bankLog.split('[')[0] }


        anonP.innerHTML = `${bankLog} <br> <span id="mail-span">${bankBal}</span>`;

        document.getElementById('jinaHolder2').innerHTML = bankLog;

        theLogo.src = `${bankImg}`;

        usaP.innerHTML = `
            <div class="modal-body no-bord"> ${banking1} </div> 
            <div class="modal-body no-bord"> ${banking2} </div> 
            <div class="modal-body no-bord"> ${banking3} </div> 
            <div class="modal-body no-bord"> ${banking4} </div> 
            <div class="modal-body no-bord"> ${banking5} </div> 
            <div class="modal-body no-bord"> ${banking6} </div> 
        `;

        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        if(bankLog.includes('Chime') || bankLog.includes('Wells')) {
            theLogo.classList.add('bit-img');
            theLogo.classList.add('logo-50');
        }

        if (window.innerWidth > 1092) {
            document.getElementById('flex-one').style.display = 'flex';
        } 
    
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

        modalAmount.innerHTML = `
            Send $ <span id="omanyala" class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

    } else if(JSON.parse(localStorage.getItem('banklogs')).length > 1) {
        var Loginz = (JSON.parse(localStorage.getItem('banklogs')));
        for(var i = 0; i < Loginz.length; i++) {
            var logRow = document.createElement('p');
            var logItems = document.getElementById('usage-p');
            logRow.innerHTML = `
                ${Loginz[i].account}  <br>
                <span id="mail-span">${Loginz[i].balance}</span>
            `;
            logItems.prepend(logRow);
        }

        if (window.innerWidth < 1092) {
            document.getElementById('flex-one').style.display = 'none';
        } 

        document.getElementById('disb').innerHTML = '10% Discount';

        document.getElementById('jinaHolder2').innerHTML = (JSON.parse(localStorage.getItem('banklogs'))).length + ' Bank Logins';

        downFile.innerHTML = `Bank Logins`;

        titleLog2.innerHTML = `
            Cart: ${JSON.parse(localStorage.getItem('banklogs')).length}, 
            Total: $<span class="countup">${parseInt(total).toLocaleString()}</span> 
        `;

        modalAmount.innerHTML = `
            Send  <span id="omanyala3">$</span> 
            <span id="omanyala2" class="countup">${parseInt(total).toLocaleString()}</span> 
            $<span id="omanyala" class="countup">${parseInt(disTot).toLocaleString()}</span>
        `;
        document.getElementById('bitcoin-logo').style.display = 'none';
    } 

    localStorage.setItem('banktotal',total);
    if(localStorage.getItem('depoz-set')) {
        localStorage.removeItem('depoz-set');
    }
}