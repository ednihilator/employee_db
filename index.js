const methods = require("./db/methods/methods");

const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "start",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add department",
      "add role",
      "add employee",
      "update employee role",
      "delete department",
    ],
  },
];

function start() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    switch (response.start) {
      case "view all departments":
        viewAllDepartments();
        break;
      case "view all roles":
        viewAllRoles();
        break;
      case "view all employees":
        viewAllEmployees();
        break;
      case "add department":
        addDeptartment();
        break;
      case "add role":
        addRole();
        break;
      case "add employee":
        addEmployee();
        break;
      case "delete department":
        deleteDepartment();
        break;
    }
  });
}

start();

function viewAllDepartments() {
  //response is in square brackets to return the first thing in the array
  methods
    .viewDept()
    .then(([response]) => {
      console.table(response);
    })
    .then(() => {
      start();
    });
}

function viewAllRoles() {
  methods
    .viewRoles()
    .then(([response]) => {
      console.table(response);
    })
    .then(() => {
      start();
    });
}

function viewAllEmployees() {
  //response is in square brackets to return the first thing in the array
  methods
    .viewEmployees()
    .then(([response]) => {
      console.table(response);
    })
    .then(() => {
      start();
    });
}

function addDeptartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What would you like to call this department?",
      },
    ])
    .then((response) => {
      console.log(response);
      methods
        .addDept(response)
        .then(() => {
          console.log(`Department ${response.name} created`);
        })
        .then(() => {
          methods
            .viewDept()
            .then(([response]) => {
              console.table(response);
            })
            .then(() => {
              start();
            });
        });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What would you like to call this role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is this role's salary?",
      },
    ])
    //i could use response.title, response.salary. this is the deconstructed method of doing the same thing
    .then(({ title, salary }) => {
      console.log(title, salary);
      methods
        .addNewRole(title, salary)
        .then(() => {
          console.log(`Role ${title} created`);
        })
        .then(() => {
          methods
            .viewRoles()
            .then(([response]) => {
              console.table(response);
            })
            .then(() => {
              start();
            });
        });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_first_name",
        message: "Employee first name?",
      },
      {
        type: "input",
        name: "employee_last_name",
        message: "Employee last name?",
      },
      {
        type: "input",
        name: "employee_title",
        message: "Employee job title?",
      },
      {
        type: "input",
        name: "employee_salary",
        message: "Employee salary?",
      },
      {
        type: "input",
        name: "employee_dept",
        message: "Employee department?",
      },
      {
        type: "input",
        name: "employee_manager",
        message: "Employee manager?",
      },
    ])
    .then((response) => {
      console.log(response.employee_first_name);
      methods
        .addNewEmployee(response)
        .then(() => {
          console.log(`Employee ${response.employee_first_name} created`);
        })
        .then(() => {
          methods
            .viewAllEmployees()
            .then(([response]) => {
              console.table(response);
            })
            .then(() => {
              start();
            });
        });
    });
}

function deleteDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "delete",
        message: "Which department would you like to delete?",
      },
    ])
    .then((response) => {
      methods.deleteDept(response).then(() => {
        methods
          .viewDept()
          .then(([response]) => {
            console.table(response);
          })
          .then(() => {
            start();
          });
      });
    });
}
