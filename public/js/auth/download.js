var firebaseConfig = {
	apiKey: "AIzaSyD0LT-cl9ey4wl99Pct3uDwsiD4hdSJ15M",
	authDomain: "darkwebs-lat.firebaseapp.com",
	projectId: "darkwebs-lat",
	storageBucket: "darkwebs-lat.appspot.com",
	messagingSenderId: "504618741131",
	appId: "1:504618741131:web:0e59b1c8b8ea087bd0138e",
	measurementId: "G-3FQH15QTXF"
}; firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const logoHolder = document.getElementById("logo");
const jinaHolder = document.getElementById("jinaHolder");

const jinaHolder2 = document.getElementById('jinaHolder2');

const theId = document.getElementById('the-id');

const labelP = document.getElementById('label-ip');
const theIP = document.getElementById('the-ip');

const emailP = document.getElementById('email-p');

const signUp = document.getElementById('anon-check');

var thePerson = '';


fetch('https://ipapi.co/json/').then(function(response) { return response.json()}).then(function(data) {
	theCountry = data.country_calling_code;
	localStorage.setItem('locationZ', data.country_name +  ', ' + data.city);
	labelP.innerHTML = `IP Address: (<span>${data.ip}</span>)`; theIP.innerHTML = ` ${data.region},  ${data.org}.`;
}).catch(() => {
	localStorage.setItem('locationZ', 'Null Error');
})

if(!window.location.href.includes('rkweb')){
	if(!window.location.href.includes('5501')) {
		window.location.assign('index')
	}
}

let itemz = [];
if(localStorage.getItem('banklogs')){
    if((JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        itemz = JSON.parse(localStorage.getItem('banklogs'));
	}
}


auth.onAuthStateChanged(user => {
	if(!user) { 
		window.location.assign('index');
	} else {
		var theGuy = user.uid;

		if (user.photoURL) {
			logoHolder.setAttribute("src", user.photoURL); logoHolder.classList.add('logo-50');
		} 
	
		if(user.email) {
			theGuy = user.email;
			var theaddress = (user.email).substring(0, (user.email).indexOf('@'));
			if (user.displayName) { theaddress = user.displayName } 

			thePerson = `<hr class="hr-2"> ${theaddress} `;
			jinaHolder2.innerHTML = user.email;
			emailP.innerHTML = ` 
				Bank logins will be sent to <br>
				<span id="mail-span">${user.email}.</span> 
			`;
		} else if(user.phoneNumber) {
			theGuy = user.phoneNumber;
			jinaHolder2.innerHTML = 'Phone: ' + user.phoneNumber;
			thePerson = `<hr class="hr-2"> ${user.phoneNumber.substring(0, 10)}...`;
			emailP.innerHTML = ` 
				Bank logs will be sent via <br> SMS to: 
				<span id="mail-span" style="letter-spacing: 1px !important">${user.phoneNumber}.</span>
			`;
		} 
	
		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			hasItems = 'Very True';
			for (var i = 0; i < (JSON.parse(localStorage.getItem('banklogs'))).length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = `${thePerson}`; 
			}
		}

		document.getElementById('showtoasts').addEventListener('click', () => {
			setTimeout(() => { document.getElementById('anon-check').click(); }, 1200);
		});

		document.getElementById('monez').addEventListener('click', () => {
			setTimeout(() => { document.getElementById('anon-check').click(); }, 2400);
		});
	
		var docRef = db.collection("users").doc(theGuy);
		docRef.get().then((doc) => {
			if (!(doc.exists)) {
				return db.collection('users').doc(theGuy).set({ cart: itemz , location: localStorage.getItem('locationZ') })
			} else {
				return db.collection('users').doc(theGuy).update({ cart: itemz , location: localStorage.getItem('locationZ') })
			}
		});

		theId.innerHTML = user.uid;
	}
});



signUp.addEventListener('click', showToastr);

