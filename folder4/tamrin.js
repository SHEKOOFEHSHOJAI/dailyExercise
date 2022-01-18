// const asgar = {
//   ram: 8,
//   hard: 128,
//   cpu: "core2",
// };
// const coputer=({ram,hard,cpu})=>`this is ram ${ram} this is hard${hard}and ${cpu}`;
//  console.log(coputer(asgar));


// const scoreOfRallyRace = [3500, 3799, 4000, 8000, 8500, 9000, 12000];
//  const [winner, ...others] = scoreOfRallyRace;
// let r=scoreOfRallyRace[0]=6;
// console.log(scoreOfRallyRace);



// const  passenger = {
//   drunk: false,
//   age: 20,
//   isDrivingLicence: true,
// };

// const { cylinder, passengers, ...others } = passenger;

// let val=passenger.cylinder = 4;
// console.log((others.door = 4));
// console.log(cylinder);



// const[first,...me]=["ali",4,6,90,"60"];
// const item=[...me]
// console.log(item)
// const item1 = { ...me };
// console.log(item1);

// const obj = {
//   ali: "dat",
//   null: "jafar",
// };
// console.log(obj['ali']);



const person = {
  firstName: "naser",
  lastName: "Gyllenhaal",
  age: 40,
  born: "italy",
};

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person["first" + "Name"]);



let firstName = "age";
// console.log(person[firstName]);






let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}

// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

function call(){
roll()
roll()
roll();
}
function roll(){
    const rol=(Math.random()*5)+1
    console.log(rol)

}
call(roll)