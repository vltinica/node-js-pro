import stream from "stream";
import fs from "fs"

const filePath = "./files/sddin-dump.txt";
const writeStream = fs.createWriteStream(filePath)

process.stdin.pipe(writeStream)
