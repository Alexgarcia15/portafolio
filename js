console.log("Portafolio pro cargado 🚀");

// animación simple de click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.05)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 200);
  });
});