const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.json(`Nome recebido ${name}`);
});

app.listen(port, () => {
  console.log(`listening ${port}`);
});
