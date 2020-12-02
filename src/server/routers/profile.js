const express = require("express");
const createUserProfileController = require("../controllers/profile/createuserprofile");
const getAllProfilesController = require("../controllers/profile/getallprofiles");
const getProfilesByIdController = require("../controllers/profile/getprofilebyid");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
router.get("/", getAllProfilesController.getAllProfiles);

router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", createUserProfileController.createUserProfile);

module.exports = router;
