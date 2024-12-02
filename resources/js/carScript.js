var swiper = new Swiper(".mySwiper", {
     loop: true,
     spaceBetween: 10,
     slidesPerView: 6,
     watchSlidesProgress: true,
     autoplay: {
          delay: 2000
     }
});
var swiper2 = new Swiper(".mySwiper2", {
     autoplay: {
          delay: 2000
     },
     loop: true,
     spaceBetween: 10,
     navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
     },
     thumbs: {
     swiper: swiper,
     },
});