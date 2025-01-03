const comments = require("./data");

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greeting from the HTTP server!</h1>");
    res.write("</div></body></html>");
    res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is my simple text");
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(comments));
}

function postComment(req, res) {
    res.setHeader("Content-Type", "text/plain");
    if (req.headers["content-type"] === "application/json") {
        let commontJSON = "";

        req.on("data", (chunk) => {
            commontJSON += chunk;
        });

        try {
            req.on("end", () => {
                comments.push(JSON.parse(commontJSON));
                res.statusCode = 200;
                res.end("Comment data was received");
            });
        } catch (error) {
            res.statusCode = 400;
            res.end("Invalid JSON");
        }
    } else {
        res.statusCode = 400;
        res.end("Data must be in the JSON format!");
    }
}

function getError(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>Page not found!</h2>");
}

module.exports = {
    getHTML,
    getText,
    getComments,
    postComment,
    getError,
};
