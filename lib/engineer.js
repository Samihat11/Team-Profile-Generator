const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(id, name, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
