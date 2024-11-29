console.log("Program start");

setTimeout(() => console.log("Timeout_1"), 0);

Promise.resolve().then(() => console.log("Promis_1"));

console.log("Program end");
