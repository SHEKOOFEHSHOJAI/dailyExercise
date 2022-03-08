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


class Car {
  constructor() {
    console.log("This is a car");
  }
}

class Tesla extends Car {
  constructor() {
    console.log("This is a Tesla");
  }
}


const myCar = new Tesla();
console.log(myACar);