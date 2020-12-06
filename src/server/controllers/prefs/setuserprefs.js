const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const setUserPrefs = (req, res) => {
  const {
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
  } = req.body;
  let sql =
    "UPDATE usersPrefs SET flavorPrefs = ?, posPrefs = ?, negPrefs = ?, medicalConditions = ?, speciesPref = ? WHERE usersPrefs.user_id = ?";
  sql = mysql.format(sql, [
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
    req.params.id,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

module.exports = {
  setUserPrefs,
};
