const employee = require('./employee');

class intern extends employee {
    constructor(school) {
        this.school = school;
    }

    getSchool(id) {
        return this.school;
    }

    getRole(id) {
        return 'Intern';
    }
}