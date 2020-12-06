const express = require("express");
const createReviewController = require("../controllers/reviews/createreview");
const getReviewByIdController = require("../controllers/reviews/getreviewbyid");
// const { checkJwt } = require("../middleware");
const { authenticate } = require("../middleware");
const router = express.Router();

// user profile functions
// router.get("/", getAllProfilesController.getAllProfiles);

// router.get("/:id", getProfilesByIdController.getProfileById);

router.post("/", authenticate, createReviewController.createReview);
router.get("/:id", authenticate, getReviewByIdController.getReviewById);

module.exports = router;
