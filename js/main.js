$(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on')

        } else {
            $('#header').removeClass('on')
        }
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.content-feature').addClass('on')
        } else {
            $('.content-feature').removeClass('on')
        }
    });



    $('.mainVisual .inner .scroll_right').on('click', function () {
        var sct = $('#header').offset().top;
        console.log(sct)
        $('html,body').animate({ scrollTop: 0 }, 600)
    })

    $('.right a').on('click', function (e) {
        e.preventDefault();
        $('.footer_gnb').toggleClass('on');
        $('.mbtn').toggleClass('on');
    });

    $('.bottom_menu .left ul li>a').on('click', function (e) {
        e.preventDefault();
        // $('.submenu').removeClass('on');
        $(this).next().toggleClass('on');
        $(this).parent().siblings().find('.submenu').removeClass('on');
    })
})

