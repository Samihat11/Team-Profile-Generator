const fs = require('fs');

const createEmployeeCard = (team) => { 
    let teamName = team.name
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
  createHtml(employeeCard, teamName)
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

  const createHtml = (employeeCard, teamName) => {

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
      <title>${teamName}</title>
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
  
module.exports = {createHtml, createEmployeeCard, getInfo}