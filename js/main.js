// $(".nav-item").hover(function(){
//   $(".ul-nav").show(1000);
// });

let check = false;
$(".nav-item").hover(function () {
  $(this).find(".ul-nav").stop().fadeIn(500);
}, function () {
  $(this).find(".ul-nav").stop().fadeOut(500);
});

const navOffcet = $("nav").outerHeight(true);
const HomeOffcet = $("#home").outerHeight(true);

$("#home").css("marginTop", navOffcet + 'px')

$("#choose .toggle h5").on("click", function () {
  $(this).next().slideToggle(600);

  $("#choose .toggle div").not($(this).next()).slideUp(600);
})

$("#home .swiper-horizontal>.swiper-pagination-bullets, #home .swiper-pagination-bullets.swiper-pagination-horizontal").css("left", HomeOffcet + "px")

$(document).ready(function () {

  $("form").submit(function (event) {
    event.preventDefault();

    if ($("input").val() == "" || $("#contact textarea").val() == "" || $("#contact select").val() == "" && check === false) {
      $("#contact input, #contact textarea, #contact select").addClass("is-invalid");
      $(".error").fadeIn(1000)
    } else {
      $("#contact input, #contact textarea, #contact select").removeClass("is-invalid");
      $(".error").fadeOut(1000)
    }
  });

  $("input, textarea, select").on("input", function () {
    valdate(this);
  });

  function valdate(e) {
    let regex = {
      nameInput: /^(?=.{3,12}$).*/,
      phoneInput: /^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/,
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


ScrollReveal().reveal('.left', {
  duration: 1000,
  delay: 200,
  origin: 'left',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.right', {
  duration: 1000,
  delay: 200,
  origin: 'right',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.bottom', {
  duration: 1000,
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});

ScrollReveal().reveal('.col-md-2,.top', {
  duration: 1000,
  delay: 400,
  origin: 'top',
  distance: '50px',
  easing: 'ease-in-out',
  reset: true
});


var swiper1 = new Swiper('.swiper-container-1', {
  effect: "fade",
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
  effect: 'flip', // 'fade', 'cube', 'coverflow', 'flip',more...
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
const boxColorOffcet = $(".box-color").outerWidth(true)
const boxColorOpenOffcet = $(".box-color .open").outerWidth(true)
$("document").ready(function () {
  $(".load").fadeOut(1000, function () {
    $("#home").css({ "transform": "scale(1)", "transition": "all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s", "opacity": "1" });
  })
  $("body").css("overflow", "visible")
  $(".box-color").css({ "right": -boxColorOffcet + "px", "transition": "all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s" })

  $(".open").on("click", function () {
    if ($(".box-color").css("right") === "0px") {
      $(".box-color").css("right", -boxColorOffcet + "px");
    } else {
      $(".box-color").css("right", "0px");
    }
  });

  $(".red").on("click", function () {
    $("body").removeClass("second-color").addClass("third-color");
    localStorage.setItem("currentColor", "third-color");
  });

  $(".purple").on("click", function () {
    $("body").removeClass("third-color").addClass("second-color");
    localStorage.setItem("currentColor", "second-color");
  });

  $(".green").on("click", function () {
    $("body").removeClass("second-color third-color");
    localStorage.setItem("currentColor", "");
  });

  $(".dark-mode").on("click", function () {
    $("body").removeClass("light").addClass("dark");
    localStorage.setItem("currentColor", "dark");
  });

  $(".light-mode").on("click", function () {
    $("body").removeClass("dark").addClass("light");
    localStorage.setItem("currentColor", "light");
  });

  var currentColor = localStorage.getItem("currentColor");

  if (currentColor === "second-color") {
    $("body").addClass("second-color");
  } else if (currentColor === "third-color") {
    $("body").addClass("third-color");
  } else if (currentColor === "dark") {
    $("body").addClass("dark");
  } else if (currentColor === "light") {
    $("body").addClass("light");
  }

});

if ($(".patern").is(":checked")) {
  $(".pattern-box").css("display", "flex").hide().fadeIn(500);
} else {
  $(".pattern-box").fadeOut(500);
  $("main").css("border","none")
}

$(".patern").on("change", function() {
  if ($(this).is(":checked")) {
      $(".pattern-box").css("display", "flex").hide().fadeIn(500);
  } else {
      $(".pattern-box").fadeOut(500);
      $("main").css("border","none")
  }
});

$(".dark-pattern").on("click", function() {
  $("main").css({ "border-right": "47px solid #212529","border-left": "47px solid #212529" });
});

$(".light-pattern").on("click", function() {
  $("main").css({ "border-right": "47px solid #fff","border-left": "47px solid #fff" });
});

$(".gray-pattern").on("click", function() {
  $("main").css({ "border-right": "47px solid rgb(197 197 197)","border-left": "47px solid rgb(197 197 197)" });
});

let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
