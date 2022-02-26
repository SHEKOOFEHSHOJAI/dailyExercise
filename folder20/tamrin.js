



//Mutate an Array Declared with const

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);


////
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  // s=[2,5,7]
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  console.log(s);

}
editInPlace();

//result
//[2, 5, 7];


//Prevent Object Mutation

///As seen in the previous challenge,
// const declaration alone doesn't really protect 
//your data from mutation. To ensure your data doesn't
// change, JavaScript provides
// a function Object.freeze to prevent data mutation.















///Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;
// Only change code above this line
console.log(increment(5, 1));
console.log(increment(5));





