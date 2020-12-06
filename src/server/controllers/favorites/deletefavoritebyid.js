const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const deleteFavoriteById = (req, res) => {
  let sql = "DELETE FROM usersFavorites WHERE strainId = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} favorite` });
  });
};

module.exports = {
  deleteFavoriteById,
};
