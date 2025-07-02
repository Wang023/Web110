// // burger menu
// const toggleButton = document.querySelector(".menu-toggle");
// const mobileNav = document.querySelector(".mobile-nav");

// toggleButton.addEventListener("click", () => {
//   mobileNav.classList.toggle("hidden");
// });

// //  off canvas
// document.querySelectorAll('.boots-exp-link').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.dataset.target;
//     document.getElementById(targetId).classList.add('open');
//   });
// });

// document.querySelectorAll('.close-btn').forEach(btn => {
//   btn.addEventListener('click', function() {
//     this.closest('.offcanvas').classList.remove('open');
//   });
// });
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

    // Fermer tous les panneaux offcanvas ouverts
    document.querySelectorAll('.offcanvas.open').forEach(panel => {
      panel.classList.remove('open');
    });

    // Ouvrir le panneau ciblé
    const targetId = this.dataset.target;
    document.getElementById(targetId).classList.add('open');
  });
});

// bouton de fermeture (ferme uniquement son parent)
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.offcanvas').classList.remove('open');
  });
});
