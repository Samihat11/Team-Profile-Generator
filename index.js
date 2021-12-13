const inquirer = require('inquirer');
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern');
const fs = require('fs');

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
  {
    type: 'input',
    name: 'name',
    message: 'Who is the manager of your team',
  },
  {
    type: 'number',
    name: 'id',
    message: (answers) => ` What is ${answers.name}'s employee ID`,
  },
  {
    type: 'input',
    name: 'email',
    message: (answers) => ` What is ${answers.name}'s email`,
  },
  {
    type: 'input',
    name: 'officeNum',
    message: (answers) => ` What is ${answers.name}'s office number`,
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
  } else {
    createEmployeeCard(team)
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

const createEmployeeCard = (team) => { 
  let employeeCard;
team.employees.forEach((employee) => {
   employeeCard = `
 <section class="has-background-grey-lighter mb-4 p-4">
   <h2 class="card-header-subtitle mb-2 is-size-5">${employee.getName()}</h2>
   <h3 class="card-header-subtitle">${employee.getRole()}</h3>
 </section>
 <section class="px-4 pb-4">
   <ul class="mb-4" id="info">
     <li class="mb-2">Employee ID: ${employee.getId()}</li>
     <li class="mb-2">Email: ${employee.getEmail()}</li>
     <li class="mb-2">${getInfo(employee)}</li>
   </ul>
 </section>
`;
 });
createHtml(employeeCard)
}

const getInfo = (employee) => {
  const role = employee.getRole();
  if(role === 'Manager') {
    return `<li>Office Number: ${employee.getOfficeNum()}</li>`
  }
  else if(role === 'Engineer') {
    return `<li>Github: ${employee.getGithub()}</li>`
  }
  else{
    return `<li>School: ${employee.getSchool()}</li>`
  }
}

const createHtml = (employeeCard) => {
  let output = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <title>${team.name}</title>
  </head>
  <body>
    <header class="hero is-primary mb-4">
      <h1 class="title is-2 has-text-dark has-text-centered p-2">Test</h1>
    </header>
    <main
      class="
        container
        is-flex is-justify-content-center is-flex-wrap-wrap is-fluid
      "
    >  
    <section class="card m-4">
    ${employeeCard}
    </section>
    </main>
  </body>
</html>`
fs.writeFile('./dist/index.html', output, (err) => {
  if (err) {
    console.log('There was an error creating your HTML file.');
    console.error(err);
    return;
  }
  console.log(`Your file was successfully created.`);
});
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const { teamName, name, id, email, officeNum } = answers;
    team.name = teamName;
    team.employees.push(new Manager(id, name, email, officeNum));
    addToTeam();
  } catch (err) {
    console.log(err);
  }
}

init();

/* 
 Validate user input
 Write test
*/
