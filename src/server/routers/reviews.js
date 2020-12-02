const express = require("express");
const createReviewController = require("../controllers/reviews/createreview");
// const { checkJwt } = require("../middleware");
const router = express.Router();

// user profile functions
// router.get("/", getAllProfilesController.getAllProfiles);

// router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", createReviewController.createReview);

module.exports = router;
