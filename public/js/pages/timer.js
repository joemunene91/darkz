var j = true;


if(localStorage.getItem('depositAmount')) {
    var elemj = document.getElementById('pablos');        
    
    var id = setInterval(frame, 1000);

    if(!localStorage.getItem('depoz-set')) {
        var jo = new Date();
        var po = jo.getTime();
        var p1ko = po/1000;
        var p1knoDecimalo = Math.trunc(p1ko);
        localStorage.setItem('seconds-left', p1knoDecimalo);
        localStorage.setItem('depoz-set', true);
    }
    let width = 300;

    function frame(){
        var j = new Date();
        var p = j.getTime();
        var p1k = p/1000;
        var p1knoDecimal = Math.trunc(p1k);
        var theTime = localStorage.getItem('seconds-left');
        var timeDifference = parseFloat(p1knoDecimal) - parseFloat(theTime);
        width = 300 - timeDifference;

        if(width <= 10){
            localStorage.removeItem('depositAmount');
            window.location.assign('download');
        } 

        else if(width <= 60) {
            elemj.classList.add("bg-danger");
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
            elemj.style.width = (width/3) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
        }

        else if(width <= 150) {
            elemj.classList.add("bg-warning");
            var minutes = Math.floor(width/60); var seconds = width - minutes * 60; if(seconds < 10){ seconds = '0'+seconds } 
            elemj.style.width = (width/3) + "%"; document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
        }

        else {
            var minutes = Math.floor(width/60);
            var seconds = width - minutes * 60;
            if(seconds < 10){ seconds = '0'+seconds }
            elemj.style.width = (width/3) + "%";
            document.getElementById('escoz').innerHTML = `Time left: ${minutes}:${seconds}`;
        }
    }

} 

