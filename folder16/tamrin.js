 document.querySelector("#button").addEventListener("click",loadData)
    //made shy
   

    function loadData() {
      
         const xhr = new XMLHttpRequest();
         //open rqust

         xhr.open("GET", "data.text", true);

         ///load

        xhr.onload = function () {  
           if (this.status === 200) {
             document.querySelector(
               "#output"
             ).innerHTML = `<h1>${this.responseText}</h1>`;
             console.log("ok");
           }
         }
         xhr.send();



    }
   