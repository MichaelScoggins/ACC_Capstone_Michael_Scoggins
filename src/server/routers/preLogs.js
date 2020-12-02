const express = require("express");
const createPreLogController = require("../controllers/preLogs/createprelog");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
// router.get("/", getAllProfilesController.getAllProfiles);

// router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", createPreLogController.createPreLog);

module.exports = router;
