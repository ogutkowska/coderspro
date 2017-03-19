//Identyfikowanie typow referencyjnych

function add(a,b) {
  return a + b;
}

console.log(typeof add);

var item = [];
var obj = {};

console.log(item instanceof Array);//true
console.log(obj instanceof Object);//true
console.log(add instanceof Function);//true


console.log(item instanceof Object); // true bo tablica jest obiektem typy referencyjne dziedzicza po obiekcie

console.log(obj instanceof Array); //false
console.log (add instanceof Object); //true funkcja dziedziczy po obiekcie

console.log(Array.isArray(item)); // true, nowa metodajasno okresla czy jakis obiekt jest arrayem, dziala tylko dla arrayow
