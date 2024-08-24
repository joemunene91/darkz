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

const auth = firebase.auth();

var theCountry = '';


const wouldPa = document.getElementById('would');
const wildPa = document.getElementById('wild');

const mailField = document.getElementById('inputLife');
const signUp = document.getElementById('email-phone');

const theFlag7 = document.getElementById('the-flag7');
const theLifes = document.getElementById('the-life');
const theForm = document.getElementById('the-form');

fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	theCountry = data.country_calling_code;
	theFlag7.src = `https://flagcdn.com/144x108/${(data.country_code).toLowerCase()}.png`;
});


emailShow();

auth.onAuthStateChanged(user => {
	if(user) { 
		if (auth.isSignInWithEmailLink(window.location.href)) {
			if(user.email || user.phoneNumber) {
				setTimeout(() => { window.location.assign('home') }, 300);
			} 
		}
	}
});


function phoneShow() {
	mailField.setAttribute('type', 'tel'); mailField.style.textAlign = 'left'; 
	mailField.setAttribute('pattern', '[+]{1}[0-9]{11,14}'); mailField.style.letterSpacing = '3px';
	mailField.value = theCountry; theFlag7.style.display = 'block'; 
	mailField.setAttribute('placeHolder', 'Phone Number... ');
	theFlag7.src = `img/partners/phone.png`;mailField.value = '+123';
	 
	fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
		mailField.value = data.country_calling_code; theFlag7.src = `https://flagcdn.com/144x108/${(data.country_code).toLowerCase()}.png`;
	}).catch(error => {
		theFlag7.src = `img/partners/phone.png`;mailField.value = '+123';
	})
}

function emailShow() {
	mailField.setAttribute('type', 'email'); 
	theFlag7.style.display = 'none'; mailField.style.letterSpacing = '1.5px';
	mailField.style.textAlign = 'center'; mailField.value = '';
}

let theValue = mailField.value; let executed = false; let phoxecut = false; let phoxecut2 = false;
mailField.addEventListener('input', runOnce);

function runOnce() {
  if (!executed) {
	if(mailField.value.includes('@y')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'ahoo.com';
	} else if(mailField.value.includes('@p')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'roton.me';
	} else if(mailField.value.includes('@o')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'utlook.com';
	} else if(mailField.value.includes('@i')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'cloud.com';
	} else if(mailField.value.includes('@a')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'ol.com';
	} else if(mailField.value.includes('@m')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'ail.com';
	} else if(mailField.value.includes('@g')) {
		executed = true; theValue = mailField.value; mailField.value = theValue + 'mail.com';
	} 
  }

  if(!phoxecut) {
	if(!(mailField.value == '')) {
		if(!isNaN(mailField.value)) {
			phoxecut = true; phoneShow();
		}
	}
  }
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
		const code = mailField.value;
		const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);

		auth.signInWithCredential(credential).then(() => {  
			window.location.assign('home') 
		});
	};

	if(email.includes('@')) {
		if(email.includes('@gmail.com') || email.includes('@GMAIL.COM')) {
			signInWithGoogle();
		} else if(email.includes('@yahoo.com') || email.includes('@YAHOO.COM')) {
			signInWithYahoo()
		} else {
			auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
				var shortCutFunction = 'success';
				var msg = `A verification email sent to: <br> ${email}   <hr class="to-hr hr15-bot"> Check the spam / junk folder.  <hr class="hr3-nil">`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			}).catch(error => {
				if(error.message.includes('quota')) { 
					const googleProvider = new firebase.auth.GoogleAuthProvider;
					auth.signInWithPopup(googleProvider).then(() => { window.location.assign('home') });
				} else {
					var shortCutFunction = 'success'; var msg = `${error.message}<hr class="to-hr hr15-bot">`; toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast; 
				}
			});
		}
	} else if(email.includes('+') && (email.length >= 10)) { 
		auth.signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmationResult => {
			const sentCodeId = confirmationResult.verificationId;
			var shortCutFunction = 'success';
			var msg = ` Verification code sent to your phone:  <hr class="to-hr hr15-bot"> ${phoneNumber}. <hr class="hr10-nil"> `;
			toastr.options =  { closeButton: true, debug: false, newestOnTop: true, progressBar: true, positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null }; var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;

			wouldPa.innerHTML = `A verification code sent <br> to: <span id="in-span">${phoneNumber}</span>`;
			wildPa.innerHTML = `Enter the code below...`;

			mailField.value = ''; mailField.style.textAlign = 'center'; mailField.setAttribute('placeHolder', 'Enter the Code...');
			mailField.focus(); theFlag7.src = `img/partners/comm.png`;

			signUp.removeEventListener('click', signUpFunction); theForm.removeEventListener('submit', signUpFunction);
			theForm.addEventListener('submit', () => signInWithPhone(sentCodeId)); signUp.addEventListener('click', () => signInWithPhone(sentCodeId));
		}).catch(error => {
			var shortCutFunction = 'success'; var msg = `${error.message}<hr class="to-hr hr15-bot">`; toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null}; var $toast = toastr[shortCutFunction](msg);$toastlast = $toast; 
		});
	} else {
		mailField.focus();
	}
}
signUp.addEventListener('click', signUpFunction);
theForm.addEventListener('submit', signUpFunction);
theLifes.addEventListener('click', mailField.focus());
document.getElementById('logs-invoice').addEventListener('click', mailField.focus());

const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');

	auth.signInWithPopup(yahooProvider).then(() => { 
		setTimeout(() => {
			window.location.assign('home');
		}, 300);
	});
};

const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;

	auth.signInWithPopup(googleProvider).then(() => { 
		setTimeout(() => {
			window.location.assign('home');
		}, 300);
	});
};




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
				setTimeout(() => { if(window.location.href.includes('@')) { window.location.assign('index') } }, 120);
			})
		} else {
			auth.signInWithEmailLink(email, window.location.href).then(() => {
				var shortCutFunction = 'success';
				var msg = `Login Success: <br> <hr class="to-hr hr15-bot"> ${email} <hr class="hr10-nil">`;
				toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null, timeOut: 1200};
				var $toast = toastr[shortCutFunction](msg); $toastlast = $toast;
			}).then(() => {
				setTimeout(() => { if(window.location.href.includes('@')) { window.location.assign('index') } }, 120);
			})
		} 
	});
}






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



