import stream from "stream";
import {Transform} from "stream";
import fs from "fs"


const upperCaseStream = new Transform({
    transform: function(chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        // cb(null,upperCased)
        // const reversedWord = word.split('').reverse().join('');
        const reversedWord = upperCased.split('').reverse().join('');
        cb(null,reversedWord)
    }
})

process.stdin.pipe(upperCaseStream).pipe(process.stdout)
// const filePath = "./files/sddin-dump.txt";
// const writeStream = fs.createWriteStream(filePath)

// process.stdin.pipe(writeStream)
