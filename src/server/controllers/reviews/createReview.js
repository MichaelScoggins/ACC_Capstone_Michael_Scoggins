const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createReview = (req, res) => {
  const {
    username,
    session_id,
    strainId,
    strainName,
    strainSpecies,
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
    "INSERT INTO usersExpReviews (username, session_id, strainId, strainName, strainSpecies, budDescript, goodFor, transformedMood, transformedExpectations, experience, transformedWorries, transformedGoals, disappointments, wouldChangeNextTime, wouldRecommend) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    username,
    session_id,
    strainId,
    strainName,
    strainSpecies,
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
      message: `user ${username} session ${session_id} review added`,
    });
  });
};

module.exports = {
  createReview,
};
