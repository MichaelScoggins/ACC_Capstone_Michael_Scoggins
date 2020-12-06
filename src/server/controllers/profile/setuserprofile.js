const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const setUserProfile = (req, res) => {
  const { exp, firstExp, freq, activityPrefs, nearbyStrains } = req.body;
  let sql =
    "UPDATE usersProfiles SET exp = ?, firstExp = ?, freq = ?, activityPrefs = ?, nearbyStrains = ? WHERE usersProfiles.user_id = ?";
  sql = mysql.format(sql, [
    exp,
    firstExp,
    freq,
    activityPrefs,
    nearbyStrains,
    req.params.id,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({
      message: `user ${req.params.id}'s profile has been updated`,
    });
  });
};

module.exports = {
  setUserProfile,
};
