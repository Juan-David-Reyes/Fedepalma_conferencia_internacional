$(document).ready(function(){


    function logistica(){
      if($('.s_logistica').is(':visible')){
        $('main').css('background-color', '#F4F4F4');
        $('.s_header_int').addClass('modHeader_color');
      }
    }

    logistica();

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


    // FORMULARIO INTERNA CONVOCATORIAS

    const pasos = document.querySelectorAll('.c_step_form');
    
    const btnNextPaso1 = document.getElementById('btn_next1');
    const btnNextPaso2 = document.getElementById('btn_next2');
    const btnNextPaso3 = document.getElementById('btn_next3');
    const btnNextPaso4 = document.getElementById('btn_next4');

    const btnBackPaso2 = document.getElementById('btn_back1');
    const btnBackPaso3 = document.getElementById('btn_back2');
    const btnBackPaso4 = document.getElementById('btn_back3');
    const btnBackPaso5 = document.getElementById('btn_back4');

    const containerPaso1 = document.getElementById('paso1');
    const containerPaso2 = document.getElementById('paso2');
    const containerPaso3 = document.getElementById('paso3');
    const containerPaso4 = document.getElementById('paso4');
    const containerPaso5 = document.getElementById('paso5');


    $(btnNextPaso1).click(function(){
      $(pasos).slideUp()
      $(containerPaso2).slideDown()
    });

    // -----

    $(btnNextPaso2).click(function(){
      $(pasos).slideUp()
      $(containerPaso3).slideDown()
    });

    $(btnBackPaso2).click(function(){
      $(pasos).slideUp()
      $(containerPaso1).slideDown()
    });

    // -----

    $(btnNextPaso3).click(function(){
      $(pasos).slideUp()
      $(containerPaso4).slideDown()
    });

    $(btnBackPaso3).click(function(){
      $(pasos).slideUp()
      $(containerPaso2).slideDown()
    });

    // -----

    $(btnNextPaso4).click(function(){
      $(pasos).slideUp()
      $(containerPaso5).slideDown()
    });

    $(btnBackPaso4).click(function(){
      $(pasos).slideUp()
      $(containerPaso3).slideDown()
    });

    // -----

    $(btnBackPaso5).click(function(){
      $(pasos).slideUp()
      $(containerPaso4).slideDown()
    });

    // MODULOS RADIO BUTTONS

    const opcionesModulos = document.querySelectorAll('.c_modulo_options');

    $('.cont_input.radio_large').click(function(e){
      $(opcionesModulos).slideUp();
      $(this).next('.c_modulo_options').slideToggle();
      $(this).find('input').prop("checked",true);
      return false;
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


/* SLIDERS INTERNA LOGISTICA */



function sliderPriLogistica(){
  
  let swiper = new Swiper(".c_slider_pri_logistica .swiperPriLogistica", {
    pagination: {
      el: ".c_slider_pri_logistica .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 8000,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

}

function sliderComoLlegar(){
  
  let swiper = new Swiper(".swiperComoLlegar", {
    navigation: {
      nextEl: ".c_como_llegar_logistica .swiper-button-next",
      prevEl: ".c_como_llegar_logistica .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px

      480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

}

function sliderDondeLlegar(){
  
  let swiper = new Swiper(".swiperDondeLlegar", {
    navigation: {
      nextEl: ".c_donde_llegar_logistica .swiper-button-next",
      prevEl: ".c_donde_llegar_logistica .swiper-button-prev",
    },
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px

      480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

}

function sliderQueHacer(){
  
  let swiper = new Swiper(".swiperQueHacer", {
    navigation: {
      nextEl: ".c_que_hacer_logistica .swiper-button-next",
      prevEl: ".c_que_hacer_logistica .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px

      480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

}

function sliderVT(){
  
  let swiper = new Swiper(".svt1 .sliderVT", {
    navigation: {
      nextEl: ".svt1 .swiper-button-next",
      prevEl: ".svt1 .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
  });

}

function sliderVT2(){
  
  let swiper = new Swiper(".svt2 .sliderVT", {
    navigation: {
      nextEl: ".svt2 .swiper-button-next",
      prevEl: ".svt2 .swiper-button-prev",
    },
    spaceBetween: 20,
    slidesPerView: 1,
  });
}


function ctaLogistica(){

  const cta = document.querySelectorAll('.cont_cta_logistica a');
  const contDatosContacto = document.querySelectorAll('.datos_contacto_l_card');

  $(cta).click(function(){
    if($(this).parent().parent().next(contDatosContacto).is(':visible')){
      $(contDatosContacto).slideUp();
      $(cta).removeClass('active');
    }else{
      $(cta).removeClass('active');
      $(contDatosContacto).slideUp()
      $(this).parent().parent().next(contDatosContacto).slideToggle()
      $(this).toggleClass('active');
    }
  })
}


/* $(window).scroll(function(){
  const contDatosContacto = document.querySelectorAll('.datos_contacto_l_card');
  if($(contDatosContacto).is(':visible')){
    $(contDatosContacto).slideUp()
  }
}) */



sliderHero();
sliderVT();
sliderVT2();
/* sliderVtEventos(); */
swiperPatrocinadores();
swiperGaleriaEvento();
swiperDocumentos();
swiperCalendar();
swiperMapa();

/* SLIDERS INTERNA LOGISTICA */

ctaLogistica();
sliderPriLogistica();
sliderComoLlegar();
sliderDondeLlegar();
sliderQueHacer();
