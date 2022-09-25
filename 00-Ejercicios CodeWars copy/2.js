//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let newStrArr = string.split('');
  let isIt = 0;
  let abc = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  for (let i = 0; i < abc.length; i++) {
    isIt = 0;
    for (let k = 0; k < newStrArr.length; k++) {
      if (abc[i] == newStrArr[k]) isIt = 1;

      if (typeof newStrArr[k] == 'number') isIt = 1;
    }
    if (isIt === 0) return false;
  }
  if (isIt === 1) return true;
}
console.log(isPangram('This is not a pangram.'));

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

function tipologiasSeparadas(arr) {
  // Tu código aquí:
  if (!arr.length) return 'Tipologias inexistentes';
  let nonRepet = [];
  let i = 0;
  while (!nonRepet.includes(arr[i]) && i < arr.length) {
    nonRepet.push(arr[i]);
    i++;
  }
  if (i === arr.length) return 'No hay tipologias repetidas';

  console.log(arr.length);
  console.log(arr[8]);
  let tipolgListas = new Stack();
  let reZagados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) reZagados.push(arr[i]);
    else tipolgListas.push(arr[i]);
  }
  // rezagado [14, 5]
  // lista    [14, 2, 8, 5, 3, 1]

  for (let i = 0; i < reZagados.length; i++) {
    tipolgListas.push(reZagados[i]);
  }
  return tipolgListas;
}
console.log(tipologiasSeparadas([14, 14, 2, 8, 5, 5, 3, 1]));

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
    if (typeof arg === 'function') {
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

function Node(valor) {
  this.value = valor;
  this.next = null;
}

//  🟢 Retornar una nueva lista a partir de los índices provistos
//  🟢 Los valores que coincidan con los indices no deben ser incluidos
//  🟢 Si ninguno de los índices se encuentra en la lista, retornar false

LinkedList.prototype.sliceRooms = function (firstIndex, secondIndex) {
  // Tu código aquí:
  let leList = new LinkedList();
  let current = this.head;
  let auxFirst = false;
  let auxSecond = false;
  if (this.search(firstIndex) === null || this.search(secondIndex) === null)
    return false;

  current = this.head;
  while (current) {
    if (current.value === firstIndex) break;
    current = current.next;
  }
  //----> current.value === first index
  while (current.next) {
    current = current.next;
    if (current.value !== secondIndex) leList.add(current.value);
    if (current.value === secondIndex) break;
  }
  return leList;
};

const list = new LinkedList();
list.add('Cocina');
list.add('Dormitorio');
list.add('Baño');
list.add('Living');
list.add('Garage');
console.log(list.sliceRooms('Cocisna', 'Living'));

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

BinarySearchTree.prototype.spotHousePrices = function (num, arr = []) {
  // Tu código aquí:
  if (this.value > num) arr.push(this.value);
  if (this.left) {
    this.left.spotHousePrices(num, arr);
  }
  if (this.right) {
    this.right.spotHousePrices(num, arr);
  }
  return arr;
  // cb(this.value);
  // if (this.left) {
  //   this.left.depthFirstForEach(cb, typeOrder);
  // }
  // if (this.right) {
  //   this.right.depthFirstForEach(cb, typeOrder);
  // }
};

const housePrices = new BinarySearchTree(6);
housePrices.insert(4);
housePrices.insert(8);
housePrices.insert(3);
housePrices.insert(5);
housePrices.insert(7);
housePrices.insert(9);
console.log(housePrices.spotHousePrices(6, []));
console.log(housePrices.spotHousePrices(4, []));
console.log(housePrices.spotHousePrices(12, []));
console.log(housePrices.spotHousePrices(1, []));
