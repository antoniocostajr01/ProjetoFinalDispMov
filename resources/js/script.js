var swiper = new Swiper(".mySwiper", {
      autoplay: {
            delay: 2000
      },
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
      scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
      },
});
