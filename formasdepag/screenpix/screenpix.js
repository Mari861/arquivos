document.getElementById("toggleDetalhes").addEventListener("click", function () {
  const detalhes = document.getElementById("infoDetalhes");
  const btn = this;
  
  if (detalhes.style.display === "none") {
    detalhes.style.display = "block";
    btn.textContent = "Menos Detalhes ▲";
  } else {
    detalhes.style.display = "none";
    btn.textContent = "Mais Detalhes ▼";
  }
});
