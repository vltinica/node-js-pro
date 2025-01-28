const express = require("express");
const app = express();
const port = 5050;

const firstHandler = (req, res, next) => {
    console.log("First handler");
    next();
}
const secondHandler = (req, res) => {
    console.log("Second handler");
    res.send("Respons from Express!")
}

app.get("/", firstHandler, secondHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
