const express = require("express");
const app = express();

let people = [
  {
    id: 1,
    name: "Steven",
  },
  {
    id: 2,
    name: "Andres",
  },
  {
    id: 1,
    name: "Nicole",
  },
  {
    id: 1,
    name: "German",
  },
];

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("template", {
    title: "pug",
    message: "Mitocode Nodejs | HBS",
    people,
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
