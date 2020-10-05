$(window).on('orientationchange resize load', function() {
    ww = $(window).width();
    if (ww <= 768) {
        $(".nav-cta").appendTo(".nav-cta-resp");
    }
});