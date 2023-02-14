var express = require("express");
var router = express.Router();

let mongose = require("./../config/connection");
let Person = require("./../models/person");

router.get("/", function (req, res, next) {
  Person.find((err, people) => {
    // console.log(people);
    if (err) throw err;
    res.render("index", { people });
  });
});

router.ger("people/new", (req, res, next) => {
  res.render("people", {});
});

router.get("people/modify/:id", (req, res, next) => {
  let personId = req.params.id;
  Person.findOne({ _id: personId }, (err, person) => {
    console.log(person);
    if (err) throw err;
    res.render("index", { people });
  });
});

router.get("people/delete/:id", (req, res, next) => {
  let personId = req.params.id;
  Person.remove({ _id: personId }, (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
