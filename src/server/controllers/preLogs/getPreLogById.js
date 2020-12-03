const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const getPreLogById = (req, res) => {
  let sql = "SELECT * FROM usersPreLogs WHERE username = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getPreLogById,
};
