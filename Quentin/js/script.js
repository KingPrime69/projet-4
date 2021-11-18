$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

var instance = M.Carousel.getInstance(elem);

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});
