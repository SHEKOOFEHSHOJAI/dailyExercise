//Define a Constructor Function


function Bird() {
     this.name = "Albert";
 
  this.color = "blue";
  this.numLegs = 2;
}
const b=new Bird()
console.log(b);




function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
const terrier = new Dog("Bruce", "red");

//Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(12);
myHouse instanceof House;




function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

//Add the own properties of canary to the array ownProps.
let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}








//Add a numLegs property to the prototype of Dog
function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
//Dog.prototype.numLegs = 2;
console.log((Dog.prototype.numLegs = 2));