/*{
  var foo; //deklaracja zmiennych
var bar = "name";
//let x;  //przejmie role var
//const b; //constant - nie mozemy zmienic//

foo=4;
console.log(bar + foo);
} //blok kodu, mozna uzyc tej samej zmiennej bo bloki sa dla siebie niewidoczne
{
/*
Proste typy zmiennych
boolean - true albo false
number - licznu calkowite lub zmienno przecinkowe
string - zawiera jedna zmienna litere albo ciag znakow
null - typ pusty posiada jedna wartosc null
undefinded - tylko jedna wartosc undefined, nadawany automatycznie, typ nieokreslony, kazda zmienna bez przypisanej wartosci otrzymuje typ undefined, var x
*/

//var x = 4;
//console.log (typeof x); // wykrywanie z jakim typem zmiennej mamy do czynienia
//}

//zmienna typu prostego przechowuje wartosc nie wskaznik

//{
//var x = "blue" ;
//var y = x;
//console.log(x);
//console.log(y);

//x = "green";

//console.log(x);
//console.log(y);
//}

//var x = new Object(); //inicjowanie obiektu

//var x = {
//  "foo": 4, //przecinek nie srednik przy definiowaniu obiektu!
//  bar: function (){

//  }
//};

//x.foo //mozna tez x["foo"]

/*var obj1 = {
  foo:6
};
var obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1 = {
  foo: 9
};

console.log(obj1);
console.log(obj2);
*/

// typy referencyjne
// array - inicjowanie przez [] - literal
// date
// error
// function - () literal
//object - literal
// regexp - literal

/*var array = new Array("1,2,3");
var foo = {
  name: "John"
};
var array1 = [[1,2,3], 2, 3, foo];
console.log(array);
console.log(array1);
*/
//nie rozpoczynac nazw zmiennych od liczb, slasha,
/*
var numbers = new Function("value", "return value");//te dwa kody to to samo - pierwszej nie warto uzywac
var numbers1 = function(value) {
  return value;
};
console.log(numbers);
console.log(numbers1);
*/

//operatory
/*
x = 4  przypisania
x = x+ 1
x = x - 1
x = x * 1
x = x / 1
x = x % 1
x += 1
x -= 1
x ++ 1
x -- 1
y = --x
x ++
x --
y = --x
x *= y x = x*y
x/= y
x%= y

//operatory porownania

var x = 5;
x == 7; zgodnosc wartosci
x === 4; zgodnosc typu i wartosci

x!= 8 // nie rowna sie true

x!== 8 // false

>
<
>=
<=

// operatory logiczne

&& and
|| lub
!( x == y)



var a = 4;
var b = 6;

a == b ? console.log("tak") : console.log ("nie"); */
