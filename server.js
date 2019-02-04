var express = require("express");
var path = require("path");

var app = express();

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});