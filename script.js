document.addEventListener('scroll', function () {
  const header = document.getElementById('header');

  if (window.scrollY >= 120) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for subscribing!');
});
