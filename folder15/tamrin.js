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

let time=3000;
  const daiycolor=(newcolor,daily,donex)=>{
      setTimeout(() => {
      document.body.style.backgroundColor=newcolor
      donex()
          
      }, daily);
  }
  daiycolor("green",time,()=>{
     daiycolor("green",time,()=>{
      daiycolor("green",time)
  }); 
  });