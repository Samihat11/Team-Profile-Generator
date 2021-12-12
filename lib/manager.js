const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, officeNum) {
    super(id, name, email);
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
