var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".navbar").toggleClass("navbar--visible");
});

$(window).on("scroll", function () {
  $(".header-wrapper").toggleClass("active", $(this).scrollTop() > 5);
});
