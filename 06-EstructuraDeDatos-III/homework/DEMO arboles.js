function Arbol(value) {
  this.value = value; // Obj Nodo
  this.left = null;
  this.right = null;
}

Arbol.prototype.add = function (value) {
  // value -> 15
  // Si el nodo raiz, tiene valor null (no deberia)
  if (!this.value) this.value = value;

  let nuevoArbol = new Arbol(value);

  if (value > this.value) {
    // voy a la derecha
    if (this.right) {
      return this.right.add(value);
    } else {
      // si no existe derecha
      this.right = nuevoArbol;
      console.log("Agregado a la derecha");
    }
  } else if (value < this.value) {
    // voy a la izquierda

    if (this.left) {
      return this.left.add(value); // 18.add(15)
    } else {
      // si no existe izquierda
      this.left = nuevoArbol;
      console.log("Agregado a la izquierda");
    }
  } else {
    // Valores ===
    console.log("retornando null");
    return null;
  }
};

Arbol.prototype.log = function (recorrido) {
  // recorrido --> "inorder"
  if (recorrido === "inorder") {
    console.log(this.left.value); // izquierda
    console.log(this.value); // nodo
    console.log(this.right.value); // derecha}

  } else if (recorrido === "preorder") {
    console.log(this.value); // nodo
    console.log(this.left.value); // izquierda
    console.log(this.right.value); // derecha

  } else if (recorrido === "postorder") {
    console.log(this.left.value); // izquierda
    console.log(this.right.value); // derecha
    console.log(this.value); // nodo
  }

  // pregunto si donde estoy es el 25
  // si no es

  // return arbolDerecha.search(value)
};

const arbolito = new Arbol(20);
arbolito.add(19);
arbolito.add(25);
arbolito.add(18);
arbolito.add(20);

arbolito.search(25);

console.log(arbolito);
