const numbers = [2, 4, 6, 7, 8, 9];
// numbers.push(12)
// console.log(numbers);
// numbers.splice(1, 0, "Feb").slice(2,4);
// console.log(numbers)

let n = numbers.slice(2);
console.log(n);

const animals = [1, 2, 3, 4, 5];

console.log(animals.slice(3, 5));

// let laptop = {
//   brand: "Lenovo",
//   screenSize: 13,
//   isTouchscreen: true,
//   colors: ["spaceGray", "black", "white"],
//   spec: {
//     owner: "vahid",
//     age: 24,
//     height: undefined,
//   },
// };

// console.log(laptop.brand)
// console.log(laptop["spec"]["owner"]);
// console.log(laptop["spec"]["age"]);
// console.log(laptop.colors[1][3]);

// const mystry="answer"
// let inverseOfPI=12;
// const ali={
   
//      d1:()=>{},//arrow
//      [mystry] : 21,
//     inverseOfPI
// }

// console.log(ali.inverseOfPI);
// console.log(ali[mystry]); 
//  console.log(ali.answer)
//  ;

     
//  console.log(ali[mystry]);
 



 //////
 const test={
     jasem:()=>{
         console.log("this is arrow",this)
        

         
     },
   jasem1: function(){
      
           console.log("this is jasem1",this)
      
       
   } , 
   jasem2:function(){
 console.log("this is jasem2",this)
   }
 }
//  console.log(test.jasem())
//  console.log(test.jasem1())
//  console.log(test.jasem2())


//////destructuring
// const rol=(max=6)=>{
// let rand=Math.floor(Math.random()*max)+1
// return console.log(rand)
// }

// rol()
//varable destucture
const{IP ,random, e,max}=Math;


console.log(max(1,2,3));
//Array destuctureing
const[first,sec,thid]=[12,13,14];
console.log(first)