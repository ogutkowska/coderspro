// modyfikacja this

cal()

function logNameAll (arg) {
  console.log(arg + ":" + this.name);

}

var person1 = {
  name: 'Peter'
};

var person2 = {
  name: 'Michel'
};

var name = 'Michelle';

logNameAll.call(this, 'global'); global: Michelle
logNameAll.call(this, 'person1'); // person1: Peter
logNameAll.call(this, 'person2'); // person2: Michelle w callu przekazujesz jeden parametr

//call modyfikuje this

logNameAll.apply (this, ['global']); //global Michelle w apply przezkazujesz tablice parametroe
logNameAll.apply(person1['person1']); // person1: peter
logNameAll.apply(person2['person1']); // person2:michel
