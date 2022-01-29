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