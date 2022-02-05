const v2=document.getElementById("v2")
function scr(params) {
    console.log("hover");
}
// v2.onmouseleave=scr

//  v2.onmousedown = scr;
//  v2.onmouseover = scr;
//   v2.onmouseenter = scr;
//  v2.onmousemove = scr;

// const height = document.getElementById("height");
// const width = document.getElementById("width");
// function name(params) {
//     console.log(window);
//     width.textContent=window.innerWidth
// }
// window.addEventListener("resize",name)




////////////random color

// const clickEl = document.querySelector("#click_me");
// console.log(clickEl);
// const Welcome = document.querySelector("#Welcome");

function randomColor(params) {
    console.log("click");
    const r=Math.floor(Math.random()*255)
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(`${g} ${r} ${b}`);
    return `rgb(${r} ${g} ${b})`
}

//  clickEl.addEventListener("click",()=>{
//    document.body.style.backgroundColor=randomColor()  
//  }); 



/////random color btn


// let btn = document.getElementsByTagName("button");
// console.log(btn);
// for (const iterator of btn) {
//   console.log(iterator);

//      iterator.addEventListener("click", (ele) => {
//      console.log(ele);
//      iterator.style.backgroundColor = randomColor();
//      iterator.style.color = randomColor();
     
//     });
// }



