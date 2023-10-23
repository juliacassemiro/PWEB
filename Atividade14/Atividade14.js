function transforma() {
    var texto = document.getElementById("texto");
    var maiusculas = document.getElementById("maiusculas");
    var minusculas = document.getElementById("minusculas");

    if (maiusculas.checked) {
        texto.value = texto.value.toUpperCase();
    } else if (minusculas.checked) {
        texto.value = texto.value.toLowerCase();
    }
}