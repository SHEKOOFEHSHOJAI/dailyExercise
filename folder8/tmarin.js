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
// let mp=Array.from(n).map((ele,index)=>console.log(ele.style.color=color[index]))
// console.log(mp);


////////
// let mp = Array.from(n).map(({style}, index) =>
//   console.log((style.color = color[index]))
// );
// console.log(mp);


//////////////made 100button
for (let i = 1; i <=100; i++) {
    const button = document.createElement("button")
    button.textContent=`i am button ${i}`
    button.style.backgroundColor="red";
    button.style.borderRadius="8px"
    button.style.borderLeft="10px"
    button.style.margin="4px"
   
  document.body.appendChild(button) 
 
    button.onclick=(()=> button.style.backgroundColor="blue")
}
//  

//////////remove element
// const a = document.querySelector("a");
// let prent = a.parentElement;
// prent.removeChild(a);
// console.log(prent);


////addeventlistener=(event,function)

button.addEventListener("dbclick",()=>console.log("click me"))
