//przeciazenia (overloading)

/*function message (mes) {
  console.log(mes);

}

function message () {
  console.log('Default');// wyswietli default bo java wyswietla ostatnia funkcje zapomina o pierwszej wersji

}

message ('Hello')*/

/*var message = new Function('message', 'console.log(message)');

message = new Function('console.log("Default")');
message('Hello');*/

function message (message) {
  if(arguments.length === 0){
    message = 'Default';
  }
  console.log(message);
}
console.log(message('Hello')); // Hello
console.log(message()); // Default
