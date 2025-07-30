document.addEventListener('DOMContentLoaded', () => {

  // 🌟 Fade-in całej strony
  document.body.style.opacity = '1';

  // 🍾 CUSTOMOWY KURSOR Z KIELISZKIEM
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.left = '50%';
    cursor.style.top = '50%';

    // 🖱️ ruch kursora za myszką
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // 🎯 efekt "bujania" na hoverze (przyciski, linki)
    document.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('bounce'));
      el.addEventListener('mouseleave', () => {
        setTimeout(() => cursor.classList.remove('bounce'), 400);
      });
    });
  }

  // 🎭 Dynamiczny slogan
  const slogans = [
    "🥂 A moment to celebrate",
    "🎉 A time to remember",
    "✨ Cheers to new beginnings",
    "💫 Let's make it unforgettable"
  ];
  let sloganIndex = 0;
  const sloganElement = document.getElementById('slogan');

  function changeSlogan() {
    if (!sloganElement) return;
    sloganElement.style.opacity = 0;
    setTimeout(() => {
      sloganElement.innerText = slogans[sloganIndex];
      sloganElement.style.opacity = 1;
      sloganIndex = (sloganIndex + 1) % slogans.length;
    }, 500);
  }

  changeSlogan();             // od razu pokaż pierwszy slogan
  setInterval(changeSlogan, 3000); // zmieniaj co 3 sekundy
});


// 🌟 Funkcja bezpiecznego tekstu (np. w życzeniach)
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag]));
}

// 🌟 Dodawanie życzeń + confetti + pulsujący licznik
let count = 0;
window.addWish = function () {
  const name = escapeHTML(document.getElementById('name').value.trim());
  const wish = escapeHTML(document.getElementById('wish').value.trim());
  if (!name || !wish) return alert('Please enter your name and message.');

  count++;

  // ✅ LICZNIK + pulsowanie
  const counter = document.getElementById('wishCounter');
  counter.innerText = `${count} wishes so far`;
  counter.classList.add('wish-counter-pulse');
  setTimeout(() => counter.classList.remove('wish-counter-pulse'), 400);

  // ✅ dodajemy życzenie do listy

  document.getElementById('name').value = '';
  document.getElementById('wish').value = '';

  // 🎉 efekt confetti (3 serie)
  for (let i = 0; i < 3; i++) {
    setTimeout(() => confetti({ particleCount: 70, spread: 100, origin: { y: 0.7 } }), i * 300);
  }
};


// 🌟 Rotujące cytaty
const quotes = [
  "Great leaders inspire greatness.",
  "True leadership leaves a legacy.",
  "Leadership makes others better."
];
let quoteBox = document.getElementById('quoteBox');
let currentQuote = 0;

function changeQuote() {
  if (!quoteBox) return;
  quoteBox.style.opacity = '0';
  quoteBox.style.transform = 'translateX(-50px)';
  setTimeout(() => {
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteBox.innerText = quotes[currentQuote];
    quoteBox.style.opacity = '1';
    quoteBox.style.transform = 'translateX(0)';
  }, 1000);
}
setInterval(changeQuote, 6000);
changeQuote();


// 🌟 Glitter effect
const canvas = document.getElementById('glitterCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let glitter = [];
for (let i = 0; i < 60; i++) {
  glitter.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1 + 0.5
  });
}

function drawGlitter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  glitter.forEach(g => {
    ctx.beginPath();
    ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(255, 215, 0, 0.7)";
    ctx.fill();
  });
  updateGlitter();
}

function updateGlitter() {
  glitter.forEach(g => {
    g.y += g.d;
    if (g.y > canvas.height) {
      g.y = 0;
      g.x = Math.random() * canvas.width;
    }
  });
}
setInterval(drawGlitter, 50);


// 🌟 Floating Hearts
const heartsCanvas = document.getElementById('heartsCanvas');
const htx = heartsCanvas.getContext('2d');

function resizeHeartsCanvas() {
  heartsCanvas.width = window.innerWidth;
  heartsCanvas.height = window.innerHeight;
}
resizeHeartsCanvas();
window.addEventListener('resize', resizeHeartsCanvas);

const hearts = [];
for (let i = 0; i < 15; i++) {
  hearts.push({
    x: Math.random() * heartsCanvas.width,
    y: heartsCanvas.height + Math.random() * 300,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    drift: Math.random() * 1 - 0.5
  });
}

function drawHearts() {
  htx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
  hearts.forEach(h => {
    htx.beginPath();
    htx.fillStyle = "rgba(255, 255, 255, 0.8)";
    drawHeart(htx, h.x, h.y, h.size);
    htx.fill();
  });
  updateHearts();
}

function drawHeart(ctx, x, y, size) {
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size*1.5, x, y + size*2);
  ctx.bezierCurveTo(x, y + size*1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
}

function updateHearts() {
  hearts.forEach(h => {
    h.y -= h.speed;
    h.x += h.drift;
    if (h.y < -20) {
      h.y = heartsCanvas.height + Math.random() * 100;
      h.x = Math.random() * heartsCanvas.width;
    }
  });
}
setInterval(drawHearts, 50);


// 🎇 Efekt "iskierki" przy kliknięciu
document.addEventListener('click', (e) => {
  const colors = ['#ffffff', '#ffd700', '#00c3ff', '#ff69b4'];
  for (let i = 0; i < 15; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    document.body.appendChild(spark);

    const color = colors[Math.floor(Math.random() * colors.length)];
    spark.style.background = `radial-gradient(circle, ${color} 0%, rgba(255, 255, 255, 0) 70%)`;
    spark.style.boxShadow = `0 0 8px ${color}`;

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    const angle = Math.random() * 360;
    const distance = Math.random() * 70 + 30;

    spark.animate([
      { transform: `translate(-50%, -50%) translate(0px, 0px) scale(1)`, opacity: 1 },
      { transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
    ], {
      duration: 900,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => spark.remove(), 900);
  }
});
