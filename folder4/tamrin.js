const asgar = {
  ram: 8,
  hard: 128,
  cpu: "core2",
};
const coputer=({ram,hard,cpu})=>`this is ram ${ram} this is hard${hard}and ${cpu}`;
 console.log(coputer(asgar));



 const [winner, ...others] = scoreOfRallyRace;