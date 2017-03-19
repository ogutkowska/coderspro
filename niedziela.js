/*//obiekty roznica miedzy obiektem a klasa - obiekt to jest instancja klasy, funkcje w obiektach to metody, sposoby tworzenia:
var obj = newObject():
var obj1 = {};
var obj2 = Object.prototype.constructor

var obj1 = obj; //najpierw tworzony jest obiekt w pamieci komputera a potem wskaznik

obj = null; //garbage collection odmiecanie pamieci*/

//var obj = new Object();

//obj.name = "blabla"; //dodawanie wartosci do obiektu

//literaly obiektow i tablic

var car = {
  manufacturer: "Ford",
  model: "Mondeo"
};

var car1 = { //tak mozna ale raczej nie robimy tak
  "manufacturer origin": "Ford",
  model: "Mondeo"
};

var car2;
//drugi sposob, ale za pierwszym obiektem zazwyczaj robimy tak jak w tym pierwszym sposobem, ponizszej notacji uzywamy zeby odniesc sie do konretnego elementu a nie zeby dopisywac nowy klucz do obiektu
car2.manufacturer = "Fiat";
car2.model = "500";

//literał tabliczka

var arr =[ "red", "green", "blue"];
console.log(arr[1]);//odniesienie do green
