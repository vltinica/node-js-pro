const http = require("http");
const {getHTML, getText, getComments, getError} = require("./handler");

const PORT = 5000;
exports.PORT = PORT;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/html") {
        return getHTML(req, res);
    }

    if (req.method === "GET" && req.url === "/text") {
        return getText(req, res);
    }

    if (req.method === "GET" && req.url === "/comments") {
        return getComments(req, res);
    }
    getError(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
