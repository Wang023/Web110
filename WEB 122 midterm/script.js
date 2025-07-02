// burger menu
const toggleButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

//  off canvas
document.querySelectorAll('.boots-exp-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.dataset.target;
    document.getElementById(targetId).classList.add('open');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.offcanvas').classList.remove('open');
  });
});
