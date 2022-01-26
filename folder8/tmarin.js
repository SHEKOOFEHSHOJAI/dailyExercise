////////quiz made rainbow
const color=["red","violt","green","blue","yellow"];
let n=document.querySelectorAll('h1 span')
// let count=0;
// for (const iterator of n) {
//     console.log(n)
//     console.log(iterator.style.color = color[count]);
//     count++;
// }
n.forEach((ele,index)=>console.log( color[index]))