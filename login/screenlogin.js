document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    if (email === "teste@email.com" && password === "123456") {
        alert("Login realizado com sucesso!");
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
