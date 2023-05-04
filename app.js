const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();

//db connection
require("./config/database");

//Midelware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//all route
app.use("/api", require("./routers/posts.router"));
app.use("/api", require("./routers/portfolio.router"));

//router error
app.use("*", (req, res, next) => {
  res.status(404).json({
    error: "404 page not found !!",
  });
  next();
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "somthing broke !",
    status: 500,
  });
  next();
});

module.exports = app;
