/*function reverseString (str){
var strSplit = str.split("");
var reverseArr = strSplit.reverse();
var finishedStr = reverseArr.join("");
 console.log(finishedStr);
}

reverseString("tekst tekst tekst");*/

/*var arr = [1234, 7647, 9374, 3937];

function average(arr) {
  var start = 0;

  for (var i = 0; i < arr.length; i++) {
    start += arr[i];
  }
  return start/i;
}

average(arr);

console.log(average(arr)); */

/*function otto (str){
var string = str.toLocaleLowerCase().split(" ").join("").match(/[a-z0-9]+/g).join("");
var theSame = string.split("").reverse().join("");

return string === theSame ? console.log("true") : console.log("false");

}

otto ("1 eye For Of $ 1 eye."); //true or false*/

/*function toUppercase(str) {
  var string = str.toLocaleUpperCase();
  var arrString = string.split (" ");

for (var i=0; i < arrString.length; i++) {
  arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
}

return arrString.join(" ");

}
var sentence = "this is somE teXt to bE modified";
cosole.log(toUppercase(sentence));*/

/* greatestDivisorOfInt (a,b) {
  if (a < 2 || b < 2){
    return 1;
  }
}
*/

/*function greatestDivisorOfInt(a, b) {
  var divisor = 2
  var greatestDivisor = 1;

  if ( a < 2 || b < 2) {
    return 1;
  }
  while(a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b% divisor == 0){
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestDivisorOfInt (344, 84));*/

/*function finder (arr, sum) {
  var length = arr.length;
  var exist = false;

 for (var i = 0; i < length; i++) {
   for ( var j = i + 1; j < length; j++) {
    if(arr[i] + arr[j] == sum){
      return true;
    }
   }
 }
return false;
}

console.log(finder ([1, 2, 3, 4], 7));*/

function nonRepeatingChar( char * str ){
 int i, repeated = 0
 int len = strlen(str);
 for( i = 0; i < len; i++ )
 {
     repeated = 0;
     for( j = 0; j < len; j++ )
     {
         if( i != j && str[i] == str[j] ) {
             repeated = 1;
             break;
         }
     }

     if( repeated == 0 ) {
         return str[i];
     }
 }

 return '';
}

}
console.log (nonRepeatingChar(char*str));

nonRepeatingChar ("Kluczowa dla rozszerzonego algorytmu Euklidesa staje sie")
