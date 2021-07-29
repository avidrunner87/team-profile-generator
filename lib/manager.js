const employee = require('./employee');
const inquirer = require('inquirer');
class manager extends employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        super.role = 'Manager';
    }

    getOfficeNum(id) {
        return this.officeNumber;
    }

    getRole(id) {
        return this.role;
    }

    async createNew() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What the team manager\'s name?'
            },
            {
                type: 'input',
                name: 'mgrId',
                message: 'What is the team manager\'s employee ID?'
            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: 'What is the team manager\'s email address?'
            },
            {
                type: 'input',
                name: 'mgrOfficeNum',
                message: 'What is the team manager\'s office number?'
            }
        ])
        .then(res => {
            const Manager = new manager(res.mgrId, res.mgrName, res.mgrEmail, res.mgrOfficeNum);
            return Manager; 
        });
    }

}

module.exports = manager;