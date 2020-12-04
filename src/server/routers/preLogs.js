const express = require("express");
const createPreLogController = require("../controllers/preLogs/createprelog");
const getPreLogByUsernameController = require("../controllers/preLogs/getprelogsbyusername");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
// router.get("/", getAllProfilesController.getAllProfiles);

// router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", createPreLogController.createPreLog);
router.get("/:id", getPreLogByUsernameController.getPreLogsByUsername);

module.exports = router;
