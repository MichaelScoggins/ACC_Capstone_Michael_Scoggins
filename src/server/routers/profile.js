const express = require("express");
const createUserProfileController = require("../controllers/profile/createuserprofile");
const getAllProfilesController = require("../controllers/profile/getallprofiles");
const getProfilesByUsernameController = require("../controllers/profile/getprofilebyusername");
const setUserProfile = require("../controllers/profile/setuserprofile");
// const { checkJwt } = require("../middleware");
const { authenticate } = require("../middleware");
const router = express.Router();

// user profile functions
router.get("/", authenticate, getAllProfilesController.getAllProfiles);

router.get(
  "/:id",
  authenticate,
  getProfilesByUsernameController.getProfileByUsername
);

router.post("/", authenticate, createUserProfileController.createUserProfile);

router.put("/:id", authenticate, setUserProfile.setUserProfile);

module.exports = router;
