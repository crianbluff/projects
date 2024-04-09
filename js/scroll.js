const scrollBar = document.getElementById('scroll-bar');

/* Calculate progress percentage on scroll */
window.addEventListener('scroll', () => {
	let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round( pos * 100 / calcHeight);
  scrollBar.style.background = `conic-gradient(#00ffff ${scrollValue}%, #001919 ${scrollValue}%)`;
  scrollBar.dataset.scrollProgress = `${scrollValue}%`;
});

/* Scroll goes top */
scrollBar.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});