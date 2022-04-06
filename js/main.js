$(document).ready(function(){
    $('.bars_menu').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });
    $('.close_mobile').click(function(){
        $('.navbar_desk ul').toggleClass('active_nav_m');
    });

    $('.btn_filter_agenda').click(function(){
        $('.btn_filter_agenda span').toggleClass('fa-times');
        $('.c_agenda aside').toggleClass('subfilter_active');
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
            slidesPerView:1,
            spaceBetween:6,
            navigation: {
            nextEl: ".c_gen_slider_patrocinadores .swiper-button-next",
            prevEl: ".c_gen_slider_patrocinadores .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 6
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 6
                  },
                // when window width is >= 480px
                750: {
                  slidesPerView: 5,
                  spaceBetween: 10
                },
                // when window width is >= 640px
                980: {
                  slidesPerView: 7,
                  spaceBetween: 20
                }
            }
      });
}

function swiperGaleriaEvento(){
    const swiper = new Swiper(".swiperGaleriaEvent", {
            slidesPerView:1,
            spaceBetween:20,
            navigation: {
            nextEl: ".swiperGaleriaEvent .swiper-button-next",
            prevEl: ".swiperGaleriaEvent .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
            }
      });
}

function swiperDocumentos(){
  const swiper = new Swiper(".c_slider_documentos .swiperDocumentos", {
          slidesPerView:1,
          spaceBetween:10,
          navigation: {
          nextEl: ".c_slider_documentos .swiper-button-next",
          prevEl: ".c_slider_documentos .swiper-button-prev",
          },
          breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 6
              },
              480: {
                  slidesPerView: 2,
                  spaceBetween: 6
                },
              // when window width is >= 480px
              750: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              // when window width is >= 640px
              980: {
                slidesPerView: 4,
                spaceBetween: 20
              }
          }
    });
}

function swiperCalendar(){
  const swiper = new Swiper(".c_calendar_slider .swiperCalendar", {
          slidesPerView:1,
          spaceBetween:10,
          navigation: {
            nextEl: ".c_calendar_slider .swiper-button-next",
            prevEl: ".c_calendar_slider .swiper-button-prev",
          },
          breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 6
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 6
                },
              // when window width is >= 480px
              750: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 640px
              980: {
                slidesPerView: 3,
                spaceBetween: 20
              }
          }
    });
}

function swiperMapa(){

  const swiper = new Swiper(".c_slider_mapa .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".c_slider_mapa .mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".c_slider_mapa .swiper-button-next",
      prevEl: ".c_slider_mapa .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
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
swiperDocumentos();
swiperCalendar();
swiperMapa();