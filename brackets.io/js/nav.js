$(document).ready(function () {
    $('.hamburger').on('click touchstart', function (e) {
        $('.nav').toggle();
        e.stopPropagation();
    });
    
    $('#user').on('click touchstart', function (e) {
        $('.nav-menu').toggle();
        e.stopPropagation();
    });
    
    $('html').on('click touchstart', function () {
        if ($(window).width() <= 940) {
            $('.nav').hide();
        } else {
            $('.nav').show();
        }
        
        $('.nav-menu').hide();
    })
    
    $(window).bind('resize', function () {
        if ($(window).width() > 900) {
            $('.nav').show();
        }
    });
    
    $('.nav, .nav-menu').on('click touchstart', function (e) {
        e.stopPropagation();
    });
});
