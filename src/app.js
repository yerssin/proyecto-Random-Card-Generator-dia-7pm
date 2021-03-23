window.onload = function () {

  var numeroAleatorio = Math.floor(Math.random() * 4);
  let simbolos = ["♦", "♥", "♠", "♣"]
  var simbolo = simbolos[numeroAleatorio]
  var iconos = document.getElementsByClassName('icono')

  for (let index = 0; index < iconos.length; index++) {
    const icono = iconos[index];
    icono.innerHTML = simbolo;
    if (simbolo === "♦") {
      icono.classList.add("text-danger")
    }
    if (simbolo === "♥") {
      icono.classList.add("text-danger")
    }

    if (simbolo === "♥" || simbolo === "♦") {
      document.getElementById("numero").classList.add("text-danger")
    }
  }
  var numeroDelMedio = Math.floor(Math.random() * 12) + 1;

  document.getElementById("numero").innerHTML = cambiarValor(numeroDelMedio);
};
function cambiarValor(valor) {
  switch (valor) {
    case 1: return "A";
    case 11: return "J";
    case 12: return "Q";
    case 13: return "K";
    default: return valor;
  }
}



