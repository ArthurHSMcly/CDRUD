document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {
        mensagem.style.color = "#ff4d4d";
        mensagem.innerText = "Preencha todos os campos!";
        return;
    }

    mensagem.style.color = "#4ade80";
    mensagem.innerText = "✅ Login válido! Redirecionando...";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);

});