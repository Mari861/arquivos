function listarProdutos() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const filtro = document.getElementById("filtro").value;
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");

  const cards = grid.querySelectorAll(".product-card");
  let anyVisible = false;

  cards.forEach(card => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();
    const status = card.querySelector(".status span").textContent;

    if (titulo.includes(busca) && (filtro === "" || filtro === status)) {
      card.style.display = "block";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  emptyState.style.display = anyVisible ? "none" : "block";
}

function abrirDetalhe(id) {
  localStorage.setItem("produtoSelecionado", id);
  window.location.href = "detalhedoproduto.html";
}

function adicionarProduto() {
  window.location.href = "../adicionarprodutos/adicionarprodutos.html";
}
 