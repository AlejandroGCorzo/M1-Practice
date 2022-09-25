//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//Examples:
//Input: 42145 Output: 54421
//
//Input: 145263 Output: 654321
//
//Input: 123456789 Output: 987654321
//
function descendingOrder(n) {
  let arr = String(n)
    .split("")
    .map((ne) => Number(ne));
  let arrNueva = [];
  let mayor = arr[0];
  let posición = 0;
  loop: for (let k = 0; k < arr.length; k++) {
    mayor = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
        posición = i;
      }
    }
    posición;
    mayor;
    arrNueva.push(mayor);
    arr[posición] = 0;
  }
  console.log(arr);
  arrNueva.join("");
  return Number(arrNueva.join(""));
}
console.log(descendingOrder(20423));

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//Note: a and b are not ordered!
//
//Examples (a, b) --> output (explanation)
//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)
//(0, 1) --> 1 (0 + 1 = 1)
//(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  if (a > b) {
    for (b; b <= a; b++) {
      sum += b;
    }
    return sum;
  }
  if (b > a) {
    for (a; a <= b; a++) {
      sum += a;
    }
    return sum;
  }
}
console.log(getSum(-1, 2));

//Digital root is the recursive sum of all the digits in a number.
//
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
//Examples
//    16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digital_root(n) {
  let result = String(n)
    .split("")
    .map((x) => Number(x))
    .reduce((x, n) => x + n);
  if (result > 9) return digital_root(result);
  return result;
}
console.log(digital_root(493193));

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
  let time = 0;
  let coordinatesY = 0;
  let coordinatesX = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      coordinatesY++;
      time++;
    }
    if (walk[i] === "s") {
      coordinatesY--;
      time++;
    }
    if (walk[i] === "e") {
      coordinatesX++;
      time++;
    }
    if (walk[i] === "w") {
      coordinatesX--;
      time++;
    }
  }
  // console.log(coordinatesY);
  // console.log(coordinatesX);
  // console.log(time);
  if (time === 10 && coordinatesX === 0 && coordinatesY === 0) return true;
  else return false;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      if (i === 0);
      else newString += " ";
      newString += string[i];
    } else newString += string[i];
  }
  return newString;
}
console.log(solution("SosUnaRanciaPedazoDePetesan"));

// n = t + 3, f = 1
// Going back to the formula above, our first term is 1 and each next term is the current term added by 3. Thus we have:

// First term: 1
// Second term: 1 + 3 = 4
// Third term: 4 + 3 = 7
// 7 + 3 = 10
// 13
// ... and so on.

// Task
// Your task is to create a function, recurrence(base, formula, term) where base is the base case or first term of the sequence, formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. For example:

// recurrence(1, n => n + 3, 4) === 10
// recurrence(3, n => 2 * n, 5) === 48
// Good luck :)

function recurrence(base, formula, term) {
  if (term === 1) return base;
  else return formula(recurrence(base, formula, term - 1));
}
console.log(recurrence(1, (n) => n + 3, 3));

// var myArray = [1, 42, 112, 32, 21]
// var max = Math.max.apply(null, myArray) //= 112
// That's too easy though. Let's replace the Math.max function with our own solution that uses recursion! Yay!

// Write a function called max that takes one argument, an array, and returns the maximum value of that array.

// Rules:

// You cannot use Math.max (duh!)
// You can only use const to declare any variables
// You cannot use any loops like for or while
// You cannot use any other argument than the one passed to the function
// If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
// You cannot use any Array.prototype methods like forEach, map, filter, or reduce
// Good luck!

// function max(array) {

//   if (array.length == 0) return -Infinity;
//   const curMax = max(array.slice(1));
//   return array[0] > curMax ? array[0] : curMax;

// }

function max(array) {
  if (array == 0) return -Infinity;
  if (array.length === 1) return array[0];
  const n = array.pop();
  const x = max(array);
  if (n > x) return n;
  return x;
}
console.log(max([1, 4, 8, 5, 9, 1]));

function max2(array) {
  if (array == 0) return -Infinity;
  let longitud = array.length - 1;
  let numeroMasGrande = 0;
  function mMax(arr, longitud) {
    if (longitud < 0) return;
    if (numeroMasGrande < array[longitud]) numeroMasGrande = array[longitud];
    mMax(arr, longitud - 1);
    return numeroMasGrande;
  }
  console.log(numeroMasGrande);
  return mMax(array, longitud);
}

console.log(max2([1, 42, 112, 32, 21]));

// Your Task
// You are on a set of stairs that are numbered 0 - 100 from top to bottom. You are given your starting stair number, a stride width (meaning how many stairs you step down at a time) and being walking down. Return an array containing every stair you step on, beginning from the lowest stair. Don't step below 0, it's Lava and you'll burn/fail the Kata.
// A test is in place to check for the presence of for/while to ensure recursion is used so avoid using these terms in your solution.

// If width is 0, clearly you're not going anywhere so please return an empty array.
function stepDown(stair, width) {
  if (width === 0) return [];
  let arr = [];
  function oneMoreTime(s, w) {
    arr.unshift(s);
    if (s < w) return s;
    return oneMoreTime(s - w, w);
  }
  oneMoreTime(stair, width);
  return arr;
}
console.log(stepDown(80, 15));

//

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

// LINKED LIST

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

LinkedList.prototype.print = function () {
  pointer = this.point;
  while (pointer.next != null) {
    console.log(pointer.data);
    pointer = pointer.next;
  }
  console.log(pointer.data);
};

function Node(valor) {
  this.value = valor;
  this.next = null;
}

// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]o
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]
LinkedList.prototype.reverseLinkedList = function () {
  let here = this.head;
  let array = [];
  while (here) {
    array.push(here.value);
    here = here.next;
  }
  this.head = null;
  for (let i = array.length - 1; i >= 0; i--) {
    linkedList.add(array[i]);
  }
};

linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(8);
linkedList.add(7);
linkedList.add(3);
linkedList.add(1);
console.log(linkedList);
console.log(linkedList.reverseLinkedList());
console.log(linkedList);

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

function anagrams(words, array) {
  words = words.split("").sort().join("");
  // let final = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (words === array[i].split("").sort().join("")) final.push(array[i]);
  // }
  return array
    .map((x) => x.split("").sort().join(""))
    .filter((x) => words === x);
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

let string = "hola";
console.log(string.split("").sort());

let array = [1, 8, 9, 4, 7];
console.log(array.sort((a, b) => b - a));

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
const liberia = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function toRoman(number) {
  let string = "";
  if (number / 1000 >= 1) {
    string += "M";
    return string += toRoman(number % 1000);
  }
  if (number / 500 >= 1) {
    string += "D";
    return string += toRoman(number % 500);
  }
  return string;
}

// const RomanNumerals = {
//   toRoman: (number) => {

//   },

//   fromRoman: 0,
// };
console.log(1500%1000)
console.log(toRoman(1500));
