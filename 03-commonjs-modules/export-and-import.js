const {myName, myHobbies} = require("./multiple-exports");

const myFrendsName = "Alice";


module.exports.myName = myName;
module.exports.myFrendsName = myFrendsName;
module.exports.myGreatHobbies = myHobbies;
