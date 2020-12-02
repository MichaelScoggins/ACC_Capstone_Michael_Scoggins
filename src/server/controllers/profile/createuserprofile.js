const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createUserProfile = (req, res) => {
  const {
    user_id,
    exp,
    firstExp,
    freq,
    activityPrefs,
    nearbyStrains,
  } = req.body;
  let sql =
    "INSERT INTO usersProfiles (user_id, exp, firstExp, freq, activityPrefs, nearbyStrains) VALUES (?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    user_id,
    exp,
    firstExp,
    freq,
    activityPrefs,
    nearbyStrains,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `profile added` });
  });
};

module.exports = {
  createUserProfile,
};
