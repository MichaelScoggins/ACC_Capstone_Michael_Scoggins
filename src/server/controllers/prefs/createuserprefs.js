const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createUserPrefs = (req, res) => {
  const {
    user_id,
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
  } = req.body;
  let sql =
    "INSERT INTO usersPrefs (user_id, flavorPrefs, posPrefs, negPrefs, medicalConditions, speciesPref) VALUES (?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    user_id,
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `userPrefs for user #${user_id} created` });
  });
};

module.exports = {
  createUserPrefs,
};
