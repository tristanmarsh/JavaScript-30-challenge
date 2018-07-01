{
  function debounce(func, wait = 20, immediate = true) {
    let timeout = null;

    return function thing(...args) {
      const context = this;

      const later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('img');

  const checkSlide = e => {
    window.console.count(e);
    sliderImages.forEach(image => {
      const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2);
      const imageBottom = image.offsetTop + image.height;

      const isHalfShown = slideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if (isHalfShown && isNotScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  };

  // Register Event Listeners
  document.addEventListener('scroll', debounce(checkSlide));
}
