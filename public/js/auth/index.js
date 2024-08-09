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



const theId = document.getElementById('the-id');
const theDate = document.getElementById('the-date');
const labelDate = document.getElementById('label-date');

const logoHolder = document.getElementById("logo");

const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById('jinaHolder2');

const labelP = document.getElementById('label-ip');
const theIP = document.getElementById('the-ip');




const depoField = document.getElementById('depoLife');
const signDepo = document.getElementById('confirm-depo');
const deType = document.getElementById('deposit-type');
const depo1 = document.getElementById('depo-1');
const depo2 = document.getElementById('depo-2');
const depoLifes = document.getElementById('depo-life');
const depoForm = document.getElementById('depo-form');
const depoImg = document.getElementById('depo-img');

const vpnNav = document.getElementById('vpn-nav');





const mailField = document.getElementById('inputLife');
const signUp = document.getElementById('email-phone');

const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');

const theFlag7 = document.getElementById('the-flag7');

const theForm = document.getElementById('the-form');

const inType = document.getElementById('invoice-type');
const save1 = document.getElementById('save-1');
const save2 = document.getElementById('save-2');

const theLifes = document.getElementById('the-life');


const auth = firebase.auth();


auth.onAuthStateChanged(user => {
	if(!user) { 
		if (!auth.isSignInWithEmailLink(window.location.href)) {
			auth.signInAnonymously();
		}
	} else {
		var theGuy = user.uid;

		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL);
			logoHolder.classList.add('logo-50');
		} 
	
		if(user.email) {
			theGuy = user.email;
			var theaddress = (user.email).substring(0, (user.email).indexOf('@'));
			if (user.displayName) { theaddress = user.displayName } 
			jinaHolder.value = theaddress;
			vpnNav.innerHTML = theaddress.substring(0, 13);
		} else if(user.phoneNumber) {
			theGuy = user.phoneNumber;
		} else {
            theGuy = user.uid;
        }
	
	
		emailShow();
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
	if (user.photoURL) { depoImg.setAttribute("src", user.photoURL); depoImg.classList.add('logo-50');
	} else { depoImg.setAttribute('src', 'img/partners/bitcoin.png'); }
	depo1.innerHTML = ` Logins can be purchased <br> via a <span id="uidy">direct checkout</span>, `;
	depo2.innerHTML = `	Or you <span id="mail-span">make a deposit</span> and <br> buy using account funds. `;
	depoField.setAttribute('placeHolder', 'Min: $10 , Max: $500'); document.getElementById('depo-flag7').style.display = 'none';
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
			var shortCutFunction = 'success'; var msg = `Your cart is currently empty, <br> add some logs to cart. <hr class="to-hr hr15-bot">`;
			toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
			var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
		}
	} else if(mailField.value == '') {
		depoField.focus();
	} else {
		var shortCutFunction = 'success'; var msg = `Min Deposit: $10 <br> Max Deposit: $500 <hr class="to-hr hr15-bot">`;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
		var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
	}
}
signDepo.addEventListener('click', depoFunction); depoForm.addEventListener('submit', depoFunction); depoLifes.addEventListener('click', depoField.focus());

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	labelP.innerHTML = `IP Address: (<span>${data.ip}</span>)`; theIP.innerHTML = ` ${data.region},  ${data.org}.`;
	theFlag7.src = `https://flagcdn.com/144x108/${(data.country_code).toLowerCase()}.png`;
});































function emailShow() {
	inType.innerHTML = 'Login Page';
	save1.innerHTML = ` A login link will be sent <br> via <span id="mail-span">Email</span> or <span id="mail-span">SMS</span>, `;
	save2.innerHTML = ` Use the link to login here <br> to <span id="uidy">www.darkweb.lat</span> `;
	mailField.setAttribute('type', 'email'); 
	theFlag7.style.display = 'none'; mailField.style.letterSpacing = '1.5px';

	mailField.value = ''; mailField.style.textAlign = 'center';
	mailField.setAttribute('placeHolder', 'Enter Email or Phone');
}

let theValue = mailField.value;
let executed = false;
let phoxecut = false;
mailField.addEventListener('input', runOnce);
mailField.addEventListener('input', runTwice);

function runOnce() {
  if (!executed) {
	if(mailField.value.includes('@y')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'ahoo.com';
	} else if(mailField.value.includes('@p')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'roton.me';
	} else if(mailField.value.includes('@o')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'utlook.com';
	} else if(mailField.value.includes('@i')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'cloud.com';
	} else if(mailField.value.includes('@a')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'ol.com';
	} else if(mailField.value.includes('@m')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'ail.com';
	} else if(mailField.value.includes('@g')) {
		executed = true; theValue = mailField.value;
		mailField.value = theValue + 'mail.com';
	} 
  }

  if(!phoxecut) {
	if(mailField.value != '') {
		if (!(isNaN(mailField.value))) {
			phoxecut = true; phoneShow();
		}
	}
  }
}

function runTwice() {
	if(mailField.value == '') {
		emailShow();
	}
}

