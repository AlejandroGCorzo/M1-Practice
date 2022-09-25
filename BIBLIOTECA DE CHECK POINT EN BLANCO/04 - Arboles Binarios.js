/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// ARBOLES BINARIOS
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function (array) {
  /* Tu codigo aqui */
  let nuevoArbol = new BinarySearchTree(array[0]);

  for (let i = 1; i < array.length; i++) {
    nuevoArbol.insert(array[i]);
  }
  return nuevoArbol;
};

// ---------------

/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]

var binarySearch = function (array, elemento) {
  /* Tu codigo aqui */
  let izquierda = 0;
  let derecha = array.length - 1;
  let centro;
  let encontrado = false;

  while (izquierda <= derecha && !encontrado) {
    centro = Math.floor((izquierda + derecha) / 2);
    if (array[centro] === elemento) {
      encontrado = true;
    } else if (array[centro] < elemento) {
      izquierda = centro + 1;
    } else {
      derecha = centro - 1;
    }
  }
  if (encontrado) {
    return centro;
  } else {
    return -1;
  }
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]

// var binarySearch = function (array, elemento)
/* Tu codigo aqui */
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === elemento) {
//       return array.indexOf(array[i]);
//     } else {
//       return -1;
//     }
//   }

//
var binarySearch = function (array, target) {
  if (array.includes(target)) {
    return array.indexOf(target);
  }
  let temp = Math.floor(array.length / 2);
  if (array[temp] === target) {
    return array[temp];
  }
  if (array[temp] < target && array.length > 1) {
    return binarySearch(array.slice(temp), target);
  }
  if (array[temp] > target && array.length > 1) {
    return binarySearch(array.slice(0, temp), target);
  }
  return -1;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar la función height dentro del prototype de BinarySearchTree que debe devolver la "altura"
// máxima del arbol recibido por parámetro.
// Ejemplo:
//             16             ---> Nivel 1
//          /      \
//        6         23        ---> Nivel 2
//      /  \       /   \
//     2    14    17    31    ---> Nivel 3
//      \
//       5                    ---> Nivel 4
// Este arbol tiene una altura de 4
// PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max

BinarySearchTree.prototype.height = function () {
  // Tu código aca:
  const altura = [];
  if (!this) {
    return altura;
  }
  const arbol = [this];
  while (arbol.length) {
    const arbolargo = arbol.length;
    const piso = [];
    for (let i = 0; i < arbolargo; i++) {
      const node = arbol.shift();
      if (node.left) {
        arbol.push(node.left);
      }
      if (node.right) {
        arbol.push(node.right);
      }
      piso.push(node.value);
    }
    altura.push(piso);
  }
  return altura.length;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

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

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
  if (this.right.right) return this.right.searchMaxTwo();
  else {
    return [this.right.value, this.value];
  }
};
// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado
//www.linkedin.com/in/maximiliano-giagnorio

BinarySearchTree.prototype.insertWord = function (palabra) {
  // Tu código acá
  if (palabra.length == 0 || this.value.length == palabra.length) return false;

  if (palabra.length < this.value.length) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(palabra);
      this.left = newTree;
    } else {
      this.left.insertWord(palabra);
    }
  } else if (palabra.length > this.value.length) {
    if (this.right === null) {
      var newTree = new BinarySearchTree(palabra);
      this.right = newTree;
    } else {
      this.right.insertWord(palabra);
    }
  }
  return palabra;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar la función searchMin que busque en nuestro arbol binario, el valor minimo.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
//  Debería retornarnos 2
BinarySearchTree.prototype.searchMin = function () {
  let node = this;
  let minimo = function (node) {
    if (!node.left) return node.value;
    else {
      return minimo(node.left);
    }
  };
  return minimo(node);
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función createBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree.
// Ejemplo:
//    - Array[16,6,23,2,17,31,14,5];
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
function createBST(array) {
  // Tu código aca:
  let arbol = new BinarySearchTree(array[0]);
  for (let i = 1; i < array.length; i++) {
    arbol.insert(array[i]);
  }
  return arbol;
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Implementar el método sum dentro del prototype de BinarySearchTree
que debe retornar la suma total de los valores dentro de cada nodo del arbol
*/
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let contador = this.value;
  if (this.left !== null) contador += this.left.sum();
  if (this.right !== null) contador += this.right.sum();
  return contador;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function (array) {
  /* Tu codigo aqui */

  this.value = array[0];
  this.right = null;
  this.left = null;

  BinarySearchTree.prototype.insert = function (array) {
    if (this.value > array) {
      if (this.left === null) this.left = new BinarySearchTree(array);
      else this.left.insert(array);
    } else if (this.value < array) {
      if (this.right === null) this.right = new BinarySearchTree(array);
      else this.right.insert(array);
    }
  };
  return generateBST;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
