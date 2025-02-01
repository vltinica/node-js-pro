import express from "express";
const app = express();

;

const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

app.use(logger)
app.use((req, res) => {
    res.send("<h2>This is express server!</h2>");
})

app.listen(5050, () => {
    console.log("server is listening at port 5050");
});
