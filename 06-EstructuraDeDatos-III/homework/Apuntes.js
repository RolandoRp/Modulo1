/* 
ARBOLES
*/
function BinarySearchTree(value) {
    this.root = value
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.insert = function(value) {
    if(value < this.root) {
            //Es menor >>> va a la izquierda(left)
        if(this.left) { //Solo entro y hago recursion si la rama izquierda esta ocupada
            //Tengo algo en la rama izquierda

            this.left.insert(value)
        }
        else { //No tengo nada en la rama izquierda
            this.left = new BinarySearchTree(value)
        }
    }

    else if(value > this.root) {
        //Es mayor >>> va a la derecha(right)
        if(this.right) {
            this.right.insert(value)
        }
        else {
            this.right = new BinarySearchTree(value)
        }
    }
}

const abrolito = new BinarySearchTree(5)


/*
RECORRIDOS
Breadth First Search >> Explora los nodos mas cercanos al nodo raiz y luego se expande a nodos cada vez mas lejanos en niveles sucesivos
Depth First Search Inorder >> Explora los nodos del subarbol izquierdo, luego el nodo actual y finalmente los nodos del subarbol derecho.
Depth First Search Preorder >> Explora el nodo actual, luego los nodos del subarbol izquierdo y finalmente los nodos del subarbol derecho.
Depth First Search Postorder >> Explora los nodos del subarbol izquierdo, luego los nodos del subarbol derecho y finalmente el nodo actual.
*/