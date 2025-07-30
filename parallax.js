// 🌟 PARALLAX SCRIPT (scroll + mouse)
(function() {
  const parallaxEls = document.querySelectorAll('.parallax');
  let isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // 🔹 będziemy trzymać osobne wartości transformacji
  let scrollOffset = 0;
  let mouseX = 0;
  let mouseY = 0;

  function updateParallax() {
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.3;
    const translateY = scrollOffset * speed;
    const translateMouseX = mouseX * speed;
    const translateMouseY = mouseY * speed;

    // 🛠 USUWAMY poprzednie translate'y, ale zostawiamy inne transformy (np. scale z fade-in)
    const currentTransform = el.style.transform.replace(/translate[XY]?\([^)]*\)/g, '').trim();

    // 🆕 DODAJEMY nowy efekt scroll + myszka
    el.style.transform = `${currentTransform} translateY(${translateY}px) translate(${translateMouseX}px, ${translateMouseY}px)`.trim();
  });
}


  // 🎢 SCROLL PARALLAX
  window.addEventListener('scroll', () => {
    scrollOffset = window.pageYOffset;
    updateParallax();
  });

  // 🖱 MOUSE PARALLAX (desktop only)
  if (!isMobile) {
    document.addEventListener('mousemove', e => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
      updateParallax();
    });
  }
})();
