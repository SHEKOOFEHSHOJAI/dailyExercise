/////bazi
const input = document.querySelector("input");
console.log(input);
let baziBtn = document.querySelector("#evenBtn");
console.log(baziBtn);
input.addEventListener("keydown", (e) => {
  console.log(e.code);
    switch (e.code) {
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowDown":
        console.log("down");
        break;

      case "ArrowLeft":
        console.log("left");
        break;
      case "ArrowRight":
        console.log("right");
        break;
      default:
        console.log(";)");
    }
});


const div=document.querySelector(".test")
div.classList.add("circle");
document.body.addEventListener("keydown",(e)=>{
   
    console.log(e);

})



