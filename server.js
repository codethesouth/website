var express = require("express");
var path = require("path");
var routes = require("./routes/index");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");
app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

var server = app.listen(app.get("port"));

module.exports = app;