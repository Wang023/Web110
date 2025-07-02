// burger menu
const toggleButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

//  off canvas
// get the offcanvas
const offcanvases = document.querySelectorAll('.offcanvas, .offcanvas-left');

// buttons open
document.querySelectorAll('.boots-exp-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.dataset.target;

    // close all
    offcanvases.forEach(c => c.classList.remove('open'));

    // open off‑canvas
    const target = document.getElementById(targetId);
    if (target) target.classList.add('open');
  });
});

// click x to close
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.offcanvas')?.classList.remove('open');
    btn.closest('.offcanvas-left')?.classList.remove('open');
  });
});
