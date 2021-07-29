const employee = require('./employee');

class manager extends employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        super.role = 'Manager';
    }

    getRole(id) {
        return this.role;
    }
}

module.exports = manager;