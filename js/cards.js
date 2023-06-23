let slider = {
  timer: null,
  currentIndex: 0,
  slides: document.querySelectorAll(".custom-card"),
  previousButton: document.querySelector(".custom-previous-button"),
  nextButton: document.querySelector(".custom-next-button"),

  slide: function (index) {
    const totalCount = this.slides.length;
    const visibleCount = 4;

    const startIndex = index >= totalCount - visibleCount ? totalCount - visibleCount : index;

    this.slides.forEach((slide, slideIndex) => {
      if (slideIndex >= startIndex && slideIndex < startIndex + visibleCount) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    this.currentIndex = index >= totalCount - 1 ? 0 : index;
  },

  previousSlide: function () {
    this.stopSlideshow();
    const previousIndex = this.currentIndex - 1 < 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.slide(previousIndex);
  },

  nextSlide: function () {
    this.stopSlideshow();
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.slide(nextIndex);
  },

  stopSlideshow: function () {
    clearInterval(this.timer);
  },

  initialize: function () {
    this.previousButton.addEventListener("click", () => {
      this.previousSlide();
    });

    this.nextButton.addEventListener("click", () => {
      this.nextSlide();
    });

    this.slide(this.currentIndex);
  },
};

slider.initialize();
