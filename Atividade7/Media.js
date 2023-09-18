nome = prompt("Nome:");

nota1 = prompt("Nota 1:");
nota2 = prompt("Nota 2:");
nota3 = prompt("Nota 3:");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3.0;

alert("Média: " + media.toFixed(2));