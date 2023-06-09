/*Recapitulacion 
Recursion >>>> Funcion que se llama a si misma
    -Debe tener un nombre
    -Caso base (caso corte)
    -Necesita como minimo un parametro
    -Cuando la funcion se llama nuevamente el parametro debe ser diferente (Parametro modificado)

Stack >>>> LIFO (Last in first out >>> El ultimo que entra, sale primero)
    metodos => Push y pop

Queue >>>> FIFO (First in First out >>> EL primero en ENTRAR primero en SALIR)
    metodos => Push (Agrega valores) and Shift (Saca el primer valor agregado)

Set >>>> Es similar a un array (Pero retorna un objeto) y no permite datos repetidos o duplicados
        es una instancia nativa de JS */


/*Estructuras de datos II
-Lista enlazada
Consta de nodos interconectados. Estos nodos contienen un valor y una referencia al siguiente nodo.
Inicio >> (Dato/Puntero) >>> Dato/Puntero >>> Dato/Puntero >>> Null (Aqui se termina la lista, no mas elementos)
Nodo = (Dato/Puntero) como cajas seccionadas a la mitad (Es un objeto)
Dato >> puede ser cualquier cosa (numero, funcion, array, etc.)
Puntero >> va a conocer al siguiente dato dentro del siguiente nodo

Head va a ser una clase diferente (Contiene los demas nodos, si no hay head no hay lista)
Los nodos va a ser otra clase
*/

// Codigo
function LinkedList () { //<<<<<<<<<< Funcion constructora //Necesita tener un metodo para unir los nodos
  this.head = null
}

function Nodo(element) {
  this.value = element;
  this.next = null; // <<<< El "gancho" el siguiente nodo
}

LinkedList.prototype.add = function(element) { //Metodo para unir los nodos, 
  let nodo = new Nodo(element) //<<< con eso instanciamos cada vez que havemos "new Nodo" creamos un nuevo nodo
  let current = this.head // Este es el puntero

  if (!current) { // current === null //Aca entra solo para enganchar el primer nodo y no mas
    this.head = nodo
    return nodo
  }

  while(current.next !== null) { //SOlo entro aca si next NO ES NULL
    current = current.next
  }

  current.next = nodo //Nodo {value: 7, next: Node {value:2, next: null}}
  return nodo
}

let newList = new LinkedList ()
newList.add(5)
newList.add(7)
newList.add(6)
console.log(newList);
