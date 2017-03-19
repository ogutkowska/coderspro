/*//funkcja jako wartosc

function sayHello () {
  console.log('Hi');
}

sayHello();
var sayHello2 = sayHello;

var numbers = [1, 45, 2, 4, 6, 78, 11]; //sortuje 1 11 2 3 4 45
console.log(numbers.sort());

var foo = numbers.sort(function (a, b)) { //sortuje po kolei
  return a - b;
});
console.log(foo);*/


//parametry funkcji

/*function show(value) {
  return value;
}

console.log (show('Hi')); //Hi
console.log (show('Hi', 34)) // Hi
console.log (show.length); // 1 arnosc funkcji*/


/*show = function() {
  return arguments[0];
}
console.log(show('Hello')); // Hello
console.log(show('Hello', 45));// Hello
console.log(show.length);// 0*/

/*function sum() {
  var result = 0;
  var len = arguments.length;
  var i=0;

  while (i< len) {
    result += arguments[i];
    i++;
  }
  return result;
}

console.log(sum(1,5));//6
console.log(sum(4,5,7));//16
console.log(sum(3));//3
console.log(sum());//0*/
