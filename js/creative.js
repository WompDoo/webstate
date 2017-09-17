(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('#flipto').on("click", function (event) {
        event.preventDefault();

        var face = $(this).data("face");

        if (face == "bottom") {
            $(".cube").removeClass("flip-to-top").addClass("flip-to-bottom");
            $(this).data("face", "top").text("Flip: to top");
        } else {
            $(".cube").removeClass("flip-to-bottom").addClass("flip-to-top");
            $(this).data("face", "bottom").text("Flip: to bottom");
        }
    });


    var vid = document.getElementById("bgvid");

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
        vid.removeAttribute("autoplay");
        vid.pause();
        pauseButton.innerHTML = "Paused";
    }

    function vidFade() {
        vid.classList.add("stopfade");
    }

    vid.addEventListener('ended', function()
    {
// only functional if "loop" is removed
        vid.pause();
// to capture IE10
        vidFade();
    });

    $(document).ready(function() {
        $("#slider-range-min").slider({
            range: "min",
            step: 100,
            value: 1000,
            min: 0,
            max: 15000,
            slide: function(event, ui) {
                $("#amount").val("€" + ui.value);
            },
            change: function(event, ui) {
                if (ui.value === 0) {
                    $("#amount").val("To be determined");
                } else if (ui.value === 15000) {
                    $("#amount").val("€" + "15000 or more");
                } else {
                    $("#amount").val("€" + $("#slider-range-min").slider("value"));
                }
            }
        });
        $("#amount").val("€" + $("#slider-range-min").slider("value"));

    });



})(jQuery); // End of use strict
