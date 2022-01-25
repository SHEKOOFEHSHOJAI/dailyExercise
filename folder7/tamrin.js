// function doil(rand=5) {
//     let ran=Math.floor(Math.random()*rand)+1
//     console.log(ran);
// }
// doil()


//  function rollDieOld(numSides) {
//   if (numSides === undefined) {
    
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDieOld(40))



//  function greet(person, msg = "Goodbye", exp = "!!!!") {
//   return `${msg}, ${person} ${exp}`;
// }

// console.log(greet("Anahid", "XXXXXX"));

// const organiz=[
// {color:"red",name:"shekoofeh"},
// {
//     modelcar:13,

// }
// ]

// let orga=organiz.filter(({modelcar})=>modelcar>=10)

// console.log(orga);

const slect=document.querySelector('a[title="java"]')
const sle=document.querySelectorAll('p a');
sle.id="new";
sle.src="";
slect.setAttribute('id',slect)

sle.getAttribute("id")
console.log(window.getComputedStyle(sle));
const h2 = document.querySelector("h2");
h2.classList.add("new")
h2.setAttribute("id","sh")
h2.classList.remove("sh")
console.log(h2.classList.contains("sh"))


//////classlis toggle chek mikonad 
//mojod bodan ya nabodan if nabod  add return true else false
console.log(h2.classList.toggle("sh"));