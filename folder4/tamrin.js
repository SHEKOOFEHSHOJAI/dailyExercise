// const asgar = {
//   ram: 8,
//   hard: 128,
//   cpu: "core2",
// };
// const coputer=({ram,hard,cpu})=>`this is ram ${ram} this is hard${hard}and ${cpu}`;
//  console.log(coputer(asgar));

// const scoreOfRallyRace = [3500, 3799, 4000, 8000, 8500, 9000, 12000];
//  const [winner, ...others] = scoreOfRallyRace;
// let r=scoreOfRallyRace[0]=6;
// console.log(scoreOfRallyRace);

// const  passenger = {
//   drunk: false,
//   age: 20,
//   isDrivingLicence: true,
// };

// const { cylinder, passengers, ...others } = passenger;

// let val=passenger.cylinder = 4;
// console.log((others.door = 4));
// console.log(cylinder);

// const[first,...me]=["ali",4,6,90,"60"];
// const item=[...me]
// console.log(item)
// const item1 = { ...me };
// console.log(item1);

// const obj = {
//   ali: "dat",
//   null: "jafar",
// };
// console.log(obj['ali']);

const person = {
  firstName: "naser",
  lastName: "Gyllenhaal",
  age: 40,
  born: "italy",
};

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person["first" + "Name"]);

let firstName = "age";
// console.log(person[firstName]);

let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// function call(){
// roll()
// roll()
// roll();
// }
// function roll(){
//     const rol=(Math.random()*5)+1
//     console.log(rol)

// }
// call(roll)

///////////method
// const myMath = {
//     club:function(num){
//         return num*num* num;
//     }

// }

// console.log(myMath.club(5));

/////ECMA
// const obj={
//     squre(num){
//      return num*num*num
//     }
// }

// console.log(obj.squre(3))

/////////////////////////////quiz
/*
1- Define an array containing the 3 persons defined below.
2- Return an array of the person names (hint: use map).
3- Filter the persons to return an array with the person younger than 28 years old (hint: use filter).
*/

// let person1 = {
//   name: "Alice",
//   age: 25,
// };

// let person2 = {
//   name: "Bob",
//   age: 30,
// };

// let person3 = {
//   name: "John",
//   age: 20,
// };
// const personels=[person1,person2,person3];
//  let personNames=personels.map(()=>personels.name);
//  let personsYoungerThan28YearsOld =personels.filter(()=>personels.age<28)

const traine = {
  tom: 20,
  george: 17,
  abdul: 19,
};

for (const key in traine) {
  //  console.log(key);
  // if(traine[key]>17){
  //    console.log(`${key.toUpperCase()}: ${traine[key]}`);
  // }
}

// const  footbal={
//     name:"shekoofeh",
//     family:"shojai",
//     age:22

// }
// console.log(Object.keys(footbal));
// console.log(Object.values(footbal))
for (let i = 0; i < 5; i++) {
  console.log(`${i}--in shabi k migan shab nis`);
}
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

///////
// let prom=prompt("inter yotr pass")
// if(password!="aps"){
//   password=prompt(" deght konid")
// }

const test = [
  ["motahare", "anahid", "amirmostafa"],
  ["maryam", "amir", "mina"],
  ["fatemeh", "fereshte", "kian"],
  ["kosar", "mohammad", "yousof"],
  ["mohsen", "hoseyn ", "shaden"],
];
// test.forEach((elem) => {
//   console.log(elem);
//   // elem.forEach((ele)=> console.log(ele) )
// });

const airplane = [
  "      Sirvan     ",
  "      Zahra   ",
  "   Fatemeh   ",
  "Mohsen      ",
  "     Azam      ",
  "     Shirin      ",
];


// for(const i of airplane){
//   console.log(i.trim()) 
// }


//////eror
// let m=airplane.map(elem=>{
 
//   let b = elem.map((elem) => console.log(elem));
//   console.log(b)
  
// })
// console.log(m)


//////

let array = ["atena", "maryam", "deniz"];


// const arrayNametoUpperCase = (arr) => arr.map((i) => i.toUpperCase());
// console.log(arrayNametoUpperCase(array));

// array.map((x) => console.log(x));

// let ke = (te) => te.map((i) => console.log(i.toUpperCase()));
// ke(array)

// setTimeout(()=>{
//   console.log(Math.floor(Math.random()*10)+1   )         
// },1000);



// let timing = setInterval(() => {
//   return console.log(Math.floor(Math.random() * 10));
  
// }, 2000);

// let i=0;
// let interval=setInterval(() => {
//  console.log( i++)
//   if(i===5){
//     clearInterval(interval)
//   }
 
// }, 2000);


// let i = 0;
// const stopAbleInterval = setInterval(() => {
//   console.log(i++);
//   if (i === 5) {
//     clearInterval(stopAbleInterval);
//   }
// }, 2000);

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 18, 76];

// const isPass = exams.some(passScore => passScore >= 75);
// console.log("ooo"+isPass); 


// const evens = [2, 4, 6, 8];
// const mixes = [1, 4, 6, 8];
// const consequence = [1, 2, 3];


// let even = evens.every((number) => !(number % 2));
// console.log(even);



 const prices = [9.99, 1.5, 19.99, 49.99, 30.5];
// let p=0;
// for(let pric of prices){
// p += pric;
// }
// console.log(p)



//  let total=prices.reduce((reque, curent)=>{
// console.log("requr"+reque)
// console.log("curent"+curent)
// return reque+curent
//  });
//  console.log(total)

//  const evens = [2, 4, 6, 8];
//  const sumWithNew = evens.reduce((sum, num) =>{ 
//    console.log(sum)
//    console.log(num);
//    sum+=num,100
  
  
//   } );

//  console.log("i am sumWithNew" + sumWithNew);



// let dice1=Math.floor(Math.random()*6)+1
// let dice2=Math.floor(Math.random()*6)
// console.log(`dic1:${dice1} and  dice2:  ${dice2} and jame ${dice1+dice2}`)

// alert("hi gys")
// let age=prompt("inter your age");
//  console.log("age",typeof age)
//  let ageNum = parseInt(age);

//  console.log(ageNum, typeof ageNum);



// let yourName = prompt("please write your your name:");


// if (yourName.toUpperCase() === "SHEKOOFEH") {
//   console.log("Welcome SHEKOOFEH");
// }
// let password="jjjjj";
// if(password.length>3){
// if(password.indexOf(" ")===-1){
// console.log("ok")
// }
// else{
//   console.log("in space to pass")
// }


// }else{
//  console.log("kamtar  3")
// }



//////////////////////////////switch
// let date = new Date;
// let day = date.getDay();

// switch(day){
//   case 1:
//     console.log("mondey")
//     break;
//     case 2:
//       console.log("saturday")
//       break;
//       case 3:
//         console.log("friday")
//         break;
//     default:
//      console.log("end")
//     break;
// }





////////////////////////


let myFirstArray = [
  123,
  "Kosar",
  NaN,
  undefined,
  ["Benmyamin Eslami", 20],
  null,
  "hassan",
  true,
  false,
];


console.log(" inde  "+typeof myFirstArray[1][1]);

