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


// function raceResults2(...others) {
//   console.log(`gold medal goes to: ${others[0]}`);
//   console.log(`silver medal goes to: ${others[1]}`);
//   console.log(`Thanks to: ${others}`);
// }
// // raceResults("Schumacher");
// // raceResults("Schumacher", "Hamilton");
// raceResults2("Schumacher", "Hamilton", "Vette", "Roseberg", "Button");




// const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// const [gold, silver, bronze, ...others] = scores;

// console.log(...others);
// console.log([...scores, 123, 145]);



///////psrsms




const categories = [
  {
    color: "#f3c32c",
    name: "Housing",
    score_out_of_10: 1,
  },
  {
    color: "#f3d630",
    name: "Cost of Living",
    score_out_of_10: 2.618,
  },
  {
    color: "#f4eb33",
    name: "Startups",
    score_out_of_10: 10,
  },
  {
    color: "#d2ed31",
    name: "Venture Capital",
    score_out_of_10: 10,
  },
  {
    color: "#7adc29",
    name: "Travel Connectivity",
    score_out_of_10: 3.6545000000000005,
  },
  {
    color: "#36cc24",
    name: "Commute",
    score_out_of_10: 4.687250000000001,
  },
  {
    color: "#19ad51",
    name: "Business Freedom",
    score_out_of_10: 8.671,
  },
  {
    color: "#0d6999",
    name: "Safety",
    score_out_of_10: 5.7155000000000005,
  },
  {
    color: "#051fa5",
    name: "Healthcare",
    score_out_of_10: 6.448999999999999,
  },
  {
    color: "#150e78",
    name: "Education",
    score_out_of_10: 8.6245,
  },
  {
    color: "#3d14a4",
    name: "Environmental Quality",
    score_out_of_10: 6.4815000000000005,
  },
  {
    color: "#5c14a1",
    name: "Economy",
    score_out_of_10: 6.5145,
  },
  {
    color: "#88149f",
    name: "Taxation",
    score_out_of_10: 4.488,
  },
  {
    color: "#b9117d",
    name: "Internet Access",
    score_out_of_10: 5.605500000000001,
  },
  {
    color: "#d10d54",
    name: "Leisure & Culture",
    score_out_of_10: 9.407,
  },
  {
    color: "#e70c26",
    name: "Tolerance",
    score_out_of_10: 8.012500000000001,
  },
  {
    color: "#f1351b",
    name: "Outdoors",
    score_out_of_10: 7.014,
  },
];

// console.log(categories.filter(category => category.score_out_of_10 >= 9));

// console.log(categories.filter(({ score_out_of_10 }) => score_out_of_10 >= 9));

// const films = categories.map(
//   film =>
//    `${film.name} with colour of ${film.color} is rated ${film.score_out_of_10}`
// );



// const alakis = categories.map(
//   ({ name, color, score_out_of_10 }) =>
//     `${name} with colour of ${color} is rated ${score_out_of_10}`
// );

// console.log(alakis);






////api  amir mostafa
// https://opentdb.com/