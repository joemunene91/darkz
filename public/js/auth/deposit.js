if(window.location.href.includes('ilbank')){
    var firebaseConfig = { 
		apiKey: "AIzaSyCAa_FFfhsrmJOI_GQzXmpfJXqlNW5iMT4",
		authDomain: "tilbankcom.firebaseapp.com",
		projectId: "tilbankcom",
		storageBucket: "tilbankcom.appspot.com",
		messagingSenderId: "738709207118",
		appId: "1:738709207118:web:af014bfda3fe0158256b1f",
		measurementId: "G-KKGN2GJ2QR"
	}; firebase.initializeApp(firebaseConfig);
	var theWebsite = 'https://www.tilbank.com/index';
} else {
	var firebaseConfig = {
		apiKey: "AIzaSyD0LT-cl9ey4wl99Pct3uDwsiD4hdSJ15M",
		authDomain: "darkwebs-lat.firebaseapp.com",
		projectId: "darkwebs-lat",
		storageBucket: "darkwebs-lat.appspot.com",
		messagingSenderId: "504618741131",
		appId: "1:504618741131:web:0e59b1c8b8ea087bd0138e",
		measurementId: "G-3FQH15QTXF"
	}; firebase.initializeApp(firebaseConfig);
	var theWebsite = 'https://www.darkweb.lat/index';
}


const auth = firebase.auth();
const db = firebase.firestore();

const logoHolder = document.getElementById("logo");
const jinaHolder = document.getElementById("jinaHolder");

const jinaHolder2 = document.getElementById('jinaHolder2');

const theId = document.getElementById('the-id');
const theDate = document.getElementById('the-date');
const labelDate = document.getElementById('label-date');
const labelP = document.getElementById('label-ip');
const theIP = document.getElementById('the-ip');

const emailP = document.getElementById('email-p');



const wouldPa = document.getElementById('would');
const wildPa = document.getElementById('wild');

const checkNows = document.getElementById('check-now');



const depoField = document.getElementById('depoLife');
const signDepo = document.getElementById('confirm-depo');
const deType = document.getElementById('deposit-type');
const depo1 = document.getElementById('depo-1');
const depo2 = document.getElementById('depo-2');
const depoLifes = document.getElementById('depo-life');
const depoForm = document.getElementById('depo-form');
const depoImg = document.getElementById('depo-img');

const vpnNav = document.getElementById('vpn-nav');


if(!(window.location.href.includes('ilbank') || window.location.href.includes('rkweb'))){
	if(!window.location.href.includes('5501')) {
		window.location.assign('index')
	}
}

if(platform.manufacturer !== null) {
	var theDevicez = `${platform.manufacturer} ${platform.product}, ${platform.os}`;
} else { 
	var  theDevicez = `${platform.os} Device`;
}

checkNows.addEventListener('click', () => {
	localStorage.removeItem('depositAmount');
	window.location.assign('download');
})


