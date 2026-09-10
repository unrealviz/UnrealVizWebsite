const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const smallScreen = window.matchMedia('(max-width: 850px)');

function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}

menuButton.hidden = false;
document.documentElement.classList.add('menu-ready');
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.classList.toggle('is-open', opening);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('header')) closeMenu();
});
smallScreen.addEventListener('change', () => closeMenu());

const viewer = document.querySelector('.image-viewer');
const entries = [...document.querySelectorAll('[data-gallery]')];
let current = 0;
let origin;

function showRender(index) {
  current = (index + entries.length) % entries.length;
  const entry = entries[current];
  const image = viewer.querySelector('.viewer-image');
  image.src = entry.getAttribute('href');
  image.alt = entry.querySelector('img').alt;
  viewer.querySelector('#viewer-title').textContent = entry.dataset.title;
  viewer.querySelector('.viewer-count').textContent = `${current + 1} / ${entries.length}`;
}

if (typeof viewer.showModal === 'function') {
  entries.forEach((entry, index) => {
    entry.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      origin = entry;
      showRender(index);
      viewer.showModal();
      document.body.classList.add('viewer-open');
      viewer.querySelector('.viewer-close').focus();
    });
  });
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.querySelector('.viewer-prev').addEventListener('click', () => showRender(current - 1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => showRender(current + 1));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showRender(current + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    origin?.focus();
  });
}

// A static, small noise tile keeps grain inexpensive and avoids flashing.
const grain = document.querySelector('.mystery-grain');
if (grain) {
  const tile = document.createElement('canvas');
  tile.width = tile.height = 150;
  const context = tile.getContext('2d');
  if (context) {
    const pixels = context.createImageData(150, 150);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const value = Math.random() * 255;
      pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value;
      pixels.data[i + 3] = 255;
    }
    context.putImageData(pixels, 0, 0);
    grain.style.backgroundImage = `url(${tile.toDataURL()})`;
  }
}
const hero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let heroFrame = 0;
function resetAtmosphere() {
  cancelAnimationFrame(heroFrame);
  heroFrame = 0;
  for (const property of ['--light-x', '--light-y', '--drift-x', '--drift-y', '--tilt']) hero.style.removeProperty(property);
}
hero.addEventListener('pointermove', (event) => {
  if (reducedMotion.matches || event.pointerType === 'touch') return;
  cancelAnimationFrame(heroFrame);
  heroFrame = requestAnimationFrame(() => {
    const bounds = hero.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    hero.style.setProperty('--light-x', `${x * 100}%`);
    hero.style.setProperty('--light-y', `${y * 100}%`);
    hero.style.setProperty('--drift-x', `${(x - .5) * 20}px`);
    hero.style.setProperty('--drift-y', `${(y - .5) * 12}px`);
    hero.style.setProperty('--tilt', `${(x - .5) * 2}deg`);
    heroFrame = 0;
  });
}, { passive: true });
hero.addEventListener('pointerleave', resetAtmosphere);
reducedMotion.addEventListener('change', resetAtmosphere);

const atmosphereControls = document.querySelector('.atmosphere-controls');
if (atmosphereControls) {
  atmosphereControls.hidden = false;
  atmosphereControls.addEventListener('click', (event) => {
    const button = event.target.closest('[data-lighting]');
    if (!button) return;
    hero.dataset.atmosphere = button.dataset.lighting;
    for (const option of atmosphereControls.querySelectorAll('button')) {
      option.setAttribute('aria-pressed', String(option === button));
    }
  });
}

const yomaiaLighting = document.querySelector('.yomaia-lighting');
if (yomaiaLighting) {
  const scenes = {
    daylight: { file: '/uv-studio-yomaia-daylight.jpg', title: 'Yomaia — daylight creature study', alt: 'Two horned dinosaurs in a sunlit forest beneath a bright blue sky' },
    sunset: { file: '/uv-studio-yomaia-sunset.jpg', title: 'Yomaia — golden hour creature study', alt: 'Two horned dinosaurs lit by golden sunset in a forest clearing' }
  };
  yomaiaLighting.hidden = false;
  yomaiaLighting.addEventListener('click', (event) => {
    const button = event.target.closest('[data-yomaia-scene]');
    if (!button) return;
    const scene = scenes[button.dataset.yomaiaScene];
    if (!scene) return;
    const link = document.querySelector('.yomaia-scene');
    const img = link.querySelector('img');
    link.href = scene.file;
    link.dataset.title = scene.title;
    img.src = scene.file;
    img.alt = scene.alt;
    for (const option of yomaiaLighting.querySelectorAll('button')) option.setAttribute('aria-pressed', String(option === button));
  });
}
