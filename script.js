window.onload = function () {
  var slideIndex = 0;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  showSlides();

  function showSlides() {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex == slides.length) { 
      slideIndex = 0;
    }
    console.log(slideIndex)
    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
}