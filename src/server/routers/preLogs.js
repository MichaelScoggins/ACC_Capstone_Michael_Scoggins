const express = require("express");
const createPreLogController = require("../controllers/preLogs/createprelog");
const getPreLogByIdController = require("../controllers/preLogs/getprelogbyid");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
// router.get("/", getAllProfilesController.getAllProfiles);

// router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", createPreLogController.createPreLog);
router.get("/:id", getPreLogByIdController.getPreLogById);

module.exports = router;
