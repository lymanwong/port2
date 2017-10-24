(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    $('form').on('submit',function(event){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'send_message.php',
            data: $('form').serialize(),
            success: function () {
                alert("Sweet! Thanks for your email. I'll get back to you as soon as possible.");
            }
        });
    });

    $('#pp').on('click', function(){
        $('#mylink').attr('href','http://pictureperfectbyivon.herokuapp.com/');
    })
    $('#ny').on('click', function(){
        $('#mylink').attr('href','http://nytapi.herokuapp.com/');
    })
    $('#angular').on('click', function(){
        $('#mylink').attr('href','https://lyman-wong-angular.herokuapp.com/#/');
    })
    $('#railspin').on('click', function(){
        $('#mylink').attr('href','https://vrypinteresting.herokuapp.com/');
    })
    $('#emailt').on('click', function(){
        $('#mylink').attr('href','https://github.com/lymanwong/email-templates');
    })
    $('#droid').on('click', function(){
        $('#mylink').attr('href','https://github.com/lymanwong/Android-Projects');
    })

    $('#soundplay').on('click', function(){
        $('#soundmsg').hide();
    })

})(jQuery);

 particlesJS("particles-js", {
   "particles": {
     "number": {
       "value": 137,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "polygon",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 3,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 6.22388442605866,
       "direction": "none",
       "random": true,
       "straight": false,
       "out_mode": "bounce",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "onresize":{
         "enable":true,
         "density_auto":true,
         "density_area":400
       }
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 });
