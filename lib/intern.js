const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(id, name, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
