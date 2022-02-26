//Iterate Over All Properties

// function Bird(name) {
//   this.name = name; //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");



//Add all of the own properties of beagle to the array ownProps.
// Add all of the prototype properties of Dog to the array prototypeProps.
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// // Only change code below this line
// for (let be in beagle) {
//   if (beagle.hasOwnProperty(be)) {
//     ownProps.push(be);
//   } else {
//     prototypeProps.push(be);
//   }
// }





//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property,
// return true if the candidate is a Dog, otherwise return false.
function Dog(name) {
  this.name = name;
}

// Only change code below this line

// function joinDogFraternity(candidate) {
//   if (candidate.constructor == Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function Bird(name) {
//   this.name = name;
// }

// // const B=new Bird()
// Bird.prototype.eat = function () {
//   console.log("nom nom nom");
// };


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function () {
      console.log("salam");
  },
  describe: () => {},
  
};
 console.log(Dog.eat());


 //Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that
 // created it. For example, here the Bird constructor creates the duck object:
 function Dog(name) {
   this.name = name;
 }

 let beagle = new Dog("Snoopy");

 // Only change code below this line
Dog.prototype.isPrototypeOf(beagle);






//qustion
//Modify the code to show the correct prototype chain

//tozihat
//The hasOwnProperty method is defined in Object.prototype, which can 
//be accessed by Bird.prototype, which can then be accessed by duck. This is 
//an example of the prototype chain. In this prototype chain, Bird is the 
//supertype for duck, while duck is the subtype. Object is a supertype for
// both Bird and duck. Object is a supertype for all 
//objects in JavaScript. Therefore, any object can use the hasOwnProperty method.



function Dmiog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);





///qustion :=>Use Object.create to make two instances of Animal named duck and beagle.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck=Object.create(Animal.prototype); // Change this line
let beagle=Object.create(Animal.prototype); // Change this line




//But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, 
//you can manually set the constructor property of Bird to the Bird object:
//  qustion:=>Fix the code so duck.constructor and beagle.constructor return their respective constructors.


function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Bird.prototype);

// Only change code below this line

let duck = new Bird();
let beagle = new Dog();
Bird.prototype.constructor = Bird;
duck.constructor;

Dog.prototype.constructor = Dog;
beagle.constructor;



////Add all necessary code so the Dog object inherits from Animal and 
//the Dog's prototype constructor is set to Dog. Then add a bark() method 
//to the Dog object so that beagle can both eat() 
//and bark(). The bark() method should print Woof! to the console.

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(" Woof!");
};

// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();




////
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Flying, wooosh!");
  };
};
glideMixin(bird);
glideMixin(boat); 




//Understand the Immediately Invoked Function Expression (IIFE)
(() => {
  console.log("A cozy nest is ready");
})();





/////////////////////////////////

// es6

/////////////////////////////////



