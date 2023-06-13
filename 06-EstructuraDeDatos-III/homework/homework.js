'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
    Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.size = function() {
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();

  // let counter = 1

  // if(this.left) counter += this.left.size()
  // if(this.right) counter += this.right.size()
  // return counter
}

BinarySearchTree.prototype.insert = function(value) {
       if(value < this.value) {
       //Es menor >>> va a la izquierda(left)
     if(this.left) { //Solo entro y hago recursion si la rama izquierda esta ocupada
       //Tengo algo en la rama izquierda
         this.left.insert(value)
     }

     else { //No tengo nada en la rama izquierda
       this.left = new BinarySearchTree(value)
     }
   }

     else {
       //Es mayor >>> va a la derecha(right)
     if(this.right) {
         this.right.insert(value)
     }
     else {
         this.right = new BinarySearchTree(value)
     }
 }
}

BinarySearchTree.prototype.contains = function(value) {
   if(this.value === value) return true

   if(value > this.value){
    //Si entro aca va a la derecha porque es mayor
    if(this.right === null) return false
    return this.right.contains(value)
   }

   if(value < this.value){
    //Si entro aca va a la izquierda porque es menor
    if(this.left === null) return false
    return this.left.contains(value)
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido) {
   //pedido >>> 'in-order' => left, root, right
   //pedido >>> 'pre-order' =>
   //pedido >>> 'post-order' =>

   if(pedido === 'in-order' || pedido === undefined) {
    if(this.left) this.left.depthFirstForEach(cb, pedido);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb, pedido);
   }

   if(pedido === 'pre-order') {
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb, pedido);
    if(this.right) this.right.depthFirstForEach(cb, pedido);
   }

   if(pedido === 'post-order') {
    if(this.left) this.left.depthFirstForEach(cb, pedido);
    if(this.right) this.right.depthFirstForEach(cb, pedido);
    cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []) {
   if(this.left !== null){
    value.push(this.left)
   }

   if(this.right !== null){
    value.push(this.right)
   }

   cb(this.value)

   if(value.length > 0){
    value.shift().breadthFirstForEach(cb, value)
   }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
