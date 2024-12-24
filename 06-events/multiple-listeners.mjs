import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

myEmitter.on("myEvent", () => {
    console.log("First event listener");
});
myEmitter.on("myEvent", () => {
    console.log("Second event listener");
});

setTimeout(() => myEmitter.emit("myEvent"), 1500);

console.log(myEmitter.getMaxListeners());

myEmitter.on("mySecondEv", () => {
    console.log("This is my second Events");
})
setTimeout(() => myEmitter.emit("mySecondEv"), 2000)

console.log(myEmitter.eventNames());


