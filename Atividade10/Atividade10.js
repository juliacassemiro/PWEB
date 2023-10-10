alert("FUNÇÃO 1")

function maiorNum(numeros) {
    var maior = n1
    if (n2 > maior) {
        maior = n2
    }
    if (n3 > maior) {
        maior = n3
    }
    return maior
}

var n1 = parseInt(prompt("Insira o primeiro número:"))
var n2 = parseInt(prompt("Insira o segundo número:"))
var n3 = parseInt(prompt("Insira o terceiro número:"))

var numeros = [n1, n2, n3]
var maior = maiorNum(numeros)

alert("Maior número inserido: " + maior)

alert("FUNÇÃO 2")

function ordenar(numeros) {
    numeros.sort((a, b) => a - b)
    return numeros
}

var n1 = parseInt(prompt("Insira o primeiro número:"))
var n2 = parseInt(prompt("Insira o segundo número:"))
var n3 = parseInt(prompt("Insira o terceiro número:"))

var numeros = [n1, n2, n3]
var numOrdenados = ordenar(numeros)

alert("Números inseridos em ordem: " + numOrdenados)