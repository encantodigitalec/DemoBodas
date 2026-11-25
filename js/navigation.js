(function () {
  const openingScreen = document.getElementById('openingScreen');
  const openButton = document.getElementById('openInvitation');
  const invitation = document.getElementById('invitationWrapper');
  const content = document.querySelector('.content');
  if (!openingScreen || !openButton || !invitation) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function resetScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (content) content.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
  let isOpening = false;
  const scrollCue = document.querySelector('.scroll-cue');
  function observeSections() {
    const targets = document.querySelectorAll('.content > .quote, .content > .section, .content > .wedding-divider');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { root: content, threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    targets.forEach((target) => {
      if (!target.hidden) observer.observe(target);
    });
  }
  window.addEventListener('load', resetScroll);
  window.addEventListener('pageshow', resetScroll);
  openButton.addEventListener('click', () => {
    if (isOpening) return;
    isOpening = true;
    openButton.disabled = true;
    resetScroll();
    if (window.WeddingMusic) window.WeddingMusic.play();
    openingScreen.classList.add('open-envelope');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => {
      resetScroll();
      openingScreen.classList.add('hide');
      invitation.classList.add('show');
      invitation.inert = false;
      invitation.setAttribute('aria-hidden', 'false');
      observeSections();
    }, reducedMotion ? 100 : 790);
  });
  content?.addEventListener('scroll', () => {
    const hasScrolled = content.scrollTop > 48;
    scrollCue?.classList.toggle('is-hidden', hasScrolled);
  }, { passive: true });
})();
