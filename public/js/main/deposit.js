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


        $('#services-carousel').owlCarousel({
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
          autoplayTimeout: 5000,
          autoplaySpeed: 5000,
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          responsive: {
              0: {
                  items: 2.5,
                  margin: 10
              },
              768: {
                  items: 3,
                  margin: 30
              },
              992: {
                  items: 6,
                  margin: 20
              },
              1200: {
                  items: 7.5,
                  margin: 20
              }
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
    let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
    let bitcoin = document.getElementById("the-one");
    
    binance.onmessage = event => {
      let confirm = JSON.parse(event.data);
      if (localStorage.getItem('depositAmount')) {
        bitcoin.innerHTML = (localStorage.getItem('depositAmount') / parseFloat(confirm.k.c)).toFixed(5)
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
    

    