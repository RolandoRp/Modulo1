let box = [
  899, 2, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 2, 4, 5, 65, 7, 22,
  0, 12, 4, 77, 55, 6, 30, 30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30,
  30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 12, 4, 5, 65, 7,
  22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6,
  30, 30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 12, 4, 5,
  65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77,
  55, 6, 30, 30, 24, 12, 4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 12,
  4, 5, 65, 7, 22, 0, 12, 4, 77, 55, 6, 30, 30, 24, 1, 10,
];

// let pepe = function (box, secret) {
//   // Su algoritmo era 1a1
//   let pasos = 0;
//   for (let i = 0; i < box.length; i++) {
//     pasos++;
//     if (box[i] === secret) {
//       console.log("lo encontré, pasos>", pasos);
//       return true;
//     }
//   }
// };

// let messi = function (box, secret) {
//   let num = Math.floor(box.length / 2); // 0
//   let pasos = 0;
//   while (box.length !==) {
//     console.log("entré");
//     pasos++;
//     if (num === secret) return true;
//     else {
//       if (secret < num) {
//         box = box.sort().slice(0, num);
//       } else {
//         // o es mayor
//         box = box.sort().slice(num);
//       }
//     }
//   }

//   if (box[0] === secret) return true;
//   console.log(":(");
//   return false;
// };

// console.log(messi(box, 10));

function max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    console.log("entre");
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function max2(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
}

console.log(max(box));
