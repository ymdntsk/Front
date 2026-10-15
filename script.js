const card = document.getElementById("meuCard");
const textoCard = document.getElementById("textoCard");
const inputTitulo = document.getElementById("titulo");

function abrirCard() {

    const nomeDoLivro = inputTitulo.value;
    textoCard.innerText = `Livro Cadastrado: ${nomeDoLivro}`;
    card.classList.add("visivel");
    /* .classList e a propriedade que deixa vc mecher com as clases */
}

function fecharCard() {
    card.classList.remove("visivel");
}
