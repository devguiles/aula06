var isPNE = true;
var idade = 67;
var dirigeCaminhao = true;

if(!dirigeCaminhao && (idade >= 60 || isPNE)) {
    console.log("Vaga preferencial LIBERADA.")
} else {
    console.log("Vaga preferencial PROIBIDA.")
}