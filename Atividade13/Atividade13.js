document.addEventListener("DOMContentLoaded", function () {
    var janela = document.getElementById("imagem");
    var texto = document.getElementById("texto");

    janela.onclick = function () {
        janela.setAttribute("src", "janelaquebrada.png");
        texto.innerHTML = "Janela Quebrada";
    };

    janela.onmouseover = function () {
        janela.setAttribute("src", "janelaaberta.png");
        texto.innerHTML = "Janela Aberta";
    };

    janela.onmouseout = function () {
        janela.setAttribute("src", "janelafechada.png");
        texto.innerHTML = "Janela Fechada";
    };
});