const ROLE_ADMIN = 1;
const ROLE_USER = 2;


class User {
    username;
    password;
    role = ROLE_USER;

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
