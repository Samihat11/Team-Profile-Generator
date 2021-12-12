const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern');

const team = {
  name: '',
  employees: [],
};

const questions = [
  {
    type: 'input',
    name: 'teamName',
    message: 'What is the name of your team?',
    default: 'My team',
  },
  { type: 'input', name: 'managerName', message: "Who is the manager of your team" },
  {
    type: 'number',
    name: 'id',
    message: (answers) => ` What is ${answers.managerName}'s employee ID`,
  },
  {
    type: 'input',
    name: 'email',
    message: (answers) => ` What is ${answers.managerName}'s email`,
  },
  {
    type: 'input',
    name: 'officeNum',
    message: (answers) => ` What is ${answers.managerName}'s office number`,
  },
];
const questionsTwo = [
  {
    type: 'list',
    name: 'teamMember',
    choices: ['Engineer', 'Intern'],
    message: 'Who would you like to add?',
  },
  {
    type: 'input',
    name: 'name',
    message: (answers) =>
      `What is the name of the ${answers.teamMember} you would like to add?`,
  },
  {
    type: 'number',
    name: 'id',
    message: (answers) => ` What is ${answers.name}'s employee ID?`,
  },
  {
    type: 'input',
    name: 'email',
    message: (answers) => ` What is ${answers.name}'s email?`,
  },
  {
    type: 'input',
    name: 'github',
    message: (answers) => ` What is ${answers.name}'s github?`,
    when: (answers) => answers.teamMember === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: (answers) => ` What is ${answers.name}'s school's name?`,
    when: (answers) => answers.teamMember === 'Intern',
  },
];

const addToTeam = async () => {
  const response = await inquirer.prompt({
    type: 'confirm',
    name: 'addTeam',
    message: 'Would you like to add another team member?',
  });
  if (response.addTeam) {
    addEmployee();
  }
  else{
    console.log(team)
  }
};

async function addEmployee() {
  try {
    const answers = await inquirer.prompt(questionsTwo);
    createTeamMember(answers)
    addToTeam();
  } catch (err) {
    console.log(err);
  }
}

const createTeamMember = async (answers) => {
  let employee;
  const {teamMember, name, id , email, school, github} = answers
  if(teamMember === 'Engineer'){
    employee = new Engineer(name, id, email, github)
  }
  else{
    employee = new Intern(name, id, email, school)
  }
  team.employees.push(employee)
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const {teamName, name, id, email, officeNum} = answers
    team.name = teamName;
    team.employees.push(new Manager(id, name, email, officeNum))
    addToTeam();
  } catch (err) {
    console.log(err);
  }
}

init();

/* 
 Validate user input
 Write to file
 Write test
*/