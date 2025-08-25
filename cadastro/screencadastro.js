document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert("Preencha todos os campos!");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});
