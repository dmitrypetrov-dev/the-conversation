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









