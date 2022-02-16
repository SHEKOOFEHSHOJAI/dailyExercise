// document.querySelector("button").addEventListener("click", local);

// function local() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "data.text", true);

//   xhr.onload = function name(params) {
//     if (this.status === 200) {
//       const h1 = (document.createElement("h1").textContent = this.responseText);
//       const div = document.querySelector("output");
//       div.append(h1);
//     }
//   };
//   xhr.send();
// }

//status
//status 200 => corrct
//404=>not found
//403=>forbident  =>tahrim
//readyState
//
console.log(this.status);