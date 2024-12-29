const http = require("http");
const {
    getHTML,
    getText,
    getComments,
    postComment,
    getError} = require("./handler");

const PORT = 5001;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/html") {
        return getHTML(req, res);
    }

    if (req.method === "GET" && req.url === "/text") {
        return getText(req, res);
    }

    if (req.method === "GET" && req.url === "/comment") {
        return getComments(req, res);
    }
    if (req.method === "POST" && req.url === "/comment") {
        return postComment(req, res);
    }

    getError(req, res);
});

server.on("error", (err) => {
    console.error("Server error:", err);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
