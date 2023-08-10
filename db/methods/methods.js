const connection = require("../../connection");

class Methods {
  constructor(connection) {
    this.connection = connection;
  }
  viewDept() {
    return this.connection.promise().query("SELECT * FROM department");
  }
  viewRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }
  viewEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addDept(name) {
    console.log("NAME IS" + name);
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", name);
  }
  addNewRole(title, salary) {
    console.log("THE TITLE IS" + JSON.stringify(title));
    return this.connection
      .promise()
      .query(
        `INSERT INTO role (title, salary) VALUES ("${title}", "${salary}")`
      );
  }
  addNewEmployee(name) {
    console.log(name);
    return this.connection.promise().query("INSERT INTO employee SET ?", name);
  }
  deleteDept(name) {
    return this.connection
      .promise()
      .query("DELETE FROM department WHERE name = ?", [name.delete]);
  }
}
module.exports = new Methods(connection);
