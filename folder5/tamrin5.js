// const color = ["red" , "yellow","green"];

//    let map= color.map((elem)=>{
//       let b = color[ Math.floor(Math.random() * color.length) + 1];
//  console.log(b)
//     })
// function nam(params) {
//       let b = params[Math.floor(Math.random() * color.length-1) + 1];
//       console.log(b);
//       if(b==="red"){
//           console.log("negtive"+color[0])
//       }
//       else if(b==="yellow"){
//          console.log("nachral")
//       }
//       else if(b==="green"){
//           console.log("posetive")
//       }

// }
// nam(color)


//////////////////////////////////////راه حل دوم

// let = [];
// const yellow = [
//   " Reply hazy, try again.",
//   "Ask again later.",
//   "Better not tell you now.",
//   "Cannot predict now.",
//   "Concentrate and ask agai",
// ];

// const red = [
//   " Don't count on it.",
//   "My reply is no.",
//   "My sources say no.",
//   "Outlook not sogood. ",
//   "Very doubtful.",
// ];
// const color = [yellow, red];

// let b = color[Math.floor(Math.random() * color.length - 1) + 1];

// function nam(params) {
//   if (b === yellow) {
//     let mp = color[0].map((elem) => console.log("negtive     " + elem));
//     // console.log(elem))
//   } else if (b === red) {
//     let mp = color[1].map((elem) => console.log("nachral     " + elem));
//   }
// }
// nam(b);





///////////////////////////////////////////////
const gemax=(a,b)=>Math.max(a,b);
let redu=[10,40].reduce(gemax)
console.log(redu)