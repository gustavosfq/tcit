var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var postRouter = require("./routes/post");
const handleErrors = require("./middlewares/errorHandler");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.get("/", (req, res) =>
    res.json({ hello: "Prueba Full Stack Developer Gustavo Flores - TCIT" })
);
app.use(postRouter);

app.use(handleErrors);

module.exports = app;
