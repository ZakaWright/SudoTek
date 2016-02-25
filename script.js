jQuery(document).ready(function() {

  var navOffset = jQuery(".nav").offset().top;

  jQuery(window).scroll(function() {
    var scrollPosition = jQuery(window).scrollTop();

    if(scrollPosition >= navOffset) {
      jQuery(".nav").addClass("fixed");
    } else {
      jQuery(".nav").removeClass("fixed");
    }
  });
});
