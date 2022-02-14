const g = (url) => {
  return new Promise((resoleve, reject) => {
    const daily = Math.floor(Math.random() * 4500) + 500;
    console.log(daily);
    setTimeout(() => {
      if (daily > 4000) {
        reject("Connection timeout :(");
      } else {
        resoleve(`Here is your fake data from ${url}`);
      }
    }, daily);
  });
};

g("promise.com/page1")
  .then((data) => {
    console.log("page1", data);
    return g("promise.com/page1");
  })

  .then((data) => {
    console.log("page2", data);
    return g("promise.com/page2");
  })

  .then((data) => {
    console.log("page 3    =>", data);
  })

  .catch((err) => {
    console.error("oh noooo...", err);
  });

// let time=3000;
//   const daiycolor=(newcolor,daily,donex)=>{
//       setTimeout(() => {
//       document.body.style.backgroundColor=newcolor
//      donex && donex()
          
//       }, daily);
//   }
//   daiycolor("green",time,()=>{
//      daiycolor("green",time,()=>{
//       daiycolor("green",time)
//   }); 
//   });



//js2-2

function nameEl(params) {
    if (params===undifind) {
     params=7;
    }
    return Math.floor(Math.random()*params)+1;
}
nameEl()
////
const cats = ["Persian", "British", "Devon"];
const dogs = ["Greyhound", "Huski", "Saluki", "Retriever"];

const allpen=["this is ",...cats,...dogs,"the end"]
console.log(allpen);

console.log(..."hi  gus")



