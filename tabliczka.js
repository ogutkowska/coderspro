

/*
function table(){
document.write("<table border='1 px'>");

var i;
var j;

for ( i = 1; i<=10; i++)
{
document.write ("<tr><td>" + i + "</td>");

for (j = 1; j <=9; j++ )
{
  if ( j!=1 ) document.write("<td>" + i*j + "</td>");
}
}
document.write("</tr>");
}
document.write("</table>");
}*/

/*var table = document.getElementById('table');
var i=1, j=10;

for (i; i<j; i++){
  var row = table.insertRow(i-1);
  var k = 1, l = 10;
  for (k; k<l; k++){
    var cell = row.insertCell(k-1);
    cell.innerHTML = i * k

  }
}
function markRow(id){
  var el = document.querySelector("mark");
  var el1 = document.querySelectorAll("mark");
  var tab = document.getElementById(id);
  var td = tab.getElementByTagName("td");

  for (var x=0; x<td.length; x++) {
    td[x].addEventListener("mouseover", function(){
      this.parent.Node.classList.add("mark");
    });
  }
}
document.addEventListener("DOMContentLoaded", function(){markRow("tabelka");
});
var p = document.querySelector("#paragraf");

console.log(p.parentNode);
console.log(p.childNodea[1]);
console.log(p.childNode[1]);
console.log(p.childNodes[1].firstChild);
console.log(p.lastChild);

/*function foo(a) {
  var b = a*2;
  var c = 5;

  function bar(c) {
    console.log(a, b, c);

  }
  bar (b*3);
}
foo(2);*/

//console.log(a);

//a = 2;
//

function wstawPrzed(){
  var p = document.getElementById("before");
  var strong = p.firstChild  // pobieramy pierwsze dziecko p czyli strong
  var someNode = document.createTextNode("Jakis radomowy tekst");
  p.insertBefore(someNode, strong);
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("before").addEventListener("click", wstawPrzed)
});
