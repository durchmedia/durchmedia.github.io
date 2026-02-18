$(document).ready(function () {
    // 1. Header Scroll Efekti (Şeffaftan Beyaza Geçiş)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#main-header').addClass('background-header');
        } else {
            $('#main-header').removeClass('background-header');
        }
    });

    // 2. Mobil Menü Toggle
    $('#mobile-menu-btn').on('click', function () {
        $('#nav-list').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // 3. Menü Linklerine Tıklayınca Menüyü Kapat ve Smooth Scroll
    $('.nav-links a').on('click', function () {
        $('#nav-list').removeClass('active');
        $('#mobile-menu-btn i').addClass('fa-bars').removeClass('fa-times');
    });
});
