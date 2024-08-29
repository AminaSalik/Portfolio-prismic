document.addEventListener("scroll", function() {
  const image = document.querySelector('.img_Projct');
  const rect = image.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      image.classList.add('normal'); // Scale down to normal size
  } else {
      image.classList.remove('normal'); // Stay zoomed in when out of view
  }
});
