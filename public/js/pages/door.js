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


if(!localStorage.getItem('darkweb-lat')) {
	localStorage.setItem('banklogs', []);
	localStorage.setItem('darkweb-lat', true);
}


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

const vpnButn = document.getElementsByClassName('vpn-section')[0];

const auth = firebase.auth();

vpnButn.addEventListener('click', emailShow);
emailShow();

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

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	theFlag7.src = `https://flagcdn.com/144x108/${(data.country_code).toLowerCase()}.png`;
});

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
			setTimeout(() => { window.location.assign('home') }, 150);
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
			$('#saveModal').modal('show'); $('#emailModal').modal('hide');
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
		setTimeout(() => { window.location.assign('home') }, 150);
	});
};

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		setTimeout(() => { window.location.assign('home') }, 150);
	});
};

document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) { event.preventDefault(); }   
	});
}

if(!window.location.href.includes('5502')) {
	function disableCtrlKeyCombination(e){
		var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'i', 'v', 'j' , 'w', 'i');
		var key; var isCtrl;
		if(window.event){
			key = window.event.keyCode;
			if(window.event.ctrlKey) { isCtrl = true; } else { isCtrl = false; }
		} else {
			key = e.which;  if(e.ctrlKey) { isCtrl = true; } else { isCtrl = false; }
		}
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



if (auth.isSignInWithEmailLink(window.location.href)) {
	var email = ''; var phone = ''; var theEmail = '';
	var theLink = window.location.href;
	theEmail =  theLink.substring(theLink.indexOf("#") + 1);
	email = theEmail;   
	var credential = new firebase.auth.EmailAuthProvider.credentialWithLink(email, window.location.href);

	auth.onAuthStateChanged(user => {
		if(user && user.phoneNumber) {
			auth.currentUser.linkWithCredential(credential).then(() => {
				var shortCutFunction = 'success';
				var msg = `Login Success: <br> <hr class="to-hr hr15-bot"> ${email} <hr class="hr10-nil">`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null, timeOut: 1200};
				var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			}).then(() => {
				setTimeout(() => { if(window.location.href.includes('@')) { window.location.assign('home') } }, 150);
			})
		} else {
			auth.signInWithEmailLink(email, window.location.href).then(() => {
				var shortCutFunction = 'success';
				var msg = `Login Success: <br> <hr class="to-hr hr15-bot"> ${email} <hr class="hr10-nil">`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null, timeOut: 1200};
				var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			}).then(() => {
				setTimeout(() => { if(window.location.href.includes('@')) { window.location.assign('home') } }, 150);
			})
		} 
	});
}



auth.onAuthStateChanged(user => {
	if(user) {
		if (!auth.isSignInWithEmailLink(window.location.href)) {
			if(user.email || user.phoneNumber) {
				setTimeout(() => { window.location.assign('home') }, 150);
			} 
		}
	} else {
		setTimeout(() => {
			$('#emailModal').modal('show'); emailShow();
		}, 2400);
	}
});




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


