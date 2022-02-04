/////event
//  mouse events (MouseEvent(Opens in a new window)): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
//touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel
//keyboard events (KeyboardEvent(Opens in a new window)): keydown, keypress, keyup
// form events: focus, blur, change, submit
//window events: scroll, resize, hashchange, load, unload

let face=document.getElementById("face")
let mouseMove=()=>{
  let message = document.getElementById("message").textContent="moveee";  
}
face.addEventListener("mouseMove", mouseMove);

///we want click on button show hello shekoofeh
let button=document.getElementById("button")
let onButtonClick=function (params) {
    let name=document.getElementById("name").Value
    let message = document.getElementById("message").textContent="greet";
    let greet;
    let lang = document.getElementById("lang").Value;
    if(lang==="es"){
    greet="hola"+name;
    }
    else if (lang === "plt") {
      greet = "hola" + name;
    }
  
}
button.addEventListener("click", onButtonClick);

//preventDefault()    از رفتار پیشفرض جلوگیری میکند 




///Removing event listeners

var faceEl = document.getElementById("face");
var onFaceClick = function(e) {
    console.log("You clicked " + e.clientX + " , " + e.clientY);
};
faceEl.addEventListener("click", onFaceClick);
// later...
faceEl.removeEventListener("click", onFaceClick);




