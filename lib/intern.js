const employee = require('./employee');

class intern extends employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        super.role = 'Intern';
    }

    getSchool(id) {
        return this.school;
    }

    getRole(id) {
        return this.role;
    }
}

module.exports = intern;