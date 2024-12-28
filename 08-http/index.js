const http = require("http");
const { text, json } = require("stream/consumers");

const PORT = 5000;

const comments = [
    { id: 100, text: "First comment", author: "Vladimir" },
    { id: 200, text: "Second comment", author: "Lili" },
    { id: 300, text: "Last comment", author: "Soso" },
];

const server = http.createServer((req, res) => {
    if (req.url === "/html") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><div>");
        res.write("<h1>Greeting from the HTTP server!</h1>");
        res.write("</div></body></html>");
        return res.end();
    }
    if (req.url === "/text") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end("This is my simple text");
    }
    if (req.url === "/json") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(comments))
    }
    res.statusCode = 404
    res.setHeader("Content-Type", "text/html")
    return res.end("<h2>Page not found!</h2>")
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
