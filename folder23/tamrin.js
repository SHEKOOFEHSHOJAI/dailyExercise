// const st=String.prototype.po=function() {
    
// }
// console.dir(st);
// function nam(params) {
    
// }
// console.log(nam);
// let u=String.prototype.yell = function () {
//   console.log(this.toUpperCase());
// };
// console.log(u);

// const arr = [1, 2, 3, 4];
// arr.sing = function () {
//   return console.log("hala lalay lalay hala lay lay");
// };
// console.log(arr);

// function make(username,email) {
//     const user={};
//     user.nam=username;
//     user.emailAdress=email;
//     user.login=function(){
//         const { nam, emailAdress } = this;
//         alert(`user named ${nam} has this email:
//           ${emailAdress}`); ;
//     }
//     return user
// }

// // console.log(user);
// const jasem = make("jasem", "jasem@gmail.com");
// console.log(jasem);


// function make(r, g, b) {
//   const color = {};
//   color.red = r;
//   color.green = g;
//   color.blue = b;
//   color.rgb = function () {
//     const { red, green, blue } = this;
//     console.log("okkkkkk");
//     return`rgb(${red},${green},${this.blue})`;
//   };
//   console.log(color);
//   return color;
//   // console.log(color);
// }
// let first = make(30, 40, 50);
// document.body.style.backgroundColor = make(30, 40, 50).rgb();
// first.rgb()


function Ali(make, model,year) {
    this.make=make
    this.model=model
    this.year=year
    
}
const car1=new Ali('spagti','zarmakaron',1300);
console.log(car1);