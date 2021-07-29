const employee = require('./employee');

class engineer extends employee {
    constructor(github) {
        this.github = github;
    }

    getGithub(id) {
        return this.github;
    }

    getRole(id) {
        return 'Engineer';
    }
}