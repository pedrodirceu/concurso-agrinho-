// ===============================
// Alternância de tema
// ===============================

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// ===============================
// Botão Saiba Mais
// ===============================

const saibaMais = document.getElementById("saibaMais");

saibaMais.addEventListener("click", () => {

    window.scrollTo({
        top: 700,
        behavior: "smooth"
    });

});


// ===============================
// Contador animado
// ===============================

let contador = 0;

const numero = document.getElementById("contadorNumero");

function animarContador() {

    const intervalo = setInterval(() => {

        contador += 5;

        numero.textContent = contador;

        if (contador >= 1000) {
            clearInterval(intervalo);
        }

    }, 10);

}

animarContador();


// ===============================
// Validação de formulário
// ===============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const mensagemSucesso =
        document.getElementById("mensagemSucesso");

    // Verificação simples
    if (
        nome === "" ||
        email === "" ||
        mensagem === ""
    ) {

        mensagemSucesso.style.color = "red";
        mensagemSucesso.textContent =
            "Preencha todos os campos.";

        return;
    }

    mensagemSucesso.style.color = "green";

    mensagemSucesso.textContent =
        "Mensagem enviada com sucesso!";

    formulario.reset();

});


// ===============================
// Acessibilidade pelo teclado
// ===============================

document.addEventListener("keydown", (evento) => {

    // Pressionar T troca o tema
    if (evento.key.toLowerCase() === "t") {
        document.body.classList.toggle("dark");
    }

});
