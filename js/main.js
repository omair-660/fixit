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

$("#home").css("marginTop",navOffcet+'px')

$("#choose .toggle h5").on("click",function(){
  $(this).next().slideToggle(600);
  
  $("#choose .toggle div").not($(this).next()).slideUp(600);
})

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
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