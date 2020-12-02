const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createPreLog = (req, res) => {
  const {
    user_id,
    preMood,
    sessionPurpose,
    expectToAchieve,
    lingeringWorries,
    goal,
    alreadyDone,
    todo,
  } = req.body;
  let sql =
    "INSERT INTO usersPreLogs (user_id,preMood,sessionPurpose,expectToAchieve,lingeringWorries,goal,alreadyDone,todo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    user_id,
    preMood,
    sessionPurpose,
    expectToAchieve,
    lingeringWorries,
    goal,
    alreadyDone,
    todo,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({
      message: `user ${user_id} session ${results.insertId} prelog added`,
    });
  });
};

module.exports = {
  createPreLog,
};
