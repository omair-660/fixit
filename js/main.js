// $(".nav-item").hover(function(){
//   $(".ul-nav").show(1000);
// });

let check = false;
$(".nav-item").hover(function() {
  $(this).find(".ul-nav").stop().fadeIn(500);
}, function() {
  $(this).find(".ul-nav").stop().fadeOut(500);
});

const navOffcet = $("nav").outerHeight(true);
const HomeOffcet = $("#home").outerHeight(true);

$("#home").css("marginTop",navOffcet+'px')

$("#choose .toggle h5").on("click",function(){
  $(this).next().slideToggle(600);
  
  $("#choose .toggle div").not($(this).next()).slideUp(600);
})

$("#home .swiper-horizontal>.swiper-pagination-bullets, #home .swiper-pagination-bullets.swiper-pagination-horizontal").css("left",HomeOffcet+"px")

$(document).ready(function() {

  $("form").submit(function(event) {
      event.preventDefault();

      if ($("input").val() == "" || $("#contact textarea").val() == "" || $("#contact select").val() == "" && check === false) {
          $("#contact input, #contact textarea, #contact select").addClass("is-invalid");
          $(".error").fadeIn(1000)
      } else {
          $("#contact input, #contact textarea, #contact select").removeClass("is-invalid");
          $(".error").fadeOut(1000)
      }
  });

  $("input, textarea, select").on("input", function() {
      valdate(this);
  });

  function valdate(e) {
      let regex = {
          nameInput: /^(?=.{3,12}$).*/,
          phoneInput:/^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/,
          messageInput: /^(?=.{3,12}$).*/,
      };

      let value = e.value;

      if (regex[e.id].test(value)) {
          $(e).removeClass("is-invalid");
          $(e).addClass("is-valid");
          $(".error").fadeOut(1000);
          check = true;
      } else {
          $(e).removeClass("is-valid");
          check = false;
          $(e).addClass("is-invalid");
      }
  }
});


ScrollReveal().reveal('.col-md-4', {
  duration: 1000,
  delay: 200,
  origin: 'left', 
  distance: '50px',
  easing: 'ease-in-out', 
  reset: true
});


ScrollReveal().reveal('.col-md-6', {
  duration: 1000,
  delay: 300,
  origin: 'bottom', 
  distance: '50px',
  easing: 'ease-in-out', 
  reset: true
});

ScrollReveal().reveal('.col-md-2', {
  duration: 1000,
  delay: 400,
  origin: 'top', 
  distance: '50px',
  easing: 'ease-in-out', 
  reset: true
});


var swiper1 = new Swiper('.swiper-container-1', {
  effect:"fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 3500,
      disableOnInteraction: true,
  },
  pagination: {
      el: '.swiper-container-1 .swiper-pagination',
      clickable: true,
  },

  loop: true, 
});

var swiper2 = new Swiper('.swiper-container-2', {
  effect: 'flip', // 'fade', 'cube', 'coverflow', 'flip'
  navigation: {
      nextEl: '.swiper-container-2 .swiper-button-next',
      prevEl: '.swiper-container-2 .swiper-button-prev',
  },
  pagination: {
      el: '.swiper-container-2 .swiper-pagination',
      clickable: true,
  },
  loop: false, 
});