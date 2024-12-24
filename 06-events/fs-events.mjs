import fs from "fs";
import { EventEmitter } from "events";

const fileEmitter = new EventEmitter();

const filePath = "./first.txt"

fs.writeFile(filePath, "First file text", () => {
    fileEmitter.emit("writeComplete");
});

fileEmitter.on("writeComplete", () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile(filePath, "\nOne more line", () => {
        fileEmitter.emit("appendComplete")
    });
});

fileEmitter.on("appendComplete", () => {
    console.log(`Appendde text to the ${filePath} file`);
    fs.rename(filePath, "./renamed-first.txt", () => {
        fileEmitter.emit("renameComplete")
    });
})

fileEmitter.on("renameComplete", () => {
    console.log("File was rename");
    
})






