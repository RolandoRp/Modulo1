"use strict";

function BinarioADecimal(num) {
  // escriben aca el codigo
  var resultado = 0
  var posicion = num.length - 1
  for (let i = 0; i < num.length; i++) {
    resultado = resultado + num[i] * Math.pow(2, posicion)
    posicion--
  } return resultado
}

function DecimalABinario(num) {
  var string = ''
  var numero = num

  while (numero > 0) {
    string = numero %2 + string
    numero = Math.floor(numero/2)
  } return string
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
