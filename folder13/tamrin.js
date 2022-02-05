/////bazi
// const input = document.querySelector("input");
// console.log(input);
// let baziBtn = document.querySelector("#evenBtn");
// console.log(baziBtn);
// input.addEventListener("keydown", (e) => {
//   console.log(e.code);
//     switch (e.code) {
//       case "ArrowUp":
//         console.log("up");
//         break;
//       case "ArrowDown":
//         console.log("down");
//         break;

//       case "ArrowLeft":
//         console.log("left");
//         break;
//       case "ArrowRight":
//         console.log("right");
//         break;
//       default:
//         console.log(";)");
//     }
// });


// const div=document.querySelector(".test")
// div.classList.add("circle");
//  let up = 50;
//  let left = 50;
// document.body.addEventListener("keydown",(e)=>{
  

//    switch (e.code) {
//      case "ArrowUp":
//        console.log((div.style.top= `${up--}px`));
//        break;

//      case "ArrowDown":
//        console.log((div.style.top=`${up++}px`));
//        break;

//      case "ArrowLeft":
//        console.log((div.style.left=`${up--}px`));
//        break;
//      case "ArrowRight":
//        console.log((div.style.left = `${up++}px`));
//        break;
//      default:
//        console.log(";)");
//    }

// })


///////made tiket


const form = document.querySelector("#tweetForm");
const ul = document.querySelector("#tweets");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
//   console.log(form.elements[0].value);
//id
 // console.log(form.username.value);
  //name
 // console.log(form.elements.username.value);
 const inputUserName=e.target.username.value;
  const inputtweet = e.target.tweet.value;

//   console.log(inputtweet, inputtweet);

   if (!inputUserName || !inputtweet) {
       alert("lotfan khali nabashad")
   }
 
     addtweet(inputUserName, inputtweet);
})



const addtweet = (username, tweet) => {
  const li = document.createElement("li");
  const b = document.createElement("b");

//   b.innerText = inputUserName;
//   li.innerText = inputtweet;

b.append(username);
  li.append(b, ` - ${tweet}`);
  ul.append(li);
};