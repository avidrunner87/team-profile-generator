class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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

    getRole() {
        return 'Employee';
    }

}

module.exports = employee;