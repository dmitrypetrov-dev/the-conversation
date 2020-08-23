// burger menu

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


//anchor links

$(document).ready(function () {
    $('a[href^="#technology"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 500);
    });

    $('a[href^="#extension"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });

    $('a[href^="#feedback"]').on('click', function (event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
    });
});

// jquery slider

$(document).ready(function () {
    if ($(window).width() > 480 && $(window).width() < 601) {
        $('.extension__blocks').slick({
            arrows: false,
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '110px',
            slidesToShow: 1,
        });
    } else if ($(window).width() > 414 && $(window).width() < 481) {
        $('.extension__blocks').slick({
            arrows: false,
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '58px',
            slidesToShow: 1,
        });
    } else if ($(window).width() > 375 && $(window).width() < 415) {
        $('.extension__blocks').slick({
            arrows: false,
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '42px',
            slidesToShow: 1,
        });
    } else if ($(window).width() > 319 && $(window).width() < 376) {
        $('.extension__blocks').slick({
            arrows: false,
            dots: false,
            infinite: false,
            fade: false,
            autoplay: false,
            autoplaySpeed: 4000,
            speed: 400,
            centerMode: true,
            centerPadding: '35px',
        });
    }
});









