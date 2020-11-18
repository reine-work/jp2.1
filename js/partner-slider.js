jQuery(document).ready(function() {
    jQuery('.slider-home-payments').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        smartSpeed: 1500,
        autoWidth: true,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1200: {
                items: 5
            },
            1366: {
                items: 5
            },
            1400: {
                items: 5
            },
            1441: {
                items: 9
            }
        }
    });


    jQuery('.slider-home-payments').trigger('play.owl.autoplay', [1500]);

    function setSpeed() {
        jQuery('.slider-home-payments').trigger('play.owl.autoplay', [1500]);
    }

    setTimeout(setSpeed, 10);
});

// $('.slider-home-payments').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     mouseDrag: false,
//     autoplayTimeout: 2000,
//     smartSpeed: 1000,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 2
//         },
//         600: {
//             items: 4
//         },
//         1200: {
//             items: 5
//         },
//         1366: {
//             items: 5
//         },
//         1400: {
//             items: 5
//         },
//         1441: {
//             items: 8
//         }
//     }
// });


$('.slider-home-partners').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1200: {
            items: 5
        },
        1366: {
            items: 5
        },
        1400: {
            items: 5
        },
        1441: {
            items: 6
        }
    }
});

$('.slider-home-merchants').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1200: {
            items: 5
        },
        1366: {
            items: 5
        },
        1400: {
            items: 5
        },
        1441: {
            items: 7
        }
    }
});

$('.slider-home-feedbacks').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        },
        1366: {
            items: 3
        },
        1400: {
            items: 3
        },
        1441: {
            items: 3
        }
    }
});