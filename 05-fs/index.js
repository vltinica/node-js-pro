const fs = require("fs/promises");

const dataToWrite = "Hello Node.js";

fs.writeFile("./file.txt", dataToWrite)
    .then(() => console.log("done"))
    .catch((error) => console.log(error));
