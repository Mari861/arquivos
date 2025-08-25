// Atualiza subtotal e total
function atualizarTotais() {
  const produtos = document.querySelectorAll(".produto");
  let subtotal = 0;

  produtos.forEach(produto => {
    const precoTexto = produto.querySelector("span").textContent.replace("R$ ", "").replace(",", ".");
    const preco = parseFloat(precoTexto);
    const qtd = parseInt(produto.querySelector("input").value);
    subtotal += preco * qtd;
  });

  const frete = 20.00;
  document.getElementById("subtotal").textContent = `R$ ${subtotal.toFixed(2)}`;
  document.getElementById("frete").textContent = `R$ ${frete.toFixed(2)}`;
  document.getElementById("total").textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
}

// Botões de quantidade
document.querySelectorAll(".mais").forEach(btn => {
  btn.addEventListener("click", e => {
    const input = e.target.parentElement.querySelector("input");
    input.value = parseInt(input.value) + 1;
    atualizarTotais();
  });
});

document.querySelectorAll(".menos").forEach(btn => {
  btn.addEventListener("click", e => {
    const input = e.target.parentElement.querySelector("input");
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
      atualizarTotais();
    }
  });
});

// Selecionar todos os produtos (se quiser usar futuramente)
const checkTodos = document.getElementById("check-todos");
const checkProdutos = document.querySelectorAll(".produto input[type=checkbox]");
if (checkTodos) {
  checkTodos.addEventListener("change", () => {
    checkProdutos.forEach(chk => chk.checked = checkTodos.checked);
  });
}

// Cupom
document.addEventListener("DOMContentLoaded", () => {
  const abrirCupom = document.getElementById("abrir-cupom");
  const modal = document.getElementById("modal-cupom");
  const fecharModal = document.querySelector(".fechar");
  const aplicarCupom = document.getElementById("btn-aplicar-cupom");

  // Abrir modal
  abrirCupom.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Fechar modal (X)
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fechar clicando fora
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Aplicar cupom
  aplicarCupom.addEventListener("click", () => {
    const codigo = document.getElementById("campo-cupom").value.trim();
    if (codigo !== "") {
      document.getElementById("cupom").textContent = codigo;
      modal.style.display = "none";
    } else {
      alert("Digite um código de cupom!");
    }
  });
});


const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const inner = document.querySelector('.carousel-inner');

// Função para atualizar slide
function updateCarousel() {
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Próximo
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

// Anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

// Passar automaticamente a cada 5s
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}, 5000);


// Inicia totais
atualizarTotais();
