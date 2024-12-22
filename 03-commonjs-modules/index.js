const greeting = require("./single-export");
const {
    myName: myOtherName,
    myFrendsName,
    myGreatHobbies,
} = require("./export-and-import");

const exportedObject = require("./multiple-exports");
const { myName, myHobbies, myFavoriteNumber } = exportedObject;

myHobbies.push("climbing");
console.log(myHobbies);

greeting(myName);

console.log(myName);
// console.log(myHobbies);
console.log(myFavoriteNumber);
console.log(myGreatHobbies);
