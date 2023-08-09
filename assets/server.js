const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const questions = [
  {
    type: "input",
    message: "What would you like to do?",
    name: "text",
  },
  {
    type: "list",
    message: "What would you like to do?",
    name: "start",
    choices: [
      "view all departments",
      "view all roles",
      "add a department",
      "add a role",
      "add empoyee",
      "update employee role",
    ],
  },
];

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "",
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

// Create a employee
app.post("/api/new-employee", ({ body }, res) => {
  const sql = `INSERT INTO employees (emp_name)
    VALUES (?)`;
  const params = [body.emp_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Read all employees
app.get("/api/employee", (req, res) => {
  const sql = `SELECT emp_id, emp_name AS name FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
// Delete an employee
app.delete("/api/employee/:id", (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// Update employee
app.put("/api/employee/:id", (req, res) => {
  const sql = `UPDATE employees SET employee = ? WHERE id = ?`;
  const params = [req.body.review, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
