var express = require("express");
var router = express.Router();

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

router.get("/", (req, res) => {
  res.render("index", {
    title: "pug",
    message: "Mitocode Nodejs | Pug",
    people,
  });
});

module.exports = router;
