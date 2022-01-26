////////quiz made rainbow
const color=["red","violt","green","blue","yellow"];
let n=document.querySelectorAll('h1 span')
// let count=0;
// for (const iterator of n) {
//     console.log(n)
//     console.log(iterator.style.color = color[count]);
//     count++;
// }


////foreach
// n.forEach((ele,index)=>console.log(ele.style.color= color[index]))


////map  becuse map give array use the array.form
let mp=Array.from(n).map((ele)=>console.log(ele))
console.log(mp);