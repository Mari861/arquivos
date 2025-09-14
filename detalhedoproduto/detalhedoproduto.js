const id = parseInt(localStorage.getItem("produtoSelecionado")) || 1;
const viewsKey = `views_${id}`;

// Contador de visualizações
let views = parseInt(localStorage.getItem(viewsKey) || 0);
views++;
localStorage.setItem(viewsKey, views);
document.getElementById("views").textContent = views;

// Trocar foto principal ao clicar na miniatura
function trocarFoto(el) {
  document.getElementById("foto").src = el.src;
}

// Mostrar/ocultar lucro
function toggleLucro() {
  const lucroEl = document.getElementById("lucro");
  lucroEl.classList.toggle("hidden");
}

// Botões
function editarProduto() {
  window.location.href = "adicionarproduto.html?edit=" + id;
}

function compartilharProduto() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copiado!");
  });
}

function registrarVenda() {
  window.location.href = "registrovenda.html?produto=" + id;
}

// Alterar status rapidamente
function alterarStatus() {
  const statusEl = document.getElementById("status");
  if (statusEl.textContent === "Disponível") {
    statusEl.textContent = "Pausado";
  } else if (statusEl.textContent === "Pausado") {
    statusEl.textContent = "Esgotado";
  } else {
    statusEl.textContent = "Disponível";
  }
}
