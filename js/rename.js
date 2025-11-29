// footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// slider controls
const slider = document.getElementById('videoSlider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

if (leftBtn && slider) leftBtn.addEventListener('click', () => slider.scrollBy({ left: -320, behavior: 'smooth' }));
if (rightBtn && slider) rightBtn.addEventListener('click', () => slider.scrollBy({ left: 320, behavior: 'smooth' }));

// improve mobile swipe: pause other videos when one plays
document.querySelectorAll('.video-card video').forEach(v => {
  v.addEventListener('play', () => {
    document.querySelectorAll('.video-card video').forEach(o => { if (o !== v) { o.pause(); } });
  });
});
