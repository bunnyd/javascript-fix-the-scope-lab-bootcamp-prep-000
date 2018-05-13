var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  myAnimal(animal)
  animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {

  // Feel free to move things around!
  const two = 2
  return n + two
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
  
}

function outerFunction() {
 var innerVariable = "I'm sort of a secret.";
 
 return function innerScope() {
   var inaccessible = "Nothing can touch me.";
 
   return innerVariable;
 }
}
var myScope = outerFunction();
 
// the stringified version of `innerScope()`
myScope;


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()


