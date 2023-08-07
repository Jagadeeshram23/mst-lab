const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send("<h1> Hello World </h1>");
});
app.listen(3000, () => {
console.log("Listening to port 3000");
});


//command to run: node ex2.js

//localhost:3000
