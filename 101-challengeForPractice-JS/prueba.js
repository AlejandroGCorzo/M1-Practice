// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(number) {
  if (number === 2 || number === 3) return true;
  if (number < 2 || number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i <= number; i += 6) {
    if (number % i === 0 || (number % i) + 2) return true;
  }
  return false;
}
console.log(primalityTest(2));
console.log(primalityTest(3));
console.log(primalityTest(5));
console.log(primalityTest(7));

console.log(primalityTest(4));
console.log(primalityTest(6));
console.log(primalityTest(8));
console.log(primalityTest(9));

console.log(primalityTest(-1));
console.log(primalityTest(0));
console.log(primalityTest(1));

console.log(primalityTest(97));
console.log(primalityTest(389));
console.log(primalityTest(947));
