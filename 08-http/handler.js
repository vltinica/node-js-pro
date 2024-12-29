const comments = require("./data")

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greeting from the HTTP server!</h1>");
    res.write("</div></body></html>");
    return res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("This is my simple text");
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(comments));
}

function getError(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    return res.end("<h2>Page not found!</h2>");
}

module.exports = {
    getHTML, getText, getComments, getError
}