const employee = require('./employee');
const inquirer = require('inquirer');

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

    async createNew() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'intName',
                message: 'What is the intern\'s name?'
            },
            {
                type: 'input',
                name: 'intId',
                message: 'What is the intern\'s employee ID?'
            },
            {
                type: 'input',
                name: 'intEmail',
                message: 'What is the intern\'s email address?'
            },
            {
                type: 'input',
                name: 'intSchool',
                message: 'What is the intern\'s university?'
            }
        ])
        .then(res => {
            const Intern = new intern(res.intId, res.intName, res.intEmail, res.intSchool);
            return Intern; 
        });
    }
}

module.exports = intern;