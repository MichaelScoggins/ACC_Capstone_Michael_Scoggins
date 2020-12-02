const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllUserPrefs = (req, res) => {
  pool.query("SELECT * FROM usersPrefs", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

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
  createUserPrefs,
  setUserPrefs,
  getAllUserPrefs,
};
