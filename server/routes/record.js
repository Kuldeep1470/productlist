const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");



recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("nodesure");
  db_connect
    .collection("products")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("nodesure");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


module.exports = recordRoutes;
