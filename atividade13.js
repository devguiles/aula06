var diaDaSemana = "quarta-feira";
var horario = 21;

if(horario >= 8 && horario <=18 && (diaDaSemana == "segunda-feira" || diaDaSemana == "terça-feira" || diaDaSemana == "quarta-feira" || diaDaSemana == "quinta-feira" || diaDaSemana == "sexta-feira")) {
    console.log("A loja está aberta.");
} else {
    console.log("A loja está fechada.")
}