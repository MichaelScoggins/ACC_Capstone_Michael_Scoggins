const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const getAllUserFavorites = (req, res) => {
  pool.query("SELECT * FROM usersFavorites", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllUserFavorites,
};
