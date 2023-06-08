function multiply(a, b) {
  return a * b;
}

var x2 = multiply.bind(this, 2); // parametro a fijo
var x3 = multiply.bind(null, 3); // parametro a fijo

// console.log(x2(3)); // parametro b
// console.log(x2(4)); // parametro b
// console.log(x2(5)); // parametro b
// console.log(x2(6)); // parametro b

const messi = {
  name: "Lionel",
  surname: "Messi",
};

function showName(a, b, c) {
  console.log(a, b, c);
  return this.name;
}

showName.call(messi, 2, 3, 4);

console.log("Apply", showName.apply(messi, [2, 3, 4]));
//                                          a  b  c

var algunArreglo = [1, 2, 3];

console.log(
  "MAP",
  showName.apply(
    messi,
    algunArreglo.map((messi) => messi * 2)
  )
);

//        [    1,         2 ,                   3]
//                                messi
//       [  2,   4, 6]




