 
 //Ajxs
 
//  document.querySelector("#button").addEventListener("click",loadData)
//     //made shy
   

//     function loadData() {
      
//          const xhr = new XMLHttpRequest();
//          //open rqust

//          xhr.open("GET", "data.text", true);

//          ///load

//         xhr.onload = function () {  
//            if (this.status === 200) {
//              document.querySelector(
//                "#output"
//              ).innerHTML = `<h1>${this.responseText}</h1>`;
//              console.log("ok");
//            }
//          }
//          xhr.send();



//     }


    ////////////////////////////////////

    ///////////////////////////////////

   function piza() {
     return new Promise((risolve,reject)=>{
         if(true){
           risolve("piza is ready")
         }
         else{
           reject("sorry we don't have piza")
         }
     })
    }

    function soda() {
    return new Promise((risolve,reject)=>{

      if (false) {
        risolve("soda is ready");
      }
      
      else {
        reject("sorry we don't have soda");
      }


    })

      
    }
    piza().then(msg=>{
      console.log(msg);
      return soda()
    }).then(msg=>{
      console.log(msg);
    }).catch(error=>{
      console.log(error);
    })


    