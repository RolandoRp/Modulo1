'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let calPiv = Math.floor(Math.random() * array.length)
  let pivot = array[calPiv]

  let equals = []
  let left = []
  let rigth = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== pivot) {
      if(array[i] < pivot) left.push(array[i])
      else rigth.push(array[i])
    }
    else equals.push(array[i])
  }
  return quickSort(left).concat(equals).concat(quickSort(rigth))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length < 2) return array;
  
  const mitad = Math.floor(array.length / 2)
  let left = array.slice(0, mitad)
  let rigth = array.slice(mitad)

  array = []

  left = mergeSort(left)
  rigth = mergeSort(rigth)

  while(left.length && rigth.length) {
    if(left[0] < rigth[0]) {
      array.push(left.shift())
    }
    else array.push(rigth.shift())
  }
  array = array.concat(left, rigth)

  return array
}
// let array = [4, 3, 6, 8, 5, 1]
// array = console.log(mergeSort(array))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
