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


