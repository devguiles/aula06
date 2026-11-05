var valorCompra = 150;
var isClienteVip = true;
var zonaRural = false;

if(!zonaRural && (valorCompra > 100 || isClienteVip == true)) {
    console.log("Tem direito ao frete grátis")
} else {
    console.log("Não tem direito a frete gratis.")
}
