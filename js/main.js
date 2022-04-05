$(document).ready(function(){
    $('.bars_menu').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });
    $('.close_mobile').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });

    // SLIDE SESIONES

    $('.divisor_info_modulo').click(function(){
        $('.cont_cards_modulos').slideUp();
        $('.divisor_info_modulo').removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.cont_cards_modulos').slideToggle();
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

function swiperPatrocinadores(){
    const swiper = new Swiper(".c_gen_slider_patrocinadores .swiperPatrocinadores", {
            slidesPerView:7,
            spaceBetween:30,
            navigation: {
            nextEl: ".c_gen_slider_patrocinadores .swiper-button-next",
            prevEl: ".c_gen_slider_patrocinadores .swiper-button-prev",
            },
      });
}

function swiperGaleriaEvento(){
    const swiper = new Swiper(".swiperGaleriaEvent", {
            slidesPerView:3,
            spaceBetween:20,
            navigation: {
            nextEl: ".swiperGaleriaEvent .swiper-button-next",
            prevEl: ".swiperGaleriaEvent .swiper-button-prev",
            },
      });
}

const agendaDia = document.querySelectorAll('.dia_aside');
const agendaAuditorio = document.querySelectorAll('.auditorias_aside');

$(agendaDia).click(function(){
    $(agendaDia).removeClass('active_dia');
    $(agendaAuditorio).slideUp();
    $(this).toggleClass('active_dia');
    $(this).find('.auditorias_aside').slideToggle();
});

sliderHero();
swiperPatrocinadores();
swiperGaleriaEvento();