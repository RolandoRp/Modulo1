var creaFuncion = function () {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log("Valor de i -> ", i);
    });
  }
  // let i -> 0 - 1er vuelta
  // let i -> 1 - 2da vuelta
  // let i -> 2 - 3era vuelta
  // let i -> 3 - corta for
  return arr;
};

var arregloRetornado = creaFuncion();

// [funcionHija, funcion, funcion]

arregloRetornado[0](); //  0
arregloRetornado[1](); //  1
arregloRetornado[2](); //  2

// function saludar(saludo) {
//   var arr = [1, 2, 3];

//   return function (nombre) {
//     var aux = "algo";
//     console.log(algo);
//     console.log(nombre);
//     console.log(saludo + nombre + "!");
//   };
// }

// var funcionHija = saludar("Hola! ");
// funcionHija("Messi");

/*

GLOBAL{

var funcionHija = funcionHija       <--   ----------- { saludo = "Hola! }  -------------


funcionHija {

    nombre = "Messi"
    console.log(saludo + nombre + "!")

}

   

    



}


*/

