import { season, temperatur } from "./named-exports.mjs";
import { humidity, isRaining } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";

import DEFAULT_SERVER from "./mexed-export.mjs";
import { USERNAME, PASSWORD } from "./mexed-export.mjs";

console.log("This is named-export.mjs!");

console.log(season);
console.log(temperatur);

getDataFromServer("https://jsonplaceholder.typicode.com/todos/1")
    .then((post) => console.log(post))
    .catch((err) =>console.error(err))
