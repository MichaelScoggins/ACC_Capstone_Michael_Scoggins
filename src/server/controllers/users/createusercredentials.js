const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

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

module.exports = {
  createUserCredentials,
};
