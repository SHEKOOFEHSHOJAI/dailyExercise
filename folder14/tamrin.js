const delay=(newColor,dealy) =>{
setTimeout(()=>{
document.body.style.backgroundColor = newColor;
},dealy)
};
delay("red",2000)
delay("green", 3000);
delay("yellow", 4000);

