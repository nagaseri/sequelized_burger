var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
//     res.render('index');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static files load from public dir
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burger_controller.js");

app.use("/", routes);

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});