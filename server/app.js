var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var postRouter = require("./routes/post");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => res.json({ hello: "Prueba Full Stack Developer Gustavo Flores - TCIT" }));
app.use(postRouter);

module.exports = app;
