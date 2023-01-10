const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.post("/addHour", (req, res) => {
  const startTime = req.body;
  console.log(startTime);
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Server listening");
});
