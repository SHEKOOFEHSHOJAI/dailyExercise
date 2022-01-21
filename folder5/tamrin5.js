let =[]
const yellow=[" Reply hazy, try again.","Ask again later."
,"Better not tell you now.","Cannot predict now.","Concentrate and ask agai"];



 const red=[" Don't count on it.","My reply is no.","My sources say no."
 ,"Outlook not so good.","Very doubtful."]




const color = [ red, yellow];
   
    
//    let map= color.map((elem)=>{
//       let b = color[ Math.floor(Math.random() * color.length) + 1];   
//  console.log(b)
//     })
    function nam(params) {
          let b = params[Math.floor(Math.random() * color.length-1) + 1];
          console.log(b);
          if(b==="red"){
              console.log("negtive"+color[0])
          }
          else if(b==="yellow"){
             console.log("nachral")
          }
          else if(b==="green"){
              console.log("posetive")
          }
     
    }
    nam(color)