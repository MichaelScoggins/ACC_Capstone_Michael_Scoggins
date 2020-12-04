const express = require("express");
const createUserProfileController = require("../controllers/profile/createuserprofile");
const getAllProfilesController = require("../controllers/profile/getallprofiles");
const getProfilesByUsernameController = require("../controllers/profile/getprofilebyusername");
const setUserProfile = require("../controllers/profile/setuserprofile");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
router.get("/", getAllProfilesController.getAllProfiles);

router.get("/:id", getProfilesByUsernameController.getProfileByUsername);

router.post("/", createUserProfileController.createUserProfile);

router.put("/:id", setUserProfile.setUserProfile);

module.exports = router;
