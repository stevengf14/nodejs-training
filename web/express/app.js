const express = require("express");
const app = express();

let isLogin = () => true;

let logger = (req, res, next) => {
  console.log("Type", req.method);
  next();
};

let showIp = (req, res, next) => {
  console.log("IP: 127.0.0.1");
  next();
};

app.use(
  (req, res, next) => {
    if (isLogin()) {
      next();
    } else {
      res.send("You're not login");
    }
  },
  logger,
  showIp
);

// app.use(logger);

app.get("/", function (req, res) {
  res.send(`Hello world ${req.method}`);
});

app.post("/", function (req, res) {
  res.send(`Hello world ${req.method}`);
});

app.put("/", function (req, res) {
  res.send(`Hello world ${req.method}`);
});

app.delete("/", function (req, res) {
  res.send(`Hello world ${req.method}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
