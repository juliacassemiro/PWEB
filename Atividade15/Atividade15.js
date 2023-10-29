function validar() {
  const elemento_nome = document.formulario.elements["nome"];
  const nome = elemento_nome.value;
  const elemento_email = document.formulario.elements["email"];
  const email = elemento_email.value;
  const elemento_comentario = document.formulario.elements["comentario"];
  const comentario = elemento_comentario.value;
  const pesquisa = document.querySelector("input[name='pesquisa']:checked").value;

  let validado = true;

  // nome
  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres.");
    validado = false;
  }

  // e-mail
  if (!email.includes("@")) {
    alert("O e-mail deve conter o caractere @.");
    validado = false;
  }

  // comentário
  if (comentario.length < 20) {
    alert("O comentário deve ter pelo menos 20 caracteres.");
    validado = false;
  }

  // pesquisa
  if (validado) {
    if (pesquisa === "sim") {
      alert("Que bom que você voltou a visitar esta página!");
    }
    if (pesquisa === "nao") {
      alert("Volte sempre a esta página!");
    }
  }

  return validado;
}
