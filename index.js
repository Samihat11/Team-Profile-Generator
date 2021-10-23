const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "teamName",
    message: "What is the name of your team?",
    default: "My team",
  },
  { type: "input", name: "name", message: "Manager's name?" },
  {
    type: "number",
    name: "employeeId",
    message: (answers) => ` What is ${answers.name}'s employee ID`,
  },
  {
    type: "input",
    name: "email",
    message: (answers) => ` What is ${answers.name}'s email?`,
  },
  {
    type: "input",
    name: "officeNum",
    message: (answers) => ` What is ${answers.name}'s office number?`,
  },
  {
    type: "confirm",
    name: "addTeam",
    message: "Would you like to add another team member?",
  },
];
const questionsTwo = [
  {
    type: "list",
    name: "teamMember",
    choices: ["Engineer", "Intern"],
    message: "Who would you like to add?",
  },
  {
    type: "input",
    name: "name",
    message: (answers) =>
      `What is the name of the ${answers.teamMember} you would like to add?`,
  },
  {
    type: "number",
    name: "employeeId",
    message: (answers) => ` What is ${answers.teamMember}'s employee ID?`,
  },
  {
    type: "input",
    name: "email",
    message: (answers) => ` What is ${answers.teamMember}'s email?`,
  },
  {
    type: "input",
    name: "github",
    message: (answers) => ` What is ${answers.teamMember}'s github?`,
    when: (answers) => answers.teamMember === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: (answers) => ` What is ${answers.teamMembers}'s school's name?`,
    when: (answers) => answers.teamMember === "Intern",
  },
];
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    if (answers.addTeam) {
      addEmployee();
    } else {
      console.log("Done");
    }
  } catch (err) {
    console.log(err);
  }
}

async function addEmployee(answers) {
  try {
    const ans = await inquirer.prompt(questionsTwo);
    console.log(ans);
  } catch (err) {
    console.log(err);
  }
}

init();
