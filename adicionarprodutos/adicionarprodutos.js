const form = document.getElementById("produto-form");
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

form.addEventListener("submit", e => {
  e.preventDefault();

  const novoProduto = {
    id: Date.now(),
    titulo: document.getElementById("titulo").value,
    preco: parseFloat(document.getElementById("preco").value),
    descricao: document.getElementById("descricao").value,
    quantidade: parseInt(document.getElementById("quantidade").value),
    status: document.getElementById("status").value,
    foto: document.getElementById("foto").value
  };

  produtos.push(novoProduto);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  window.location.href = "meusprodutos.html";
});
const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");
const chooseBtn = document.getElementById("choose-btn");

chooseBtn.addEventListener("click", () => {
  fotoInput.click(); // Abre o seletor de arquivos
});

fotoInput.addEventListener("change", () => {
  const file = fotoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});



form.addEventListener("submit", e => {
  e.preventDefault();

  const file = fotoInput.files[0];
  let fotoData = "";
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      fotoData = e.target.result;

      const novoProduto = {
        id: Date.now(),
        titulo: document.getElementById("titulo").value,
        preco: parseFloat(document.getElementById("preco").value),
        descricao: document.getElementById("descricao").value,
        quantidade: parseInt(document.getElementById("quantidade").value),
        status: document.getElementById("status").value,
        foto: fotoData // aqui vai a imagem em base64
      };

      produtos.push(novoProduto);
      localStorage.setItem("produtos", JSON.stringify(produtos));

      window.location.href = "../meusprodutos/meusprodutos.html";
    };
    reader.readAsDataURL(file);
  } else {
    alert("Escolha uma imagem para o produto.");
  }
});
