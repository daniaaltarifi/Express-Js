const express = require("express");
const cors = require("cors");
const app = express();
const port = 7070;
const booksRouter = require("./routes/routing");

app.use(cors());
app.use(express.json()); // use express.json() to parse request body
app.use("/", booksRouter);

app.get("/", (req, res) => {
  res.send(`your port is running on port ${port}`);
});

app.listen(port, (req, res) => {
  console.log(` your port is running on port ${port}`);
});
