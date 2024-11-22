$(document).ready(function(){
  $('.slider').slick({
      dots: true, // Adiciona os indicadores (bolinhas)
      infinite: true, // Loop infinito
      speed: 300, // Velocidade da transição (ms)
      slidesToShow: 3, // Número de slides visíveis por vez
      slidesToScroll: 1, // Quantos slides avançam por vez
      autoplay: true, // Habilita autoplay
      autoplaySpeed: 2000, // Velocidade do autoplay (ms)
      arrows: true, // Mostra as setas de navegação
  });
});
