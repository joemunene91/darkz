!(function(e) {
  "use strict";
  var n = e(window);
  
  function t() {
    var t, l, c;
    (t = e("header").height()), (l = e(".screen-height")), (c = n.height() - t), l.css("height", c);
  }
  e("#preloader").fadeOut("normall", function() {
      e(this).remove();
    }),
    n.on("scroll", function() {
      n.scrollTop() <= 50 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : e("header").removeClass("fixedHeader").addClass("scrollHeader");
    }),
    e(".parallax,.bg-img").each(function(n) {
      e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")");
    }),
    n.resize(function(e) {
      setTimeout(function() {
          t();
        }, 500),
        e.preventDefault();
    }),
    t(),
    e(document).ready(function() {
      e(".countup").counterUp({
        delay: 10,
        time: 4000
      });
  
      $('.xzoom5, .xzoom-gallery5').xzoom({
        tint: '#232323',
        Xoffset: 15
      });
  
      //Integration with hammer.js
      var isTouchSupported = 'ontouchstart' in window;
  
      if (isTouchSupported) {
        //If touch device
        $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function() {
          var xzoom = $(this).data('xzoom');
          xzoom.eventunbind();
        });
      } else {
        $('#span-test').bind('click', function(event) {
          var xzoom = $(this).data('xzoom');
          xzoom.closezoom();
          var gallery = xzoom.gallery().cgallery;
          var i, images = new Array();
          for (i in gallery) {
            images[i] = {
              src: gallery[i]
            };
          }
          $.magnificPopup.open({
            items: images,
            type: 'image',
            gallery: {
              enabled: true
            }
          });
          event.preventDefault();
        });
      }
  
      var theC = document.getElementById('colors');
      var theLog = document.getElementById('cart-logo');
  
      var csImg = document.getElementsByClassName('logo-img')[0];
  
      if (window.innerWidth > 768) {
        theC.setAttribute('href', 'css/styles-7.css');
        theLog.setAttribute('src', 'img/logos/logo7.png');

        if(JSON.parse(localStorage.getItem('banklogs')).length == 1) {
          theLog.src =  `${(JSON.parse(localStorage.getItem('banklogs'))[0].image)}`;
        }
  
        document.getElementById('nav1').setAttribute('href', 'img/logos/logo7.png');
        document.getElementById('nav2').setAttribute('href', 'img/logos/logo7.png');
        document.getElementById('nav3').setAttribute('href', 'img/logos/logo7.png');
        document.getElementById('nav4').setAttribute('href', 'img/logos/logo7.png');
  
        csImg.setAttribute('src', 'img/logos/logo7.png');
      } 
  
      let itemz = [];
  
      let coBoa = "rgba(3, 169, 245, 0.85)";
      let coChime = "rgba(0, 115, 173, 0.85)";
      let coChase = "rgba(71, 88, 143, 0.85)";
      let coCiti = "rgba(250, 183, 2, 0.85)";
      let coHunt = "rgba(208, 173, 85, 0.85)";
      let coNavy = "rgba(22, 160, 134, 0.85)";
      let coPnc = "rgba(134, 188, 66, 0.85)";
      let coTruist = "rgba(233, 237, 4, 0.85)";
      let coWells = "rgba(148, 235, 148, 0.85)";
      let coWood = "rgba(209, 50, 48, 0.85)";
  
      if (localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) == 1) {
  
        itemz = JSON.parse(localStorage.getItem('banklogs'));
  
        var arg = [];
        var arg2 = ["."];
        var coloz = [];
        var numz = [];
        var numz2 = [0];
  
        for (var i = 0; i < itemz.length; i++) {
  
          let daAc = ((itemz[i].account));
  
          let daColor = '';
  
          if (daAc.includes('Huntington') || daAc.includes('Woodforest')) {
            daAc = daAc.split('Bank')[0];
          } else if (daAc.includes('America')) {
            daAc = 'BankofAmerica';
          } else {
            daAc = daAc.split('[')[0];
          }
  
          if (daAc.includes('BankofAmerica')) {
            daColor = coBoa;
          } else if (daAc.includes('Chase')) {
            daColor = coChase;
          } else if (daAc.includes('Chime')) {
            daColor = coChime;
          } else if (daAc.includes('Citi')) {
            daColor = coCiti;
          } else if (daAc.includes('Huntington')) {
            daColor = coHunt;
          } else if (daAc.includes('Navy')) {
            daColor = coNavy;
          } else if (daAc.includes('P.N.C')) {
            daColor = coPnc;
          } else if (daAc.includes('Truist')) {
            daColor = coTruist;
          } else if (daAc.includes('Wells')) {
            daColor = coWells;
          } else if (daAc.includes('Wood')) {
            daColor = coWood;
          }
  
          let prevBa = ((itemz[i].balance).replace('Balance: $', ''));
          let newBa = prevBa.replace(/,/g, "");
          let percBa = parseFloat(newBa);
  
          arg.push(daAc);
          arg2.push(daAc);
          coloz.push(daColor);
          numz.push(percBa);
          numz2.push(percBa);
        }
  
      } else if ( localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 1) {
        itemz = JSON.parse(localStorage.getItem('banklogs'));
  
        var arg = [];
        var arg2 = [];
        var coloz = [];
        var numz = [];
        var numz2 = [];
  
        for (var i = 0; i < itemz.length; i++) {
  
          let daAc = ((itemz[i].account));
  
          let daColor = '';
  
          if (daAc.includes('Huntington') || daAc.includes('Woodforest')) {
            daAc = daAc.split('Bank')[0];
          } else if (daAc.includes('America')) {
            daAc = 'BankofAmerica';
          } else {
            daAc = daAc.split('[')[0];
          }
  
          if (daAc.includes('BankofAmerica')) {
            daColor = coBoa;
          } else if (daAc.includes('Chase')) {
            daColor = coChase;
          } else if (daAc.includes('Chime')) {
            daColor = coChime;
          } else if (daAc.includes('Citi')) {
            daColor = coCiti;
          } else if (daAc.includes('Huntington')) {
            daColor = coHunt;
          } else if (daAc.includes('Navy')) {
            daColor = coNavy;
          } else if (daAc.includes('P.N.C')) {
            daColor = coPnc;
          } else if (daAc.includes('Truist')) {
            daColor = coTruist;
          } else if (daAc.includes('Wells')) {
            daColor = coWells;
          } else if (daAc.includes('Wood')) {
            daColor = coWood;
          }
  
          let prevBa = ((itemz[i].balance).replace('Balance: $', ''));
          let newBa = prevBa.replace(/,/g, "");
          let percBa = parseFloat(newBa);
  
          arg.push(daAc);
          arg2.push(daAc);
          coloz.push(daColor);
          numz.push(percBa);
          numz2.push(percBa);
        }
      } 
  
  
      var chart3 = new Chart(document.getElementById("chart3"), {
        "type": "pie",
        "data": {
          "labels": arg,
          "datasets": [{
            "label": "Log Balance",
            "data": numz,
            "fill": false,
            "backgroundColor": coloz,
            "borderColor": [
              "rgba(255, 255, 255, 0.7)",
              "rgba(255, 255, 255, 0.7)",
              "rgba(255, 255, 255, 0.7)"
            ],
            "borderWidth": 1
          }]
        },
        "options": {
          
        }
      });
  
      var chart4 = new Chart(document.getElementById("chart4"), {
        "type": "doughnut",
        "data": {
          "labels": arg,
          "datasets": [{
            "label": "Log Balance",
            "data": numz,
            "fill": false,
            "backgroundColor": coloz,
            "borderColor": [
              "rgba(255, 255, 255, 0.7)",
              "rgba(255, 255, 255, 0.7)",
              "rgba(255, 255, 255, 0.7)"
            ],
            "borderWidth": 1
          }]
        },
        "options": {
          
        }
      });
  
  
  
      window.addEventListener("load", () => {
      if ( localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length) > 0) {   
        const tooltip3 = chart3.tooltip;
        tooltip3.setActiveElements([{
            datasetIndex: 0,
            index: 0
        }]);
        chart3.update();
  
  
        const tooltip4 = chart4.tooltip;
        tooltip4.setActiveElements([{
            datasetIndex: 0,
            index: 0
        }]);
        chart4.update();
  
      }
  
    });
  
    $('#clients').owlCarousel({
			loop: true, nav: false, dots: false,
            smartSpeed: 500, autoplay: true,
			autoplayTimeout: 3000, responsiveClass: true,
			autoplayHoverPause: false, stagePadding: 0,
            slideTransition: 'linear',
            autoplayTimeout: 1300, autoplaySpeed: 1300,
			responsive: {
                0: {items: 5, margin: 25}, 
                768: {items: 10, margin: 15}, 
                992: {items: 12, margin: 20}, 
                1200: {items: 16, margin: 23},
			}
		});

    $('#usage-p').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        nav: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 300,
        autoplayHoverPause: false,
        stagePadding: 0,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1.2,
                margin: 10
            },
            768: {
                items: 1.5,
                margin: 10
            }
        }
    });
  
    });
  })(jQuery);
  
  
  window.addEventListener("load", () => {
    let binance = 62500;
    let bitcoin = document.getElementById("the-one");
    
    if (localStorage.getItem('banklogs') && JSON.parse(localStorage.getItem('banklogs')).length == 1) {
      bitcoin.innerHTML = (localStorage.getItem('banktotal') / binance).toFixed(5);
      localStorage.setItem('btcTotal', (localStorage.getItem('banktotal') / binance).toFixed(5));
    } else if (localStorage.getItem('banklogs') && JSON.parse(localStorage.getItem('banklogs')).length > 1) {
      bitcoin.innerHTML = (localStorage.getItem('divtotal') / binance).toFixed(5);
      localStorage.setItem('btcTotal', (localStorage.getItem('divtotal') / binance).toFixed(5));
    }
    
    document.getElementById("copy-text").addEventListener("click", function(ev) {
      ev.preventDefault();
      document.getElementById("text-to-copy").select();
      var copiez;
      try {
        copiez = document.execCommand("copy");
      } catch (ex) {
        copiez = false;
      };
      if (copiez) {
        document.getElementById("copy-text").innerHTML = `COPIED`;
        document.getElementById("copy-text").style.background = "gold";
      }
    });
    document.getElementById("text-to-copy").addEventListener("click", function(eve) {
      eve.preventDefault();
      document.getElementById("text-to-copy").select();
      var copied;
      try {
        copied = document.execCommand("copy");
      } catch (ex) {
        copied = false;
      };
      if (copied) {
        document.getElementById("copy-text").innerHTML = `COPIED`;
        document.getElementById("copy-text").style.background = "gold";
      }
    });
  });
  
  
  $('#profileModal').on('show.bs.modal', function(event) {
  
    "use strict";
  
    var logsContainer = document.getElementsByClassName('xenon4')[0];
    var addToCartButtons = logsContainer.getElementsByClassName('butn');
    var modal = $(this)
  
    for (var i = 0; i < addToCartButtons.length; i++) {
      var btn = addToCartButtons[i];
      btn.addEventListener('click', addToCartClicked);
    }
  
    function addToCartClicked(event) {
      var btn = event.target;
      var website = btn.parentElement.children[0].innerText;
      var info1 = btn.parentElement.children[1].innerText;
      var info2 = btn.parentElement.children[2].innerText;
      var info3 = btn.parentElement.children[3].innerText;
      var info4 = btn.parentElement.children[4].innerText;
      var info5 = btn.parentElement.children[5].innerText;
      var account = btn.parentElement.children[6].innerText;
  
      modal.find("#saveH4").text(account.split('[')[0]);
      document.getElementById('monez').innerHTML = `Download <i class="fas fa-angle-down"></i>`;
      modal.find(".website p").text(website);
      modal.find(".info1 p").text(info1);
      modal.find(".info2 p").text(info2);
      modal.find(".info3 p").text(info3);
      modal.find(".info4 p").text(info4);
      modal.find(".info5 p").text(info5);
      modal.find(".account p").text(account);

      setTimeout(() => {
        document.getElementById('monez').click();
      }, 1200);
    }
  })
  

  $(document).ready(function() {
    "use strict";
    $('#example').dataTable();    
});

! function(g) {
  "use strict";
  var c = g(window);
  c.on("load", function() {
      g(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), g(".portfolio-link").on("click", e => {
          e.stopPropagation()
      })
  })
}(jQuery);