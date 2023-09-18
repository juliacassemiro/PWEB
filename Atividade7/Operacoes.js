num1 = prompt("Número 1:");
num2 = prompt("Número 2:");

var a = parseFloat(num1) + parseFloat(num2);
var b = parseFloat(num1) - parseFloat(num2);
var c = parseFloat(num1) * parseFloat(num2);
var d = parseFloat(num1) / parseFloat(num2);
var e = parseFloat(num1) % parseFloat(num2);

alert("Soma: " + a + "\nSubtração: " + b + "\nProduto: " + c + "\nDivisão: " + d.toFixed(2) + "\nResto: " + e);