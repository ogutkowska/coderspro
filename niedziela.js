//funkcja jako wartosc

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
console.log(foo);