auth.onAuthStateChanged(user => {
	if(!user) { 
		window.location.assign('index') 
	} else {
		var theGuy = user.uid;
	
		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL); logoHolder.classList.add('logo-50');
		} 
	
		if(user.email) {
			theGuy = user.email;
			var theaddress = (user.email).substring(0, (user.email).indexOf('@'));
			if (user.displayName) { theaddress = user.displayName } 
			if(user.phoneNumber) { 
				theaddress = user.phoneNumber
			} 
			wouldPa.innerHTML = `Deposit will be credited to <br> <span>${user.email}</span>`;
			wildPa.innerHTML = ` Your Account Balance: <span>$0</span> `;
			jinaHolder2.innerHTML = user.email;
			vpnNav.innerHTML = theaddress.substring(0, 13);
			emailP.innerHTML = `Deposit will be credited to: <br> <span id="uidy">${user.email}</span>. `;
		} else if(user.phoneNumber) {
			theGuy = user.phoneNumber;
			jinaHolder2.innerHTML = 'Phone: ' + user.phoneNumber;
	
			wouldPa.innerHTML = `Deposit will be credited to <br> <span>${user.phoneNumber}</span>`;
			wildPa.innerHTML = ` Your Account Balance: <span>$0</span> `;
			emailP.innerHTML = `Deposit will be credited to: <br> Phone: <span id="uidy">${user.phoneNumber}</span>. `;
		} else {
			theGuy = user.uid;
			jinaHolder2.innerHTML = theDevicez;
	
			wouldPa.innerHTML = `Deposit will be credited to <br> <span>${theDevicez}</span>`;
			wildPa.innerHTML = ` Your Account Balance: <span>$0</span> `;
			emailP.innerHTML = `Deposit will be credited to: <br> <span id="uidy">${theDevicez}</span>. `;
		}
	
		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => {
			if (!(doc.exists)) {
				return db.collection('users').doc(theGuy).set({ depositAmount: localStorage.getItem('depositAmount') })
			} else {
				return db.collection('users').doc(theGuy).update({ depositAmount: localStorage.getItem('depositAmount') })
			}
		});
	
		bitcoinShow();
		theId.innerHTML = user.uid;
		let theDatez2 = new Date(user.metadata.b * 1);
		let theDatez = theDatez2.toString();
		let therealDate = theDatez.substring(theDatez.indexOf('(') + 1).replace(' Time)', '');
		theDate.innerHTML = theDatez.replace('2023', '').split('(')[0];
		labelDate.innerHTML = `Time ID: (${therealDate})`;
	}
});

function bitcoinShow() {
	var user = auth.currentUser;
	if(user.email) {
		if(user.displayName) { deType.innerHTML = user.displayName } 
		else { deType.innerHTML = (user.email).substring(0, (user.email).indexOf('@')); }
	} else { deType.innerHTML = 'Balance: $0'; }

	if (user.photoURL) {
		depoImg.setAttribute("src", user.photoURL); depoImg.classList.add('logo-50');
	} else { depoImg.setAttribute('src', 'img/partners/bitcoin.png'); }
	depo1.innerHTML = ` Logins can be purchased <br> via a <span id="uidy">direct checkout</span>, `;
	depo2.innerHTML = `	Or you <span id="mail-span">make a deposit</span> and <br> buy using account funds. `;
	depoField.setAttribute('placeHolder', 'Min: $10 , Max: $500');
	document.getElementById('depo-flag7').style.display = 'none';
}

const depoFunction = () => {
	event.preventDefault();
	const deposit = depoField.value;	
	if(deposit >= 10 && deposit <= 500) {
		if(localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)){
			var shortCutFunction = 'success'; 
			var msg = `Your Deposit Amount: <br> $${deposit} <hr class="to-hr hr15-bot">`;
			toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
			var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
			localStorage.setItem('depositAmount', deposit);
			if(localStorage.getItem('depoz-set')) { localStorage.removeItem('depoz-set') }
			setTimeout(() => { window.location.assign('deposit') }, 1800);
		} else {
			var shortCutFunction = 'success'; 
			var msg = `Your cart is currently empty, <br> add some logs to cart. <hr class="to-hr hr15-bot">`;
			toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
			var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
		}
	} else if(mailField.value == '') {
		depoField.focus();
	} else {
		var shortCutFunction = 'success'; 
		var msg = `Min Deposit: $10 <br> Max Deposit: $500 <hr class="to-hr hr15-bot">`;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
		var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
	}
}
signDepo.addEventListener('click', depoFunction);
depoForm.addEventListener('submit', depoFunction);
depoLifes.addEventListener('click', depoField.focus());

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	labelP.innerHTML = `IP Address: (<span>${data.ip}</span>)`; theIP.innerHTML = ` ${data.region},  ${data.org}.`;
});






























