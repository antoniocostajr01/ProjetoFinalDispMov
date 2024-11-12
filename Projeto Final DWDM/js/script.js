$(document).ready(function() {
    $('.gallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const captionText = document.getElementById("caption");
    $('.grid-image').on('click', function() {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;
        captionText.innerHTML = this.alt;
    });
    $('.close').on('click', function() {
        lightbox.style.display = "none";
    });
    $(window).on('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});