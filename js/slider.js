function initSlider() {
    var sliderWrapper = document.querySelector(".slider-wrapper");
    var slides = document.querySelectorAll(".slide");
    var slideWidth = slides[0].offsetWidth;
    var currentSlide = 0;
    var prevButton = document.querySelector(".prev-button");
    var nextButton = document.querySelector(".next-button");
    var sliderDots = document.querySelectorAll(".slider-dot");
  
    function goToSlide(index) {
      sliderWrapper.style.transform = `translateX(-${slideWidth * index}px)`;
      currentSlide = index;
  
      sliderDots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
      });
    }
  
    function slideNext() {
      if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(0);
      }
    }
  
    function slidePrev() {
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      } else {
        goToSlide(slides.length - 1);
      }
    }
  
    prevButton.addEventListener("click", slidePrev);
    nextButton.addEventListener("click", slideNext);
  
    sliderDots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        goToSlide(index);
      });
    });
  
    setInterval(slideNext, 5000);
  }
  
  
  
    initSlider();

  