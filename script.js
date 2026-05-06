console.log("Portafolio cargado correctamente 🚀");

// Animación simple
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 0 20px #2563eb";
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "none";
  });
});