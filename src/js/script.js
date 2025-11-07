const toggle = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.header__menu');

toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = "true" ? "false" : "true" ;
  toggle.ariaExpanded = "false" ? "true" : "false" ;
});

