const mysql = require("mysql");
const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

const createReview = (req, res) => {
  // INSERT INTO USERS FIRST AND LAST NAME
  let sql = "INSERT INTO departments (dept_no, dept_name) VALUES (?, ?);";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [req.body.dept_no, req.body.dept_name]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { createReview };
