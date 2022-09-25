const { LinkedList } = require("./DS");

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. 
   Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null) return false;
  let here = this.head;
  let array = [];
  while (here) {
    array.push(here.value);
    here = here.next;
  }
  array.sort((a, b) => b - a);
  this.head = null;
  for (let i = 0; i < array.length; i++) {
    this.add(array[i]);
  }
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList,
};
