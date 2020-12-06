const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const updateUserById = (req, res) => {
  const { firstName, lastName } = req.body;
  let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?";
  sql = mysql.format(sql, [firstName, lastName, req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

module.exports = {
  updateUserById,
};
