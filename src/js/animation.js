const fadeInUpElements = document.querySelectorAll(".fadeInUp");

// ANIMATION
const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
});

fadeInUpElements.forEach(el => animationObserver.observe(el));
