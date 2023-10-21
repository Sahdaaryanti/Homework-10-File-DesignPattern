const db = require('../config/dbConfig');

class UserModel {
    async createUser({ id, email, gender, password, role }) {
        try {
            const existingUser = await this.getUserById(id);
            if (existingUser) {
                throw new Error('Id sudah terdaftar pada user lain!');
            }
            const query = 'INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [id, email, gender, password, role];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
    async getUsers() {
        const query = 'SELECT * FROM users';
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        const query = 'SELECT * FROM users WHERE id = $1';
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async updateUser({ id, email, gender, password, role }) {
        const query = 'UPDATE users SET email = $2, gender = $3, password = $4, role = $5 WHERE id = $1 RETURNING *';
        const values = [id, email, gender, password, role];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserModel();