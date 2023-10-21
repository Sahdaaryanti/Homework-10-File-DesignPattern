const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

router.post('/create', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/view', UserController.getUsersView);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