document.getElementById('photo2').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('images/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementById("upload-pic");
		progressBar_2.style.width = progress + '%';
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

		var carRow = document.createElement('a');
		carRow.setAttribute('data-src', `${url}`);
		carRow.setAttribute('data-sub-html', `<h4 class='wh'> #100 </h4>`)
		var carItems = document.getElementById('the-gal');
		var carRowContents = `
			<div class="masonry-item">
				<img alt="project" src=${url}>
				<div class="masonry-item-overlay"> <ul>
						<li> #100 </li>
				</ul></div>
			</div>
		`;
		carRow.innerHTML = carRowContents;
		carItems.append(carRow);

		var shortCutFunction = 'success';
		var msg = ` Screenshot has been uploaded <br>
		Wait for it to be resolved.<hr class="to-hr hr15-bot">`;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,
		positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
		var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;

		setTimeout(() => {
			return db.collection('tickets').doc(auth.currentUser.uid).set({ 
				tickets: url 
			})
		}, 300);
	});
});
var storageRef2 = firebase.storage().ref();
var i = 0;
storageRef2.child('images/').listAll().then(function(result) {
	result.items.forEach(function(imageRef) {
		i++;
		displayImage(i, imageRef);
	})
})

function displayImage(row, images) {
	images.getDownloadURL().then(function(url) {
		var carRow = document.createElement('a');
		carRow.setAttribute('data-src', `${url}`);
		carRow.setAttribute('data-sub-html', `<h4 class='wh'> #100 </h4>`)
		var carItems = document.getElementById('the-gal');
		var carRowContents = `
			<div class="masonry-item">
				<img alt="project" src=${url}>
				<div class="masonry-item-overlay"> <ul>
						<li> #100 </li>
				</ul></div>
			</div>
		`;
		carRow.innerHTML = carRowContents;
		carItems.append(carRow);
	})
}






var anonChecks = document.getElementById('anon-check');

anonChecks.addEventListener('click', () => {
	var shortCutFunction = 'success'; 
	var msg = `
		$${localStorage.getItem('depositAmount')} Bitcoin payment <br> 
		not detected, 
		<hr class="to-hr hr15-bot">
		Complete the payment before <br> time runs out.<hr class="to-hr hr15-bot">`;
	toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
	var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
});


document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) {
			event.preventDefault();
		}   
	});
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}





















var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 1
setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2;
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white';
	ctx2.fill();
	grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33');
	grad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2;
	ctx2.lineWidth = radius2 * 0;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
	ctx2.fillStyle = '#121d33';
	ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2;
	var num2;
	ctx2.font = radius2 * 0.33 + "px arial";
	ctx2.textBaseline = "middle";
	ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6;
		ctx2.rotate(ang2);
		ctx2.translate(0, -radius2 * 0.87);
		ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0);
		ctx2.rotate(ang2);
		ctx2.translate(0, radius2 * 0.87);
		ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date();
	var hour2 = now2.getHours();
	var minute2 = now2.getMinutes();
	var second2 = now2.getSeconds();
	//hour
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) +
		(minute2 * Math.PI / (6 * 60)) +
		(second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	//minute
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	// second
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx, pos, length, width) {
	ctx2.beginPath();
	ctx2.lineWidth = width;
	ctx2.lineCap = "round";
	ctx2.moveTo(0, 0);
	ctx2.rotate(pos);
	ctx2.lineTo(0, -length);
	ctx2.stroke();
	ctx2.rotate(-pos);
}

if(!window.location.href.includes('5502')) {
	function disableCtrlKeyCombination(e){
		var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'i', 'v', 'j' , 'w', 'i');
		var key;
		var isCtrl;
		if(window.event){
			key = window.event.keyCode;
			if(window.event.ctrlKey) {
				isCtrl = true;
			} else {
				isCtrl = false;
			}
		} else {
			key = e.which; 
			if(e.ctrlKey) {
				isCtrl = true;
			}
			else {
				isCtrl = false;
			}
		}
		//if ctrl is pressed check if other key is in forbidenKeys array
		if(isCtrl) {
			for(i=0; i<forbiddenKeys.length; i++) {
				if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
					alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
					return false;
				}
			}
		}
		return true;
	}
}
