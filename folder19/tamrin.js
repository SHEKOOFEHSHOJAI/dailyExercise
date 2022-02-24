//Iterate Over All Properties

function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");



//Add all of the own properties of beagle to the array ownProps.
// Add all of the prototype properties of Dog to the array prototypeProps.
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let be in beagle) {
  if (beagle.hasOwnProperty(be)) {
    ownProps.push(be);
  } else {
    prototypeProps.push(be);
  }
}





//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property,
// return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor == Dog) {
    return true;
  } else {
    return false;
  }
}