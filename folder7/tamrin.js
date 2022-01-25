// function doil(rand=5) {
//     let ran=Math.floor(Math.random()*rand)+1
//     console.log(ran);
// }
// doil()


 function rollDieOld(numSides) {
  if (numSides === undefined) {
    
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDieOld(40))