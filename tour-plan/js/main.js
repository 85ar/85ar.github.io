$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "fade",
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,

    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(document).on("keyup", function (esc) {
    if (esc.keyCode == 27) {
      esc.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Enter your name",
          minlength: "Name not shorter than 2 letters",
        },
        email: {
          required: "Enter your email address",
          email: "The email format is name@domain.com",
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Phone type: +7 (999) 999-99-99",
        },
        text: {
          required: "Enter your location",
        },
      },
    });
  });
  $(document).ready(function () {
    $('input[name="phone"]').mask("+7 (999) 999-99-99");
  });
  AOS.init();

  AOS.init({
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
  });
});
