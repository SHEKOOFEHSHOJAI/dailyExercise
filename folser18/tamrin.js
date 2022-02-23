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