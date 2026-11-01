const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const expanded = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(expanded));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
