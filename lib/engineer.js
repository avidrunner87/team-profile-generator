const employee = require('./employee');
const inquirer = require('inquirer');
class engineer extends employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
        super.role = 'Engineer';
    }

    getGithub(id) {
        return this.github;
    }

    getRole(id) {
        return this.role;
    }

    async createNew() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engName',
                message: 'What is the engineer\'s name?'
            },
            {
                type: 'input',
                name: 'engId',
                message: 'What is the engineer\'s employee ID?'
            },
            {
                type: 'input',
                name: 'engEmail',
                message: 'What is the engineer\'s email address?'
            },
            {
                type: 'input',
                name: 'engGithub',
                message: 'What is the engineer\'s Github username?'
            }
        ])
        .then(res => {
            const Engineer = new engineer(res.engId, res.engName, res.engEmail, res.engGithub);
            return Engineer; 
        });
    }

}

module.exports = engineer;