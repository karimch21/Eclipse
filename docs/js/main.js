
$(function () {
    
    AOS.init({
        delay: 20, 
        offset: 200,
        duration: 700,
        once: true,
    });

    $('select').styler({
        selectPlaceholde: false
    });

    $('.products__inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.products__inner').find('.tab-item').removeClass('active-tab').hide();
        $('.products__inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 10;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });


    //menu
    $('.header__menu-btn').on('click', function () {
        $('.header__menu-btn').toggleClass('active');
        $('.header__list').slideToggle();
    });
    //menu


    //LINK ARROW-TOP
    $(".arrow-up").hide();
    $(function () {
        $(window).scroll(function () {
            /*Отслеживаем событие мыши
            и задаем условие, что если прокрутили контент
            на 100px то блок с ссылочкой нужно отобразить*/
            if ($(this).scrollTop() > 500) {
                $('.arrow-up').fadeIn();
            } else {
                $('.arrow-up').fadeOut();
            }
        });
        /*Ну и наше плавное перемещение вверх*/
        $('.arrow-up').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
    //LINK ARROW-TOP


    //LINK ARROW-BOTTOM
    $('.header__inner-navigation, .latest-arrow, .products-arrow').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#latest, #banner').offset().top }, 1000);
        e.preventDefault();
    });

    $('.latest-arrow').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
        e.preventDefault();
    });

    $('.products-arrow').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#banner').offset().top }, 1000);
        e.preventDefault();
    });
    //LINK ARROW-BOTTOM





    //PARALLAX ANIMATION


    $('.parallax-part').parallax({ imageSrc: '../images/bg.jpg' });



    if (window.screen.width > 992) { //Для пк
        document.querySelector('.mouse-parallax').addEventListener('mousemove', function f1(e) {
            const x = e.pageX / $(window).width();
            const y = e.pageY / $(window).height();

            document.querySelector('.mouse-parallax__background').style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
            document.querySelector('.mouse-parallax__content').style.transform = 'translate(' + x * 40 + 'px, ' + y * 40 + 'px)';
        });
    }
    if (window.screen.width <= 992) {
        document.querySelector('.mouse-parallax').addEventListener('mousemove', function f1(e) {
            const x = e.pageX / $(window).width();
            const y = e.pageY / $(window).height();

            document.querySelector('.mouse-parallax__background').style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
            document.querySelector('.mouse-parallax__content').style.transform = 'translate(' + x * 10 + 'px, ' + y * 10 + 'px)';
        });
        // document.querySelector('.header').classList.remove('.mouse-parallax');
    }
    if (window.screen.width <= 500) {
 
        document.querySelector('.mouse-parallax').addEventListener('mousemove', function f1(e) {
            const x = e.pageX / $(window).width();
            const y = e.pageY / $(window).height();

            document.querySelector('.mouse-parallax__background').style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
            document.querySelector('.mouse-parallax__content').style.transform = 'translate(' + x * 0 + 'px, ' + y * 0 + 'px)';
        });
    }
    //PARALLAX ANIMATION
});