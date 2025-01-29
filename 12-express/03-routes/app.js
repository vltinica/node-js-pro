const express = require("express");
const app = express();
const port = 5050;

const getRootHandler = (req, res) => {
    res.send("Get root route");
};

const getCommentsHandler = (req,res) => {
    res.send("Get comments route")
}

const postCommentHandler = (req, res) => {
    res.send("Post comments route")
}

app.get("/", getRootHandler);
app.get("/comments", getCommentsHandler)
app.post("/comments", postCommentHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
