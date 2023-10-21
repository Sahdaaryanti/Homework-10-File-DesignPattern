const UserRepository = require('../repositories/users');

class UserController {
    async createUser(req, res) {
        const { id, email, gender, password, role } = req.body;

        try {
            const existingUser = await UserRepository.getUserById(id);
            if (existingUser) {
            return res.status(400).json({ error: 'Id sudah terdaftar pada user lain!' });
            }

            const newUser = await UserRepository.createUser({ id, email, gender, password, role });
            res.status(201).json({message: 'User berhasil dibuat!', user: newUser});
        } catch (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
        }
    }
    async getUsers(req, res) {
        try {
            const users = await UserRepository.getUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await UserRepository.getUserById(id);
            if (user) {
            res.status(200).json(user);
            } else {
            res.status(404).json({ error: 'User tidak ditemukan!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const { email, gender, password, role } = req.body;
        try {
            const updatedUser = await UserRepository.updateUser({ id, email, gender, password, role });
            res.status(200).json({message: 'User berhasil diupdate!', user : updatedUser});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteUser(req, res) {
    const { id } = req.params;
        try {
            const deletedUser = await UserRepository.deleteUser(id);
            if (deletedUser) {
            res.status(200).json({message: 'User berhasil dihapus!'});
            } else {
            res.status(404).json({ error: 'User tidak ditemukan!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    async getUsersView(req, res) {
        try {
          const users = await UserRepository.getUsers();
          res.render('users', { users });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}

module.exports = new UserController();
