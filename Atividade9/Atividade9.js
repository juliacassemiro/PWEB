var totalIdade = 0
var maisVelha = 0
var maisNova = 1000
var qtdePessimo = 0
var qtdeOtimoBom = 0
var mulher = 0
var homem = 0

for (var i = 0; i < 45; i++) {

    var idade = parseInt(prompt("Informe sua idade:"))
    var sexo = prompt("Informe seu sexo (F ou M):")
    var opiniao = prompt("Informe sua opinião (1 a 4):")

    totalIdade += idade

    if (idade > maisVelha) {
        maisVelha = idade
    }

    if (idade < maisNova) {
        maisNova = idade
    }

    if (opiniao == 1) {
        qtdePessimo++
    }

    if (opiniao == 4 || opiniao == 3) {
        qtdeOtimoBom++
    }

    if (sexo == "F") {
        mulher++
    }

    if (sexo == "M") {
        homem++
    }
}

var media = totalIdade / 45
var pcentOtimoBom = (qtdeOtimoBom * 100) / 45

alert("Média da idade das pessoas: " + media.toFixed(2) +
    "\nIdade da pessoa mais velha: " + maisVelha +
    "\nIdade da pessoa mais nova: " + maisNova +
    "\nQuantidade de pessoas que responderam péssimo: " + qtdePessimo +
    "\nPorcentagem de pessoas que responderam ótimo e bom: " + pcentOtimoBom.toFixed(2) + "%" +
    "\nNúmero de mulheres que responderam: " + mulher +
    "\nNúmero de homens que responderam: " + homem)