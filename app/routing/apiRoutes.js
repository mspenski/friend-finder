var path = require("path");

var answerData = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(answerData);
  })


  app.post("/api/friends", function (req, res) {
    answerData.push(req.body);
    res.json(true)
  })
}