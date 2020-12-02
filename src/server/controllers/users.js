const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createUser = (req, res) => {
  const { firstName, lastName, username, email } = req.body;
  let sql =
    "INSERT INTO users (firstName, lastName, username, email) VALUES (?, ?, ?, ?)";
  sql = mysql.format(sql, [firstName, lastName, username, email]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const createUserCredentials = (req, res) => {
  const { user_id, username, password } = req.body;
  let sql =
    "INSERT INTO usersCredentials (user_id, username, password) VALUES (?, ?, ?)";
  sql = mysql.format(sql, [user_id, username, password]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

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
    return res.json({ message: `${results.user_id} added` });
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
    return res.status(204).json();
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

const updateUserById = (req, res) => {
  const { firstName, lastName } = req.body;
  let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?";
  sql = mysql.format(sql, [firstName, lastName, req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteUserByFirstName = (req, res) => {
  let sql = "DELETE FROM users WHERE first_name = ?";
  sql = mysql.format(sql, [req.params.first_name]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserByFirstName,
  createUserProfile,
  createUserCredentials,
  createUserPrefs,
  setUserPrefs,
};
