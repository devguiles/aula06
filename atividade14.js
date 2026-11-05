function validarFormulario() {
  var campoEmail = "email@email.com";
  var concordouComOsTermos = false;

  if (!campoEmail == "" && concordouComOsTermos) {
    console.log("Formulário válido para envio.");
  } else {
    console.log("Formulário inválido para envio.")
  }
}

validarFormulario();