$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass("sticky");
        }
    });
});

$(document).ready(function ($) {

    $(".hero-slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        loop: true,
        // // responsive: [{
        // //         breakpoint: 992,
        // //         settings: {
        // //             slidesToShow: 2,
        // //             slidesToScroll: 2,
        // //             infinite: true,
        // //             dots: true
        // //         }
        // //     },
        // //     {
        // //         breakpoint: 576,
        // //         settings: {
        // //             slidesToShow: 1,
        // //             slidesToScroll: 1,
        // //             infinite: true,
        // //             dots: false
        // //         }
        // //     }


        // ]
    });
});

$('#trustgallery').lightGallery({
    selector: '.item',
    mode: 'lg-fade',
    counter: true,
    download: true,
    startClass: '',
    enableSwipe: true,
    enableDrag: true,
    speed: 500,
    thumbnail: false,
});

$(document).ready(function ($) {

    $(".gallery-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        loop: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: true,
                }
            },

        ]
    });
});

$(document).ready(function ($) {

    $(".testimonial-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        loop: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            }

        ]
    });
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});