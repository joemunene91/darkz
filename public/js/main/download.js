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
        time: 5000
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


    $('#chime-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#boa-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#ach-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: false, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#wire-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#nfcu-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#coin-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#wells-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#wood-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
      }
  });

  $('#hunt-carousel').owlCarousel({
      loop: true, responsiveClass: true, dots: true, nav: false, smartSpeed: 1000, autoplay: true, autoplayTimeout: 600, 
      autoplayHoverPause: false, stagePadding: 0, slideTransition: 'linear', autoplayTimeout: 10000, autoplaySpeed: 10000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: {
          0: {
            items: 1.2, margin: 0
          }, 768: {
            items: 2.5, margin: 30
          }, 992: {
            items: 3, margin: 0
          }, 1200: {
            items: 3.5, margin: 0
          }
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
  let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
  let bitcoin = document.getElementById("the-one");
  
  binance.onmessage = event => {
    let confirm = JSON.parse(event.data);
    if (localStorage.getItem('banklogs') && JSON.parse(localStorage.getItem('banklogs')).length == 1) {
      bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5);
      localStorage.setItem('btcTotal', (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5));
    } else if (localStorage.getItem('banklogs') && JSON.parse(localStorage.getItem('banklogs')).length > 1) {
      bitcoin.innerHTML = (localStorage.getItem('divtotal') / parseFloat(confirm.k.c)).toFixed(5)
      localStorage.setItem('btcTotal', (localStorage.getItem('divtotal') / parseFloat(confirm.k.c)).toFixed(5));
    }
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
      var info6 = btn.parentElement.children[6].innerText;
      var account = btn.parentElement.children[7].innerText;
  
      modal.find("#saveH4").text(account.split('[')[0]);
      document.getElementById('monez').innerHTML = `Download <i class="fas fa-angle-down"></i>`;
      modal.find(".website p").text(website);
      modal.find(".info1 p").text(info1);
      modal.find(".info2 p").text(info2);
      modal.find(".info3 p").text(info3);
      modal.find(".info4 p").text(info4);
      modal.find(".info5 p").text(info5);
      modal.find(".info6 p").text(info6);
      modal.find(".account p").text(account);

      setTimeout(() => {
        document.getElementById('monez').click();
      }, 1400);
  
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