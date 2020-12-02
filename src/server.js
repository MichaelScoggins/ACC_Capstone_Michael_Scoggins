require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./server/routers/users");
const prefsRouter = require("./server/routers/prefs");
const profileRouter = require("./server/routers/profile");
// const preLogsRouter = require("./server/routers/preLogs");
// const reviewsRouter = require("./server/routers/reviews");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/prefs", prefsRouter);
app.use("/profile", profileRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Higher Intentions");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
