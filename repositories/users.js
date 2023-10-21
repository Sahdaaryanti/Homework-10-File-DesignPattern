const UserModel = require('../models/users');

class UserRepository {
    async createUser({ id, email, gender, password, role }) {
        return UserModel.createUser({id, email, gender, password, role });
    }

    async getUsers() {
        return UserModel.getUsers();
    }

    async getUserById(id) {
        return UserModel.getUserById(id);
    }

    async updateUser({ id, email, gender, password, role }) {
        return UserModel.updateUser({ id, email, gender, password, role });
    }

    async deleteUser(id) {
        return UserModel.deleteUser(id);
    }
}

module.exports = new UserRepository();
