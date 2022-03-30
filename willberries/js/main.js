$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    // loop: true,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // effect: "fade",

    on: {
      slideChangeTransitionEnd: function () {
        if (this.isEnd) {
          this.navigation.$nextEl.css("opacity", "0.4");
          this.navigation.$prevEl.css("opacity", "0.7");
        } else {
          this.navigation.$nextEl.css("opacity", "0.7");
          this.navigation.$prevEl.css("opacity", "0.4");
        }
      },
    },
  });
});