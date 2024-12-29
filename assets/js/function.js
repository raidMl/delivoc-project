(function ($) {
  "use-strict";


  $(window).on("load", function () {
    wow = new WOW({
    });
    wow.init();
  });

  /*------------------------------------
        menu mobile
    --------------------------------------*/
  $(".header-mobile__toolbar,.main-header .btn-close-header-mobile").on("click", function () {
    $(".menu--mobile").toggleClass("menu-mobile-active");
  });

})(jQuery);
