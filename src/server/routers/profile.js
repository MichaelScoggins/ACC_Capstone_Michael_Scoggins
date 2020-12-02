const express = require("express");
const createUserProfileController = require("../controllers/profile/createuserprofile");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
router.post("/", createUserProfileController.createUserProfile);

module.exports = router;
