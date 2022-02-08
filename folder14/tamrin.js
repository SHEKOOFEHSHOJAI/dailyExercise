// const delay=(newColor,dealy) =>{
// setTimeout(()=>{
// document.body.style.backgroundColor = newColor;
// },dealy)
// };
// delay("red",2000)
// delay("green", 3000);
// delay("yellow", 4000);

// const fakerequst=(url,sucses,fail)=>{
//     const daily =Math.floor(Math.random()*4500)+500;
//     setTimeout(()=>{
//         if (daily>4000){
//             fail("coloction time out")
//         }
//         else{
//             sucses("here is your fak")
//         }
//     })
//     console.log(daily);
// }
//  fakerequst("promis.com")
//  .then(data=>{
//      console.log("page1=>");
//  })





let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  colors: ["spaceGray", "black", "white"],
  spec:{
    owner: 'vahid' , 
    age: 24,
    height: undefined
  }
}

console.log(laptop["brand"])
console.log(laptop.spec.owner);
console.log(laptop["spec"]["age"]);
console.log(laptop["colors"][1]);
console.log();






const ali={
    nameFamiy:"naderi",
    age:12,
    from:"iran"
}
const {nameFamiy,age,from}=ali
console.log();