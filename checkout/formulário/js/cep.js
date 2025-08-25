function buscaCep() {
  const cep = document.getElementById('txtCep').value.trim();

  if (cep !== "") {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("CEP inválido!");
          } else {
            throw new Error("Erro ao fazer a requisição.");
          }
        }
        return response.json();
      })
      .then(endereco => {
        document.getElementById("txtRua").value = endereco.street || "";
        document.getElementById("txtBairro").value = endereco.neighborhood || "";
        document.getElementById("txtCidade").value = endereco.city || "";
        document.getElementById("txtEstado").value = endereco.state || "";
      })
      .catch(error => {
        alert(error.message);
      });
  }
}

window.onload = () => {
  const txtCep = document.getElementById("txtCep");
  txtCep.addEventListener("blur", buscaCep);
};
