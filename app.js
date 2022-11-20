const express = require("express");
const morgan = require("morgan");
const { pathEx } = require("./path");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(pathEx("/tours"), tourRouter);

app.use(pathEx("/users"), userRouter);

module.exports = app;
