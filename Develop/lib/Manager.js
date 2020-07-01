// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  getRole() {
    return this.role;
  }

  getOffice() {
    return this.officeNumber;
  }
}

// getOffice() {
//     return this.officeNumber;
// }

// Manager.prototype.getOffice = function() {
// return this.officeNumber;
// }
// Manager.prototype.getRole = function() {
//     return this.role;
// }

exports = Manager;