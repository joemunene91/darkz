let items = [];
var table1 = jQuery('#example1').DataTable();

var theLogo = document.getElementById('logo');
var theLogo2 = document.getElementById('vpn-img');

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
                            <button type="submit" class="butn white" style="letter-spacing: 2px !important; padding-right: 15px !important" data-bs-toggle="modal" data-bs-target="#saveModal">
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
                            <button type="submit" style="letter-spacing: 2px !important; padding-right: 15px !important" class="butn" data-bs-toggle="modal" data-bs-target="#saveModal">
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


        anonP.innerHTML = `${bankLog} <br> with <span id="mail-span">${bankBal}</span>.`;

        theLogo.src = `${bankImg}`;
        theLogo2.src = `${bankImg}`;

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
            theLogo2.classList.add('bit-img');

            theLogo.classList.add('logo-50');
            theLogo2.classList.add('logo-50');
        }

        if (window.innerWidth > 1092) {
            document.getElementById('flex-one').style.display = 'flex';
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
                ${Loginz[i].account}  
                <br> with a balance <br> 
                <span id="mail-span">${Loginz[i].balance}</span>. 
            `;
            logItems.prepend(logRow);
        }

        if (window.innerWidth < 1092) {
            document.getElementById('flex-one').style.display = 'none';
        } 

        document.getElementById('disb').innerHTML = '10% Discount';

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