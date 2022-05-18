const express = require("express");
require("./src/db/conn");
const Student = require("./src/models/students");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.post("/students", (req, res) => {
    console.log(req.body);
    res.send("Hello from the other side");

})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);

})