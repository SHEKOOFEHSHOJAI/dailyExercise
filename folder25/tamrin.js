// class user{
//     constructor(usename,email){
//         this.usern=usename
//         this.email=email
//         console.log("This is a car");

//     }
// }

// class sirvan extends user{
//     constructor(){
//         // super(usename, email);
//         // this.title=title
//         console.log("this is tas");
//     }
    
// }
// const person1 = new sirvan("kazem", "kazem@email.com");
// console.log(person1);
//https://www.aparat.com/v/JPxr2/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%85%D8%AA%D8%AF_super_%D8%AF%D8%B1_%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA


// class Car {
//   constructor() {
//     console.log("This is a car");
//   }
// }

// class Tesla extends Car {
//   constructor() {
//       super();
//     console.log("This is a Tesla");
//   }
// }


// const myCar = new Tesla();
// console.log(myACar);

////////////////////////////

////////////////////////////
// class Car {
//   constructor() {
//     console.log("This is a car");
//   }
// }
// const myCar = new Car();

///result
////'This is a car'

//این خودش ابجکته  چرا باید با کانستراکتور ی ابجکت جدید درونش ساخت
// class pet{
//     constructor(name,age){
//        this.na=name
//        this.age=age

//     }
//     eat(){
//         console.log("heelo");
//         return `${this.na} is eating`
//     }
// }
//  class cat extends pet {
//    constructor(name, livesleft = 22) {
//      super(name);
//      this.livesleft = livesleft;
//    }
//    meow() {
//      return "MEOWWW!!!";
//    }
//  }
// const eat = new cat("pishi", 3,9);
// console.log(eat);



/////////////////////چرا اینجاعدد 9 بهش داده نمیشه و مقدار اندیفاین است مقدار سن
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
    
//   }

//   eat() {
//     return `${this.name} is eating!`;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, livesLeft = 9) {
//     super(name, age);
//     this.livesLeft = livesLeft;
//   }
//   meow() {
//     return "MEOWWW!!!";
//   }
// }

// const gorbe = new Cat("pishi", 3);
// console.log(gorbe);








/////////////////////////////////


/////////////////////////////////



// class pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     return `${this.name} is eating!`;
//   }
// }




// class cat extends pet {
//   constructor(name, age,livesLeft = 9) {
//     super(name, age, livesLeft);
//     this.livesLeft = livesLeft;
//   }
//   play() {
//     return `${this.livesLeft} lives left`;
//   }
// }


// // const p=new cat("shekoofeh:)",
// // "shekoofehshojai@gmail.com")
//  const rex = new cat("rex", 3, 5);
// console.log(rex.eat());



///////////////////////////////////////////

String.prototype.khandeh = () => alert("khkhkhkhkhkhkhkhkhkh....");
const cat = "Blue";
cat.khandeh();
console.log(String);

const arr=[1,2,3,45]
arr.sing = function () {
  return console.log("hala lalay lalay hala lay lay");
};
console.log(arr);









