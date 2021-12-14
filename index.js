const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern');
const { createEmployeeCard } = require('./lib/renderHtml');
const team = {
  name: '',
  employees: [],
};

const stringValidator = (input) => {
  if (!input) {
    return 'Your input should have atleast one character.';
  }
  return true;
};

const numberValidator = (input) => {
  if (isNaN(input)) {
    return 'Your input should be a number.';
  }
  return true;
};

const emailValidator = (input) => {
  let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  if (valid) {
    return true;
  }
  return 'Please enter a valid email.';
};

const questions = [
  {
    type: 'input',
    name: 'teamName',
    message: 'What is the name of your team?',
    default: 'My team',
    validate: stringValidator,
  },
  {
    type: 'input',
    name: 'name',
    message: 'Who is the manager of your team',
    validate: stringValidator,
  },
  {
    type: 'number',
    name: 'id',
    message: (answers) => ` What is ${answers.name}'s employee ID`,
    validate: numberValidator,
  },
  {
    type: 'input',
    name: 'email',
    message: (answers) => ` What is ${answers.name}'s email`,
    validate: emailValidator,
  },
  {
    type: 'input',
    name: 'officeNum',
    message: (answers) => ` What is ${answers.name}'s office number`,
    validate: stringValidator,
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
    validate: stringValidator,
  },
  {
    type: 'number',
    name: 'id',
    message: (answers) => ` What is ${answers.name}'s employee ID?`,
    validate: numberValidator,
  },
  {
    type: 'input',
    name: 'email',
    message: (answers) => ` What is ${answers.name}'s email?`,
    validate: emailValidator,
  },
  {
    type: 'input',
    name: 'github',
    message: (answers) => ` What is ${answers.name}'s github?`,
    when: (answers) => answers.teamMember === 'Engineer',
    validate: stringValidator,
  },
  {
    type: 'input',
    name: 'school',
    message: (answers) => ` What is ${answers.name}'s school's name?`,
    when: (answers) => answers.teamMember === 'Intern',
    validate: stringValidator,
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
  } else {
    console.log(team);
    createEmployeeCard(team);
  }
};

async function addEmployee() {
  try {
    const answers = await inquirer.prompt(questionsTwo);
    createTeamMember(answers);
    addToTeam();
  } catch (err) {
    console.log(err);
  }
}

const createTeamMember = (answers) => {
  let employee;
  const { teamMember, name, id, email, school, github } = answers;
  if (teamMember === 'Engineer') {
    employee = new Engineer(name, id, email, github);
  } else {
    employee = new Intern(name, id, email, school);
  }
  team.employees.push(employee);
};

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const { teamName, name, id, email, officeNum } = answers;
    team.name = teamName;
    team.employees.push(new Manager(name, id, email, officeNum));
    addToTeam();
  } catch (err) {
    console.log(err);
  }
}

init();

/* 
 Write test
*/
