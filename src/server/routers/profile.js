const express = require("express");
const createUserProfileController = require("../controllers/profile/createuserprofile");
const getAllProfilesController = require("../controllers/profile/getallprofiles");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
router.get("/", getAllProfilesController.getAllProfiles);
router.post("/", createUserProfileController.createUserProfile);

module.exports = router;