function showToastr() {
	const user = auth.currentUser;
	var toasti = 0; var toastzi = 0; 
	if(localStorage.getItem('btcTotal')) {
		var toastbtci = localStorage.getItem('btcTotal');
	} else {
		var toastbtci = 'Your ';
	}
    if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 0) {
        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
            toasti = localStorage.getItem('banktotal');
            toastzi = toasti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else if(JSON.parse(localStorage.getItem('banklogs')).length == 2) { 
            toasti = localStorage.getItem('divtotal');
            toastzi = toasti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    ws.onmessage = (event) => {
        let stockObject = JSON.parse(event.data);
        toastbtci = (toasti / (parseFloat(stockObject.k.c))).toFixed(5);
    }
    
    var theGuys = user.uid;

	if(user.email) {
		auth.currentUser.sendEmailVerification();
		theGuys = user.email;

		var shortCutFunction = 'success'; 
		var msg = `
				${toastbtci} BTC not detected, <br> Send exactly $${toastzi}.
			<hr class="to-hr hr15-top">
				A verification email sent to: <br>
				${user.email}. 
			<hr class="hr3-nil">`;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
		var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
	} else if(user.phoneNumber) {
		theGuys = user.phoneNumber;
		var shortCutFunction = 'success'; 
		var msg = `
				${toastbtci} BTC not detected, <br> Send exactly $${toastzi}.
			<hr class="to-hr hr15-top">
				Logs will be sent via SMS to: <br>
				${user.phoneNumber}. 
			<hr class="hr3-nil">`;
		toastr.options =  {closeButton: true, debug: false, newestOnTop: true, progressBar: true,positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null};
		var $toast = toastr[shortCutFunction](msg);$toastlast = $toast;
	} 

	var docRef2 = db.collection("users").doc(theGuys);
	docRef2.get().then((doc) => {
		if (!(doc.exists)) {
			return db.collection('users').doc(theGuys).set({ download: 'True' })
		} else {
			return db.collection('users').doc(theGuys).update({ download: 'True' })
		}
	});
}













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

var canvas = document.getElementById("canvas"); var ctx = canvas.getContext("2d"); var radius = canvas.height / 2;
ctx.translate(radius, radius); radius = radius * 1;  setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius); 	drawNumbers(ctx, radius);	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;	ctx.beginPath();	ctx.arc(0, 0, radius, 0, 2 * Math.PI);	ctx.fillStyle = 'white';	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);	
	grad.addColorStop(0, '#121d33');	grad.addColorStop(0.5, 'rgba(0,0,0,0)');	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;	ctx.lineWidth = radius * 0;	ctx.stroke();	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);	ctx.fillStyle = '#121d33';	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;	var num;	ctx.font = radius * 0.33 + "px arial";	ctx.textBaseline = "middle";	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;	ctx.rotate(ang);	ctx.translate(0, -radius * 0.87);	ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);	ctx.rotate(ang);	ctx.translate(0, radius * 0.87);	ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	hour = hour % 12;
	hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +	(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
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


var canvas2 = document.getElementById("canvas2"); var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2; ctx2.translate(radius2, radius2);
radius2 = radius2 * 1; setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2; ctx2.beginPath(); ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white'; ctx2.fill(); grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33'); grad2.addColorStop(0.5, 'rgba(0,0,0,0)'); grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2; ctx2.lineWidth = radius2 * 0; ctx2.stroke(); ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI); ctx2.fillStyle = '#121d33'; ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2; var num2;
	ctx2.font = radius2 * 0.33 + "px arial"; ctx2.textBaseline = "middle"; ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6; ctx2.rotate(ang2); ctx2.translate(0, -radius2 * 0.87); ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0); ctx2.rotate(ang2); ctx2.translate(0, radius2 * 0.87); ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date(); var hour2 = now2.getHours();
	var minute2 = now2.getMinutes(); var second2 = now2.getSeconds();
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) + (minute2 * Math.PI / (6 * 60)) + (second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx2, pos, length, width) {
	ctx2.beginPath(); ctx2.lineWidth = width; ctx2.lineCap = "round"; ctx2.moveTo(0, 0);
	ctx2.rotate(pos); ctx2.lineTo(0, -length); ctx2.stroke(); ctx2.rotate(-pos);
}



