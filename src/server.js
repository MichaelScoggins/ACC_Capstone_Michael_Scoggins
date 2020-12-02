require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./server/routers/users");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/prefs", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Higher Intentions");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
