const inquirer = require("inquirer");

const questions = [
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

function start() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

start();
