var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
   db.Burger.create({
    burger_name: req.body.name
  }).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  })
});

module.exports = router;