function phoneShow() {
	mailField.setAttribute('type', 'tel'); mailField.style.textAlign = 'left'; 
	mailField.setAttribute('pattern', '[+]{1}[0-9]{11,14}');
	mailField.value = '+123'; mailField.style.letterSpacing = '3px';
	theFlag7.src = `img/partners/user.png`; theFlag7.style.display = 'block';
	fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
		mailField.value = data.country_calling_code; 
		theFlag7.src = `https://flagcdn.com/144x108/${(data.country_code).toLowerCase()}.png`;
	});
}

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {'size': 'invisible'});
recaptchaVerifier.render().then(widgetId => { window.recaptchaWidgetId = widgetId; });

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;	
	const phoneNumber = mailField.value;
	const appVerifier = window.recaptchaVerifier;
	var actionCodeSettings = {url: `${theWebsite}#${mailField.value}`, handleCodeInApp: true };

	const signInWithPhone = sentCodeId => {
		const code = codeField.value;
		const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);

		auth.signInWithCredential(credential).then(() => { 
			setTimeout(() => { window.location.reload() }, 150);
		});
	};

	if(email.includes('@')) {
		if(email.includes('@gmail.com') || email.includes('@GMAIL.COM')) {
			if(email.length>10) { signInWithGoogle(); } else { mailField.focus(); }
		} else if(email.includes('@yahoo.com') || email.includes('@YAHOO.COM')) {
			if(email.length>10) { signInWithYahoo(); } else { mailField.focus(); }
		} else {
			auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
				var shortCutFunction = 'success';
				var msg = `
				A verification link has been sent to:   <hr class="to-hr hr15-bot">
				${email} <hr style="opacity: 0 !important; margin: 1px auto !important">
				Check the spam / junk folder.  <hr class="hr3-nil">`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
				var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			}).catch(error => {
				var shortCutFunction = 'success'; var msg = `${error.message}<hr class="to-hr hr15-bot"> Use a gmail email address <br> instead.`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
				var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
			});
		}
	} else if(email.includes('+') && (email.length >= 10)) { 
		auth.signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
			var shortCutFunction = 'success';
			var msg = ` Verification code sent to your phone:  <hr class="to-hr hr15-bot"> ${phoneNumber}. <hr class="hr10-nil"> `;
			toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null };
			var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			$('#codeModal').modal('show'); $('#saveModal').modal('hide');
		}).catch(error => {
			var shortCutFunction = 'success'; var msg = `${error.message}<hr class="to-hr hr15-bot">`;
			toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
			var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
		});
	} else {
		mailField.focus();
	}
}
signUp.addEventListener('click', signUpFunction);
theForm.addEventListener('submit', signUpFunction);
theLifes.addEventListener('click', mailField.focus());

const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		setTimeout(() => { window.location.reload() }, 150);
	});
};

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		setTimeout(() => { window.location.reload() }, 150);
	});
};























































var d = new Date();
var n = d.getMonth() + 1;
var y = d.getFullYear();
var m = d.getDate();



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
	var now2 = new Date(); var hour2 = now2.getHours();
	var minute2 = now2.getMinutes(); var second2 = now2.getSeconds();
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

function drawHand2(ctx2, pos, length, width) {
	ctx2.beginPath(); ctx2.lineWidth = width; ctx2.lineCap = "round"; ctx2.moveTo(0, 0);
	ctx2.rotate(pos); ctx2.lineTo(0, -length); ctx2.stroke(); ctx2.rotate(-pos);
}







var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");
var radius3 = canvas3.height / 2;
ctx3.translate(radius3, radius3);
radius3 = radius3 * 1
setInterval(drawClock3, 1000);

function drawClock3() {
	drawFace3(ctx3, radius3);
	drawNumbers3(ctx3, radius3);
	drawTime3(ctx3, radius3);
}

function drawFace3(ctx3, radius3) {
	var grad3;
	ctx3.beginPath();
	ctx3.arc(0, 0, radius3, 0, 2 * Math.PI);
	ctx3.fillStyle = 'white';
	ctx3.fill();
	grad3 = ctx3.createRadialGradient(0, 0, radius3 * 0.05, 0, 0, radius3 * 2.5);
	grad3.addColorStop(0, '#121d33');
	grad3.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad3.addColorStop(1, '#121d33');
	ctx3.strokeStyle = grad3;
	ctx3.lineWidth = radius3 * 0;
	ctx3.stroke();
	ctx3.beginPath();
	ctx3.arc(0, 0, radius3 * 0.1, 0, 2 * Math.PI);
	ctx3.fillStyle = '#121d33';
	ctx3.fill();
}

function drawNumbers3(ctx3, radius3) {
	var ang3;
	var num3;
	ctx3.font = radius2 * 0.33 + "px arial";
	ctx3.textBaseline = "middle";
	ctx3.textAlign = "center";
	for (num3 = 1; num3 < 13; num3++) {
		ang3 = num3 * Math.PI / 6;
		ctx3.rotate(ang3);
		ctx3.translate(0, -radius3 * 0.87);
		ctx3.rotate(-ang3);
		ctx3.fillText(num3.toString(), 0, 0);
		ctx3.rotate(ang3);
		ctx3.translate(0, radius3 * 0.87);
		ctx3.rotate(-ang3);
	}
}

function drawTime3(ctx3, radius3) {
	var now3 = new Date();
	var hour3 = now3.getHours();
	var minute3 = now3.getMinutes();
	var second3 = now3.getSeconds();
	//hour
	hour3 = hour3 % 12;
	hour3 = (hour3 * Math.PI / 6) +
		(minute3 * Math.PI / (6 * 60)) +
		(second3 * Math.PI / (360 * 60));
	drawHand3(ctx3, hour3, radius3 * 0.5, radius3 * 0.07);
	//minute
	minute3 = (minute3 * Math.PI / 30) + (second3 * Math.PI / (30 * 60));
	drawHand3(ctx3, minute3, radius3 * 0.8, radius3 * 0.07);
	// second
	second3 = (second3 * Math.PI / 30);
	drawHand3(ctx3, second3, radius3 * 0.9, radius3 * 0.02);
}

function drawHand3(ctx3, pos, length, width) {
	ctx3.beginPath();
	ctx3.lineWidth = width;
	ctx3.lineCap = "round";
	ctx3.moveTo(0, 0);
	ctx3.rotate(pos);
	ctx3.lineTo(0, -length);
	ctx3.stroke();
	ctx3.rotate(-pos);
}



















