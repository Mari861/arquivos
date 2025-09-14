document.getElementById("formArtesao").addEventListener("submit", function(e) {
  e.preventDefault();

  // Pega os valores
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const tipo = document.getElementById("tipo").value;
  const instagram = document.getElementById("instagram").value;
  const facebook = document.getElementById("facebook").value;

  // Salva no localStorage (pode ser útil para usar em outra página)
  const dadosArtesao = {
    nome,
    whatsapp,
    cidade,
    estado,
    tipo,
    instagram,
    facebook
  };

  localStorage.setItem("dadosArtesao", JSON.stringify(dadosArtesao));

  // Redireciona para a home
  window.location.href = "home.html"; // ajuste o caminho da sua home
});
