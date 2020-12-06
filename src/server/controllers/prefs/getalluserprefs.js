const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const getAllUserPrefs = (req, res) => {
  pool.query("SELECT * FROM usersPrefs", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllUserPrefs,
};
