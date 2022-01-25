const div = document.querySelector("div");
for (let i= 0; i<= 100; i++) {
  
  const botuom = document.createElement("button");

  botuom.textContent="klick me";
  botuom.style.color='red';
  div.appendChild(botuom);
  console.log(botuom)

    
}