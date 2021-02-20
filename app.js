const express = require("express");
const morgan = require("morgan");

const app = express();

// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan("dev"));

//This is the final request handler
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(8000, () => {
  console.log(
    "Express server is listening on port 8000! http://localhost:8000/"
  );
});

app.get("/burgers", (req, res) => {
  res.send("We have juicy cheese burgers!");
});

app.get("/pizza/pepperoni", (req, res) => {
  res.send("Your pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("We don't serve that here. Never call again!");
});
