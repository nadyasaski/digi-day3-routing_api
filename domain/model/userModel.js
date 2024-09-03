const { v4: uuidv4 } = require('uuid');

class User {
    constructor(name, password, email) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

module.exports = User;
