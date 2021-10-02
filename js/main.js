$(function () {
    /*menu-burger*/

    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');
    const body = document.querySelector('body');

    burger.onclick = function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    };

    menuLink.forEach(function (item) {
        item.onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('active');
        };
    })

    /*-----------------*/

    /*about-slider*/

    $('.about__slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                }
            }]
    });

    /*-----------------*/

})