function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

function Stack() {
  this.array = [];
}

Stack.prototype.push = function (elemento) {
  this.array.push(elemento);
};

Stack.prototype.pop = function () {
  return this.array.pop();
};

Stack.prototype.size = function () {
  return this.array.length;
};

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    return undefined;
  }

  if (this.head.next === null) {
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head;

  if (nodoActual === null) {
    return null;
  }

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) {
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
};

LinkedList.prototype.size = function () {
  let count = 1;
  if (this.head === null) {
    return 0;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
      count++;
    }
  }
  return count;
};

function Node(valor) {
  this.value = valor;
  this.next = null;
}

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

module.exports = {
  Queue,
  Stack,
  Node,
  LinkedList,
  BinarySearchTree,
};

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {};

LinkedList.prototype.switchPosition = function (pos1, pos2) {
  if (this.size() < pos1 || this.size() < pos2) return false;
  let here = this.head;
  let aux = [];
  let count = 0;
  while (here) {
    if (count === pos1 || count === pos2) aux.push(here.value);
    here = here.next;
    count++;
  }
  here = this.head;
  count = 0;
  while (here) {
    if (count === pos1 || count === pos2) here.value = aux.pop();
    here = here.next;
    count++;
  }
  return true;
};

let list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log(list.size());
console.log(list.switchPosition(1, 3));
console.log(list);

let mergeLinkedLists = function (linkedList1, linkedList2) {
  let here = linkedList1.head;
  let here2 = linkedList2.head;
  let nEw = new LinkedList();
  while (true) {
    if (!here && !here2) break;
    if (here) {
      nEw.add(here.value);
      here = here.next;
    }
    if (here2) {
      nEw.add(here2.value);
      here2 = here2.next;
    }
  }
  return nEw;
};
let lista1 = new LinkedList();
let lista2 = new LinkedList();
lista1.add(1);
lista1.add(7);
lista1.add(20);
lista2.add(4);

console.log(lista1);
console.log(lista2);
let nueva = mergeLinkedLists(lista1, lista2);
console.log(nueva);
