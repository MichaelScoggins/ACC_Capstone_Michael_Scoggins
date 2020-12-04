const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const getPrefsByUsername = (req, res) => {
  let sql = "SELECT * FROM usersPrefs WHERE username = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getPrefsByUsername,
};
