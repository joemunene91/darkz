let items = [];

var theLogo = document.getElementById('logo');

if(localStorage.getItem('depositAmount')){
    document.getElementById('cartlength').innerText = localStorage.getItem('depositAmount');
    updateCartTotal();
} else {
    window.location.assign('download');
}


function updateCartTotal() {
    var modalAmount = document.getElementById('modal-amount');

    modalAmount.innerHTML = `
        Deposit: $ <span id="omanyala" class="countup">${localStorage.getItem('depositAmount')}</span> 
    `;
}