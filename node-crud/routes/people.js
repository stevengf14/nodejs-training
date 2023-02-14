var express = require("express");
var router = express.Router();

let mongoose = require("./../config/conexion");
let Person = require("./../models/person");

router.post("/people/operate", (req, res, next) => {
  //console.log(req.body);

  if (req.body._id === "") {
    let per = new Person({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age,
    });

    per.save();
  } else {
    //console.log(req.body._id);
    Person.findByIdAndUpdate(
      req.body._id,
      { $set: req.body },
      { new: true },
      (err, model) => {
        if (err) throw err;
      }
    );
  }
  res.redirect("/");
});
module.exports = router;
