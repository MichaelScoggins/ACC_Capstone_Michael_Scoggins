const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createFavorite = (req, res) => {
  const { username, strainId, strainName, strainSpecies } = req.body;
  let sql =
    "INSERT INTO usersFavorites (username, strainId, strainName, strainSpecies) VALUES (?, ?, ?, ?)";
  sql = mysql.format(sql, [username, strainId, strainName, strainSpecies]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `user ${username} favorite added` });
  });
};

module.exports = {
  createFavorite,
};
