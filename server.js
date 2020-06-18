var express = require("express");
var burgerController = require("./controllers/burgers_controller.js");
var burger = require("./models/burger.js");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

app.use("/api/burgers", burgerController);

app.listen(PORT);
