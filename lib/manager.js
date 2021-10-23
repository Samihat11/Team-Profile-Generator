const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNum) {
    super(id, name, email);
    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNum() {
    return this.officeNum;
  }
}
