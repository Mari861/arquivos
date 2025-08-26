function expandEffect(color, redirect = null) {
  const overlay = document.createElement("div");
  overlay.classList.add("expand", color);
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.width = "100%";
  }, 10);

  setTimeout(() => {
    overlay.remove();
    if (redirect) {
      window.location.href = redirect; // redireciona após a animação
    }
  }, 1000);
}

// Botão verde (Bem-vindo -> Entrar)
document.getElementById("signInBtn").addEventListener("click", () => {
  expandEffect("green", "../login/tela-do-artesão/screenart.html"); // redireciona para screenart.html
});

// Botão branco (Criar Conta -> Inscreva-se)
document.getElementById("signUpBtn").addEventListener("click", () => {
  expandEffect("white");
});
