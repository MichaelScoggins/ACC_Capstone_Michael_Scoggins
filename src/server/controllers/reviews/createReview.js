const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createReview = (req, res) => {
  const {
    user_id,
    session_id,
    budDescript,
    goodFor,
    transformedMood,
    transformedExpectations,
    experience,
    transformedWorries,
    transformedGoals,
    disappointments,
    wouldChangeNextTime,
    wouldRecommend,
  } = req.body;
  let sql =
    "INSERT INTO usersExpReviews (user_id, session_id, budDescript, goodFor, transformedMood, transformedExpectations, experience, transformedWorries, transformedGoals, disappointments, wouldChangeNextTime, wouldRecommend) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    user_id,
    session_id,
    budDescript,
    goodFor,
    transformedMood,
    transformedExpectations,
    experience,
    transformedWorries,
    transformedGoals,
    disappointments,
    wouldChangeNextTime,
    wouldRecommend,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({
      message: `user ${user_id} session ${session_id} review added`,
    });
  });
};

module.exports = {
  createReview,
};
