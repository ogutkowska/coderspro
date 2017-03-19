/*// typy opakowujace

//string, number, boolean typy referencyjne ktorymi mozna sie poslugiwac jak obiektami

var name = 'Pawel';
var firstCharacter = name.charAt(0);
console.log(firstCharacter); // wyswietli pierwsza litere w stringu
//to co sie dzieje w tle
var name1 = 'Marcin' ;
var temporary = new String(name1);
var firstCharacter1 = temporary.charAt(0);
temporary = null;
console.log(firstCharacter1);

//
var name = "Grzesiek";
name.last = "Kowalski";
console.log(name.last); // undefined

var name2 = 'Zosia';
var temp = new String(name2);
temp.last = 'Kowalska';
temp = null;
var temp = new String(name2);
console.log(temp.last);//undefinded
temp = null;

//

var name3 = 'Ola';
var cout = 10;
var found = false;

console.log(name3 instanceof String); // false typeof true ale instance of false bo tylko na chwile zmienia instancje ale potem ja niszczy i wraca do typu prostego
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false*/


var name4 = new String ('Ola');
var count1 = new Number(10);
var found1 = new Boolean(false);

console.log(typeof name4);
console.log(typeof count1);
console.log(typeof found1);

var founded = new Boolean(false); // wyswietli pierwsze bo founded istnieje, wyswietli ze znalazł nie wazne ze argument jest false

if(founded) {
  console.log('I found a variable!');
}else {
  console.log("I haven't found a variable!");
}
