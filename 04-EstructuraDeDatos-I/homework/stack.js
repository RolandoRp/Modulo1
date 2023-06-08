class Stack {
    constructor() {
        this.data = [];
        // this.data = {}
    }
    add(value) {
        this.data.push(value);
    }
    remove() {
        var elemento = this.data.pop();
        return elemento;
    }
}

var pila = new Stack();
var pila2 = new Stack();

pila.add(5);
pila.add(6);
pila.add(10);
console.log(pila.remove()); // 10
console.log(pila); // 5,6
