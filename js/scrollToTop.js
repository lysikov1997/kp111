function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function addScrollToTopListener() {
  var scrollToTopButton = document.querySelector('.scrolltop');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  addScrollToTopListener();

  // Добавляем плавность к скроллу страницы
  document.documentElement.style.scrollBehavior = 'smooth';
});
