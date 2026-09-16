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


// Full-size portfolio viewer; ordinary image links remain usable without JavaScript.
const portfolioDialog=document.querySelector('.portfolio-viewer');
const portfolioLinks=[...document.querySelectorAll('[data-portfolio]')];
let portfolioIndex=0,portfolioTrigger=null;
function renderPortfolio(){const link=portfolioLinks[portfolioIndex];portfolioDialog.querySelector('.portfolio-full-image').src=link.href;portfolioDialog.querySelector('.portfolio-full-image').alt=link.querySelector('img').alt;portfolioDialog.querySelector('#portfolio-viewer-title').textContent=link.dataset.title;portfolioDialog.querySelector('.portfolio-count').textContent=`${portfolioIndex+1} / ${portfolioLinks.length}`;}
portfolioLinks.forEach((link,index)=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();portfolioIndex=index;portfolioTrigger=link;renderPortfolio();portfolioDialog.showModal();}));
portfolioDialog.querySelector('.portfolio-close').addEventListener('click',()=>portfolioDialog.close());
portfolioDialog.addEventListener('close',()=>{portfolioDialog.querySelector('.portfolio-full-image').removeAttribute('src');portfolioTrigger?.focus({preventScroll:true});});
function stepPortfolio(delta){portfolioIndex=(portfolioIndex+delta+portfolioLinks.length)%portfolioLinks.length;renderPortfolio();}
portfolioDialog.querySelector('[data-portfolio-prev]').addEventListener('click',()=>stepPortfolio(-1));
portfolioDialog.querySelector('[data-portfolio-next]').addEventListener('click',()=>stepPortfolio(1));
portfolioDialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();stepPortfolio(1);}if(event.key==='ArrowLeft'){event.preventDefault();stepPortfolio(-1);}});
portfolioDialog.addEventListener('click',event=>{if(event.target===portfolioDialog){const r=portfolioDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)portfolioDialog.close();}});
document.querySelectorAll('.portfolio-film').forEach(details=>details.addEventListener('toggle',()=>{if(!details.open)details.querySelector('video').pause();}));

// Restore the motorcycle poster after playback, including browsers that clear the final frame.
const motorcycleVideo=document.querySelector('video[aria-label="Motorcycle turntable by Ishaan Sharma"]');
motorcycleVideo?.addEventListener('ended',()=>motorcycleVideo.load());

// Animate the native disclosure while retaining keyboard activation and no-JS fallback.
document.querySelectorAll('.portfolio-film').forEach(details => {
  const summary = details.querySelector('summary');
  const label = summary.querySelector('span');
  const video = details.querySelector('video');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let animation = null;
  let expanded = details.open;
  function settle() {
    details.open = expanded;
    details.style.height = '';
    details.style.overflow = '';
    animation = null;
  }
  summary.addEventListener('click', event => {
    event.preventDefault();
    const from = details.getBoundingClientRect().height;
    if (animation) {
      animation.onfinish = null;
      animation.cancel();
    }
    expanded = !expanded;
    if (label) label.textContent = expanded ? 'Close video −' : 'Play video +';
    if (!expanded) video.pause();
    if (reducedMotion.matches) {
      settle();
      return;
    }
    // Measure both natural states before painting, then animate from the visible height.
    details.style.height = '';
    details.open = false;
    const closedHeight = details.getBoundingClientRect().height;
    details.open = true;
    const openHeight = details.getBoundingClientRect().height;
    details.style.overflow = 'hidden';
    const to = expanded ? openHeight : closedHeight;
    details.style.height = to + 'px';
    animation = details.animate(
      [{ height: from + 'px' }, { height: to + 'px' }],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
    animation.onfinish = settle;
  });
  reducedMotion.addEventListener('change', () => {
    if (animation && reducedMotion.matches) {
      animation.cancel();
      settle();
    }
  });
});
