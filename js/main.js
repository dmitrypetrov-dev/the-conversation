// burger menu

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.site-navigation__cross').click(function (event) {
        $('.header-burger__menu, .site-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.burger-menu').click(function (event) {
        $('.drop-menu-burger').slideToggle();
        $('.burger-menu').toggleClass('arrow-rotate');
    });
});









