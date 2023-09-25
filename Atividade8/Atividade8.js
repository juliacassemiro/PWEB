alert("PEDRA, PAPEL OU TESOURA\n\nClique em OK para começar a jogar");

var escolha1 = prompt("Digite sua escolha:")

var escolha2 = Math.random;

if (escolha2 <= 0.33) {
    escolha2 = "pedra";
}
else if (escolha2 <= 0.66) {
    escolha2 = "papel";
}
else {
    escolha2 = "tesoura";
}

if (escolha1 == escolha2) {
    alert("Empate");
}
else if (escolha1 == "pedra" && escolha2 == "tesoura") {
    alert("Você ganhou!");
}
else if (escolha2 == "pedra" && escolha1 == "tesoura") {
    alert("Você perdeu!");
}
else if (escolha1 == "tesoura" && escolha2 == "papel") {
    alert("Você ganhou!");
}
else if (escolha2 == "tesoura" && escolha1 == "papel") {
    alert("Você perdeu!");
}
else if (escolha1 == "papel" && escolha2 == "pedra") {
    alert("Você ganhou!");
}
else if (escolha2 == "papel" && escolha1 == "pedra") {
    alert("Você perdeu!");
}