// document.querySelector("button").addEventListener("click", local);

// function local() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "data.text", true);

//   xhr.onload = function name() {
//     console.log(this.status);
//     if (this.status === 200) {
      
//       const h1 = (document.createElement("h1").textContent = this.responseText);
//       const div = document.querySelector("output");
//       div.append(h1);
//     }
//   };
//   xhr.send();
// }


 document.querySelector("#button").addEventListener("click",loadData)
    //made shy
   

    function loadData() {
      
         const xhr = new XMLHttpRequest();
         //open rqust

         xhr.open("GET", "data.tex", true);

         ///load

        xhr.onload = function () {  
          console.log(this.status);
           if (this.status === 200 && this.readyState) {
             //  document.querySelector(
             //    "#output"
             //  ).innerHTML = `<h1>${this.responseText}</h1>`;
             const h1 = (document.createElement("h1").textContent =
               this.responseText);
                   const div = document.querySelector("#output");
                   div.append(h1);
             console.log(this.readyState);
             
           }
         }
         xhr.send();



    }


//status
//status 200 => corrct
//404=>not found
//403=>forbident  =>tahrim

//console.log(this.readyState);
//readyState
//0 =>unsend
//1 => open
//2 => received
//3 => loading
//4 => done 

//console.log(document.readyState);
//loading  dar hale lodaing
//interactive   load shode document but script dar hale loding hast
//complate   hame loda shod

console.log(this.readyState);