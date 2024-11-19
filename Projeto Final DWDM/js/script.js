$(document).ready(function() {
    $('.testimonials-slider').slick({
        infinite: true, // Loop infinito
        speed: 500, // Velocidade da transição
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides que mudam por clique
        autoplay: true, // Habilita autoplay
        autoplaySpeed: 4000 // Velocidade do autoplay (em ms)
    });
  });