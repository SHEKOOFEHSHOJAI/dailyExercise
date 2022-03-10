// console.log(process.argv);

//https://www.aparat.com/v/WjYz0
// function flag(flag) {
//     var ind = process.argv.indexOf(flag);
//     let b=ind === -1 ? null : process.argv[ind++];
//     console.log(b);
// }

// let us=flag('--user');
// let gr=flag('--greeting');

// if (!us || !gr) {
//     console.log("no user no greeting");
    
// }
// else{
//     console.log(`wellcome${us}and ${gr}`);
// }

//png dom,...
//https://www.javascripttutorial.net/wp-content/uploads/2020/01/Document-Object-Model-in-JavaScript.png

/////js2-2
// const foxhound = { legs: 4, family: "English, American" };
// const bergamasco = { isFurry: true, family: "Persian sheepdog breed" };

// // const rareDogs = { ...foxhound, color: "brown white black" };
// // console.log(rareDogs);

// const rareDogs = { family: "mixed", ...foxhound, ...bergamasco };
// console.log(rareDogs);



////
// console.log({ ...[1, 2, 3] });
// console.log( {..."hello"} );



// const dataFromForm = {
//   email: "fake@gmail.com",
//   password: "fakeFake123",
//   username: "fakeFunk",
// };

// const updateUser = {
//   ...dataFromForm,
//   id: "1234",
//   isAdmin: false,
//   email: "notFake@gmail.com",
// };

// console.log(updateUser);


//  function sum(...nums) {
//   console.log(nums);
//   return console.log(nums.reduce((acc, curr) => acc + curr));
// }

// sum(1, 2, 3, 4, 5, 6, 8, 12, 100);


function raceResults(gold, silver, ...others) {
  console.log(`gold medal goes to: ${gold}`);
  console.log(`silver medal goes to: ${silver}`);
  console.log(`Thanks to: ${others}`);
}
raceResults("Schumacher");
raceResults("Schumacher", "Hamilton");
raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button");
