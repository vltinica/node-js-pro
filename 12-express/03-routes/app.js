const express = require("express");
const app = express();
const port = 5050;



app.get("/", getRootHandler);

app.get("/users", getUserHandler);
app.post("/users", postUsersHandler);
app.get("/users/userId", getSingleUserHandler)



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
