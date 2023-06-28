const express = require("express");
const path = require("path");
const members = require("./Members");
const moment = require("moment");

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

app.use(logger);

// gets all members
app.get("/api/v1/members", (req, res) => {
  res.json(members);
});

app.listen(port, (err, response) => {
  console.log(`port: ${port}`);
});
