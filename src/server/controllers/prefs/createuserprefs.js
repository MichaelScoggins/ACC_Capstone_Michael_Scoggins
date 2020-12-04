const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createUserPrefs = (req, res) => {
  const {
    username,
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
  } = req.body;
  let sql =
    "INSERT INTO usersPrefs (username, flavorPrefs, posPrefs, negPrefs, medicalConditions, speciesPref) VALUES (?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    username,
    flavorPrefs,
    posPrefs,
    negPrefs,
    medicalConditions,
    speciesPref,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `userPrefs for user #${username} created` });
  });
};

module.exports = {
  createUserPrefs,
};
