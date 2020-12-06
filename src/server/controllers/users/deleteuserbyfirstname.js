const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const deleteUserByFirstName = (req, res) => {
  let sql = "DELETE FROM users WHERE first_name = ?";
  sql = mysql.format(sql, [req.params.first_name]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  deleteUserByFirstName,
};
