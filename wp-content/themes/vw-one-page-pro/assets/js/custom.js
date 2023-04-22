/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

/*jQuery(function($){
  "use strict";
    jQuery('.menu > ul').superfish({
      delay:       500,                            
      animation:   {opacity:'show',height:'show'},  
      speed:       'fast'                         
    });
});*/
var menu_width = "";
function showSearch() {
    jQuery(".serach_outer").slideDown(700);
}
function closeSearch() {
    jQuery(".serach_outer").slideUp(700);
}
/* Mobile responsive Menu*/

/* Mobile responsive Menu*/
menu_width = parseInt(jQuery("#menu-width").text().trim());
document.getElementById("open_nav").addEventListener("click", open);
function open() {
    document.getElementById("sidebar1").style.width = menu_width + "px";
    document.getElementById("sidebar1").style.display = "block";
}
document.getElementById("close_nav").addEventListener("click", close);
function close() {
    document.getElementById("sidebar1").style.width = "0";
    document.getElementById("sidebar1").style.display = "none";
}

jQuery(function () {
    //----- OPEN
    jQuery('[data-popup-open]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    jQuery('[data-popup-close]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
});


jQuery('document').ready(function () {

    var owl = jQuery('#our_speciality .owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 10000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#our_records .owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: false,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#our_partners .owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 5000,
        loop: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });

    var owl = jQuery('#testimonials .owl-carousel');
    owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 10000,
        loop: true,
        navText: ['<i class="fa-2x fas fa-angle-left" aria-hidden="true"></i>', '<i class="fa-2x fas fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
    var owl = jQuery('#team .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        autoplay: true,
        lazyLoad: true,
        autoplayTimeout: 15000,
        loop: false,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        autoplayHoverPause: true,
        mouseDrag: true
    });
});
var interval = null;
function show_loading_box() {
    jQuery(".vw-one-page-loading-box").css("display", "none");
    clearInterval(interval);
}

/* Counter */
jQuery(document).ready(function () {
    interval = setInterval(show_loading_box, 1000);
    // ------ Counter -------
    var count_no = "yes";
    jQuery('#our_record').on('appear', function () {
        if (count_no == "yes") {
            count_no = "no";
            jQuery('.choose-box-content h4').each(function () {
                jQuery(this).prop('Counter', 0).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 8000,
                    easing: 'swing',
                    step: function (now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    jQuery('#our_record').appear();
});
// custom Animation
jQuery(window).scroll(function () {
    jQuery('.work_inner').each(function () {
        var imagePos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            jQuery(this).addClass("fadeInRight");
        }
    });

    jQuery('#about .container').each(function () {
        var imagePos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            jQuery(this).addClass("fadeInLeft");
        }

    });

});
jQuery('#return-to-top').click(function () {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 2000);
});

jQuery(function ($) {
    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }

    });
});
jQuery('document').ready(function () {
    var stickyon = jQuery('#sticky-onoff').text().trim();
    var a1 = stickyon.length;
    //alert(a1);
    window.onscroll = function () {
        if (a1 == 3) {
            myScrollNav();
        }

    }

    var navbar = document.getElementById("sticky-menu-box");
    var sticky = jQuery(navbar).offset().top;
    function myScrollNav() {
        // alert("Hii");
        if (window.pageYOffset > sticky) {
            //alert(window.pageYOffset);
            navbar.classList.add("sticky");

        } else {
            navbar.classList.remove("sticky");

        }
    }
});

