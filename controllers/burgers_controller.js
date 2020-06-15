var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// create burger
router.post("/", function(req, res) {
  burger.insertOne([
    req.body.name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

// devour burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// delete burger
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
