(function ($) {
    $('.sas-testimonial-slider-area').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.journal-left-contant-about-cerosoul').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
})(jQuery);