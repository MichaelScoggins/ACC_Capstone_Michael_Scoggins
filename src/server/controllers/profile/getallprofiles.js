const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const getAllProfiles = (req, res) => {
  pool.query("SELECT * FROM usersProfiles", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllProfiles,
};
