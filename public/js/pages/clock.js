var elemj = document.getElementById('pablos');        
var id = setInterval(frame, 1000);

if(!localStorage.getItem('timez-set')) {
    var jo = new Date();
    var po = jo.getTime();
    var p1ko = po/1000;
    var p1knoDecimalo = Math.trunc(p1ko);
    localStorage.setItem('seconds-left', p1knoDecimalo);
    localStorage.setItem('timez-set', true);
}
let width = 900;

function frame(){
    var j = new Date();
    var p = j.getTime();
    var p1k = p/1000;
    var p1knoDecimal = Math.trunc(p1k);
    var theTime = localStorage.getItem('seconds-left');
    var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
    width = 900 - timeDifference;

    if(width <= 10){
        window.location.assign('banklogs');
    } else if(width < 300) {
        elemj.classList.add("bg-danger");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        elemj.style.width = (width/9) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    } else if(width < 600) {
        elemj.classList.add("bg-warning");
        var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
        elemj.style.width = (width/9) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    } else {
        var minutes = Math.floor(width/60);
        var seconds = width - minutes * 60;
        if(seconds < 10){ seconds = '0'+seconds }
        elemj.style.width = (width/9) + "%";
        document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
    }
}
