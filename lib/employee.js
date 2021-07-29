class employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }

    getName(id) {
        return this.name;
    }

    getId(email) {
        return this.id;
    }

    getEmail(id) {
        return this.email;
    }

    getRole(id) {
        return this.role;
    }

}

module.exports = employee;