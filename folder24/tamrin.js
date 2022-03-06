// let rectangle=class SHEKOO{
//     constructor(height,width){ 2
//      this.height=height
//      this.width=width
//     }
// }
// console.log(rectangle.name);




//use strict
//https://pvlearn.com/
// "use strict";
// var arguments = 3.14; 


// چرا باید درون کلاس از کانسترکتور استفاده کنیم
////class
class colur{
 constructor(r,g,b){
    this.red=r
    this.green=g
    this.blue=b
 }
 iinerrgb(){
     const{red,green,blue}=this
     console.log(this);
     return `rgb(${red},${green},${blue})`;
 }
}
const red=new colur(100,70,80)
console.log(red.iinerrgb());
document.body.style.backgroundColor = red.iinerrgb();


//arr
const arr = [1, 2, 3];
arr.push(5);
//arr.pop();
console.log(arr);
