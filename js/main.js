$(document).ready(function(){
    $('.bars_menu').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });
    $('.close_mobile').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });
});

function sliderHero(){
    const swiper = new Swiper(".cont_gen_hero .sliderHero", {
        navigation: {
          nextEl: ".cont_gen_hero .swiper-button-next",
          prevEl: ".cont_gen_hero .swiper-button-prev",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        parallax: true,
      });
}

sliderHero();