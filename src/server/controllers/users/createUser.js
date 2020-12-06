const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createUser = (req, res) => {
  const { firstName, lastName, username } = req.body;
  let sql =
    "INSERT INTO users (firstName, lastName, username) VALUES (?, ?, ?)";
  sql = mysql.format(sql, [firstName, lastName, username]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  createUser,
};
