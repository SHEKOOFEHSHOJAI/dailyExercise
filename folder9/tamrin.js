
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   //   return mpg*fuelLeft>=50?true:false
//   return distanceToPump <= mpg * fuelLeft ? true : false;
// };



//////////////////

// function testEven(n) {
//   //Your awesome code here!
//   return n % 2 === 0;
// }


////////Take an array and remove every second element from the array. Always keep the first element and start removing with the next element


// function removeEveryOther(arr) {
//   //your code here
//   const ar = ["Hello", "Goodbye", "Hello Again"];
//   console.log(arr);
// //  console.log(ar.remove()); 
// }


///////Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   // Code here
//   let result = 0;
//   for (let i = 1; i <= num; i++) result += i;
//   return result;
// };



///////
console.log("salam");
const ages=[82, 15, 6, 38, 35];
function differenceInAges(ages){
//  return
 console.log( [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)]);
}
 differenceInAges(ages);







///Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

//The geese are any strings in the following array, which is pre-populated in your solution:


//  function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(item=> !geese.includes(item))
//   // return an array containing all of the strings in the input array except those that match strings in geese
// };
//  gooseFilter(birds);






//////////

// var Ball = function (ballType) {
//   this.ballType = ballType || "regular";
// };
// console.log(ball);


///////
let Ball = function (ballType) {
 console.log( this.ballType = typeof ballType !== "undefined" ? ballType : "regular");
};
console.log(Ball);
