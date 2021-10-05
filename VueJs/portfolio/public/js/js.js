$('.navbar-nav a').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');

    if ($('.navbar').hasClass('active')) {
        $('.navbar').removeClass('active')
        $('.ham').removeClass('active')
    }

    event.preventDefault();
});

$('.navbar-toggler').on('click', function () {
    $('.aside').toggleClass('aside-open');
    $(".ham").toggleClass('active');
});


$(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
        $('.section-about').addClass("in");
        $('.overlay-wrap').fadeOut(400);
    } else {
        $('.section-about').removeClass("in");
        $('.overlay-wrap').fadeIn(400);
    }

    if ($(this).scrollTop() > 500) {
        $('.navbar.fixed-top').fadeIn(400);
    } else {
        $('.navbar.fixed-top').fadeOut(400);
    }
});


$("#navbarCollapse").scrollspy({
    offset: 20
});




$(function () {
    $(".filtering").on("click", "span", function () {
        var a = $(".gallery").isotope({});
        var e = $(this).attr("data-filter");
        a.isotope({
            filter: e
        });
    });
    $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
})


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});