import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

const timeoutListenerFn = (name) => {
    console.log(`Hi my ${name} and i am your frend!`);
};

myEmitter.on("timeOut", (name, numSec) => {
    console.log(`${name}, Timeout events you will see in ${numSec} seconds!`);
});

setTimeout(() => myEmitter.emit("timeOut", "Vladimir", 1), 1000);

setTimeout(() => myEmitter.emit("timeOut", "Lili", 3), 3000);

myEmitter.on("greeting", timeoutListenerFn);

setTimeout(() => {
    myEmitter.emit("greeting", "Nicolas");
}, 2000);

setTimeout(() => myEmitter.off("greeting", timeoutListenerFn), 1000);
