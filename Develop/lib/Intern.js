// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, id, email, school, department) {
      super(name, id, email, department);
      
      this.school = school;
      this.role = 'Intern';
    }
  
    getRole() {
      return this.role;
    }
  
    getSchool() {
      return this.school;
    }
  }
  
  module.exports = Intern;