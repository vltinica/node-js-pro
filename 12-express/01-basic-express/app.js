const PORT = 5050;
const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.end("Response from Express to ...");
});

app.listen(PORT, () => {
    console.log(`Server was starded on port ${PORT}`);
});
