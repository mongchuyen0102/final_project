jQuery(document).ready(function ($) {
 $('.owl-demo').owlCarousel({
   items: 1,
   nav: true,
   navigationText: [
       "<i class='icon-chevron-left icon-white'><</i>",
       "<i class='icon-chevron-right icon-white'>></i>"],
   lazyLoad: true,
   loop: true,
   margin: 10
 });
});