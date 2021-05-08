 $(function () {
  $("#slide").owlCarousel({
   items: 1,
   nav: true,
   loop: true,
   navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
   dots: false,
   autoplay: false,
   autoplayTimeout: 3000,
  });

  $("#slide2").owlCarousel({
   items: 1,
   nav: false,
   loop: true,
   // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
   dots: true,
   autoplay: false,
   autoplayTimeout: 3000,
  });



 });

 