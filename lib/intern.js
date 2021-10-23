const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(id, name, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
