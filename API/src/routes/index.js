const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser, login } = require('../controllers/index.controller.js'); 

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/login', login)
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser);

module.exports = router;