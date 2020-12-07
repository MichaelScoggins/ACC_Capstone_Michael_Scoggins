require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./server/routers/users");
const prefsRouter = require("./server/routers/prefs");
const favoritesRouter = require("./server/routers/favorites");
const profileRouter = require("./server/routers/profile");
const preLogsRouter = require("./server/routers/preLogs");
const reviewsRouter = require("./server/routers/reviews");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");

const app = express();
const port = process.env.PORT || 5500;
app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/prefs", prefsRouter);
app.use("/favorites", favoritesRouter);
app.use("/profile", profileRouter);
app.use("/prelogs", preLogsRouter);
app.use("/reviews", reviewsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Higher Intentions");
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
