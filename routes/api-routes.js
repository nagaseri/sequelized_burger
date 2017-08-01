// Dependencies
// =============================================================
var Burger = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    Burger.findAll({}).then(function(results){
      res.json(results);
    })
  });

  app.post("/api/burgers", function(req, res) {
    Burger.create(req.body).then(function(results) {
      res.json(results);
  });

};
