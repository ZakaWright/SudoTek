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

var slideIndex = 1;

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
