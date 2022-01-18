const numbers = [2, 4, 6, 7, 8, 9];
// numbers.push(12)
// console.log(numbers);
// numbers.splice(1, 0, "Feb").slice(2,4);
// console.log(numbers)

let n = numbers.slice(2);
console.log(n);

const animals = [1, 2, 3, 4, 5];

console.log(animals.slice(3, 5));

let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  colors: ["spaceGray", "black", "white"],
  spec: {
    owner: "vahid",
    age: 24,
    height: undefined,
  },
};

console.log(laptop.brand)
console.log(laptop["spec"]["owner"]);
console.log(laptop["spec"]["age"]);
console.log(laptop.colors[1][3]);