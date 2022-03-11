// const st=String.prototype.po=function() {
    
// }
// console.dir(st);
// function nam(params) {
    
// }
// console.log(nam);
let u=String.prototype.yell = function () {
  console.log(this.toUpperCase());
};
console.log(u);

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


// function Ali(make, model,year) {
//     this.make=make
//     this.model=model
//     this.year=year
    
// }
// const car1=new Ali('spagti','zarmakaron',1300);
// console.log(car1);


// function Colour(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }


// Colour.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const colour1 = new Colour(40, 255, 60);
// console.log(colour1.rgb);





// function User(name, age) {
//   //this
// //   console.log(this);
//   this.name = name;
//   this.age = age;
// }

// let zahra = new User("zahra", 23);

// console.log(zahra);





//  function createUser(name, age) {
//   const user = {};
//   user.name = name;
//   user.age = age;

//   return user;
// }

// const mahya = createUser("mahya", 22);
// console.log(mahya);


//////////////////////////////////

//////////////////////////////////

// function Alien(name,tech) {

//     console.log('lllllll');
//     this.nam=name
//     this.te=tech
// }
// const alien1=new Alien('navin','js')
// const alien2 = new Alien("navin", "vs");
// alien1.te="iiiiiiiiiiiiii"
// console.dir(alien1);




///////////
   //CLASSES
//////////
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

///چرا داخل کلاس نمیتونیم لاگ بگیریم
// و حتما باید داخلش کانسترکتور بنویسیم
class  Rectangle{

    // constructor(username,email){
    //     this.usname=username
    //     this.emil=email
    // }
    // login(){
    //     return `welcome${usname}${this.emil}`;
    // }
}
const re1=new Rectangle("shekoofeh","shekoofeh.gmail.com")
console.log(Rectangle);