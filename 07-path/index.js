const { log } = require("console");
const path = require("path");

const filePath = "/Users/vltin/OneDrive/Bureau/node-js-pro/07-path/index.js";
const textFilePath =
    "/Users/vltin/OneDrive/Bureau/node-js-pro/07-path/file.txt";
const relativePath = "./node-js-pro/07-path";

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(textFilePath));
console.log(path.isAbsolute(relativePath)); //*false

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));

const parsePath = path.parse(filePath)

console.log(filePath);

console.log(path.join(parsePath.dir,`renamed-${parsePath.name}.mjs`));
