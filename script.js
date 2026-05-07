console.log("Portafolio cargado 🚀");

// Seleccionamos todas las cards
const cards = document.querySelectorAll(".card");

// Observer para detectar cuando entran en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

// Activamos el observer en cada card
cards.forEach(card => {
  observer.observe(card);
});