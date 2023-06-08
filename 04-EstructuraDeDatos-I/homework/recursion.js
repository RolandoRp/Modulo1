var obj = {
  name: "Messi",
  friends: {
  
    lucas: {
      apellido: "zanetti",
    },
    matias: {
      name: "matias",
      apellido: "rodriguez",
    },
  },
  hobbies: ["futbol", "nadar", "mascotas"],
  age: 35,
};

function logNombres(object) {
  console.log("comencé");

  for (const i in object) {

    if (i === "name") {
      console.log(object[i]); // object["name"]
    } else if (typeof object[i] === "object" && !Array.isArray(object[i])) {
      // "si el tipo de dato es object, y ademas no es un arreglo"
      logNombres(object[i]);
    }
  }

  //   if (object.hasOwnProperty("name")) console.log(object.name);
}

logNombres(obj);



// function sumarArreglo(arr) {

//   //[1,2,3]
//   if (arr.length === 0) return 0;
//   else {
//     var primerLugar = arr[0]; // 1
//     var restoDelArreglo = arr.slice(1);
//     return primerLugar + sumarArreglo(restoDelArreglo); // [2,3]
//   }
// }

// console.log(sumarArreglo([1, 2, 3])); // 6
