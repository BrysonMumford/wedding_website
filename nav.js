const hamburger = document.getElementById('nav-hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('nav-open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('nav-open'))
);
