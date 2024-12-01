const fs = require("fs");

function timeStamp() {
  return performance.now().toFixed(2)
}

console.log("Program start");

setTimeout(() => console.log("Timeout_1", timeStamp()), 0);
setTimeout(() => console.log("Timeout_2", timeStamp()), 1000);

fs.writeFile(
  "./text.txt",
  "Hello Node.js",
  () => console.log("File written",
  timeStamp())
);

Promise.resolve().then(() => console.log("Promis_1", timeStamp()));

process.nextTick(() => console.log("Next tick 1", timeStamp()));

setImmediate(() => console.log("Immediat_1",timeStamp())
)
console.log("Program end")