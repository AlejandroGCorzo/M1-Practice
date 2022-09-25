// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola

var controlAcces = function (queue, event) {
  // Tu código aca:
  let participantes = [];
  let ticketTomorrow = [];

  while (queue.size()) {
    let persona = queue.dequeue();

    if (
      persona.age >= 18 &&
      persona.ticket.event === event &&
      !ticketTomorrow.includes(persona.ticket.number)
    ) {
      participantes.push(persona.fullname);
      ticketTomorrow.push(persona.ticket.number);
    }
  }
  return participantes;
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.

var cardGame = function (mazoUserA, mazoUserB) {
  let mazoA = mazoUserA.array;
  let mazoB = mazoUserB.array;
  while (mazoA.length && mazoB.length) {
    if (mazoA[0] > mazoB[0]) {
      mazoA.push(mazoA.shift());
      mazoA.push(mazoB.shift());
    }
    if (mazoA[0] < mazoB[0]) {
      mazoB.push(mazoB.shift());
      mazoB.push(mazoA.shift());
    }
    if (mazoA[0] == mazoB[0]) {
      mazoA.shift();
      mazoB.shift();
    }
  }
  if (!mazoA.length && !mazoB.length) return "Game tie!";
  if (!mazoA.length) return "B wins!";
  if (!mazoB.length) return "A wins!";
};
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.
function cardGame(playerOneCards, playerTwoCards) {
  // Tu código aca:
  let castillo1 = 100;
  let castillo2 = 100;
  while (castillo1 > 0 && castillo2 > 0) {
    let ataque1 = playerOneCards.dequeue();
    let defensa1 = playerOneCards.dequeue();
    let ataque2 = playerTwoCards.dequeue();
    let defensa2 = playerTwoCards.dequeue();
    let ataqueC1 = defensa2.defense - ataque1.attack;
    let ataqueC2 = defensa1.defense - ataque2.attack;
    if (ataqueC1 < 0) castillo2 = +ataqueC1;
    if (ataqueC2 < 0) castillo1 = +ataqueC2;
  }
  console.log();
  if (castillo1 <= 0) return "PLAYER TWO";
  if (castillo2 <= 0) return "PLAYER ONE";

  if (castillo1 > castillo2) return "PLAYER ONE";
  if (castillo1 === castillo2) return "TIE";
  if (castillo1 < castillo2) return "PLAYER TWO";
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
/*Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
Ejemplo:
- queueOne: [7,3,5]
- queueTwo: [2,4,6]
mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  var contenedor = [];
  let newQueue = new Queue();
  while(queueOne.size() !== 0 || queueTwo.size() !== 0) {
  queueOne.dequeue()
  }

  newQueue.enqueue(queueOne.dequeue())
  }
  //for (let i = 0; i < queueOne.queueTree.length; i++) {
    contenedor.push(queueOne[i]);
  }
*/
// Tu código aca:
var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  let resultado = new Queue();
  let arr1 = queueOne.array;
  let arr2 = queueTwo.array;
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if (i < arr1.length) resultado.enqueue(arr1[i]);
    if (i < arr2.length) resultado.enqueue(arr2[i]);
  }
  return resultado;
};
