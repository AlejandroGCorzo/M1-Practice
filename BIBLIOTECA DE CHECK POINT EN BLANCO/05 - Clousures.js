/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
CLOUSURES;
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
/*Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */

//Contador closure:

function counter() {
  var nu = 0;
  return function () {
    return nu++;
  };
}

let contador = counter();
contador(); // 0
contador(); // 1
contador(); // 2
contador(); // 3

/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// closures CacheFunction:

const cb = function (x) {
  // el CB que pasan por test;
  return x * 2;
};

function cacheFunction(cb) {
  // la funcion en si;
  var objeto = {};
  return function (arg) {
    if (objeto.hasOwnProperty(arg)) {
      return objeto[arg];
    } else {
      objeto[arg] = cb(arg);
      return objeto[arg];
    }
  };
} // termina la funcion en si;

let usandoCache = cacheFunction(cb); //lo que hace el test;
usandoCache(10); //lo que hace el test;
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
  /* Tu codigo aqui */
  return function (num) {
    return num + numFijo;
  };
}

/*//////////////////////////////////////////////////////////////////////////////////////////////////*/

// Implementar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplos:
//   var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
//   var covidDetector = closureDetect(symptoms, 3);
//
//   var personOne = {
//     name: 'Franco',
//     age: 26,
//     symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
//   }
//
//   var personTwo = {
//     name: 'Toni',
//     age: 30,
//     symptoms: ['congestion', 'tiredness']
//   }
//
//   covidDetector(personOne); --> true
//   covidDetector(personTwo); --> false
//  [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
  return function (persona) {
    let contador = 0;
    for (let i = 0; i < persona.symptoms.length; i++) {
      if (symptoms.includes(persona.symptoms[i])) contador++;
      if (contador >= min) return true;
    }
    return false;
  };
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función mayorMenorOIgual que recibe un parámetro
// (numFijo) y que debe retornar otra función con otro (parametro)
// En caso de que la suma de ambos parámetros sea menor a 10 retorna un string --> "la suma es menor a 10",
// en caso de que sea mayor a 10 retorna un string --> "la suma es menor a 10"
// en caso de que sea igual a 10 retorna 10
// y si el parametro numFijo es igual a null o undefined debe retornar un arreglo vacio.

function mayorMenorOIgual(numFijo) {
  // Tu código aca:
  return function (num) {
    var total = numFijo + num;
    if (numFijo === null || numFijo === undefined) return [];
    if (total === 10) return 10;
    if (total > 10) return "la suma es mayor a 10";
    else if (total < 10) return "la suma es menor a 10";
  };
}

/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función passport que recibe como parámetro:
//  - Una edad mínima para que las personas puedan ingresar a un país
//  - El país en cuestión
// La función passport retorna una función isAllowed, la cual recibirá un arreglo de personas que quieren ingresar al país, y retornará un nuevo arreglo con los admitidos (aquellos que cumplan con la edad requerida).
function passport(minAge, country) {
  // Tu código aca:
  if (minAge < 18) {
    return false;
  }

  return function isAllowed(personnes) {
    var permitidos = [];
    for (let i in personnes) {
      if (
        personnes[i].age >= minAge &&
        personnes[i].allowed.includes(country)
      ) {
        permitidos.push(personnes[i]);
      }
    }
    if (permitidos.length == 0) {
      return false;
    } else {
      return permitidos;
    }
  };
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
  var contador = numFijo;
  var suma = function (elem) {
    contador = elem + numFijo;
    return contador;
  };
  return suma;
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////*/
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir
// un parametro y retornar dicho parametro elevado al parametro 'exp' de
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3);
// < 9
// > sqrt(4);
// < 16

function exponencial(exp) {
  return function (parametro) {
    return parametro ** exp;
  };
}
