const employee = require('./employee');
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
}

module.exports = engineer;